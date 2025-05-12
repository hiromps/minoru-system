import { SignedIn, SignedOut, UserButton } from "@clerk/nextjs";

export function UserNav() {
  return (
    <div>
      <SignedIn>
        <UserButton />
      </SignedIn>
      <SignedOut>
        {/* サインアウト時は何も表示しない */}
      </SignedOut>
    </div>
  );
}