import type { UserCardProps } from "@typing/props";
import * as styles from "./UserCard.styles";

export default function UserCard({ children }: UserCardProps): JSX.Element {
  const normalizedChildren = Array.isArray(children) ? children : [children];
  return <div className={styles.card}>{normalizedChildren}</div>;
}
