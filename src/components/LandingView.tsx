import React from 'react';
import { PlayCircle, Rocket, Route, RotateCcw, Package, Activity, Timer, ArrowRight, Sparkles } from 'lucide-react';
import { motion } from 'motion/react';

interface LandingViewProps {
  onStart: () => void;
}

export default function LandingView({ onStart }: LandingViewProps) {
  return (
    <div className="bg-background text-on-surface font-body selection:bg-primary/20 min-h-screen">
      {/* TopAppBar */}
      <header className="fixed top-0 w-full z-50 bg-background/70 backdrop-blur-xl flex justify-between items-center px-6 md:px-12 h-16 border-b border-outline-variant/5">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-gradient-to-br from-primary to-secondary rounded-lg flex items-center justify-center text-white shadow-lg shadow-primary/20">
            <Rocket size={18} />
          </div>
          <span className="text-xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent font-headline tracking-tight">
            FocusFlow
          </span>
        </div>
        <div className="flex items-center gap-6">
          <nav className="hidden md:flex items-center gap-8 text-sm font-bold text-on-surface-variant uppercase tracking-widest">
            <a href="#" className="hover:text-primary transition-colors">Features</a>
            <a href="#" className="hover:text-primary transition-colors">Pricing</a>
            <a href="#" className="hover:text-primary transition-colors">About</a>
          </nav>
          <div className="flex items-center gap-4">
            <button className="text-primary hover:opacity-80 transition-opacity active:scale-95 hidden sm:block">
              <PlayCircle size={24} />
            </button>
            <div className="w-8 h-8 rounded-full overflow-hidden bg-surface-container border border-outline-variant/15 cursor-pointer hover:ring-2 hover:ring-primary/20 transition-all">
              <img
                alt="User profile"
                className="w-full h-full object-cover"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCsAQq-FTkimgpgYweffbp-ZfMMdwfOsgScfWo7I3cnpWNsIvojalRt0KjvPiMXGJqX-cBoHhAqOUp6eRuF7eTOH3k24ANsb0q7bg3j-VQX6yHEIl78tLmVPI28qbutjcZM9ISU-pV_xASc-ucYQoV548QBiR6SM5-HzTGK-xxvW44XqdjIYLtVplyKJAmSRrLYDvnnYk60ErO0CcJZoMBralcKDh1W33znsqyMeKWE9l-_HeB_ifiOCMVqFE7k2VVxqjlUqRiv5A"
                referrerPolicy="no-referrer"
              />
            </div>
          </div>
        </div>
      </header>

      <main className="pt-16 pb-32">
        {/* Hero Section */}
        <section className="px-6 md:px-12 pt-12 md:pt-24 pb-20 relative overflow-hidden max-w-7xl mx-auto">
          <div className="absolute top-0 right-0 -z-10 opacity-20 transform translate-x-1/4 -translate-y-1/4">
            <div className="w-[500px] h-[500px] bg-gradient-to-br from-primary to-secondary rounded-full blur-[120px]"></div>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="inline-flex items-center gap-2 px-3 py-1 bg-surface-container rounded-full"
              >
                <span className="w-2 h-2 rounded-full bg-primary animate-pulse"></span>
                <span className="font-label text-[10px] font-bold text-on-surface-variant uppercase tracking-widest">
                  Enterprise-Grade Productivity Platform
                </span>
              </motion.div>
              
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="font-headline text-5xl md:text-7xl font-extrabold tracking-tight text-on-surface leading-[1.1]"
              >
                Master Your Day with <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">Fluid Motion</span>.
              </motion.h1>
              
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="text-on-surface-variant text-lg md:text-xl leading-relaxed max-w-xl"
              >
                FocusFlow transforms chaos into clarity. Design your workflow with the elegance of an architect and the speed of a startup.
              </motion.p>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="flex flex-col sm:flex-row gap-4"
              >
                <button
                  onClick={onStart}
                  className="group bg-gradient-to-r from-primary to-secondary text-white font-bold py-5 px-10 rounded-2xl text-center active:scale-95 transition-all shadow-xl shadow-primary/20 hover:shadow-2xl hover:shadow-primary/30 flex items-center justify-center gap-2"
                >
                  Get Started Free
                  <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                </button>
                <button className="bg-surface-container-highest text-primary font-bold py-5 px-10 rounded-2xl text-center flex items-center justify-center gap-2 active:scale-95 transition-all hover:bg-surface-container-high">
                  <PlayCircle size={20} />
                  Watch Demo
                </button>
              </motion.div>
              
              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
                className="flex items-center gap-6 pt-4"
              >
                <div className="flex -space-x-3">
                  {[1, 2, 3, 4].map(i => (
                    <div key={i} className="w-10 h-10 rounded-full border-4 border-background bg-surface-container overflow-hidden">
                      <img src={`https://picsum.photos/seed/user${i}/100/100`} alt="User" referrerPolicy="no-referrer" />
                    </div>
                  ))}
                </div>
                <p className="text-sm font-bold text-on-surface-variant">
                  <span className="text-primary">50k+</span> professionals already joined
                </p>
              </motion.div>
            </div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95, x: 20 }}
              animate={{ opacity: 1, scale: 1, x: 0 }}
              transition={{ delay: 0.4 }}
              className="relative"
            >
              <div className="rounded-3xl overflow-hidden shadow-2xl bg-surface-container-lowest border border-outline-variant/10">
                <img
                  alt="Product Dashboard Preview"
                  className="w-full h-auto"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuCwdfxk35QAB3FCMl3in496llriVF1SM_w8-07F-881IP7S_vHxbYfJpinEpUXsh1V9PJkkie9v4c4cEspAaobxZ_DVgU_PcaiSLXhhApyT8U0KlnIfHhdiXBD0gCCT4JjdnQn4T-SYOq6V3sxvTpzjYLMuRr1tE2TubvnM6v-fT-2zRBLXZJBqo-cF8sD4cuKFPl8-ctVkZ59-rkc40432AFYwOcH6jYVzrtLEcohijrrHOExMp0pSkzJIIdYzmYtJ519hGHBUwA"
                  referrerPolicy="no-referrer"
                />
              </div>
              {/* Floating Element */}
              <motion.div 
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -bottom-6 -left-6 bg-white p-4 rounded-2xl shadow-xl border border-outline-variant/10 flex items-center gap-4 hidden md:flex"
              >
                <div className="w-12 h-12 bg-green-100 text-green-600 rounded-xl flex items-center justify-center">
                  <Activity size={24} />
                </div>
                <div>
                  <p className="text-xs font-bold text-slate-400 uppercase tracking-widest">Efficiency</p>
                  <p className="text-xl font-headline font-bold text-on-background">+24% Today</p>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Core Benefits */}
        <section className="px-6 md:px-12 py-24 bg-surface-container-low">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
              <div className="space-y-4">
                <h2 className="font-headline text-3xl md:text-4xl font-extrabold text-on-surface">Precision Features</h2>
                <p className="text-on-surface-variant max-w-md">Engineered for high-performance individuals and teams.</p>
              </div>
              <button className="text-primary font-bold flex items-center gap-2 hover:gap-3 transition-all group">
                Explore all features <ArrowRight size={18} />
              </button>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  icon: Rocket,
                  title: 'Increase productivity',
                  desc: 'Leverage AI-driven task sequencing to eliminate decision fatigue and start your flow instantly.',
                  color: 'text-primary bg-primary/10',
                  hover: 'group-hover:bg-primary',
                },
                {
                  icon: Route,
                  title: 'Reduce task switching',
                  desc: 'Integrated workspace that pulls all your tools into one unified, distraction-free environment.',
                  color: 'text-tertiary bg-tertiary/10',
                  hover: 'group-hover:bg-tertiary',
                },
                {
                  icon: RotateCcw,
                  title: 'Build consistent habits',
                  desc: 'Atomic habit tracking designed to reward streaks and visual momentum, not just checkmarks.',
                  color: 'text-secondary bg-secondary/10',
                  hover: 'group-hover:bg-secondary',
                },
              ].map((benefit, i) => (
                <div key={i} className="bg-surface-container-lowest p-10 rounded-3xl flex flex-col gap-6 group transition-all hover:shadow-2xl hover:-translate-y-2 border border-outline-variant/5">
                  <div className={`w-14 h-14 rounded-2xl flex items-center justify-center transition-all duration-300 ${benefit.color} ${benefit.hover} group-hover:text-white group-hover:rotate-6`}>
                    <benefit.icon size={28} />
                  </div>
                  <div className="space-y-3">
                    <h3 className="font-headline font-bold text-2xl">{benefit.title}</h3>
                    <p className="text-on-surface-variant leading-relaxed">{benefit.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Bento Section */}
        <section className="px-6 md:px-12 py-24 max-w-7xl mx-auto">
          <div className="text-center mb-20 space-y-4">
            <h2 className="font-headline text-4xl md:text-5xl font-extrabold">Everything You Need to Succeed</h2>
            <p className="text-on-surface-variant text-lg">Three pillars of elite performance, unified in one interface.</p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
            <div className="lg:col-span-8 bg-surface-container p-10 rounded-3xl overflow-hidden relative min-h-[400px] flex flex-col justify-end group cursor-pointer border border-outline-variant/10">
              <div className="absolute top-0 right-0 p-10 transform group-hover:scale-110 group-hover:rotate-12 transition-transform duration-500">
                <Package size={120} className="text-primary opacity-10" />
              </div>
              <div className="relative z-10 space-y-4">
                <div className="bg-primary text-white w-12 h-12 rounded-xl flex items-center justify-center shadow-lg shadow-primary/20">
                  <Package size={24} />
                </div>
                <h4 className="font-headline font-bold text-3xl">Smart Task Management</h4>
                <p className="text-on-surface-variant text-lg max-w-md leading-relaxed">Context-aware task lists that automatically reprioritize based on your current focus mode and energy levels.</p>
              </div>
            </div>
            
            <div className="lg:col-span-4 grid grid-cols-1 gap-6">
              <div className="bg-primary/5 p-8 rounded-3xl flex flex-col justify-between group hover:bg-primary/10 transition-colors border border-primary/10 cursor-pointer">
                <div className="bg-primary text-white w-12 h-12 rounded-xl flex items-center justify-center shadow-lg shadow-primary/20 group-hover:scale-110 transition-transform">
                  <Activity size={24} />
                </div>
                <div className="mt-12">
                  <h4 className="font-headline font-bold text-2xl mb-2">Habit Tracking</h4>
                  <p className="text-on-surface-variant leading-relaxed">Visual streak maps and milestone rewards for unbreakable consistency.</p>
                </div>
              </div>
              
              <div className="bg-secondary/5 p-8 rounded-3xl flex flex-col justify-between group hover:bg-secondary/10 transition-colors border border-secondary/10 cursor-pointer">
                <div className="bg-secondary text-white w-12 h-12 rounded-xl flex items-center justify-center shadow-lg shadow-secondary/20 group-hover:scale-110 transition-transform">
                  <Timer size={24} />
                </div>
                <div className="mt-12">
                  <h4 className="font-headline font-bold text-2xl mb-2">Pomodoro Timer</h4>
                  <p className="text-on-surface-variant leading-relaxed">Embedded intervals with ambient soundscapes and deep work analytics.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="px-6 md:px-12 py-24 max-w-7xl mx-auto">
          <div className="bg-gradient-to-br from-primary via-primary to-secondary rounded-[40px] p-12 md:p-24 text-center relative overflow-hidden shadow-2xl shadow-primary/30">
            <div className="absolute -bottom-20 -right-20 w-80 h-80 bg-white/10 rounded-full blur-3xl"></div>
            <div className="absolute -top-20 -left-20 w-80 h-80 bg-secondary/20 rounded-full blur-3xl"></div>
            
            <div className="relative z-10 space-y-10">
              <div className="flex justify-center">
                <div className="bg-white/20 p-4 rounded-2xl backdrop-blur-md">
                  <Sparkles size={40} className="text-white" />
                </div>
              </div>
              <div className="space-y-4">
                <h2 className="font-headline text-4xl md:text-6xl font-extrabold text-white leading-tight">Ready to find your flow?</h2>
                <p className="text-white/80 text-lg md:text-xl max-w-2xl mx-auto">Join 50k+ professionals who have reclaimed their workday and mastered their focus.</p>
              </div>
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <button
                  onClick={onStart}
                  className="bg-white text-primary font-bold py-5 px-12 rounded-2xl shadow-xl hover:shadow-2xl hover:scale-105 active:scale-95 transition-all text-lg"
                >
                  Start Your Free Trial
                </button>
                <button className="bg-white/10 backdrop-blur-md text-white border border-white/20 font-bold py-5 px-12 rounded-2xl hover:bg-white/20 active:scale-95 transition-all text-lg">
                  Contact Sales
                </button>
              </div>
              <p className="text-white/60 text-sm font-medium">No credit card required • 14-day free trial</p>
            </div>
          </div>
        </section>
      </main>
      
      {/* Footer */}
      <footer className="px-6 md:px-12 py-12 border-t border-outline-variant/10 max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 bg-primary rounded flex items-center justify-center text-white text-[10px] font-bold">FF</div>
            <span className="font-headline font-bold text-lg">FocusFlow</span>
          </div>
          <div className="flex gap-8 text-sm font-medium text-on-surface-variant">
            <a href="#" className="hover:text-primary transition-colors">Privacy</a>
            <a href="#" className="hover:text-primary transition-colors">Terms</a>
            <a href="#" className="hover:text-primary transition-colors">Twitter</a>
            <a href="#" className="hover:text-primary transition-colors">LinkedIn</a>
          </div>
          <p className="text-xs text-on-surface-variant">© 2026 FocusFlow Inc. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
