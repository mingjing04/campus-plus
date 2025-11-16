import Link from 'next/link';

export default function CTASection() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
      <div className="rounded-3xl bg-ubc-secondary px-6 py-16 text-center shadow-xl sm:px-12">
        <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
          Ready to Join Your Campus Community?
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-lg text-white/90">
          Sign up with your university email and start connecting with students today.
        </p>
        <div className="mt-8 flex items-center justify-center gap-4">
          <Link href="/signup" className="rounded-full bg-white px-8 py-4 text-lg font-semibold text-ubc-secondary shadow-lg transition-all hover:bg-gray-100">
            Sign Up Now
          </Link>
          <Link href="/login" className="rounded-full border-2 border-white px-8 py-4 text-lg font-semibold text-white transition-all hover:bg-white/10">
            Already a member? Log In
          </Link>
        </div>
      </div>
    </section>
  );
}
