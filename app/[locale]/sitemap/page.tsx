import { Link } from '@/i18n/navigation';
import { Locale, useTranslations } from 'next-intl';
import { getTranslations } from 'next-intl/server';

type Props = {
  params: Promise<{ locale: Locale }>;
};

export async function generateMetadata(props: Props) {
  const { locale } = await props.params;
  const t = await getTranslations({ locale, namespace: 'Sitemap' });
  const commonT = await getTranslations({ locale, namespace: 'Common' });

  return {
    title: t('title') + ' - ' + commonT('service-name'),
  };
}

export default function Sitemap() {
  const t = useTranslations('Sitemap');
  const sitemap = [
    {
      url: '/',
      label: t('home'),
    },
    {
      url: '/test',
      label: t('test'),
    },
  ];

  return (
    <ul>
      {sitemap.map((site) => (
        <li key={site.url}>
          <Link href={site.url}>{site.label}</Link>
        </li>
      ))}
    </ul>
  );
}
