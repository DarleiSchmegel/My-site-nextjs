import React from 'react';
import { RichText } from 'prismic-reactjs';
import { linkResolver } from '../../../utils/prismicConfiguration';
// import { CustomLink } from '../../../utils/prismicHelpers'
import {PostBodyText} from '../../../types/generated/graphql';

/**
 * Text slice component
 */
export const BodyText = ({ primary }: PostBodyText) => {
  console.log(primary);
  return (
    <div className="post-part single container">
      {primary && (
        <RichText
          render={primary?.text}
          linkResolver={linkResolver}
          //serializeHyperlink={CustomLink}
        />
      )}
    </div>
  );
};

