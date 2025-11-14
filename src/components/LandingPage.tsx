'use client';
import React, { useState } from 'react';
import { Briefcase, Heart, Linkedin, Github, Mail, Instagram, Coffee, Camera } from 'lucide-react';

export default function LandingPage() {
  const [mode, setMode] = useState('corporate');
  const isCorporate = mode === 'corporate';

  return (
    <div className={`min-h-screen transition-all duration-700 ${
      isCorporate 
        ? 'bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900' 
        : 'bg-gradient-to-br from-purple-600 via-pink-500 to-orange-400'
    }`}>
      
      {/* Toggle Switch */}
      <div className="fixed top-8 right-8 z-50">
        <div className="flex items-center gap-3 bg-white/10 backdrop-blur-md rounded-full p-2 border border-white/20">
          <button
            onClick={() => setMode('corporate')}
            className={`flex items-center gap-2 px-4 py-2 rounded-full transition-all duration-300 ${
              isCorporate 
                ? 'bg-white text-slate-900 shadow-lg' 
                : 'text-white hover:bg-white/10'
            }`}
          >
            <Briefcase size={18} />
            <span className="font-medium">Corporate</span>
          </button>
          <button
            onClick={() => setMode('personal')}
            className={`flex items-center gap-2 px-4 py-2 rounded-full transition-all duration-300 ${
              !isCorporate 
                ? 'bg-white text-purple-600 shadow-lg' 
                : 'text-white hover:bg-white/10'
            }`}
          >
            <Heart size={18} />
            <span className="font-medium">Personal</span>
          </button>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-6 py-20 max-w-6xl">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          
          {/* Left Side - Image */}
          <div className="relative">
            <div className={`aspect-square rounded-3xl overflow-hidden transition-all duration-700 ${
              isCorporate ? 'shadow-2xl' : 'shadow-2xl rotate-3'
            }`}>
              <div className={`w-full h-full transition-all duration-700 ${
                isCorporate 
                  ? 'bg-gradient-to-br from-slate-700 to-slate-600' 
                  : 'bg-gradient-to-br from-yellow-400 to-pink-500'
              } flex items-center justify-center`}>
                <div className="text-center text-white">
                  <div className={`text-8xl mb-4 transition-all duration-700 ${
                    !isCorporate && 'animate-pulse'
                  }`}>
                    {isCorporate ? '👔' : '🎨'}
                  </div>
                  <p className="text-sm opacity-70">Your photo here</p>
                </div>
              </div>
            </div>
            
            {/* Floating badges */}
            {!isCorporate && (
              <div className="absolute -bottom-4 -right-4 flex gap-2 animate-fade-in">
                <div className="bg-white rounded-full p-3 shadow-xl">
                  <Coffee className="text-orange-500" size={24} />
                </div>
                <div className="bg-white rounded-full p-3 shadow-xl">
                  <Camera className="text-purple-500" size={24} />
                </div>
              </div>
            )}
          </div>

          {/* Right Side - Content */}
          <div className="space-y-6">
            {/* Greeting */}
            <div className={`transition-all duration-700 ${
              isCorporate ? 'opacity-100' : 'opacity-0 h-0 overflow-hidden'
            }`}>
              <p className="text-blue-400 font-medium mb-2">Hello, Im</p>
            </div>
            <div className={`transition-all duration-700 ${
              !isCorporate ? 'opacity-100' : 'opacity-0 h-0 overflow-hidden'
            }`}>
              <p className="text-yellow-300 font-medium mb-2">Hey there! 👋</p>
            </div>

            {/* Name */}
            <h1 className={`text-6xl font-bold transition-all duration-700 ${
              isCorporate ? 'text-white' : 'text-white'
            }`}>
              Alex Johnson
            </h1>

            {/* Title */}
            <div className="relative h-20 overflow-hidden">
              <div className={`absolute inset-0 transition-all duration-700 ${
                isCorporate ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-full'
              }`}>
                <h2 className="text-2xl text-slate-300 font-light">
                  Senior Product Designer
                </h2>
                <p className="text-slate-400 mt-2">
                  Specializing in UX/UI & Design Systems
                </p>
              </div>
              
              <div className={`absolute inset-0 transition-all duration-700 ${
                !isCorporate ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-full'
              }`}>
                <h2 className="text-2xl text-white font-light">
                  Creative Soul & Weekend Explorer
                </h2>
                <p className="text-white/80 mt-2">
                  Coffee addict, photography lover, trail runner
                </p>
              </div>
            </div>

            {/* Description */}
            <div className="relative min-h-32">
              <div className={`absolute inset-0 transition-all duration-700 ${
                isCorporate ? 'opacity-100' : 'opacity-0'
              }`}>
                <p className="text-slate-300 text-lg leading-relaxed">
                  10+ years of experience crafting user-centered digital experiences 
                  for Fortune 500 companies and startups. Proven track record in 
                  leading design teams and shipping products that users love.
                </p>
              </div>
              
              <div className={`absolute inset-0 transition-all duration-700 ${
                !isCorporate ? 'opacity-100' : 'opacity-0'
              }`}>
                <p className="text-white text-lg leading-relaxed">
                  When Im not designing, youll find me hiking mountain trails, 
                  experimenting with latte art, or capturing golden hour moments. 
                  Always up for good conversation over specialty coffee! ☕
                </p>
              </div>
            </div>

            {/* CTAs */}
            <div className="flex flex-wrap gap-4 pt-4">
              {isCorporate ? (
                <>
                  <button className="bg-blue-500 hover:bg-blue-600 text-white px-8 py-3 rounded-full font-medium transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105">
                    View Portfolio
                  </button>
                  <button className="bg-white/10 hover:bg-white/20 text-white px-8 py-3 rounded-full font-medium transition-all duration-300 backdrop-blur-sm border border-white/20">
                    Download Resume
                  </button>
                </>
              ) : (
                <>
                  <button className="bg-white text-purple-600 px-8 py-3 rounded-full font-medium transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105">
                    See My Adventures
                  </button>
                  <button className="bg-white/20 hover:bg-white/30 text-white px-8 py-3 rounded-full font-medium transition-all duration-300 backdrop-blur-sm border border-white/30">
                    Lets Connect
                  </button>
                </>
              )}
            </div>

            {/* Social Links */}
            <div className="flex gap-4 pt-4">
              {isCorporate ? (
                <>
                  <a href="#" className="text-slate-400 hover:text-white transition-colors p-2">
                    <Linkedin size={24} />
                  </a>
                  <a href="#" className="text-slate-400 hover:text-white transition-colors p-2">
                    <Github size={24} />
                  </a>
                  <a href="#" className="text-slate-400 hover:text-white transition-colors p-2">
                    <Mail size={24} />
                  </a>
                </>
              ) : (
                <>
                  <a href="#" className="text-white/70 hover:text-white transition-colors p-2">
                    <Instagram size={24} />
                  </a>
                  <a href="#" className="text-white/70 hover:text-white transition-colors p-2">
                    <Github size={24} />
                  </a>
                  <a href="#" className="text-white/70 hover:text-white transition-colors p-2">
                    <Mail size={24} />
                  </a>
                </>
              )}
            </div>
          </div>
        </div>

        {/* Stats/Highlights Section */}
        <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-6">
          {isCorporate ? (
            <>
              <StatCard title="10+" subtitle="Years Experience" />
              <StatCard title="50+" subtitle="Projects Delivered" />
              <StatCard title="15+" subtitle="Awards Won" />
              <StatCard title="8" subtitle="Countries Worked" />
            </>
          ) : (
            <>
              <StatCard title="2000+" subtitle="Photos Taken" />
              <StatCard title="42" subtitle="Countries Visited" />
              <StatCard title="∞" subtitle="Coffee Cups" />
              <StatCard title="365" subtitle="Days Creating" />
            </>
          )}
        </div>
      </div>
    </div>
  );
}

function StatCard({ title, subtitle }) {
  return (
    <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20 text-center transition-all duration-500 hover:bg-white/15 hover:scale-105">
      <div className="text-3xl font-bold text-white mb-1">{title}</div>
      <div className="text-sm text-white/70">{subtitle}</div>
    </div>
  );
}