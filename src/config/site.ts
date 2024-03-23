import { SiteConfig } from "@/types"

import { env } from "@/env.js"

export const siteConfig: SiteConfig = {
    name: "Lucy AM",
    author: "Lucy AM Team",
    description: "Lucy AM is a new way to bring your ideas to life without the need to learn complex AI tools or terminology",
    keywords: [
        "Lucy AM",
        "AI",
        "Artificial Intelligence",
        "Machine Learning",
        "Deep Learning",
        "Neural Networks",
        "Innovation",
        "Simplify AI",
        "Lucy AI Manager",
        "LucyAM",
        "Democratization of AI",
    ],
    url: {
        base: env.NEXT_PUBLIC_APP_URL,
    },
    social: {
        linkedin: "lucyam",
    },
    ogImage: `${env.NEXT_PUBLIC_APP_URL}/og.png`,
}