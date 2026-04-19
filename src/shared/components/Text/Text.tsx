import { ColorTextType, TextType, TextVariant, WeightType } from "./types"
import styles from './styles/Text.module.scss'
import { cls } from "../../helpers/classNames/classNames"

export const Text = (prop: TextType) => {
  const {
    className,
    children,
    tag: Tag = 'p',
    variant = 'text',
    weight = '400',
    color = 'primary'
  } = prop

  const textMap: Record<TextVariant, string> = {
    title: styles.text_title,
    suptitle: styles.text_suptitle,
    paragraph: styles.text_paragraph,
    text: styles.text_text,
  }

  const weightMap: Record<WeightType, string> = {
    "400": styles.text_regular,
    "600": styles.text_semibold,
    "700": styles.text_bold,
  }

  const colorMap: Record<ColorTextType, string> = {
    primary: styles.text_primary,
    inverted: styles.text_inverted,
    accent: styles.text_acceent,
  }

  return (
    <Tag className={cls(
      styles.text,
      colorMap[color],
      textMap[variant],
      weightMap[weight],
      className
    )}>
      {children}
    </Tag>
  )
}