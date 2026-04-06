import React, { useState, useEffect } from 'react';
import { Play, Pause, RotateCcw, Settings, Zap, Target, TrendingUp, Calendar, X, Clock, Coffee, Sparkles, Lightbulb, BrainCircuit, Timer } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export default function FocusView() {
  const [timeLeft, setTimeLeft] = useState(25 * 60);
  const [isActive, setIsActive] = useState(false);
  const [isSettingsOpen, setIsSettingsOpen] = useState(false);
  const [timerSettings, setTimerSettings] = useState({ focus: 25, break: 5 });

  useEffect(() => {
    let interval: any = null;
    if (isActive && timeLeft > 0) {
      interval = setInterval(() => {
        setTimeLeft((time) => time - 1);
      }, 1000);
    } else if (timeLeft === 0) {
      setIsActive(false);
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [isActive, timeLeft]);

  const toggleTimer = () => setIsActive(!isActive);
  const resetTimer = () => {
    setIsActive(false);
    setTimeLeft(timerSettings.focus * 60);
  };

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  const progress = (timeLeft / (timerSettings.focus * 60)) * 100;

  const handleSaveSettings = (e: React.FormEvent) => {
    e.preventDefault();
    setTimeLeft(timerSettings.focus * 60);
    setIsActive(false);
    setIsSettingsOpen(false);
  };

  return (
    <div className="space-y-10 pb-20 md:pb-0">
      {/* Timer Section */}
      <section className="flex flex-col items-center justify-center py-8 md:py-12 space-y-10">
        <div className="relative w-64 h-64 md:w-80 md:h-80 flex items-center justify-center">
          <svg className="w-full h-full transform -rotate-90">
            <circle
              cx="50%"
              cy="50%"
              r="45%"
              className="stroke-surface-container fill-none"
              strokeWidth="8"
            />
            <motion.circle
              cx="50%"
              cy="50%"
              r="45%"
              className="stroke-primary fill-none"
              strokeWidth="8"
              strokeDasharray="100 100"
              initial={{ strokeDashoffset: 100 }}
              animate={{ strokeDashoffset: progress }}
              transition={{ duration: 0.5, ease: "linear" }}
              strokeLinecap="round"
            />
          </svg>
          <div className="absolute flex flex-col items-center">
            <span className="text-5xl md:text-7xl font-headline font-extrabold tracking-tighter text-on-background">
              {formatTime(timeLeft)}
            </span>
            <span className="text-sm font-bold text-primary uppercase tracking-widest mt-2">Focus Session</span>
          </div>
        </div>

        <div className="flex items-center gap-4 md:gap-8">
          <button
            onClick={resetTimer}
            className="w-12 h-12 md:w-14 md:h-14 rounded-full bg-surface-container flex items-center justify-center text-on-surface-variant hover:bg-surface-container-high transition-all active:scale-90"
          >
            <RotateCcw size={24} />
          </button>
          <button
            onClick={toggleTimer}
            className="w-20 h-20 md:w-24 md:h-24 rounded-full bg-primary text-white flex items-center justify-center shadow-2xl shadow-primary/40 hover:scale-105 transition-all active:scale-95"
          >
            {isActive ? <Pause size={40} fill="currentColor" /> : <Play size={40} fill="currentColor" className="ml-2" />}
          </button>
          <button 
            onClick={() => setIsSettingsOpen(true)}
            className="w-12 h-12 md:w-14 md:h-14 rounded-full bg-surface-container flex items-center justify-center text-on-surface-variant hover:bg-surface-container-high transition-all active:scale-90"
          >
            <Settings size={24} />
          </button>
        </div>
      </section>

      {/* AI Insights & Stats Bento */}
      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* AI Insight Card */}
        <div className="md:col-span-2 bg-gradient-to-br from-primary to-secondary rounded-3xl p-8 text-white relative overflow-hidden shadow-xl shadow-primary/20">
          <div className="relative z-10 space-y-6">
            <div className="flex items-center gap-3">
              <div className="bg-white/20 p-2 rounded-lg">
                <Zap size={24} className="text-tertiary-fixed" />
              </div>
              <span className="text-sm font-bold uppercase tracking-widest opacity-80">AI Productivity Insight</span>
            </div>
            <div className="space-y-2">
              <h3 className="text-2xl md:text-3xl font-headline font-bold leading-tight">Peak Productivity Detected</h3>
              <p className="text-lg opacity-90 max-w-md leading-relaxed">
                Based on your last 3 sessions, your focus is 24% higher between 9 AM and 11 AM.
              </p>
            </div>
            <button className="bg-white text-primary font-bold px-6 py-3 rounded-xl hover:bg-opacity-90 transition-all active:scale-95 shadow-lg">
              Optimize Schedule
            </button>
          </div>
          <div className="absolute -right-10 -bottom-10 w-64 h-64 bg-white/10 rounded-full blur-3xl"></div>
          <Sparkles className="absolute top-8 right-8 opacity-20" size={120} />
        </div>

        {/* Focus Growth Card */}
        <div className="bg-surface-container-lowest p-8 rounded-3xl border border-outline-variant/15 flex flex-col justify-between shadow-sm hover:shadow-md transition-shadow">
          <div className="flex justify-between items-start">
            <div className="bg-tertiary-fixed/30 p-3 rounded-2xl text-tertiary">
              <TrendingUp size={28} />
            </div>
            <span className="text-green-600 font-bold text-sm">+18%</span>
          </div>
          <div className="mt-8">
            <h4 className="text-xl font-bold font-headline">Focus Growth</h4>
            <p className="text-sm text-on-surface-variant mt-1">Consistency is key to mastery.</p>
          </div>
          <div className="mt-6 flex items-end gap-1 h-12">
            {[30, 45, 25, 60, 40, 75, 50].map((h, i) => (
              <div key={i} className="flex-1 bg-tertiary/20 rounded-full relative group overflow-hidden" style={{ height: `${h}%` }}>
                <div className="absolute inset-0 bg-tertiary opacity-0 group-hover:opacity-100 transition-opacity"></div>
              </div>
            ))}
          </div>
        </div>

        {/* Stats Grid */}
        <div className="md:col-span-3 grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {[
            { label: 'Focus Time', val: '4.2h', icon: <Clock size={20} />, color: 'text-primary' },
            { label: 'Sessions', val: '8', icon: <Target size={20} />, color: 'text-secondary' },
            { label: 'Efficiency', val: '94%', icon: <Zap size={20} />, color: 'text-tertiary' },
            { label: 'Streak', val: '12d', icon: <Calendar size={20} />, color: 'text-primary' },
          ].map((stat) => (
            <div key={stat.label} className="bg-surface-container-lowest p-6 rounded-2xl border border-outline-variant/10 flex flex-col gap-2 hover:bg-surface-container-low transition-colors shadow-sm">
              <div className={`${stat.color} opacity-80`}>{stat.icon}</div>
              <p className="text-2xl md:text-3xl font-headline font-extrabold text-on-background">{stat.val}</p>
              <p className="text-xs font-bold text-on-surface-variant uppercase tracking-widest">{stat.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Timer Settings Modal */}
      <AnimatePresence>
        {isSettingsOpen && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-6">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsSettingsOpen(false)}
              className="absolute inset-0 bg-on-background/40 backdrop-blur-sm"
            />
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              className="relative w-full max-w-md bg-white rounded-3xl p-8 shadow-2xl"
            >
              <div className="flex justify-between items-center mb-8">
                <h3 className="text-2xl font-bold font-headline">Timer Settings</h3>
                <button
                  onClick={() => setIsSettingsOpen(false)}
                  className="text-slate-400 hover:text-on-background transition-colors"
                >
                  <X size={24} />
                </button>
              </div>

              <form onSubmit={handleSaveSettings} className="space-y-8">
                <div className="space-y-6">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="p-2 bg-primary-fixed/30 rounded-lg text-primary">
                        <Zap size={20} />
                      </div>
                      <div>
                        <p className="font-bold">Focus Duration</p>
                        <p className="text-xs text-slate-400">Time to stay focused</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <button 
                        type="button"
                        onClick={() => setTimerSettings(s => ({ ...s, focus: Math.max(1, s.focus - 5) }))}
                        className="w-8 h-8 rounded-full bg-surface-container flex items-center justify-center hover:bg-surface-container-high transition-colors"
                      >-</button>
                      <span className="w-12 text-center font-bold text-lg">{timerSettings.focus}m</span>
                      <button 
                        type="button"
                        onClick={() => setTimerSettings(s => ({ ...s, focus: s.focus + 5 }))}
                        className="w-8 h-8 rounded-full bg-surface-container flex items-center justify-center hover:bg-surface-container-high transition-colors"
                      >+</button>
                    </div>
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="p-2 bg-secondary-fixed/30 rounded-lg text-secondary">
                        <Coffee size={20} />
                      </div>
                      <div>
                        <p className="font-bold">Break Duration</p>
                        <p className="text-xs text-slate-400">Time to recharge</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <button 
                        type="button"
                        onClick={() => setTimerSettings(s => ({ ...s, break: Math.max(1, s.break - 1) }))}
                        className="w-8 h-8 rounded-full bg-surface-container flex items-center justify-center hover:bg-surface-container-high transition-colors"
                      >-</button>
                      <span className="w-12 text-center font-bold text-lg">{timerSettings.break}m</span>
                      <button 
                        type="button"
                        onClick={() => setTimerSettings(s => ({ ...s, break: s.break + 1 }))}
                        className="w-8 h-8 rounded-full bg-surface-container flex items-center justify-center hover:bg-surface-container-high transition-colors"
                      >+</button>
                    </div>
                  </div>
                </div>

                <div className="pt-4">
                  <button
                    type="submit"
                    className="w-full bg-primary text-white font-bold py-4 rounded-2xl shadow-xl shadow-primary/20 active:scale-[0.98] transition-all hover:opacity-90"
                  >
                    Save Changes
                  </button>
                  <p className="text-center text-[10px] font-bold text-slate-400 uppercase tracking-widest mt-4">
                    Changes will reset current timer
                  </p>
                </div>
              </form>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}
