export interface SlideData {
  id: number;
  title: string;
  subtitle?: string;
  content: string;
  visualType: 'rocket' | 'portrait' | 'puzzle' | 'timeline' | 'icons' | 'clock' | 'globe' | 'leadership' | 'inspiration' | 'quote';
  animation: 'slideInUp' | 'slideInLeft' | 'slideInRight' | 'rotateIn' | 'float' | 'pulse' | 'zoom' | 'flip';
  bgEffect: 'starfield' | 'galaxy' | 'particles' | 'gradient' | 'waves';
  interactiveElements?: string[];
}

export interface DeviceInfo {
  type: 'mobile' | 'tablet' | 'desktop';
  width: number;
  height: number;
  orientation: 'portrait' | 'landscape';
  hasNotch: boolean;
  isTouchDevice: boolean;
  pixelRatio: number;
}

export interface PresentationProps {
  deviceInfo: DeviceInfo;
}

export interface SlideProps {
  isActive: boolean;
  isVisible: boolean;
  deviceInfo: DeviceInfo;
  slideData: SlideData;
  onSlideChange?: (direction: 'next' | 'prev') => void;
}