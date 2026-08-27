import { MdContacts } from "react-icons/md";

import ContactForm from "./ContactForm";
import contact_page from "../../assets/PNG/contact_page.jpg";

export default function Contact() {
  //we are using web3forms for this form submission
  return (
    <section
      id="contact"
      className="w-full bg-[#000000] px-4 py-0 sm:px-6 lg:px-8"
    >
      <div className="mx-auto max-w-300">
        {/* Header */}
        <div className="mb-7 flex flex-col justify-between gap-5 sm:flex-row sm:items-end">
          <div className="mb-10 max-w-2xl">
            <div className="mb-4 flex items-center gap-3">
              <MdContacts className="text-xl text-blue-400" />

              <span className="text-xs font-semibold uppercase tracking-[0.25em] text-blue-400">
                Get In Touch
              </span>
            </div>
            <h2 className="font-display text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Contact Me
            </h2>

            <p className="mt-4 text-base leading-7 text-[#a1a1aa]">
              Have a project, opportunity, or idea you'd like to discuss? Send
              me a message and I'll get back to you.
            </p>
          </div>
          <div className="mb-10">
            <img
              src={contact_page}
              alt=""
                className="
                relative
                z-10
                h-28
                w-28
                aspect-square
                rounded-full
                object-cover
                transition-all
                duration-500
                group-hover:brightness-110
                sm:h-32
                sm:w-32
                md:h-40
                md:w-40
              "
            />
          </div>
        </div>
        <ContactForm />
      </div>
    </section>
  );
}
