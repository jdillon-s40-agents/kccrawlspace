import { NextRequest, NextResponse } from 'next/server';

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const required = ['firstName', 'lastName', 'phone', 'email', 'address', 'city'];
    const missing = required.filter((f) => !body[f]?.toString().trim());
    if (missing.length) {
      return NextResponse.json({ error: `Missing: ${missing.join(', ')}` }, { status: 400 });
    }
    // TODO: wire to Resend / SendGrid / CRM
    console.log('[inspection]', JSON.stringify(body));
    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json({ error: 'Invalid request' }, { status: 400 });
  }
}
