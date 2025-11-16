'use client';

import { useState, useEffect, useRef } from 'react';
import { useParams, useRouter } from 'next/navigation';
import FeedNavbar from '@/components/feed/FeedNavbar';
import MessageBubble from '@/components/messages/MessageBubble';
import MessageInput from '@/components/messages/MessageInput';
import { mockConversations } from '@/data/mockConversations';
import { mockMessages } from '@/data/mockMessages';
import { HiArrowLeft } from 'react-icons/hi2';

export default function ConversationPage() {
  const params = useParams();
  const router = useRouter();
  const conversationId = parseInt(params.conversationId);
  const messagesEndRef = useRef(null);

  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [messages, setMessages] = useState([]);
  const [conversation, setConversation] = useState(null);

  useEffect(() => {
    // Find conversation
    const conv = mockConversations.find(c => c.id === conversationId);
    setConversation(conv);

    // Load messages for this conversation
    const convMessages = mockMessages.filter(m => m.conversationId === conversationId);
    setMessages(convMessages);
  }, [conversationId]);

  useEffect(() => {
    // Scroll to bottom when messages change
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  const handleSendMessage = (content) => {
    const newMessage = {
      id: Date.now(),
      conversationId: conversationId,
      senderId: 'current-user',
      senderName: 'You',
      senderAvatar: 'G',
      content: content,
      timestamp: new Date().toLocaleTimeString('en-US', {
        hour: 'numeric',
        minute: '2-digit'
      }),
      isOwn: true
    };

    setMessages([...messages, newMessage]);
    // TODO: Save to localStorage in next step
  };

  if (!conversation) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-gray-50 dark:bg-black">
        <div className="text-center">
          <p className="text-gray-600 dark:text-gray-400">Conversation not found</p>
          <button
            onClick={() => router.push('/messages')}
            className="mt-4 text-ubc-secondary hover:underline"
          >
            Back to messages
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="flex min-h-screen flex-col bg-gray-50 dark:bg-black">
      <FeedNavbar onSidebarToggle={() => setIsSidebarOpen(!isSidebarOpen)} />

      <div className="flex flex-1 flex-col">
        {/* Conversation Header */}
        <div className="border-b border-gray-200 bg-white p-4 dark:border-gray-800 dark:bg-gray-900">
          <div className="mx-auto flex max-w-4xl items-center gap-3">
            <button
              onClick={() => router.push('/messages')}
              className="rounded-lg p-2 text-gray-500 transition-colors hover:bg-gray-100 dark:hover:bg-gray-800"
            >
              <HiArrowLeft className="h-5 w-5" />
            </button>
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-ubc-secondary text-sm font-bold text-white">
              {conversation.participantAvatar}
            </div>
            <div>
              <h2 className="font-semibold text-gray-900 dark:text-white">
                {conversation.participantName}
              </h2>
            </div>
          </div>
        </div>

        {/* Messages Thread */}
        <div className="flex-1 overflow-y-auto bg-gray-50 dark:bg-black">
          <div className="mx-auto max-w-4xl space-y-4 p-4">
            {messages.map((message) => (
              <MessageBubble key={message.id} {...message} />
            ))}
            <div ref={messagesEndRef} />
          </div>
        </div>

        {/* Message Input */}
        <div className="mx-auto w-full max-w-4xl">
          <MessageInput onSend={handleSendMessage} />
        </div>
      </div>
    </div>
  );
}
