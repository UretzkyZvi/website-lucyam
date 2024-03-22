import Image from "next/image";
import { Container } from "./Container";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export function Integrations() {
  return (
    <section
      id="integrations"
      aria-label="Features for investing all your money"
      className="bg-background py-20 sm:py-32"
    >
      <Container>
        <div className="flex flex-1 flex-col  ">
          <h2 className="text-3xl font-medium tracking-tight  ">
            <span className="inline bg-gradient-to-r from-[#F596D3] to-[#D247BF]  bg-clip-text font-bold text-transparent">
              Integrate{" "}
            </span>
            with top tools and services
          </h2>
          <p className="mt-2 text-lg text-gray-500">
            Integrate with the best tools and services to make your life easier.
          </p>
          <div className=" mt-6 flex-1">
            <Image
              src="/images/IntegrationDiagram.png"
              alt="Integrations"
              width={800}
              height={600}
              className="mx-auto"
            />
          </div>

          <div>
            <h3 className="mt-12 text-2xl font-medium tracking-tight">
              <span className="inline bg-gradient-to-r from-[#61DAFB] via-[#1fc0f1] to-[#03a3d7] bg-clip-text font-bold text-transparent">
                So what it means?{" "}
              </span>
              Integrations
            </h3>
            <p className="mt-2 text-lg text-gray-500">
              Integrating with the best tools and services makes your work on
              LucyAM more efficient and effective. Here's how:
            </p>
            <div className="mt-4 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              <Card>
                <CardHeader className="font-bold">Storage</CardHeader>
                <CardContent>
                  LucyAM uses cloud storage solutions like AWS, Oracle Cloud,
                  and Microsoft Azure to securely store and manage data
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="font-bold">Source Control</CardHeader>
                <CardContent>
                  It utilizes platforms like Bitbucket and GitHub for version
                  control, enabling collaborative coding with version tracking.
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="font-bold">
                  Collaboration & Communication
                </CardHeader>
                <CardContent>
                  Tools such as Kaggle, Slack, Hugging Face, and Gmail are used
                  to facilitate teamwork and communication among developers and
                  stakeholders.
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="font-bold">Infrastructure</CardHeader>
                <CardContent>
                  LucyAM is built to operate on infrastructure services like
                  Kubernetes and Docker, which help in managing and deploying
                  containerized applications.
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="font-bold">
                  Datasets, Annotation, Training & Models
                </CardHeader>
                <CardContent>
                  This section shows the use of platforms like TensorFlow,
                  PyTorch, Kili, etc., for handling datasets, annotating data,
                  training machine learning models, and deploying these models.
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="font-bold">
                  Application Deployment
                </CardHeader>
                <CardContent>
                  Finally, for deploying applications to users, services like
                  Vercel, Firebase, and Netlify are used. These platforms make
                  it easy to launch web applications with features like
                  continuous integration, serverless functions, and automated
                  deployments.
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
