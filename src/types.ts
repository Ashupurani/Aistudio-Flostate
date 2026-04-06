export type View = 'landing' | 'tasks' | 'habits' | 'focus' | 'teams' | 'insights';

export interface Task {
  id: string;
  title: string;
  type: 'Quick Task' | 'High Priority' | 'Design Sprint';
  assignees: string[];
  timeEstimate?: string;
  commentsCount?: number;
  progress?: number;
  status: 'todo' | 'in-progress' | 'completed';
}

export interface Habit {
  id: string;
  title: string;
  description: string;
  streak: number;
  completedToday: boolean;
  icon: string;
  color: string;
}

export interface Reward {
  id: string;
  title: string;
  level: number;
  nextMilestone: string;
  progress: number;
}
