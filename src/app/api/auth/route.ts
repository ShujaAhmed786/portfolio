import { NextResponse } from "next/server";

export async function GET() {
  const clientId = "Ov23liKlYZjKtMayKA0l";
  const redirectUri = "https://www.shujaahmed.dev/api/auth/callback";
  const scope = "repo,user";
  
  const authUrl = `https://github.com/login/oauth/authorize?client_id=${clientId}&redirect_uri=${encodeURIComponent(redirectUri)}&scope=${scope}`;
  
  return NextResponse.redirect(authUrl);
}
