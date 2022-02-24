import { Maybe } from 'graphql/jsutils/Maybe';
import { PostBodyImagePrimary, PostBodyImages_SliderFields, PostBodyQuotePrimary, PostBodyTextPrimary, Scalars } from './generated/graphql';

export type BodyProps = {
  __typename?: Maybe<Scalars['String']>;
  label?: Maybe<Scalars['String']>;
  primary?: Maybe<PostBodyTextPrimary> | Maybe<PostBodyImagePrimary> | Maybe<PostBodyQuotePrimary>;
  fields?: Maybe<Array<PostBodyImages_SliderFields>>;
  quote?: Maybe<Scalars['Json']>;
  type?: Maybe<Scalars['String']>;
};
