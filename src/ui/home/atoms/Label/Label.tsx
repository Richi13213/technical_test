import type { LabelProps } from "@typing/props"
import * as styles from "./Label.styles"

export default function Label({ id, children }: LabelProps): JSX.Element {
  return (
    <label className={styles.label} htmlFor={id}>{children}</label>
  )
}
