import Logo from '~/components/widget/Logo';

export default function Header() {
  return (
    <header className="fixed top-0 z-50 h-[60px] w-full bg-black/10 backdrop-blur-sm px-2">
      <div className="flex h-full max-w-5xl items-center justify-between lg:mx-auto ">
        <div>
          <Logo className="w-28" />
        </div>
      </div>
    </header>
  );
}
