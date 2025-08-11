import React from 'react';
import { GlowingEffect } from '@/components/ui/glowing-effect';
import { cn } from '@/lib/utils';

// Reusable Featured Model Card Component
interface FeaturedModelCardProps {
  title: string;
  description: string;
  imageSrc: string;
  tags: string[];
  metrics: {
    accuracy: string;
    latency: string;
    models: string;
  };
  modelPageUrl: string; // URL for the 'Use Model' button
}

const FeaturedModelCard: React.FC<FeaturedModelCardProps> = ({
  title,
  description,
  imageSrc,
  tags,
  metrics,
  modelPageUrl,
}) => {
  return (
    <div className="group relative">
      <div className="relative rounded-3xl border border-white/10 p-1 transition-all duration-500 hover:border-white/20 group-hover:scale-[1.02]">
        {/* The glowing effect can be part of this component or added externally */}
        <GlowingEffect
          spread={80}
          glow={true}
          disabled={false}
          proximity={100}
          inactiveZone={0.01}
          borderWidth={2}
        />

        <div className="relative h-full rounded-2xl bg-black backdrop-blur-sm p-12 transition-all duration-500 border border-white/5">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Image Section */}
            <div className="relative">
              <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-gray-900/30 to-gray-800/30 p-4 transition-all duration-500 group-hover:from-gray-900/40 group-hover:to-gray-800/40">
                <img
                  src={imageSrc}
                  alt={title}
                  className="w-full h-auto rounded-xl shadow-2xl transition-all duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent rounded-xl"></div>
              </div>
              <div className="absolute -top-4 -right-4 space-y-2">
                <MetricBadge label="Accuracy" value={metrics.accuracy} color="cyan" />
                <MetricBadge label="Latency" value={metrics.latency} color="blue" />
                <MetricBadge label="Models" value={metrics.models} color="purple" />
              </div>
            </div>

            {/* Content Section */}
            <div className="space-y-8">
              <div>
                <h3 className="text-4xl md:text-5xl font-light mb-6 bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent leading-tight">
                  {title}
                </h3>
                <p className="text-lg text-gray-300 leading-relaxed font-light">
                  {description}
                </p>
              </div>

              <div className="flex flex-wrap gap-3">
                {tags.map((tag, index) => (
                  <GlowSpan key={index} className="text-cyan-200 text-sm font-medium">
                    {tag}
                  </GlowSpan>
                ))}
              </div>

              <div className="flex gap-4">
                <PremiumButton primary onClick={() => (window.location.href = modelPageUrl)}>
                  Use Model
                </PremiumButton>
                <PremiumButton>Learn More</PremiumButton>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// Main Services Page Component
const Services: React.FC = () => {
  return (
    <>
      <div className="min-h-screen bg-black text-white">
        <div className="h-20 w-full"></div>

        <div className="container mx-auto px-6 py-20">
          {/* ... (Your existing header JSX remains unchanged) ... */}
          <div className="text-center mb-20 relative">
            <div className="absolute inset-0 -top-10 -bottom-10 bg-gradient-to-r from-cyan-500/5 via-blue-500/5 to-purple-500/5 rounded-3xl blur-3xl"></div>
            <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-[600px] h-[300px] bg-gradient-to-r from-cyan-400/10 via-blue-400/10 to-purple-400/10 rounded-full blur-3xl opacity-30"></div>
            <div className="relative z-10">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 border border-cyan-400/30 rounded-full text-cyan-300 text-sm font-medium mb-8 backdrop-blur-sm hover:from-cyan-500/30 hover:to-blue-500/30 transition-all duration-300">
                <div className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse"></div>
                <span>Cutting-Edge AI Technology</span>
                <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse" style={{ animationDelay: '0.5s' }}></div>
              </div>
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-light mb-8 leading-tight relative group">
                <span className="bg-gradient-to-r from-white via-cyan-200 via-blue-200 to-purple-200 bg-clip-text text-transparent transition-all duration-500 group-hover:from-cyan-300 group-hover:via-blue-300 group-hover:to-purple-300">
                  Our AI Models
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-400/20 via-blue-400/20 to-purple-400/20 blur-2xl opacity-0 group-hover:opacity-50 transition-opacity duration-500"></div>
                <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-0 h-0.5 bg-gradient-to-r from-cyan-400 to-blue-400 group-hover:w-32 transition-all duration-500"></div>
              </h1>
              <div className="max-w-3xl mx-auto mb-10">
                <p className="text-lg md:text-xl text-gray-300 leading-relaxed font-light mb-6">
                  Advanced artificial intelligence solutions for autism support and detection, 
                  powered by cutting-edge machine learning and computer vision technology.
                </p>
                <p className="text-base text-gray-400 max-w-2xl mx-auto">
                  Our models are trained on diverse datasets and continuously improved to provide 
                  accurate, real-time assistance for individuals with autism spectrum disorders.
                </p>
              </div>
              <div className="flex flex-wrap justify-center gap-6 mb-10">
                <MetricCard 
                  icon={<AccuracyIcon />}
                  value="94.2%" 
                  label="Accuracy Rate"
                  color="green"
                />
                <MetricCard 
                  icon={<SpeedIcon />}
                  value="<120ms" 
                  label="Response Time"
                  color="blue"
                />
                <MetricCard 
                  icon={<ModelsIcon />}
                  value="15+" 
                  label="AI Models"
                  color="purple"
                />
              </div>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="group relative px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-medium rounded-xl overflow-hidden transition-all duration-300 transform hover:scale-105 hover:shadow-xl hover:shadow-cyan-500/25 hover:-translate-y-1 active:translate-y-0">
                  <span className="relative z-10 flex items-center justify-center gap-2">
                    <span> Our Models Below</span>
                    <svg className="w-5 h-5 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                    </svg>
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 translate-x-[-100%] group-hover:translate-x-[100%]"></div>
                </button>
                <button className="group px-8 py-4 bg-transparent border-2 border-white/20 text-gray-300 font-medium rounded-xl transition-all duration-300 transform hover:scale-105 hover:bg-white/5 hover:border-white/40 hover:text-white hover:shadow-lg">
                  <span className="flex items-center justify-center gap-2">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                    <span>Documentation</span>
                  </span>
                </button>
              </div>
            </div>
          </div>
          

          <div className="max-w-7xl mx-auto">
            {/* Using the new reusable component */}
            <div className="space-y-16">
              <FeaturedModelCard
  title="Frame Extractor Model"
  description="The Frame Extractor Model processes uploaded videos to efficiently extract individual frames and provide an accurate frame count. This tool is ideal for video analysis, enabling users to retrieve specific frames for further processing or research in computer vision and machine learning applications."
  imageSrc="/frame-xtractor.png"
  tags={['Frame Extraction', 'Video Analysis', 'Computer Vision', 'Frame Count']}
  metrics={{
    accuracy: '--%',
    latency: '--ms',
    models: '--',
  }}
                modelPageUrl="/services/frame-x"
              />
              <FeaturedModelCard
                title="Emotion Detection Model"
                description="Our advanced emotion detection AI model uses computer vision and machine learning to accurately identify and analyze facial expressions and emotional states. This model is specifically designed to support individuals with autism by providing real-time emotional feedback and assistance in social interactions."
                imageSrc="/emotion-detection.png"
                tags={['Computer Vision', 'Machine Learning', 'Autism Support', 'Real-time']}
                metrics={{
                  accuracy: '--%',
                  latency: '--ms',
                  models: '--',
                }}
                modelPageUrl="/services/emotion"
              />

              {/* Example: Add another featured model easily */}
              
            </div>

            {/* ... (Your existing grid of SimpleModelCard components remains unchanged) ... */}
            {/* <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">
               <SimpleModelCard
                title="Speech Analysis"
                description="AI-powered speech pattern analysis for autism support"
                accuracy="92.1%"
                status="Active"
                icon={<SpeechIcon />}
              />
              <SimpleModelCard
                title="Behavior Tracking"
                description="Monitor and analyze behavioral patterns"
                accuracy="89.5%"
                status="Active"
                icon={<BehaviorIcon />}
              />
              <SimpleModelCard
                title="Social Interaction"
                description="Enhance social communication skills"
                accuracy="91.3%"
                status="Beta"
                icon={<SocialIcon />}
              />
            </div> */}
          </div>
        </div>
      </div>
    </>
  );
};

// --- (All other helper components: MetricCard, SimpleModelCard, PremiumButton, MetricBadge, GlowSpan, and Icons remain the same) ---

// Metric Card Component
interface MetricCardProps {
  icon: React.ReactNode;
  value: string;
  label: string;
  color: 'green' | 'blue' | 'purple';
}

const MetricCard: React.FC<MetricCardProps> = ({ icon, value, label, color }) => {
  const colorClasses = {
    green: 'bg-green-500/10 border-green-400/20 text-green-300 hover:bg-green-500/20',
    blue: 'bg-blue-500/10 border-blue-400/20 text-blue-300 hover:bg-blue-500/20',
    purple: 'bg-purple-500/10 border-purple-400/20 text-purple-300 hover:bg-purple-500/20'
  };

  return (
    <div className={cn(
      "group flex items-center gap-3 px-4 py-3 rounded-lg border backdrop-blur-sm transition-all duration-300 hover:scale-105 hover:shadow-lg cursor-pointer",
      colorClasses[color]
    )}>
      <div className="text-xl">{icon}</div>
      <div>
        <div className="text-lg font-bold">{value}</div>
        <div className="text-xs font-medium opacity-80">{label}</div>
      </div>
    </div>
  );
};

// Simple Model Card Component
// interface SimpleModelCardProps {
//   title: string;
//   description: string;
//   accuracy: string;
//   status: 'Active' | 'Beta' | 'Coming Soon';
//   icon: React.ReactNode;
// }

// const SimpleModelCard: React.FC<SimpleModelCardProps> = ({ 
//   title, 
//   description, 
//   accuracy, 
//   status, 
//   icon 
// }) => {
//   const statusColors = {
//     'Active': 'bg-green-500/20 text-green-300 border-green-400/30',
//     'Beta': 'bg-yellow-500/20 text-yellow-300 border-yellow-400/30',
//     'Coming Soon': 'bg-gray-500/20 text-gray-300 border-gray-400/30'
//   };

//   return (
//     <div className="group relative">
//       <div className="relative rounded-2xl border border-white/10 p-1 transition-all duration-300 hover:border-white/20 group-hover:scale-[1.02]">
//         <div className="relative h-full rounded-xl bg-black/50 backdrop-blur-sm p-6 transition-all duration-300 border border-white/5 group-hover:bg-black/60">
//           <div className="flex items-start justify-between mb-4">
//             <div className="text-2xl text-cyan-400">
//               {icon}
//             </div>
//             <div className={cn("px-2 py-1 rounded-full text-xs font-medium border", statusColors[status])}>
//               {status}
//             </div>
//           </div>
          
//           <h3 className="text-xl font-semibold mb-3 text-white group-hover:text-cyan-200 transition-colors">
//             {title}
//           </h3>
          
//           <p className="text-gray-400 text-sm mb-4 leading-relaxed">
//             {description}
//           </p>
          
//           <div className="flex items-center justify-between">
//             <div className="text-sm">
//               <span className="text-gray-400">Accuracy: </span>
//               <span className="text-cyan-300 font-medium">{accuracy}</span>
//             </div>
//             <button className="text-cyan-400 hover:text-cyan-300 transition-colors">
//               <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
//               </svg>
//             </button>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// Premium Button Component
interface PremiumButtonProps {
  children: React.ReactNode;
  primary?: boolean;
  small?: boolean;
  onClick?: () => void;
}

const PremiumButton: React.FC<PremiumButtonProps> = ({ 
  children, 
  primary = false, 
  small = false, 
  onClick 
}) => {
  const baseClasses = "relative group font-medium transition-all duration-300 transform hover:scale-105 cursor-pointer border rounded-lg overflow-hidden";
  const sizeClasses = small ? "px-5 py-2 text-sm" : "px-6 py-3 text-base";
  const colorClasses = primary 
    ? "bg-gradient-to-r from-cyan-500 to-blue-600 text-white border-transparent hover:shadow-lg hover:shadow-cyan-500/25 hover:-translate-y-0.5 active:translate-y-0 shadow-md shadow-cyan-500/15"
    : "bg-transparent text-gray-300 border-white/20 hover:bg-white/5 hover:border-white/30 hover:text-white";

  return (
    <button 
      className={cn(baseClasses, sizeClasses, colorClasses)}
      onClick={onClick}
    >
      <span className="relative z-10">{children}</span>
      {primary && (
        <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/10 to-white/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
      )}
    </button>
  );
};

// Metric Badge Component
interface MetricBadgeProps {
  label: string;
  value: string;
  color: 'cyan' | 'blue' | 'purple';
}

const MetricBadge: React.FC<MetricBadgeProps> = ({ label, value, color }) => {
  const colorClasses = {
    cyan: 'bg-cyan-500/20 border-cyan-400/30 text-cyan-300',
    blue: 'bg-blue-500/20 border-blue-400/30 text-blue-300',
    purple: 'bg-purple-500/20 border-purple-400/30 text-purple-300'
  };

  return (
    <div className={cn("px-3 py-2 rounded-lg border backdrop-blur-sm transition-all duration-300 hover:scale-105", colorClasses[color])}>
      <div className="text-xs font-medium">{label}</div>
      <div className="text-sm font-bold">{value}</div>
    </div>
  );
};

// Glowing Span Component
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

// Icon Components
const AccuracyIcon = () => (
  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
  </svg>
);

const SpeedIcon = () => (
  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
  </svg>
);

const ModelsIcon = () => (
  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
  </svg>
);

// const SpeechIcon = () => (
//   <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z" />
//   </svg>
// );

// const BehaviorIcon = () => (
//   <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
//   </svg>
// );

// const SocialIcon = () => (
//   <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197m13.5-9a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0z" />
//   </svg>
// );

export default Services;