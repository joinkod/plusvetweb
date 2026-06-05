module.exports = async function handler(req, res) {
  const { code, error } = req.query;

  if (error || !code) {
    return respond(res, 'error', { error: error || 'no_code' }, 'Sin código de autorización');
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
      return respond(res, 'success', { token: data.access_token, provider: 'github' }, 'Token obtenido OK');
    } else {
      return respond(res, 'error', data, 'GitHub rechazó el token: ' + JSON.stringify(data));
    }
  } catch (err) {
    return respond(res, 'error', { error: err.message }, 'Error de red: ' + err.message);
  }
};

function respond(res, status, content, debug) {
  const message = `authorization:github:${status}:${JSON.stringify(content)}`;
  res.setHeader('Content-Type', 'text/html; charset=utf-8');
  res.end(`<!DOCTYPE html>
<html>
<head><title>Auth</title></head>
<body style="font-family:sans-serif;padding:20px">
<p id="info">Estado: <b>${status}</b> — ${debug}</p>
<p id="opener-state">Comprobando opener...</p>
<script>
  (function() {
    var msg = ${JSON.stringify(message)};
    var openerEl = document.getElementById('opener-state');
    if (window.opener) {
      openerEl.textContent = 'window.opener: OK — enviando mensaje al CMS...';
      window.opener.postMessage(msg, '*');
      setTimeout(function() { window.close(); }, 1500);
    } else {
      openerEl.textContent = 'window.opener: NULL — no se puede enviar mensaje. Deja esta ventana abierta.';
    }
  })();
</script>
</body>
</html>`);
}
