import { AppLinkType, ColorsAppLinkType, VariantsAppLinkType } from "./types";
import styles from './styles/AppLink.module.scss'
import Link from "next/link";
import { cls } from "../../helpers/classNames/classNames";

export const AppLink = ({ children, classNames, href, variant = 'ghost', color = 'primary' }: AppLinkType) => {

  const variantMap: Record<VariantsAppLinkType, string> = {
    filled: styles.link_filled,
    outline: styles.link_outline,
    ghost: styles.link_ghost
  }

  const colorMap: Record<ColorsAppLinkType, string> = {
    primary: styles.link_primary,
    neutral: styles.link_neutral,
  }

  return (
    <Link
      href={href}
      className={cls(styles.link, variantMap[variant], colorMap[color], classNames)}
    >
      {children}
    </Link>
  )
}