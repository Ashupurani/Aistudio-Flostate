import React, { useState } from 'react';
import { Flame, Check, PlusCircle, Award, Sparkles, Book, Dumbbell, CheckCircle2, X } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { Habit, Reward } from '../types';

const initialHabits: Habit[] = [
  {
    id: '1',
    title: 'Morning Meditation',
    description: '10 minutes session',
    streak: 15,
    completedToday: false,
    icon: 'Sparkles',
    color: 'bg-secondary-fixed text-secondary',
  },
  {
    id: '2',
    title: 'Read 20 Pages',
    description: 'Deep focus session',
    streak: 8,
    completedToday: true,
    icon: 'Book',
    color: 'bg-primary-fixed text-primary',
  },
  {
    id: '3',
    title: 'Power Workout',
    description: '45 mins strength training',
    streak: 3,
    completedToday: false,
    icon: 'Dumbbell',
    color: 'bg-tertiary-fixed text-tertiary',
  },
];

const mockReward: Reward = {
  id: '1',
  title: 'Master of Consistency',
  level: 12,
  nextMilestone: '20 Day Streak',
  progress: 65,
};

const days = [
  { label: 'MON', status: 'completed' },
  { label: 'TUE', status: 'completed' },
  { label: 'WED', status: 'completed' },
  { label: 'THU', status: 'today' },
  { label: 'FRI', status: 'upcoming' },
  { label: 'SAT', status: 'upcoming' },
  { label: 'SUN', status: 'upcoming' },
];

export default function HabitsView() {
  const [habits, setHabits] = useState<Habit[]>(initialHabits);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [newHabit, setNewHabit] = useState({ title: '', description: '', icon: 'Sparkles' });

  const getIcon = (name: string) => {
    switch (name) {
      case 'Sparkles': return <Sparkles size={24} />;
      case 'Book': return <Book size={24} />;
      case 'Dumbbell': return <Dumbbell size={24} />;
      default: return <Sparkles size={24} />;
    }
  };

  const handleAddHabit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newHabit.title.trim()) return;

    const habit: Habit = {
      id: Math.random().toString(36).substr(2, 9),
      title: newHabit.title,
      description: newHabit.description || 'Daily routine',
      streak: 0,
      completedToday: false,
      icon: newHabit.icon,
      color: 'bg-primary-fixed text-primary',
    };

    setHabits([...habits, habit]);
    setNewHabit({ title: '', description: '', icon: 'Sparkles' });
    setIsModalOpen(false);
  };

  const toggleHabit = (id: string) => {
    setHabits(habits.map(h => 
      h.id === id ? { ...h, completedToday: !h.completedToday, streak: h.completedToday ? h.streak - 1 : h.streak + 1 } : h
    ));
  };

  return (
    <div className="space-y-10">
      {/* Weekly Streak Calendar */}
      <section className="space-y-4">
        <div className="flex justify-between items-end">
          <h2 className="text-headline-sm font-headline font-bold text-2xl">This Week</h2>
          <div className="flex items-center gap-2 text-primary font-bold">
            <Flame size={24} fill="currentColor" />
            <span className="text-lg">12 Day Streak</span>
          </div>
        </div>
        <div className="grid grid-cols-7 gap-2 md:gap-4">
          {days.map((day) => (
            <div
              key={day.label}
              className={`rounded-xl p-2 md:p-4 flex flex-col items-center justify-center gap-2 border transition-all ${
                day.status === 'today'
                  ? 'bg-primary-fixed border-2 border-primary shadow-lg shadow-primary/10'
                  : 'bg-surface-container-lowest border-outline-variant/15'
              } ${day.status === 'upcoming' ? 'opacity-50' : ''}`}
            >
              <span
                className={`text-[10px] md:text-xs font-bold ${
                  day.status === 'today' ? 'text-on-primary-fixed' : 'text-on-surface-variant'
                }`}
              >
                {day.label}
              </span>
              <div
                className={`w-8 h-8 md:w-10 md:h-10 rounded-full flex items-center justify-center ${
                  day.status === 'completed'
                    ? 'bg-primary text-white'
                    : day.status === 'today'
                    ? 'bg-surface-container-lowest text-primary'
                    : 'border-2 border-outline-variant'
                }`}
              >
                {day.status === 'completed' ? (
                  <Check size={16} />
                ) : day.status === 'today' ? (
                  <div className="w-4 h-4 rounded-full border-2 border-primary/30" />
                ) : null}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Daily Habits Bento */}
      <section className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        <div className="lg:col-span-8 space-y-4">
          <div className="flex justify-between items-center">
            <h3 className="text-xl font-headline font-bold">Daily Habits</h3>
            <button 
              onClick={() => setIsModalOpen(true)}
              className="text-primary font-bold text-sm flex items-center gap-1 hover:opacity-80 transition-opacity"
            >
              <PlusCircle size={18} /> Add Habit
            </button>
          </div>
          <div className="space-y-3">
            {habits.map((habit) => (
              <motion.div
                key={habit.id}
                layout
                whileHover={{ scale: 1.01, x: 4 }}
                className="bg-surface-container-lowest p-6 rounded-xl flex items-center justify-between group transition-all hover:shadow-xl hover:shadow-on-surface/5 border border-outline-variant/5"
              >
                <div className="flex items-center gap-4">
                  <div className={`w-12 h-12 rounded-full flex items-center justify-center ${habit.color}`}>
                    {getIcon(habit.icon)}
                  </div>
                  <div>
                    <h4 className="font-bold text-lg">{habit.title}</h4>
                    <p className="text-sm text-on-surface-variant">{habit.description}</p>
                  </div>
                </div>
                <div className="flex items-center gap-6">
                  <div className="text-right hidden sm:block">
                    <p className="text-xs uppercase tracking-widest font-bold text-outline">Streak</p>
                    <p className="text-lg font-headline font-extrabold text-tertiary">{habit.streak} days</p>
                  </div>
                  <button
                    onClick={() => toggleHabit(habit.id)}
                    className={`w-10 h-10 rounded-full border-2 flex items-center justify-center transition-all active:scale-90 ${
                      habit.completedToday
                        ? 'bg-gradient-to-r from-primary to-secondary border-primary text-white shadow-lg'
                        : 'border-primary-fixed-dim bg-primary-fixed/30 text-primary hover:border-primary'
                    }`}
                  >
                    {habit.completedToday ? <CheckCircle2 size={20} /> : <Check size={20} />}
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Milestone Rewards */}
        <div className="lg:col-span-4 space-y-4">
          <h3 className="text-xl font-headline font-bold">Recent Rewards</h3>
          <div className="bg-gradient-to-br from-primary to-secondary rounded-2xl p-6 text-white space-y-6 relative overflow-hidden shadow-xl shadow-primary/20">
            <div className="relative z-10">
              <div className="flex justify-between items-start">
                <Award size={40} className="text-tertiary-fixed" />
                <span className="bg-white/20 px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider">
                  Lvl {mockReward.level}
                </span>
              </div>
              <div className="mt-4">
                <p className="text-sm font-medium opacity-80">Latest Unlocked</p>
                <h4 className="text-2xl font-bold font-headline leading-tight">{mockReward.title}</h4>
              </div>
              <div className="mt-6 pt-4 border-t border-white/20">
                <p className="text-xs opacity-70 mb-2">Next Milestone: {mockReward.nextMilestone}</p>
                <div className="w-full bg-white/20 h-2 rounded-full overflow-hidden">
                  <div className="bg-tertiary-fixed h-full transition-all duration-1000" style={{ width: `${mockReward.progress}%` }}></div>
                </div>
              </div>
            </div>
            <div className="absolute -right-8 -bottom-8 w-40 h-40 bg-white/10 rounded-full blur-3xl"></div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="bg-surface-container p-4 rounded-xl flex flex-col items-center gap-2 hover:bg-surface-container-high transition-colors cursor-pointer">
              <Award size={32} className="text-tertiary" />
              <span className="text-[10px] font-bold text-center uppercase tracking-tighter text-on-surface-variant">Early Bird</span>
            </div>
            <div className="bg-surface-container p-4 rounded-xl flex flex-col items-center gap-2 hover:bg-surface-container-high transition-colors cursor-pointer">
              <Sparkles size={32} className="text-primary" />
              <span className="text-[10px] font-bold text-center uppercase tracking-tighter text-on-surface-variant">Clean Slate</span>
            </div>
          </div>
        </div>
      </section>

      {/* Visual Insights */}
      <section className="space-y-6">
        <div className="flex justify-between items-center">
          <h3 className="text-xl font-headline font-bold text-2xl">Visual Insights</h3>
          <select className="bg-surface-container-low border-none rounded-full px-4 py-2 text-sm font-bold text-primary focus:ring-primary/20 cursor-pointer">
            <option>Last 7 Days</option>
            <option>Last 30 Days</option>
          </select>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 bg-surface-container-lowest p-8 rounded-2xl border border-outline-variant/15 space-y-8 shadow-sm">
            <div className="flex justify-between items-center">
              <div>
                <h4 className="font-bold text-lg">Daily Completion Rate</h4>
                <p className="text-sm text-on-surface-variant">Your momentum is increasing!</p>
              </div>
              <div className="text-right">
                <span className="text-2xl font-extrabold text-primary">82%</span>
                <p className="text-[10px] font-bold text-green-600 uppercase tracking-widest">+12% vs LW</p>
              </div>
            </div>
            <div className="flex items-end justify-between h-48 gap-2 md:gap-4 pt-4">
              {[40, 65, 55, 90, 45, 30, 20].map((h, i) => (
                <div key={i} className="flex-1 flex flex-col items-center gap-3">
                  <div className="w-full bg-surface-container rounded-t-lg relative group overflow-hidden" style={{ height: `${h}%` }}>
                    <motion.div 
                      initial={{ height: 0 }}
                      animate={{ height: '100%' }}
                      className={`absolute inset-0 transition-all group-hover:opacity-40 ${i === 3 ? 'bg-gradient-to-t from-primary to-secondary' : 'bg-primary opacity-20'}`}
                    ></motion.div>
                  </div>
                  <span className={`text-[8px] md:text-[10px] font-bold ${i === 3 ? 'text-primary' : 'text-outline'}`}>
                    {['MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT', 'SUN'][i]}
                  </span>
                </div>
              ))}
            </div>
          </div>
          <div className="bg-surface-container-lowest p-8 rounded-2xl border border-outline-variant/15 flex flex-col justify-between shadow-sm">
            <div>
              <h4 className="font-bold text-lg mb-1">Focus Distribution</h4>
              <p className="text-sm text-on-surface-variant">Where you spend your energy</p>
            </div>
            <div className="relative w-32 h-32 mx-auto my-6">
              <svg className="w-full h-full transform -rotate-90" viewBox="0 0 36 36">
                <circle cx="18" cy="18" r="15.9155" fill="transparent" stroke="currentColor" strokeWidth="4" className="text-surface-container"></circle>
                <circle cx="18" cy="18" r="15.9155" fill="transparent" stroke="currentColor" strokeWidth="4" strokeDasharray="60, 100" strokeLinecap="round" className="text-primary"></circle>
                <circle cx="18" cy="18" r="15.9155" fill="transparent" stroke="currentColor" strokeWidth="4" strokeDasharray="25, 100" strokeDashoffset="-60" strokeLinecap="round" className="text-secondary"></circle>
                <circle cx="18" cy="18" r="15.9155" fill="transparent" stroke="currentColor" strokeWidth="4" strokeDasharray="15, 100" strokeDashoffset="-85" strokeLinecap="round" className="text-tertiary"></circle>
              </svg>
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="text-xl font-headline font-bold text-primary">3/3</span>
              </div>
            </div>
            <div className="space-y-3">
              {[
                { label: 'Health', color: 'bg-primary', val: '60%' },
                { label: 'Mindset', color: 'bg-secondary', val: '25%' },
                { label: 'Work', color: 'bg-tertiary', val: '15%' },
              ].map((item) => (
                <div key={item.label} className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className={`w-2 h-2 rounded-full ${item.color}`}></div>
                    <span className="text-xs font-medium">{item.label}</span>
                  </div>
                  <span className="text-xs font-bold">{item.val}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Add Habit Modal */}
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
                <h3 className="text-2xl font-bold font-headline">New Habit</h3>
                <button
                  onClick={() => setIsModalOpen(false)}
                  className="text-slate-400 hover:text-on-background transition-colors"
                >
                  <X size={24} />
                </button>
              </div>

              <form onSubmit={handleAddHabit} className="space-y-6">
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-widest text-slate-400">
                    Habit Name
                  </label>
                  <input
                    autoFocus
                    type="text"
                    value={newHabit.title}
                    onChange={(e) => setNewHabit({ ...newHabit, title: e.target.value })}
                    placeholder="e.g. Read for 30 mins"
                    className="w-full bg-surface-container-low border-none rounded-2xl px-6 py-4 focus:ring-2 focus:ring-primary/20 transition-all outline-none text-lg"
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-widest text-slate-400">
                    Description
                  </label>
                  <input
                    type="text"
                    value={newHabit.description}
                    onChange={(e) => setNewHabit({ ...newHabit, description: e.target.value })}
                    placeholder="Brief details..."
                    className="w-full bg-surface-container-low border-none rounded-2xl px-6 py-4 focus:ring-2 focus:ring-primary/20 transition-all outline-none"
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-widest text-slate-400">
                    Icon
                  </label>
                  <div className="flex gap-4">
                    {['Sparkles', 'Book', 'Dumbbell'].map((icon) => (
                      <button
                        key={icon}
                        type="button"
                        onClick={() => setNewHabit({ ...newHabit, icon })}
                        className={`w-14 h-14 rounded-2xl flex items-center justify-center transition-all ${
                          newHabit.icon === icon
                            ? 'bg-primary text-white shadow-lg shadow-primary/20'
                            : 'bg-surface-container-low text-slate-500 hover:bg-surface-container'
                        }`}
                      >
                        {getIcon(icon)}
                      </button>
                    ))}
                  </div>
                </div>

                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-primary to-secondary text-white font-bold py-4 rounded-2xl shadow-xl shadow-primary/20 active:scale-[0.98] transition-all mt-4 hover:opacity-90"
                >
                  Start Habit
                </button>
              </form>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}
