/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    // The app is live on the App Store; old waitlist/beta links go straight there.
    const appStore = 'https://apps.apple.com/us/app/hoop-with-prezence/id6762674186';
    return [
      { source: '/waitlist', destination: appStore, permanent: false },
      { source: '/confirmed', destination: appStore, permanent: false },
    ];
  },
};

export default nextConfig;
