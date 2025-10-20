export const MENU_KEYS = {
  DASHBOARD: 'dashboard',
  STUDENTS: 'students',
  COURSES: 'courses',
  SETTINGS: 'settings'
};

export const STUDENT_STATUS = {
  ACTIVE: 'active',
  INACTIVE: 'inactive',
  SUSPENDED: 'suspended'
};

export const COURSE_LEVELS = {
  BEGINNER: 'Beginner',
  INTERMEDIATE: 'Intermediate',
  ADVANCED: 'Advanced'
};

export const LEVEL_COLORS = {
  [COURSE_LEVELS.BEGINNER]: 'green',
  [COURSE_LEVELS.INTERMEDIATE]: 'orange',
  [COURSE_LEVELS.ADVANCED]: 'red'
};

export const STATUS_COLORS = {
  [STUDENT_STATUS.ACTIVE]: 'success',
  [STUDENT_STATUS.INACTIVE]: 'error',
  [STUDENT_STATUS.SUSPENDED]: 'warning'
};
