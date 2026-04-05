import { ReactNode } from "react";
import { AppRoutes } from "../../constants/AppRoutes";

export type VariantsType = 'primary' | 'navLink'

export type AppLinkType = {
  variant: VariantsType;
  children: ReactNode;
  classnames?: string;
  href: AppRoutes
}