import { ButtonType, ColorsButtonType, VariantsButtonType } from "./types";
import styles from './styles/Button.module.scss'
import { cls } from "../../helpers/classNames/classNames";

export const Button = ({ children, onCLick, classNames, variant = 'filled', color = 'neutral' }: ButtonType) => {

  const variantMap: Record<VariantsButtonType, string> = {
    filled: styles.button_filled,
    outline: styles.button_outline,
    ghost: styles.button_ghost
  }

  const colorMap: Record<ColorsButtonType, string> = {
    primary: styles.button_primary,
    neutral: styles.button_neutral,
  }

  return (
    <button
      className={cls(styles.button, variantMap[variant], colorMap[color], classNames)}
      onClick={onCLick}
    >
      {children}
    </button>
  )
}