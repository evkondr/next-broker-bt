import { MotionProps } from "motion/react";

export const fadeByY = (y:number):MotionProps => ({
  initial: {
    opacity: 0,
    y,
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
})
export const fadeByYWithDelay = (y:number):MotionProps => ({
  ...fadeByY(y),
  transition: {
    duration: 0.5,
    delay: 0.3
  }
})
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
export const fadeByX = (x:number):MotionProps => {
  return {
    initial: {
      opacity: 0,
      x
    },
    whileInView: {
      opacity: 1,
      x: 0
    },
    transition: {
      delay: 0.5,
      duration: 0.5,
    },
    viewport:{
      once: true
    }
  }
}