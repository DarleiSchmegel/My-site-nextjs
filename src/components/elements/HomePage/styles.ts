import styled from 'styled-components';

export const HomePageWrapper = styled.div`
  min-height: 100vh;
  background: ${(props) => props.theme.colors.background};
  color: ${(props) => props.theme.colors.text};
  padding-top: 100px;
`;
