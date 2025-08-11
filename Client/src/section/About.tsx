"use client";

import React from 'react';
import { GlowingEffect } from '@/components/ui/glowing-effect';
import { cn } from '@/lib/utils';

const About = () => {
  return (
    <div className="min-h-screen bg-black text-white">

      <div className="container mx-auto px-6 py-20">
        <div className="text-center mb-20">
          <h1 className="text-6xl md:text-7xl font-light mb-6 bg-gradient-to-r from-white via-gray-300 to-gray-500 bg-clip-text text-transparent leading-tight">
            TheAutisticAPI
          </h1>
          <p className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto leading-relaxed font-light">
            The definitive gateway to AI innovation
          </p>
        </div>


        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-6 gap-4 max-w-6xl mx-auto">
          

          <BentoCard
            className="md:col-span-3 lg:col-span-4 lg:row-span-2"
            icon={
              <svg className="w-6 h-6 text-blue-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            }
            title="AI Gateway"
            titleColor="text-blue-300"
            description={
              <div className="space-y-6">
                <p className="text-blue-100 text-base leading-relaxed">
                  A unified platform that connects developers with cutting-edge AI models through a single, elegant interface.
                </p>
                <p className="text-blue-200 text-sm leading-relaxed">
                  Streamlined access to hundreds of AI models with enterprise-grade reliability and developer-focused documentation.
                </p>
                <GlowSpan className="text-blue-200 text-sm font-medium">
                  One Platform. Infinite Possibilities.
                </GlowSpan>
              </div>
            }
            glowColor="white"
          />


          <BentoCard
            className="md:col-span-3 lg:col-span-2 lg:row-span-2"
            icon={
              <svg className="w-6 h-6 text-green-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
              </svg>
            }
            title="For Developers"
            titleColor="text-green-300"
            description={
              <div className="space-y-4">
                <FeatureCard 
                  title="Instant Integration" 
                  description="RESTful APIs with comprehensive documentation"
                  titleColor="text-green-200"
                  descriptionColor="text-green-300"
                />
                <FeatureCard 
                  title="Transparent Pricing" 
                  description="Usage-based billing with no hidden fees"
                  titleColor="text-green-200"
                  descriptionColor="text-green-300"
                />
                <FeatureCard 
                  title="Zero Configuration" 
                  description="Deploy AI features in minutes"
                  titleColor="text-green-200"
                  descriptionColor="text-green-300"
                />
              </div>
            }
            glowColor="white"
          />


          <BentoCard
            className="md:col-span-2 lg:col-span-2"
            icon={
              <svg className="w-6 h-6 text-purple-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
              </svg>
            }
            title="AI Creators"
            titleColor="text-purple-300"
            description={
              <div className="space-y-4">
                <p className="text-purple-100 text-sm leading-relaxed">
                  Transform your AI models into revenue streams with global distribution and enterprise-grade infrastructure.
                </p>
                <GlowSpan className="text-purple-200 text-xs font-medium">
                  Monetize Your Innovation
                </GlowSpan>
              </div>
            }
            glowColor="white"
          />


          <BentoCard
            className="md:col-span-2 lg:col-span-2"
            icon={
              <svg className="w-6 h-6 text-orange-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
              </svg>
            }
            title="Enterprise"
            titleColor="text-orange-300"
            description={
              <div className="space-y-4">
                <p className="text-orange-100 text-sm leading-relaxed">
                  Enterprise-grade AI infrastructure with advanced security and dedicated support.
                </p>
                <GlowSpan className="text-orange-200 text-xs font-medium">
                  Secure & Scalable
                </GlowSpan>
              </div>
            }
            glowColor="white"
          />


          <BentoCard
            className="md:col-span-2 lg:col-span-2"
            icon={
              <svg className="w-6 h-6 text-cyan-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
              </svg>
            }
            title="Testing Lab"
            titleColor="text-cyan-300"
            description={
              <div className="space-y-4">
                <p className="text-cyan-100 text-sm leading-relaxed">
                  Interactive playground for testing AI models with real-time feedback and performance metrics.
                </p>
                <GlowSpan className="text-cyan-200 text-xs font-medium">
                  Test Before Deploy
                </GlowSpan>
              </div>
            }
            glowColor="white"
          />


          <BentoCard
            className="md:col-span-3 lg:col-span-3"
            icon={
              <svg className="w-6 h-6 text-pink-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            }
            title="Model Discovery"
            titleColor="text-pink-300"
            description={
              <div className="space-y-4">
                <p className="text-pink-100 text-sm leading-relaxed">
                  Discover and evaluate AI models tailored to your specific requirements with intelligent recommendations.
                </p>
                <div className="flex gap-2">
                  <GlowSpan className="text-pink-200 text-xs">
                    Computer Vision
                  </GlowSpan>
                  <GlowSpan className="text-pink-200 text-xs">
                    NLP
                  </GlowSpan>
                  <GlowSpan className="text-pink-200 text-xs">
                    Audio
                  </GlowSpan>
                </div>
              </div>
            }
            glowColor="white"
          />

          
          
<BentoCard
  className="md:col-span-3 lg:col-span-3"
  icon={
    <svg className="w-6 h-6 text-indigo-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
    </svg>
  }
  title="Community"
  titleColor="text-indigo-300"
  description={
    <div className="space-y-4">
      <p className="text-indigo-100 text-sm leading-relaxed">
        Join a community of developers and AI researchers building the future of artificial intelligence.
      </p>
      <div className="flex gap-2">
        <GlowSpan className="text-indigo-200 text-xs font-medium">
          Global Network
        </GlowSpan>
        <GlowSpan className="text-indigo-200 text-xs font-medium">
          Open Source
        </GlowSpan>
      </div>
    </div>
  }
  glowColor="white"
/>

          <BentoCard
            className="md:col-span-3 lg:col-span-6"
            icon={
              <svg className="w-8 h-8 text-yellow-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            }
            title="Our Vision"
            titleColor="text-yellow-300"
            description={
              <p className="text-lg text-yellow-100 leading-relaxed font-light text-center max-w-4xl mx-auto">
                We believe artificial intelligence should be accessible to everyone. 
                Our mission is to democratize AI by providing a unified platform that connects 
                brilliant minds with powerful tools, fostering innovation without barriers.
              </p>
            }
            glowColor="white"
            isVisionCard={true}
          />
        </div>
      </div>
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
    <div className={cn("min-h-[12rem] list-none group", className)}>
      <div className="relative h-full rounded-xl border border-white/10 p-1 transition-all duration-300 hover:border-white/20 group-hover:scale-[1.02] group-hover:shadow-2xl">
        <GlowingEffect
          spread={50}
          glow={true}
          disabled={false}
          proximity={80}
          inactiveZone={0.01}
          borderWidth={2.5}
        />
        <div className="relative flex h-full flex-col gap-4 rounded-lg bg-black/50 backdrop-blur-sm p-6 transition-all duration-300 group-hover:bg-black/60">
          {isVisionCard ? (
            <div className="text-center">
              <div className="w-16 h-16 bg-white/5 rounded-lg flex items-center justify-center mx-auto mb-4 transition-all duration-300 group-hover:bg-white/10 group-hover:scale-110">
                {icon}
              </div>
              <h2 className={cn("text-2xl font-light mb-6 transition-all duration-300 group-hover:scale-105", titleColor)}>
                {title}
              </h2>
              <div className="transition-all duration-300 group-hover:scale-[1.02]">
                {description}
              </div>
            </div>
          ) : (
            <>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-white/5 rounded-lg flex items-center justify-center transition-all duration-300 group-hover:bg-white/10 group-hover:scale-110">
                  {icon}
                </div>
                <h3 className={cn("text-lg font-medium transition-all duration-300 group-hover:scale-105", titleColor)}>
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
    <div className="p-3 bg-white/5 border border-white/10 rounded-lg transition-all duration-300 hover:bg-white/10 hover:border-white/20 hover:scale-105 cursor-pointer group">
      <h4 className={cn("font-medium mb-1 text-sm transition-all duration-300 group-hover:text-white", titleColor)}>
        {title}
      </h4>
      <p className={cn("text-xs transition-all duration-300 group-hover:text-gray-300", descriptionColor)}>
        {description}
      </p>
    </div>
  );
};

export default About;