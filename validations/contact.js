import yup from "yup";

export const createContactSchema = yup.object({
  firstName: yup
    .string()
    .required("First name is required")
    .min(2, "First name must be at least 2 characters")
    .max(40, "First name must not be more than 40 characters"),
  lastName: yup
    .string()
    .required("Last name is required")
    .min(2, "Last name must be at least 2 characters")
    .max(40, "Last name must not be more than 40 characters"),
  phoneNumber: yup
    .string()
    .required("Phone number is required")
    .min(10, "Phone number must be at least 10 characters")
    .max(15, "Phone number must not be more than 40 characters"),
});
