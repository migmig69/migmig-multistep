import { MultiStepProps } from "./types";
import { useMultiStep } from "./useMultiStep";

export const MultiStep = ({ steps }: MultiStepProps) => {
  const {
    setActiveStepIndex,
    currentStep,
    progressBarWidth,
    isFirstIndex,
    isLastIndex,
  } = useMultiStep(steps);
  return (
    <div className="w-full bg-black/10 rounded-xl p-4">
      {/* titles */}
      <ul className="flex gap-1">
        {steps.map((step, index) => {
          return (
            <li key={step.id} className="flex flex-1">
              <button
                className={`w-full p-4 text-center transition duration-300 text-white text-lg hover:bg-black/40 rounded-lg ${
                  step.id === currentStep.id ? "bg-black/40" : "bg-black/10"
                }`}
                onClick={() => setActiveStepIndex(index)}
              >
                {step.name}
              </button>
            </li>
          );
        })}
      </ul>
      {/* progressBar */}
      <div className="relative bg-gray-600 h-2 mt-1 rounded-full overflow-hidden">
        <div
          style={{ width: `${progressBarWidth}%` }}
          className="absolute z-10 bg-green-500 h-2 transition-all duration-500"
        />
      </div>
      {/* Content */}
      <div className="bg-black/10 mt-2 rounded-xl p-2 relative overflow-hidden">
        {steps.map((step) => {
          return (
            <div
              key={step.id}
              className={`transition-all duration-300 absolute inset-0 ${
                step.id === currentStep.id
                  ? "relative opacity-100 z-10 translate-y-0"
                  : "translate-y-10 opacity-0"
              }`}
            >
              {step.component}
            </div>
          );
        })}
      </div>
      {/* Next/Prev */}
      <div className="flex my-2">
        {!isFirstIndex && (
          <button
            onClick={() => setActiveStepIndex((step) => step - 1)}
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded select-none"
          >
            Prev
          </button>
        )}
        {!isLastIndex && (
          <button
            onClick={() => setActiveStepIndex((step) => step + 1)}
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded select-none ml-auto"
          >
            Next
          </button>
        )}
      </div>
    </div>
  );
};
