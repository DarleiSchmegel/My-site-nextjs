import React from 'react';
import { GetStaticPaths, GetStaticProps } from 'next';
import BlogPostPage from '../../components/elements/BlogPost';

type post = {
  title: string;
  slug: string;
  body: string;
};

type BlogPostContainerProps = {
  post: post;
};

const BlogPostContainer: React.FC<BlogPostContainerProps> = ({ post }) => {
  return <BlogPostPage post={post} />;
};

export const getStaticPaths: GetStaticPaths = async () => {
  console.log('entrous');
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

  const paths = postsVariable.map((post) => {
    return {
      params: { slug: post.slug },
    };
  });
  return {
    paths,
    fallback: 'blocking',
  };
};

export const getStaticProps: GetStaticProps = async (ctx) => {
  console.log(ctx);
  console.log(ctx.params);
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
  const { slug } = ctx.params!;
  const post = postsVariable.find((element) => element.slug === slug);
  return {
    props: { post },
  };
};

export default BlogPostContainer;
