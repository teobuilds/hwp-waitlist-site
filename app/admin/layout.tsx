import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'HWP Orders',
  robots: { index: false, follow: false },
};

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
