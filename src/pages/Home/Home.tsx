import { useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import reactLogo from '@/assets/react.svg';
import viteLogo from '/vite.svg';
import '@/assets/css/home.scss';
import { apiPosts } from '@/api/posts';
import { getResponseData } from '@/api/common/callApi';

export const Home = () => {
  const [count, setCount] = useState(0);

  const {
    data,
    isFetching,
    isError,
    refetch: _,
  } = useQuery({
    queryKey: ['posts'],
    queryFn: () => apiPosts.getPosts(),
    enabled: true,
  });
  const posts = getResponseData(data);

  const hasNoPostYet = posts?.length === 0;

  if (hasNoPostYet)
    return <>Aucun post</>;

  if (isError)
    return <>Ça a merdé...</>;

  if (isFetching)
    return <>Ça charge...</>;

  return (
    <>
      <div>
        <img src={viteLogo} className="logo" alt="Vite logo" />
        <img src={reactLogo} className="logo react" alt="React logo" />
      </div>
      <h1>Vite !</h1>
      <div className="card">
        <button onClick={() => setCount(count => count + 1)}>
          count is
          {' '}
          {count}
        </button>
      </div>
      <ul className="posts-list">
        {posts?.map(post => (
          <li key={`post-${post.id}`}>{post.title}</li>
        ))}
      </ul>
    </>
  );
};
