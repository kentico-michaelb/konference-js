import { IContentItem, Elements } from '@kentico/kontent-delivery';

/**
 * Generated by '@kentico/kontent-model-generator@4.1.0' at 'Thu, 09 Dec 2021 17:29:41 GMT'
 */
export type Map = IContentItem<{
  file: Elements.LinkedItemsElement<IContentItem>;
  tooltip: Elements.TextElement;
  latitude: Elements.TextElement;
  name: Elements.TextElement;
  type: Elements.MultipleChoiceElement;
  longitude: Elements.TextElement;
}>;
