import { ReactNode } from "react";

export type TextVariant = 'title' | 'suptitle' | 'paragraph' | 'text'

export type TagType = 'h1' | 'h2' | 'h3' | 'p' | 'span'

export type WeightType = '400' | '600' | '700'

export type ColorTextType = 'primary' | 'accent' | 'inverted'

export type TextType = {
  tag: TagType;
  variant: TextVariant;
  className?: string;
  children: ReactNode;
  weight?: WeightType;
  color?: ColorTextType;
}