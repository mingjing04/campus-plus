'use client';

import { useState, useEffect } from 'react';
import { supabase } from '@/lib/supabase';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { HiMagnifyingGlass, HiArrowRightOnRectangle } from 'react-icons/hi2';

export default function FeedNavbar() {
  const router = useRouter();
  const [user, setUser] = useState(null);

  useEffect(() => {
    getUser();
  }, []);

  const getUser = async () => {
    const isGuest = localStorage.getItem('guestMode') === 'true';

    if (isGuest) {
      // Mock guest user
      setUser({
        email: 'guest@demo.com',
        user_metadata: { username: 'Guest' }
      });
    } else {
      const { data: { user } } = await supabase.auth.getUser();
      setUser(user);
    }
  };

  const handleLogout = async () => {
    const isGuest = localStorage.getItem('guestMode') === 'true';

    if (isGuest) {
      localStorage.removeItem('guestMode');
      router.push('/');
    } else {
      await supabase.auth.signOut();
      router.push('/');
    }
  };

  return (
    <nav className="sticky top-0 z-50 border-b border-gray-200 bg-white dark:border-gray-800 dark:bg-gray-900">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between gap-4">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-ubc-secondary text-xl font-bold text-white">
              C+
            </div>
            <span className="hidden text-xl font-bold text-gray-900 dark:text-white sm:block">
              Campus+
            </span>
          </Link>

          {/* Search Bar */}
          <div className="flex flex-1 max-w-2xl">
            <div className="relative w-full">
              <HiMagnifyingGlass className="absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-gray-400" />
              <input
                type="text"
                placeholder="Search Campus+"
                className="w-full rounded-lg border border-gray-300 bg-gray-50 py-2 pl-10 pr-4 text-sm focus:border-ubc-secondary focus:outline-none focus:ring-2 focus:ring-ubc-secondary dark:border-gray-700 dark:bg-gray-800 dark:text-white"
              />
            </div>
          </div>

          {/* User Section */}
          <div className="flex items-center gap-4">
            {user && (
              <div className="flex items-center gap-2">
                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-ubc-secondary text-sm font-bold text-white">
                  {user.email?.charAt(0).toUpperCase()}
                </div>
                <span className="hidden text-sm font-medium text-gray-900 dark:text-white sm:block">
                  {user.user_metadata?.username || user.email?.split('@')[0]}
                </span>
              </div>
            )}
            <button
              onClick={handleLogout}
              className="flex items-center gap-2 rounded-lg px-4 py-2 text-sm font-medium text-gray-700 transition-colors hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-800"
            >
              <HiArrowRightOnRectangle className="h-5 w-5" />
              <span className="hidden sm:block">Logout</span>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}
