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
      return respond(res, 'error', data);
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
<head><title>Autenticando...</title></head>
<body>
<p id="msg">Completando autenticación...</p>
<script>
  (function() {
    var msg = ${JSON.stringify(message)};
    var sent = false;
    function send() {
      if (sent) return;
      if (window.opener) {
        sent = true;
        window.opener.postMessage(msg, '*');
        setTimeout(function() { window.close(); }, 500);
      } else {
        document.getElementById('msg').textContent =
          'Error: window.opener no disponible. Cierra esta ventana e intenta de nuevo.';
        console.error('opener null, message was:', msg);
      }
    }
    // try immediately, then retry once in case of timing
    send();
    setTimeout(send, 300);
  })();
</script>
</body>
</html>`);
}
