import clsx from 'clsx';

export default function Sidebar({ className }: { className?: string }) {
  return (
    <div
      className={clsx(
        'border border-stone-50 dark:border-zinc-700 md:mx-0 md:mr-2 md:w-52 md:flex-shrink-0 md:p-3 md:px-4',
        className,
      )}
    >
      <h1>THis is Sidebar Component</h1>
    </div>
  );
}
