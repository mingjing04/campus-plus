import Link from 'next/link';
import Logo from '@/components/Logo';

export default function Navbar() {
  return (
    <nav className="border-b border-gray-200 dark:border-gray-800">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <Logo href="/" size="md" />
          <div className="flex items-center gap-4">
            <Link href="/login" className="rounded-lg px-4 py-2 text-sm font-medium text-gray-700 transition-colors hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-800">
              Log In
            </Link>
            <Link href="/signup" className="rounded-lg bg-ubc-secondary px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-ubc-blue">
              Sign Up
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
