import { SignIn } from "@clerk/nextjs";

export default function Page() {
  return (
    <main className="flex flex-col h-screen items-center justify-center p-3">
      <span className="mb-4 flex  items-center"></span>
      <SignIn />
    </main>
  );
}
