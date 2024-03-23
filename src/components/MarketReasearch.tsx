import { Container } from "./Container";
import TLDRDiagram from "./TLDRDiagram";

export function MarketResearch() {
  return (
    <section
      id="market-research"
      aria-label="Market Research"
      className="bg-gradient-to-tl from-[#E55D87]/50 to-[#5FC3E4]/50 py-20 sm:py-32"
    >
      <Container>
        <div className="mx-auto max-w-2xl lg:mx-0 lg:max-w-3xl">
          <h2 className="text-3xl font-medium tracking-tight  ">
            Why now is the time for{" "}
            <span className="inline bg-gradient-to-r from-[#F596D3] to-[#D247BF]  bg-clip-text font-bold text-transparent">
              LucyAM?
            </span>
          </h2>
        </div>
        <div>
          <p className="mt-2 text-lg  ">
            Jobs are anticipated to be in high demand with 97 million
            specialists needed in the AI industry by 2025. There are currently
            around 150,000 machine learning engineers that are working in the AI
            field.
          </p>
          <p className="mt-2 text-lg  ">
            Whilst they have the skills to code and build AI, they sometimes
            lack the solution-based context to understand the opportunities and
            use cases to apply to applications. With Lucy AM we will enable over
            half a billion domain experts that have the professional based
            solutions for their field, but lack the skills to code and actually
            build AI models themselves.
          </p>
          <p className="mt-2 text-lg ">
            There are currently quite a few no code AI tools in the market.
            Whilst they are able to create AI models for specific use cases,
            they lack the depth and complexity to customize further. Using Lucy
            AM and without any prior experience required to start on your AI
            journey, it's also possible to go deeper and to customize beyond a
            simple use, for instance by combining different types of AI models
            ranging from LLM’S to computer vision and other AI types.
          </p>
          <p className="mt-2 text-lg ">
            The AI field is currently a jungle with projects going on around the
            world with different companies and people. With Lucy AM, we
            facilitate the search and collaboration so you can actually find
            existing open source and free AI models that are specific to your
            field and also work together with like minded individuals or with
            people within your company to collaborate and build your own AI
            projects.
          </p>
        </div>
        <div className="mt-4">
          <h2 className="text-3xl font-medium tracking-tight ">
            <span className="inline bg-gradient-to-r from-[#F596D3] to-[#D247BF]  bg-clip-text font-bold text-transparent">
              TLDR !
            </span>
          </h2>
          <TLDRDiagram />
          <p className="mt-6 text-lg ">
            So in short, Lucy AM is the platform that enables domain experts to
            build sophisticated humanoids without any prior experience in AI.
            But, not exclusively.
          </p>
          <p>
            ML engineers can benefit from Lucy AM, also they can use it to go
            deeper and customize further. Lucy AM also facilitates the search
            and collaboration so you can actually find existing open source and
            free AI models that are specific to your field and also work
            together with like minded individuals or with people within your
            company to collaborate and build your own AI projects.
          </p>
        </div>
      </Container>
    </section>
  );
}
