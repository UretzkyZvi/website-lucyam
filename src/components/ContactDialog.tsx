"use client";

import {
  Credenza,
  CredenzaBody,
  CredenzaClose,
  CredenzaContent,
  CredenzaDescription,
  CredenzaFooter,
  CredenzaHeader,
  CredenzaTitle,
  CredenzaTrigger,
} from "@/components/ui/credenza";
import { Button } from "./ui/button";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "./ui/form";
import { Input } from "./ui/input";
import { RadioGroup, RadioGroupItem } from "./ui/radio-group";
import { Textarea } from "./ui/textarea";
import { api } from "@/trpc/react";
import { toast } from "sonner";
import { useState } from "react";

export function ContactDialog() {
  const [open, setOpen] = useState(false);
  const contactSchema = z.object({
    fullName: z.string().min(4, {
      message: "Please enter your full name, minimum 4 characters",
    }),
    email: z.string().email({
      message: "Please enter a valid email address",
    }),
    message: z.string().min(10, {
      message: "Please enter your message, minimum 10 characters",
    }),
    role: z.enum(["representor", "annotator", "partner", "investor", "other"], {
      required_error: "You need to select a role",
    }),
  });

  const form = useForm<z.infer<typeof contactSchema>>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      fullName: "",
      email: "",
      message: "",
      role: "investor",
    },
  });

  const sendEmail = api.email.sendEmail.useMutation();
  function onSubmit(values: z.infer<typeof contactSchema>) {
    sendEmail.mutate({
      email: values.email,
      message: values.message,
      fullName: values.fullName,
      role: `${values.role}`,
    });
    toast.success("Your message has been sent!");
    setOpen(false);
  }

  return (
    <Credenza onOpenChange={setOpen} open={open}>
      <CredenzaTrigger asChild>
        <Button>Contact us</Button>
      </CredenzaTrigger>
      <CredenzaContent>
        <CredenzaHeader>
          <CredenzaTitle>Contact us - form</CredenzaTitle>
          <CredenzaDescription>
            Fill out the form below to contact us.
          </CredenzaDescription>
        </CredenzaHeader>
        <CredenzaBody>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
              <FormField
                control={form.control}
                name="fullName"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Full Name</FormLabel>
                    <FormControl>
                      <Input placeholder="ex. Lucy AI Manager" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Email</FormLabel>
                    <FormControl>
                      <Input
                        type="email"
                        placeholder="ex. your@email.address"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="role"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>My role</FormLabel>
                    <FormControl>
                      <RadioGroup
                        onValueChange={field.onChange}
                        defaultValue={field.value}
                        className="flex flex-col space-y-1"
                      >
                        <FormItem className="flex items-center space-x-3 space-y-0">
                          <FormControl>
                            <RadioGroupItem value="representor" />
                          </FormControl>
                          <FormLabel className="font-normal">
                            Organization representor
                          </FormLabel>
                        </FormItem>
                        <FormItem className="flex items-center space-x-3 space-y-0">
                          <FormControl>
                            <RadioGroupItem value="annotator" />
                          </FormControl>
                          <FormLabel className="font-normal">
                            Data annotator
                          </FormLabel>
                        </FormItem>
                        <FormItem className="flex items-center space-x-3 space-y-0">
                          <FormControl>
                            <RadioGroupItem value="partner" />
                          </FormControl>
                          <FormLabel className="font-normal">
                            Potential partner
                          </FormLabel>
                        </FormItem>
                        <FormItem className="flex items-center space-x-3 space-y-0">
                          <FormControl>
                            <RadioGroupItem value="investor" />
                          </FormControl>
                          <FormLabel className="font-normal">
                            Potential Investor
                          </FormLabel>
                        </FormItem>
                        <FormItem className="flex items-center space-x-3 space-y-0">
                          <FormControl>
                            <RadioGroupItem value="other" />
                          </FormControl>
                          <FormLabel className="font-normal">Other</FormLabel>
                        </FormItem>
                      </RadioGroup>
                    </FormControl>
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
                        placeholder="ex. Hello Lucy! I'm exited about you and want to hear more about you, let's get in contact."
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <Button type="submit">Submit</Button>
            </form>
          </Form>
        </CredenzaBody>
        <CredenzaFooter>
          <span className="text-xs">
            * We're diligently working to introduce LucyAM to the world, but
            rest assured, we're always here for you. We'll respond to your
            inquiry as swiftly as possible.
          </span>
        </CredenzaFooter>
      </CredenzaContent>
    </Credenza>
  );
}
