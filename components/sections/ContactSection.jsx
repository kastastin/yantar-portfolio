import Divider from "@/components/Divider";
import ContactForm from "@/components/ContactForm";
import ContactList from "@/components/lists/ContactList";

const ContactSection = () => {
  return (
    <section id="contact">
      <h2 className="h2-title">Get in touch</h2>

      <Divider marginStyle="my-5 md:my-10" />

      <ContactList />

      <h3 className="h3-title mt-12 md:mt-14">Message Me</h3>

      <Divider marginStyle="mt-1 mb-5 md:mt-2" width="w-6" />

      <ContactForm />
    </section>
  );
};

export default ContactSection;
