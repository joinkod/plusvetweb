module.exports = async function handler(req, res) {
  const { code, error } = req.query;

  if (error || !code) {
    return respond(res, 'error', { error: error || 'no_code' });
  }

  try {
    const tokenRes = await fetch('https://github.com/login/oauth/access_token', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
      },
      body: JSON.stringify({
        client_id: process.env.GITHUB_CLIENT_ID,
        client_secret: process.env.GITHUB_CLIENT_SECRET,
        code,
      }),
    });

    const data = await tokenRes.json();

    if (data.access_token) {
      return respond(res, 'success', { token: data.access_token, provider: 'github' });
    } else {
      return respond(res, 'error', { error: data.error || 'token_denied' });
    }
  } catch (err) {
    return respond(res, 'error', { error: err.message });
  }
};

function respond(res, status, content) {
  const message = `authorization:github:${status}:${JSON.stringify(content)}`;
  res.setHeader('Content-Type', 'text/html; charset=utf-8');
  res.end(`<!DOCTYPE html>
<html>
<head><title>Auth</title></head>
<body>
<script>
  (function() {
    var msg = ${JSON.stringify(message)};
    if (window.opener) {
      window.opener.postMessage(msg, '*');
      setTimeout(function() { window.close(); }, 500);
    }
  })();
<\/script>
</body>
</html>`);
}
