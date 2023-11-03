import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);
let speed = 100;

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

canvas.to('#canva1', { x: 10 * speed, y: 10 * speed }, 0);
canvas.to('#canva2', { y: -10 * speed, scale: 0.5 }, 0);
canvas.to('#canva3', { x: 10 * speed, delay: 0.03 }, 0);
canvas.to('#canva4', { x: -10 * speed, y: -10 * speed }, 0);
