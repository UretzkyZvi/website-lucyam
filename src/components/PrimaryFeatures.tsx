"use client";

import { FC, Fragment, useEffect, useId, useRef, useState } from "react";
import { Tab } from "@headlessui/react";
import clsx from "clsx";
import {
  AnimatePresence,
  type MotionProps,
  type Variant,
  type Variants,
  motion,
} from "framer-motion";
import { useDebouncedCallback } from "use-debounce";

import { AppScreen } from "@/components/AppScreen";
import { CircleBackground } from "@/components/CircleBackground";
import { Container } from "@/components/Container";
import { PhoneFrame } from "@/components/PhoneFrame";
import {
  Database,
  Tags,
  Component,
  PlaneTakeoff,
  AppWindow,
  ShoppingBag,
  Users,
  Blend,
  Cloud,
} from "lucide-react";
import { ScrollArea } from "@/components/ui/scroll-area";

const MotionAppScreenHeader = motion(AppScreen.Header);
const MotionAppScreenBody = motion(AppScreen.Body);

interface CustomAnimationProps {
  isForwards: boolean;
  changeCount: number;
}

interface FeatureDetail {
  title: string;
  description: string;
}

interface Feature {
  name: string;
  description: string;
  icon: JSX.Element;
  details: FeatureDetail[];
}
const features: Feature[] = [
  {
    name: "Comprehensive Storage Integration",
    description:
      "Seamlessly connect with multiple cloud storage providers, including AWS S3, Azure Blob Storage, Google Cloud Storage, and Oracle Cloud Storage. Access and manage your data across platforms without leaving LucyAM.",
    icon: <Cloud className="h-8 w-8" />,
    details: [
      {
        title: "AWS S3 Integration",
        description:
          "Directly access and manage datasets stored in AWS S3 buckets.",
      },
      {
        title: "Azure Blob Storage",
        description:
          "Integrate with Azure Blob Storage for easy dataset management.",
      },
      {
        title: "Google Cloud Storage",
        description:
          "Connect to Google Cloud Storage to access and manage your data.",
      },
      {
        title: "Oracle Cloud Storage",
        description:
          "Utilize Oracle Cloud Storage for seamless dataset operations.",
      },
    ],
  },
  {
    name: "Public Datasets Access",
    description:
      "Explore and utilize a vast collection of public datasets from platforms like Hugging Face, Kaggle, and FiftyOne. Enrich your projects with diverse data sources available at your fingertips.",
    icon: <Database className="h-8 w-8" />,
    details: [
      {
        title: "Hugging Face Datasets",
        description:
          "Access thousands of ready-to-use datasets from the Hugging Face community for various AI/ML tasks.",
      },
      {
        title: "Kaggle Datasets",
        description:
          "Leverage Kaggle’s rich dataset repository for competitive data science and machine learning.",
      },
      {
        title: "FiftyOne Collections",
        description:
          "Explore and use datasets curated by FiftyOne for machine learning projects, especially in computer vision.",
      },
    ],
  },
  {
    name: "Data Preparation Tools",
    description:
      "Prepare your data for AI/ML projects with tools designed for easy splitting into training, validation, and testing sets. Customize data formats to suit your project needs, including popular formats like COCO, Pascal VOC, and more.",
    icon: <Blend className="h-8 w-8" />,
    details: [
      {
        title: "Easy Data Splitting",
        description:
          "Automatically split your datasets into training, validation, and testing sets with customizable ratios.",
      },
      {
        title: "Flexible Data Formatting",
        description:
          "Convert your datasets into various formats, ensuring compatibility with different AI/ML models and frameworks.",
      },
    ],
  },
  {
    name: "Annotation Tools Integration",
    description:
      "LucyAM integrates with leading annotation tools such as Roboflow, Labelbox, Label Studio, and Darwin V7, allowing you to select the best tool for your project needs. Switch between tools without impacting your workflow, thanks to our uniform data format that ensures seamless transition from annotation to model training.",
    icon: <Tags className="h-8 w-8" />,
    details: [
      {
        title: "Roboflow",
        description:
          "Utilize Roboflow for precise image and video annotations, enhancing computer vision model accuracy.",
      },
      {
        title: "Labelbox",
        description:
          "Leverage Labelbox for collaborative and scalable data labeling across various data types.",
      },
      {
        title: "Label Studio",
        description:
          "Engage with Label Studio for flexible data annotation, supporting a wide range of data formats and types.",
      },
      {
        title: "Darwin V7",
        description:
          "Take advantage of Darwin V7 for streamlined annotation workflows, especially suited for large datasets.",
      },
      {
        title: "Seamless Tool Transition",
        description:
          "Easily switch between annotation tools based on your project's evolving needs without worrying about data compatibility or pipeline disruptions.",
      },
      {
        title: "Uniform Data Format",
        description:
          "Benefit from LucyAM's capability to maintain uniformity in data format across different stages, from annotation through to training and modeling.",
      },
      {
        title: "Streamlined Data Preparation",
        description:
          "Experience efficient data preparation with automated format conversion, ensuring your data is training-ready immediately after annotation.",
      },
    ],
  },
  {
    name: "Training & Models",
    description: " ",
    icon: <Component className="h-8 w-8" />,
    details: [
      {
        title: "Model Development",
        description:
          "Develop AI models using a variety of supported frameworks and languages within an intuitive development environment.",
      },
      {
        title: "Model Training",
        description:
          "Train your models on scalable cloud infrastructure, optimized for performance and cost efficiency.",
      },
      {
        title: "Model Management",
        description:
          "Manage and version your models effectively, ensuring that your projects are always up-to-date and ready for deployment.",
      },
    ],
  },
  {
    name: "Deployment",
    description:
      "Deploy your AI models effortlessly with LucyAM's robust deployment tools. Whether you're targeting cloud, on-premises, or edge environments, our platform simplifies the deployment process, ensuring your models are operational and scalable.",
    icon: <PlaneTakeoff className="h-8 w-8" />,
    details: [
      {
        title: "Cloud Deployment",
        description:
          "Deploy models to cloud environments with high availability and auto-scaling capabilities.",
      },
      {
        title: "Edge Deployment",
        description:
          "Bring AI capabilities to the edge, deploying models close to the data source for low-latency inference.",
      },
      {
        title: "Monitoring and Updates",
        description:
          "Monitor your deployed models in real-time and deploy updates seamlessly, maintaining optimal performance.",
      },
    ],
  },
  {
    name: "Application",
    description:
      "Build and deploy AI-driven applications with LucyAM. Our platform provides the tools and infrastructure needed to turn your AI models into fully functional applications, ready for scaling and user engagement.",
    icon: <AppWindow className="h-8 w-8" />,
    details: [
      {
        title: "Application Building",
        description:
          "Utilize our integrated development tools to build AI applications with ease, from UI design to backend logic.",
      },
      {
        title: "User Engagement",
        description:
          "Create applications that drive user engagement, leveraging AI to provide personalized and meaningful experiences.",
      },
    ],
  },
  {
    name: "Commercialization",
    description:
      "LucyAM supports the commercialization of your AI projects, providing access to marketplaces, licensing tools, and monetization strategies to help you reach your target audience and achieve commercial success.",
    icon: <ShoppingBag className="h-8 w-8" />,
    details: [
      {
        title: "Marketplace Access",
        description:
          "List your AI applications on marketplaces directly through LucyAM, reaching a broad audience.",
      },
      {
        title: "Monetization Strategies",
        description:
          "Implement various monetization strategies, including subscriptions, one-time purchases, and usage-based pricing.",
      },
    ],
  },
  {
    name: "Collaboration",
    description:
      "Collaborate effectively on AI projects with LucyAM’s teamwork and project management tools. Share projects, co-develop models, and leverage community insights to enhance your AI solutions.",
    icon: <Users className="h-8 w-8" />,
    details: [
      {
        title: "Team Workspaces",
        description:
          "Work together in shared environments, promoting teamwork and ensuring project coherence.",
      },
      {
        title: "Community Insights",
        description:
          "Gain insights from the LucyAM community, sharing knowledge and collaborating on open-source projects.",
      },
    ],
  },
];

interface DetailsScreenProps {
  feature: Feature;
}

const DetailsScreen: FC<DetailsScreenProps> = ({ feature }) => {
  return (
    <ScrollArea className="h-[600px] ">
      <div className="space-y-4">
        {feature.details.map((detail, index) => (
          <div key={index} className="rounded-lg bg-white p-4 shadow">
            <h3 className="text-xl font-semibold">{detail.title}</h3>
            <p className="mt-2 text-gray-500">{detail.description}</p>
          </div>
        ))}
      </div>
    </ScrollArea>
  );
};

const headerAnimation: Variants = {
  initial: { opacity: 0, transition: { duration: 0.3 } },
  animate: { opacity: 1, transition: { duration: 0.3, delay: 0.3 } },
  exit: { opacity: 0, transition: { duration: 0.3 } },
};

const maxZIndex = 2147483647;

const bodyVariantBackwards: Variant = {
  opacity: 0.4,
  scale: 0.8,
  zIndex: 0,
  filter: "blur(4px)",
  transition: { duration: 0.4 },
};

const bodyVariantForwards: Variant = (custom: CustomAnimationProps) => ({
  y: "100%",
  zIndex: maxZIndex - custom.changeCount,
  transition: { duration: 0.4 },
});

const bodyAnimation: MotionProps = {
  initial: "initial",
  animate: "animate",
  exit: "exit",
  variants: {
    initial: (custom: CustomAnimationProps, ...props) =>
      custom.isForwards
        ? bodyVariantForwards(custom, ...props)
        : bodyVariantBackwards,
    animate: (custom: CustomAnimationProps) => ({
      y: "0%",
      opacity: 1,
      scale: 1,
      zIndex: maxZIndex / 2 - custom.changeCount,
      filter: "blur(0px)",
      transition: { duration: 0.4 },
    }),
    exit: (custom: CustomAnimationProps, ...props) =>
      custom.isForwards
        ? bodyVariantBackwards
        : bodyVariantForwards(custom, ...props),
  },
};

function usePrevious<T>(value: T) {
  const ref = useRef<T>();

  useEffect(() => {
    ref.current = value;
  }, [value]);

  return ref.current;
}

function FeaturesDesktop() {
  const [changeCount, setChangeCount] = useState(0);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const prevIndex = usePrevious(selectedIndex);
  const isForwards = prevIndex === undefined ? true : selectedIndex > prevIndex;

  const onChange = useDebouncedCallback(
    (selectedIndex:number) => {
      setSelectedIndex(selectedIndex);
      setChangeCount((changeCount) => changeCount + 1);
    },
    100,
    { leading: true },
  );

  return (
    <Tab.Group
      as="div"
      className="grid grid-cols-12 items-center gap-8 lg:gap-16 xl:gap-24"
      selectedIndex={selectedIndex}
      onChange={onChange}
      vertical
    >
      <Tab.List className="relative z-10 order-last col-span-6 space-y-2">
        {features.map((feature, featureIndex) => (
          <div
            key={feature.name}
            className="relative rounded-2xl transition-colors hover:bg-gray-800/30"
          >
            {featureIndex === selectedIndex && (
              <motion.div
                layoutId="activeBackground"
                className="absolute inset-0 bg-gray-800"
                initial={{ borderRadius: 16 }}
              />
            )}
            <div className="relative z-10 flex space-x-2 p-8">
              {feature.icon}
              <h3 className=" text-lg font-semibold text-white">
                <Tab className="ui-not-focus-visible:outline-none text-left  ">
                  <span className="absolute inset-0 rounded-2xl" />
                  {feature.name}
                </Tab>
              </h3>
            </div>
          </div>
        ))}
      </Tab.List>
      <div className="relative col-span-6">
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
          <CircleBackground color="#13B5C8" className="animate-spin-slower" />
        </div>
        <PhoneFrame className="z-10 mx-auto w-full max-w-[366px]">
          <Tab.Panels as={Fragment}>
            <AnimatePresence
              initial={false}
              custom={{ isForwards, changeCount }}
            >
              {features.map((feature, featureIndex) =>
                selectedIndex === featureIndex ? (
                  <Tab.Panel
                    static
                    key={feature.name + changeCount}
                    className="ui-not-focus-visible:outline-none col-start-1 row-start-1 flex focus:outline-offset-[32px]"
                  >
                    <AppScreen className="w-full">
 
                      <MotionAppScreenBody    {...(true ? { ...bodyAnimation, custom: {} } : {})}>
                        <DetailsScreen feature={feature} />
                      </MotionAppScreenBody>
                    </AppScreen>
                  </Tab.Panel>
                ) : null,
              )}
            </AnimatePresence>
          </Tab.Panels>
        </PhoneFrame>
      </div>
    </Tab.Group>
  );
}

function FeaturesMobile() {
  const [activeIndex, setActiveIndex] = useState(0);
  const slideContainerRef = useRef<React.ElementRef<"div">>(null);
  const slideRefs = useRef<Array<React.ElementRef<"div">>>([]);

  useEffect(() => {
    const observer = new window.IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting && entry.target instanceof HTMLDivElement) {
            setActiveIndex(slideRefs.current.indexOf(entry.target));
            break;
          }
        }
      },
      {
        root: slideContainerRef.current,
        threshold: 0.6,
      },
    );

    for (const slide of slideRefs.current) {
      if (slide) {
        observer.observe(slide);
      }
    }

    return () => {
      observer.disconnect();
    };
  }, [slideContainerRef, slideRefs]);

  return (
    <>
      <div
        ref={slideContainerRef}
        className="-mb-4 flex snap-x snap-mandatory -space-x-4 overflow-x-auto overscroll-x-contain scroll-smooth pb-4 [scrollbar-width:none] sm:-space-x-6 [&::-webkit-scrollbar]:hidden"
      >
        {features.map((feature, featureIndex) => (
          <div
            key={featureIndex}
            ref={(ref) => ref && (slideRefs.current[featureIndex] = ref)}
            className="w-full flex-none snap-center px-4 sm:px-6"
          >
            <div className="relative transform overflow-hidden rounded-2xl bg-gray-800 px-5 py-6">
              <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
                <CircleBackground
                  color="#13B5C8"
                  className={featureIndex % 2 === 1 ? "rotate-180" : undefined}
                />
              </div>
              <div className="relative mx-auto w-full max-w-[366px]">
                <DetailsScreen feature={feature} />
              </div>
              <div className="absolute inset-x-0 bottom-0 bg-gray-800/95 p-6 backdrop-blur sm:p-10">
                {feature.icon}
                <h3 className="mt-6 text-sm font-semibold text-white sm:text-lg">
                  {feature.name}
                </h3>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export function PrimaryFeatures() {
  return (
    <section
      id="features"
      aria-label="Features for investing all your money"
      className="bg-gray-900 py-20 sm:py-32"
    >
      <Container>
        <div className="mx-auto max-w-2xl lg:mx-0 lg:max-w-3xl">
          <h2 className="text-3xl font-medium tracking-tight text-white">
            Every feature you need to bring Lucy to life, all in one place.
          </h2>
          <p className="mt-2 text-lg text-gray-400">
            LucyAM offers a comprehensive suite of tools and capabilities to
            empower you to build, deploy, and manage AI/ML projects with ease.
          </p>
        </div>
      </Container>
      <div className="mt-16 md:hidden">
        <FeaturesMobile />
      </div>
      <Container className="hidden md:mt-20 md:block">
        <FeaturesDesktop />
      </Container>
    </section>
  );
}
