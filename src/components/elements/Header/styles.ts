import styled from 'styled-components';

export const HeaderWrapper = styled.header`
  background: ${(props) => props.theme.colors.backgroundHeader};
  z-index: 100;
  box-shadow: 1px 1px #888888;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  position: fixed;
  min-width: 100vw;
  .brand {
    color: ${(props) => props.theme.colors.colorHeader};
  }
`;

export const Nav = styled.nav`
  width: 50%;
  ul {
    list-style: none;
    display: flex;
    /* gap: ${(props) => props.theme.spacing.xs}; */
    justify-content: space-around;
    align-items: center;
  }
  ul li a {
    text-decoration: none;
    color: ${(props) => props.theme.colors.colorHeader};
  }
  ul li a.icon {
    font-size: 28px;
  }
  ul li a.sun {
    color: #e7de79; //${(props) => props.theme.colors.grayLine};
  }
  ul li a:hover {
    cursor: pointer;
  }
`;
