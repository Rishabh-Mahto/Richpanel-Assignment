import { Button } from "../components/Button";
import { Heading } from "../components/Heading";

export const Disconnect = () => {
  return (
    <div className="bg-indigo-800 h-screen flex justify-center">
      <div className="flex flex-col justify-center">
        <div className="rounded-[12px] bg-white w-80 text-center p-2 h-max px-8">
          <Heading label={"Facebook Page Integration"} />
          <Heading label={"Integrated Page: "} />
          <div className="pt-6">
            <Button label={"Delete Integration"} />
            <Button label={"Connect Page"} />
          </div>
        </div>
      </div>
    </div>
  );
};
