import { ModeToggle } from "@/components/mode-toggle";
import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/nextjs";

export default function Home() {
  return (
    <div className="">
      <SignedIn>
        <UserButton />
      </SignedIn>
      <br />
      <ModeToggle />
      <br />
      This is a protected route
    </div>
  );
}
