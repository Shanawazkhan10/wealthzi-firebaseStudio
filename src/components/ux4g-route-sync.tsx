'use client';

import { usePathname, useSearchParams } from 'next/navigation';
import { useEffect } from 'react';

declare global {
  interface Window {
    closeMain?: () => void;
    openMain?: () => void;
  }
}

export default function Ux4gRouteSync() {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => {
    let preserveIntervalId: number | null = null;

    const preserveBackgroundImages = () => {
      if (!document.body.classList.contains('dark')) {
        if (preserveIntervalId !== null) {
          window.clearInterval(preserveIntervalId);
          preserveIntervalId = null;
        }
        return;
      }

      const preservedElements = document.querySelectorAll<HTMLElement>('[data-preserve-bg="true"]');
      preservedElements.forEach((element) => {
        element.style.setProperty('background-color', 'transparent', 'important');
        element.style.setProperty('background-blend-mode', 'normal', 'important');
      });

      const elements = document.querySelectorAll<HTMLElement>('*');

      elements.forEach((element) => {
        const computedStyle = window.getComputedStyle(element);
        if (computedStyle.backgroundImage && computedStyle.backgroundImage !== 'none') {
          element.style.setProperty('background-color', 'transparent', 'important');
          element.style.setProperty('background-blend-mode', 'normal', 'important');
        }
      });
    };

    const syncWidget = () => {
      const trigger = document.getElementById('uw-widget-custom-trigger');
      const panel = document.getElementById('uw-main');

      if (trigger) {
        trigger.setAttribute(
          'style',
          'position:fixed;right:24px;bottom:24px;z-index:2147483647;pointer-events:auto;'
        );

        trigger.onclick = (event) => {
          event.preventDefault();
          event.stopPropagation();
          window.openMain?.();
        };
      }

      if (panel) {
        panel.setAttribute('style', 'z-index:2147483646;');
      }

      preserveBackgroundImages();
      window.closeMain?.();
    };

    syncWidget();

    const timeoutId = window.setTimeout(syncWidget, 300);
    const timeoutId2 = window.setTimeout(syncWidget, 1000);
    const observer = new MutationObserver(() => {
      preserveBackgroundImages();

      if (document.body.classList.contains('dark') && preserveIntervalId === null) {
        preserveIntervalId = window.setInterval(preserveBackgroundImages, 150);
      }
    });

    observer.observe(document.body, {
      attributes: true,
      childList: true,
      subtree: true,
      attributeFilter: ['class', 'style'],
    });

    return () => {
      window.clearTimeout(timeoutId);
      window.clearTimeout(timeoutId2);
      if (preserveIntervalId !== null) {
        window.clearInterval(preserveIntervalId);
      }
      observer.disconnect();
    };
  }, [pathname, searchParams]);

  return null;
}
