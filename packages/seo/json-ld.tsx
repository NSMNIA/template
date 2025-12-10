import { ComponentProps } from 'react';
import type { Thing, WithContext } from 'schema-dts';

type JsonLdProps<T extends Thing> = Omit<ComponentProps<'script'>, 'children' | 'type' | 'dangerouslySetInnerHTML'> & {
  code: WithContext<T>;
};

export const JsonLd = <T extends Thing>({ code, ...props }: JsonLdProps<T>) => (
  <script
    {...props}
    type="application/ld+json"
    // biome-ignore lint/security/noDangerouslySetInnerHtml: "This is a JSON-LD script, not user-generated content."
    dangerouslySetInnerHTML={{ __html: JSON.stringify(code) }}
  />
);

export * from 'schema-dts';
