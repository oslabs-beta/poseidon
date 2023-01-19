import Link from 'next/link';

export default function NavBar() {
  return (
    <div>Navbar
      <Link href="/">Home</Link>
      <Link href="/login">Login</Link>
    </div>
  );
};
