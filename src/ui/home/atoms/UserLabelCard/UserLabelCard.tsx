import type { UserLabelCardProps } from "@typing/props";
import * as styles from "./UserLabelCard.styles";

export default function UserLabelCard({
  children,
  weight = 400,
}: UserLabelCardProps): JSX.Element {
  return <p className={styles.label(weight)}>{children}</p>;
}
