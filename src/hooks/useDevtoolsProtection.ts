import { useEffect, useRef } from 'react';

export const useDevtoolsProtection = (enabled = true) => {
  const overlayRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!enabled) return;

    let overlay: HTMLDivElement | null = null;

    const ensureOverlay = () => {
      if (!overlay) {
        overlay = document.createElement('div');
        overlay.id = 'devtoolsOverlay';
        overlay.className = 'devtools-overlay';
        overlay.innerHTML =
          '<h1>Inspection blocked</h1><p>This site is protected. Please close developer tools to continue.</p>';
        document.body.appendChild(overlay);
        overlayRef.current = overlay;
      }
    };

    const showOverlay = () => {
      ensureOverlay();
      overlay!.classList.add('active');
    };

    const hideOverlay = () => {
      if (overlay) overlay.classList.remove('active');
    };

    const isDevtoolsOpen = () => {
      const threshold = 160;
      const wDiff = window.outerWidth - window.innerWidth;
      const hDiff = window.outerHeight - window.innerHeight;
      if (wDiff > threshold || hDiff > threshold) return true;
      const start = performance.now();
      // eslint-disable-next-line no-console
      console.log('%c', 'color: transparent');
      const end = performance.now();
      return end - start > 100;
    };

    const devtoolsCheck = () => {
      if (isDevtoolsOpen()) {
        showOverlay();
      } else {
        hideOverlay();
      }
    };

    document.addEventListener('contextmenu', (e) => e.preventDefault());

    document.addEventListener(
      'keydown',
      (e) => {
        const k = e.key.toLowerCase();
        if (e.key === 'F12') {
          e.preventDefault();
          return;
        }
        if (e.ctrlKey && e.shiftKey && (k === 'i' || k === 'j' || k === 'c' || k === 'k')) {
          e.preventDefault();
          return;
        }
        if (e.ctrlKey && (k === 'u' || k === 's' || k === 'p')) {
          e.preventDefault();
          return;
        }
        if (e.ctrlKey && e.shiftKey && (k === 's' || k === 'p')) {
          e.preventDefault();
          return;
        }
      },
      { capture: true },
    );

    ['copy', 'cut', 'paste'].forEach((evt) =>
      document.addEventListener(evt, (e) => {
        const t = e.target as HTMLElement;
        const tag = t && t.tagName;
        if (tag === 'INPUT' || tag === 'TEXTAREA' || (t && t.isContentEditable)) return;
        e.preventDefault();
      }),
    );

    document.addEventListener('dragstart', (e) => e.preventDefault());

    const interval = setInterval(devtoolsCheck, 800);
    window.addEventListener('resize', devtoolsCheck);

    const debuggerInterval = setInterval(() => {
      if (isDevtoolsOpen()) {
        // eslint-disable-next-line no-debugger
        (function () {
          return false;
        }).constructor('debugger').call('bind');
      }
    }, 1500);

    return () => {
      clearInterval(interval);
      clearInterval(debuggerInterval);
      window.removeEventListener('resize', devtoolsCheck);
      if (overlay && overlay.parentNode) {
        overlay.parentNode.removeChild(overlay);
      }
    };
  }, [enabled]);
};
