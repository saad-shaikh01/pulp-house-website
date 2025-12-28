import { ContactForm } from "@/components/forms/contact-form";

export function ContactFormSection() {
  return (
    <section className="bg-slate-50 py-16 md:py-24" id="contact">
      <div className="container max-w-6xl">
        <div className="grid gap-12 lg:grid-cols-2">
          <div className="flex flex-col justify-center space-y-6">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              Frequently asked questions
            </h2>
            <p className="text-lg text-muted-foreground">
              Everything You Wanted to Know About Us.
            </p>

            <div className="space-y-4">
                <details className="group rounded-lg border bg-white p-4 [&_summary::-webkit-details-marker]:hidden" open>
                    <summary className="flex cursor-pointer items-center justify-between gap-1.5 font-medium text-gray-900">
                    <h3 className="font-semibold">Do I need a finished manuscript before contacting you?</h3>
                    <span className="shrink-0 rounded-full bg-white p-1.5 text-gray-900 sm:p-3">
                        <svg xmlns="http://www.w3.org/2000/svg" className="size-5 shrink-0 transition duration-300 group-open:-rotate-180" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                        </svg>
                    </span>
                    </summary>
                    <p className="mt-4 leading-relaxed text-gray-700">
                    Not at all. Many of our authors come to us while they’re still writing or even just developing their concept. We can help at any stage, whether you need ghostwriting services, writing coaching, or editorial development.
                    </p>
                </details>

                <details className="group rounded-lg border bg-white p-4 [&_summary::-webkit-details-marker]:hidden">
                    <summary className="flex cursor-pointer items-center justify-between gap-1.5 font-medium text-gray-900">
                    <h3 className="font-semibold">Will I keep the rights to my book?</h3>
                    <span className="shrink-0 rounded-full bg-white p-1.5 text-gray-900 sm:p-3">
                        <svg xmlns="http://www.w3.org/2000/svg" className="size-5 shrink-0 transition duration-300 group-open:-rotate-180" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                        </svg>
                    </span>
                    </summary>
                    <p className="mt-4 leading-relaxed text-gray-700">
                    Yes! 100% of your rights remain yours. Always. We believe your work belongs to you.
                    </p>
                </details>

                 <details className="group rounded-lg border bg-white p-4 [&_summary::-webkit-details-marker]:hidden">
                    <summary className="flex cursor-pointer items-center justify-between gap-1.5 font-medium text-gray-900">
                    <h3 className="font-semibold">How much does publishing a book cost?</h3>
                    <span className="shrink-0 rounded-full bg-white p-1.5 text-gray-900 sm:p-3">
                        <svg xmlns="http://www.w3.org/2000/svg" className="size-5 shrink-0 transition duration-300 group-open:-rotate-180" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                        </svg>
                    </span>
                    </summary>
                    <p className="mt-4 leading-relaxed text-gray-700">
                    It depends on your goals and the services you choose. After a short consultation, we’ll provide a custom quote that fits your project and budget (with no hidden fees).
                    </p>
                </details>
            </div>
          </div>

          <div className="rounded-2xl bg-white p-8 shadow-lg">
            <h3 className="mb-6 text-xl font-bold">Contact Us</h3>
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  );
}
