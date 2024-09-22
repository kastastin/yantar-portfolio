import Divider from "@/components/Divider";
import ContactForm from "@/components/ContactForm";
import ContactList from "@/components/lists/ContactList";

const ContactSection = () => {
  return (
    <section id="contact">
      <h2 className="h2-title">Get in touch</h2>

      <Divider marginStyle="my-5 md:my-10" />

      <div className="lg:flex lg:gap-x-10 2xl:gap-x-20">
        <ContactList />

        <div className="lg:order-first lg:w-full lg:flex-1 2xl:order-last 2xl:w-1/3 2xl:flex-none">
          <h3 className="h3-title mt-12 md:mt-14 lg:mt-0">Message Me</h3>

          <Divider marginStyle="mt-1 mb-5 md:mt-2" width="w-6" />

          <ContactForm />
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
