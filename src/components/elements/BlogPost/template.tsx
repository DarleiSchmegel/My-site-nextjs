import React from 'react';
import { BlogPostPageWrapper } from './styles';

type post = {
  title: string;
  slug: string;
  body: string;
};
export type AllBlogPageComponentProps = {
  post: post;
};

const AllBlogPageTemplate: React.FC<AllBlogPageComponentProps> = ({ post }) => {
  console.log('post Page', post);
  return (
    <BlogPostPageWrapper>
      <h1>{post.title}</h1>
      <p>{post.body}</p>
    </BlogPostPageWrapper>
  );
};

export default AllBlogPageTemplate;
