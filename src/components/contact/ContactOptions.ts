import type { BudgetRange, ContactReason } from "../../types/contact";

export const reasonOptions: {
  value: ContactReason;
  label: string;
}[] = [
  {
    value: "job",
    label: "Job Opportunity",
  },
  {
    value: "freelance",
    label: "Freelance Project",
  },
  {
    value: "collaboration",
    label: "Collaboration",
  },
  {
    value: "other",
    label: "Other",
  },
];

export const budgetOptions: {
  value: BudgetRange;
  label: string;
}[] = [
  {
    value: "under-25k",
    label: "Under ₹25,000",
  },
  {
    value: "25k-50k",
    label: "₹25,000 – ₹50,000",
  },
  {
    value: "50k-100k",
    label: "₹50,000 – ₹1,00,000",
  },
  {
    value: "100k-plus",
    label: "₹1,00,000+",
  },
];