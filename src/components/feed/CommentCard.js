'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { HiHeart, HiChatBubbleLeft } from 'react-icons/hi2';

export default function CommentCard({ id, postId, author, avatar, content, loves, timestamp }) {
  const [isLiked, setIsLiked] = useState(false);
  const [loveCount, setLoveCount] = useState(loves);

  // Load liked state from localStorage on mount
  useEffect(() => {
    const liked = localStorage.getItem(`comment_${id}_liked`) === 'true';
    setIsLiked(liked);
  }, [id]);

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
    localStorage.setItem(`comment_${id}_liked`, newLikedState.toString());
  };

  return (
    <div className="flex gap-3 border-l-2 border-gray-200 pl-4 py-3 dark:border-gray-800">
      {/* Author Avatar */}
      <div className="flex-shrink-0">
        <div className="flex h-8 w-8 items-center justify-center rounded-full bg-ubc-secondary text-xs font-bold text-white">
          {avatar}
        </div>
      </div>

      {/* Main content */}
      <div className="flex-1">
        {/* Header */}
        <div className="flex items-center gap-2 text-xs text-gray-500 dark:text-gray-400">
          <span className="font-medium text-gray-900 dark:text-white">{author}</span>
          <span>•</span>
          <span>{timestamp}</span>
        </div>

        {/* Content */}
        <p className="mt-1 text-sm text-gray-700 dark:text-gray-300">
          {content}
        </p>

        {/* Actions */}
        <div className="mt-2 flex items-center gap-3">
          <button
            onClick={handleLike}
            className={`flex items-center gap-1 rounded-lg px-2 py-1 text-xs transition-all ${
              isLiked
                ? 'text-red-500 hover:text-red-600'
                : 'text-gray-500 hover:bg-gray-100 hover:text-red-500 dark:text-gray-400 dark:hover:bg-gray-800'
            }`}
          >
            <HiHeart className="h-4 w-4" />
            <span>{loveCount}</span>
          </button>
          <Link href={`/comment/${id}`}>
            <button className="flex items-center gap-1 rounded-lg px-2 py-1 text-xs text-gray-500 transition-colors hover:bg-gray-100 hover:text-ubc-secondary dark:text-gray-400 dark:hover:bg-gray-800">
              <HiChatBubbleLeft className="h-4 w-4" />
              <span>Reply</span>
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
