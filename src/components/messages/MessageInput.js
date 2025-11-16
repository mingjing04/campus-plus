'use client';

import { useState } from 'react';
import { HiPaperAirplane } from 'react-icons/hi2';

export default function MessageInput({ onSend }) {
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (message.trim()) {
      onSend(message.trim());
      setMessage('');
    }
  };

  const handleKeyDown = (e) => {
    // Send on Enter, new line on Shift+Enter
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSubmit(e);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="border-t border-gray-200 bg-white p-4 dark:border-gray-800 dark:bg-gray-900">
      <div className="flex gap-2">
        <textarea
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          onKeyDown={handleKeyDown}
          placeholder="Type a message..."
          rows="1"
          className="flex-1 resize-none rounded-lg border border-gray-300 px-4 py-2 text-sm focus:border-ubc-secondary focus:outline-none focus:ring-2 focus:ring-ubc-secondary dark:border-gray-700 dark:bg-gray-800 dark:text-white"
        />
        <button
          type="submit"
          disabled={!message.trim()}
          className="flex items-center justify-center rounded-lg bg-ubc-secondary px-4 py-2 text-white transition-colors hover:bg-ubc-blue disabled:cursor-not-allowed disabled:opacity-50"
        >
          <HiPaperAirplane className="h-5 w-5" />
        </button>
      </div>
      <p className="mt-1 text-xs text-gray-500 dark:text-gray-400">
        Press Enter to send, Shift+Enter for new line
      </p>
    </form>
  );
}
