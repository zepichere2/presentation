import { useState, useEffect, useCallback } from 'react';
import { DeviceInfo } from './types';
import { PRESENTATION_CONFIG } from './constants';

export const usePresentationState = (totalSlides: number) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlay, setIsAutoPlay] = useState(false);
  const [swipeDirection, setSwipeDirection] = useState<'left' | 'right' | null>(null);

  const nextSlide = useCallback(() => {
    setSwipeDirection('left');
    setCurrentSlide((prev) => (prev + 1) % totalSlides);
    setTimeout(() => setSwipeDirection(null), 500);
  }, [totalSlides]);

  const prevSlide = useCallback(() => {
    setSwipeDirection('right');
    setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides);
    setTimeout(() => setSwipeDirection(null), 500);
  }, [totalSlides]);

  const goToSlide = useCallback((index: number) => {
    const direction = index > currentSlide ? 'left' : 'right';
    setSwipeDirection(direction);
    setCurrentSlide(index);
    setTimeout(() => setSwipeDirection(null), 500);
  }, [currentSlide]);

  return {
    currentSlide,
    isAutoPlay,
    swipeDirection,
    setIsAutoPlay,
    nextSlide,
    prevSlide,
    goToSlide
  };
};

export const useKeyboardNavigation = (
  nextSlide: () => void,
  prevSlide: () => void,
  goToSlide: (index: number) => void,
  totalSlides: number,
  isAutoPlay: boolean,
  setIsAutoPlay: (autoPlay: boolean) => void
) => {
  useEffect(() => {
    const handleKeyPress = (event: KeyboardEvent) => {
      if (event.key === 'ArrowRight' || event.key === ' ') {
        event.preventDefault();
        nextSlide();
      } else if (event.key === 'ArrowLeft') {
        event.preventDefault();
        prevSlide();
      } else if (event.key >= '1' && event.key <= '9') {
        const slideIndex = parseInt(event.key) - 1;
        if (slideIndex < totalSlides) {
          goToSlide(slideIndex);
        }
      } else if (event.key === 'Escape') {
        setIsAutoPlay(false);
      } else if (event.key === 'p' || event.key === 'P') {
        setIsAutoPlay(!isAutoPlay);
      }
    };

    window.addEventListener('keydown', handleKeyPress);
    return () => window.removeEventListener('keydown', handleKeyPress);
  }, [nextSlide, prevSlide, goToSlide, totalSlides, isAutoPlay, setIsAutoPlay]);
};

export const useTouchNavigation = (
  deviceInfo: DeviceInfo,
  nextSlide: () => void,
  prevSlide: () => void
) => {
  useEffect(() => {
    if (!deviceInfo.isTouchDevice) return;

    let startX = 0;
    let startY = 0;

    const handleTouchStart = (e: TouchEvent) => {
      startX = e.touches[0].clientX;
      startY = e.touches[0].clientY;
    };

    const handleTouchEnd = (e: TouchEvent) => {
      const endX = e.changedTouches[0].clientX;
      const endY = e.changedTouches[0].clientY;
      const diffX = startX - endX;
      const diffY = startY - endY;

      if (Math.abs(diffX) > Math.abs(diffY) && Math.abs(diffX) > 50) {
        if (diffX > 0) {
          nextSlide();
        } else {
          prevSlide();
        }
      }
    };

    document.addEventListener('touchstart', handleTouchStart);
    document.addEventListener('touchend', handleTouchEnd);

    return () => {
      document.removeEventListener('touchstart', handleTouchStart);
      document.removeEventListener('touchend', handleTouchEnd);
    };
  }, [nextSlide, prevSlide, deviceInfo.isTouchDevice]);
};

export const useAutoPlay = (isAutoPlay: boolean, nextSlide: () => void) => {
  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (isAutoPlay) {
      interval = setInterval(nextSlide, PRESENTATION_CONFIG.AUTO_PLAY_DURATION);
    }
    return () => clearInterval(interval);
  }, [isAutoPlay, nextSlide]);
};

export const useMousePosition = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = useCallback((event: React.MouseEvent) => {
    const rect = event.currentTarget.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    
    const x = event.clientX - centerX;
    const y = event.clientY - centerY;
    
    setMousePosition({ x, y });
  }, []);

  const resetMousePosition = useCallback(() => {
    setMousePosition({ x: 0, y: 0 });
  }, []);

  return { mousePosition, handleMouseMove, resetMousePosition };
};