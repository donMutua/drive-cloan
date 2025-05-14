import { Webhook } from 'svix';
import { headers } from 'next/headers';
import { NextResponse } from 'next/server';
import { supabaseAdmin } from '@/lib/supabase';

// Webhook secret from Clerk Dashboard
const webhookSecret = process.env.CLERK_WEBHOOK_SECRET || '';

export async function POST(req: Request) {
  // Verify the webhook signature
  const headerPayload = headers();
  const svix_id = (await headerPayload).get('svix-id');
  const svix_timestamp = (await headerPayload).get('svix-timestamp');
  const svix_signature = (await headerPayload).get('svix-signature');

  if (!svix_id || !svix_timestamp || !svix_signature) {
    return new Response('Missing svix headers', { status: 400 });
  }

  // Get the body
  const payload = await req.json();
  const body = JSON.stringify(payload);

  // Create a new Svix instance with your secret
  const wh = new Webhook(webhookSecret);

  let evt: any;
  try {
    evt = wh.verify(body, {
      'svix-id': svix_id,
      'svix-timestamp': svix_timestamp,
      'svix-signature': svix_signature,
    });
  } catch (err) {
    console.error('Error verifying webhook:', err);
    return new Response('Error verifying webhook', { status: 400 });
  }

  // Handle the webhook event
  switch (evt.type) {
    case 'user.created':
      // Create a new user in Supabase with default storage values
      const { data, error } = await supabaseAdmin
        .from('users')
        .insert({
          id: evt.data.id, // Clerk user ID
          email: evt.data.email_addresses[0]?.email_address || '',
          first_name: evt.data.first_name || '',
          last_name: evt.data.last_name || '',
          image_url: evt.data.image_url || '',
          storage_used: 0,
          storage_limit: 10 * 1024 * 1024 * 1024, // 10GB default
        })
        .select();

      if (error) {
        console.error('Error creating user in Supabase:', error);
        return NextResponse.json({ error: 'Failed to create user' }, { status: 500 });
      }

      // Create root folder for the user
      const { error: folderError } = await supabaseAdmin.from('folders').insert({
        name: 'My Drive',
        user_id: evt.data.id,
        parent_id: null,
        path: '/',
        is_starred: false,
        is_trashed: false,
      });

      if (folderError) {
        console.error('Error creating root folder:', folderError);
      }

      return NextResponse.json({ success: true, data });

    case 'user.updated':
      // Update user in Supabase
      const { data: updatedUser, error: updateError } = await supabaseAdmin
        .from('users')
        .update({
          email: evt.data.email_addresses[0]?.email_address || '',
          first_name: evt.data.first_name || '',
          last_name: evt.data.last_name || '',
          image_url: evt.data.image_url || '',
        })
        .eq('id', evt.data.id)
        .select();

      if (updateError) {
        console.error('Error updating user in Supabase:', updateError);
        return NextResponse.json({ error: 'Failed to update user' }, { status: 500 });
      }

      return NextResponse.json({ success: true, data: updatedUser });

    case 'user.deleted':
      // Delete user from Supabase (all related data will be cascaded)
      const { error: deleteError } = await supabaseAdmin
        .from('users')
        .delete()
        .eq('id', evt.data.id);

      if (deleteError) {
        console.error('Error deleting user from Supabase:', deleteError);
        return NextResponse.json({ error: 'Failed to delete user' }, { status: 500 });
      }

      return NextResponse.json({ success: true });

    default:
      // Ignore other event types
      return NextResponse.json({ success: true });
  }
}
