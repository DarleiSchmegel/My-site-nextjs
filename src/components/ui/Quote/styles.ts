import styled, { css } from 'styled-components';

export const QuoteWrapper = styled.blockquote<{ isBordered?: boolean; quoted?: boolean }>`
  ${(props) =>
    props.quoted &&
    css`
      ::before {
        content: "“";
        font-size: 100px;
        color: #009578;
        
        display: block;
        margin-bottom: -40px;
        margin-top: -20px;
      }
    `}

  max-width: 1200px;
  margin: 10px 0;
  padding: 25px;
  background: #f8fffe;
  border: 1px solid #b0d2cb;
  color: #0b4237;
  box-sizing: border-box;

  .blockquote__text {
    font-family: 'Courier New', Courier, monospace;
    font-style: italic;
    font-size: 1.15em;
    line-height: 1.5;
    text-align: justify;
    margin: 0;
  }
  .blockquote__text:not(:last-child) {
    margin-bottom: 1em;
  }

  .blockquote__text--credit {
    font-weight: bold;
    font-style: normal;
    text-align: right;
  }
  .blockquote__text--credit::before {
    content: '― ';
  }

  ${(props) =>
    props.isBordered &&
    css`
      border-left-width: 10px;
    `}
`;
