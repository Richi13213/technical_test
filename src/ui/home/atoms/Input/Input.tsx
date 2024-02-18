import type { InputHTMLAttributes } from "react"
import * as styles from "./Input.styles"

export default function Input(props: InputHTMLAttributes<HTMLInputElement>): JSX.Element {
  return (
    <input className={styles.input} {...props} />
  )
}
