'use client';

import { useState } from 'react';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import { HiHome, HiChatBubbleLeftRight, HiChevronDown, HiChevronRight, HiXMark } from 'react-icons/hi2';
import { mainCommunity, faculties, getDepartmentsByFaculty, getCoursesByDepartment, getCourseLevels } from '@/data/communities';

export default function FeedSidebar({ isOpen = false, onClose = () => {} }) {
  const pathname = usePathname();
  const [expandedFaculties, setExpandedFaculties] = useState({});
  const [expandedDepartments, setExpandedDepartments] = useState({});

  // Check if current page is home/feed related
  const isHomeActive = pathname === '/feed' || pathname.startsWith('/community') || pathname.startsWith('/post');
  const isMessagesActive = pathname.startsWith('/messages');

  const toggleFaculty = (facultyId) => {
    setExpandedFaculties(prev => ({
      ...prev,
      [facultyId]: !prev[facultyId]
    }));
  };

  const toggleDepartment = (deptId) => {
    setExpandedDepartments(prev => ({
      ...prev,
      [deptId]: !prev[deptId]
    }));
  };

  return (
    <>
      {/* Mobile Backdrop */}
      {isOpen && (
        <div
          className="fixed inset-0 z-40 bg-black/50 md:hidden"
          onClick={onClose}
        />
      )}

      {/* Sidebar */}
      <aside className={`
        sticky top-16 w-64 border-r border-gray-200 bg-white dark:border-gray-800 dark:bg-gray-900 h-[calc(100vh-4rem)] overflow-y-auto
        md:block
        ${isOpen ? 'fixed inset-y-0 left-0 z-50' : 'hidden'}
      `}>
        {/* Mobile Close Button */}
        <div className="flex items-center justify-between border-b border-gray-200 p-4 dark:border-gray-800 md:hidden">
          <span className="text-lg font-bold text-gray-900 dark:text-white">Menu</span>
          <button
            onClick={onClose}
            className="rounded-lg p-2 text-gray-500 hover:bg-gray-100 dark:hover:bg-gray-800"
          >
            <HiXMark className="h-6 w-6" />
          </button>
        </div>

        <div className="p-4">
        {/* Navigation Buttons */}
        <div className="mb-6">
          <Link href="/feed" className="block mb-3">
            <button className={`flex w-full items-center gap-3 rounded-lg px-4 py-3 text-left font-medium transition-colors ${
              isHomeActive
                ? 'bg-ubc-secondary/10 text-ubc-secondary hover:bg-ubc-secondary/20'
                : 'text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-800'
            }`}>
              <HiHome className="h-5 w-5" />
              <span>Home</span>
            </button>
          </Link>
          <Link href="/messages" className="block">
            <button className={`flex w-full items-center gap-3 rounded-lg px-4 py-3 text-left font-medium transition-colors ${
              isMessagesActive
                ? 'bg-ubc-secondary/10 text-ubc-secondary hover:bg-ubc-secondary/20'
                : 'text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-800'
            }`}>
              <HiChatBubbleLeftRight className="h-5 w-5" />
              <span>Messages</span>
            </button>
          </Link>
        </div>

        {/* Pinned Communities */}
        <div className="mb-6">
          <h3 className="mb-2 px-2 text-xs font-bold uppercase tracking-wide text-gray-500 dark:text-gray-400">
            Pinned
          </h3>
          <div className="space-y-1">
            <CommunityItem name="UBC General" icon="📌" href="/community/ubc-general" />
            <CommunityItem name="CPSC 210" icon="📌" href="/community/cpsc-210" />
          </div>
        </div>

        {/* My Communities */}
        <div className="mb-6">
          <h3 className="mb-2 px-2 text-xs font-bold uppercase tracking-wide text-gray-500 dark:text-gray-400">
            My Communities
          </h3>
          <div className="space-y-1">
            <CommunityItem name="Faculty of Science" icon="🔬" href="/community/faculty-science" />
            <CommunityItem name="MATH 200" icon="📚" href="/community/math-200" />
            <CommunityItem name="CPSC 210" icon="📚" href="/community/cpsc-210" />
          </div>
        </div>

        {/* Browse Communities */}
        <div>
          <h3 className="mb-2 px-2 text-xs font-bold uppercase tracking-wide text-gray-500 dark:text-gray-400">
            Browse
          </h3>

          {/* UBC General */}
          <div className="mb-2">
            <CommunityItem name={mainCommunity.name} icon={mainCommunity.icon} memberCount={mainCommunity.memberCount} href={`/community/${mainCommunity.id}`} />
          </div>

          {/* Faculties with Departments and Courses */}
          <div className="space-y-1">
            {faculties.map(faculty => (
              <div key={faculty.id}>
                {/* Faculty Header */}
                <div className="flex items-center gap-1 rounded-lg transition-colors hover:bg-gray-100 dark:hover:bg-gray-800">
                  {/* Faculty Name - Click to visit page */}
                  <Link href={`/community/${faculty.id}`} className="flex flex-1 items-center gap-2 px-2 py-2 text-sm">
                    <span>{faculty.icon}</span>
                    <span className="font-medium text-gray-900 dark:text-white">
                      {faculty.name}
                    </span>
                  </Link>

                  {/* Arrow Button - Click to expand/collapse */}
                  <button
                    onClick={() => toggleFaculty(faculty.id)}
                    className="p-2 hover:bg-gray-200 rounded dark:hover:bg-gray-700"
                  >
                    {expandedFaculties[faculty.id] ? (
                      <HiChevronDown className="h-4 w-4 text-gray-500" />
                    ) : (
                      <HiChevronRight className="h-4 w-4 text-gray-500" />
                    )}
                  </button>
                </div>

                {/* Departments under this Faculty */}
                {expandedFaculties[faculty.id] && (
                  <div className="ml-4 mt-1 space-y-1 border-l-2 border-gray-200 pl-2 dark:border-gray-700">
                    {getDepartmentsByFaculty(faculty.id).map(dept => (
                      <div key={dept.id}>
                        {/* Department Header */}
                        <div className="flex items-center gap-1 rounded-lg transition-colors hover:bg-gray-100 dark:hover:bg-gray-800">
                          {/* Department Name - Click to visit page */}
                          <Link href={`/community/${dept.id}`} className="flex flex-1 items-center gap-2 px-2 py-1.5 text-sm">
                            <span className="text-xs">{dept.icon}</span>
                            <span className="text-gray-700 dark:text-gray-300">
                              {dept.name}
                            </span>
                          </Link>

                          {/* Arrow Button - Click to expand/collapse */}
                          <button
                            onClick={() => toggleDepartment(dept.id)}
                            className="p-1.5 hover:bg-gray-200 rounded dark:hover:bg-gray-700"
                          >
                            {expandedDepartments[dept.id] ? (
                              <HiChevronDown className="h-3 w-3 text-gray-500" />
                            ) : (
                              <HiChevronRight className="h-3 w-3 text-gray-500" />
                            )}
                          </button>
                        </div>

                        {/* Courses by Level under this Department */}
                        {expandedDepartments[dept.id] && (
                          <div className="ml-4 mt-1 space-y-2">
                            {getCourseLevels(dept.id).map(level => {
                              const levelCourses = getCoursesByDepartment(dept.id).filter(c => c.level === level);
                              return (
                                <div key={level}>
                                  <div className="px-2 py-1 text-xs font-semibold text-gray-500 dark:text-gray-400">
                                    {level}-Level Courses
                                  </div>
                                  <div className="space-y-0.5">
                                    {levelCourses.map(course => (
                                      <Link
                                        key={course.id}
                                        href={`/community/${course.id}`}
                                        className="flex w-full items-center gap-2 rounded px-2 py-1 text-left text-xs transition-colors hover:bg-gray-100 dark:hover:bg-gray-800"
                                      >
                                        <span>📚</span>
                                        <span className="text-gray-700 dark:text-gray-300">
                                          {course.code}
                                        </span>
                                      </Link>
                                    ))}
                                  </div>
                                </div>
                              );
                            })}
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </aside>
    </>
  );
}

// Reusable Community Item Component
function CommunityItem({ name, icon, memberCount, href = '#' }) {
  return (
    <Link href={href} className="flex w-full items-center justify-between rounded-lg px-2 py-2 text-left text-sm transition-colors hover:bg-gray-100 dark:hover:bg-gray-800">
      <div className="flex items-center gap-2">
        <span>{icon}</span>
        <span className="font-medium text-gray-700 dark:text-gray-300">{name}</span>
      </div>
      {memberCount && (
        <span className="text-xs text-gray-500">{memberCount.toLocaleString()}</span>
      )}
    </Link>
  );
}
