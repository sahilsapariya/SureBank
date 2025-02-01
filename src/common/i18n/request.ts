import { getRequestConfig } from "next-intl/server";

export default getRequestConfig(async () => {
  const locale = "en";

  return {
    locale,
    messages: (await import(`@surebank/common/i18n/locale/${locale}.json`))
      .default,
  };
});
