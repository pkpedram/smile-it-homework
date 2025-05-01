import LogoutButton from '@/components/auth/LogoutButton';

export default function Home() {
  return (
    <div className="h-screen w-screen flex flex-col items-center justify-center gap-2">
      <h1 className="text-2xl text-primary">You are signed in!</h1>
      <LogoutButton />
    </div>
  );
}
