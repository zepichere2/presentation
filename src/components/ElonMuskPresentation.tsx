import { useState, useEffect, useCallback, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronLeft, ChevronRight, Play, Pause, RotateCcw, Maximize2 } from 'lucide-react';
import { RocketFlyby } from '@/components/RocketFlyby';
import { PresentationProps } from './presentation/types';
import { SLIDES_DATA, PRESENTATION_CONFIG } from './presentation/constants';
import { TitleSlide } from './presentation/slides/TitleSlide';
import { WhoIsElonSlide } from './presentation/slides/WhoIsElonSlide';
import { EarlyLifeSlide } from './presentation/slides/EarlyLifeSlide';
import { EducationSlide } from './presentation/slides/EducationSlide';
import { WorkEthicSlide } from './presentation/slides/WorkEthicSlide';
import { ContributionsSlide } from './presentation/slides/ContributionsSlide';
import { InspirationSlide } from './presentation/slides/InspirationSlide';
import { ConclusionSlide } from './presentation/slides/ConclusionSlide';
import { AchievementsSlide } from './presentation/slides/AchievementSlides';
import { LeadershipSlide } from './presentation/slides/LeadershipSlide';


export function ElonMuskPresentation({ deviceInfo }: PresentationProps) {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(false);
  //eslint-disable-next-line
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const [showControls, setShowControls] = useState(true);
  const controlsTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  // Auto-hide controls after inactivity
  const resetControlsTimer = useCallback(() => {
    setShowControls(true);
    if (controlsTimeoutRef.current) {
      clearTimeout(controlsTimeoutRef.current);
    }
    controlsTimeoutRef.current = setTimeout(() => {
      setShowControls(false);
    }, 3000); // Hide after 3 seconds of inactivity
  }, []);

  // Mouse movement handler
  useEffect(() => {
    const handleMouseMove = () => {
      resetControlsTimer();
    };

    const handleMouseLeave = () => {
      if (controlsTimeoutRef.current) {
        clearTimeout(controlsTimeoutRef.current);
      }
      controlsTimeoutRef.current = setTimeout(() => {
        setShowControls(false);
      }, 1000); // Hide faster when mouse leaves
    };

    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseleave', handleMouseLeave);

    // Initial timer
    resetControlsTimer();

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseleave', handleMouseLeave);
      if (controlsTimeoutRef.current) {
        clearTimeout(controlsTimeoutRef.current);
      }
    };
  }, [resetControlsTimer]);

  // Auto-play functionality
  useEffect(() => {
    let interval: NodeJS.Timeout;
    
    if (isAutoPlaying && !isPaused) {
      interval = setInterval(() => {
        setCurrentSlide((prev) => {
          if (prev >= SLIDES_DATA.length - 1) {
            setIsAutoPlaying(false);
            return prev;
          }
          return prev + 1;
        });
      }, PRESENTATION_CONFIG.AUTO_PLAY_DURATION);
    }
    
    return () => clearInterval(interval);
  }, [isAutoPlaying, isPaused]);

  // Navigation functions
  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => 
      prev < SLIDES_DATA.length - 1 ? prev + 1 : prev
    );
  }, []);

  const prevSlide = useCallback(() => {
    setCurrentSlide((prev) => prev > 0 ? prev - 1 : prev);
  }, []);

  const goToSlide = useCallback((index: number) => {
    setCurrentSlide(index);
  }, []);

  const resetPresentation = useCallback(() => {
    setCurrentSlide(0);
    setIsAutoPlaying(false);
    setIsPaused(false);
  }, []);

  const toggleAutoPlay = useCallback(() => {
    setIsAutoPlaying(prev => !prev);
    setIsPaused(false);
  }, []);

  const togglePause = useCallback(() => {
    setIsPaused(prev => !prev);
  }, []);

  const toggleFullscreen = useCallback(() => {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen?.();
      setIsFullscreen(true);
    } else {
      document.exitFullscreen?.();
      setIsFullscreen(false);
    }
  }, []);

  // Auto-focus the presentation container for keyboard navigation
  useEffect(() => {
    const presentationElement = document.getElementById('presentation-container');
    if (presentationElement) {
      presentationElement.focus();
    }
  }, []);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyPress = (e: KeyboardEvent) => {
      switch (e.key) {
        case 'ArrowRight':
        case ' ':
          e.preventDefault();
          nextSlide();
          break;
        case 'ArrowLeft':
          e.preventDefault();
          prevSlide();
          break;
        case 'Home':
          e.preventDefault();
          setCurrentSlide(0);
          break;
        case 'End':
          e.preventDefault();
          setCurrentSlide(SLIDES_DATA.length - 1);
          break;
        case 'p':
        case 'P':
          e.preventDefault();
          toggleAutoPlay();
          break;
        case 'r':
        case 'R':
          e.preventDefault();
          resetPresentation();
          break;
        case 'f':
        case 'F':
          e.preventDefault();
          toggleFullscreen();
          break;
        case 'Escape':
          setIsAutoPlaying(false);
          setIsPaused(false);
          break;
      }
    };

    // Attach to document for global keyboard handling
    document.addEventListener('keydown', handleKeyPress);
    return () => document.removeEventListener('keydown', handleKeyPress);
  }, [nextSlide, prevSlide, toggleAutoPlay, resetPresentation, toggleFullscreen]);

  // Touch/Swipe support
  useEffect(() => {
    let touchStartX = 0;
    let touchEndX = 0;

    const handleTouchStart = (e: TouchEvent) => {
      touchStartX = e.changedTouches[0].screenX;
    };

    const handleTouchEnd = (e: TouchEvent) => {
      touchEndX = e.changedTouches[0].screenX;
      const swipeThreshold = 50;
      const swipeDistance = touchStartX - touchEndX;

      if (Math.abs(swipeDistance) > swipeThreshold) {
        if (swipeDistance > 0) {
          nextSlide();
        } else {
          prevSlide();
        }
      }
    };

    if (deviceInfo.isTouchDevice) {
      document.addEventListener('touchstart', handleTouchStart);
      document.addEventListener('touchend', handleTouchEnd);
    }

    return () => {
      if (deviceInfo.isTouchDevice) {
        document.removeEventListener('touchstart', handleTouchStart);
        document.removeEventListener('touchend', handleTouchEnd);
      }
    };
  }, [deviceInfo.isTouchDevice, nextSlide, prevSlide]);

  const currentSlideData = SLIDES_DATA[currentSlide];

  // Render the current slide component based on currentSlide index
  const renderCurrentSlide = () => {
    const slideProps = {
      isActive: true,
      isVisible: true,
      deviceInfo,
      slideData: currentSlideData,
      onSlideChange: (direction: 'next' | 'prev') => {
        if (direction === 'next') nextSlide();
        else prevSlide();
      }
    };

    switch (currentSlide) {
      case 0:
        return <TitleSlide {...slideProps} />;
      case 1:
        return <WhoIsElonSlide {...slideProps} />;
      case 2:
        return <EarlyLifeSlide {...slideProps} />;
      case 3:
        return <EducationSlide {...slideProps} />;
      case 4:
        return <AchievementsSlide {...slideProps} />;
      case 5:
        return <WorkEthicSlide {...slideProps} />;
      case 6:
        return <ContributionsSlide {...slideProps} />;
      case 7:
        return <LeadershipSlide {...slideProps} />;
      case 8:
        return <InspirationSlide {...slideProps} />;
      case 9:
        return <ConclusionSlide {...slideProps} />;
      default:
        return <TitleSlide {...slideProps} />;
    }
  };

  return (
    <div 
      className="relative w-full h-screen overflow-hidden bg-dark-gray-950 focus:outline-none" 
      id="presentation-container"
      tabIndex={0}
      onClick={() => {
        const element = document.getElementById('presentation-container');
        if (element) element.focus();
      }}
    >
      {/* Rocket Flyby on slide change */}
      <RocketFlyby triggerKey={currentSlide} />

      {/* Main Slide Container */}
      <div className="relative w-full h-full overflow-y-auto overflow-x-hidden invisible-scrollbar">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentSlide}
            initial={{ opacity: 0, x: 100, rotateY: 15 }}
            animate={{ opacity: 1, x: 0, rotateY: 0 }}
            exit={{ opacity: 0, x: -100, rotateY: -15 }}
            transition={{ 
              duration: PRESENTATION_CONFIG.TRANSITION_DURATION,
              ease: "easeInOut"
            }}
            className="w-full min-h-full"
            style={{ transformStyle: "preserve-3d", perspective: "1000px" }}
          >
            {renderCurrentSlide()}
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Navigation Controls */}
      <AnimatePresence>
        {showControls && (
          <motion.div
            className="absolute bottom-4 left-1/2 transform -translate-x-1/2 z-40 pointer-events-auto"
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 100, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            onMouseEnter={() => {
              setShowControls(true);
              if (controlsTimeoutRef.current) {
                clearTimeout(controlsTimeoutRef.current);
                controlsTimeoutRef.current = null;
              }
            }}
            onMouseLeave={() => {
              resetControlsTimer();
            }}
          >
            <div className="flex items-center gap-3 dark-glass px-4 py-2 rounded-full backdrop-blur-md bg-opacity-60">
              {/* Previous Button */}
              <motion.button
                onClick={prevSlide}
                disabled={currentSlide === 0}
                className="w-8 h-8 dark-button rounded-full flex items-center justify-center disabled:opacity-30 disabled:cursor-not-allowed text-sm"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <ChevronLeft className="w-4 h-4" />
              </motion.button>

              {/* Slide Indicators */}
              <div className="flex items-center gap-1.5">
                {SLIDES_DATA.map((_, index) => (
                  <motion.button
                    key={index}
                    onClick={() => goToSlide(index)}
                    className={`w-1.5 h-1.5 rounded-full transition-colors ${
                      index === currentSlide ? 'bg-accent-red' : 'bg-dark-gray-600'
                    }`}
                    whileHover={{ scale: 1.5 }}
                    whileTap={{ scale: 0.8 }}
                    animate={index === currentSlide ? { scale: 1.2 } : { scale: 1 }}
                  />
                ))}
              </div>

              {/* Next Button */}
              <motion.button
                onClick={nextSlide}
                disabled={currentSlide === SLIDES_DATA.length - 1}
                className="w-8 h-8 dark-button rounded-full flex items-center justify-center disabled:opacity-30 disabled:cursor-not-allowed text-sm"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <ChevronRight className="w-4 h-4" />
              </motion.button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Control Panel */}
      <AnimatePresence>
        {showControls && (
          <motion.div
            className="absolute top-4 right-4 z-40 pointer-events-auto"
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -100, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            onMouseEnter={() => {
              setShowControls(true);
              if (controlsTimeoutRef.current) {
                clearTimeout(controlsTimeoutRef.current);
                controlsTimeoutRef.current = null;
              }
            }}
            onMouseLeave={() => {
              resetControlsTimer();
            }}
          >
            <div className="flex items-center gap-2 dark-glass px-3 py-2 rounded-full backdrop-blur-md bg-opacity-60">
              {/* Auto-play Toggle */}
              <motion.button
                onClick={toggleAutoPlay}
                className={`w-7 h-7 rounded-full flex items-center justify-center transition-colors text-sm ${
                  isAutoPlaying ? 'bg-accent-red text-white' : 'text-dark-gray-400 hover:text-white'
                }`}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                title={isAutoPlaying ? 'Stop Auto-play' : 'Start Auto-play'}
              >
                {isAutoPlaying ? <Pause className="w-3 h-3" /> : <Play className="w-3 h-3" />}
              </motion.button>

              {/* Reset Button */}
              <motion.button
                onClick={resetPresentation}
                className="w-7 h-7 rounded-full flex items-center justify-center text-dark-gray-400 hover:text-white text-sm"
                whileHover={{ scale: 1.1, rotate: -180 }}
                whileTap={{ scale: 0.9 }}
                title="Reset Presentation"
              >
                <RotateCcw className="w-3 h-3" />
              </motion.button>

              {/* Fullscreen Toggle */}
              <motion.button
                onClick={toggleFullscreen}
                className="w-7 h-7 rounded-full flex items-center justify-center text-dark-gray-400 hover:text-white text-sm"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                title="Toggle Fullscreen"
              >
                <Maximize2 className="w-3 h-3" />
              </motion.button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Progress Bar */}
      <motion.div
        className="absolute top-0 left-0 w-full h-1 bg-dark-gray-800 z-50"
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ delay: 0.5 }}
      >
        <motion.div
          className="h-full bg-gradient-to-r from-accent-red to-accent-red"
          style={{
            width: `${((currentSlide + 1) / SLIDES_DATA.length) * 100}%`
          }}
          initial={{ width: 0 }}
          animate={{ 
            width: `${((currentSlide + 1) / SLIDES_DATA.length) * 100}%` 
          }}
          transition={{ duration: 0.5 }}
        />
      </motion.div>

      {/* Slide Counter */}
      <motion.div
        className="absolute top-8 left-8 z-50"
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.5 }}
      >
        <div className="dark-glass px-4 py-2 rounded-full">
          <span className="text-accent-red font-semibold">
            {currentSlide + 1}
          </span>
          <span className="text-dark-gray-400 mx-2">/</span>
          <span className="text-dark-gray-300">
            {SLIDES_DATA.length}
          </span>
        </div>
      </motion.div>

      {/* Auto-play Progress Ring */}
      {isAutoPlaying && !isPaused && (
        <motion.div
          className="absolute bottom-8 right-8 z-50 w-16 h-16"
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0, opacity: 0 }}
        >
          <svg className="w-full h-full transform -rotate-90" viewBox="0 0 24 24">
            <circle
              cx="12"
              cy="12"
              r="10"
              fill="none"
              stroke="rgba(64, 64, 64, 0.3)"
              strokeWidth="2"
            />
            <motion.circle
              cx="12"
              cy="12"
              r="10"
              fill="none"
              stroke="#DC2626"
              strokeWidth="2"
              strokeLinecap="round"
              strokeDasharray="62.83"
              initial={{ strokeDashoffset: 62.83 }}
              animate={{ strokeDashoffset: 0 }}
              transition={{ 
                duration: PRESENTATION_CONFIG.AUTO_PLAY_DURATION / 1000,
                ease: "linear"
              }}
            />
          </svg>
          <div className="absolute inset-0 flex items-center justify-center">
            <motion.button
              onClick={togglePause}
              className="w-6 h-6 text-accent-red hover:text-white transition-colors"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              {isPaused ? <Play className="w-4 h-4" /> : <Pause className="w-4 h-4" />}
            </motion.button>
          </div>
        </motion.div>
      )}

      {/* Mobile Touch Hint */}
      {deviceInfo.isTouchDevice && currentSlide === 0 && (
        <motion.div
          className="absolute bottom-20 left-1/2 transform -translate-x-1/2 z-40"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2 }}
          exit={{ opacity: 0 }}
        >
          <div className="text-center text-dark-gray-400 text-sm">
            <div className="mb-2">Swipe left/right to navigate</div>
            <motion.div
              className="flex justify-center gap-2"
              animate={{ x: [-10, 10, -10] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <div className="w-2 h-2 bg-accent-red rounded-full" />
              <div className="w-2 h-2 bg-accent-red rounded-full" />
              <div className="w-2 h-2 bg-accent-red rounded-full" />
            </motion.div>
          </div>
        </motion.div>
      )}
    </div>
  );
}