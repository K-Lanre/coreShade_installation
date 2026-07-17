import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { useForm as useRHForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Phone, Mail, Clock, MapPin } from "lucide-react";

const formSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Invalid email address"),
  phone: z.string().min(10, "Phone number is required"),
  service: z.string().min(1, "Please select a service"),
  message: z.string().min(10, "Please provide more details"),
});

const contactDetails = [
  {
    icon: Phone,
    title: "Phone",
    value: "+234 (0) 803 268 7681",
    note: "Call or WhatsApp us directly",
  },
  {
    icon: Mail,
    title: "Email",
    value: "inquiries@coreshade.com",
    note: "Send project details and drawings",
  },
  {
    icon: MapPin,
    title: "Location",
    value: "London, United Kingdom",
    note: "Site meetings by appointment",
  },
  {
    icon: Clock,
    title: "Hours",
    value: "Mon - Sat, 8:00 AM - 6:00 PM",
    note: "Response within 24 hours",
  },
];

function buildPrefilledMessage(product, category, delivery) {
  if (!product) {
    return "";
  }

  return `I am interested in ${product}${category ? ` (${category})` : ""}.${delivery ? ` ${delivery}.` : ""} Please share pricing, available options, and next steps for ordering.`;
}

export default function Contact() {
  const [showSuccess, setShowSuccess] = useState(false);
  const [submitError, setSubmitError] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [searchParams] = useSearchParams();
  const selectedProduct = searchParams.get("product") || "";
  const selectedCategory = searchParams.get("category") || "";
  const selectedDelivery = searchParams.get("delivery") || "";

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    setValue,
  } = useRHForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      service: "",
      message: "",
    },
  });

  useEffect(() => {
    const message = buildPrefilledMessage(
      selectedProduct,
      selectedCategory,
      selectedDelivery
    );

    if (message) {
      setValue("message", message, { shouldValidate: true });
    }
  }, [selectedCategory, selectedDelivery, selectedProduct, setValue]);

  useEffect(() => {
    if (!showSuccess) {
      return undefined;
    }

    const timeoutId = window.setTimeout(() => {
      setShowSuccess(false);
    }, 4000);

    return () => window.clearTimeout(timeoutId);
  }, [showSuccess]);

  const onSubmit = async (data) => {
    setSubmitError("");
    setIsSubmitting(true);

    try {
      const response = await fetch(
        import.meta.env.VITE_CONTACT_ENDPOINT || "/api/send-email",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            name: data.name,
            email: data.email,
            phone: data.phone,
            service: data.service,
            message: data.message,
          }),
        }
      );

      const payload = await response.json().catch(() => ({}));

      if (!response.ok) {
        throw new Error(payload.message || "We could not send your inquiry right now.");
      }

      setShowSuccess(true);
      reset({
        name: "",
        email: "",
        phone: "",
        service: "",
        message: buildPrefilledMessage(
          selectedProduct,
          selectedCategory,
          selectedDelivery
        ),
      });
    } catch (error) {
      setSubmitError(
        error instanceof Error
          ? error.message
          : "Something went wrong while sending the inquiry."
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  const inputClass = (hasError) =>
    `w-full rounded-2xl border bg-transparent px-4 py-3 text-sm outline-none transition-colors duration-300 ${
      hasError
        ? "border-red-500 text-red-500 placeholder:text-red-300"
        : "border-brand/15 text-brand placeholder:text-brand/35 focus:border-brand dark:border-petal/15 dark:text-petal dark:placeholder:text-cocoa/60 dark:focus:border-petal"
    }`;

  return (
    <div className="min-h-screen bg-petal text-brand transition-colors duration-300 dark:bg-brand dark:text-petal">
      <section className="relative h-[55vh] min-h-[450px] flex items-center overflow-hidden px-6 md:px-12 lg:px-16">
        {/* Hero background image */}
        <div className="absolute inset-0">
          <img
            src="/Bespoke.png"
            alt="Contact hero"
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-brand/65 transition-colors duration-300 dark:bg-brand/85" />
        </div>
        <div className="relative z-10 mx-auto max-w-6xl w-full">
          <span className="mb-4 inline-block text-[10px] font-bold uppercase tracking-[0.28em] text-petal/70 dark:text-cocoa-soft">
            Contact
          </span>
          <h1 className="max-w-3xl text-4xl font-serif leading-tight text-petal md:text-5xl lg:text-6xl">
            Tell us about your project and we'll help you plan the right next
            step.
          </h1>
          <p className="mt-5 max-w-2xl text-sm leading-relaxed text-petal/80 dark:text-cocoa-soft md:text-base">
            We support blind supply, installation planning, site coordination,
            and fit-out inquiries for commercial and residential interiors.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-10 md:px-12 lg:px-16">
        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {contactDetails.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.title}
                className="rounded-[1.5rem] border border-brand/10 bg-white p-5 transition-colors duration-300 dark:border-petal/10 dark:bg-brand-muted"
              >
                <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-2xl bg-brand/8 text-brand dark:bg-petal/10 dark:text-petal">
                  <Icon size={18} />
                </div>
                <h2 className="text-sm font-bold uppercase tracking-[0.2em] text-brand/55 dark:text-cocoa-soft">
                  {item.title}
                </h2>
                <p className="mt-3 font-serif text-xl text-brand dark:text-petal">
                  {item.value}
                </p>
                <p className="mt-2 text-sm text-brand/60 dark:text-cocoa-soft">
                  {item.note}
                </p>
              </div>
            );
          })}
        </div>
      </section>

      <section className="mx-auto grid max-w-6xl gap-8 px-6 pb-24 md:px-12 lg:grid-cols-[1.1fr_0.9fr] lg:px-16">
        <div className="rounded-[1.8rem] border border-brand/10 bg-white p-7 shadow-[0_18px_45px_rgba(79,40,31,0.08)] transition-colors duration-300 dark:border-petal/10 dark:bg-brand-muted md:p-8">
          <h2 className="text-3xl font-serif text-brand dark:text-petal">
            Send an Inquiry
          </h2>
          <p className="mt-3 max-w-xl text-sm leading-relaxed text-brand/60 dark:text-cocoa-soft">
            Share your requirements, preferred timeline, and any drawings or
            references you already have.
          </p>

          {selectedProduct && (
            <div className="mt-6 rounded-[1.4rem] border border-brand/10 bg-petal/55 p-5 dark:border-petal/10 dark:bg-brand/40">
              <span className="mb-2 block text-[10px] font-bold uppercase tracking-[0.24em] text-brand/45 dark:text-cocoa-soft">
                Selected Product
              </span>
              <h3 className="text-2xl font-serif text-brand dark:text-petal">
                {selectedProduct}
              </h3>
              {selectedCategory && (
                <p className="mt-2 text-xs uppercase tracking-[0.2em] text-brand/55 dark:text-cocoa-soft">
                  Category: {selectedCategory}
                </p>
              )}
              {selectedDelivery && (
                <p className="mt-2 text-sm text-brand/75 dark:text-petal">
                  {selectedDelivery}
                </p>
              )}
            </div>
          )}

          <form onSubmit={handleSubmit(onSubmit)} className="mt-8 space-y-5">
            <div className="grid gap-5 md:grid-cols-2">
              <div>
                <input
                  {...register("name")}
                  className={inputClass(errors.name)}
                  placeholder="Full name"
                />
                {errors.name && (
                  <span className="mt-1 block text-xs text-red-500">
                    {errors.name.message}
                  </span>
                )}
              </div>
              <div>
                <input
                  type="email"
                  {...register("email")}
                  className={inputClass(errors.email)}
                  placeholder="Email address"
                />
                {errors.email && (
                  <span className="mt-1 block text-xs text-red-500">
                    {errors.email.message}
                  </span>
                )}
              </div>
            </div>

            <div className="grid gap-5 md:grid-cols-2">
              <div>
                <input
                  type="tel"
                  {...register("phone")}
                  className={inputClass(errors.phone)}
                  placeholder="Phone number"
                />
                {errors.phone && (
                  <span className="mt-1 block text-xs text-red-500">
                    {errors.phone.message}
                  </span>
                )}
              </div>
              <div>
                <select
                  {...register("service")}
                  className={`${inputClass(errors.service)} appearance-none cursor-pointer bg-transparent`}
                  defaultValue=""
                >
                  <option value="" disabled className="text-brand">
                    Select project type
                  </option>
                  <option value="Commercial Office" className="text-brand">
                    Commercial Office Fit-Out
                  </option>
                  <option value="Healthcare/Education" className="text-brand">
                    Healthcare & Education Facility
                  </option>
                  <option value="Hospitality" className="text-brand">
                    Hotels & Hospitality Contract
                  </option>
                  <option value="Residential" className="text-brand">
                    Residential Developments
                  </option>
                  <option value="Retail/Mixed" className="text-brand">
                    Retail & Mixed-Use Developments
                  </option>
                </select>
                {errors.service && (
                  <span className="mt-1 block text-xs text-red-500">
                    {errors.service.message}
                  </span>
                )}
              </div>
            </div>

            <div>
              <textarea
                {...register("message")}
                rows="6"
                className={`${inputClass(errors.message)} resize-none`}
                placeholder="Tell us about the project scope, location, and timing."
              ></textarea>
              {errors.message && (
                <span className="mt-1 block text-xs text-red-500">
                  {errors.message.message}
                </span>
              )}
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              aria-busy={isSubmitting}
              className="inline-flex items-center justify-center rounded-full bg-brand px-6 py-3 text-[11px] font-bold uppercase tracking-[0.22em] text-petal transition-colors hover:bg-brand-light disabled:cursor-not-allowed disabled:opacity-70 dark:bg-petal dark:text-brand dark:hover:bg-cocoa-soft"
            >
              {isSubmitting ? "Sending..." : "Submit Inquiry"}
            </button>
            {submitError && (
              <p className="text-sm text-red-500" role="alert">
                {submitError}
              </p>
            )}
          </form>
        </div>

        <div className="space-y-6">
          <div className="rounded-[1.8rem] border border-brand/10 bg-white p-7 transition-colors duration-300 dark:border-petal/10 dark:bg-brand-muted md:p-8">
            <h2 className="text-3xl font-serif text-brand dark:text-petal">
              Visit or Call Us
            </h2>
            <p className="mt-3 text-sm leading-relaxed text-brand/60 dark:text-cocoa-soft">
              We're available for project discussions, measurements, and
              scheduling support. For urgent requests, calling or WhatsApp is
              the fastest route.
            </p>
          </div>

          <div className="overflow-hidden rounded-[1.8rem] border border-brand/10 bg-white shadow-[0_18px_45px_rgba(79,40,31,0.08)] transition-colors duration-300 dark:border-petal/10 dark:bg-brand-muted">
            <div className="aspect-[4/3] w-full">
              <iframe
                title="London Office Map"
                width="100%"
                height="100%"
                frameBorder="0"
                scrolling="no"
                marginHeight="0"
                marginWidth="0"
                src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=86-90%20Paul%20Street,%20London%20EC2A%204NE,%20United%20Kingdom+(Coreshade%20Installation)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
              ></iframe>
            </div>
          </div>
        </div>
      </section>

      {showSuccess && (
        <div className="fixed bottom-6 left-1/2 z-50 w-[calc(100%-2rem)] max-w-md -translate-x-1/2 rounded-[1.4rem] border border-brand/10 bg-white px-5 py-4 shadow-[0_18px_45px_rgba(79,40,31,0.16)] transition-colors duration-300 dark:border-petal/10 dark:bg-brand-muted">
          <div className="flex items-start gap-3">
            <div className="mt-0.5 h-2.5 w-2.5 rounded-full bg-emerald-500" />
            <div className="min-w-0 flex-1">
              <p className="text-sm font-semibold text-brand dark:text-petal">
                Request sent
              </p>
              <p className="mt-1 text-xs leading-relaxed text-brand/65 dark:text-cocoa-soft">
                Your inquiry was received. Weâ€™ll review it and respond within 24 hours.
              </p>
            </div>
            <button
              type="button"
              onClick={() => setShowSuccess(false)}
              className="rounded-full px-2 py-1 text-xs text-brand/50 hover:text-brand dark:text-cocoa-soft dark:hover:text-petal"
              aria-label="Dismiss success message"
            >
              Ã—
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
