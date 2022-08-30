# Instructions

_This page also contains some Code for me to speed up the Video_

- Install Tailwind CSS with Create React App (I already did it) [Link](https://tailwindcss.com/docs/guides/create-react-app)

- Create MultiStep Component and import it to `App.tsx`
- `types.ts`:

```typescript
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
```

- Copy/Past this code in your `App.tsx`:

```typescript
const TestInput = ({ type }: { type: string }) => (
  <div className="max-w-[12rem] mx-auto">
    <div className="mb-4">
      <label className="block text-sm font-bold mb-2">Test {type}</label>
      {type === "textarea" ? (
        <textarea
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          placeholder="test textarea"
        />
      ) : (
        <input
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          type="text"
          placeholder="test input"
        />
      )}
    </div>
  </div>
);

const steps: StepType[] = [
  {
    name: "Step 1",
    id: 1,
    component: (
      <div className="w-full h-full text-white min-h-[15rem] rounded-lg py-2">
        <div className="max-w-[12rem] mx-auto">
          <TestInput type={"input"} />
          <TestInput type={"textarea"} />
        </div>
      </div>
    ),
  },
  {
    name: "Step 2",
    id: 2,
    component: (
      <div className="w-full h-full text-white min-h-[15rem] rounded-lg py-2">
        <div className="max-w-[12rem] mx-auto">
          <TestInput type={"input"} />
          <TestInput type={"textarea"} />
        </div>
      </div>
    ),
  },
  {
    name: "Step 3",
    id: 3,
    component: (
      <div className="w-full h-full text-white min-h-[15rem] rounded-lg py-2">
        <div className="max-w-[12rem] mx-auto">
          <TestInput type={"input"} />
          <TestInput type={"textarea"} />
        </div>
      </div>
    ),
  },
  {
    name: "Step 4",
    id: 4,
    component: (
      <div className="w-full h-full text-white min-h-[15rem] rounded-lg py-2">
        <div className="max-w-[12rem] mx-auto">
          <TestInput type={"input"} />
          <TestInput type={"textarea"} />
        </div>
      </div>
    ),
  },
];
```

- Create `useMultiStep.tsx`
- Create Title list
- Create progressBar
- Create Steps's Content
- Create Next/Prev Buttons
