'use client';

import { useEffect, useState } from 'react';
import { useRouter, useParams } from 'next/navigation';
import { supabase } from '@/lib/supabase';
import FeedNavbar from '@/components/feed/FeedNavbar';
import CommentCard from '@/components/feed/CommentCard';
import CommentForm from '@/components/feed/CommentForm';
import { mockPosts } from '@/data/mockPosts';
import { mockComments } from '@/data/mockComments';
import { HiHeart, HiChatBubbleLeft } from 'react-icons/hi2';
import Link from 'next/link';

export default function CommentDetailPage() {
  const router = useRouter();
  const params = useParams();
  const commentId = parseInt(params.id);

  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState(null);
  const [replies, setReplies] = useState([]);

  useEffect(() => {
    checkUser();
  }, []);

  useEffect(() => {
    // Load replies to this comment
    const commentReplies = mockComments.filter(c => c.parentCommentId === commentId);
    setReplies(commentReplies);
  }, [commentId]);

  const checkUser = async () => {
    const { data: { session } } = await supabase.auth.getSession();

    if (!session) {
      router.push('/login');
    } else {
      const { data: { user } } = await supabase.auth.getUser();
      setUser(user);
      setLoading(false);
    }
  };

  const handleReplySubmit = (replyText) => {
    if (!user) return;

    const newReply = {
      id: Date.now(), // Temporary ID
      postId: comment.postId,
      parentCommentId: commentId,
      author: user.user_metadata?.username || user.email?.split('@')[0] || 'anonymous',
      avatar: user.email?.charAt(0).toUpperCase() || 'U',
      content: replyText,
      loves: 0,
      timestamp: 'just now'
    };

    setReplies([newReply, ...replies]);
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

  const comment = mockComments.find(c => c.id === commentId);

  if (!comment) {
    return (
      <div className="min-h-screen bg-gray-50 dark:bg-black">
        <FeedNavbar />
        <main className="mx-auto max-w-4xl px-4 py-6">
          <div className="text-center">
            <h1 className="text-2xl font-bold text-gray-900 dark:text-white">Comment not found</h1>
            <button
              onClick={() => router.push('/feed')}
              className="mt-4 text-ubc-secondary hover:underline"
            >
              Back to feed
            </button>
          </div>
        </main>
      </div>
    );
  }

  const post = mockPosts.find(p => p.id === comment.postId);
  const userAvatar = user?.email?.charAt(0).toUpperCase() || 'U';

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-black">
      <FeedNavbar />

      <main className="mx-auto max-w-4xl px-4 py-6">
        {/* Back button */}
        <button
          onClick={() => router.push(`/post/${comment.postId}`)}
          className="mb-4 text-sm text-ubc-secondary hover:underline"
        >
          ← Back to post
        </button>

        {/* Thread Chain */}
        <div className="space-y-4">
          {/* Original Post (compact view) */}
          {post && (
            <div className="rounded-lg border border-gray-200 bg-white p-4 dark:border-gray-800 dark:bg-gray-900">
              <div className="flex items-center gap-2 text-xs text-gray-500 dark:text-gray-400">
                <div className="flex h-6 w-6 items-center justify-center rounded-full bg-ubc-secondary text-xs font-bold text-white">
                  {post.avatar}
                </div>
                <span className="font-medium text-gray-900 dark:text-white">{post.author}</span>
                <span>•</span>
                <span>{post.timestamp}</span>
                <span>•</span>
                <Link href={`/post/${post.id}`} className="text-ubc-secondary hover:underline">
                  View original post
                </Link>
              </div>
              <h3 className="mt-2 font-bold text-gray-900 dark:text-white">
                {post.title}
              </h3>
              <p className="mt-1 text-sm text-gray-600 dark:text-gray-400 line-clamp-2">
                {post.content}
              </p>
            </div>
          )}

          {/* Comment Being Replied To */}
          <div className="rounded-lg border border-gray-200 bg-white p-6 dark:border-gray-800 dark:bg-gray-900">
            <div className="flex gap-3">
              <div className="flex-shrink-0">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-ubc-secondary text-sm font-bold text-white">
                  {comment.avatar}
                </div>
              </div>

              <div className="flex-1">
                <div className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400">
                  <span className="font-medium text-gray-900 dark:text-white">{comment.author}</span>
                  <span>•</span>
                  <span>{comment.timestamp}</span>
                </div>

                <p className="mt-2 text-base text-gray-700 dark:text-gray-300">
                  {comment.content}
                </p>

                <div className="mt-4 flex items-center gap-6 border-t border-gray-200 pt-4 dark:border-gray-800">
                  <button className="flex items-center gap-2 text-gray-500 transition-colors hover:text-red-500 dark:text-gray-400">
                    <HiHeart className="h-5 w-5" />
                    <span className="text-sm font-medium">{comment.loves} Loves</span>
                  </button>
                  <div className="flex items-center gap-2 text-gray-500 dark:text-gray-400">
                    <HiChatBubbleLeft className="h-5 w-5" />
                    <span className="text-sm font-medium">{replies.length} Replies</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Reply Section */}
          <div className="rounded-lg border border-gray-200 bg-white p-6 dark:border-gray-800 dark:bg-gray-900">
            <h2 className="mb-4 text-lg font-bold text-gray-900 dark:text-white">
              Replies ({replies.length})
            </h2>

            {/* Reply Form */}
            <CommentForm
              userAvatar={userAvatar}
              onSubmit={handleReplySubmit}
            />

            {/* Replies List */}
            <div className="mt-6 space-y-4">
              {replies.length > 0 ? (
                replies.map((reply) => (
                  <CommentCard key={reply.id} {...reply} />
                ))
              ) : (
                <p className="text-center text-sm text-gray-500 dark:text-gray-400">
                  No replies yet. Be the first to reply!
                </p>
              )}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
