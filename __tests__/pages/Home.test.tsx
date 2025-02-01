// __tests__/pages/Home.test.tsx

import { render } from '@testing-library/react';
import { screen } from '@testing-library/dom';
import '@testing-library/jest-dom';
import Home from '@surebank/app/page';
import { NextIntlClientProvider } from 'next-intl';
import { LanguageProvider } from '@surebank/common/context/LanguageProvider';
import * as messagesGu from '@surebank/common/i18n/locale/gu.json';
import * as messagesEn from '@surebank/common/i18n/locale/en.json';
import * as messagesHi from '@surebank/common/i18n/locale/hi.json';

describe('Home Page', () => {
  test('renders the page with the correct text', async () => {
    render(
      <LanguageProvider>
        <NextIntlClientProvider locale="en" messages={messagesEn}>
          <Home />
        </NextIntlClientProvider>
      </LanguageProvider>,
    );

    const element = await screen.findByText('Welcome to our Website!');
    expect(element).toBeInTheDocument();
  });
  it('should render the page with the correct text in Gujarati', async () => {
    render(
      <LanguageProvider>
        <NextIntlClientProvider locale="gu" messages={messagesGu}>
          <Home />
        </NextIntlClientProvider>
      </LanguageProvider>,
    );

    const element = await screen.findByText('અમારી વેબસાઇટમાં આપનું સ્વાગત છે!');
    expect(element).toBeInTheDocument();
  });
  it('should render the page with the correct text in English', async () => {
    render(
      <LanguageProvider>
        <NextIntlClientProvider locale="en" messages={messagesEn}>
          <Home />
        </NextIntlClientProvider>
      </LanguageProvider>,
    );

    const element = await screen.findByText('Welcome to our Website!');
    expect(element).toBeInTheDocument();
  });
  it('should render the page with the correct text in Hindi', async () => {
    render(
      <LanguageProvider>
        <NextIntlClientProvider locale="hi" messages={messagesHi}>
          <Home />
        </NextIntlClientProvider>
      </LanguageProvider>,
    );

    const element = await screen.findByText('हमारी वेबसाइट पर आपका स्वागत है!');
    expect(element).toBeInTheDocument();
  });
  it('should render the ModeToggle component', async () => {
    render(
      <LanguageProvider>
        <NextIntlClientProvider locale="en" messages={messagesEn}>
          <Home />
        </NextIntlClientProvider>
      </LanguageProvider>,
    );

    const element = await screen.findByLabelText('Toggle theme');
    expect(element).toBeInTheDocument();
  });
  it('should render the LanguageSwitcher component', async () => {
    render(
      <LanguageProvider>
        <NextIntlClientProvider locale="en" messages={messagesEn}>
          <Home />
        </NextIntlClientProvider>
      </LanguageProvider>,
    );

    const element = await screen.findByLabelText('change language');
    expect(element).toBeInTheDocument();
  });
});
