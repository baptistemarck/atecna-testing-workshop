import { vi } from 'vitest';
import { mockPost, mockPosts } from '@appli/mocks';

const getPosts = vi.fn(() => Promise.resolve({ data: mockPosts }));
const createPost = vi.fn(() => Promise.resolve({ data: mockPost }));
const patchPost = vi.fn(() => Promise.resolve({ data: mockPost }));

export const apiPosts = {
  getPosts,
  createPost,
  patchPost,
};
