import withNextIntl from 'next-intl/plugin';
import type { NextConfig } from 'next';

const withIntl = withNextIntl('./src/i18n/request.ts');

const nextConfig: NextConfig = {
  reactStrictMode: true,
};

export default withIntl(nextConfig);
