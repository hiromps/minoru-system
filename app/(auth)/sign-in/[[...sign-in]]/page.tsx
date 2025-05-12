import { SignIn } from '@clerk/nextjs'

export default function Page() {
  return (
    <div className="w-full min-h-[calc(100vh-4rem)]screen flex items-center justify-center">
      <SignIn />
    </div>
  );
}