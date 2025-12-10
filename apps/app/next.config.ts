import { env } from '@/env';
import { config, withAnalyzer } from '@nsmnia-template/next-config';

let nextConfig = { ...config };

if (env.ANALYZE === 'true') {
  nextConfig = withAnalyzer(nextConfig) as typeof nextConfig;
}

export default nextConfig;
