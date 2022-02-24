import React from 'react';

import {
  PostBodyQuotePrimary,
  PostBodyTextPrimary,
  PostBodyImagePrimary,
  PostBodyImages_SliderPrimary,
} from '../../../types/generated/graphql';
import { BodyProps } from '../../../types/myTypes';
import { BodyText } from '../../ui/BodyText';
import { ImageSlider } from '../../ui/ImagesSlider';
import { ImageWithCaption } from '../../ui/ImageWithCaption';
import { Quote } from '../../ui/Quote';
import { SliceZoneWrapper } from './styles';
//, Quote, ImageWithCaption

type SliceZoneProps = {
  sliceZone: BodyProps[];
};

/**
 * Post slice zone component
 */
const SliceZone: React.FC<SliceZoneProps> = ({ sliceZone }) => {
  // console.log(s)
  if (!sliceZone || sliceZone.length <= 0) return null;
  return (
    <SliceZoneWrapper>
      {sliceZone.map((slice, index) => {
        switch (slice.type) {
          case 'image':
            return slice && slice.primary ? (
              <ImageWithCaption
                primary={slice.primary as PostBodyImagePrimary}
                label={slice.label}
                key={`slice-${index}`}
              />
            ) : null;
          case 'quote':
            return slice && slice.primary ? (
              <Quote primary={slice.primary as PostBodyQuotePrimary} key={`slice-${index}`} />
            ) : null;

          case 'text':
            return slice && slice.primary ? (
              <BodyText primary={slice.primary as PostBodyTextPrimary} key={`slice-${index}`} />
            ) : null;

          case 'images_slider':
            return slice && slice.primary ? (
              <ImageSlider primary={slice.primary as PostBodyImages_SliderPrimary} fields={slice.fields} key={`slice-${index}`} />
            ) : null;

          default:
            return null;
        }
      })}
    </SliceZoneWrapper>
  );
};

export default SliceZone;
