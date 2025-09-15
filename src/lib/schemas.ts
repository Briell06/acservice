import { z } from "zod";

export const formSchema = z.object({
  name: z
    .string({ error: "This camp is required" })
    .min(1, { error: "Full name is required" }),
  phoneNumber: z.string().optional(),
  email: z.email("Invalid email address"),
  service: z.enum(["building", "house", "painting", "multiple"]),
  message: z.string().min(1, { error: "Message is required" }),
});
