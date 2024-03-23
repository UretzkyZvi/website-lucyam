import { Container } from "@/components/Container";

import { NavLinks } from "@/components/NavLinks";
import { Linkedin } from "lucide-react";

const navigation = {
  main: [
    { name: "Feature", href: "/#features" },
    { name: "Integrations", href: "/#integrations" },
    { name: "Market Research", href: "/#market-research" },
    { name: "About Us", href: "/#about-us" },
  ],
  social: [
    {
      name: "LinkedIn",
      href: "#",
      icon: (props: React.ComponentPropsWithoutRef<"svg">) => (
        <Linkedin {...props} />
      ),
    },
    {
      name: "X",
      href: "#",
      icon: (props: React.ComponentPropsWithoutRef<"svg">) => (
        <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
          <path d="M13.6823 10.6218L20.2391 3H18.6854L12.9921 9.61788L8.44486 3H3.2002L10.0765 13.0074L3.2002 21H4.75404L10.7663 14.0113L15.5685 21H20.8131L13.6819 10.6218H13.6823ZM11.5541 13.0956L10.8574 12.0991L5.31391 4.16971H7.70053L12.1742 10.5689L12.8709 11.5655L18.6861 19.8835H16.2995L11.5541 13.096V13.0956Z" />
        </svg>
      ),
    },
  ],
};
export function Footer() {
  return (
    <footer className="border-t border-gray-200 pt-20">
      <Container>
        <nav
          className="-mb-6 columns-2 sm:flex sm:justify-center sm:space-x-12"
          aria-label="Footer"
        >
          {navigation.main.map((item) => (
            <div key={item.name} className="pb-6">
              <a
                href={item.href}
                className="text-sm leading-6 text-gray-600 hover:text-gray-900"
              >
                {item.name}
              </a>
            </div>
          ))}
        </nav>
        <div className="mt-10 flex justify-center space-x-10">
          {navigation.social.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="text-gray-400 hover:text-gray-500"
            >
              <span className="sr-only">{item.name}</span>
              <item.icon className="h-6 w-6" aria-hidden="true" />
            </a>
          ))}
        </div>
        <p className="mt-10 text-center text-xs leading-5 text-gray-500">
          &copy; 2024 Lucy AM, Inc. All rights reserved.
        </p>
        {/* <div className="flex  items-start justify-between gap-y-12 pb-6 pt-16 lg:flex-row lg:items-center lg:py-16">
          <div className="flex items-center text-gray-900">
             <Logomark className="h-20 w-20" />
          </div>
          <nav className="mt-11 flex gap-8">
           
          </nav>
        </div>
        <div className="flex flex-col items-center border-t border-gray-200 pb-12 pt-8 md:flex-row-reverse md:justify-between md:pt-6">
          <p className="mt-6 text-sm text-gray-500 md:mt-0">
            &copy; Copyright {new Date().getFullYear()}. All rights reserved.
          </p>
        </div> */}
      </Container>
    </footer>
  );
}
