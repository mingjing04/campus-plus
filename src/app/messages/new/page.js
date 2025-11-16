'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import FeedNavbar from '@/components/feed/FeedNavbar';
import { mockUsers } from '@/data/mockUsers';
import { HiArrowLeft, HiMagnifyingGlass } from 'react-icons/hi2';

export default function NewMessagePage() {
  const router = useRouter();
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  const filteredUsers = mockUsers.filter(user =>
    user.username.toLowerCase().includes(searchQuery.toLowerCase()) ||
    user.email.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleUserClick = (userId) => {
    // For now, just navigate to a conversation
    // In real implementation, would create conversation if doesn't exist
    router.push(`/messages/${userId}`);
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-black">
      <FeedNavbar onSidebarToggle={() => setIsSidebarOpen(!isSidebarOpen)} />

      <div className="mx-auto max-w-4xl">
        {/* Header */}
        <div className="border-b border-gray-200 bg-white p-4 dark:border-gray-800 dark:bg-gray-900">
          <div className="flex items-center gap-3">
            <button
              onClick={() => router.push('/messages')}
              className="rounded-lg p-2 text-gray-500 transition-colors hover:bg-gray-100 dark:hover:bg-gray-800"
            >
              <HiArrowLeft className="h-5 w-5" />
            </button>
            <h1 className="text-xl font-bold text-gray-900 dark:text-white">
              New Message
            </h1>
          </div>
        </div>

        {/* Search Bar */}
        <div className="border-b border-gray-200 bg-white p-4 dark:border-gray-800 dark:bg-gray-900">
          <div className="relative">
            <HiMagnifyingGlass className="absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-gray-400" />
            <input
              type="text"
              placeholder="Search users by username or email..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full rounded-lg border border-gray-300 bg-gray-50 py-2 pl-10 pr-4 text-sm focus:border-ubc-secondary focus:outline-none focus:ring-2 focus:ring-ubc-secondary dark:border-gray-700 dark:bg-gray-800 dark:text-white"
              autoFocus
            />
          </div>
        </div>

        {/* Users List */}
        <div className="bg-white dark:bg-gray-900">
          {filteredUsers.length > 0 ? (
            filteredUsers.map((user) => (
              <button
                key={user.id}
                onClick={() => handleUserClick(user.id)}
                className="flex w-full items-center gap-3 border-b border-gray-200 p-4 text-left transition-colors hover:bg-gray-50 dark:border-gray-800 dark:hover:bg-gray-800"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-ubc-secondary text-sm font-bold text-white">
                  {user.avatar}
                </div>
                <div>
                  <p className="font-semibold text-gray-900 dark:text-white">
                    {user.username}
                  </p>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    {user.email}
                  </p>
                </div>
              </button>
            ))
          ) : (
            <div className="p-12 text-center">
              <p className="text-gray-600 dark:text-gray-400">
                {searchQuery ? 'No users found' : 'Start typing to search for users'}
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
