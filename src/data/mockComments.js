export const mockComments = [
  // Comments for post 1
  {
    id: 1,
    postId: 1,
    parentCommentId: null, // null means it's a direct reply to the post
    author: "study_buddy",
    avatar: "SB",
    content: "The 5th floor of Koerner library is usually pretty quiet! Also try the Irving building.",
    loves: 12,
    timestamp: "1 hour ago"
  },
  {
    id: 2,
    postId: 1,
    parentCommentId: null,
    author: "quiet_student",
    avatar: "QS",
    content: "There are some study rooms in the basement of the Life building that nobody knows about!",
    loves: 8,
    timestamp: "45 minutes ago"
  },
  {
    id: 3,
    postId: 1,
    parentCommentId: null,
    author: "john_doe",
    avatar: "JD",
    content: "Thanks everyone! I'll check these out tomorrow 🙏",
    loves: 3,
    timestamp: "30 minutes ago"
  },

  // Comments for post 2
  {
    id: 4,
    postId: 2,
    parentCommentId: null,
    author: "cs_major",
    avatar: "CM",
    content: "I'm in! When and where do you want to meet? I've been struggling with the same concepts.",
    loves: 15,
    timestamp: "3 hours ago"
  },
  {
    id: 5,
    postId: 2,
    parentCommentId: null,
    author: "design_pattern_pro",
    avatar: "DP",
    content: "Refactoring Guru has great explanations of design patterns with examples. Highly recommend!",
    loves: 22,
    timestamp: "2 hours ago"
  },
  {
    id: 6,
    postId: 2,
    parentCommentId: null,
    author: "jane_smith",
    avatar: "JS",
    content: "Let's meet at the ICICS study lounge on Wednesday at 5pm?",
    loves: 7,
    timestamp: "1 hour ago"
  },

  // Comments for post 3
  {
    id: 7,
    postId: 3,
    parentCommentId: null,
    author: "hungry_student",
    avatar: "HS",
    content: "On my way!! 🍕",
    loves: 45,
    timestamp: "25 minutes ago"
  },
  {
    id: 8,
    postId: 3,
    parentCommentId: null,
    author: "pizza_lover",
    avatar: "PL",
    content: "Just got here, there's still plenty left!",
    loves: 28,
    timestamp: "20 minutes ago"
  },
  {
    id: 9,
    postId: 3,
    parentCommentId: null,
    author: "late_to_party",
    avatar: "LP",
    content: "Noooo I just saw this 😭",
    loves: 12,
    timestamp: "10 minutes ago"
  },

  // Comments for post 4
  {
    id: 10,
    postId: 4,
    parentCommentId: null,
    author: "helpful_student",
    avatar: "HS",
    content: "I'll keep an eye out! What color was it?",
    loves: 5,
    timestamp: "50 minutes ago"
  },
  {
    id: 11,
    postId: 4,
    parentCommentId: null,
    author: "sarah_wilson",
    avatar: "SW",
    content: "It's brown leather with a UBC OneCard inside. DM me if you recognize it!",
    loves: 4,
    timestamp: "45 minutes ago"
  },

  // Comments for post 8
  {
    id: 12,
    postId: 8,
    parentCommentId: null,
    author: "math_student",
    avatar: "MS",
    content: "Count me in! I need all the help I can get with multivariable calculus.",
    loves: 9,
    timestamp: "6 hours ago"
  },
  {
    id: 13,
    postId: 8,
    parentCommentId: null,
    author: "calc_master",
    avatar: "CM",
    content: "I can help with partial derivatives if anyone needs it!",
    loves: 14,
    timestamp: "5 hours ago"
  },
  {
    id: 14,
    postId: 8,
    parentCommentId: null,
    author: "lisa_taylor",
    avatar: "LT",
    content: "Great! We have 5 people confirmed so far. See you all Wednesday!",
    loves: 6,
    timestamp: "4 hours ago"
  }
];
