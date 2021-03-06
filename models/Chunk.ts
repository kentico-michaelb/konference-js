import { IContentItem, Elements } from '@kentico/kontent-delivery';

/**
 * Generated by '@kentico/kontent-model-generator@4.1.0' at 'Thu, 09 Dec 2021 17:29:41 GMT'
 */
export type Chunk = IContentItem<{
  body: Elements.RichTextElement;
  media: Elements.LinkedItemsElement<IContentItem>;
  type: Elements.MultipleChoiceElement;
  name: Elements.TextElement;
}>;
