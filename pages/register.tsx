import Link from 'next/link';

export default function Register() {
  return (
    <div>
      <p>this is signup</p>
      <form method="POST" action="/signup">
        <input name="firstname" type="text" placeholder="firstname"></input>
        <input name="lastname" type="text" placeholder="lastname"></input>
        <input name="email" type="text" placeholder="email"></input>
        <input name="password" type="password" placeholder="password"></input>
        <button type="submit">Sign Up</button>
      </form>
      <Link href="/">Back to home</Link>
    </div>
  );
}
