import { keys } from "@nsmnia-template/next-config/keys";
import merge from "lodash.merge";
import type { Metadata } from "next";

type BaseMetadataGenerator = Omit<Metadata, "title">;

type LayoutMetadataGenerator = BaseMetadataGenerator & {
  title?: string;
  description?: string;
  isLayout: true;
};

type PageMetadataGenerator = BaseMetadataGenerator & {
  title: string;
  description: string;
  isLayout?: false;
};

type MetadataGenerator = LayoutMetadataGenerator | PageMetadataGenerator;

export const config = {
  applicationName: "Revolved Design",
  author: {
    name: "Revolved Design",
    url: "https://revolved.design",
  } satisfies Metadata["authors"],
  publisher: "Revolved Design",
  twitterHandle: undefined as string | undefined,
  protocol: keys().NODE_ENV === "production" ? "https" : "http",
  productionUrl: keys().NEXT_PUBLIC_APP_URL,
  image: {
    url: "/website-og.png",
    width: 1200,
    height: 630,
  } satisfies NonNullable<
    NonNullable<NonNullable<Metadata["openGraph"]>["images"]>
  >,
} as const;

const defaults: Omit<Metadata, "title" | "description"> = {
  applicationName: config.applicationName,
  metadataBase: config.productionUrl
    ? new URL(`${config.protocol}://${config.productionUrl}`)
    : undefined,
  authors: [config.author],
  creator: config.author.name,
  publisher: config.publisher,
  formatDetection: {
    telephone: false,
    email: false,
    address: false,
    date: false,
  },
  appleWebApp: {
    capable: true,
    statusBarStyle: "default",
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: "/favicon.svg",
  },
  openGraph: {
    type: "website",
    siteName: config.applicationName,
    locale: "en_US",
    images: [config.image],
  },
  twitter: {
    card: "summary_large_image",
    images: [config.image],
    creator: config.twitterHandle,
    site: config.productionUrl,
  },
};

const metadata = ({
  title,
  description,
  isLayout = false,
  ...properties
}: MetadataGenerator): Metadata => {
  const applicationName = isLayout && title ? title : config.applicationName;
  const titleConfig = isLayout
    ? {
        template: `%s — ${applicationName}`,
        default: applicationName,
      }
    : title;

  const baseMetadata: Metadata = {
    ...defaults,
    title: titleConfig,
    description,
    appleWebApp: {
      ...(typeof defaults.appleWebApp === "object" ? defaults.appleWebApp : {}),
      title,
    },
    openGraph: {
      ...defaults.openGraph,
      title: titleConfig,
      description,
    },
    twitter: {
      ...defaults.twitter,
      title: titleConfig,
    },
  };

  return merge(baseMetadata, properties);
};

export const createLayoutMetadata = (
  layoutConfig: Omit<LayoutMetadataGenerator, "isLayout">
): Metadata => metadata({ ...layoutConfig, isLayout: true });

export const createMetadata = (pageConfig: PageMetadataGenerator): Metadata =>
  metadata({ ...pageConfig, isLayout: false });
