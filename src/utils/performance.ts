/**
 * Performance detection and optimization utilities
 * Detects Mac Chrome and adjusts performance settings accordingly
 */

export const isMacChrome = (): boolean => {
  if (typeof navigator === 'undefined') return false;
  
  return navigator.platform.toUpperCase().includes('MAC') && 
         navigator.userAgent.includes('Chrome') &&
         !navigator.userAgent.includes('Edg'); // Exclude Edge
};

export interface PerformanceMode {
  smoothScroll: 'native' | 'lenis';
  cursorUpdateRate: number;
  reduceAnimations: boolean;
  grainOpacity: number;
}

export const getPerformanceMode = (): PerformanceMode => {
  if (isMacChrome()) {
    return {
      smoothScroll: 'native',
      cursorUpdateRate: 32,   // 30fps for better performance on Mac
      reduceAnimations: true,
      grainOpacity: 0.15,     // Reduced grain texture opacity
    };
  }
  
  return {
    smoothScroll: 'lenis',
    cursorUpdateRate: 16,     // 60fps on other platforms
    reduceAnimations: false,
    grainOpacity: 0.3,
  };
};
