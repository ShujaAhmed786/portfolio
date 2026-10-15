import { NextResponse } from "next/server";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const code = searchParams.get("code");
  
  if (!code) {
    return new NextResponse("Missing authorization code", { status: 400 });
  }

  const clientId = "Ov23liKlYZjKtMayKA0l";
  const clientSecret = process.env.GITHUB_OAUTH_CLIENT_SECRET;

  if (!clientSecret) {
    return new NextResponse("OAuth not configured", { status: 500 });
  }

  try {
    const tokenResponse = await fetch("https://github.com/login/oauth/access_token", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json",
      },
      body: JSON.stringify({
        client_id: clientId,
        client_secret: clientSecret,
        code: code,
      }),
    });

    const tokenData = await tokenResponse.json();

    if (tokenData.error) {
      return new NextResponse(`OAuth error: ${tokenData.error_description}`, { status: 400 });
    }

    const token = tokenData.access_token;
    
    // Return HTML that posts the token back to Decap CMS
    const html = `
      <!DOCTYPE html>
      <html>
      <head><title>Authorizing...</title></head>
      <body>
        <p>Authorizing, please wait...</p>
        <script>
          (function() {
            const token = "${token}";
            const message = "authorization:github:success:" + JSON.stringify({ token });
            if (window.opener) {
              window.opener.postMessage(message, "*");
              window.close();
            } else {
              document.body.innerHTML = "<p>Authorization complete. You can close this window.</p>";
            }
          })();
        </script>
      </body>
      </html>
    `;

    return new NextResponse(html, {
      headers: { "Content-Type": "text/html" },
    });
  } catch (error) {
    return new NextResponse("OAuth exchange failed", { status: 500 });
  }
}
