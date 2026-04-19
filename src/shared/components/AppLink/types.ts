import { ReactNode } from "react";
import { AppRoutes } from "../../constants/AppRoutes";

export type ColorsAppLinkType = 'primary' | 'neutral'
export type VariantsAppLinkType = 'filled' | 'outline' | 'ghost'

export type AppLinkType = {
  variant?: VariantsAppLinkType;
  color?: ColorsAppLinkType;
  children: ReactNode;
  classNames?: string;
  href: AppRoutes
}