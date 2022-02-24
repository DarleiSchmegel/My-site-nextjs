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
import { PostBodyImages_Slider } from '../../../types/generated/graphql';
import Image from 'next/image';
/**
 * Quote slice component
 */
export const ImageSlider = ({ primary, fields }: PostBodyImages_Slider) => {
  return (
    <div className="post-part single container">
      <div className={`block-img`}>
        {RichText.render(primary?.title)}
        {RichText.render(primary?.description)}
        {fields &&
          fields.map((field, index) => {
            return (
              <div className="filed-image" key={index}>
                <Image
                  width={200}
                  height={200}
                  src={field.image.url}
                  alt={field.image.description}
                  loader={prismicLoader}
                />
              </div>
            );
          })}
      </div>
    </div>
  );
};
