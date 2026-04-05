import { AppLinkType, VariantsType } from "./types";
import styles from './styles/AppLink.module.scss'
import Link from "next/link";

export const AppLink = ({ variant, children, classnames, href }: AppLinkType) => {

  const variantButton: Record<VariantsType, string> = {
    navLink: styles.button_filled_primary,
    primary: styles.button_filled_primary,
  }

  return (
    <Link href={href} className={`${styles.button} ${variantButton[variant]} `} >
      {children}
    </Link>
  )
}