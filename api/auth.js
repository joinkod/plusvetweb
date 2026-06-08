module.exports = function handler(req, res) {
  const provider = req.query.provider || 'github';
  const scope = req.query.scope || 'repo,user';
  const clientId = process.env.GITHUB_CLIENT_ID;
  const redirectUri = 'https://plusvetweb.vercel.app/api/callback';

  const oauthUrl = new URL('https://github.com/login/oauth/authorize');
  oauthUrl.searchParams.set('client_id', clientId);
  oauthUrl.searchParams.set('redirect_uri', redirectUri);
  oauthUrl.searchParams.set('scope', scope);

  const providerJSON = JSON.stringify(provider);
  const oauthUrlJSON = JSON.stringify(oauthUrl.toString());

  res.setHeader('Content-Type', 'text/html; charset=utf-8');
  res.end(`<!DOCTYPE html>
<html>
<head><title>Autenticando...</title></head>
<body>
<script>
  (function() {
    var provider = ${providerJSON};
    var oauthUrl = ${oauthUrlJSON};
    function receiveMessage(e) {
      if (e.data === 'authorizing:' + provider) {
        window.removeEventListener('message', receiveMessage, false);
        window.location.href = oauthUrl;
      }
    }
    window.addEventListener('message', receiveMessage, false);
    window.opener.postMessage('authorizing:' + provider, '*');
  })();
</script>
</body>
</html>`);
};
