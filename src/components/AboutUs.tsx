import { Container } from "./Container";
import Image from "next/image";
export function AboutUs() {
  return (
    <section
      id="about-us"
      aria-label="About Us"
      className="bg-gray-800 py-20 sm:py-32"
    >
      <Container>
        <div className="mx-auto  ">
          <h2 className="text-3xl font-medium tracking-tight  ">
            <span className="inline bg-gradient-to-r from-[#F596D3] to-[#D247BF]  bg-clip-text font-bold text-transparent">
              About Us
            </span>
          </h2>
          <figure className="rounded-xl  p-8  md:flex md:p-0">
            <Image
              src="/images/Matt.jpg"
              alt="Matthew Carr, CEO"
              width={800}
              height={600}
              className="mx-auto h-24 w-24 rounded-full  md:mt-10 md:h-32 md:w-32 md:rounded-2xl"
            />
            <div className="space-y-4 pt-6 text-center md:p-8 md:text-left">
              <blockquote>
                <p className="text-lg font-light text-gray-300">
                  “At Lucy AM, we believe in the power of innovation,
                  creativity, and community. We're not just a software tool;
                  we're a platform dedicated to bringing people together,
                  inspiring innovation, and democratising the possibilities of
                  AI for all levels of knowledge.
                </p>
                <p className="mt-3 text-lg font-light text-gray-300">
                  Our journey began with a simple vision: to harness the power
                  of machine learning and AI to solve real-world problems and
                  enhance human potential. From our humble beginnings, we've
                  grown into a team of passionate innovators dedicated to
                  pushing the boundaries of what's possible.
                </p>
                <p className="mt-3 text-lg font-light text-gray-300">
                  What sets us apart is our unwavering commitment to excellence
                  and innovation. We're not satisfied with the status quo—we're
                  constantly pushing ourselves to imagine, create, and deliver
                  software solutions that exceed expectations and drive
                  measurable results.{" "}
                </p>
                <p className="mt-3 text-lg font-light text-gray-300">
                  Our is idea is to create a space where individuals from all
                  walks of life can come together to share their passions, learn
                  from one another, and collaborate on exciting projects.
                  Whether you're an artist, entrepreneur, educator, or
                  enthusiast, we're here to support you on your path to success.
                  At Lucy AM, we believe in the power of collaboration and
                  partnership. We work closely with our clients and the whole
                  community to understand their unique challenges and goals, and
                  then we leverage our expertise to develop tailored solutions
                  that deliver real value.{" "}
                </p>
                <p className="mt-3 text-lg font-light text-gray-300">
                  But we're more than just a software company—we're a community
                  of dreamers, makers, and doers united by a common vision.
                  Together, we're building the future—one hidden line of code at
                  a time.{" "}
                </p>
                <p className="mt-3 text-lg font-light text-gray-300">
                  Thank you for choosing Lucy AM. We're excited to embark on
                  this journey with you.{" "}
                </p>
                <p className="mt-3 text-lg font-light text-gray-300">
                  Sincerely,”
                </p>
              </blockquote>
              <figcaption className="font-medium">
                <div className="text-sky-500 dark:text-sky-400">
                  Matthew Carr
                </div>
                <div className="text-gray-300">CEO, Lucy AM</div>
              </figcaption>
            </div>
          </figure>
        </div>
      </Container>
    </section>
  );
}
