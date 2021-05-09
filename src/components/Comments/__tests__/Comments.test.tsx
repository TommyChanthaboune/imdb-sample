import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import { Comments } from '../Comments';
import mockData from './mockdata.json';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { useMovieCommentsQuery } from '../../../hooks/useMovieCommentsQuery';

const mockAddComment = jest.fn();

jest.mock('../../../hooks/useMovieCommentsQuery', () => ({
  useMovieCommentsQuery: () => ({
    commentData: mockData,
    commentError: false,
    commentCount: mockData.length,
    addComment: mockAddComment
  })
}));

describe('Comments', () => {
  it('should render correctly', () => {
    const component = render(<Comments movie="12345" />);

    expect(component).toMatchSnapshot();
  });

  it('should be called with the correct arguements', () => {
    render(<Comments movie="12345" />);
    fireEvent.change(screen.getByLabelText('Name'), {
      target: {
        value: 'test-name'
      }
    });

    fireEvent.change(screen.getByLabelText('Subject'), {
      target: {
        value: 'test-subject'
      }
    });

    fireEvent.change(screen.getByLabelText('Comment'), {
      target: {
        value: 'test-comment'
      }
    });

    fireEvent.click(screen.getByText('Leave Comment'));

    expect(mockAddComment).toBeCalledWith({
      variables: {
        author: 'test-name',
        data: 'test-comment',
        movie_id: '12345',
        title: 'test-subject'
      }
    });
  });
});
