import { Mail } from 'lucide-react';
import Link from '@/components/Link';

export default function Footer() {
  const date = new Date();
  const year = date.getFullYear();

  return (
    <footer className="justify-center flex px-4">
      <div className="w-full max-w-5xl border-t py-4">
        <div className="flex justify-between flex-wrap">
          <small>© {year}. Yang jeong un. All rights reserved.</small>
          <Link
            href="mailto:yp071704@gmail.com"
            className="flex items-center gap-2"
          >
            <Mail className="size-4" />
            <small>yp071704@gmail.com</small>
          </Link>
        </div>
      </div>
    </footer>
  );
}
