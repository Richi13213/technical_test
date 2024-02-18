import { UserInterface, CreateUserInterface } from "@typing/user";
import { getAllUsers } from "@services/user/get";

export const handleAllUsers = async () => {
  try {
    const response = await getAllUsers();
    return response;
  } catch (error) {
    console.log(error);
    return false;
  }
};
