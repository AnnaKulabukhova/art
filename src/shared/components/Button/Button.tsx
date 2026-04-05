import { ButtonType, VariantsType } from "./types";
import styles from './styles/Button.module.scss'

export const Button = ({ variant, children, onCLick, classnames }: ButtonType) => {

  const variantButton: Record<VariantsType, string> = {
    filledPrimary: styles.button_filled_primary,
    filledSecondary: styles.button_filled_secondary,
    outlinePrimary: styles.button_outline_primary,
    outlineScondary: styles.button_outline_secondary,
    ghost: styles.button_ghost
  }

  return (
    <button className={`${styles.button} ${variantButton[variant]} `} onClick={onCLick}>
      {children}
    </button>
  )
}