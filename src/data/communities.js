// Main community
export const mainCommunity = {
  id: 'ubc-general',
  name: 'UBC General',
  type: 'main',
  icon: '🌟',
  memberCount: 15420
};

// Faculties (top-level communities)
export const faculties = [
  {
    id: 'faculty-science',
    name: 'Faculty of Science',
    type: 'faculty',
    icon: '🔬',
    memberCount: 4280
  },
  {
    id: 'faculty-arts',
    name: 'Faculty of Arts',
    type: 'faculty',
    icon: '🎨',
    memberCount: 3850
  },
  {
    id: 'faculty-applied-science',
    name: 'Faculty of Applied Science',
    type: 'faculty',
    icon: '⚙️',
    memberCount: 2940
  },
  {
    id: 'faculty-commerce',
    name: 'Sauder School of Business',
    type: 'faculty',
    icon: '💼',
    memberCount: 2150
  }
];

// Departments (mid-level communities under faculties)
export const departments = [
  // Faculty of Science departments
  { id: 'dept-cs', name: 'Computer Science', facultyId: 'faculty-science', icon: '💻', memberCount: 890 },
  { id: 'dept-math', name: 'Mathematics', facultyId: 'faculty-science', icon: '📐', memberCount: 670 },
  { id: 'dept-biology', name: 'Biology', facultyId: 'faculty-science', icon: '🧬', memberCount: 820 },
  { id: 'dept-chemistry', name: 'Chemistry', facultyId: 'faculty-science', icon: '🧪', memberCount: 540 },
  { id: 'dept-physics', name: 'Physics & Astronomy', facultyId: 'faculty-science', icon: '🔭', memberCount: 380 },

  // Faculty of Arts departments
  { id: 'dept-english', name: 'English', facultyId: 'faculty-arts', icon: '📚', memberCount: 620 },
  { id: 'dept-history', name: 'History', facultyId: 'faculty-arts', icon: '📜', memberCount: 450 },
  { id: 'dept-psych', name: 'Psychology', facultyId: 'faculty-arts', icon: '🧠', memberCount: 890 },
  { id: 'dept-econ', name: 'Economics', facultyId: 'faculty-arts', icon: '📊', memberCount: 720 },
  { id: 'dept-phil', name: 'Philosophy', facultyId: 'faculty-arts', icon: '🤔', memberCount: 340 },

  // Faculty of Applied Science departments
  { id: 'dept-cpsc', name: 'Computer Science (CPSC)', facultyId: 'faculty-applied-science', icon: '💻', memberCount: 980 },
  { id: 'dept-elec', name: 'Electrical Engineering', facultyId: 'faculty-applied-science', icon: '⚡', memberCount: 560 },
  { id: 'dept-mech', name: 'Mechanical Engineering', facultyId: 'faculty-applied-science', icon: '⚙️', memberCount: 640 },

  // Sauder departments
  { id: 'dept-comm', name: 'Commerce', facultyId: 'faculty-commerce', icon: '💼', memberCount: 1200 }
];

// Courses (lowest-level communities under departments)
export const courses = [
  // Computer Science (Science) - 100 level
  { id: 'cpsc-110', code: 'CPSC 110', name: 'Computation, Programs, and Programming', departmentId: 'dept-cs', level: 100, memberCount: 450 },

  // Computer Science (Science) - 200 level
  { id: 'cpsc-203', code: 'CPSC 203', name: 'Programming, Problem Solving, and Algorithms', departmentId: 'dept-cs', level: 200, memberCount: 230 },

  // Mathematics - 100 level
  { id: 'math-100', code: 'MATH 100', name: 'Differential Calculus', departmentId: 'dept-math', level: 100, memberCount: 456 },
  { id: 'math-101', code: 'MATH 101', name: 'Integral Calculus', departmentId: 'dept-math', level: 100, memberCount: 423 },

  // Mathematics - 200 level
  { id: 'math-200', code: 'MATH 200', name: 'Multivariable Calculus', departmentId: 'dept-math', level: 200, memberCount: 298 },
  { id: 'math-221', code: 'MATH 221', name: 'Matrix Algebra', departmentId: 'dept-math', level: 200, memberCount: 267 },

  // Mathematics - 300 level
  { id: 'math-302', code: 'MATH 302', name: 'Introduction to Probability', departmentId: 'dept-math', level: 300, memberCount: 189 },

  // Biology - 100 level
  { id: 'biol-121', code: 'BIOL 121', name: 'Genetics and Evolution', departmentId: 'dept-biology', level: 100, memberCount: 342 },

  // Biology - 200 level
  { id: 'biol-200', code: 'BIOL 200', name: 'Fundamentals of Cell Biology', departmentId: 'dept-biology', level: 200, memberCount: 278 },

  // Biology - 300 level
  { id: 'biol-300', code: 'BIOL 300', name: 'Fundamentals of Biostatistics', departmentId: 'dept-biology', level: 300, memberCount: 145 },

  // Chemistry - 100 level
  { id: 'chem-121', code: 'CHEM 121', name: 'Structural Chemistry', departmentId: 'dept-chemistry', level: 100, memberCount: 289 },

  // Chemistry - 200 level
  { id: 'chem-233', code: 'CHEM 233', name: 'Organic Chemistry', departmentId: 'dept-chemistry', level: 200, memberCount: 234 },

  // Chemistry - 300 level
  { id: 'chem-304', code: 'CHEM 304', name: 'Biomolecular Chemistry', departmentId: 'dept-chemistry', level: 300, memberCount: 123 },

  // Physics - 100 level
  { id: 'phys-101', code: 'PHYS 101', name: 'Energy and Waves', departmentId: 'dept-physics', level: 100, memberCount: 312 },

  // Physics - 200 level
  { id: 'phys-200', code: 'PHYS 200', name: 'Relativity and Quanta', departmentId: 'dept-physics', level: 200, memberCount: 167 },

  // English - 100 level
  { id: 'engl-110', code: 'ENGL 110', name: 'Literature and Composition', departmentId: 'dept-english', level: 100, memberCount: 387 },

  // English - 200 level
  { id: 'engl-220', code: 'ENGL 220', name: 'Introduction to Poetry', departmentId: 'dept-english', level: 200, memberCount: 189 },

  // English - 300 level
  { id: 'engl-329', code: 'ENGL 329', name: 'Shakespeare', departmentId: 'dept-english', level: 300, memberCount: 98 },

  // History - 100 level
  { id: 'hist-101', code: 'HIST 101', name: 'Modern European History', departmentId: 'dept-history', level: 100, memberCount: 256 },

  // History - 200 level
  { id: 'hist-244', code: 'HIST 244', name: 'History of Modern China', departmentId: 'dept-history', level: 200, memberCount: 167 },

  // Psychology - 100 level
  { id: 'psyc-100', code: 'PSYC 100', name: 'Introduction to Psychology', departmentId: 'dept-psych', level: 100, memberCount: 512 },

  // Psychology - 200 level
  { id: 'psyc-217', code: 'PSYC 217', name: 'Human Sexuality', departmentId: 'dept-psych', level: 200, memberCount: 234 },

  // Economics - 100 level
  { id: 'econ-101', code: 'ECON 101', name: 'Principles of Microeconomics', departmentId: 'dept-econ', level: 100, memberCount: 445 },
  { id: 'econ-102', code: 'ECON 102', name: 'Principles of Macroeconomics', departmentId: 'dept-econ', level: 100, memberCount: 421 },

  // Philosophy - 300 level
  { id: 'phil-310', code: 'PHIL 310', name: 'Metaphysics', departmentId: 'dept-phil', level: 300, memberCount: 76 },

  // CPSC (Engineering) - 200 level
  { id: 'cpsc-210', code: 'CPSC 210', name: 'Software Construction', departmentId: 'dept-cpsc', level: 200, memberCount: 412 },
  { id: 'cpsc-213', code: 'CPSC 213', name: 'Computer Systems', departmentId: 'dept-cpsc', level: 200, memberCount: 356 },

  // CPSC (Engineering) - 300 level
  { id: 'cpsc-310', code: 'CPSC 310', name: 'Software Engineering', departmentId: 'dept-cpsc', level: 300, memberCount: 298 },
  { id: 'cpsc-320', code: 'CPSC 320', name: 'Intermediate Algorithm Design', departmentId: 'dept-cpsc', level: 300, memberCount: 267 },

  // Electrical Engineering - 200 level
  { id: 'elec-201', code: 'ELEC 201', name: 'Circuit Analysis', departmentId: 'dept-elec', level: 200, memberCount: 267 },

  // Mechanical Engineering - 200 level
  { id: 'mech-260', code: 'MECH 260', name: 'Mechanics of Materials', departmentId: 'dept-mech', level: 200, memberCount: 234 },

  // Commerce - 100 level
  { id: 'comm-101', code: 'COMM 101', name: 'Business Communications', departmentId: 'dept-comm', level: 100, memberCount: 345 },

  // Commerce - 200 level
  { id: 'comm-204', code: 'COMM 204', name: 'Business Law', departmentId: 'dept-comm', level: 200, memberCount: 289 },
  { id: 'comm-205', code: 'COMM 205', name: 'Introduction to Management', departmentId: 'dept-comm', level: 200, memberCount: 312 },

  // Commerce - 300 level
  { id: 'comm-335', code: 'COMM 335', name: 'International Business', departmentId: 'dept-comm', level: 300, memberCount: 198 }
];

// Helper functions
export function getDepartmentsByFaculty(facultyId) {
  return departments.filter(dept => dept.facultyId === facultyId);
}

export function getCoursesByDepartment(departmentId) {
  return courses.filter(course => course.departmentId === departmentId);
}

export function getCoursesByLevel(departmentId, level) {
  return courses.filter(course =>
    course.departmentId === departmentId && course.level === level
  );
}

export function getCourseLevels(departmentId) {
  const deptCourses = courses.filter(course => course.departmentId === departmentId);
  const levels = [...new Set(deptCourses.map(course => course.level))];
  return levels.sort((a, b) => a - b);
}
