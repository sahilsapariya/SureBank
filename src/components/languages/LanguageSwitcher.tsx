'use client';

import { useLanguage } from '@surebank/common/context/LanguageProvider';
import { Button } from '@surebank/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@surebank/components/ui/dropdown-menu';

export const LANGUAGES = [
  { code: 'en', label: 'English' },
  { code: 'gu', label: 'Gujarati' },
  { code: 'hi', label: 'Hindi' },
];

const LanguageSwitcher: React.FC = () => {
  const { currentLanguage, changeLanguage } = useLanguage();

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" size="icon" aria-label="change language">
          <span>{currentLanguage}</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        {LANGUAGES.map(({ code, label }) => (
          <DropdownMenuItem
            key={code}
            onClick={() => changeLanguage(code, true)}
            className={currentLanguage === code ? 'font-bold' : ''}
          >
            {label}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default LanguageSwitcher;
