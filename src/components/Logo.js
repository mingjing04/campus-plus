import Image from 'next/image';
import Link from 'next/link';

export default function Logo({ size = 'md', href = '/', showText = true, textClassName = '', className = '' }) {
  // Size presets
  const sizeClasses = {
    sm: 'h-8',
    md: 'h-10',
    lg: 'h-16',
  };

  const textSizes = {
    sm: 'text-lg',
    md: 'text-xl',
    lg: 'text-3xl',
  };

  const logoElement = (
    <div className={`flex items-center gap-2 ${className}`}>
      <Image
        src="/CampusPlus_chonky.svg"
        alt="Campus+ Logo"
        width={100}
        height={100}
        className={`${sizeClasses[size]} w-auto`}
        priority
      />
      {showText && (
        <span className={`${textSizes[size]} font-bold text-gray-900 dark:text-white ${textClassName}`}>
          Campus+
        </span>
      )}
    </div>
  );

  // If href is provided, wrap in Link
  if (href) {
    return (
      <Link href={href} className="flex items-center">
        {logoElement}
      </Link>
    );
  }

  return logoElement;
}
