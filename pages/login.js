import { signIn } from 'next-auth/react';

export default function LoginPage() {
  const handleSignIn = async () => {
    await signIn('twitter');
  };

  return (
    <div>
      <h1>Login with Twitter</h1>
      <button onClick={handleSignIn}>Sign in with Twitter</button>
    </div>
  );
}
