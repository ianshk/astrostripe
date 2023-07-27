import type { APIRoute } from 'astro'
import { createCheckoutSession } from '../../lib/stripe-checkout'

export const post: APIRoute = async ({ request }) => {
  const body = await request.json()

  try {
    const session: any = await createCheckoutSession(body.product)

    return new Response(JSON.stringify(session), { status: 200 })
  } catch (error) {
    return new Response(JSON.stringify(error), { status: 404 })
  }
}
