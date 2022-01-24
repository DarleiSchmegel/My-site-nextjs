import React from 'react';
import AllBlogPageTamplete from './template';

type post = {
  title: string;
  slug: string;
  body: string;
};
export type AllBlogPageComponentProps = {
  posts: post[];
};

const AllBlogPage: React.FC<AllBlogPageComponentProps> = ({ posts }) => {
  console.log(posts);
  return <AllBlogPageTamplete posts={posts} />;
};

export default AllBlogPage;
