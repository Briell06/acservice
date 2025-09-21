"use client";
import { toast } from "sonner";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { PhoneInput } from "@/components/ui/phone-input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { SendEmailAction } from "@/lib/actions";
import { Loader } from "lucide-react";
import { Button } from "@/components/ui/button";
import { formSchema } from "@/lib/schemas";

export default function ContactForm() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      phoneNumber: "",
      email: "",
      service: undefined,
      message: "",
    },
  });

  async function onSubmit() {
    const formData = form.getValues();
    const result = formSchema.safeParse(formData);
    if (result.success) {
      try {
        await SendEmailAction(result.data);
        toast.success("El correo fue enviado exitosamente");
      } catch {
        toast.error("Error al enviar el correo");
      }
    } else {
      toast.error("Please fill out all fields");
    }
  }

  return (
    <Card className="border-border mx-auto max-md:w-[95%]">
      <CardHeader>
        <CardTitle className="text-2xl">Send Us a Message</CardTitle>
        <CardDescription>
          Fill out the form below and we&#39;ll get back to you within 24 hours
        </CardDescription>
      </CardHeader>
      <CardContent>
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="mx-auto max-w-3xl space-y-8 py-10"
          >
            <div className="grid max-md:space-y-8 md:grid-cols-2 md:gap-2">
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Full Name</FormLabel>
                    <FormControl>
                      <Input placeholder="Your full name" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="phoneNumber"
                render={({ field }) => (
                  <FormItem className="flex flex-col items-start">
                    <FormLabel>Phone number</FormLabel>
                    <FormControl className="w-full">
                      <PhoneInput
                        placeholder="(555) 123-4567"
                        {...field}
                        defaultCountry="US"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email Address</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="your.email@example.com"
                      type="email"
                      {...field}
                    />
                  </FormControl>

                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="service"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Service</FormLabel>
                  <Select
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                  >
                    <FormControl>
                      <SelectTrigger className="w-full">
                        <SelectValue placeholder="Service Interested In" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      <SelectItem value="building">
                        Building Maintenance And Cleaning
                      </SelectItem>
                      <Separator />
                      <SelectItem value="house">
                        House And Apartment Cleaning
                      </SelectItem>
                      <Separator />
                      <SelectItem value="painting">
                        Interior Painting Services
                      </SelectItem>
                      <Separator />
                      <SelectItem value="multiple">
                        Multiple Services
                      </SelectItem>
                    </SelectContent>
                  </Select>

                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="message"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Message</FormLabel>
                  <FormControl>
                    <Textarea
                      rows={5}
                      placeholder="Tell us about your cleaning needs, property size, frequency, and any special requirements..."
                      className="resize-none"
                      {...field}
                    />
                  </FormControl>

                  <FormMessage />
                </FormItem>
              )}
            />
            <Button
              type="submit"
              disabled={form.formState.isSubmitting}
              className="w-full"
            >
              {form.formState.isSubmitting ? (
                <div className="flex gap-2">
                  <Loader className="animate-spin" />
                  Sending...
                </div>
              ) : (
                "Send Message"
              )}
            </Button>
          </form>
        </Form>
      </CardContent>
    </Card>
  );
}
