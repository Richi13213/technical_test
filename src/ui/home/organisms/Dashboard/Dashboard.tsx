import { UserImageCard, UserLabelCard } from "@atoms";
import { Form, UserCard } from "@molecules";
import { useDashboard } from "@hooks";
import * as styles from "./Dashboard.styles";
import type { UserListInterface } from "@typing/user";

export default function Dashboard(): JSX.Element {
  const { users, hanldeForm, showForm, hanldeRefresh } = useDashboard();
  return (
    <>
      {showForm && (
        <div className={styles.modal}>
          <Form close={hanldeForm} />
        </div>
      )}
      <section className={styles.head_container}>
        <p className={styles.head_title}>User dashboard</p>
        <div className={styles.actions}>
          <button onClick={hanldeRefresh}>Reload list</button>
          <button onClick={hanldeForm}>Create user</button>
        </div>
      </section>
      <section className={styles.container}>
        <div className={styles.user_list_container}>
          {Array.isArray(users) &&
            users.map(
              ({
                id,
                nombre,
                apellidoPaterno,
                apellidoMaterno,
                edad,
                email,
                fechaNac,
                datos,
              }: UserListInterface) => (
                <UserCard key={`user-${id}-${name}`}>
                  <UserImageCard id={id} name={nombre} src={datos.imagen} />
                  <UserLabelCard weight={900}>
                    {nombre} {apellidoPaterno} {apellidoMaterno}
                  </UserLabelCard>
                  <UserLabelCard weight={900}>
                    <b>Email</b>
                    {email}
                  </UserLabelCard>
                  <div className={styles.row_container}>
                    <div className={styles.column_container}>
                      <UserLabelCard weight={900}>Age</UserLabelCard>
                      <UserLabelCard>{edad}</UserLabelCard>
                    </div>
                    <div className={styles.column_container}>
                      <UserLabelCard weight={900}>Birthday</UserLabelCard>
                      <UserLabelCard>{fechaNac}</UserLabelCard>
                    </div>
                  </div>
                  <UserLabelCard>
                    <b>Address: </b> {datos.calle} {", "} {datos.numero} {", "}{" "}
                    {datos.colonia} {", "} {datos.cp} {", "} {datos.delegacion}{" "}
                    {", "} {datos.estado}
                  </UserLabelCard>
                </UserCard>
              )
            )}
        </div>
      </section>
    </>
  );
}
