import { useEffect, useRef, useState } from 'react';

export default function Reveal({ children, className = '', variant = 'up', delay = 0 }) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return undefined;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.1 }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  const variants = {
    up: 'translate-y-6',
    down: '-translate-y-6',
    left: 'translate-x-8',
    right: '-translate-x-8',
    zoom: 'scale-75',
  };

  const hiddenTransform = variants[variant] || variants.up;

  return (
    <div
      ref={ref}
      className={`${className} transition-all duration-700 ease-out`}
      style={{
        transitionDelay: visible ? `${delay}ms` : '0ms',
        opacity: visible ? 1 : 0,
        transform: visible ? 'translate(0,0) scale(1)' : undefined,
      }}
    >
      {!visible && (
        <style>{`[data-reveal-id="${ref.current?.dataset?.revealId}"] { transform: ${hiddenTransform === 'scale-75' ? 'scale(0.75)' : hiddenTransform.replace('translate-y-6', 'translateY(1.5rem)').replace('-translate-y-6', 'translateY(-1.5rem)').replace('translate-x-8', 'translateX(2rem)').replace('-translate-x-8', 'translateX(-2rem)')} }`}</style>
      )}
      <div className={`transition-all duration-700 ease-out ${visible ? 'translate-y-0 translate-x-0 scale-100 opacity-100' : `${hiddenTransform} opacity-0`}`}
           style={{ transitionDelay: `${delay}ms` }}>
        {children}
      </div>
    </div>
  );
}
