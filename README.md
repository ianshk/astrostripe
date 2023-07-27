# Stripe & Astro test

This a quick test to get Stripe working with Astro on Cloudflare using the Astro Cloudflare SSR adapter.

# To test locally

Create a .env file and add your stripe keys which can be found in your Stripe dashboard

STRIPE_PUBLIC_KEY="STRIPE_PUBLIC_KEY"

STRIPE_SECRET_KEY="STRIPE_SECRET_KEY"

# To run on Cloudflare

1. Connect the the repo to Cloudflare pages
2. add the following Enviorment variables:

NODE_VERSION: 16.14.0

STRIPE_PUBLIC_KEY: public key as value

STRIPE_SECRET_KEY: secret key as value

Reference:

https://docs.astro.build/en/guides/integrations-guide/cloudflare/
https://docs.astro.build/en/guides/deploy/cloudflare/
