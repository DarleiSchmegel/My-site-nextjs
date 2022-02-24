import { gql } from '@apollo/client';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /** Date */
  Date: any;
  /** DateTime */
  DateTime: any;
  /** Raw JSON value */
  Json: any;
  /** The `Long` scalar type represents non-fractional signed whole numeric values. Long can represent values between -(2^63) and 2^63 - 1. */
  Long: any;
};

export type Blog = _Document & _Linkable & {
  __typename?: 'Blog';
  _linkType?: Maybe<Scalars['String']>;
  _meta: Meta;
};

/** A connection to a list of items. */
export type BlogConnectionConnection = {
  __typename?: 'BlogConnectionConnection';
  /** A list of edges. */
  edges?: Maybe<Array<Maybe<BlogConnectionEdge>>>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  totalCount: Scalars['Long'];
};

/** An edge in a connection. */
export type BlogConnectionEdge = {
  __typename?: 'BlogConnectionEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
  /** The item at the end of the edge. */
  node: Blog;
};

export type Carrossel = _Document & _Linkable & {
  __typename?: 'Carrossel';
  _linkType?: Maybe<Scalars['String']>;
  _meta: Meta;
  body?: Maybe<Array<CarrosselBody>>;
  description?: Maybe<Scalars['Json']>;
  title?: Maybe<Scalars['Json']>;
};

export type CarrosselBody = CarrosselBodyCarrossel_Images;

export type CarrosselBodyCarrossel_Images = {
  __typename?: 'CarrosselBodyCarrossel_images';
  fields?: Maybe<Array<CarrosselBodyCarrossel_ImagesFields>>;
  label?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
};

export type CarrosselBodyCarrossel_ImagesFields = {
  __typename?: 'CarrosselBodyCarrossel_imagesFields';
  image?: Maybe<Scalars['Json']>;
};

/** A connection to a list of items. */
export type CarrosselConnectionConnection = {
  __typename?: 'CarrosselConnectionConnection';
  /** A list of edges. */
  edges?: Maybe<Array<Maybe<CarrosselConnectionEdge>>>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  totalCount: Scalars['Long'];
};

/** An edge in a connection. */
export type CarrosselConnectionEdge = {
  __typename?: 'CarrosselConnectionEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
  /** The item at the end of the edge. */
  node: Carrossel;
};

export type Home = _Document & _Linkable & {
  __typename?: 'Home';
  _linkType?: Maybe<Scalars['String']>;
  _meta: Meta;
  body?: Maybe<Array<HomeBody>>;
  description?: Maybe<Scalars['Json']>;
  thumbnail?: Maybe<Scalars['Json']>;
  title?: Maybe<Scalars['Json']>;
};

export type HomeBody = HomeBodyAlternate_Grid | HomeBodyBody | HomeBodyImages_Slider;

export type HomeBodyAlternate_Grid = {
  __typename?: 'HomeBodyAlternate_grid';
  fields?: Maybe<Array<HomeBodyAlternate_GridFields>>;
  label?: Maybe<Scalars['String']>;
  primary?: Maybe<HomeBodyAlternate_GridPrimary>;
  type?: Maybe<Scalars['String']>;
};

export type HomeBodyAlternate_GridFields = {
  __typename?: 'HomeBodyAlternate_gridFields';
  description?: Maybe<Scalars['Json']>;
  optional_icon?: Maybe<Scalars['Json']>;
  title?: Maybe<Scalars['Json']>;
};

export type HomeBodyAlternate_GridPrimary = {
  __typename?: 'HomeBodyAlternate_gridPrimary';
  description?: Maybe<Scalars['Json']>;
  eyebrow_headline?: Maybe<Scalars['Json']>;
  image_side?: Maybe<Scalars['String']>;
  optional_image?: Maybe<Scalars['Json']>;
  title?: Maybe<Scalars['Json']>;
};

export type HomeBodyBody = {
  __typename?: 'HomeBodyBody';
  label?: Maybe<Scalars['String']>;
  primary?: Maybe<HomeBodyBodyPrimary>;
  type?: Maybe<Scalars['String']>;
};

export type HomeBodyBodyPrimary = {
  __typename?: 'HomeBodyBodyPrimary';
  content?: Maybe<Scalars['Json']>;
};

export type HomeBodyImages_Slider = {
  __typename?: 'HomeBodyImages_slider';
  fields?: Maybe<Array<HomeBodyImages_SliderFields>>;
  label?: Maybe<Scalars['String']>;
  primary?: Maybe<HomeBodyImages_SliderPrimary>;
  type?: Maybe<Scalars['String']>;
};

export type HomeBodyImages_SliderFields = {
  __typename?: 'HomeBodyImages_sliderFields';
  description?: Maybe<Scalars['Json']>;
  image?: Maybe<Scalars['Json']>;
};

export type HomeBodyImages_SliderPrimary = {
  __typename?: 'HomeBodyImages_sliderPrimary';
  description?: Maybe<Scalars['Json']>;
  eyebrow_headline?: Maybe<Scalars['Json']>;
  title?: Maybe<Scalars['Json']>;
};

/** A connection to a list of items. */
export type HomeConnectionConnection = {
  __typename?: 'HomeConnectionConnection';
  /** A list of edges. */
  edges?: Maybe<Array<Maybe<HomeConnectionEdge>>>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  totalCount: Scalars['Long'];
};

/** An edge in a connection. */
export type HomeConnectionEdge = {
  __typename?: 'HomeConnectionEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
  /** The item at the end of the edge. */
  node: Home;
};

export type Meta = {
  __typename?: 'Meta';
  /** Alternate languages the document. */
  alternateLanguages: Array<RelatedDocument>;
  /** The first publication date of the document. */
  firstPublicationDate?: Maybe<Scalars['DateTime']>;
  /** The id of the document. */
  id: Scalars['String'];
  /** The language of the document. */
  lang: Scalars['String'];
  /** The last publication date of the document. */
  lastPublicationDate?: Maybe<Scalars['DateTime']>;
  /** The tags of the document. */
  tags: Array<Scalars['String']>;
  /** The type of the document. */
  type: Scalars['String'];
  /** The uid of the document. */
  uid?: Maybe<Scalars['String']>;
};

/** Information about pagination in a connection. */
export type PageInfo = {
  __typename?: 'PageInfo';
  /** When paginating forwards, the cursor to continue. */
  endCursor?: Maybe<Scalars['String']>;
  /** When paginating forwards, are there more items? */
  hasNextPage: Scalars['Boolean'];
  /** When paginating backwards, are there more items? */
  hasPreviousPage: Scalars['Boolean'];
  /** When paginating backwards, the cursor to continue. */
  startCursor?: Maybe<Scalars['String']>;
};

export type Post = _Document & _Linkable & {
  __typename?: 'Post';
  _linkType?: Maybe<Scalars['String']>;
  _meta: Meta;
  author?: Maybe<_Linkable>;
  body?: Maybe<Array<PostBody>>;
  description?: Maybe<Scalars['Json']>;
  release_date?: Maybe<Scalars['Date']>;
  thumbnail?: Maybe<Scalars['Json']>;
  title?: Maybe<Scalars['Json']>;
};

export type PostBody = PostBodyImage | PostBodyImages_Slider | PostBodyQuote | PostBodyText;

export type PostBodyImage = {
  __typename?: 'PostBodyImage';
  label?: Maybe<Scalars['String']>;
  primary?: Maybe<PostBodyImagePrimary>;
  type?: Maybe<Scalars['String']>;
};

export type PostBodyImagePrimary = {
  __typename?: 'PostBodyImagePrimary';
  caption?: Maybe<Scalars['Json']>;
  image?: Maybe<Scalars['Json']>;
};

export type PostBodyImages_Slider = {
  __typename?: 'PostBodyImages_slider';
  fields?: Maybe<Array<PostBodyImages_SliderFields>>;
  label?: Maybe<Scalars['String']>;
  primary?: Maybe<PostBodyImages_SliderPrimary>;
  type?: Maybe<Scalars['String']>;
};

export type PostBodyImages_SliderFields = {
  __typename?: 'PostBodyImages_sliderFields';
  description?: Maybe<Scalars['Json']>;
  image?: Maybe<Scalars['Json']>;
};

export type PostBodyImages_SliderPrimary = {
  __typename?: 'PostBodyImages_sliderPrimary';
  description?: Maybe<Scalars['Json']>;
  eyebrow_headline?: Maybe<Scalars['Json']>;
  title?: Maybe<Scalars['Json']>;
};

export type PostBodyQuote = {
  __typename?: 'PostBodyQuote';
  label?: Maybe<Scalars['String']>;
  primary?: Maybe<PostBodyQuotePrimary>;
  type?: Maybe<Scalars['String']>;
};

export type PostBodyQuotePrimary = {
  __typename?: 'PostBodyQuotePrimary';
  autor?: Maybe<Scalars['Json']>;
  quote?: Maybe<Scalars['Json']>;
};

export type PostBodyText = {
  __typename?: 'PostBodyText';
  label?: Maybe<Scalars['String']>;
  primary?: Maybe<PostBodyTextPrimary>;
  type?: Maybe<Scalars['String']>;
};

export type PostBodyTextPrimary = {
  __typename?: 'PostBodyTextPrimary';
  text?: Maybe<Scalars['Json']>;
};

/** A connection to a list of items. */
export type PostConnectionConnection = {
  __typename?: 'PostConnectionConnection';
  /** A list of edges. */
  edges?: Maybe<Array<Maybe<PostConnectionEdge>>>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  totalCount: Scalars['Long'];
};

/** An edge in a connection. */
export type PostConnectionEdge = {
  __typename?: 'PostConnectionEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
  /** The item at the end of the edge. */
  node: Post;
};

export type Query = {
  __typename?: 'Query';
  _allDocuments: _DocumentConnection;
  allBlogs: BlogConnectionConnection;
  allCarrossels: CarrosselConnectionConnection;
  allHomes: HomeConnectionConnection;
  allPosts: PostConnectionConnection;
  allRichtexts: RichtextConnectionConnection;
  allSeos: SeoConnectionConnection;
  post?: Maybe<Post>;
};


export type Query_AllDocumentsArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  firstPublicationDate?: InputMaybe<Scalars['DateTime']>;
  firstPublicationDate_after?: InputMaybe<Scalars['DateTime']>;
  firstPublicationDate_before?: InputMaybe<Scalars['DateTime']>;
  fulltext?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['String']>;
  id_in?: InputMaybe<Array<Scalars['String']>>;
  lang?: InputMaybe<Scalars['String']>;
  last?: InputMaybe<Scalars['Int']>;
  lastPublicationDate?: InputMaybe<Scalars['DateTime']>;
  lastPublicationDate_after?: InputMaybe<Scalars['DateTime']>;
  lastPublicationDate_before?: InputMaybe<Scalars['DateTime']>;
  similar?: InputMaybe<Similar>;
  sortBy?: InputMaybe<SortDocumentsBy>;
  tags?: InputMaybe<Array<Scalars['String']>>;
  tags_in?: InputMaybe<Array<Scalars['String']>>;
  type?: InputMaybe<Scalars['String']>;
  type_in?: InputMaybe<Array<Scalars['String']>>;
};


export type QueryAllBlogsArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  firstPublicationDate?: InputMaybe<Scalars['DateTime']>;
  firstPublicationDate_after?: InputMaybe<Scalars['DateTime']>;
  firstPublicationDate_before?: InputMaybe<Scalars['DateTime']>;
  fulltext?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['String']>;
  id_in?: InputMaybe<Array<Scalars['String']>>;
  lang?: InputMaybe<Scalars['String']>;
  last?: InputMaybe<Scalars['Int']>;
  lastPublicationDate?: InputMaybe<Scalars['DateTime']>;
  lastPublicationDate_after?: InputMaybe<Scalars['DateTime']>;
  lastPublicationDate_before?: InputMaybe<Scalars['DateTime']>;
  similar?: InputMaybe<Similar>;
  sortBy?: InputMaybe<SortBlogy>;
  tags?: InputMaybe<Array<Scalars['String']>>;
  tags_in?: InputMaybe<Array<Scalars['String']>>;
  uid?: InputMaybe<Scalars['String']>;
  uid_in?: InputMaybe<Array<Scalars['String']>>;
};


export type QueryAllCarrosselsArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  firstPublicationDate?: InputMaybe<Scalars['DateTime']>;
  firstPublicationDate_after?: InputMaybe<Scalars['DateTime']>;
  firstPublicationDate_before?: InputMaybe<Scalars['DateTime']>;
  fulltext?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['String']>;
  id_in?: InputMaybe<Array<Scalars['String']>>;
  lang?: InputMaybe<Scalars['String']>;
  last?: InputMaybe<Scalars['Int']>;
  lastPublicationDate?: InputMaybe<Scalars['DateTime']>;
  lastPublicationDate_after?: InputMaybe<Scalars['DateTime']>;
  lastPublicationDate_before?: InputMaybe<Scalars['DateTime']>;
  similar?: InputMaybe<Similar>;
  sortBy?: InputMaybe<SortCarrossely>;
  tags?: InputMaybe<Array<Scalars['String']>>;
  tags_in?: InputMaybe<Array<Scalars['String']>>;
  uid?: InputMaybe<Scalars['String']>;
  uid_in?: InputMaybe<Array<Scalars['String']>>;
  where?: InputMaybe<WhereCarrossel>;
};


export type QueryAllHomesArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  firstPublicationDate?: InputMaybe<Scalars['DateTime']>;
  firstPublicationDate_after?: InputMaybe<Scalars['DateTime']>;
  firstPublicationDate_before?: InputMaybe<Scalars['DateTime']>;
  fulltext?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['String']>;
  id_in?: InputMaybe<Array<Scalars['String']>>;
  lang?: InputMaybe<Scalars['String']>;
  last?: InputMaybe<Scalars['Int']>;
  lastPublicationDate?: InputMaybe<Scalars['DateTime']>;
  lastPublicationDate_after?: InputMaybe<Scalars['DateTime']>;
  lastPublicationDate_before?: InputMaybe<Scalars['DateTime']>;
  similar?: InputMaybe<Similar>;
  sortBy?: InputMaybe<SortHomey>;
  tags?: InputMaybe<Array<Scalars['String']>>;
  tags_in?: InputMaybe<Array<Scalars['String']>>;
  uid?: InputMaybe<Scalars['String']>;
  uid_in?: InputMaybe<Array<Scalars['String']>>;
  where?: InputMaybe<WhereHome>;
};


export type QueryAllPostsArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  firstPublicationDate?: InputMaybe<Scalars['DateTime']>;
  firstPublicationDate_after?: InputMaybe<Scalars['DateTime']>;
  firstPublicationDate_before?: InputMaybe<Scalars['DateTime']>;
  fulltext?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['String']>;
  id_in?: InputMaybe<Array<Scalars['String']>>;
  lang?: InputMaybe<Scalars['String']>;
  last?: InputMaybe<Scalars['Int']>;
  lastPublicationDate?: InputMaybe<Scalars['DateTime']>;
  lastPublicationDate_after?: InputMaybe<Scalars['DateTime']>;
  lastPublicationDate_before?: InputMaybe<Scalars['DateTime']>;
  similar?: InputMaybe<Similar>;
  sortBy?: InputMaybe<SortPosty>;
  tags?: InputMaybe<Array<Scalars['String']>>;
  tags_in?: InputMaybe<Array<Scalars['String']>>;
  uid?: InputMaybe<Scalars['String']>;
  uid_in?: InputMaybe<Array<Scalars['String']>>;
  where?: InputMaybe<WherePost>;
};


export type QueryAllRichtextsArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  firstPublicationDate?: InputMaybe<Scalars['DateTime']>;
  firstPublicationDate_after?: InputMaybe<Scalars['DateTime']>;
  firstPublicationDate_before?: InputMaybe<Scalars['DateTime']>;
  fulltext?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['String']>;
  id_in?: InputMaybe<Array<Scalars['String']>>;
  lang?: InputMaybe<Scalars['String']>;
  last?: InputMaybe<Scalars['Int']>;
  lastPublicationDate?: InputMaybe<Scalars['DateTime']>;
  lastPublicationDate_after?: InputMaybe<Scalars['DateTime']>;
  lastPublicationDate_before?: InputMaybe<Scalars['DateTime']>;
  similar?: InputMaybe<Similar>;
  sortBy?: InputMaybe<SortRichtexty>;
  tags?: InputMaybe<Array<Scalars['String']>>;
  tags_in?: InputMaybe<Array<Scalars['String']>>;
  uid?: InputMaybe<Scalars['String']>;
  uid_in?: InputMaybe<Array<Scalars['String']>>;
  where?: InputMaybe<WhereRichtext>;
};


export type QueryAllSeosArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  firstPublicationDate?: InputMaybe<Scalars['DateTime']>;
  firstPublicationDate_after?: InputMaybe<Scalars['DateTime']>;
  firstPublicationDate_before?: InputMaybe<Scalars['DateTime']>;
  fulltext?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['String']>;
  id_in?: InputMaybe<Array<Scalars['String']>>;
  lang?: InputMaybe<Scalars['String']>;
  last?: InputMaybe<Scalars['Int']>;
  lastPublicationDate?: InputMaybe<Scalars['DateTime']>;
  lastPublicationDate_after?: InputMaybe<Scalars['DateTime']>;
  lastPublicationDate_before?: InputMaybe<Scalars['DateTime']>;
  similar?: InputMaybe<Similar>;
  sortBy?: InputMaybe<SortSeoy>;
  tags?: InputMaybe<Array<Scalars['String']>>;
  tags_in?: InputMaybe<Array<Scalars['String']>>;
  uid?: InputMaybe<Scalars['String']>;
  uid_in?: InputMaybe<Array<Scalars['String']>>;
  where?: InputMaybe<WhereSeo>;
};


export type QueryPostArgs = {
  lang: Scalars['String'];
  uid: Scalars['String'];
};

export type RelatedDocument = {
  __typename?: 'RelatedDocument';
  /** The id of the document. */
  id: Scalars['String'];
  /** The language of the document. */
  lang: Scalars['String'];
  /** The type of the document. */
  type: Scalars['String'];
  /** The uid of the document. */
  uid?: Maybe<Scalars['String']>;
};

export type Richtext = _Document & _Linkable & {
  __typename?: 'Richtext';
  _linkType?: Maybe<Scalars['String']>;
  _meta: Meta;
  richtext?: Maybe<Scalars['Json']>;
};

/** A connection to a list of items. */
export type RichtextConnectionConnection = {
  __typename?: 'RichtextConnectionConnection';
  /** A list of edges. */
  edges?: Maybe<Array<Maybe<RichtextConnectionEdge>>>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  totalCount: Scalars['Long'];
};

/** An edge in a connection. */
export type RichtextConnectionEdge = {
  __typename?: 'RichtextConnectionEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
  /** The item at the end of the edge. */
  node: Richtext;
};

export type Seo = _Document & _Linkable & {
  __typename?: 'Seo';
  _linkType?: Maybe<Scalars['String']>;
  _meta: Meta;
  description?: Maybe<Scalars['Json']>;
  thumbnail?: Maybe<Scalars['Json']>;
  title?: Maybe<Scalars['Json']>;
};

/** A connection to a list of items. */
export type SeoConnectionConnection = {
  __typename?: 'SeoConnectionConnection';
  /** A list of edges. */
  edges?: Maybe<Array<Maybe<SeoConnectionEdge>>>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  totalCount: Scalars['Long'];
};

/** An edge in a connection. */
export type SeoConnectionEdge = {
  __typename?: 'SeoConnectionEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
  /** The item at the end of the edge. */
  node: Seo;
};

export enum SortBlogy {
  MetaFirstPublicationDateAsc = 'meta_firstPublicationDate_ASC',
  MetaFirstPublicationDateDesc = 'meta_firstPublicationDate_DESC',
  MetaLastPublicationDateAsc = 'meta_lastPublicationDate_ASC',
  MetaLastPublicationDateDesc = 'meta_lastPublicationDate_DESC'
}

export enum SortCarrossely {
  DescriptionAsc = 'description_ASC',
  DescriptionDesc = 'description_DESC',
  MetaFirstPublicationDateAsc = 'meta_firstPublicationDate_ASC',
  MetaFirstPublicationDateDesc = 'meta_firstPublicationDate_DESC',
  MetaLastPublicationDateAsc = 'meta_lastPublicationDate_ASC',
  MetaLastPublicationDateDesc = 'meta_lastPublicationDate_DESC',
  TitleAsc = 'title_ASC',
  TitleDesc = 'title_DESC'
}

export enum SortDocumentsBy {
  MetaFirstPublicationDateAsc = 'meta_firstPublicationDate_ASC',
  MetaFirstPublicationDateDesc = 'meta_firstPublicationDate_DESC',
  MetaLastPublicationDateAsc = 'meta_lastPublicationDate_ASC',
  MetaLastPublicationDateDesc = 'meta_lastPublicationDate_DESC'
}

export enum SortHomey {
  DescriptionAsc = 'description_ASC',
  DescriptionDesc = 'description_DESC',
  MetaFirstPublicationDateAsc = 'meta_firstPublicationDate_ASC',
  MetaFirstPublicationDateDesc = 'meta_firstPublicationDate_DESC',
  MetaLastPublicationDateAsc = 'meta_lastPublicationDate_ASC',
  MetaLastPublicationDateDesc = 'meta_lastPublicationDate_DESC',
  TitleAsc = 'title_ASC',
  TitleDesc = 'title_DESC'
}

export enum SortPosty {
  DescriptionAsc = 'description_ASC',
  DescriptionDesc = 'description_DESC',
  MetaFirstPublicationDateAsc = 'meta_firstPublicationDate_ASC',
  MetaFirstPublicationDateDesc = 'meta_firstPublicationDate_DESC',
  MetaLastPublicationDateAsc = 'meta_lastPublicationDate_ASC',
  MetaLastPublicationDateDesc = 'meta_lastPublicationDate_DESC',
  ReleaseDateAsc = 'release_date_ASC',
  ReleaseDateDesc = 'release_date_DESC',
  TitleAsc = 'title_ASC',
  TitleDesc = 'title_DESC'
}

export enum SortRichtexty {
  MetaFirstPublicationDateAsc = 'meta_firstPublicationDate_ASC',
  MetaFirstPublicationDateDesc = 'meta_firstPublicationDate_DESC',
  MetaLastPublicationDateAsc = 'meta_lastPublicationDate_ASC',
  MetaLastPublicationDateDesc = 'meta_lastPublicationDate_DESC',
  RichtextAsc = 'richtext_ASC',
  RichtextDesc = 'richtext_DESC'
}

export enum SortSeoy {
  DescriptionAsc = 'description_ASC',
  DescriptionDesc = 'description_DESC',
  MetaFirstPublicationDateAsc = 'meta_firstPublicationDate_ASC',
  MetaFirstPublicationDateDesc = 'meta_firstPublicationDate_DESC',
  MetaLastPublicationDateAsc = 'meta_lastPublicationDate_ASC',
  MetaLastPublicationDateDesc = 'meta_lastPublicationDate_DESC',
  TitleAsc = 'title_ASC',
  TitleDesc = 'title_DESC'
}

export type WhereCarrossel = {
  /** description */
  description_fulltext?: InputMaybe<Scalars['String']>;
  /** title */
  title_fulltext?: InputMaybe<Scalars['String']>;
};

export type WhereHome = {
  /** description */
  description_fulltext?: InputMaybe<Scalars['String']>;
  /** title */
  title_fulltext?: InputMaybe<Scalars['String']>;
};

export type WherePost = {
  /** author */
  author?: InputMaybe<Scalars['String']>;
  /** description */
  description_fulltext?: InputMaybe<Scalars['String']>;
  /** release_date */
  release_date?: InputMaybe<Scalars['Date']>;
  /** release_date */
  release_date_after?: InputMaybe<Scalars['Date']>;
  /** release_date */
  release_date_before?: InputMaybe<Scalars['Date']>;
  /** title */
  title_fulltext?: InputMaybe<Scalars['String']>;
};

export type WhereRichtext = {
  /** richtext */
  richtext_fulltext?: InputMaybe<Scalars['String']>;
};

export type WhereSeo = {
  /** description */
  description_fulltext?: InputMaybe<Scalars['String']>;
  /** title */
  title_fulltext?: InputMaybe<Scalars['String']>;
};

/** A prismic document */
export type _Document = {
  _meta: Meta;
};

/** A connection to a list of items. */
export type _DocumentConnection = {
  __typename?: '_DocumentConnection';
  /** A list of edges. */
  edges?: Maybe<Array<Maybe<_DocumentEdge>>>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  totalCount: Scalars['Long'];
};

/** An edge in a connection. */
export type _DocumentEdge = {
  __typename?: '_DocumentEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
  /** The item at the end of the edge. */
  node: _Document;
};

/** An external link */
export type _ExternalLink = _Linkable & {
  __typename?: '_ExternalLink';
  _linkType?: Maybe<Scalars['String']>;
  target?: Maybe<Scalars['String']>;
  url: Scalars['String'];
};

/** A linked file */
export type _FileLink = _Linkable & {
  __typename?: '_FileLink';
  _linkType?: Maybe<Scalars['String']>;
  name: Scalars['String'];
  size: Scalars['Long'];
  url: Scalars['String'];
};

/** A linked image */
export type _ImageLink = _Linkable & {
  __typename?: '_ImageLink';
  _linkType?: Maybe<Scalars['String']>;
  height: Scalars['Int'];
  name: Scalars['String'];
  size: Scalars['Long'];
  url: Scalars['String'];
  width: Scalars['Int'];
};

/** A prismic link */
export type _Linkable = {
  _linkType?: Maybe<Scalars['String']>;
};

export type Similar = {
  documentId: Scalars['String'];
  max: Scalars['Int'];
};
