import { Logo } from "@/components/Logo";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { subscriptionTiersInOrder } from "@/data/subscriptionTiers";
import { formatCompactNumber } from "@/lib/formatters";
import { cn } from "@/lib/utils";
import { SignUpButton } from "@clerk/nextjs";
import {
  ArrowRightIcon,
  Globe2Icon,
  Tv2Icon,
  NetworkIcon,
  CheckIcon,
} from "lucide-react";
import Link from "next/link";
import { ReactNode } from "react";

export default function Homepage() {
  return (
    <>
      <section className="min-h-screen bg-gray-200 flex items-center justify-center text-center text-clip text-balance flex-col gap-8 px-4">
        <h1 className="text-5xl lg:text-6xl xl:text-7xl font-bold tracking-tight m-4">
          Automate. Personalize. Close Smarter.
        </h1>
        <p className="text-lg lg:text-2xl max-w-screen-xl">
          OutreachIQ helps you boost response rates and streamline your sales
          process, so you can focus on what matters — building relationships and
          driving revenue.
        </p>
        <SignUpButton>
          <Button className="text-lg p-6 rounded-xl flex gap-2">
            Get started for free! <ArrowRightIcon className="size-5" />
          </Button>
        </SignUpButton>
      </section>
      <section className="bg-primary text-primary-foreground">
        <div className="container py-16 flex flex-col gap-16 px-8 lg:px-16">
          <h2 className="text-3xl text-center text-balance">
            Trusted by top modern companies
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-5 gap-16">
            <Link href="#">
              <Globe2Icon className="size-12" /> WHO Organization
            </Link>
            <Link href="#">
              <Tv2Icon className="size-12" /> IAffordable
            </Link>
            <Link href="#">
              <NetworkIcon className="size-12" /> ZeTech
            </Link>
            <Link href="#">
              <Globe2Icon className="size-12" /> Netflix
            </Link>
            
            <Link className="md:max-xl:hidden" href="#">
              <Globe2Icon className="size-12" />Socket Inc.
            </Link>
          </div>
        </div>
      </section>
      <section id="pricing" className="px-8 py-16 bg-accent/5 ">
        <h2 className="text-4xl text-center text-balance font-semibold mb-8">
          Outreach software which pays for itself 20 times over
        </h2>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 max-w-screen-xl mx-auto">
          {subscriptionTiersInOrder.map((tier) => (
            <PricingCard key={tier.name} {...tier} />
          ))}
        </div>
      </section>
      <footer className="container pt-16 pb-8 flex flex-col sm:flex-row gap-8 sm:gap-4 justify-between items-start">
        <Link href="/">
          <Logo />
        </Link>
        <div className="flex flex-col sm:flex-row gap-8">
          <div className="flex flex-col gap-8">
            <FooterLinkGroup
              title="Help"
              links={[{ label: "OutreachIQ discounts", href: "#" },
                { label: "Discount API", href: "#" }
              ]}
            />
          </div>
        </div>
      </footer>
    </>
  );
}

function PricingCard({
  name,
  priceInCents,
  maxNumberOfVisits,
  maxNumberOfProducts,
  canRemoveBranding,
  canAccessAnalytics,
  canCustomizeBanner,
}: (typeof subscriptionTiersInOrder)[number]) {
  const isMostPopular = name === "Standard";
  return (
    <Card>
      <CardHeader>
        <div className="text-accent font-semibold mb-8">{name}</div>
        <CardTitle className="text-2xl font-bold">
          ${priceInCents / 100} /mo
        </CardTitle>
        <CardDescription>
          {formatCompactNumber(maxNumberOfVisits)} pricing page visits /mo
        </CardDescription>
      </CardHeader>
      <CardContent>
        <SignUpButton>
          <Button
            className="text-lg w-full rounded-lg"
            variant={isMostPopular ? "accent" : "default"}
          >
            Get Started
          </Button>
        </SignUpButton>
      </CardContent>
      <CardFooter className="flex flex-col gap-4 items-start">
        <Feature className="font-bold">
          {maxNumberOfProducts}{" "}
          {maxNumberOfProducts === 1 ? "Email Templates" : "Email Templates"}
        </Feature>
        <Feature>OutreachIQ Discounts</Feature>
        {canAccessAnalytics && <Feature>Advanced Analytics</Feature>}
        {canRemoveBranding && <Feature>Remove Easy PPP Branding</Feature>}
        {canCustomizeBanner && <Feature>Banner Customization</Feature>}
      </CardFooter>
    </Card>
  );
}

function Feature({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div className={cn("flex items-center gap-2", className)}>
      <CheckIcon className="size-4 stroke-accent bg-accent/25 rounded-full p-0.5" />
      <span>{children}</span>
    </div>
  );
}

function FooterLinkGroup({title, links}: {title: string, links: {
  label: string, href:string}[]}) {
    return (
    <div className="flex flex-col gap-4">
      <h3 className="font-semibold">{title}</h3>
      <ul className="flex flex-col gap-2 text-sm">
        {links.map(link => (
          <li key={link?.href}><Link href={link.href}>{link.label}</Link></li>
        ))}
      </ul>
    </div>
  )}