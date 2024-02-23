import { Header } from "./Header";
import { ChatMsg } from "./ChatMsg";

export function ActualMsg() {
  return (
    <div className="flex-grow w-2/3 ">
      <Header label={"Amit RG"} />
      <div className="bg-zinc-100 p-4 h-full flex flex-col justify-between border border-gray-200">
        <div className="flex gap-2 items-center">
          <img src="profile.webp" className="w-7 h-7 rounded-full" />
          <ChatMsg text={"Is it in Stock right now?"} />
        </div>
        <div className="flex justify-end gap-2 items-center">
          <ChatMsg text={"We've 3 left in stock!"} />
          <img src="profile.webp" className="w-7 h-7 rounded-full" />
        </div>
        <input
          placeholder={"Message Hiten Saxena"}
          className="w-full px-2 py-1 translate-y-[-55px] justify-end border rounded border-slate-200"
        />
      </div>
    </div>
  );
}
