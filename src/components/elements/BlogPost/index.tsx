import React from 'react';
import { Post } from '../../../types/generated/graphql';
import BlogPostPageTamplete from './template';


export type BlogPostPageComponentProps = {
  post: Post;
};

const BlogPostPage: React.FC<BlogPostPageComponentProps> = ({ post }) => {
  console.log("Blog Post",post)
  return <BlogPostPageTamplete post={post} />;
};

export default BlogPostPage;
