import Link from 'next/link';

export default function ConversationListItem({
  id,
  participantName,
  participantAvatar,
  lastMessage,
  lastMessageTime,
  unreadCount
}) {
  return (
    <Link href={`/messages/${id}`}>
      <div className="flex items-center gap-3 border-b border-gray-200 p-4 transition-colors hover:bg-gray-50 dark:border-gray-800 dark:hover:bg-gray-800">
        {/* Avatar */}
        <div className="relative flex-shrink-0">
          <div className="flex h-12 w-12 items-center justify-center rounded-full bg-ubc-secondary text-sm font-bold text-white">
            {participantAvatar}
          </div>
          {unreadCount > 0 && (
            <div className="absolute -right-1 -top-1 flex h-5 w-5 items-center justify-center rounded-full bg-red-500 text-xs font-bold text-white">
              {unreadCount}
            </div>
          )}
        </div>

        {/* Content */}
        <div className="min-w-0 flex-1">
          <div className="flex items-baseline justify-between gap-2">
            <h3 className={`truncate text-sm font-semibold ${
              unreadCount > 0 ? 'text-gray-900 dark:text-white' : 'text-gray-700 dark:text-gray-300'
            }`}>
              {participantName}
            </h3>
            <span className="flex-shrink-0 text-xs text-gray-500 dark:text-gray-400">
              {lastMessageTime}
            </span>
          </div>
          <p className={`truncate text-sm ${
            unreadCount > 0 ? 'font-medium text-gray-900 dark:text-white' : 'text-gray-600 dark:text-gray-400'
          }`}>
            {lastMessage}
          </p>
        </div>
      </div>
    </Link>
  );
}
