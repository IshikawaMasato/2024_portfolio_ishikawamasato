import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: NextRequest) {
  const { name, email, message } = await req.json();

  const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: Number(process.env.SMTP_PORT),
    secure: false, // true なら 465, false なら 587
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS,
    },
  });

  try {
    await transporter.sendMail({
      from: process.env.SMTP_USER,
      to: process.env.SMTP_USER,
      subject: `お問い合わせ: ${name} さんより`,
      text: `
【お名前】: ${name}
【メール】: ${email}
【メッセージ】:
${message}
      `,
    });
    return NextResponse.json(
      { message: "メール送信に成功しました" },
      { status: 200 }
    );
  } catch (error) {
    console.error("メール送信エラー:", error);
    return NextResponse.json(
      { message: "メール送信に失敗しました" },
      { status: 500 }
    );
  }
}
