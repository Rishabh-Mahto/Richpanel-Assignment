export function UserCard() {
  return (
    <div className="mx-3 p-3 translate-y-3 bg-white border rounded-lg border-gray-200">
      <div className="text-xl font-semibold p-1">Customer details</div>
      <div>
        <div className="flex justify-between p-1">
          <div className="font-semibold text-zinc-400">Email</div>
          <div className="font-semibold">amit@richpanel.com</div>
        </div>
        <div className="flex justify-between p-1">
          <div className="font-semibold text-zinc-400">First Name</div>
          <div className="font-semibold">Amit</div>
        </div>
        <div className="flex justify-between p-1">
          <div className="font-semibold text-zinc-400">Last Name</div>
          <div className="font-semibold">RG</div>
        </div>
      </div>
      <div className="p-1 font-semibold text-l text-blue-700">
        View more Details
      </div>
    </div>
  );
}
