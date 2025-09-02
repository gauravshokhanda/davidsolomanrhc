import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    
    const GOOGLE_SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbyfBTkVj5PuD55aTdaoOSAG1vyVn4Hxe7d9wL3TM7zILrtzfvQ8DKsQBuNSZMkS7Wih/exec';
    
    const response = await fetch(GOOGLE_SCRIPT_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(body),
    });
    
    if (!response.ok) {
      throw new Error('Failed to submit to Google Apps Script');
    }
    
    const data = await response.json();
    return NextResponse.json(data);
  } catch (error) {
    console.error('API route error:', error);
    return NextResponse.json(
      { success: false, error: 'Failed to submit form' },
      { status: 500 }
    );
  }
}