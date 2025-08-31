import { Link } from '@/i18n/navigation';
import { useTranslations } from 'next-intl';

export default function NotFound() {
  const t = useTranslations('NotFound');
  const commonT = useTranslations('Common');

  return (
    <>
      {/* next.js 15.5.0 버전 기준 not-found.tsx 파일 내에서는 metadata 로 title 이 설정되지 않아서 title 컴포넌트(React19) 사용 */}
      <title>{`${t('title')} - ${commonT('service-name')}`}</title>
      <main>
        <p>{t('description')}</p>
        <Link href="/">{t('go-to-home')}</Link>
        <Link href="/sitemap">{t('or-see-our-site-map')}</Link>
      </main>
    </>
  );
}
