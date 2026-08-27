import type { ContactFormData } from "../../types/contact";

export type ContactFieldName = keyof ContactFormData;

export type FormErrors = Partial<
  Record<ContactFieldName, string>
>;

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export function validateField(
  field: ContactFieldName,
  formData: ContactFormData,
): string | null {
  switch (field) {
    case "name":
      if (!formData.name.trim()) {
        return "Please correct the highlighted fields.";
      }

      return null;

    case "email":
      if (!formData.email.trim()) {
        return "Please enter your email address.";
      }

      if (!emailRegex.test(formData.email)) {
        return "Please enter a valid email address.";
      }

      return null;

    case "message":
      if (!formData.message.trim()) {
        return "Please enter a message.";
      }

      if (formData.message.trim().length < 10) {
        return "Your message should be at least 10 characters.";
      }

      return null;

    case "consent":
      if (!formData.consent) {
        return "Please agree to be contacted.";
      }

      return null;

    default:
      return null;
  }
}

export function validateForm(
  formData: ContactFormData,
): FormErrors {
  const errors: FormErrors = {};

  const requiredFields: ContactFieldName[] = [
    "name",
    "email",
    "message",
    "consent",
  ];

  requiredFields.forEach((field) => {
    const error = validateField(field, formData);

    if (error) {
      errors[field] = error;
    }
  });

  return errors;
}