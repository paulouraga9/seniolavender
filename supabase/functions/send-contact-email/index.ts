import { serve } from "https://deno.land/std@0.168.0/http/server.ts"

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
}

serve(async (req) => {
  if (req.method === 'OPTIONS') {
    return new Response('ok', { headers: corsHeaders })
  }

  try {
    const { name, email, phone, facilityName, message } = await req.json()

    // Send email using your preferred email service
    const emailContent = `
      New Contact Form Submission:
      
      Name: ${name}
      Email: ${email}
      Phone: ${phone}
      Facility Name: ${facilityName}
      Message: ${message}
    `

    // Replace with your email service configuration
    const emailData = {
      from: "contact@californiaseniorwindows.com",
      to: "Booking@californiaseniorwindows.com",
      subject: "New Contact Form Submission",
      text: emailContent,
    }

    // Send the email using Resend
    const response = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${Deno.env.get('RESEND_API_KEY')}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(emailData),
    })

    if (!response.ok) {
      throw new Error('Failed to send email')
    }

    return new Response(
      JSON.stringify({ message: "Email sent successfully" }),
      { 
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
        status: 200,
      },
    )
  } catch (error) {
    return new Response(
      JSON.stringify({ error: error.message }),
      { 
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
        status: 400,
      },
    )
  }
})