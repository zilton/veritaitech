import React, { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Play, RotateCcw } from 'lucide-react';

interface VideoModalProps {
  onClose: () => void;
  videoSrc: string;
  posterSrc: string;
  endScreenSrc: string;
}

const VideoModal: React.FC<VideoModalProps> = ({ onClose, videoSrc, posterSrc, endScreenSrc }) => {
  const [hasStarted, setHasStarted] = useState(false);
  const [hasEnded, setHasEnded] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  const handlePlay = () => {
    const video = videoRef.current;
    if (!video) return;

    // Trigger play immediately on user interaction
    const playPromise = video.play();

    // Handle the promise returned by play()
    if (playPromise !== undefined) {
      playPromise
        .then(() => {
          // Playback started successfully, update UI to remove poster
          setHasStarted(true);
        })
        .catch((error) => {
          console.error("Video playback failed:", error);
          // If automatic playback fails (e.g. browser policy), 
          // still update state so native controls appear and user can try again
          setHasStarted(true);
        });
    } else {
      // Fallback for older browsers
      setHasStarted(true);
    }
  };

  const handleReplay = () => {
    setHasEnded(false);
    if (videoRef.current) {
      videoRef.current.currentTime = 0;
      videoRef.current.play().catch(e => console.error("Replay failed", e));
    }
  };

  return (
    <div className="fixed inset-0 z-[60] flex items-center justify-center bg-black/95 backdrop-blur-md p-4 animate-in fade-in duration-300">
      {/* Close Button */}
      <button
        onClick={onClose}
        className="absolute top-6 right-6 text-white/70 hover:text-white transition-colors z-50 p-2 bg-black/20 rounded-full hover:bg-black/50"
      >
        <X size={32} />
      </button>

      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.9 }}
        className="relative w-full max-w-5xl aspect-video bg-black rounded-2xl overflow-hidden shadow-2xl border border-white/10"
      >
        {/* HTML5 Video Player */}
        <video
          ref={videoRef}
          className="w-full h-full object-contain bg-black"
          controls={hasStarted && !hasEnded}
          src={videoSrc}
          onEnded={() => setHasEnded(true)}
          playsInline
          preload="auto"
        />

        {/* Poster / Start Screen */}
        <AnimatePresence>
          {!hasStarted && (
            <motion.div
              initial={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="absolute inset-0 z-10 bg-black flex items-center justify-center group cursor-pointer"
              onClick={handlePlay}
            >
              <img 
                src={posterSrc} 
                alt="Capa do vídeo Institucional" 
                className="absolute inset-0 w-full h-full object-cover opacity-60 group-hover:opacity-40 transition-opacity duration-500" 
              />
              
              <div className="relative z-20 flex flex-col items-center">
                <div className="relative flex items-center justify-center w-24 h-24 bg-brand-orange text-white rounded-full shadow-[0_0_30px_rgba(230,92,32,0.6)] group-hover:scale-110 transition-transform duration-300">
                  <div className="absolute inset-0 rounded-full bg-brand-orange animate-ping opacity-75"></div>
                  <Play size={40} className="fill-current relative z-10 ml-1" />
                </div>
                <p className="text-white font-heading font-bold mt-6 tracking-widest uppercase text-sm opacity-0 group-hover:opacity-100 transition-all transform translate-y-2 group-hover:translate-y-0">
                  Assistir Vídeo
                </p>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* End Screen */}
        <AnimatePresence>
          {hasEnded && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="absolute inset-0 z-20 bg-black/80 flex items-center justify-center"
            >
              {/* End Screen Image Background */}
              <img 
                src={endScreenSrc} 
                alt="Fim do vídeo" 
                className="absolute inset-0 w-full h-full object-cover opacity-50" 
              />
              
              {/* Overlay Content */}
              <div className="relative z-30 flex flex-col items-center gap-6 p-8 bg-black/60 rounded-2xl backdrop-blur-sm border border-white/10">
                <h3 className="text-2xl font-heading font-bold text-white">Obrigado por assistir</h3>
                <div className="flex gap-4">
                  <button
                    onClick={handleReplay}
                    className="flex items-center gap-2 px-6 py-3 bg-white text-brand-blue font-bold rounded-full hover:bg-gray-200 transition-colors shadow-lg"
                  >
                    <RotateCcw size={20} />
                    Assistir Novamente
                  </button>
                  <button
                    onClick={onClose}
                    className="flex items-center gap-2 px-6 py-3 bg-brand-orange text-white font-bold rounded-full hover:bg-orange-600 transition-colors shadow-lg"
                  >
                    Fechar
                  </button>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </div>
  );
};

export default VideoModal;