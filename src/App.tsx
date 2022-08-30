import { MultiStep } from "./Components";
import { StepType } from "./Components/MultiStep/types";

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

function App() {
  return (
    <div className="bg-gradient-to-br min-h-screen from-[#333867] to-[#17193b]">
      <div className="max-w-xl mx-auto py-2">
        <MultiStep steps={steps} />
      </div>
    </div>
  );
}

export default App;
