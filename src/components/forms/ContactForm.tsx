"use client";

import { FC, useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { toast } from "sonner";
import { Loader2 } from "lucide-react";
import { cn } from "@/lib/utils";

const formSchema = z.object({
  name: z.string().min(2, "Name is required"),
  email: z.string().email("Invalid email address"),
  phone: z.string().min(10, "Phone number is required"),
  message: z.string().min(10, "Message must be at least 10 characters"),
  sms_consent: z.boolean().refine((val) => val === true, {
    message: "You must agree to the SMS consent",
  }),
});

type FormData = z.infer<typeof formSchema>;

export const ContactForm: FC = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      message: "",
      sms_consent: false,
    },
  });

  const onSubmit = async (data: FormData) => {
    setIsSubmitting(true);
    try {
      const response = await fetch("https://americanseohub.com/api/v1/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        throw new Error("Failed to submit form");
      }

      toast.success("Thank you! We received your message.");
      reset();
    } catch (error) {
      toast.error("Something went wrong. Please try again.");
      console.error(error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-2">
          <label htmlFor="name" className="text-sm font-medium text-foreground">
            Full Name
          </label>
          <input
            {...register("name")}
            id="name"
            placeholder="Full Name"
            className={cn(
              "flex h-12 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
              errors.name && "border-red-500 focus-visible:ring-red-500"
            )}
          />
          {errors.name && (
            <span className="text-xs text-red-500">{errors.name.message}</span>
          )}
        </div>

        <div className="space-y-2">
          <label htmlFor="email" className="text-sm font-medium text-foreground">
            Email
          </label>
          <input
            {...register("email")}
            id="email"
            type="email"
            placeholder="Email Address"
            className={cn(
              "flex h-12 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
              errors.email && "border-red-500 focus-visible:ring-red-500"
            )}
          />
          {errors.email && (
            <span className="text-xs text-red-500">{errors.email.message}</span>
          )}
        </div>
      </div>

      <div className="space-y-2">
        <label htmlFor="phone" className="text-sm font-medium text-foreground">
          Phone No
        </label>
        <input
          {...register("phone")}
          id="phone"
          type="tel"
          placeholder="Phone Number"
          className={cn(
            "flex h-12 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
            errors.phone && "border-red-500 focus-visible:ring-red-500"
          )}
        />
        {errors.phone && (
          <span className="text-xs text-red-500">{errors.phone.message}</span>
        )}
      </div>

      <div className="space-y-2">
        <label htmlFor="message" className="text-sm font-medium text-foreground">
          Tell Us About Your Project
        </label>
        <textarea
          {...register("message")}
          id="message"
          rows={4}
          placeholder="Message"
          className={cn(
            "flex min-h-[120px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
            errors.message && "border-red-500 focus-visible:ring-red-500"
          )}
        />
        {errors.message && (
          <span className="text-xs text-red-500">{errors.message.message}</span>
        )}
      </div>

      <div className="space-y-2">
        <div className="flex items-start gap-3">
          <input
            {...register("sms_consent")}
            id="sms_consent"
            type="checkbox"
            className="mt-1 h-4 w-4 rounded border-gray-300 text-primary focus:ring-primary"
          />
          <label htmlFor="sms_consent" className="text-xs text-muted-foreground leading-relaxed">
            By checking this box, you agree to receive SMS text messages from The Pulp House Publishing regarding customer questions, order updates, promotional offers, newsletter updates, and other support inquiries. Reply STOP to opt-out at any time. Reply HELP for customer care information. Message and data rates may apply. Message frequency may vary. You may review our{" "}
            <a href="/privacy-policy" target="_blank" className="text-primary hover:underline">
              Privacy Policy
            </a>{" "}
            and{" "}
            <a href="/terms-of-service" target="_blank" className="text-primary hover:underline">
              Terms of Service
            </a>{" "}
            to learn how your data is used.
          </label>
        </div>
        {errors.sms_consent && (
          <span className="text-xs text-red-500 block">{errors.sms_consent.message}</span>
        )}
      </div>

      <button
        type="submit"
        disabled={isSubmitting}
        className="btn btn-primary w-full"
      >
        {isSubmitting ? (
          <>
            <Loader2 className="w-4 h-4 mr-2 animate-spin" />
            Sending...
          </>
        ) : (
          "Let's Begin"
        )}
      </button>
    </form>
  );
};
