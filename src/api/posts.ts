import { environment } from '../environments';
import { getRequestBuilder, patchRequestBuilder, postRequestBuilder, processCall } from './common/callApi';
import type { PostType } from '@appli/types';

const baseUrl = environment.apiUrl;

const getPosts = () => {
  const url = `${baseUrl}/posts`;
  return processCall<PostType[]>({ request: getRequestBuilder({ url }) });
};

const createPost = (data: Record<string, unknown>) => {
  const url = `${baseUrl}/posts`;
  return processCall<PostType>({ request: postRequestBuilder({ url, data }) });
};

const patchPost = (postId: number, data: Record<string, unknown>) => {
  const url = `${baseUrl}/posts/${postId}`;
  return processCall<PostType>({ request: patchRequestBuilder({ url, data }) });
};

export const apiPosts = {
  getPosts,
  createPost,
  patchPost,
};
