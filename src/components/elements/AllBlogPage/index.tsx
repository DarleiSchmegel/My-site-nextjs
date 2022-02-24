import React from 'react';
import AllBlogPageTamplete from './template';

import { Post } from '../../../types/generated/graphql'

export type AllBlogPageComponentProps = {
  posts: Post[];
};

const AllBlogPage: React.FC<AllBlogPageComponentProps> = ({ posts }) => {
  console.log(posts);
  return <AllBlogPageTamplete posts={posts} />;
};

export default AllBlogPage;
