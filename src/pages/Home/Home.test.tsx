import { screen, waitFor } from '@testing-library/react';
import type { Mocked } from 'vitest';
import type { AxiosResponse } from 'axios';
import { userEvent } from '@testing-library/user-event';
import { Home } from './Home';
import { getButton, renderWithProviders as render } from '@/testing';
import { mockPost } from '@/mocks';
import { apiPosts } from '@/api/posts';
import type { PostType } from '@/types';

vi.mock('@/api/posts');

describe('home', () => {
  it('should fetch and display posts', async () => {
    render(<Home />);
    expect(screen.getByText(/ça charge/i)).toBeInTheDocument();
    await waitFor(() => {
      expect(screen.getByText(mockPost.title)).toBeInTheDocument();
    });
    expect(screen.getAllByRole('listitem')).toHaveLength(3);
  });

  it('should fetch posts and not retrieve any. Sad', async () => {
    (apiPosts as Mocked<typeof apiPosts>).getPosts.mockResolvedValueOnce({ data: [] } as AxiosResponse<PostType[]>);
    render(<Home />);
    expect(screen.getByText(/ça charge/i)).toBeInTheDocument();
    await waitFor(() => {
      expect(screen.getByText(/aucun post/i)).toBeInTheDocument();
    });
    expect(screen.queryAllByRole('listitem')).toHaveLength(0);
  });

  it('should fail to retrieve posts. So sad', async () => {
    (apiPosts as Mocked<typeof apiPosts>).getPosts.mockRejectedValueOnce(Error('Fail'));
    render(<Home />);
    await waitFor(() => {
      expect(screen.getByText(/ça a merdé/i)).toBeInTheDocument();
    });
    expect(screen.queryAllByRole('listitem')).toHaveLength(0);
  });

  it('should increment the useless counter, and that was so fun', async () => {
    render(<Home />);
    await waitFor(() => {
      expect(screen.getByText(mockPost.title)).toBeInTheDocument();
    });
    const incrementButton = getButton(/count is 0/i);
    await userEvent.click(incrementButton);
    await waitFor(() => {
      expect(incrementButton).toHaveTextContent('count is 1');
    });
  });
});
