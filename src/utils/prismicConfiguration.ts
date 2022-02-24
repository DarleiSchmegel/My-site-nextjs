// import {RelatedDocument} from '../types/generated/graphql'

// -- Prismic Repo Name
export const repoName = 'your-repo-name'

// -- Prismic API endpoint
// Determines which repository to query and fetch data from
// Configure your site's access point here
export const apiEndpoint = `https://${repoName}.cdn.prismic.io/api/v2`

// -- Access Token if the repository is not public
// Generate a token in your dashboard and configure it here if your repository is private
export const accessToken = ''


type linkResolverPros = {
  id: string;
  uid: string;
  type: string;
  tags: Array<linkResolverPros>;
  lang: string;
  isBroken: boolean;
}

// -- Link resolution rules
// Manages the url links to internal Prismic documents
export const linkResolver = (doc: linkResolverPros) => {
  console.log("terou doc",doc.uid)
  if (doc.isBroken) {
    return '/not-found'
  }
  if (doc.type === 'home') {
    return '/'
  }
  if (doc.type === 'page') {
    return `/page/${doc.uid}`
  }
  return '/'
}

// -- Route Resolver rules
// Manages the url links to internal Prismic documents two levels deep (optionals)
export const routeResolver = {
  routes: [
    {
      "type":"page",
      "path":"/:uid"
    },
  ]
};