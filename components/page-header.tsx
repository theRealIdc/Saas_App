import {
  SignInButton,
  SignedIn,
  SignedOut,
  UserButton,
  SignUpButton,
} from "@clerk/nextjs";
import { Button } from "@/components/ui/button";
const Pageheader = () => {
  return (
    <header className="sticky inset-x-0 top-0 z-30 w-full transition-all">
      <div className="w-full max-w-screen-xl px-2.5 lg:px-20 relative mx-auto">
        <div className="flex justify-between items-center h-14">
          <h1>My blog</h1>
          <div className="">
            <SignedOut>
              <SignInButton>
                <Button className="">Sign In</Button>
              </SignInButton>
              <SignUpButton>
                <Button className="ml-2">Sign Up</Button>
              </SignUpButton>
            </SignedOut>
            <SignedIn>
              <UserButton />
            </SignedIn>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Pageheader;
