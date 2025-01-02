'use server';

export async function verifyAccount(tag: string, token: string) {
  console.log(`https://cocproxy.royaleapi.dev/v1/players/${tag}/verifytoken`);

  const response = await fetch(`https://cocproxy.royaleapi.dev/v1/players/${tag}/verifytoken`, {
    method: 'POST',
    mode: 'no-cors',
    headers: {
      Authorization: `Bearer ${process.env.CLASH_API_TOKEN}`,
    },
    body: JSON.stringify({ token }),
  });

  console.log(token);
  console.log(response);

  if (!response.ok) {
    return { error: 'Invalid tag or token' };
  }

  return { success: true };
}
