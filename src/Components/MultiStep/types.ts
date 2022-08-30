import { ReactNode } from "react";

export type StepType = {
  name: string;
  component: ReactNode;
  id: number | string;
  invalidSelector?: string | null;
};

export type MultiStepProps = {
  steps: StepType[];
};
