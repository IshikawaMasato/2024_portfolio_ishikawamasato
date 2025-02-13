import { NextRequest, NextResponse } from "next/server";
import { getToken } from "next-auth/jwt";

const GITHUB_API_URL = "https://api.github.com/graphql";

export async function GET(req: NextRequest) {
  const token = await getToken({ req, secret: process.env.NEXTAUTH_SECRET });

  if (!token || !token.accessToken) {
    return NextResponse.json({ message: "Unauthorized" }, { status: 401 });
  }

  const query = `
    query {
      viewer {
        login
        name
        bio
        avatarUrl
        contributionsCollection(from: "2023-02-09T00:00:00Z", to: "2024-02-09T23:59:59Z") {
          contributionCalendar {
            totalCount
          }
        }
      }
    }
  `;

  const response = await fetch(GITHUB_API_URL, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${token.accessToken}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ query }),
  });

  if (!response.ok) {
    return NextResponse.json(
      { message: "GitHub APIからのデータ取得に失敗しました" },
      { status: response.status }
    );
  }

  const data = await response.json();
  return NextResponse.json(data.data.viewer);
}
