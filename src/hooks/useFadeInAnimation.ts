import { useEffect } from 'react';

export const useFadeInAnimation = () => {
  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px',
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
        }
      });
    }, observerOptions);

    const fadeInElements = document.querySelectorAll('.fade-in');
    fadeInElements.forEach((el) => {
      observer.observe(el);
    });

    return () => {
      fadeInElements.forEach((el) => {
        observer.unobserve(el);
      });
    };
  }, []);
};