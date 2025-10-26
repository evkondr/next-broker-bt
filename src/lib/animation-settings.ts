import { MotionProps } from "motion/react";

export const heroAnimate:MotionProps = {
  initial: {
    opacity: 0,
    y: 50
  },
  whileInView: {
    opacity: 1,
    y: 0
  },
  transition: {
    duration: 0.5
  },
  viewport:{
    once: true
  }
}
export const heroAnimateWithDelay:MotionProps = {
  ...heroAnimate,
  transition: {
    duration: 0.5,
    delay: 0.3
  }
}
export const delayOpacity = {
   initial: {
    opacity: 0,
  },
  whileInView: {
    opacity: 1,
  },
  transition: {
    delay: 0.5,
    duration: 0.5,
  },
  viewport:{
    once: true
  }
}
