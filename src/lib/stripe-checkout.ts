import Stripe from 'stripe'

interface Product {
  id: number
  title: string
  description: string
  price: number
}

if (!import.meta.env.STRIPE_SECRET_KEY) throw new Error('Missing STRIPE_SECRET_KEY.')

export const stripe = new Stripe(import.meta.env.STRIPE_SECRET_KEY, {
  apiVersion: '2022-11-15',
  typescript: true,
})

export const createCheckoutSession = async (product: Product) => {
  const session = await stripe.checkout.sessions.create({
    mode: 'payment',
    success_url: 'http://localhost:3000/success',
    line_items: [
      {
        price_data: {
          currency: 'usd',
          unit_amount: product.price * 100,
          product_data: { name: product.title },
        },
        quantity: 1,
      },
    ],
  })

  return session
}
