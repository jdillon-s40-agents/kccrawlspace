import { NextRequest, NextResponse } from 'next/server';
import Anthropic from '@anthropic-ai/sdk';

export const runtime = 'nodejs';

const ALLOWED_ORIGINS = [
  'https://crawlspacekc.com',
  'https://www.crawlspacekc.com',
  'http://localhost:3000',
];

function isAllowedOrigin(origin: string | null): boolean {
  if (!origin) return false;
  return ALLOWED_ORIGINS.includes(origin);
}

export async function POST(req: NextRequest) {
  const origin = req.headers.get('origin');
  if (!isAllowedOrigin(origin)) {
    return NextResponse.json({ error: 'Forbidden' }, { status: 403 });
  }

  const apiKey = process.env.ANTHROPIC_API_KEY;
  if (!apiKey) {
    return NextResponse.json(
      { error: 'Server is missing ANTHROPIC_API_KEY' },
      { status: 500 }
    );
  }

  let body: { system?: string; messages?: Anthropic.MessageParam[] };
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: 'Invalid JSON body' }, { status: 400 });
  }

  if (!body.messages || !Array.isArray(body.messages)) {
    return NextResponse.json({ error: 'Missing messages' }, { status: 400 });
  }

  const client = new Anthropic({ apiKey });

  try {
    const response = await client.messages.create({
      model: 'claude-opus-4-8',
      max_tokens: 4096,
      system: body.system,
      messages: body.messages,
    });

    return NextResponse.json(response, {
      headers: { 'Access-Control-Allow-Origin': origin! },
    });
  } catch (err) {
    const message = err instanceof Error ? err.message : 'Unknown error';
    return NextResponse.json({ error: message }, { status: 502 });
  }
}

export async function OPTIONS(req: NextRequest) {
  const origin = req.headers.get('origin');
  if (!isAllowedOrigin(origin)) {
    return new NextResponse(null, { status: 403 });
  }
  return new NextResponse(null, {
    status: 204,
    headers: {
      'Access-Control-Allow-Origin': origin!,
      'Access-Control-Allow-Methods': 'POST, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type',
    },
  });
}
