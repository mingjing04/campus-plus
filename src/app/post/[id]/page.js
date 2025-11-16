'use client';

import { useEffect, useState } from 'react';
import { useRouter, useParams } from 'next/navigation';
import { supabase } from '@/lib/supabase';
import FeedNavbar from '@/components/feed/FeedNavbar';
import CommentCard from '@/components/feed/CommentCard';
import CommentForm from '@/components/feed/CommentForm';
import { mockPosts } from '@/data/mockPosts';
import { mockComments } from '@/data/mockComments';
import { HiHeart, HiChatBubbleLeft, HiShare, HiBookmark } from 'react-icons/hi2';

export default function PostDetailPage() {
  const router = useRouter();
  const params = useParams();
  const postId = parseInt(params.id);

  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState(null);
  const [comments, setComments] = useState([]);
  const [isLiked, setIsLiked] = useState(false);
  const [loveCount, setLoveCount] = useState(0);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  useEffect(() => {
    checkUser();
  }, []);

  useEffect(() => {
    // Load comments for this post
    const postComments = mockComments.filter(c => c.postId === postId);
    setComments(postComments);

    // Load like state and count
    const post = mockPosts.find(p => p.id === postId);
    if (post) {
      setLoveCount(post.loves);
      const liked = localStorage.getItem(`post_${postId}_liked`) === 'true';
      setIsLiked(liked);
    }
  }, [postId]);

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

  const handleCommentSubmit = (commentText) => {
    if (!user) return;

    const newComment = {
      id: Date.now(), // Temporary ID
      postId: postId,
      parentCommentId: null,
      author: user.user_metadata?.username || user.email?.split('@')[0] || 'anonymous',
      avatar: user.email?.charAt(0).toUpperCase() || 'U',
      content: commentText,
      loves: 0,
      timestamp: 'just now'
    };

    setComments([newComment, ...comments]);
  };

  const handleLike = () => {
    const newLikedState = !isLiked;
    setIsLiked(newLikedState);

    // Update count
    if (newLikedState) {
      setLoveCount(prev => prev + 1);
    } else {
      setLoveCount(prev => prev - 1);
    }

    // Persist to localStorage
    localStorage.setItem(`post_${postId}_liked`, newLikedState.toString());
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

  const post = mockPosts.find(p => p.id === postId);

  if (!post) {
    return (
      <div className="min-h-screen bg-gray-50 dark:bg-black">
        <FeedNavbar onSidebarToggle={() => setIsSidebarOpen(!isSidebarOpen)} />
        <main className="mx-auto max-w-4xl px-4 py-6">
          <div className="text-center">
            <h1 className="text-2xl font-bold text-gray-900 dark:text-white">Post not found</h1>
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

  const userAvatar = user?.email?.charAt(0).toUpperCase() || 'U';

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-black">
      <FeedNavbar onSidebarToggle={() => setIsSidebarOpen(!isSidebarOpen)} />

      <main className="mx-auto max-w-4xl px-4 py-6">
        {/* Back button */}
        <button
          onClick={() => router.push('/feed')}
          className="mb-4 text-sm text-ubc-secondary hover:underline"
        >
          ← Back to feed
        </button>

        {/* Post Detail */}
        <div className="rounded-lg border border-gray-200 bg-white p-6 dark:border-gray-800 dark:bg-gray-900">
          {/* Header */}
          <div className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400">
            <div className="flex h-8 w-8 items-center justify-center rounded-full bg-ubc-secondary text-sm font-bold text-white">
              {post.avatar}
            </div>
            <span className="font-medium text-gray-900 dark:text-white">{post.author}</span>
            <span>•</span>
            <span>{post.timestamp}</span>
            <span>•</span>
            <span className="rounded-full bg-ubc-blue/10 px-2 py-0.5 font-semibold text-ubc-blue dark:bg-ubc-blue/20 dark:text-ubc-secondary">
              {post.community}
            </span>
          </div>

          {/* Title */}
          <h1 className="mt-4 text-2xl font-bold text-gray-900 dark:text-white">
            {post.title}
          </h1>

          {/* Content */}
          <p className="mt-3 text-base text-gray-700 dark:text-gray-300">
            {post.content}
          </p>

          {/* Tags */}
          {post.tags && post.tags.length > 0 && (
            <div className="mt-4 flex flex-wrap gap-2">
              {post.tags.map((tag, index) => (
                <span
                  key={index}
                  className="rounded-md bg-ubc-secondary/10 px-2.5 py-1 text-sm font-medium text-ubc-secondary dark:bg-ubc-secondary/20"
                >
                  #{tag}
                </span>
              ))}
            </div>
          )}

          {/* Actions */}
          <div className="mt-6 flex items-center gap-6 border-t border-gray-200 pt-4 dark:border-gray-800">
            <button
              onClick={handleLike}
              className={`flex items-center gap-2 transition-all ${
                isLiked
                  ? 'text-red-500 hover:text-red-600'
                  : 'text-gray-500 hover:text-red-500 dark:text-gray-400'
              }`}
            >
              <HiHeart className="h-5 w-5" />
              <span className="text-sm font-medium">{loveCount} Loves</span>
            </button>
            <div className="flex items-center gap-2 text-gray-500 dark:text-gray-400">
              <HiChatBubbleLeft className="h-5 w-5" />
              <span className="text-sm font-medium">{comments.length} Comments</span>
            </div>
            <button className="flex items-center gap-2 text-gray-500 transition-colors hover:text-ubc-secondary dark:text-gray-400">
              <HiShare className="h-5 w-5" />
              <span className="text-sm font-medium">Share</span>
            </button>
            <button className="flex items-center gap-2 text-gray-500 transition-colors hover:text-ubc-secondary dark:text-gray-400">
              <HiBookmark className="h-5 w-5" />
              <span className="text-sm font-medium">Save</span>
            </button>
          </div>
        </div>

        {/* Comments Section */}
        <div className="mt-6 rounded-lg border border-gray-200 bg-white p-6 dark:border-gray-800 dark:bg-gray-900">
          <h2 className="mb-4 text-lg font-bold text-gray-900 dark:text-white">
            Comments ({comments.length})
          </h2>

          {/* Comment Form */}
          <CommentForm
            userAvatar={userAvatar}
            onSubmit={handleCommentSubmit}
          />

          {/* Comments List */}
          <div className="mt-6 space-y-4">
            {comments.length > 0 ? (
              comments.map((comment) => (
                <CommentCard key={comment.id} {...comment} />
              ))
            ) : (
              <p className="text-center text-sm text-gray-500 dark:text-gray-400">
                No comments yet. Be the first to comment!
              </p>
            )}
          </div>
        </div>
      </main>
    </div>
  );
}
