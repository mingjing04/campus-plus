export default function MessageBubble({
  content,
  timestamp,
  isOwn,
  senderAvatar,
  senderName
}) {
  return (
    <div className={`flex gap-3 ${isOwn ? 'flex-row-reverse' : 'flex-row'}`}>
      {/* Avatar */}
      {!isOwn && (
        <div className="flex-shrink-0">
          <div className="flex h-8 w-8 items-center justify-center rounded-full bg-ubc-secondary text-xs font-bold text-white">
            {senderAvatar}
          </div>
        </div>
      )}

      {/* Message Content */}
      <div className={`flex max-w-xs flex-col gap-1 sm:max-w-md ${isOwn ? 'items-end' : 'items-start'}`}>
        {!isOwn && (
          <span className="px-3 text-xs font-medium text-gray-600 dark:text-gray-400">
            {senderName}
          </span>
        )}
        <div
          className={`rounded-2xl px-4 py-2 ${
            isOwn
              ? 'bg-ubc-secondary text-white'
              : 'bg-gray-200 text-gray-900 dark:bg-gray-800 dark:text-white'
          }`}
        >
          <p className="text-sm">{content}</p>
        </div>
        <span className="px-3 text-xs text-gray-500 dark:text-gray-400">
          {timestamp}
        </span>
      </div>
    </div>
  );
}
