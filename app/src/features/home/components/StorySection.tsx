export function StorySection() {
  return (
    <section id="story" className="grid min-h-[80vh] md:grid-cols-2">
      <div className="flex items-center px-5 py-20 md:px-10">
        <div>
          <p className="mb-5 text-xs uppercase tracking-[0.4em] text-white/40">
            Philosophy
          </p>

          <h2 className="mb-8 max-w-xl text-5xl font-medium leading-[0.95] tracking-[-0.06em] md:text-7xl">
            Less noise. Better shape. Stronger presence.
          </h2>

          <p className="max-w-md text-lg leading-relaxed text-white/55">
            NOIR is built for people who value minimal design, excellent
            construction, and a shopping experience that feels as considered
            as the product itself.
          </p>
        </div>
      </div>

      <img
        src="https://images.unsplash.com/photo-1506629905607-d9d297d2c4cf?q=80&w=1400&auto=format&fit=crop"
        alt="Editorial clothing detail"
        className="h-full min-h-[500px] w-full object-cover"
      />
    </section>
  )
}
