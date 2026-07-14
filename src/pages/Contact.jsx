import React, { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { useForm as useRHForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { Phone, Mail, Clock, MapPin } from 'lucide-react';
import { Modal } from 'react-responsive-modal';

const formSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.string().email('Invalid email address'),
  phone: z.string().min(10, 'Phone number is required'),
  service: z.string().min(1, 'Please select a service'),
  message: z.string().min(10, 'Please provide more details'),
  file: z.any().optional(),
});

const contactDetails = [
  {
    icon: Phone,
    title: 'Phone',
    value: '+234 (0) 803 268 7681',
    note: 'Call or WhatsApp us directly',
  },
  {
    icon: Mail,
    title: 'Email',
    value: 'inquiries@coreshade.com',
    note: 'Send project details and drawings',
  },
  {
    icon: MapPin,
    title: 'Location',
    value: 'London, United Kingdom',
    note: 'Site meetings by appointment',
  },
  {
    icon: Clock,
    title: 'Hours',
    value: 'Mon - Sat, 8:00 AM - 6:00 PM',
    note: 'Response within 24 hours',
  },
];

export default function Contact() {
  const [showSuccess, setShowSuccess] = useState(false);
  const [searchParams] = useSearchParams();
  const selectedProduct = searchParams.get('product') || '';
  const selectedCategory = searchParams.get('category') || '';
  const selectedDelivery = searchParams.get('delivery') || '';

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    setValue,
  } = useRHForm({
    resolver: zodResolver(formSchema),
  });

  useEffect(() => {
    if (!selectedProduct) {
      return;
    }

    const message = `I am interested in ${selectedProduct}${selectedCategory ? ` (${selectedCategory})` : ''}.${selectedDelivery ? ` ${selectedDelivery}.` : ''} Please share pricing, available options, and next steps for ordering.`;
    setValue('message', message, { shouldValidate: true });
  }, [selectedCategory, selectedDelivery, selectedProduct, setValue]);

  const onSubmit = (data) => {
    console.log('Form Data:', data);
    setShowSuccess(true);
    reset();
  };

  const inputClass = (hasError) =>
    `w-full rounded-2xl border bg-transparent px-4 py-3 text-sm outline-none transition-colors duration-300 ${
      hasError
        ? 'border-red-500 text-red-500 placeholder:text-red-300'
        : 'border-brand/15 text-brand placeholder:text-brand/35 focus:border-brand dark:border-petal/15 dark:text-petal dark:placeholder:text-cocoa/60 dark:focus:border-petal'
    }`;

  return (
    <div className="min-h-screen bg-petal pt-24 text-brand transition-colors duration-300 dark:bg-brand dark:text-petal">
      <section className="border-b border-brand/10 bg-[#f8e7ed] px-6 py-16 transition-colors duration-300 dark:border-petal/10 dark:bg-[#321812] md:px-12 lg:px-16 lg:py-20">
        <div className="mx-auto max-w-6xl">
          <span className="mb-4 inline-block text-[10px] font-bold uppercase tracking-[0.28em] text-brand/50 dark:text-cocoa-soft">
            Contact
          </span>
          <h1 className="max-w-3xl text-4xl font-serif leading-tight text-brand dark:text-petal md:text-5xl lg:text-6xl">
            Tell us about your project and we'll help you plan the right next step.
          </h1>
          <p className="mt-5 max-w-2xl text-sm leading-relaxed text-brand/65 dark:text-cocoa-soft md:text-base">
            We support blind supply, installation planning, site coordination, and fit-out inquiries for commercial and residential interiors.
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
                <p className="mt-3 font-serif text-xl text-brand dark:text-petal">{item.value}</p>
                <p className="mt-2 text-sm text-brand/60 dark:text-cocoa-soft">{item.note}</p>
              </div>
            );
          })}
        </div>
      </section>

      <section className="mx-auto grid max-w-6xl gap-8 px-6 pb-24 md:px-12 lg:grid-cols-[1.1fr_0.9fr] lg:px-16">
        <div className="rounded-[1.8rem] border border-brand/10 bg-white p-7 shadow-[0_18px_45px_rgba(79,40,31,0.08)] transition-colors duration-300 dark:border-petal/10 dark:bg-brand-muted md:p-8">
          <h2 className="text-3xl font-serif text-brand dark:text-petal">Send an Inquiry</h2>
          <p className="mt-3 max-w-xl text-sm leading-relaxed text-brand/60 dark:text-cocoa-soft">
            Share your requirements, preferred timeline, and any drawings or references you already have.
          </p>

          {selectedProduct && (
            <div className="mt-6 rounded-[1.4rem] border border-brand/10 bg-petal/55 p-5 dark:border-petal/10 dark:bg-brand/40">
              <span className="mb-2 block text-[10px] font-bold uppercase tracking-[0.24em] text-brand/45 dark:text-cocoa-soft">
                Selected Product
              </span>
              <h3 className="text-2xl font-serif text-brand dark:text-petal">{selectedProduct}</h3>
              {selectedCategory && (
                <p className="mt-2 text-xs uppercase tracking-[0.2em] text-brand/55 dark:text-cocoa-soft">
                  Category: {selectedCategory}
                </p>
              )}
              {selectedDelivery && (
                <p className="mt-2 text-sm text-brand/75 dark:text-petal">{selectedDelivery}</p>
              )}
            </div>
          )}

          <form onSubmit={handleSubmit(onSubmit)} className="mt-8 space-y-5">
            <div className="grid gap-5 md:grid-cols-2">
              <div>
                <input {...register('name')} className={inputClass(errors.name)} placeholder="Full name" />
                {errors.name && <span className="mt-1 block text-xs text-red-500">{errors.name.message}</span>}
              </div>
              <div>
                <input type="email" {...register('email')} className={inputClass(errors.email)} placeholder="Email address" />
                {errors.email && <span className="mt-1 block text-xs text-red-500">{errors.email.message}</span>}
              </div>
            </div>

            <div className="grid gap-5 md:grid-cols-2">
              <div>
                <input type="tel" {...register('phone')} className={inputClass(errors.phone)} placeholder="Phone number" />
                {errors.phone && <span className="mt-1 block text-xs text-red-500">{errors.phone.message}</span>}
              </div>
              <div>
                <select
                  {...register('service')}
                  className={`${inputClass(errors.service)} appearance-none cursor-pointer bg-transparent`}
                  defaultValue=""
                >
                  <option value="" disabled className="text-brand">
                    Select project type
                  </option>
                  <option value="Commercial Office" className="text-brand">Commercial Office Fit-Out</option>
                  <option value="Healthcare/Education" className="text-brand">Healthcare & Education Facility</option>
                  <option value="Hospitality" className="text-brand">Hotels & Hospitality Contract</option>
                  <option value="Residential" className="text-brand">Residential Developments</option>
                  <option value="Retail/Mixed" className="text-brand">Retail & Mixed-Use Developments</option>
                </select>
                {errors.service && <span className="mt-1 block text-xs text-red-500">{errors.service.message}</span>}
              </div>
            </div>

            <div>
              <textarea
                {...register('message')}
                rows="6"
                className={`${inputClass(errors.message)} resize-none`}
                placeholder="Tell us about the project scope, location, and timing."
              ></textarea>
              {errors.message && <span className="mt-1 block text-xs text-red-500">{errors.message.message}</span>}
            </div>

            <div>
              <label className="mb-2 block text-[10px] font-bold uppercase tracking-[0.24em] text-brand/45 dark:text-cocoa-soft">
                Attach plans or sketches
              </label>
              <input
                type="file"
                {...register('file')}
                className="w-full text-xs text-brand/60 dark:text-cocoa-soft file:mr-4 file:rounded-full file:border-0 file:bg-brand file:px-4 file:py-2 file:text-[10px] file:font-bold file:uppercase file:tracking-[0.2em] file:text-petal hover:file:bg-brand-light dark:file:bg-petal dark:file:text-brand"
              />
            </div>

            <button
              type="submit"
              className="inline-flex items-center justify-center rounded-full bg-brand px-6 py-3 text-[11px] font-bold uppercase tracking-[0.22em] text-petal transition-colors hover:bg-brand-light dark:bg-petal dark:text-brand dark:hover:bg-cocoa-soft"
            >
              Submit Inquiry
            </button>
          </form>
        </div>

        <div className="space-y-6">
          <div className="rounded-[1.8rem] border border-brand/10 bg-white p-7 transition-colors duration-300 dark:border-petal/10 dark:bg-brand-muted md:p-8">
            <h2 className="text-3xl font-serif text-brand dark:text-petal">Visit or Call Us</h2>
            <p className="mt-3 text-sm leading-relaxed text-brand/60 dark:text-cocoa-soft">
              We're available for project discussions, measurements, and scheduling support. For urgent requests, calling or WhatsApp is the fastest route.
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

      <Modal
        open={showSuccess}
        onClose={() => setShowSuccess(false)}
        center
        classNames={{
          modal: 'max-w-md w-full rounded-[1.8rem] border border-brand/10 bg-white p-10 text-center shadow-xl dark:border-petal/10 dark:bg-brand-muted',
        }}
      >
        <h2 className="text-4xl font-serif text-brand dark:text-petal">Request Sent</h2>
        <div className="mx-auto mb-6 mt-4 h-0.5 w-16 bg-brand dark:bg-petal"></div>
        <p className="text-sm font-light leading-relaxed text-brand/65 dark:text-cocoa-soft">
          Your project details have been received. Our team will review the request and respond within 24 hours.
        </p>
        <button
          onClick={() => setShowSuccess(false)}
          className="mt-8 inline-flex items-center justify-center rounded-full border border-brand px-7 py-3 text-[11px] font-bold uppercase tracking-[0.22em] text-brand transition-colors hover:bg-brand hover:text-petal dark:border-petal dark:text-petal dark:hover:bg-petal dark:hover:text-brand"
        >
          Dismiss
        </button>
      </Modal>
    </div>
  );
}
