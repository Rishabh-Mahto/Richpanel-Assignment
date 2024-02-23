import { UserCard } from "./UserCard";

export function UserDetails() {
  return (
    <div className="flex-grow w-1/3 ">
      <div className=" border border-gray-200 p-5 flex flex-col items-center justify-center">
        <img src="profile.webp" className="w-14 h-14 rounded-full" />
        <div className="pt-1 flex flex-col items-center">
          <div>NAMe</div>
          <div className="text-xs text-zinc-400">offline</div>
        </div>
        <div className="pt-3 flex gap-2">
          <div>
            <button className="border-2 rounded border-zinc-300  px-2">
              Call
            </button>
          </div>
          <div>
            <button className="flex font-semibold text-md text-zinc-600 items-center justify-center border-2 rounded border-zinc-300 px-2 gap-1.5">
              <img src="profile-user.png" alt="" className=" w-4 h-4" />
              Profile
            </button>
          </div>
        </div>
      </div>
      <div className="flex-grow h-full" style={{ backgroundColor: "#eff2f7" }}>
        <UserCard />
      </div>
    </div>
  );
}
