export default function Hero() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8 lg:py-32">
      <div className="text-center">
        <h1 className="text-5xl font-extrabold tracking-tight text-gray-900 dark:text-white sm:text-6xl lg:text-7xl">
          Turn Your Academic Journey Into{" "}
          <span className="text-ubc-secondary">
            Meaningful Communities
          </span>
        </h1>
        <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-gray-600 dark:text-gray-400">
          A university-focused platform that unites students and fosters connections
          beyond the classroom. Connect with classmates, share experiences, and build
          your campus community.
        </p>
        <div className="mt-10 flex items-center justify-center gap-4">
          <button className="rounded-full bg-ubc-secondary px-8 py-4 text-lg font-semibold text-white shadow-lg transition-all hover:bg-ubc-blue hover:shadow-xl">
            Get Started
          </button>
          <button className="rounded-full border-2 border-ubc-secondary px-8 py-4 text-lg font-semibold text-ubc-secondary transition-all hover:border-ubc-blue hover:bg-ubc-blue hover:text-white dark:border-ubc-secondary dark:text-ubc-secondary">
            Learn More
          </button>
        </div>
      </div>
    </section>
  );
}
