import { ReactNode } from "react";
import { ErrorLabelProps } from "@typing/props";
import * as styles from "./ErrorLabel.styles";

export default function ErrorLabel({ children }: ErrorLabelProps): JSX.Element {
  return <small className={styles.label}>{children}</small>;
}
