import React from 'react';
import BlogPostPageTamplete from './template';

type post = {
  title: string;
  slug: string;
  body: string;
};
export type BlogPostPageComponentProps = {
  post: post;
};

const BlogPostPage: React.FC<BlogPostPageComponentProps> = ({ post }) => {
  console.log(post);
  return <BlogPostPageTamplete post={post} />;
};

export default BlogPostPage;
