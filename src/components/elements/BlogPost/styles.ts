import styled from 'styled-components';

export const BlogPostPageWrapper = styled.div`
  padding-top: 150px;
  min-height: 100vh;
  background: ${(props) => props.theme.colors.background};
  color: ${(props) => props.theme.colors.text};
`;
