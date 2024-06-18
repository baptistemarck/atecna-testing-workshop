import { useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import reactLogo from '@appli/assets/react.svg';
import viteLogo from '/vite.svg';
import '@appli/assets/css/home.scss';
import { apiPosts } from '@appli/api/posts';
import { getResponseData } from '@appli/api/common/callApi';
import MyButton from "@appli/components/MyButton.tsx";

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
        <MyButton onClick={() => setCount(count => count + 1)}>
          count is
          {' '}
          {count}
        </MyButton>
      </div>
      <ul className="posts-list">
        {posts?.map(post => (
          <li key={`post-${post.id}`}>{post.title}</li>
        ))}
      </ul>
    </>
  );
};
