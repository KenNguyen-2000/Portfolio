'use client';

import React, { useEffect } from 'react';

const ObserverWrapper = ({ children }: { children: React.ReactNode }) => {
  useEffect(() => {
    const observerRef = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (
            entry.isIntersecting &&
            !entry.target.classList.contains('animated')
          ) {
            entry.target.classList.add('animated');
          }
        });
      },
      { threshold: 0.7 }
    );

    const animateElms = document.querySelectorAll('.animate-item');
    animateElms.forEach((el) => {
      observerRef?.observe(el);
    });

    return () => {
      animateElms.forEach((el) => {
        observerRef?.unobserve(el);
      });
    };
  }, []);
  return <>{children}</>;
};

export default ObserverWrapper;
