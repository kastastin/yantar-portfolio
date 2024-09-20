"use client";

import { useRef } from "react";
import Image from "next/image";

import { toast } from "@/hooks/use-toast";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

const ContactForm = () => {
  const inputNameRef = useRef();
  const inputEmailRef = useRef();
  const inputMessageRef = useRef();

  const formHandler = async (e) => {
    e.preventDefault();

    const name = inputNameRef.current.value;
    const email = inputEmailRef.current.value;
    const message = inputMessageRef.current.value;

    try {
      const chatId = process.env.NEXT_PUBLIC_CHAT_ID;
      const botToken = process.env.NEXT_PUBLIC_BOT_TOKEN;
      const text = `Yantar Portfolio Form:%0A%0AName: ${name}%0AEmail: ${email}%0AMessage: ${message}`;

      const requestURL = `https://api.telegram.org/bot${botToken}/sendMessage?chat_id=${chatId}&text=${text}`;

      const response = await fetch(requestURL);
      const data = await response.json();

      if (!data.ok) return toast({
        title: "Error sending message!",
        description: "Something went wrong. Please try again.",
        variant: "destructive",
      });;
      
      // Clear inputs
      inputNameRef.current.value = "";
      inputEmailRef.current.value = "";
      inputMessageRef.current.value = "";

      toast({
        title: "Message successfully sent!",
        description: "I will get back to you as soon as possible.",
      });
    } catch (error) {
      return toast({
        title: "Error sending message!",
        description: "Something went wrong. Please try again.",
        variant: "destructive",
      });
    }
  };

  return (
    <form onSubmit={formHandler} className="flex flex-col gap-y-5 sm:gap-y-10">
      <div className="relative flex items-center">
        <Input type="name" placeholder="Name" ref={inputNameRef} required />
      </div>

      <div className="relative flex items-center">
        <Input type="email" placeholder="Email" ref={inputEmailRef} required />
      </div>

      <div className="relative flex items-center">
        <Textarea
          placeholder="Type message here..."
          ref={inputMessageRef}
          required
        />
      </div>

      <button
        href="/cv.pdf"
        download
        className="transition-all-03 group inline-flex w-max items-center gap-x-2 rounded-full border border-black bg-black px-6 py-2 font-montserrat text-xs font-semibold uppercase text-white hover:bg-transparent hover:text-black"
      >
        Send message
        <Image
          src="/icons/mail.svg"
          alt="Message"
          width={14}
          height={14}
          className="transition-all-03 relative invert group-hover:invert-0"
        />
      </button>
    </form>
  );
};

export default ContactForm;
