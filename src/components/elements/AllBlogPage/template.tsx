import React from 'react';
import Link from 'next/link';
import { AllBlogPageWrapper } from './styles';

type post = {
  title: string;
  slug: string;
  body: string;
};
export type AllBlogPageComponentProps = {
  posts: post[];
};

const AllBlogPageTemplate: React.FC<AllBlogPageComponentProps> = ({ posts }) => {
  return (
    <AllBlogPageWrapper>
      {posts.map((post, index) => (
        <ul key={index}>
          <li>
            <p>{post.title}</p>
            <Link href={`/blog/${post.slug}`}>{post.slug}</Link>
          </li>
        </ul>
      ))}
    </AllBlogPageWrapper>
  );
};

export default AllBlogPageTemplate;
