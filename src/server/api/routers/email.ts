import { z } from "zod";
import { createTRPCRouter, publicProcedure } from "@/server/api/trpc";
import * as SendGrid from '@sendgrid/mail';
import { env } from "@/env";

SendGrid.setApiKey(env.SENDGRID_API_KEY);

export const emailRouter = createTRPCRouter({
  sendEmail: publicProcedure
    .input(z.object({
      fullName: z.string(),
      email: z.string(),
      role: z.string(),
      message: z.string(),
    }))
    .mutation(async ({ input }) => {
      const mailOptions: SendGrid.MailDataRequired[] = [{
        from: "greg@lucyam.com", // Ensure this email is verified with SendGrid
        to: "greg@lucyam.com",
        subject: `[Lucy AM web] from ${input.fullName} <${input.email}>, role: ${input.role}`,
        text: input.message,
        html: `<strong>${input.message}</strong>`, // HTML body content
      }, {
        from: "greg@lucyam.com", // Ensure this email is verified with SendGrid
        to: "matthew@lucyam.com",
        subject: `[Lucy AM web] from ${input.fullName} <${input.email}>, role: ${input.role}`,
        text: input.message,
        html: `<strong>${input.message}</strong>`, // HTML body content
      }];

      try {
        await SendGrid.send(mailOptions);
        return {
          success: true,
          message: "Email sent successfully."
        };
      } catch (error) {
        console.error("SendGrid Error:", error); // Log the error for debugging purposes

        // Provide a more detailed message based on the error if needed
        return {
          success: false,
          message: "Failed to send email. Please try again later."
        };
      }
    }),
});
