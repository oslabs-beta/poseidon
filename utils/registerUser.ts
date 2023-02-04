

export default async function loginUser (body: Values) {
  try {
    const res = await fetch(`/api/user/register`, {
      method: 'POST',
      headers: {
        Accept: 'application.json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(body),
    });
    // if data present - redirect to dashboard
    const { user } = await res.json();
    // if data present - redirect to dashboard
    if (user) {
      // may need to route to login to confirm they know their information
      router.push(`/`);
    } else {
      // user is not in the db - route to sign up page
      // NEED TO ADD MESSAGE EXPLAINING WHAT TO DO + WHY
      router.push(`/login`);
    }
  } catch (err) {
    console.log(err);
  }
};