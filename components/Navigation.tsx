import { useTranslations } from 'next-intl';
import { LocaleSwitcher } from './LocaleSwitcher';
import { ThemeSwitcher } from './ThemeSwitcher';

import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from '@/components/ui/navigation-menu';
import Link from './Link';

export default function Navigation() {
  const t = useTranslations('Navigation');

  const menu = [
    {
      label: t('home'),
      href: '/',
    },
    {
      label: t('test'),
      href: '/test',
    },
  ];

  return (
    <div className="justify-center flex px-4 h-16">
      <div className="max-w-5xl justify-between flex-1 flex items-center">
        <NavigationMenu className="">
          <NavigationMenuList className="">
            {menu.map((item) => (
              <NavigationMenuItem key={item.href}>
                <NavigationMenuLink asChild>
                  <Link href={item.href}>{item.label}</Link>
                </NavigationMenuLink>
              </NavigationMenuItem>
            ))}
          </NavigationMenuList>
        </NavigationMenu>
        <div className="flex items-center gap-2">
          <LocaleSwitcher />
          <ThemeSwitcher />
        </div>
      </div>
    </div>
  );
}
