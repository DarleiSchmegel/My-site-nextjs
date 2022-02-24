import React from 'react';
import { PrismicLink } from 'apollo-link-prismic';
import Link from 'next/link'
import {
  linkResolver,
} from './prismicConfiguration'

import { InMemoryCache, IntrospectionFragmentMatcher } from "apollo-cache-inmemory";
import fragmentTypes from './fragmentTypes.json';

import { ApolloClient } from 'apollo-client';
import { HTMLSerializer } from 'prismic-reactjs';

const fragmentMatcher = new IntrospectionFragmentMatcher(
  { introspectionQueryResultData: fragmentTypes },
);

// Helper function to convert Prismic Rich Text links to Next/Link components
export const CustomLink:HTMLSerializer<React.ReactNode> = (type, element, content, children, index) => (
    <Link key={index} href={linkResolver(element.data)}>
      <a>{content}</a>
    </Link>
)


export const apolloClient = new ApolloClient({
  ssrMode: typeof window === 'undefined',
  link: PrismicLink({
    uri: process.env.PRISMIC_API_GRAPHQL_ENDPOINT,
    accessToken: process.env.PRISMIC_ACCESSES_TOKEN,
  }),
  cache: new InMemoryCache({fragmentMatcher}),
});
