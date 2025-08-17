import './globals.css'
import { useState, useEffect } from 'react';
import { ElonMuskPresentation } from './components/ElonMuskPresentation';

// Device detection and viewport utilities
const useDeviceDetection = () => {
  const [deviceInfo, setDeviceInfo] = useState({
    type: 'desktop' as 'mobile' | 'tablet' | 'desktop',
    width: 0,
    height: 0,
    orientation: 'landscape' as 'portrait' | 'landscape',
    hasNotch: false,
    isTouchDevice: false,
    pixelRatio: 1
  });

  useEffect(() => {
    const updateDeviceInfo = () => {
      const width = window.innerWidth;
      const height = window.innerHeight;
      const orientation = width > height ? 'landscape' : 'portrait';
      const pixelRatio = window.devicePixelRatio || 1;
      
      // Device type detection based on width and touch capability
      let type: 'mobile' | 'tablet' | 'desktop' = 'desktop';
      if (width <= 480) {
        type = 'mobile';
      } else if (width <= 1024) {
        type = 'tablet';
      }

      // Touch device detection
      const isTouchDevice = 'ontouchstart' in window || navigator.maxTouchPoints > 0;

      // Notch detection (approximate)
      const hasNotch = window.CSS?.supports('padding-top: env(safe-area-inset-top)') || false;

      setDeviceInfo({
        type,
        width,
        height,
        orientation,
        hasNotch,
        isTouchDevice,
        pixelRatio
      });
    };

    updateDeviceInfo();
    window.addEventListener('resize', updateDeviceInfo);
    window.addEventListener('orientationchange', () => {
      // Delay to account for orientation change completion
      setTimeout(updateDeviceInfo, 100);
    });

    return () => {
      window.removeEventListener('resize', updateDeviceInfo);
      window.removeEventListener('orientationchange', updateDeviceInfo);
    };
  }, []);

  return deviceInfo;
};

export default function App() {
  const deviceInfo = useDeviceDetection();

  // Dynamic CSS custom properties for device-specific adaptations
  useEffect(() => {
    const root = document.documentElement;
    
    // Set device-specific CSS custom properties
    root.style.setProperty('--device-width', `${deviceInfo.width}px`);
    root.style.setProperty('--device-height', `${deviceInfo.height}px`);
    root.style.setProperty('--pixel-ratio', deviceInfo.pixelRatio.toString());
    
    // Safe area calculations
    const safeAreaTop = deviceInfo.hasNotch ? 'env(safe-area-inset-top, 0px)' : '0px';
    const safeAreaBottom = deviceInfo.hasNotch ? 'env(safe-area-inset-bottom, 0px)' : '0px';
    const safeAreaLeft = deviceInfo.hasNotch ? 'env(safe-area-inset-left, 0px)' : '0px';
    const safeAreaRight = deviceInfo.hasNotch ? 'env(safe-area-inset-right, 0px)' : '0px';
    
    root.style.setProperty('--safe-area-top', safeAreaTop);
    root.style.setProperty('--safe-area-bottom', safeAreaBottom);
    root.style.setProperty('--safe-area-left', safeAreaLeft);
    root.style.setProperty('--safe-area-right', safeAreaRight);
    
    // Dynamic viewport height accounting for mobile browser UI
    const dynamicVh = deviceInfo.height * 0.01;
    root.style.setProperty('--dvh', `${dynamicVh}px`);
    
    // Device type classes for conditional styling
    root.classList.remove('device-mobile', 'device-tablet', 'device-desktop', 'device-touch', 'device-notch');
    root.classList.add(`device-${deviceInfo.type}`);
    if (deviceInfo.isTouchDevice) root.classList.add('device-touch');
    if (deviceInfo.hasNotch) root.classList.add('device-notch');
    root.classList.add(`orientation-${deviceInfo.orientation}`);
  }, [deviceInfo]);

  // Adaptive container classes based on device
  const getContainerClasses = () => {
    const baseClasses = 'min-h-screen dark relative bg-dark-gray-950';
    const deviceClasses = {
      mobile: 'mobile-container',
      tablet: 'tablet-container', 
      desktop: 'desktop-container'
    };
    
    return `${baseClasses} ${deviceClasses[deviceInfo.type]}`;
  };

  return (
    <div className={getContainerClasses()}>
      {/* Elon Musk Presentation */}
      <main className="adaptive-main">
        <ElonMuskPresentation deviceInfo={deviceInfo} />
      </main>
    </div>
  );
}