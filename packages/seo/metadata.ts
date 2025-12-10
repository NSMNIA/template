import { keys } from '@nsmnia-template/next-config/keys';
import merge from 'lodash.merge';
import type { Metadata } from 'next';

type BaseMetadataGenerator = Omit<Metadata, 'title'> & {
  description: string;
};

type LayoutMetadataGenerator = BaseMetadataGenerator & {
  title?: string;
  isLayout: true;
};

type PageMetadataGenerator = BaseMetadataGenerator & {
  title: string;
  isLayout?: false;
};

type MetadataGenerator = LayoutMetadataGenerator | PageMetadataGenerator;

const config = {
  applicationName: 'NSMNIA Template',
  author: {
    name: 'NSMNIA',
    url: 'https://tune-tracker.com',
  } satisfies Metadata['authors'],
  publisher: 'NSMNIA',
  twitterHandle: undefined as string | undefined,
  protocol: keys().NODE_ENV === 'production' ? 'https' : 'http',
  productionUrl: keys().NEXT_PUBLIC_APP_URL,
  image: {
    url: '/website-og.png',
    width: 1200,
    height: 630,
  } satisfies NonNullable<NonNullable<NonNullable<Metadata['openGraph']>['images']>>,
} as const;

const defaults: Omit<Metadata, 'title' | 'description'> = {
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
    statusBarStyle: 'default',
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: '/favicon.svg',
  }
};

 const metadata= ({
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
      ...(typeof defaults.appleWebApp === 'object' ? defaults.appleWebApp : {}),
      title,
    },
    openGraph: {
      title,
      description,
      images: [config.image],
        type: 'website',
        siteName: applicationName,
        locale: 'en_US',
    },
    twitter: {
        card: 'summary_large_image',
  creator: config.twitterHandle,
  images: [config.image],
    },
  }

    return merge(baseMetadata, properties);
};

export const createLayoutMetadata = (
  config: Omit<LayoutMetadataGenerator, 'isLayout'>
): Metadata => metadata({ ...config, isLayout: true });

export const createMetadata = (
  config: PageMetadataGenerator
): Metadata => metadata({ ...config, isLayout: false });