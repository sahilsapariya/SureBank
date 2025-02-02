// import Footer from '@surebank/components/layout/Footer';
import Header from '@surebank/components/layout/Header';

import { ReactNode } from 'react';

export default function DashboardLayout({ children }: { children: ReactNode }) {
  return (
    <div className='max-container my-8'>
      <Header />
      <main>{children}</main>
      {/* <Footer /> */}
    </div>
  );
}
