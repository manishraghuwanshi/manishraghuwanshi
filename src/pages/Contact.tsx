import ContactForm from "../components/contact/Contact";

export default function Contact() {
  return (
    <section
      id="contact"
      className="w-full bg-[#000000] px-4 py-10 sm:px-6 lg:px-8"
    >
      <div className="mx-auto max-w-300">
        {/* Contact heading */}

        <ContactForm />

      </div>
    </section>
  );
}