import { useMemo, useState } from "react";
import { StepType } from "./types";

export const useMultiStep = (steps: StepType[]) => {
  const [activeStepIndex, setActiveStepIndex] = useState(0);
  const isFirstIndex = activeStepIndex === 0;
  const isLastIndex = activeStepIndex === steps.length - 1;
  const currentStep = steps[activeStepIndex];

  const progressBarWidth = useMemo(() => {
    return ((activeStepIndex + 1) / steps.length) * 100;
  }, [activeStepIndex, steps.length]);
  return {
    activeStepIndex,
    setActiveStepIndex,
    isFirstIndex,
    isLastIndex,
    currentStep,
    progressBarWidth,
  };
};
