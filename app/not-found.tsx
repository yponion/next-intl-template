import NotFound from '@/components/NotFound';
import { NextIntlClientProvider } from 'next-intl';

// This page renders when a route like `/unknown.txt` is requested.
// In this case, the layout at `app/[locale]/layout.tsx` receives
// an invalid value as the `[locale]` param and calls `notFound()`.

export default function GlobalNotFound() {
  return (
    <html lang="en">
      <body>
        <NextIntlClientProvider>
          <NotFound />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
