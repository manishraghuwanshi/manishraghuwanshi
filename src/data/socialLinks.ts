import type { IconType } from "react-icons";
import { FaGithub, FaLinkedinIn } from "react-icons/fa6";
import { LuMail } from "react-icons/lu";

interface SocialLink {
  label: string;
  href: string;
  icon: IconType;  
}

export const socialLinks: SocialLink[] = [
  {
    label: "GitHub",
    href: "https://github.com/manishraghuwanshi",
    icon: FaGithub,
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/manishraghuwanshi/",
    icon: FaLinkedinIn,
  },
  {
    label: "Email",
    href: "mailto:manishraghuwanshiofficial@gmail.com/",
    icon: LuMail,
  },
];

export const footerLinks = [
  { label: "Home", path: "/" },
  { label: "Experience", path: "/experience" },
  { label: "Projects", path: "/projects" },
  { label: "Education", path: "/education" },
  { label: "Contact", path: "/contact" },
];
