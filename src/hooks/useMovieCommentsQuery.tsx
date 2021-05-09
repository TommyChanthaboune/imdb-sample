/* eslint-disable @typescript-eslint/no-unused-vars */
import { useEffect } from 'react';
import { useQuery, useMutation } from '@apollo/react-hooks';
import { gql, ApolloError } from '@apollo/client';
import { IComment, IComments, IAddComment, ICommentMeta } from '../interfaces';

interface IMovieCommentsQueryReturn {
  commentData: IComment[];
  commentError: ApolloError | undefined;
  commentLoading: Boolean;
  commentCount: number | undefined;
  commentRefetch: any;
  addComment: any;
}

const COMMENT_QUERY = gql`
  query allComments($movie_id: ID) {
    allComments(filter: { movie_id: $movie_id }, sortOrder: "dsc") {
      id
      title
      author
      data
    }
  }
`;

const COMMENT_META = gql`
  query _allCommentsMeta($movie_id: ID) {
    _allCommentsMeta(filter: { movie_id: $movie_id }) {
      count
    }
  }
`;

const ADD_COMMENT = gql`
  mutation createComment(
    $movie_id: ID!
    $author: String!
    $title: String!
    $data: String!
  ) {
    createComment(
      movie_id: $movie_id
      author: $author
      title: $title
      data: $data
    ) {
      id
    }
  }
`;

export const useMovieCommentsQuery = (
  movie_id: string
): IMovieCommentsQueryReturn => {
  const comment = useQuery<IComments>(COMMENT_QUERY, {
    fetchPolicy: 'cache-and-network',
    variables: {
      movie_id
    }
  });

  const commentMeta = useQuery<ICommentMeta>(COMMENT_META, {
    fetchPolicy: 'cache-and-network',
    variables: {
      movie_id
    }
  });

  const [addComment, { data }] = useMutation<IAddComment, IComment>(
    ADD_COMMENT
  );

  const comments = comment.data?.allComments ?? [];

  return {
    commentData: comments,
    commentError: comment.error,
    commentLoading: comment.loading,
    commentRefetch: comment.refetch,
    // eslint-disable-next-line no-underscore-dangle
    commentCount: commentMeta.data?._allCommentsMeta.count,
    addComment
  };
};
