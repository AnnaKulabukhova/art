import { ReactNode } from "react";

export type VariantsType = 'filledPrimary' | 'filledSecondary' | 'outlinePrimary' | 'outlineScondary' | 'ghost'

export type ButtonType = {
  variant: VariantsType;
  children: ReactNode;
  onCLick: () => void;
  classnames?: string;
}