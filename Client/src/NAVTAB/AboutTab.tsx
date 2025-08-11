"use client";

import React, { useState } from 'react';
import { GlowingEffect } from '@/components/ui/glowing-effect';
import { cn } from '@/lib/utils';
// import Navbar from '@/components/Navbar';

const AboutTab = () => {
  const [activeTab, setActiveTab] = useState('overview');

  return (
    <>

    <div className="min-h-screen bg-black text-white">

      <div className="container mx-auto px-6 py-24">
        <div className="text-center mb-24">
          <div className="flex items-center justify-center gap-4 mb-8">
            <div className="w-3 h-3 bg-cyan-400/80 rounded-full animate-pulse"></div>
            <h1 className="text-6xl md:text-8xl font-light bg-gradient-to-r from-white via-cyan-300 to-blue-400 bg-clip-text text-transparent">
              About TheAutisticAPI
            </h1>
            <div className="w-3 h-3 bg-cyan-400/80 rounded-full animate-pulse"></div>
          </div>
          <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed font-light mb-10">
            Revolutionizing artificial intelligence accessibility through unified platform innovation
          </p>
          

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto mb-12">
            <StatCard label="Active Developers" value="1M+" color="text-blue-400" />
            <StatCard label="AI Models" value="500+" color="text-green-400" />
            <StatCard label="Global Reach" value="150+" color="text-purple-400" />
            <StatCard label="System Uptime" value="99.99%" color="text-orange-400" />
          </div>


          <div className="flex justify-center gap-2 mb-12">
            {['overview', 'mission', 'technology', 'community'].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={cn(
                  "px-6 py-3 rounded-full text-sm font-medium transition-all duration-300 border",
                  activeTab === tab 
                    ? "bg-white/10 border-white/30 text-white" 
                    : "bg-white/5 border-white/10 text-white/60 hover:bg-white/10 hover:border-white/20"
                )}
              >
                {tab.charAt(0).toUpperCase() + tab.slice(1)}
              </button>
            ))}
          </div>
        </div>


        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-6 gap-6 max-w-7xl mx-auto">
          

          <BentoCard
            className="md:col-span-3 lg:col-span-4 lg:row-span-2"
            icon={
              <svg className="w-8 h-8 text-blue-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
              </svg>
            }
            title="Our Story"
            titleColor="text-blue-300"
            description={
              <div className="space-y-6">
                <div className="space-y-4">
                  <p className="text-blue-100 text-lg leading-relaxed">
                    Founded in 2024, TheAutisticAPI emerged from a simple yet powerful vision: to democratize artificial intelligence by making cutting-edge AI models accessible to everyone.
                  </p>
                  <p className="text-blue-200 text-base leading-relaxed">
                    Our journey began when a team of passionate developers and AI researchers recognized the fragmentation in the AI ecosystem. Developers were struggling to access, integrate, and deploy AI models efficiently.
                  </p>
                  <p className="text-blue-200 text-base leading-relaxed">
                    Today, we serve over 1 million developers across 150+ countries, providing unified access to 500+ state-of-the-art AI models through a single, elegant platform.
                  </p>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <TimelineItem 
                    year="2024" 
                    title="Platform Launch"
                    description="Initial release with 50+ AI models"
                  />
                  <TimelineItem 
                    year="2024" 
                    title="1M+ Developers"
                    description="Reached million developer milestone"
                  />
                </div>
                
                <div className="flex flex-wrap gap-3">
                  <GlowSpan className="text-blue-200 text-base font-medium">
                    <svg className="w-4 h-4 inline mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                    Innovation First
                  </GlowSpan>
                  <GlowSpan className="text-blue-200 text-base font-medium">
                    <svg className="w-4 h-4 inline mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    Global Impact
                  </GlowSpan>
                  <GlowSpan className="text-blue-200 text-base font-medium">
                    <svg className="w-4 h-4 inline mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg>
                    Community Driven
                  </GlowSpan>
                </div>
              </div>
            }
            glowColor="white"
          />


          <BentoCard
            className="md:col-span-3 lg:col-span-2 lg:row-span-2"
            icon={
              <svg className="w-6 h-6 text-green-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
            }
            title="Technical Excellence"
            titleColor="text-green-300"
            description={
              <div className="space-y-4">
                <p className="text-green-100 text-base leading-relaxed">
                  Built on enterprise-grade infrastructure with global reach and uncompromising security standards.
                </p>
                
                <div className="space-y-4">
                  <FeatureCard 
                    title="Global Infrastructure" 
                    description="50+ regions worldwide with sub-100ms latency"
                    titleColor="text-green-200"
                    descriptionColor="text-green-300"
                  />
                  <FeatureCard 
                    title="Enterprise Security" 
                    description="SOC 2 Type II, GDPR compliant, end-to-end encryption"
                    titleColor="text-green-200"
                    descriptionColor="text-green-300"
                  />
                  <FeatureCard 
                    title="Auto-scaling" 
                    description="Seamless scaling from prototype to production"
                    titleColor="text-green-200"
                    descriptionColor="text-green-300"
                  />
                  <FeatureCard 
                    title="Real-time Monitoring" 
                    description="Advanced analytics and performance insights"
                    titleColor="text-green-200"
                    descriptionColor="text-green-300"
                  />
                </div>
              </div>
            }
            glowColor="white"
          />


          <BentoCard
            className="md:col-span-2 lg:col-span-3"
            icon={
              <svg className="w-6 h-6 text-purple-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
              </svg>
            }
            title="AI Model Ecosystem"
            titleColor="text-purple-300"
            description={
              <div className="space-y-4">
                <p className="text-purple-100 text-base leading-relaxed">
                  Comprehensive collection of 500+ state-of-the-art AI models across every domain, from computer vision to natural language processing.
                </p>
                
                <div className="grid grid-cols-2 gap-3">
                  <div className="space-y-2">
                    <div className="text-purple-200 text-sm font-medium">Computer Vision</div>
                    <div className="text-purple-300 text-sm">150+ models</div>
                  </div>
                  <div className="space-y-2">
                    <div className="text-purple-200 text-sm font-medium">Natural Language</div>
                    <div className="text-purple-300 text-sm">200+ models</div>
                  </div>
                  <div className="space-y-2">
                    <div className="text-purple-200 text-sm font-medium">Audio Processing</div>
                    <div className="text-purple-300 text-sm">80+ models</div>
                  </div>
                  <div className="space-y-2">
                    <div className="text-purple-200 text-sm font-medium">Multimodal</div>
                    <div className="text-purple-300 text-sm">70+ models</div>
                  </div>
                </div>
                
                <div className="flex flex-wrap gap-2">
                  <GlowSpan className="text-purple-200 text-sm">GPT-4</GlowSpan>
                  <GlowSpan className="text-purple-200 text-sm">DALL-E</GlowSpan>
                  <GlowSpan className="text-purple-200 text-sm">Claude</GlowSpan>
                  <GlowSpan className="text-purple-200 text-sm">Whisper</GlowSpan>
                </div>
              </div>
            }
            glowColor="white"
          />


          <BentoCard
            className="md:col-span-2 lg:col-span-3"
            icon={
              <svg className="w-6 h-6 text-orange-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
              </svg>
            }
            title="Developer Experience"
            titleColor="text-orange-300"
            description={
              <div className="space-y-4">
                <p className="text-orange-100 text-base leading-relaxed">
                  Built by developers, for developers. Our platform prioritizes simplicity, reliability, and comprehensive documentation.
                </p>
                
                <div className="space-y-3">
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-orange-400 rounded-full"></div>
                    <span className="text-orange-200 text-sm">One-line integration</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-orange-400 rounded-full"></div>
                    <span className="text-orange-200 text-sm">Interactive documentation</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-orange-400 rounded-full"></div>
                    <span className="text-orange-200 text-sm">SDKs for all languages</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-orange-400 rounded-full"></div>
                    <span className="text-orange-200 text-sm">Transparent pricing</span>
                  </div>
                </div>
                
                <div className="flex flex-wrap gap-2">
                  <GlowSpan className="text-orange-200 text-sm">Python</GlowSpan>
                  <GlowSpan className="text-orange-200 text-sm">JavaScript</GlowSpan>
                  <GlowSpan className="text-orange-200 text-sm">Go</GlowSpan>
                  <GlowSpan className="text-orange-200 text-sm">Rust</GlowSpan>
                </div>
              </div>
            }
            glowColor="white"
          />


          <BentoCard
            className="md:col-span-3 lg:col-span-4"
            icon={
              <svg className="w-6 h-6 text-cyan-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
            }
            title="Global Community"
            titleColor="text-cyan-300"
            description={
              <div className="space-y-6">
                <p className="text-cyan-100 text-base leading-relaxed">
                  Our vibrant community of 1M+ developers, researchers, and AI enthusiasts spans across 150+ countries, fostering innovation and collaboration.
                </p>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-cyan-200 mb-2">1M+</div>
                    <div className="text-cyan-300 text-sm">Active Developers</div>
                    <div className="text-cyan-400 text-xs mt-1">Monthly active users</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-cyan-200 mb-2">150+</div>
                    <div className="text-cyan-300 text-sm">Countries</div>
                    <div className="text-cyan-400 text-xs mt-1">Global presence</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-cyan-200 mb-2">50K+</div>
                    <div className="text-cyan-300 text-sm">GitHub Stars</div>
                    <div className="text-cyan-400 text-xs mt-1">Open source projects</div>
                  </div>
                </div>
                
                <div className="flex flex-wrap gap-2">
                  <GlowSpan className="text-cyan-200 text-sm">
                    <svg className="w-4 h-4 inline mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                    </svg>
                    Discord Community
                  </GlowSpan>
                  <GlowSpan className="text-cyan-200 text-sm">
                    <svg className="w-4 h-4 inline mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                    </svg>
                    Learning Hub
                  </GlowSpan>
                  <GlowSpan className="text-cyan-200 text-sm">
                    <svg className="w-4 h-4 inline mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                    </svg>
                    Hackathons
                  </GlowSpan>
                  <GlowSpan className="text-cyan-200 text-sm">
                    <svg className="w-4 h-4 inline mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                    </svg>
                    Mentorship
                  </GlowSpan>
                </div>
              </div>
            }
            glowColor="white"
          />


          <BentoCard
            className="md:col-span-3 lg:col-span-2"
            icon={
              <svg className="w-6 h-6 text-indigo-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
              </svg>
            }
            title="Enterprise Solutions"
            titleColor="text-indigo-300"
            description={
              <div className="space-y-4">
                <p className="text-indigo-100 text-base leading-relaxed">
                  Trusted by Fortune 500 companies for mission-critical AI deployments with enterprise-grade security and compliance.
                </p>
                
                <div className="space-y-3">
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-indigo-400 rounded-full"></div>
                    <span className="text-indigo-200 text-sm">Custom SLAs</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-indigo-400 rounded-full"></div>
                    <span className="text-indigo-200 text-sm">Dedicated support</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-indigo-400 rounded-full"></div>
                    <span className="text-indigo-200 text-sm">Private cloud deployment</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-indigo-400 rounded-full"></div>
                    <span className="text-indigo-200 text-sm">Advanced analytics</span>
                  </div>
                </div>
                
                <GlowSpan className="text-indigo-200 text-sm font-medium">
                  <svg className="w-4 h-4 inline mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  Enterprise Ready
                </GlowSpan>
              </div>
            }
            glowColor="white"
          />


          <BentoCard
            className="md:col-span-3 lg:col-span-6"
            icon={
              <svg className="w-10 h-10 text-yellow-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            }
            title="Our Vision & Mission"
            titleColor="text-yellow-300"
            description={
              <div className="space-y-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="space-y-4">
                    <h3 className="text-xl font-medium text-yellow-200">Vision</h3>
                    <p className="text-lg text-yellow-100 leading-relaxed">
                      To create a world where artificial intelligence serves as a universal catalyst for human progress, creativity, and innovation.
                    </p>
                  </div>
                  <div className="space-y-4">
                    <h3 className="text-xl font-medium text-yellow-200">Mission</h3>
                    <p className="text-lg text-yellow-100 leading-relaxed">
                      Democratize AI by providing unified, accessible, and reliable access to cutting-edge AI models for developers worldwide.
                    </p>
                  </div>
                </div>
                
                <div className="text-center">
                  <p className="text-xl text-yellow-100 leading-relaxed font-light italic max-w-4xl mx-auto">
                    "We believe that the future of AI should be open, collaborative, and accessible to everyone. Every developer should have the tools to build the next breakthrough application."
                  </p>
                  <div className="mt-4 text-yellow-200 text-sm">— TheAutisticAPI Team</div>
                </div>
                
                <div className="flex justify-center gap-4 flex-wrap">
                  <GlowSpan className="text-yellow-200 text-base font-medium">
                    <svg className="w-4 h-4 inline mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    Universal Access
                  </GlowSpan>
                  <GlowSpan className="text-yellow-200 text-base font-medium">
                    <svg className="w-4 h-4 inline mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                    Innovation First
                  </GlowSpan>
                  <GlowSpan className="text-yellow-200 text-base font-medium">
                    <svg className="w-4 h-4 inline mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg>
                    Community Driven
                  </GlowSpan>
                  <GlowSpan className="text-yellow-200 text-base font-medium">
                    <svg className="w-4 h-4 inline mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                    </svg>
                    Privacy Focused
                  </GlowSpan>
                </div>
              </div>
            }
            glowColor="white"
            isVisionCard={true}
          />
        </div>
      </div>
    </div>
    </>
  );
};


interface StatCardProps {
  label: string;
  value: string;
  color: string;
}

const StatCard: React.FC<StatCardProps> = ({ label, value, color }) => {
  return (
    <div className="group bg-white/5 border border-white/10 rounded-lg p-4 transition-all duration-300 hover:bg-white/10 hover:border-white/20 hover:scale-105">
      <div className={cn("text-2xl font-bold mb-1", color)}>{value}</div>
      <div className="text-gray-400 text-sm">{label}</div>
    </div>
  );
};


interface TimelineItemProps {
  year: string;
  title: string;
  description: string;
}

const TimelineItem: React.FC<TimelineItemProps> = ({ year, title, description }) => {
  return (
    <div className="bg-white/5 border border-white/10 rounded-lg p-4 transition-all duration-300 hover:bg-white/10">
      <div className="text-blue-300 font-bold text-lg mb-1">{year}</div>
      <div className="text-blue-200 font-medium text-sm mb-2">{title}</div>
      <div className="text-blue-300 text-xs">{description}</div>
    </div>
  );
};


interface BentoCardProps {
  className?: string;
  icon: React.ReactNode;
  title: string;
  titleColor?: string;
  description: React.ReactNode;
  glowColor: 'white';
  isVisionCard?: boolean;
}

const BentoCard: React.FC<BentoCardProps> = ({ 
  className, 
  icon, 
  title, 
  titleColor = "text-white",
  description, 
  isVisionCard = false 
}) => {
  return (
    <div className={cn("min-h-[16rem] list-none group", className)}>
      <div className="relative h-full rounded-xl border border-white/10 p-1 transition-all duration-300 hover:border-white/20 group-hover:scale-[1.02] group-hover:shadow-2xl">
        <GlowingEffect
          spread={60}
          glow={true}
          disabled={false}
          proximity={90}
          inactiveZone={0.01}
          borderWidth={2.5}
        />
        <div className="relative flex h-full flex-col gap-6 rounded-lg bg-black/50 backdrop-blur-sm p-6 transition-all duration-300 group-hover:bg-black/60">
          {isVisionCard ? (
            <div className="text-center">
              <div className="w-20 h-20 bg-white/5 rounded-lg flex items-center justify-center mx-auto mb-6 transition-all duration-300 group-hover:bg-white/10 group-hover:scale-110">
                {icon}
              </div>
              <h2 className={cn("text-3xl font-light mb-8 transition-all duration-300 group-hover:scale-105", titleColor)}>
                {title}
              </h2>
              <div className="transition-all duration-300 group-hover:scale-[1.02]">
                {description}
              </div>
            </div>
          ) : (
            <>
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-white/5 rounded-lg flex items-center justify-center transition-all duration-300 group-hover:bg-white/10 group-hover:scale-110">
                  {icon}
                </div>
                <h3 className={cn("text-xl font-medium transition-all duration-300 group-hover:scale-105", titleColor)}>
                  {title}
                </h3>
              </div>
              <div className="flex-1 transition-all duration-300 group-hover:scale-[1.02]">
                {description}
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};


interface GlowSpanProps {
  children: React.ReactNode;
  className?: string;
}

const GlowSpan: React.FC<GlowSpanProps> = ({ children, className }) => {
  return (
    <div className="inline-flex px-3 py-1 bg-white/5 border border-white/10 rounded-full relative group cursor-pointer transition-all duration-300 hover:bg-white/10 hover:border-white/20 hover:shadow-lg hover:scale-105">
      <span className={cn("relative z-10 transition-all duration-300 group-hover:text-white", className)}>
        {children}
      </span>
      <div className="absolute inset-0 rounded-full bg-gradient-to-r from-white/0 via-white/5 to-white/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
      <div className="absolute inset-0 rounded-full shadow-[0_0_15px_rgba(255,255,255,0.1)] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
    </div>
  );
};


interface FeatureCardProps {
  title: string;
  description: string;
  titleColor?: string;
  descriptionColor?: string;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ 
  title, 
  description, 
  titleColor = "text-white",
  descriptionColor = "text-gray-400"
}) => {
  return (
    <div className="p-4 bg-white/5 border border-white/10 rounded-lg transition-all duration-300 hover:bg-white/10 hover:border-white/20 hover:scale-105 cursor-pointer group">
      <h4 className={cn("font-medium mb-2 text-sm transition-all duration-300 group-hover:text-white", titleColor)}>
        {title}
      </h4>
      <p className={cn("text-xs transition-all duration-300 group-hover:text-gray-300 leading-relaxed", descriptionColor)}>
        {description}
      </p>
    </div>
  );
};

export default AboutTab;