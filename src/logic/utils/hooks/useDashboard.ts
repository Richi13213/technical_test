import { useEffect, useState } from "react";
import type { UserListInterface } from "@typing/user";
import { handleAllUsers } from "@handlers/users/allUsers";

const useDashboard = () => {
  const [users, setUsers] = useState<UserListInterface[] | boolean>(false);
  const [showForm, setShowForm] = useState<boolean>(false);
  const [refresh, setRefresh] = useState<boolean>(false);

  const hanldeForm = () => {
    setShowForm(!showForm);
  };

  const hanldeRefresh = () => {
    setRefresh(!refresh);
  };

  useEffect(() => {
    const getUserList = async () => {
      const data = await handleAllUsers();
      if (data) {
        setUsers(data);
      }
    };

    getUserList();
  }, [refresh]);

  return { users, hanldeForm, showForm, hanldeRefresh };
};

export default useDashboard;
