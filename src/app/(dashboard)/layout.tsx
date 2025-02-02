import Footer from '@surebank/components/layout/Footer';
import Header from '@surebank/components/layout/Header';

import { ReactNode } from 'react';

export default function DashboardLayout({ children }: { children: ReactNode }) {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow max-container">{children}</main>
      <Footer />
    </div>
  );
}
