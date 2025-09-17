"use server";

import { Resend } from "resend";
import { ContactFormEmailTemplate } from "@/components/email";
import { z } from "zod";
import { formSchema } from "@/lib/schemas";

const resend = new Resend(process.env.RESEND_API_KEY);
type TData = z.infer<typeof formSchema>;

export const SendEmailAction = async (data: TData) => {
  const response = formSchema.safeParse(data);
  if (!response.success) {
    throw new Error("Invalid form data");
  }
  const { name, email, message, phoneNumber, service } = data;
  await resend.emails.send({
    from: "onboarding@resend.dev",
    to: "areliscacerescleaningsolutions@gmail.com",
    subject: `New message from ${name}`,
    replyTo: email,
    react: ContactFormEmailTemplate({
      email,
      name,
      message,
      phoneNumber: phoneNumber || "",
      service,
    }),
  });
};
