import { ContactDialog } from "./ContactDialog";
import { Container } from "./Container";
import Image from "next/image";
export function ContactUs() {
  return (
    <section
      id="contact"
      aria-label="Contact Us"
      className="
    bg-gradient-to-tl from-[#E55D87] to-[#5FC3E4] py-20 sm:py-32"
    >
      <Container>
        <div className="bg-background mx-auto rounded-xl border p-8 text-center shadow-2xl">
          <h2 className="text-3xl font-medium tracking-tight  ">
            <span className="inline bg-gradient-to-r from-[#F596D3] to-[#D247BF]  bg-clip-text font-bold text-transparent">
              Be sure, not shy to reach out to us
            </span>
          </h2>
          <p className="mt-6  text-lg font-light  ">
            We are here to help you with any queries you have. Feel free to ask
            us anything.
          </p>
          <div className="flex h-20 md:h-56 w-full">
            <div className="m-auto">
              <ContactDialog />
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
