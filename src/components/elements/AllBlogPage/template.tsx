import React from 'react';
import Link from 'next/link';
import { AllBlogPageWrapper } from './styles';
import { Post } from '../../../types/generated/graphql';
import { RichText } from 'prismic-reactjs';

export type AllBlogPageComponentProps = {
  posts: Post[];
};

const AllBlogPageTemplate: React.FC<AllBlogPageComponentProps> = ({ posts }) => {
  console.log('posts', posts);
  return (
    <AllBlogPageWrapper>
      {posts.map((post, index) => (
        <ul key={index}>
          <li>
            {/* <p>{post.title}</p> */}
            {RichText.render(post.title)}
            <Link href={`/blog/${post._meta.uid}`}>{post._meta.uid}</Link>
          </li>
        </ul>
      ))}
    </AllBlogPageWrapper>
  );
};

export default AllBlogPageTemplate;
