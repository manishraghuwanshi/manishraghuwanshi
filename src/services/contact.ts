import type { ContactFormData } from "../types/contact"

const WEB3FORMS_ENDPOINT = "https://api.web3forms.com/submit";

interface Web3FormsResponse {
  success: boolean;
  message: string;
}

export async function submitContactForm(
  data: ContactFormData,
): Promise<Web3FormsResponse> {
  const accessKey = import.meta.env.VITE_WEB3FORMS_ACCESS_KEY;

  if (!accessKey) {
    throw new Error("Web3Forms access key is not configured.");
  }

  const formData = new FormData();

  formData.append("access_key", accessKey);

  formData.append("name", data.name);
  formData.append("email", data.email);
  formData.append("company", data.company);
  formData.append("phone", data.phone);

  formData.append("reason", data.reason);
  formData.append("subject", data.subject);
  formData.append("message", data.message);

  if (data.budget) {
    formData.append("budget", data.budget);
  }

  if (data.attachment) {
    formData.append("attachment", data.attachment);
  }

  // Lets you reply directly to the person's email.
  formData.append("replyto", data.email);

  // Optional metadata for your email.
  formData.append("from_name", "Portfolio Contact Form");

  const response = await fetch(WEB3FORMS_ENDPOINT, {
    method: "POST",
    body: formData,
  });

  if (!response.ok) {
    throw new Error("Unable to submit the contact form.");
  }

  const result: Web3FormsResponse = await response.json();

  if (!result.success) {
    throw new Error(result.message || "Unable to submit the contact form.");
  }

  return result;
}