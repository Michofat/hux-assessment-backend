import yup from "yup";

export const emailRegex = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Z|a-z]{2,}$/;

export const createUserSchema = yup.object({
  email: yup
    .string()
    .email("Invalid email address")
    .matches(emailRegex, "Invalid email address")
    .required("Email is required")
    .min(13, "email must be at least 13 characters")
    .max(60, "email must not be more than 60 characters"),
  password: yup
    .string()
    .required("Password is required")
    .min(8, "Password must be at least 8 characters")
    .max(16, "Password must not be more than 16 characters"),
});

export const loginSchema = yup.object({
  email: yup
    .string()
    .email("Invalid email address")
    .matches(emailRegex, "Invalid email address")
    .required("Email is required")
    .max(70, "Email must not be more than 70 characters"),
  password: yup
    .string()
    .required("Password is required")
    .min(8, "Password must be at least 8 characters")
    .max(16, "Password must not be more than 16 characters"),
});
