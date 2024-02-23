import { ChatSelect } from "./ChatSelect";
import { Header } from "./Header";

export function Conversations() {
  return (
    <div className="flex-grow w-1/3 ">
      <div className="flex  items-center justify-between px-2">
        <div className="flex items-center">
          <img src="menu.png" alt="" className="w-4 h-4" />
          <Header label={"Conversations"} />
        </div>
        <img src="rotate-right.png" alt="" className="w-5 h-5" />
      </div>
      <ChatSelect />
    </div>
  );
}
