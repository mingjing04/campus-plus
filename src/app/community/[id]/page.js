'use client';

import { useState } from 'react';
import { useParams } from 'next/navigation';
import FeedNavbar from '@/components/feed/FeedNavbar';
import FeedSidebar from '@/components/feed/FeedSidebar';
import PostCard from '@/components/feed/PostCard';
import { mockPosts } from '@/data/mockPosts';
import { mainCommunity, faculties, departments, courses } from '@/data/communities';

export default function CommunityPage() {
  const params = useParams();
  const communityId = params.id;
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  // Find the community data
  let community = null;
  let communityType = null;

  if (communityId === mainCommunity.id) {
    community = mainCommunity;
    communityType = 'main';
  } else {
    community = faculties.find(f => f.id === communityId);
    if (community) communityType = 'faculty';
  }

  if (!community) {
    community = departments.find(d => d.id === communityId);
    if (community) communityType = 'department';
  }

  if (!community) {
    community = courses.find(c => c.id === communityId);
    if (community) communityType = 'course';
  }

  // Filter posts by community
  const communityPosts = mockPosts.filter(post => post.communityId === communityId);

  if (!community) {
    return (
      <div className="min-h-screen bg-gray-50 dark:bg-black">
        <FeedNavbar onSidebarToggle={() => setIsSidebarOpen(!isSidebarOpen)} />
        <div className="flex">
          <FeedSidebar
            isOpen={isSidebarOpen}
            onClose={() => setIsSidebarOpen(false)}
          />
          <main className="flex-1 px-4 py-6">
            <div className="mx-auto max-w-3xl">
              <h1 className="text-2xl font-bold text-gray-900 dark:text-white">
                Community not found
              </h1>
            </div>
          </main>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-black">
      <FeedNavbar onSidebarToggle={() => setIsSidebarOpen(!isSidebarOpen)} />

      <div className="flex">
        {/* Sidebar */}
        <FeedSidebar
          isOpen={isSidebarOpen}
          onClose={() => setIsSidebarOpen(false)}
        />

        {/* Main Content */}
        <main className="flex-1 px-4 py-6">
          <div className="mx-auto max-w-3xl">
            {/* Community Header */}
            <div className="mb-6 rounded-lg border border-gray-200 bg-white p-6 dark:border-gray-800 dark:bg-gray-900">
              <div className="flex items-center justify-between">
                <div>
                  <div className="flex items-center gap-3">
                    <span className="text-3xl">{community.icon}</span>
                    <div>
                      <h1 className="text-2xl font-bold text-gray-900 dark:text-white">
                        {community.name || `${community.code} - ${community.name}`}
                      </h1>
                      <p className="mt-1 text-sm text-gray-600 dark:text-gray-400">
                        {community.memberCount?.toLocaleString()} members • {communityPosts.length} posts
                      </p>
                    </div>
                  </div>
                </div>
                <button className="rounded-lg bg-ubc-secondary px-6 py-2 font-semibold text-white transition-colors hover:bg-ubc-blue">
                  Join
                </button>
              </div>
            </div>

            {/* Sort Tabs */}
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
              {communityPosts.length > 0 ? (
                communityPosts.map((post) => (
                  <PostCard key={post.id} {...post} />
                ))
              ) : (
                <div className="rounded-lg border border-gray-200 bg-white p-12 text-center dark:border-gray-800 dark:bg-gray-900">
                  <p className="text-gray-600 dark:text-gray-400">
                    No posts yet in this community. Be the first to post!
                  </p>
                </div>
              )}
            </div>

            {/* Footer */}
            {communityPosts.length > 0 && (
              <div className="mt-8 text-center text-sm text-gray-500 dark:text-gray-400">
                <p>You've reached the end! Check back later for more posts.</p>
              </div>
            )}
          </div>
        </main>
      </div>
    </div>
  );
}
