import React from 'react';
import { Search, Settings2, Bell, LayoutGrid, Activity, Timer, Users, BrainCircuit, Menu } from 'lucide-react';
import { View } from '../types';
import { motion } from 'motion/react';

interface LayoutProps {
  children: React.ReactNode;
  currentView: View;
  onViewChange: (view: View) => void;
}

export default function Layout({ children, currentView, onViewChange }: LayoutProps) {
  const navItems = [
    { id: 'tasks', label: 'Tasks', icon: LayoutGrid },
    { id: 'habits', label: 'Habits', icon: Activity },
    { id: 'focus', label: 'Focus', icon: Timer },
    { id: 'teams', label: 'Teams', icon: Users },
    { id: 'insights', label: 'Insights', icon: BrainCircuit },
  ] as const;

  if (currentView === 'landing') {
    return <>{children}</>;
  }

  return (
    <div className="min-h-screen bg-background text-on-background font-sans selection:bg-primary/20">
      {/* TopAppBar */}
      <header className="fixed top-0 w-full z-50 bg-background/70 backdrop-blur-xl flex justify-between items-center px-6 md:px-12 h-16 border-b border-outline-variant/10">
        <div className="flex items-center gap-3">
          <button className="md:hidden text-slate-500 hover:text-primary transition-colors">
            <Menu size={24} />
          </button>
          <div className="flex items-center gap-3">
            <img
              alt="User"
              className="w-8 h-8 rounded-full bg-surface-container shadow-sm border border-outline-variant/15 cursor-pointer hover:ring-2 hover:ring-primary/20 transition-all"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuBv0l86gfDqw0C6mLeTsEpE8tjutyOR1FrLlDFMI3Ltuvb70-y6-DBwsCYhK6Or_B76UCq7spyixDZQYGSMdRlGBu9AXfVanXHEwxfPfTWt7z-EiuOFPZ-4Kd_yhS2VzVsISku_3f3xxypuX8M2iQbQYF3SHkNKKIC3Xj934xyK3AcCyTanuMp24NtUcnrDGJ9xdADoqoBFWKdnZInsXMR6sHQH4m0cOnFhZEMHtDpNG6c6doI-fGIQoSyi6B_WqfmtAXLa4sirkA"
              referrerPolicy="no-referrer"
            />
            <h1 className="text-xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent font-headline tracking-tight hidden sm:block">
              FocusFlow
            </h1>
          </div>
        </div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-2 bg-surface-container-low p-1 rounded-2xl border border-outline-variant/5">
          {navItems.map((item) => {
            const isActive = currentView === item.id;
            const Icon = item.icon;
            return (
              <button
                key={item.id}
                onClick={() => onViewChange(item.id)}
                className={`flex items-center gap-2 px-4 py-2 rounded-xl transition-all duration-200 active:scale-95 ${
                  isActive
                    ? 'text-primary font-bold bg-white shadow-sm'
                    : 'text-slate-500 hover:text-primary hover:bg-white/50'
                }`}
              >
                <Icon size={18} strokeWidth={isActive ? 2.5 : 2} />
                <span className="text-xs font-bold uppercase tracking-widest">
                  {item.label}
                </span>
              </button>
            );
          })}
        </nav>

        <div className="flex items-center gap-2 md:gap-4 text-slate-500">
          <button className="p-2 hover:bg-surface-container rounded-full transition-all active:scale-95">
            <Search size={20} />
          </button>
          <button className="p-2 hover:bg-surface-container rounded-full transition-all active:scale-95">
            <Settings2 size={20} />
          </button>
          <button className="p-2 hover:bg-surface-container rounded-full transition-all active:scale-95 text-primary relative">
            <Bell size={20} />
            <span className="absolute top-2 right-2 w-2 h-2 bg-red-500 rounded-full border-2 border-background"></span>
          </button>
        </div>
      </header>

      {/* Main Content */}
      <main className="pt-20 pb-32 md:pb-12 px-6 max-w-6xl mx-auto">
        {children}
      </main>

      {/* BottomNavBar (Mobile Only) */}
      <nav className="md:hidden fixed bottom-0 left-0 w-full z-50 flex justify-around items-center px-4 pb-6 pt-3 bg-white/80 backdrop-blur-2xl rounded-t-[1.5rem] shadow-[0_-4px_40px_rgba(7,0,108,0.06)] border-t border-outline-variant/10">
        {navItems.map((item) => {
          const isActive = currentView === item.id;
          const Icon = item.icon;
          return (
            <button
              key={item.id}
              onClick={() => onViewChange(item.id)}
              className={`flex flex-col items-center justify-center transition-all duration-200 active:scale-90 px-3 py-1 rounded-2xl ${
                isActive
                  ? 'text-primary font-bold bg-primary/10'
                  : 'text-slate-400 hover:text-primary'
              }`}
            >
              <Icon size={24} strokeWidth={isActive ? 2.5 : 2} />
              <span className="text-[10px] font-medium uppercase tracking-wider mt-1">
                {item.label}
              </span>
            </button>
          );
        })}
      </nav>
    </div>
  );
}
