export function Process() {
  const steps = [
    {
      number: "01",
      title: "Talk to Us",
      description:
        "We begin with a conversation about your goals and your book. This includes an editorial review and critical evaluation of your manuscript, followed by further discussions until we achieve the desired outcome for your book.",
      icon: "/images/home/icon1.svg",
    },
    {
      number: "02",
      title: "Refine Your Manuscript",
      description:
        "Our experienced book editors and ghostwriters will enhance your story in whatever way you require. This process takes a few months and is entirely human-generated. Perfection cannot be rushed.",
      icon: "/images/home/icon2.svg",
    },
    {
      number: "03",
      title: "Design & Format",
      description:
        "We provide your book with a professional visual identity. This includes eye-catching covers, visuals (such as maps and illustrations), and precise formatting that is nothing less than traditional book publishing service.",
      icon: "/images/home/icon3.svg",
    },
    {
      number: "04",
      title: "Publish & Launch Your Book",
      description:
        "We expertly prepare your book for all major platforms, including Amazon, Barnes & Noble, IngramSpark, and more! Our services include providing ISBNs, protecting your rights, and distributing to both online platforms and physical bookstores.",
      icon: "/images/home/icon4.svg",
    },
    {
      number: "05",
      title: "Promote & Grow",
      description:
        "We focus on marketing, branding, and publicity to expand your readership. From a website and press releases to author social media manager, we provide everything.",
      icon: "/images/home/icon5.svg",
    },
  ];

  return (
    <section className="bg-slate-50 py-16 md:py-24" id="services">
      <div className="container relative">
        <div className="mb-16 grid gap-8 lg:grid-cols-2">
          <div>
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              Here’s How It <span className="text-primary">Works</span>
            </h2>
          </div>
          <div className="flex items-center">
            <h4 className="text-xl font-medium text-muted-foreground">
              Every step is transparent, collaborative, and tailored to your goals.
            </h4>
          </div>
        </div>

        <div className="grid gap-12 lg:grid-cols-2">
          <div className="space-y-12">
            {steps.map((step) => (
              <div key={step.number} className="flex gap-6">
                <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl bg-white shadow-md">
                   {/* Placeholder for icon if image is missing, or actual image */}
                   <img src={step.icon} alt="" className="h-8 w-8" />
                </div>
                <div>
                  <h3 className="mb-2 text-xl font-bold text-gray-900">{step.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="hidden items-start justify-center lg:flex sticky top-24 h-fit">
            <img
              src="/images/home/how-work.webp"
              alt="Publishing process illustration"
              className="rounded-2xl shadow-2xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
