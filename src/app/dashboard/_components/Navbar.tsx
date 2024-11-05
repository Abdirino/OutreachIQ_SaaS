import { Logo } from "@/components/Logo";
import { UserButton } from "@clerk/nextjs";
import Link from "next/link";

export function Navbar() {
    return <header className="flex backdrop-blur-sm bg-background">
        <nav className="flex items-center gap-10 container">
            <Link href="/dashboard" className="mr-auto">
             <Logo />
            </Link>
            <Link href="dashboard/products">Products</Link>
            <Link href="dashboard/analytics">Analytics</Link>
            <Link href="dashboard/subscription">Subscription</Link>
            <UserButton />
        </nav>
    </header>
}