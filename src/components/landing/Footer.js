import Logo from '@/components/Logo';

export default function Footer() {
  return (
    <footer className="border-t border-gray-200 dark:border-gray-800">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="text-center">
          <div className="flex items-center justify-center">
            <Logo href="/" size="sm" />
          </div>
          <p className="mt-4 text-sm text-gray-600 dark:text-gray-400">
            Built for Hackcamp 2025 - Connecting students, one campus at a time.
          </p>
        </div>
      </div>
    </footer>
  );
}
