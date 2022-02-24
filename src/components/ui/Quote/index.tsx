import React from 'react';
import { RichText } from 'prismic-reactjs';
import { QuoteWrapper } from './styles';

// import { BodyProps } from '../../../types/myTypes'

import { PostBodyQuote } from '../../../types/generated/graphql';
/**
 * Quote slice component
 */
export const Quote = ({ primary }: PostBodyQuote) => {
  console.log('q', primary);
  return (
    <QuoteWrapper isBordered quoted>
      <p className="blockquote__text">{RichText.asText(primary?.quote)}</p>
      <p className="blockquote__text blockquote__text--credit">{RichText.asText(primary?.autor)}</p>
    </QuoteWrapper>
  );
};
