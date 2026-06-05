module.exports = async function handler(req, res) {
  const { code, error } = req.query;

  if (error || !code) {
    return respond(res, `authorization:github:error:${JSON.stringify({ error: error || 'no_code' })}`);
  }

  try {
    const tokenRes = await fetch('https://github.com/login/oauth/access_token', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' },
      body: JSON.stringify({
        client_id: process.env.GITHUB_CLIENT_ID,
        client_secret: process.env.GITHUB_CLIENT_SECRET,
        code,
      }),
    });

    const data = await tokenRes.json();

    if (data.access_token) {
      respond(res, `authorization:github:success:${JSON.stringify({ token: data.access_token, provider: 'github' })}`);
    } else {
      respond(res, `authorization:github:error:${JSON.stringify(data)}`);
    }
  } catch (err) {
    respond(res, `authorization:github:error:${JSON.stringify({ error: err.message })}`);
  }
};

function respond(res, message) {
  res.setHeader('Content-Type', 'text/html');
  res.end(`<!DOCTYPE html><html><body><script>
    window.opener && window.opener.postMessage(${JSON.stringify(message)}, '*');
    window.close();
  </script></body></html>`);
}
