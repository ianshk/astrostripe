/** @jsx h */
import { h } from 'preact'

interface Product {
  title: string
  description: string
  price: number
}

type Props = {
  product: Product
}

export default function Button({ product }: Props) {
  async function HandleClick() {
    const response = await fetch('/api/checkout', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ product }),
    })

    const data = await response.json()

    if (data.url) {
      window.location.href = data.url
    }
  }
  return (
    <button
      onClick={HandleClick}
      class="mt-10 flex w-full items-center justify-center rounded-md border border-transparent bg-indigo-600 px-8 py-3 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
      type="submit">
      Buy
    </button>
  )
}
