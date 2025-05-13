import { verifyWebhook } from '@clerk/nextjs/webhooks'
import { NextRequest } from 'next/server'

export async function POST(req: NextRequest) {
  try {
    const evt = await verifyWebhook(req);

    // Do something with payload
    // For this guide, log payload to console
    const { id } = evt.data;
    const eventType = evt.type;
    if (evt.type === 'user.created') {
      console.log('userId:', id);
    }

    return new Response('', { status: 200 });
  } catch (error) {
    console.error('Error in webhook handler:', error);
    return new Response('Webhook Error', { status: 400 });
  }
}