import React from 'react';
import { GetStaticPaths, GetStaticProps } from 'next';
import BlogPostPage from '../../components/elements/BlogPost';
import { apolloClient } from '../../utils/prismicHelpers';
import gql from 'graphql-tag';
import { Post, Query } from '../../types/generated/graphql';

type BlogPostContainerProps = {
  post: Post;
};

const BlogPostContainer: React.FC<BlogPostContainerProps> = ({ post }) => {
  return <BlogPostPage post={post} />;
};

export const getStaticPaths: GetStaticPaths = async () => {
  console.log('entrous');
  const postsVariable = [
    {
      title: 'Post 1',
      slug: 'meu-primeiro-post',
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
  const { slug } = ctx.params!;
  const { data: dataBlogPosts } = await apolloClient.query<{ allPosts: Query['allPosts'] }>({
    query: gql`
      query BlogPostQuery($slug: String!) {
        allPosts(uid: $slug) {
          edges {
            node {
              title
              description
              thumbnail
              release_date
              body {
                __typename
               ...on PostBodyImages_slider {
                  type
                  label
                  primary{
                    title
                    eyebrow_headline
                    description
                  }
                  fields {
                    image
                    description
                  }
                }
                ... on PostBodyText {
                  type
                  label
                  primary {
                    text
                  }
                }
                ... on PostBodyQuote {
                  type
                  label
                  primary {
                    quote
                    autor
                  }
                }
                ... on PostBodyImage {
                  type
                  label
                  primary {
                    image
                    caption
                  }
                }
              }
            }
          }
        }
      }
    `,
    variables: { slug },
  });
  // const post = postsVariable.find((element) => element.slug === slug);
  //const post = dataBlogPosts.allPosts.edges
  console.log('dataBlogPosts', dataBlogPosts);

  const post = dataBlogPosts?.allPosts?.edges
    ? dataBlogPosts?.allPosts?.edges?.length > 0
      ? dataBlogPosts?.allPosts?.edges[0]?.node
      : []
    : [];
  console.log('posts', post);
  return {
    props: { post },
  };
};

export default BlogPostContainer;
