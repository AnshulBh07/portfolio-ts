import { IContactForm } from "../data/interfaces";

// a function to validate form
export const validateForm: (data: IContactForm) => [boolean, number] = (
  data: IContactForm
) => {
  const { name, email, message } = data;

  // validating name
  // a name should not contain numbers or shouldn't be empty
  if (name === "") return [false, 0];
  for (let i = 0; i < 10; i++) {
    if (name.includes("" + i)) return [false, 0];
  }

  //validating email
  // we will use a regular expression
  //eslint-disable-next-line
  const regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  if (email === "") return [false, 1];

  if (!regex.test(email)) return [false, 1];

  //   validating message
  if (message === "") return [false, 2];

  return [true, -1];
};
