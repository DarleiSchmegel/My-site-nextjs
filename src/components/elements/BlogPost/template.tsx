import React from 'react';
import { Post } from '../../../types/generated/graphql';
import { BlogPostPageWrapper } from './styles';
import { RichText } from 'prismic-reactjs';
import SliceZone from '../DynamicZone';

export type AllBlogPageComponentProps = {
  post: Post;
};

const AllBlogPageTemplate: React.FC<AllBlogPageComponentProps> = ({ post }) => {
  console.log('post Page', post.body);
  return (
    <BlogPostPageWrapper>
      {RichText.render(post.title)}
      {RichText.render(post.description)}
      {/* {post.thumbnail && <img src={post.thumbnail.url} alt="" />} */}
      {/* {post.body?.map((body, index) => */}
      {post.body && <SliceZone sliceZone={post.body} />}
      {/* )} */}
    </BlogPostPageWrapper>
  );
};

export default AllBlogPageTemplate;
