"use client";
import { cn } from "@/lib/utils";
import { motion, SpringOptions, useSpring, useTransform } from "motion/react";
import { JSX, useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";

export type AnimatedNumberProps = {
  value: number;
  className?: string;
  springOptions?: SpringOptions;
  as?: React.ElementType;
};

export function AnimatedNumber({
  value,
  className,
  springOptions,
  as = "span",
}: AnimatedNumberProps) {
  const MotionComponent = motion.create(as as keyof JSX.IntrinsicElements);

  const spring = useSpring(value, springOptions);
  const display = useTransform(spring, (current) =>
    Math.round(current).toLocaleString(),
  );

  useEffect(() => {
    spring.set(value);
  }, [spring, value]);

  return (
    <MotionComponent className={cn("tabular-nums", className)}>
      {display}
    </MotionComponent>
  );
}

export default function CustomAnimatedNumber({ to }: { to: number }) {
  const [from, setFrom] = useState(0);
  const { ref, inView } = useInView();

  useEffect(() => {
    if (inView) {
      setFrom(to);
    }
  }, [to, inView]);

  return (
    <span ref={ref}>
      <AnimatedNumber springOptions={{ duration: 2000 }} value={from} />
    </span>
  );
}
