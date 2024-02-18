import { UserInterface, CreateUserInterface } from "@typing/user";
import { createUserService } from "@services/user/create";

export const handleSubmit = async (
  user: UserInterface | CreateUserInterface
) => {
  try {
    if ("id" in user) {
      console.log("edit user");
      return true;
    } else {
      const response = await createUserService(user);
      return response;
    }
  } catch (error) {
    console.log(error);
    return false;
  }
};
