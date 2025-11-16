'use client';

import { useState } from 'react';
import Link from 'next/link';
import FeedNavbar from '@/components/feed/FeedNavbar';
import FeedSidebar from '@/components/feed/FeedSidebar';
import ConversationListItem from '@/components/messages/ConversationListItem';
import { mockConversations } from '@/data/mockConversations';
import { HiPencilSquare } from 'react-icons/hi2';

export default function MessagesPage() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [conversations] = useState(mockConversations);

  const totalUnread = conversations.reduce((sum, conv) => sum + conv.unreadCount, 0);

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-black">
      <FeedNavbar onSidebarToggle={() => setIsSidebarOpen(!isSidebarOpen)} />

      <div className="flex">
        <FeedSidebar
          isOpen={isSidebarOpen}
          onClose={() => setIsSidebarOpen(false)}
        />

        <main className="flex-1">
          <div className="mx-auto max-w-4xl">
            {/* Header */}
            <div className="border-b border-gray-200 bg-white p-4 dark:border-gray-800 dark:bg-gray-900">
              <div className="flex items-center justify-between">
                <div>
                  <h1 className="text-2xl font-bold text-gray-900 dark:text-white">
                    Messages
                  </h1>
                  {totalUnread > 0 && (
                    <p className="mt-1 text-sm text-gray-600 dark:text-gray-400">
                      {totalUnread} unread message{totalUnread > 1 ? 's' : ''}
                    </p>
                  )}
                </div>
                <Link href="/messages/new">
                  <button className="flex items-center gap-2 rounded-lg bg-ubc-secondary px-4 py-2 font-semibold text-white transition-colors hover:bg-ubc-blue">
                    <HiPencilSquare className="h-5 w-5" />
                    <span className="hidden sm:inline">New Message</span>
                  </button>
                </Link>
              </div>
            </div>

            {/* Conversations List */}
            <div className="bg-white dark:bg-gray-900">
              {conversations.length > 0 ? (
                conversations.map((conversation) => (
                  <ConversationListItem
                    key={conversation.id}
                    {...conversation}
                  />
                ))
              ) : (
                <div className="p-12 text-center">
                  <p className="text-gray-600 dark:text-gray-400">
                    No messages yet. Start a conversation!
                  </p>
                  <Link href="/messages/new">
                    <button className="mt-4 rounded-lg bg-ubc-secondary px-6 py-2 font-semibold text-white transition-colors hover:bg-ubc-blue">
                      Send a Message
                    </button>
                  </Link>
                </div>
              )}
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
