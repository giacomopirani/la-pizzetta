import { ClipLoader } from "react-spinners";

export default function AppLoader() {
  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-[#fffbe6]">
      <div className="flex flex-col items-center gap-4">
        <ClipLoader size={60} color="black" />
        <p className="text-xl text-black font-semibold tracking-wide">
          Caricamento App...
        </p>
      </div>
    </div>
  );
}
