import { Logo } from "@/components/Logo";
import { SignedIn, SignedOut, SignInButton } from "@clerk/nextjs";
import Link from "next/link";

export function Navbar() {
  return (
    <header className="flex backdrop-blur-sm fixed top-0 w-full z-10">
      <nav className="flex text-white items-center gap-10 container font-semibold">
        <Link href="/" className="mr-auto">
          <Logo />
        </Link>
        <Link className="text-lg" href="#">Features</Link>
        <Link className="text-lg" href="/#pricing">Pricing</Link>
        <Link className="text-lg" href="/#">About</Link>
        <span className="text-lg">
            <SignedIn>
              <Link href="/dashboard">Dashboard</Link>
            </SignedIn>
            <SignedOut>
              <SignInButton>Login</SignInButton>
            </SignedOut>
        </span>
      </nav>
    </header>
  );
}
