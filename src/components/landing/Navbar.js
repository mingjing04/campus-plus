export default function Navbar() {
  return (
    <nav className="border-b border-gray-200 dark:border-gray-800">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-ubc-secondary text-xl font-bold text-white">
              C+
            </div>
            <span className="text-xl font-bold text-gray-900 dark:text-white">
              Campus+
            </span>
          </div>
          <div className="flex items-center gap-4">
            <button className="rounded-lg px-4 py-2 text-sm font-medium text-gray-700 transition-colors hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-800">
              Log In
            </button>
            <button className="rounded-lg bg-ubc-secondary px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-ubc-blue">
              Sign Up
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}
