import { useTranslations } from 'next-intl';
import PostList from '~/components/widget/Post/PostList';

export default function Home() {
  const t = useTranslations('Home');

  return (
    <div className="w-full">
      <h1>👋&nbsp;{t('Hello')}</h1>
      <PostList />
    </div>
  );
}
