import { UFOIcon } from '~/assets/icons/UFOIcon';
import { Container } from '~/components/ui/Container';

export default function Loading() {
  return (
    <Container className="relative mt-16 min-h-screen lg:mt-32">
      <div className="flex animate-pulse flex-col items-center justify-center">
        <UFOIcon className="w-24" />
        <p>Loading...</p>
      </div>
    </Container>
  );
}
