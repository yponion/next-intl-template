import { useTranslations } from 'next-intl';
import LocaleSwitcher from './LocaleSwitcher';
import NavigationLink from './NavigationLink';

export default function Navigation() {
  const t = useTranslations('Navigation');

  return (
    <nav className="container flex justify-between p-2">
      <div>
        <NavigationLink href="/">{t('home')}</NavigationLink>
        <NavigationLink href="/test">{t('test')}</NavigationLink>
      </div>
      <LocaleSwitcher />
    </nav>
  );
}
