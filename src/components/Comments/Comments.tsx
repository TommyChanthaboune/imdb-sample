import React, { FC, useState } from 'react';
import Avatar from '../../assets/Avatar.svg';
import { IComment } from '../../interfaces';
import { useMovieCommentsQuery } from '../../hooks';

interface IComments {
  movie: string;
}

export const Comments: FC<IComments> = ({ movie }) => {
  const [author, setAuthor] = useState<string>('');
  const [title, setTitle] = useState<string>('');
  const [content, setContent] = useState<string>('');
  const [newComments, setNewComments] = useState<IComment[]>([]);

  const {
    commentLoading,
    commentData,
    commentCount,
    addComment
  } = useMovieCommentsQuery(movie);

  const handleAuthorChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setAuthor(e.target.value);
  };
  const handleTitleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(e.target.value);
  };
  const handleContentChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setContent(e.target.value);
  };

  const handleAddcomment = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    addComment({
      variables: {
        movie_id: movie,
        author,
        title,
        data: content
      }
    });

    const newComment: IComment = {
      author,
      title,
      data: content,
      id: 'placeholder'
    };

    setNewComments([...newComments, newComment]);
  };

  return (
    <div className="comments">
      <h4>Comments ({(commentCount as number) + newComments.length})</h4>

      <div className="comments__existing">
        {commentLoading ? (
          <h3>Loading Comments</h3>
        ) : (
          <>
            {[...commentData, ...newComments]?.map((comment) => (
              <div className="comment" key={comment.id}>
                <div className="comment__profile">
                  <div className="comment__avatar">
                    <img src={Avatar} alt={comment.author} />
                  </div>
                  <p className="comment__author">{comment.author}</p>
                </div>
                <div className="comment__body">
                  <div className="comment__content">
                    <p className="comment__title">{comment.title}</p>
                    <p className="comment__data">{comment.data}</p>
                  </div>
                </div>
              </div>
            ))}
          </>
        )}
      </div>
      <div className="comments__new">
        <h4>New Comment</h4>
        <form>
          <label htmlFor="comment-author">
            Name
            <input
              type="text"
              id="comment-author"
              onChange={handleAuthorChange}
            />
          </label>
          <label htmlFor="comment-subject">
            Subject
            <input
              type="text"
              id="comment-subject"
              onChange={handleTitleChange}
            />
          </label>
          <label htmlFor="comment-data">
            Comment
            <textarea
              id="comment-data"
              onChange={handleContentChange}
              rows={4}
              cols={40}
            />
          </label>
          <button type="button" onClick={handleAddcomment}>
            Leave Comment
          </button>
        </form>
      </div>
    </div>
  );
};
