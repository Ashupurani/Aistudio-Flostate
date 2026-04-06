import React, { useState } from 'react';
import { View } from './types';
import Layout from './components/Layout';
import LandingView from './components/LandingView';
import TasksView from './components/TasksView';
import HabitsView from './components/HabitsView';
import FocusView from './components/FocusView';
import { motion, AnimatePresence } from 'motion/react';

export default function App() {
  const [currentView, setCurrentView] = useState<View>('landing');

  const renderView = () => {
    switch (currentView) {
      case 'landing':
        return <LandingView onStart={() => setCurrentView('tasks')} />;
      case 'tasks':
        return <TasksView />;
      case 'habits':
        return <HabitsView />;
      case 'focus':
        return <FocusView />;
      case 'teams':
        return (
          <div className="flex flex-col items-center justify-center min-h-[60vh] text-center space-y-4">
            <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center text-primary">
              <span className="text-4xl">👥</span>
            </div>
            <h2 className="text-2xl font-bold font-headline">Teams Feature</h2>
            <p className="text-on-surface-variant max-w-xs">
              Collaborate with your team in real-time. This feature is coming soon!
            </p>
          </div>
        );
      case 'insights':
        return (
          <div className="flex flex-col items-center justify-center min-h-[60vh] text-center space-y-4">
            <div className="w-20 h-20 bg-secondary/10 rounded-full flex items-center justify-center text-secondary">
              <span className="text-4xl">🧠</span>
            </div>
            <h2 className="text-2xl font-bold font-headline">AI Insights</h2>
            <p className="text-on-surface-variant max-w-xs">
              Deep dive into your productivity patterns with AI-powered analytics.
            </p>
          </div>
        );
      default:
        return <TasksView />;
    }
  };

  return (
    <Layout currentView={currentView} onViewChange={setCurrentView}>
      <AnimatePresence mode="wait">
        <motion.div
          key={currentView}
          initial={{ opacity: 0, x: 10 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -10 }}
          transition={{ duration: 0.2 }}
        >
          {renderView()}
        </motion.div>
      </AnimatePresence>
    </Layout>
  );
}
