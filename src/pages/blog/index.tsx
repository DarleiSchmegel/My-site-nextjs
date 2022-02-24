import React from 'react';
import type { GetStaticProps, NextPage } from 'next';
import AllBlogPage from '../../components/elements/AllBlogPage';

import { ALL_POSTS } from '../../queries/posts';
import { apolloClient } from '../../utils/prismicHelpers';
import { GraphQLError } from 'graphql';

import { Post, PostConnectionConnection, Query } from '../../types/generated/graphql';

type BlogProps = {
  posts: Post[];
  allPosts: PostConnectionConnection | undefined;

  errors?: GraphQLError;
};

const Blog: NextPage<BlogProps> = ({ posts, errors }) => {
  console.log(posts);

  //const edge = data?.edges?.length ? data?.edges[0] : undefined;
  if (errors) {
    console.log(errors);
  }
  return <AllBlogPage posts={posts} />;
};

export const getStaticProps: GetStaticProps = async () => {
  // must be async

  const { data, errors = null } = await apolloClient.query<{ allPosts: Query['allPosts'] }>({
    query: ALL_POSTS,
  });
  console.log(data, errors);

  const posts = data.allPosts.edges?.map((post) => post?.node);

  return {
    props: {
      posts: posts || [],
      allPosts: posts || null,
      errors,
    },
  };
};

export default Blog;
