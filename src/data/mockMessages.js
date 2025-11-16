export const mockMessages = [
  // Conversation 1 with jane_smith
  {
    id: 1,
    conversationId: 1,
    senderId: 2,
    senderName: 'jane_smith',
    senderAvatar: 'JS',
    content: 'Hey! Are you free to study this afternoon?',
    timestamp: '2:30 PM',
    isOwn: false
  },
  {
    id: 2,
    conversationId: 1,
    senderId: 'current-user',
    senderName: 'You',
    senderAvatar: 'G',
    content: 'Yeah! What time works for you?',
    timestamp: '2:32 PM',
    isOwn: true
  },
  {
    id: 3,
    conversationId: 1,
    senderId: 2,
    senderName: 'jane_smith',
    senderAvatar: 'JS',
    content: 'How about 4pm at the Koerner library?',
    timestamp: '2:35 PM',
    isOwn: false
  },
  {
    id: 4,
    conversationId: 1,
    senderId: 'current-user',
    senderName: 'You',
    senderAvatar: 'G',
    content: 'Perfect! See you there.',
    timestamp: '2:36 PM',
    isOwn: true
  },
  {
    id: 5,
    conversationId: 1,
    senderId: 2,
    senderName: 'jane_smith',
    senderAvatar: 'JS',
    content: 'See you at the library!',
    timestamp: '2:37 PM',
    isOwn: false
  },

  // Conversation 2 with mike_chen
  {
    id: 6,
    conversationId: 2,
    senderId: 'current-user',
    senderName: 'You',
    senderAvatar: 'G',
    content: 'Hey Mike! Do you have the lecture notes from Monday?',
    timestamp: 'Yesterday',
    isOwn: true
  },
  {
    id: 7,
    conversationId: 2,
    senderId: 3,
    senderName: 'mike_chen',
    senderAvatar: 'MC',
    content: 'Yeah! Let me send them to you',
    timestamp: 'Yesterday',
    isOwn: false
  },
  {
    id: 8,
    conversationId: 2,
    senderId: 3,
    senderName: 'mike_chen',
    senderAvatar: 'MC',
    content: 'Thanks for the notes!',
    timestamp: 'Yesterday',
    isOwn: false
  },

  // Conversation 3 with alex_park
  {
    id: 9,
    conversationId: 3,
    senderId: 5,
    senderName: 'alex_park',
    senderAvatar: 'AP',
    content: 'Study group is meeting Thursday at 6pm',
    timestamp: '1 day ago',
    isOwn: false
  },
  {
    id: 10,
    conversationId: 3,
    senderId: 5,
    senderName: 'alex_park',
    senderAvatar: 'AP',
    content: 'Are you coming to the study group?',
    timestamp: '1 day ago',
    isOwn: false
  },

  // Conversation 4 with lisa_taylor
  {
    id: 11,
    conversationId: 4,
    senderId: 8,
    senderName: 'lisa_taylor',
    senderAvatar: 'LT',
    content: 'Hey! Just a reminder',
    timestamp: '2 days ago',
    isOwn: false
  },
  {
    id: 12,
    conversationId: 4,
    senderId: 8,
    senderName: 'lisa_taylor',
    senderAvatar: 'LT',
    content: 'The assignment is due tomorrow!',
    timestamp: '2 days ago',
    isOwn: false
  }
];
