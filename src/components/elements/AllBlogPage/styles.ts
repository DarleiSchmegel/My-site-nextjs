import styled from 'styled-components';

export const AllBlogPageWrapper = styled.div`
  padding-top: 150px;
  min-height: 100vh;
  background: ${(props) => props.theme.colors.background};
  color: ${(props) => props.theme.colors.text};
`;
