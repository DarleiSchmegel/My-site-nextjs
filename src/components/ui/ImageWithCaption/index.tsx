import React from 'react';
import { RichText } from 'prismic-reactjs';
type prismicLoaderProps = {
  src: string;
  width: number;
  quality?: number;
};

// data from prismic.io returns the image src as an absolute url, so no need to set up the full url on loader....
const prismicLoader = ({ src, width, quality }: prismicLoaderProps) => {
  return `${src}?w=${width}&q=${quality || 75}`;
};
import { PostBodyImage } from '../../../types/generated/graphql';
import Image from 'next/image';
import { ImageWithCaptionWrapper } from './styles';
/**
 * Quote slice component
 */
export const ImageWithCaption = ({ primary, label }: PostBodyImage) => {

  const imageUrl = primary?.image.url;
  const imageAlt = primary?.image.alt;
  const caption = primary?.caption;

  return (
    <ImageWithCaptionWrapper>
      <div className={`block-img ${label}`}>
        <Image width={200} height={200} src={imageUrl} alt={imageAlt} loader={prismicLoader} />
        {/* <img src={imageUrl} alt="" /> */}
        {primary?.caption && RichText.asText(caption) !== '' && (
          <p>
            <span className="image-label">{RichText.asText(caption)}</span>
          </p>
        )}
      </div>
    </ImageWithCaptionWrapper>
  );
};
