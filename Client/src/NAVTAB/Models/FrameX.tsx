import React, { useState , useEffect } from 'react';
import axios from 'axios';
import { cn } from '../../lib/utils';
import { GlowingEffect } from '../../components/ui/glowing-effect';

interface Frame {
  filename: string;
  data: string; //BASE 64 me jo image data rhta h string me rhta
  
}

interface AnalysisResult {
  message: string;
  video_filename: string;
  frame_count: number;
  frames: Frame[];
  video_info: {
    speaker?: string;
  };
}

const FrameX: React.FC = () => {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [result, setResult] = useState<AnalysisResult | null>(null);
  const [error, setError] = useState<string | null>(null);

    const baseURL = import.meta.env.VITE_API_BASE_URL;
// console.log("🌐 meow VITE_API_BASE_URL:", baseURL);


useEffect(() => {
    fetch(`${baseURL}/`)
      .then(res => {
        if (res.ok) {
          console.log(" Connected to backend:", baseURL);
        } else {
          console.warn(" Backend responded with error status:", res.status);
        }
      })
      .catch(err => {
        console.error("Could not connect to backend:", err);
      });
  }, [baseURL]);

  const handleFileSelect = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      setSelectedFile(file);
      setResult(null);
      setError(null);
    }
  };




  const analyzeVideo = async () => {
    if (!selectedFile) return;

    setIsLoading(true);
    setResult(null);
    setError(null);

    try {
      const formData = new FormData();
      formData.append('video', selectedFile);

      const response = await axios.post<AnalysisResult>(
  `${baseURL}/api/emotion/analyze-video`,
  formData,
  {
    headers: { 'Content-Type': 'multipart/form-data' },
    timeout: 300000,
  }
);

      setResult(response.data);
    } catch (err: any) {
      setError(err.response?.data?.message || 'An unexpected error occurred. Please try again.');
      console.error(err);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-black text-white">
      <div className="container mx-auto px-6 py-20">
        <div className="text-center mb-12">
          <h1 className="text-5xl md:text-6xl font-light mb-6 bg-gradient-to-r from-white via-purple-300 to-pink-300 bg-clip-text text-transparent leading-tight">
            Frame Extraxtion
          </h1>
          <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed font-light mb-8">
            Upload a video to extract frames and view metadata.
          </p>
        </div>
        <div className="max-w-4xl mx-auto">
          <div className="relative mb-8">
            <div className="border border-white/10 rounded-xl p-1">
              <GlowingEffect spread={60} glow={true} disabled={false} proximity={90} inactiveZone={0.01} borderWidth={2} />
              <div className="relative rounded-lg bg-black/50 backdrop-blur-sm p-8">
                <div className="text-center">
                  <label htmlFor="video-upload" className="cursor-pointer">
                    <div className="border-2 border-dashed border-white/20 rounded-lg p-8">
                      <p className="text-lg text-gray-300 mb-2">
                        {selectedFile ? selectedFile.name : 'Drop your video here or click to browse'}
                      </p>
                      <p className="text-sm text-gray-500">
                        {selectedFile ? `${(selectedFile.size / (1024 * 1024)).toFixed(2)} MB • ${selectedFile.type}` : 'Supports MP4, AVI, MOV, WebM (Max 50MB)'}
                      </p>
                    </div>
                  </label>
                  <input
                    id="video-upload"
                    type="file"
                    accept="video/*"
                    onChange={handleFileSelect}
                    className="hidden"
                  />
                  <button
                    onClick={analyzeVideo}
                    disabled={!selectedFile || isLoading}
                    className={cn(
                      "px-8 py-4 rounded-lg mt-8 font-medium text-lg transition-all duration-300",
                      selectedFile && !isLoading
                        ? "bg-gradient-to-r from-purple-600 to-pink-600 text-white hover:scale-105"
                        : "bg-gray-700 text-gray-400 cursor-not-allowed"
                    )}
                  >
                    {isLoading ? "Analyzing Video..." : "Analyze Video"}
                  </button>
                </div>
              </div>
            </div>
          </div>
          
          {error && (
            <div className="bg-red-500/10 border border-red-500/30 rounded-lg p-4 mb-8 text-center">
              <p className="text-red-300 font-medium">{error}</p>
            </div>
          )}

          {result && (
            <div className="space-y-6">
              <div className="border border-white/10 rounded-xl p-1">
                {/* <GlowingEffect spread={40} glow={true} disabled={false} proximity={70} inactiveZone={0.01} borderWidth={1.5} /> */}
                <div className="relative rounded-lg bg-black/50 backdrop-blur-sm p-6">
                  <h3 className="text-xl font-medium text-green-300 mb-4 flex items-center gap-2">
                    {result.message}
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                    <div className="bg-white/5 border border-white/10 rounded-lg p-4">
                      <div className="text-sm text-gray-400 mb-1">Filename</div>
                      <div className="text-white font-medium truncate">{result.video_filename}</div>
                    </div>
                    <div className="bg-white/5 border border-white/10 rounded-lg p-4">
                      <div className="text-sm text-gray-400 mb-1">Total Frames</div>
                      <div className="text-white font-medium">{typeof result.frame_count === 'number' ? result.frame_count : 'N/A'}</div>
                    </div>
                    {result.video_info?.speaker && (
                       <div className="bg-white/5 border border-white/10 rounded-lg p-4 md:col-span-2">
                         <div className="text-sm text-gray-400 mb-1">Video Name</div>
                         <div className="text-white font-medium truncate">{result.video_info.speaker}</div>
                       </div>
                    )}
                  </div>
                </div>
              </div>
              {result.frames && result.frames.length > 0 && (
                <div className="border border-white/10 rounded-xl p-1">
                  {/* <GlowingEffect spread={40} glow={true} disabled={false} proximity={70} inactiveZone={0.01} borderWidth={1.5} /> */}
                  <div className="relative rounded-lg bg-black/50 backdrop-blur-sm p-6">
                    <h3 className="text-xl font-medium text-blue-300 mb-6">Extracted Frames</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                      {result.frames.map((frame, idx) => (
                        <div key={idx} className="bg-white/5 border border-white/10 rounded-lg overflow-hidden">
                          <div className="aspect-video bg-gray-800 flex items-center justify-center">
                            <img
                              src={frame.data}
                              alt={frame.filename}
                              className="max-w-full max-h-full object-contain"
                            />
                          </div>
                          <div className="p-4">
                            <div className="text-sm text-gray-400 mb-1">Frame</div>
                            <div className="text-white font-medium">{frame.filename}</div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
  
};

export default FrameX;