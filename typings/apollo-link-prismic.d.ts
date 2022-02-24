declare module 'apollo-link-prismic' {
  export function PrismicLink(args: { uri: string | undefined; accessToken?: string | undefined}): any;
}
