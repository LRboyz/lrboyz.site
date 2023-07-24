'use client';

import { useTranslations } from 'next-intl';
import Image from 'next/image';
import ShopCard from '~/components/ui/shopCard';
import { LocaleSelector } from '~/components/widget/LocaleSelector';
// import OfficeShot from './zolplay-office-couch-shot.jpg';
// import Poster from './zolplay-poster.png';

export default function Home() {
  const t = useTranslations('Home');

  return (
    <div className="w-full">
      <h1>👋&nbsp;{t('Hello')}</h1>
      {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((item) => (
        <ShopCard key={item} />
      ))}
    </div>
  );
}
