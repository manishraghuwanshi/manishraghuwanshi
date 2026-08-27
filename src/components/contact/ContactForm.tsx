import { useState, type ChangeEvent, type FormEvent } from "react";
import { useNavigate } from "react-router-dom";

import type { ContactFormData } from "../../types/contact";

import { submitContactForm } from "../../services/contact";

import FormField from "./FormField";
import { budgetOptions, reasonOptions } from "./ContactOptions";
import {
  type ContactFieldName,
  type FormErrors,
  validateField,
  validateForm,
} from "./validation";

const initialFormData: ContactFormData = {
  name: "",
  email: "",
  company: "",
  phone: "",
  reason: "job",
  subject: "",
  message: "",
  budget: "",
  attachment: null,
  consent: false,
};

export default function ContactForm() {
  const [formData, setFormData] = useState<ContactFormData>(initialFormData);

  const [errors, setErrors] = useState<FormErrors>({});

  const [hasSubmitted, setHasSubmitted] = useState(false);

  const [isSubmitting, setIsSubmitting] = useState(false);

  const [successMessage, setSuccessMessage] = useState("");

  const [errorMessage, setErrorMessage] = useState("");

  const isProjectInquiry =
    formData.reason === "freelance" || formData.reason === "collaboration";
  const navigate = useNavigate();

  const handleChange = (
    event: ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >,
  ) => {
    const { name, value } = event.target;

    const nextFormData = {
      ...formData,
      [name]: value,
    };

    setFormData(nextFormData);

    if (hasSubmitted) {
      const field = name as ContactFieldName;

      const fieldError = validateField(field, nextFormData);

      setErrors((previous) => {
        const nextErrors = { ...previous };

        if (fieldError) {
          nextErrors[field] = fieldError;
        } else {
          delete nextErrors[field];
        }

        return nextErrors;
      });
    }

    setSuccessMessage("");
    setErrorMessage("");
  };

  const handleFileChange = (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0] ?? null;

    setFormData((previous) => ({
      ...previous,
      attachment: file,
    }));

    setSuccessMessage("");
    setErrorMessage("");
  };

  const handleConsentChange = (event: ChangeEvent<HTMLInputElement>) => {
    const checked = event.target.checked;

    const nextFormData = {
      ...formData,
      consent: checked,
    };

    setFormData(nextFormData);

    if (hasSubmitted) {
      const fieldError = validateField("consent", nextFormData);

      setErrors((previous) => {
        const nextErrors = { ...previous };

        if (fieldError) {
          nextErrors.consent = fieldError;
        } else {
          delete nextErrors.consent;
        }

        return nextErrors;
      });
    }

    setSuccessMessage("");
    setErrorMessage("");
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    setSuccessMessage("");
    setErrorMessage("");
    setHasSubmitted(true);

    const validationErrors = validateForm(formData);

    setErrors(validationErrors);

    if (Object.keys(validationErrors).length > 0) {
      /*
       * Keep the existing behavior of displaying one general
       * validation message, but now ALL invalid fields are
       * highlighted at the same time.
       */
      const firstError =
        validationErrors.name ??
        validationErrors.email ??
        validationErrors.message ??
        validationErrors.consent ??
        null;

      setErrorMessage(firstError ?? "");

      return;
    }

    try {
      setIsSubmitting(true);

      await submitContactForm(formData);

      navigate("/contact/success", {
        state: { submitted: true },
      });

      setSuccessMessage(
        "Thanks for reaching out! Your message has been sent successfully.",
      );

      setFormData(initialFormData);
      setErrors({});
      setHasSubmitted(false);
    } catch (error) {
      console.error(error);

      setErrorMessage(
        error instanceof Error
          ? error.message
          : "Something went wrong. Please try again.",
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      {/* Form card */}
      <div className="rounded-2xl border border-[#1E3E62]/40 bg-[#0B192C] p-5 shadow-2xl sm:p-8 lg:p-10">
        <form onSubmit={handleSubmit} noValidate>
          {/* Name + Email */}
          <div className="grid gap-6 md:grid-cols-2">
            <FormField label="Name" required invalid={Boolean(errors.name)}>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Your name"
                autoComplete="name"
                className={`${inputClasses} ${
                  errors.name
                    ? "border-red-500 placeholder:text-red-400 focus:border-red-500 focus:ring-red-500/30"
                    : ""
                }`}
              />
            </FormField>

            <FormField label="Email" required invalid={Boolean(errors.email)}>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="you@example.com"
                autoComplete="email"
                className={`${inputClasses} ${
                  errors.email
                    ? "border-red-500 placeholder:text-red-400 focus:border-red-500 focus:ring-red-500/30"
                    : ""
                }`}
              />
            </FormField>
          </div>

          {/* Company + Phone */}
          <div className="mt-6 grid gap-6 md:grid-cols-2">
            <FormField label="Company">
              <input
                type="text"
                name="company"
                value={formData.company}
                onChange={handleChange}
                placeholder="Company name"
                autoComplete="organization"
                className={inputClasses}
              />
            </FormField>

            <FormField label="Phone">
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="+91 XXXXX XXXXX"
                autoComplete="tel"
                className={inputClasses}
              />
            </FormField>
          </div>

          {/* Reason */}
          <div className="mt-6">
            <FormField label="What are you contacting me about?">
              <select
                name="reason"
                value={formData.reason}
                onChange={handleChange}
                className={selectClasses}
              >
                {reasonOptions.map((option) => (
                  <option
                    key={option.value}
                    value={option.value}
                    className="bg-[#0B192C] text-white"
                  >
                    {option.label}
                  </option>
                ))}
              </select>
            </FormField>
          </div>

          {/* Subject */}
          <div className="mt-6">
            <FormField label="Subject">
              <input
                type="text"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                placeholder="What would you like to discuss?"
                className={inputClasses}
              />
            </FormField>
          </div>

          {/* Message */}
          <div className="mt-6">
            <FormField
              label="Message"
              required
              invalid={Boolean(errors.message)}
            >
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Tell me a little about your project or opportunity..."
                rows={6}
                className={`${inputClasses} resize-y ${
                  errors.message
                    ? "border-red-500 placeholder:text-red-400 focus:border-red-500 focus:ring-red-500/30"
                    : ""
                }`}
              />
            </FormField>
          </div>

          {/* Conditional Budget */}
          {isProjectInquiry && (
            <div className="mt-6">
              <FormField label="Budget">
                <select
                  name="budget"
                  value={formData.budget}
                  onChange={handleChange}
                  className={selectClasses}
                >
                  <option value="" className="bg-[#0B192C] text-white">
                    Select a range
                  </option>

                  {budgetOptions.map((option) => (
                    <option
                      key={option.value}
                      value={option.value}
                      className="bg-[#0B192C] text-white"
                    >
                      {option.label}
                    </option>
                  ))}
                </select>
              </FormField>
            </div>
          )}

          {/* Attachment */}
          <div className="mt-6">
            <FormField label="Attachment">
              <div className="rounded-xl border border-dashed border-[#1E3E62] bg-[#000000]/30 p-4 transition-colors hover:border-white/40">
                <input
                  type="file"
                  name="attachment"
                  onChange={handleFileChange}
                  accept=".pdf,.doc,.docx,.png,.jpg,.jpeg"
                  className="block w-full cursor-pointer text-sm text-[#a1a1aa] file:mr-4 file:rounded-lg file:border-0 file:bg-[#1E3E62] file:px-4 file:py-2.5 file:text-sm file:font-semibold file:text-white file:transition-colors hover:file:bg-[#173250]"
                />

                <p className="mt-2 text-xs text-[#71717a]">
                  PDF, DOC, DOCX, PNG, JPG or JPEG.
                </p>

                {formData.attachment && (
                  <p className="mt-2 text-sm text-white">
                    Selected:{" "}
                    <span className="text-[#a1a1aa]">
                      {formData.attachment.name}
                    </span>
                  </p>
                )}
              </div>
            </FormField>
          </div>

          {/* Consent */}
          <div className="mt-7">
            <FormField label="" invalid={Boolean(errors.consent)}>
              <label className="flex cursor-pointer items-start gap-3">
                <input
                  type="checkbox"
                  name="consent"
                  checked={formData.consent}
                  onChange={handleConsentChange}
                  className={`mt-1 h-4 w-4 shrink-0 cursor-pointer accent-[#1E3E62] ${
                    errors.consent ? "accent-red-500" : ""
                  }`}
                />

                <span
                  className={`text-sm leading-6 ${
                    errors.consent ? "text-red-400" : "text-[#a1a1aa]"
                  }`}
                >
                  I agree to be contacted regarding my message.
                </span>
              </label>
            </FormField>
          </div>

          {/* Status messages */}
          {errorMessage && (
            <div
              role="alert"
              className="mt-6 rounded-xl border border-red-500/30 bg-red-500/10 px-4 py-3 text-sm text-red-300"
            >
              {errorMessage}
            </div>
          )}

          {successMessage && (
            <div
              role="status"
              className="mt-6 rounded-xl border border-emerald-500/30 bg-emerald-500/10 px-4 py-3 text-sm text-emerald-300"
            >
              {successMessage}
            </div>
          )}

          {/* Submit */}
          <div className="mt-8">
            <button
              type="submit"
              disabled={isSubmitting}
              className="
                group
                relative
                inline-flex
                w-full
                items-center
                justify-center
                overflow-hidden
                rounded-xl
                p-px
                transition-all
                focus:outline-none
                focus:ring-2
                focus:ring-[#1E3E62]/60
                disabled:cursor-not-allowed
                disabled:opacity-50
                sm:w-auto

                before:absolute
                before:inset-[-150%]
                before:bg-[conic-gradient(from_0deg,transparent_0deg,transparent_300deg,#1E3E62_330deg,#A8C7DF_350deg,transparent_360deg)]
                before:animate-[border-snake_3s_linear_infinite]
              "
            >
              <span
                className="
                  relative
                  block
                  w-full
                  rounded-[calc(0.75rem-1px)]
                  bg-[#1E3E62]
                  px-6
                  py-3.5
                  text-sm
                  font-bold
                  text-[#A8C7DF]
                  transition-all
                  group-hover:bg-[#1E3E62]
                  group-hover:text-white
                  sm:w-auto
                "
              >
                {isSubmitting ? "Sending..." : "Send Message"}
              </span>
            </button>
          </div>
        </form>
      </div>
    </>
  );
}

/* =========================================================
   Shared Tailwind classes
   ========================================================= */

const inputClasses =
  "w-full rounded-xl border border-[#1E3E62]/60 bg-[#000000]/40 px-4 py-3 text-sm text-white outline-none placeholder:text-[#71717a] transition-all focus:border-white/60 focus:ring-2 focus:ring-[#1E3E62]/30";

const selectClasses =
  "w-full cursor-pointer appearance-none rounded-xl border border-[#1E3E62]/60 bg-[#000000]/40 px-4 py-3 text-sm text-white outline-none transition-all focus:border-white/60 focus:ring-2 focus:ring-[#1E3E62]/30";
