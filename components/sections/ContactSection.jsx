import Divider from "@/components/Divider";
import ContactList from "../lists/ContactList";

const ContactSection = () => {
  return (
    <section>
      <h2 className="h2-title">Get in touch</h2>

      <Divider marginStyle="my-5" />

      <ContactList />

      <Divider marginStyle="my-5" />
    </section>
  );
};

export default ContactSection;
