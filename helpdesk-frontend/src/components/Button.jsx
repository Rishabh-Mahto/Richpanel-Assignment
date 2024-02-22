export function Button({ label, onClick }) {
  return (
    <button
      onClick={onClick}
      type="button"
      class=" w-full text-white bg-indigo-800 hover:bg-indigo-900 font-normal rounded-sm text-sm px-5 py-2.5 me-2 mb-2"
    >
      {label}
    </button>
  );
}
