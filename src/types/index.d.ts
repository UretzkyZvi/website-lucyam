export type SiteConfig = {
    name: string;
    author: string;
    description: string;
    keywords: string[];
    url: {
        base: string;
    },
    social: {
        twitter?: string;
        facebook?: string;
        instagram?: string;
        linkedin: string;
    },
    ogImage: string;
}