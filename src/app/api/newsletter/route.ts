import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  try {
    const { email } = await request.json();

    // Validate email
    if (!email || !email.includes('@')) {
      return NextResponse.json(
        { error: 'Valid email is required' },
        { status: 400 }
      );
    }

    // Example: Mailchimp integration
    // Replace with your newsletter service
    const response = await fetch(`https://us12.api.mailchimp.com/3.0/lists/YOUR_LIST_ID/members`, {
      method: 'POST',
      headers: {
        'Authorization': `apikey ${process.env.MAILCHIMP_API_KEY}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email_address: email,
        status: 'subscribed',
      }),
    });

    if (!response.ok) {
      const error = await response.json();

      // Handle duplicate email gracefully
      if (error.title === 'Member Exists') {
        return NextResponse.json({
          message: 'You are already subscribed!'
        });
      }

      throw new Error(error.detail || 'Failed to subscribe');
    }

    return NextResponse.json({
      message: 'Successfully subscribed to newsletter!'
    });

  } catch (error) {
    console.error('Newsletter subscription error:', error);
    return NextResponse.json(
      { error: 'Failed to subscribe. Please try again later.' },
      { status: 500 }
    );
  }
}