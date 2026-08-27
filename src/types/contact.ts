export type ContactReason =
  | "job"
  | "freelance"
  | "collaboration"
  | "other";

export type BudgetRange =
  | "under-25k"
  | "25k-50k"
  | "50k-100k"
  | "100k-plus";

export interface ContactFormData {
  name: string;
  email: string;
  company: string;
  phone: string;
  reason: ContactReason;
  subject: string;
  message: string;
  budget: BudgetRange | "";
  attachment: File | null;
  consent: boolean;
}