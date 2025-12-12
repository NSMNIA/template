import { Button } from "@nsmnia-template/design-system/components/ui/button";
import { config, createLayoutMetadata } from "@nsmnia-template/seo/metadata";
import type { Metadata } from "next";

export const metadata: Metadata = createLayoutMetadata({
  title: `${config.applicationName} — Home`,
});

export default function Home() {
  return (
    <div>
      <Button>Click me</Button>
    </div>
  );
}
