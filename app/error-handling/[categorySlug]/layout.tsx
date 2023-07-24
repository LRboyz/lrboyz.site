import { getCategories, getCategory } from '~/app/api/categories/getCategories';
import { ClickCounter } from '~/components/ui/click-counter';
import { TabGroup } from '~/components/ui/tab-group';

export default async function Layout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { categorySlug: string };
}) {
  const category = await getCategory({ slug: params.categorySlug });
  const categories = await getCategories({ parent: params.categorySlug });

  return (
    <div className="space-y-9">
      <div>
        <div className="flex justify-between">
          <TabGroup
            path={`/error-handling/${category.slug}`}
            items={[
              {
                text: 'All',
              },
              ...categories.map((x) => ({
                text: x.name,
                slug: x.slug,
              })),
            ]}
          />

          <div className="self-start">
            <ClickCounter />
          </div>
        </div>
      </div>

      <div>{children}</div>
    </div>
  );
}
