import Link from 'next/link';
import { HiHeart, HiChatBubbleLeft, HiShare, HiBookmark } from 'react-icons/hi2';

export default function PostCard({ id, author, avatar, title, content, loves, comments, timestamp, community, tags = [] }) {
  return (
    <div className="flex gap-2 rounded-lg border border-gray-200 bg-white p-4 transition-shadow hover:shadow-md dark:border-gray-800 dark:bg-gray-900">
      {/* Left side - Loves */}
      <div className="flex flex-col items-center gap-1">
        <button className="rounded p-1 text-gray-400 transition-colors hover:bg-gray-100 hover:text-red-500 dark:hover:bg-gray-800">
          <HiHeart className="h-6 w-6" />
        </button>
        <span className="text-sm font-bold text-gray-900 dark:text-white">
          {loves}
        </span>
      </div>

      {/* Main content */}
      <div className="flex-1">
        {/* Header */}
        <div className="flex items-center gap-2 text-xs text-gray-500 dark:text-gray-400">
          <div className="flex h-6 w-6 items-center justify-center rounded-full bg-ubc-secondary text-xs font-bold text-white">
            {avatar}
          </div>
          <span className="font-medium text-gray-900 dark:text-white">{author}</span>
          <span>•</span>
          <span>{timestamp}</span>
          <span>•</span>
          <span className="rounded-full bg-ubc-blue/10 px-2 py-0.5 font-semibold text-ubc-blue dark:bg-ubc-blue/20 dark:text-ubc-secondary">
            {community}
          </span>
        </div>

        {/* Title */}
        <Link href={`/post/${id}`}>
          <h3 className="mt-2 text-lg font-bold text-gray-900 dark:text-white hover:text-ubc-secondary cursor-pointer">
            {title}
          </h3>
        </Link>

        {/* Content */}
        <p className="mt-1 text-sm text-gray-600 dark:text-gray-400 line-clamp-2">
          {content}
        </p>

        {/* Tags */}
        {tags.length > 0 && (
          <div className="mt-2 flex flex-wrap gap-1.5">
            {tags.map((tag, index) => (
              <span
                key={index}
                className="rounded-md bg-ubc-secondary/10 px-2 py-0.5 text-xs font-medium text-ubc-secondary dark:bg-ubc-secondary/20"
              >
                #{tag}
              </span>
            ))}
          </div>
        )}

        {/* Actions */}
        <div className="mt-3 flex items-center gap-4 text-xs text-gray-500 dark:text-gray-400">
          <button className="flex items-center gap-1 rounded-lg px-2 py-1 transition-colors hover:bg-gray-100 dark:hover:bg-gray-800">
            <HiChatBubbleLeft className="h-4 w-4" />
            <span>{comments} Comments</span>
          </button>
          <button className="flex items-center gap-1 rounded-lg px-2 py-1 transition-colors hover:bg-gray-100 dark:hover:bg-gray-800">
            <HiShare className="h-4 w-4" />
            <span>Share</span>
          </button>
          <button className="flex items-center gap-1 rounded-lg px-2 py-1 transition-colors hover:bg-gray-100 dark:hover:bg-gray-800">
            <HiBookmark className="h-4 w-4" />
            <span>Save</span>
          </button>
        </div>
      </div>
    </div>
  );
}
