'use client';

import { useState } from 'react';

export default function CommentForm({ userAvatar, onSubmit }) {
  const [comment, setComment] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (comment.trim()) {
      onSubmit(comment);
      setComment('');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="border-b border-gray-200 pb-4 dark:border-gray-800">
      <div className="flex gap-3">
        {/* User Avatar */}
        <div className="flex-shrink-0">
          <div className="flex h-8 w-8 items-center justify-center rounded-full bg-ubc-secondary text-xs font-bold text-white">
            {userAvatar}
          </div>
        </div>

        {/* Input Area */}
        <div className="flex-1">
          <textarea
            value={comment}
            onChange={(e) => setComment(e.target.value)}
            placeholder="Write a comment..."
            rows="3"
            className="w-full rounded-lg border border-gray-300 bg-white px-3 py-2 text-sm text-gray-900 focus:border-ubc-secondary focus:outline-none focus:ring-2 focus:ring-ubc-secondary dark:border-gray-700 dark:bg-gray-800 dark:text-white"
          />

          <div className="mt-2 flex justify-end">
            <button
              type="submit"
              disabled={!comment.trim()}
              className="rounded-lg bg-ubc-secondary px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-ubc-blue disabled:cursor-not-allowed disabled:opacity-50"
            >
              Comment
            </button>
          </div>
        </div>
      </div>
    </form>
  );
}
