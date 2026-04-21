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
    let postNavigationFrameId: number | null = null;
    let syncFrameId: number | null = null;

    const handleTriggerClick = (event: Event) => {
      event.preventDefault();
      event.stopPropagation();
      window.openMain?.();
    };

    const preserveBackgroundImages = () => {
      if (!document.body.classList.contains('dark')) {
        if (preserveIntervalId !== null) {
          window.clearInterval(preserveIntervalId);
          preserveIntervalId = null;
        }
        return;
      }

      // Only preserve backgrounds for elements that explicitly opt in.
      const preservedElements = document.querySelectorAll<HTMLElement>('[data-preserve-bg="true"]');
      preservedElements.forEach((element) => {
        element.style.setProperty('background-color', 'transparent', 'important');
        element.style.setProperty('background-blend-mode', 'normal', 'important');
      });

      const preservedMedia = document.querySelectorAll<HTMLElement>('[data-preserve-media="true"]');
      preservedMedia.forEach((element) => {
        element.style.setProperty('background-color', 'transparent', 'important');

        const descendants = element.querySelectorAll<HTMLElement>('*');
        descendants.forEach((descendant) => {
          descendant.style.setProperty('background-color', 'transparent', 'important');
          descendant.style.setProperty('background-image', 'initial', 'important');
          descendant.style.setProperty('mix-blend-mode', 'normal', 'important');
        });
      });
    };

    const bindTrigger = (trigger: HTMLElement) => {
      trigger.style.setProperty('position', 'fixed', 'important');
      trigger.style.setProperty('right', '24px', 'important');
      trigger.style.setProperty('bottom', '24px', 'important');
      trigger.style.setProperty('z-index', '2147483647', 'important');
      trigger.style.setProperty('pointer-events', 'auto', 'important');
      trigger.style.setProperty('display', 'flex', 'important');
      trigger.style.setProperty('visibility', 'visible', 'important');
      trigger.style.setProperty('opacity', '1', 'important');

      trigger.removeEventListener('click', handleTriggerClick, true);
      trigger.addEventListener('click', handleTriggerClick, true);
    };

    const syncWidget = () => {
      const trigger = document.getElementById('uw-widget-custom-trigger');
      const panel = document.getElementById('uw-main');

      if (trigger) {
        bindTrigger(trigger);
      }

      if (panel) {
        panel.style.setProperty('z-index', '2147483646', 'important');
        panel.style.setProperty('pointer-events', 'auto', 'important');
      }

      preserveBackgroundImages();
    };

    const queueSyncWidget = () => {
      if (syncFrameId !== null) {
        return;
      }

      syncFrameId = window.requestAnimationFrame(() => {
        syncFrameId = null;
        syncWidget();
      });
    };

    syncWidget();
    window.closeMain?.();
    postNavigationFrameId = window.requestAnimationFrame(() => {
      postNavigationFrameId = window.requestAnimationFrame(() => {
        syncWidget();
      });
    });

    const timeoutId = window.setTimeout(syncWidget, 200);
    const timeoutId2 = window.setTimeout(syncWidget, 800);
    const timeoutId3 = window.setTimeout(syncWidget, 1500);
    const observer = new MutationObserver(() => {
      queueSyncWidget();
      preserveBackgroundImages();

      if (document.body.classList.contains('dark') && preserveIntervalId === null) {
        preserveIntervalId = window.setInterval(preserveBackgroundImages, 150);
      } else if (!document.body.classList.contains('dark') && preserveIntervalId !== null) {
        window.clearInterval(preserveIntervalId);
        preserveIntervalId = null;
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
      window.clearTimeout(timeoutId3);
      if (postNavigationFrameId !== null) {
        window.cancelAnimationFrame(postNavigationFrameId);
      }
      if (syncFrameId !== null) {
        window.cancelAnimationFrame(syncFrameId);
      }
      if (preserveIntervalId !== null) {
        window.clearInterval(preserveIntervalId);
      }
      document
        .getElementById('uw-widget-custom-trigger')
        ?.removeEventListener('click', handleTriggerClick, true);
      observer.disconnect();
    };
  }, [pathname, searchParams]);

  return null;
}
