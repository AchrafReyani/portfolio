import { NextRequest, NextResponse } from 'next/server';

export function middleware(request: NextRequest) {
  const geo = (request as NextRequest & { geo?: { continent?: string } }).geo;
  const continent = geo?.continent ?? null;

  const response = NextResponse.next();

  if (continent) {
    response.headers.set('x-user-continent', continent);
  }

  return response;
}
