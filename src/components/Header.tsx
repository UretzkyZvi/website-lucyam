"use client";

import Link from "next/link";
import { Popover } from "@headlessui/react";
import { AnimatePresence, motion } from "framer-motion";

import { Container } from "@/components/Container";
import { Logo } from "@/components/Logo";
import { NavLinks } from "@/components/NavLinks";
import { ChevronUpIcon, Menu } from "lucide-react";
import { useEffect, useState } from "react";

function MobileNavLink(
  props: Omit<
    React.ComponentPropsWithoutRef<typeof Popover.Button<typeof Link>>,
    "as" | "className"
  >,
) {
  return (
    <Popover.Button
      as={Link}
      className="block text-base leading-7 tracking-tight text-gray-700"
      {...props}
    />
  );
}

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <header
      className={`sticky top-0 z-50 ${isScrolled ? "bg-white shadow-md" : "bg-zinc-100"} transition-colors duration-300`}
    >
      <nav>
        <Container className="relative z-50 flex justify-between py-4">
          <div className="relative z-10 flex items-center gap-16">
            <Link href="/" aria-label="Home">
              <Logo className="h-10 w-auto" />
            </Link>
            <div className="hidden lg:flex lg:gap-10">
              <NavLinks />
            </div>
          </div>
          <div className="flex items-center gap-6">
            <Popover className="lg:hidden">
              {({ open }) => (
                <>
                  <Popover.Button
                    className="relative z-10 -m-2 inline-flex items-center rounded-lg stroke-gray-900 p-2 hover:bg-gray-200/50 hover:stroke-gray-600 active:stroke-gray-900 ui-not-focus-visible:outline-none"
                    aria-label="Toggle site navigation"
                  >
                    {({ open }) =>
                      open ? (
                        <ChevronUpIcon className="h-6 w-6" />
                      ) : (
                        <Menu className="h-6 w-6" />
                      )
                    }
                  </Popover.Button>
                  <AnimatePresence initial={false}>
                    {open && (
                      <>
                        <Popover.Overlay
                          static
                          as={motion.div}
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          exit={{ opacity: 0 }}
                          className="fixed inset-0 z-0 bg-gray-300/60 backdrop-blur"
                        />
                        <Popover.Panel
                          static
                          as={motion.div}
                          initial={{ opacity: 0, y: -32 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{
                            opacity: 0,
                            y: -32,
                            transition: { duration: 0.2 },
                          }}
                          className="absolute inset-x-0 top-0 z-0 origin-top rounded-b-2xl bg-gray-50 px-6 pb-6 pt-32 shadow-2xl shadow-gray-900/20"
                        >
                          <div className="space-y-4">
                            <MobileNavLink href="/#features">
                              Features
                            </MobileNavLink>
                            <MobileNavLink href="/#integrations">
                              Integrations
                            </MobileNavLink>
                            <MobileNavLink href="/#market-research">
                              Market Research
                            </MobileNavLink>
                            <MobileNavLink href="/#faqs">FAQs</MobileNavLink>
                          </div>
                          <div className="mt-8 flex flex-col gap-4">
                            {/* <Button href="/login" variant="outline">
                              Log in
                            </Button>
                            <Button href="#">Download the app</Button> */}
                          </div>
                        </Popover.Panel>
                      </>
                    )}
                  </AnimatePresence>
                </>
              )}
            </Popover>
            {/* <Button href="/login" variant="outline" className="hidden lg:block">
              Log in
            </Button>
            <Button href="#" className="hidden lg:block">
              Download
            </Button> */}
          </div>
        </Container>
      </nav>
    </header>
  );
}
