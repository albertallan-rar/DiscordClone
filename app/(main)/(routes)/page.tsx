import { AlterarModoLayout } from "@/components/mode-toggle";
import { UserButton } from "@clerk/nextjs";

export default function Home() {
  return (
    <div className="flex justify-between p-2 bg-slate-500">
      <UserButton afterSignOutUrl="/" />
      <AlterarModoLayout />
    </div>
  );
}
