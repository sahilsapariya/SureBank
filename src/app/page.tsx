'use client';

import { ModeToggle } from '@surebank/components/theme/ModeToggle';
import { useTranslations } from 'next-intl';
import LanguageSwitcher from '@surebank/components/languages/LanguageSwitcher';
import { Toaster } from '@surebank/components/ui/toaster';
import Link from 'next/link';
import { Button } from '@surebank/components/ui/button';

export default function Home() {
  const t = useTranslations();

  return (
    <>
      <div className="absolute top-4 right-4 flex gap-4 z-10">
        <LanguageSwitcher />
        <ModeToggle />
      </div>
      <div className="relative h-screen flex justify-center items-center">
        <div className="text-center">
          <div className="text-4xl font-bold">{t('homepage.hero.title')}</div>
          <div>
            <Link href={'/sql'}>
              <Button variant="link" className="text-blue-600">
                {t('common.navigation.sql')}
              </Button>
            </Link>
            <Link href={'/dynamo'}>
              <Button variant="link" className="text-blue-600">
                {t('common.navigation.dynamo')}
              </Button>
            </Link>
          </div>
        </div>
      </div>
      <Toaster />
    </>
  );
}
