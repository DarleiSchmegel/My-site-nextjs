import React from 'react';
import type { GetStaticProps, NextPage } from 'next';
import AllBlogPage from '../../components/elements/AllBlogPage';

type post = {
  title: string;
  slug: string;
  body: string;
};
type BlogProps = {
  posts: post[];
};

const Blog: NextPage<BlogProps> = ({ posts }) => {
  return <AllBlogPage posts={posts} />;
};

export const getStaticProps: GetStaticProps = async () => {
  // must be async
  const postsVariable = [
    {
      title: 'Post 1',
      slug: 'post-1',
      body: 'Body do primeiro post',
    },
    {
      title: 'Post 2',
      slug: 'post-2',
      body: 'Body do segundo post',
    },
  ];
  const posts = postsVariable;
  console.log('servidor', posts);
  return {
    props: {
      posts,
    },
  };
};

export default Blog;
