export function WhyChooseUs() {
  const reasons = [
    {
      title: "100% creative control",
      icon: "/images/home/choose1.webp",
    },
    {
      title: "Retain all your rights & royalties",
      icon: "/images/home/choose2.webp",
    },
    {
      title: "Personalized Communication",
      icon: "/images/home/choose3.webp",
    },
    {
      title: "Comprehensive Services",
      icon: "/images/home/choose4.webp",
    },
    {
      title: "World-class Publishing",
      icon: "/images/home/choose5.webp",
    },
    {
      title: "Transparent Pricing",
      icon: "/images/home/choose6.webp",
    },
  ];

  return (
    <section className="bg-white py-16 md:py-24" id="why-choose-us">
      <div className="container">
        <h2 className="mb-12 text-center text-3xl font-bold tracking-tight sm:text-4xl">
          Why Authors Choose Us
        </h2>
        <div className="grid grid-cols-2 gap-8 md:grid-cols-3 lg:grid-cols-6">
          {reasons.map((reason, index) => (
            <div key={index} className="flex flex-col items-center text-center">
              <div className="mb-4 flex h-20 w-20 items-center justify-center rounded-full bg-slate-50 p-4 shadow-sm transition-transform hover:scale-110">
                <img src={reason.icon} alt="" className="h-full w-full object-contain" />
              </div>
              <h3 className="text-sm font-semibold text-gray-900">{reason.title}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
