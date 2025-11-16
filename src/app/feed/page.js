'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { supabase } from '@/lib/supabase';
import FeedNavbar from '@/components/feed/FeedNavbar';
import FeedSidebar from '@/components/feed/FeedSidebar';
import PostCard from '@/components/feed/PostCard';
import { mockPosts } from '@/data/mockPosts';

export default function FeedPage() {
  const router = useRouter();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    checkUser();
  }, []);

  const checkUser = async () => {
    const { data: { session } } = await supabase.auth.getSession();

    if (!session) {
      router.push('/login');
    } else {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-gray-50 dark:bg-black">
        <div className="text-center">
          <div className="mx-auto h-12 w-12 animate-spin rounded-full border-4 border-gray-200 border-t-ubc-secondary"></div>
          <p className="mt-4 text-gray-600 dark:text-gray-400">Loading...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-black">
      <FeedNavbar />

      <div className="flex">
        {/* Sidebar */}
        <FeedSidebar />

        {/* Main Content */}
        <main className="flex-1 px-4 py-6">
          <div className="mx-auto max-w-3xl">
            {/* Page Header */}
            <div className="mb-6">
              <h1 className="text-2xl font-bold text-gray-900 dark:text-white">
                UBC Community Feed
              </h1>
              <p className="mt-1 text-sm text-gray-600 dark:text-gray-400">
                Connect with students across campus
              </p>
            </div>

            {/* Sort Tabs (Static for now) */}
            <div className="mb-4 flex gap-2 border-b border-gray-200 dark:border-gray-800">
              <button className="border-b-2 border-ubc-secondary px-4 py-2 text-sm font-medium text-ubc-secondary">
                Hot
              </button>
              <button className="px-4 py-2 text-sm font-medium text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white">
                New
              </button>
              <button className="px-4 py-2 text-sm font-medium text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white">
                Top
              </button>
            </div>

            {/* Posts Feed */}
            <div className="space-y-4">
              {mockPosts.map((post) => (
                <PostCard key={post.id} {...post} />
              ))}
            </div>

            {/* Footer */}
            <div className="mt-8 text-center text-sm text-gray-500 dark:text-gray-400">
              <p>You've reached the end! Check back later for more posts.</p>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
