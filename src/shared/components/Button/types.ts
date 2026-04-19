import { ReactNode } from "react";


export type VariantsButtonType = 'filled' | 'outline' | 'ghost'
export type ColorsButtonType = 'primary' | 'neutral'

export type ButtonType = {
  variant?: VariantsButtonType;
  color?: ColorsButtonType;
  children: ReactNode;
  onCLick: () => void;
  classNames?: string;
}