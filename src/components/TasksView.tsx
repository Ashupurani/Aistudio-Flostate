import React, { useState } from 'react';
import { MoreHorizontal, Clock, MessageSquare, Plus, X } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { Task } from '../types';

const initialTasks: Task[] = [
  {
    id: '1',
    title: 'Review brand assets for Q3 launch',
    type: 'Quick Task',
    assignees: [
      'https://lh3.googleusercontent.com/aida-public/AB6AXuDlv4ZE22UUUfDe9ic1tCVB4FwVR3RSt-tTJU-fOg-qUlRsU5b1gqP9DZ8g06uUHBKBOjl5a22Gec1SDuWKL8voQ20TR5OYowpjnEPE-tSdxq9TBGCRE15GeDWeUSOXXY6CSO8M0VrD2-NYpwUwgnDzg4fY4gzLL3vLIY5n-Pd1sYy4P2qR19XQj2-depJSykkwF_qO172W3L8Mwda-J_ijVmD3V7YuyDaoKop_0x8M-HIuQF22AaBLDAM4i6jIOzHaHgHRj7sPNg',
      'https://lh3.googleusercontent.com/aida-public/AB6AXuCCJVIq1jLd2XFkZQg9fIOS5_rBkJOCetHCGQuKub_mHtyxqpE05gvJibydKCCN9q8PpJD5z1O1AfgBeQoB9MVpDHZ5m9wJAyuxL3XV2DRQkMk-EojB4cGb9jMFtUNwpgwG5uBf_cdCpKCD1B275lA25PBomi4nVovxADlqZ0a5MlyRCoLw_O-PdYq75rbuuYQNi56Lih151nvBj2MpBVQkR67Dm1ADrU2VH1YxVOxuWcWdbJlfg_xs0p_sl6wbkbdpde51MOV-6A',
    ],
    timeEstimate: '2h',
    status: 'todo',
  },
  {
    id: '2',
    title: 'Sync with DevOps on server migration',
    type: 'High Priority',
    assignees: [
      'https://lh3.googleusercontent.com/aida-public/AB6AXuCTjVNRIsp0eElTZNtRN6qKegaa-64V58UYamZZDiH8V9ourNjV3zAbHVbA-1Oj-HQ4sPkaKJxU-P7qcEAGNfl6nACpI7EVSYf652s-JCtvtW7Jep6gAOZPjqWSPzpt5pYLyBjplT1CPfZ8Bb-hRfvjsyZsAIcwQ2ta2cV6H3l7qjKztxLOabb6PI0njI8-mpl2c6ObEhjEPNJTI-7piGj_NMa6CXr3ZX-btHXKiIKp6sJb7zhH_7EIj_8ZMv_ivUKU9hFLm0QUSw',
    ],
    commentsCount: 5,
    status: 'todo',
  },
  {
    id: '3',
    title: 'User Interview Analysis Phase 2',
    type: 'Design Sprint',
    assignees: [
      'https://lh3.googleusercontent.com/aida-public/AB6AXuCxpNU8BZq0w-9l4XsCcSb7Rp2S_xHs45PSI4xU_QA0O6LyMPGAyvcYa5T5KhCxHxKa3IhEwT6YAoYZ8NvgHpHkDBY2UrKJy8cyzfwbptLZ9Pdr0W9kN5Mdf22vbYzne3KuTBL0syFMdfvIG3Vptf3yf5Z6z_THupaF2lMVLGmYxRCNtB_CZD_b3OVpCnfzHjKniiLfvyCfsI82QKcZu_LhXR5NFiYmFjEkQjSbAXz21RhPHTg19lIacxvvFNuqhNiJynNDits84g',
    ],
    progress: 65,
    status: 'in-progress',
  },
  {
    id: '4',
    title: 'Initialize API environment',
    type: 'Quick Task',
    assignees: [],
    status: 'completed',
  },
];

export default function TasksView() {
  const [tasks, setTasks] = useState<Task[]>(initialTasks);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [newTask, setNewTask] = useState({ title: '', type: 'Quick Task' as Task['type'] });

  const columns = [
    { id: 'todo', label: 'To-Do', color: 'bg-outline' },
    { id: 'in-progress', label: 'In Progress', color: 'bg-primary' },
    { id: 'completed', label: 'Completed', color: 'bg-emerald-500' },
  ] as const;

  const handleAddTask = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newTask.title.trim()) return;

    const task: Task = {
      id: Math.random().toString(36).substr(2, 9),
      title: newTask.title,
      type: newTask.type,
      assignees: [],
      status: 'todo',
    };

    setTasks([task, ...tasks]);
    setNewTask({ title: '', type: 'Quick Task' });
    setIsModalOpen(false);
  };

  return (
    <div className="space-y-8">
      <div className="mb-8 flex justify-between items-end">
        <div>
          <span className="text-xs font-medium text-tertiary uppercase tracking-widest block mb-2">
            Workflow
          </span>
          <h2 className="text-[2rem] font-extrabold font-headline leading-tight tracking-tight text-on-background">
            Tasks
          </h2>
        </div>
        <button
          onClick={() => setIsModalOpen(true)}
          className="hidden md:flex items-center gap-2 bg-primary text-white px-6 py-3 rounded-xl font-bold hover:bg-secondary transition-colors shadow-lg shadow-primary/20 active:scale-95"
        >
          <Plus size={20} />
          Add Task
        </button>
      </div>

      <div className="flex md:grid md:grid-cols-3 gap-6 overflow-x-auto md:overflow-visible hide-scrollbar -mx-6 px-6 md:mx-0 md:px-0 snap-x snap-mandatory">
        {columns.map((column) => (
          <section key={column.id} className="flex-none w-[85vw] md:w-auto snap-center">
            <div className="flex items-center justify-between mb-4 px-2">
              <div className="flex items-center gap-2">
                <span className={`w-2 h-2 rounded-full ${column.color}`}></span>
                <h3 className="font-bold text-on-surface-variant uppercase tracking-wider text-xs font-label">
                  {column.label}
                </h3>
                <span className="bg-surface-container-high px-2 py-0.5 rounded-full text-[10px] font-bold">
                  {tasks.filter((t) => t.status === column.id).length}
                </span>
              </div>
            </div>

            <div className="space-y-4">
              {tasks
                .filter((t) => t.status === column.id)
                .map((task) => (
                  <motion.div
                    key={task.id}
                    layout
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className={`bg-surface-container-lowest p-6 rounded-xl border border-outline-variant/10 shadow-[0_4px_20px_rgba(7,0,108,0.03)] hover:shadow-lg transition-all group cursor-pointer ${
                      task.status === 'completed' ? 'opacity-70 grayscale-[0.3]' : ''
                    }`}
                  >
                    <div className="flex justify-between items-start mb-4">
                      <span
                        className={`inline-block px-3 py-1 rounded-full text-[10px] font-bold font-label uppercase ${
                          task.type === 'High Priority'
                            ? 'bg-red-100 text-red-700'
                            : task.type === 'Design Sprint'
                            ? 'bg-tertiary/10 text-tertiary'
                            : 'bg-primary/10 text-primary'
                        }`}
                      >
                        {task.type}
                      </span>
                      <button className="text-outline-variant group-hover:text-primary transition-colors">
                        <MoreHorizontal size={20} />
                      </button>
                    </div>

                    <h4
                      className={`font-bold text-lg leading-tight mb-4 font-headline ${
                        task.status === 'completed' ? 'line-through text-slate-500' : ''
                      }`}
                    >
                      {task.title}
                    </h4>

                    {task.progress !== undefined && (
                      <div className="mb-4">
                        <div className="h-1.5 w-full bg-surface-container rounded-full overflow-hidden">
                          <div
                            className="h-full bg-gradient-to-r from-primary to-secondary rounded-full"
                            style={{ width: `${task.progress}%` }}
                          ></div>
                        </div>
                        <div className="flex justify-between mt-2">
                          <span className="text-[10px] text-slate-400 font-medium">Progress</span>
                          <span className="text-[10px] text-primary font-bold">
                            {task.progress}%
                          </span>
                        </div>
                      </div>
                    )}

                    <div className="flex items-center justify-between">
                      <div className="flex -space-x-2">
                        {task.assignees.map((avatar, i) => (
                          <img
                            key={i}
                            alt="Avatar"
                            className="w-8 h-8 rounded-full border-2 border-surface-container-lowest"
                            src={avatar}
                            referrerPolicy="no-referrer"
                          />
                        ))}
                        {task.assignees.length === 0 && (
                          <div className="w-8 h-8 rounded-full border-2 border-surface-container-lowest bg-surface-container flex items-center justify-center text-[10px] text-slate-400 font-bold">
                            UN
                          </div>
                        )}
                      </div>
                      <div className="flex items-center gap-1 text-slate-400">
                        {task.timeEstimate ? (
                          <>
                            <Clock size={14} />
                            <span className="text-[10px] font-medium font-label">
                              {task.timeEstimate}
                            </span>
                          </>
                        ) : task.commentsCount ? (
                          <>
                            <MessageSquare size={14} />
                            <span className="text-[10px] font-medium font-label">
                              {task.commentsCount}
                            </span>
                          </>
                        ) : null}
                      </div>
                    </div>
                  </motion.div>
                ))}
            </div>
          </section>
        ))}
      </div>

      {/* FAB */}
      <button
        onClick={() => setIsModalOpen(true)}
        className="fixed bottom-24 right-6 w-14 h-14 bg-gradient-to-tr from-primary to-secondary text-white rounded-2xl shadow-xl flex items-center justify-center active:scale-90 transition-all z-40 hover:rotate-90"
      >
        <Plus size={32} />
      </button>

      {/* Add Task Modal */}
      <AnimatePresence>
        {isModalOpen && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-6">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsModalOpen(false)}
              className="absolute inset-0 bg-on-background/40 backdrop-blur-sm"
            />
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              className="relative w-full max-w-md bg-white rounded-3xl p-8 shadow-2xl"
            >
              <div className="flex justify-between items-center mb-6">
                <h3 className="text-2xl font-bold font-headline">New Task</h3>
                <button
                  onClick={() => setIsModalOpen(false)}
                  className="text-slate-400 hover:text-on-background transition-colors"
                >
                  <X size={24} />
                </button>
              </div>

              <form onSubmit={handleAddTask} className="space-y-6">
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-widest text-slate-400">
                    Task Title
                  </label>
                  <input
                    autoFocus
                    type="text"
                    value={newTask.title}
                    onChange={(e) => setNewTask({ ...newTask, title: e.target.value })}
                    placeholder="What needs to be done?"
                    className="w-full bg-surface-container-low border-none rounded-2xl px-6 py-4 focus:ring-2 focus:ring-primary/20 transition-all outline-none text-lg"
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-widest text-slate-400">
                    Priority Type
                  </label>
                  <div className="grid grid-cols-3 gap-2">
                    {(['Quick Task', 'High Priority', 'Design Sprint'] as const).map((type) => (
                      <button
                        key={type}
                        type="button"
                        onClick={() => setNewTask({ ...newTask, type })}
                        className={`px-3 py-3 rounded-xl text-[10px] font-bold uppercase transition-all ${
                          newTask.type === type
                            ? 'bg-primary text-white shadow-lg shadow-primary/20'
                            : 'bg-surface-container-low text-slate-500 hover:bg-surface-container'
                        }`}
                      >
                        {type}
                      </button>
                    ))}
                  </div>
                </div>

                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-primary to-secondary text-white font-bold py-4 rounded-2xl shadow-xl shadow-primary/20 active:scale-[0.98] transition-all mt-4 hover:opacity-90"
                >
                  Create Task
                </button>
              </form>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}
