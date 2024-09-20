import Divider from "@/components/Divider";
import ContactForm from "@/components/ContactForm";
import ContactList from "@/components/lists/ContactList";

const ContactSection = () => {
  return (
    <section>
      <h2 className="h2-title">Get in touch</h2>

      <Divider marginStyle="my-5" />

      <ContactList />

      <Divider marginStyle="my-5" />

      <ContactForm />
    </section>
  );
};

export default ContactSection;
