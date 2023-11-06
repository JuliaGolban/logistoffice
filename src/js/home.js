import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);
let speed = 100;
const widthWindow = window.innerWidth;

let canvas = gsap.timeline();
ScrollTrigger.create({
  animation: canvas,
  trigger: '.scrollElement',
  toggleActions: 'restart reverse',
  start: 'top top',
  end: 'bottom 50%+=100px',
  //   duration: 2,
  scrub: 3,
});

if (widthWindow < 500) {
  // canvas.to('#car', { x: -1.2 * speed, y: 1 * speed, scale: 2.5 }, 0);
  canvas.to(
    '#sun',
    { x: 9 * speed, y: 1 * speed, delay: 0.03, duration: 2 },
    0
  );
  canvas.to('#cloud-1', { x: -10 * speed, scale: 0.5 }, 0);
  canvas.to('#cloud-2', { x: 10 * speed, scale: 0.5 }, 0);
  canvas.to('#builds', { delay: 0.03, scale: 0.9 }, 0);
  canvas.fromTo('#hills-1', { y: 10 }, { y: -10, scale: 0.8 }, 0);
  canvas.fromTo('#hills-2', { y: 10 }, { y: -10, scale: 0.8 }, 0);
  canvas.to(
    '#tree',
    { x: -10 * speed, y: -1 * speed, scale: 0.1, delay: 0.03 },
    0
  );
  canvas.to(
    '#trees',
    { x: 10 * speed, y: 1 * speed, scale: 0.1, delay: 0.03 },
    0
  );
  canvas.to(
    '#billboard-1',
    { x: -10 * speed, y: 1 * speed, scale: 0.1, opacity: 0 },
    0
  );
  first.to(
    '#billboard-2',
    { x: 10 * speed, y: 1 * speed, scale: 0.1, opacity: 0 },
    0
  );
  first.to(
    '#forest-1',
    { x: -10 * speed, y: -1 * speed, scale: 0.1, delay: 0.03 },
    0
  );
  first.to(
    '#forest-2',
    { x: 10 * speed, y: 1 * speed, scale: 0.1, delay: 0.03 },
    0
  );
  canvas.to('#build-1', { x: -10 * speed, scale: 0.1 }, 0);
  canvas.to(
    '#build-2',
    { x: 10 * speed, y: 1 * speed, scale: 0.1, opacity: 0 },
    0
  );
  canvas.to(
    '#build-3',
    { x: 10 * speed, y: 1 * speed, scale: 0.1, opacity: 0 },
    0
  );
  canvas.to(
    '#hospital',
    { x: 10 * speed, y: 1 * speed, scale: 0.1, opacity: 0 },
    0
  );
  // canvas.to('#road', { delay: 0.03, scale: 1.5 }, 0);
} else {
  // canvas.to('#car', { x: -3.75 * speed, y: 1 * speed, scale: 6.5 }, 0);
  canvas.to(
    '#sun',
    { x: 9 * speed, y: 1 * speed, delay: 0.03, duration: 2 },
    0
  );
  canvas.to('#cloud-1', { x: -10 * speed, scale: 0.5 }, 0);
  canvas.to('#cloud-2', { x: 10 * speed, scale: 0.5 }, 0);
  canvas.to('#builds', { delay: 0.03, scale: 0.7 }, 0);
  canvas.to('#hills-1', { x: 1 * speed, y: -1 * speed }, 0);
  canvas.to('#hills-2', { x: -1 * speed, y: -1 * speed }, 0);
  canvas.to(
    '#tree',
    { x: -10 * speed, y: -1 * speed, scale: 0.1, delay: 0.03 },
    0
  );
  canvas.to(
    '#trees',
    { x: 10 * speed, y: 1 * speed, scale: 0.1, delay: 0.03 },
    0
  );
  canvas.to(
    '#billboard-1',
    { x: -10 * speed, y: 1 * speed, scale: 0.1, opacity: 0 },
    0
  );
  canvas.to(
    '#billboard-2',
    { x: 10 * speed, y: 1 * speed, scale: 0.1, opacity: 0 },
    0
  );
  canvas.to(
    '#forest-1',
    { x: -10 * speed, y: -1 * speed, scale: 0.1, delay: 0.03 },
    0
  );
  canvas.to(
    '#forest-2',
    { x: 10 * speed, y: 1 * speed, scale: 0.1, delay: 0.03 },
    0
  );
  canvas.to('#build-1', { x: -10 * speed, scale: 0.1, opacity: 0 }, 0);
  canvas.to(
    '#build-2',
    { x: 10 * speed, y: 1 * speed, scale: 0.1, opacity: 0 },
    0
  );
  canvas.to(
    '#build-3',
    { x: 10 * speed, y: 1 * speed, scale: 0.1, opacity: 0 },
    0
  );
  canvas.to(
    '#hospital',
    { x: 10 * speed, y: 1 * speed, scale: 0.1, opacity: 0 },
    0
  );
  // canvas.to('#road', { y: -1 * speed, delay: 0.03, scale: 1.5 }, 0);
}

gsap.fromTo(
  '#car',
  { x: 1 },
  {
    x: 1,
    transformOrigin: '50% 50%',
    ease: 'power2.out',
    scrollTrigger: {
      toggleActions: 'restart reverse',
      // toggleClass: 'active',
      start: 'top top',
      end: 'bottom 50%+=100px',
      repeat: -1,
      yoyo: true,
      scrub: 4,
      onEnter: function () {
        gsap.to('#car', { x: 1 });
      },
      onLeave: function () {
        gsap.to('#car', { x: -1 });
      },
    },
  }
);
