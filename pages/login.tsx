import Link from "next/link";

export default function Login () {
  return (
    <>
      <p>this is login</p>
      <form method="POST" action="/login">
        <input name="email" type="text" placeholder="email"></input>
        <input name="password" type="password" placeholder="password"></input>
        <button type='submit'>Login</button>
      </form>
      <Link href="/sign_up">No account? Sign up now!</Link>
      <Link href="/">Back to home</Link>
    </>
  );
};