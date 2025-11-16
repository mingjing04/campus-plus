import { HiUsers, HiChatBubbleLeftRight, HiCalendar, HiClipboardDocumentList, HiVideoCamera, HiLockClosed } from 'react-icons/hi2';

const iconMap = {
  users: HiUsers,
  chat: HiChatBubbleLeftRight,
  calendar: HiCalendar,
  clipboard: HiClipboardDocumentList,
  video: HiVideoCamera,
  lock: HiLockClosed
};

export default function FeatureCard({ icon, title, description, colorScheme }) {
  const Icon = iconMap[icon];
  const bgColor = colorScheme === "secondary" ? "bg-ubc-secondary/10" : "bg-ubc-blue/10";
  const iconColor = colorScheme === "secondary" ? "text-ubc-secondary" : "text-ubc-blue";

  return (
    <div className="rounded-2xl border border-gray-200 bg-white p-8 shadow-sm transition-shadow hover:shadow-lg dark:border-gray-800 dark:bg-gray-900">
      <div className={`flex h-12 w-12 items-center justify-center rounded-lg ${bgColor}`}>
        <Icon className={`h-6 w-6 ${iconColor}`} />
      </div>
      <h3 className="mt-4 text-xl font-semibold text-gray-900 dark:text-white">
        {title}
      </h3>
      <p className="mt-2 text-gray-600 dark:text-gray-400">
        {description}
      </p>
    </div>
  );
}
