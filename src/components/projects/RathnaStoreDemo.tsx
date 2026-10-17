"use client";

import Link from "next/link";
import { ArrowLeft, Minus, Plus } from "lucide-react";
import { useState } from "react";
import { commitAndSignal, reticle } from "@reticlehq/react";
import { useReticleStore } from "@reticlehq/react/store";

import { projects } from "@/data/projects";

const products = [
  { id: "butter-cake", name: "Classic Butter Cake", description: "Soft vanilla sponge, freshly baked for sharing.", price: 1800, color: "from-amber-200 to-orange-100" },
  { id: "chocolate-cake", name: "Chocolate Fudge Cake", description: "Rich chocolate layers with a smooth ganache.", price: 2400, color: "from-rose-200 to-amber-100" },
  { id: "ribbon-cake", name: "Ribbon Cake", description: "A colourful celebration cake with a light cream finish.", price: 2100, color: "from-pink-200 to-violet-100" },
];

type CheckoutDetails = {
  name: string;
  email: string;
  address: string;
};

const emptyCheckout: CheckoutDetails = { name: "", email: "", address: "" };

export default function RathnaStoreDemo() {
  const [cart, setCart] = useState<Record<string, number>>({});
  const [checkoutOpen, setCheckoutOpen] = useState(false);
  const [checkout, setCheckout] = useState(emptyCheckout);
  const [orderPlaced, setOrderPlaced] = useState(false);
  const project = projects.find(({ slug }) => slug === "rathna-stores");

  useReticleStore("rathna-store", { cart, checkoutOpen, orderPlaced });

  if (!project) {
    throw new Error("Rathna Stores project details are missing.");
  }

  const cartCount = Object.values(cart).reduce((total, quantity) => total + quantity, 0);
  const cartTotal = products.reduce((total, product) => total + product.price * (cart[product.id] ?? 0), 0);
  const formatPrice = (price: number) => `LKR ${price.toLocaleString("en-LK")}`;

  const updateQuantity = (productId: string, change: number) => {
    commitAndSignal(
      reticle,
      () => setCart((current) => {
        const quantity = (current[productId] ?? 0) + change;
        if (quantity <= 0) {
          const next = { ...current };
          delete next[productId];
          return next;
        }
        return { ...current, [productId]: quantity };
      }),
      "rathna:cart-updated",
      { productId, change },
    );
  };

  const openCheckout = () => {
    commitAndSignal(
      reticle,
      () => setCheckoutOpen(true),
      "rathna:checkout-opened",
      { itemCount: cartCount },
    );
  };

  const handlePlaceOrder = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    commitAndSignal(reticle, () => {
      setOrderPlaced(true);
      setCheckoutOpen(false);
      setCart({});
      setCheckout(emptyCheckout);
    }, "rathna:demo-order-placed", { itemCount: cartCount, total: cartTotal });
  };

  const handleContinueShopping = () => {
    commitAndSignal(reticle, () => {
      setOrderPlaced(false);
      setCheckoutOpen(false);
    }, "rathna:continue-shopping");
  };

  return (
    <main className="mx-auto max-w-6xl px-4 py-10 sm:px-6 lg:px-8">
      <Link href="/#projects" data-testid="project-details-back" className="mb-6 inline-flex items-center gap-2 text-sm font-medium text-slate-600 transition hover:text-sky-600 dark:text-slate-300 dark:hover:text-sky-400">
        <ArrowLeft className="h-4 w-4" suppressHydrationWarning />
        Back to projects
      </Link>

      <section className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm dark:border-slate-800 dark:bg-slate-900">
        <div className="bg-gradient-to-r from-violet-700 via-fuchsia-600 to-pink-500 px-6 py-10 text-white sm:px-10">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-white/75">Freshly baked, made to share</p>
          <div className="mt-3 flex flex-wrap items-end justify-between gap-5">
            <div>
              <h1 className="text-4xl font-semibold tracking-tight sm:text-5xl">Rathna Stores</h1>
              <p className="mt-3 max-w-2xl leading-7 text-white/85">Browse our celebration cakes and try a sample shopping journey.</p>
            </div>
            <a href={project.repositoryUrl} data-testid="project-repository" target="_blank" rel="noreferrer" className="rounded-full border border-white/40 bg-white/10 px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-white/20">
              View repository
            </a>
          </div>
        </div>

        <div className="grid gap-8 p-6 lg:grid-cols-[1fr_20rem] lg:p-10">
          <section aria-labelledby="products-heading">
            <div className="mb-5 flex items-end justify-between gap-3">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-fuchsia-600 dark:text-fuchsia-400">The bakery</p>
                <h2 id="products-heading" className="mt-1 text-2xl font-semibold text-slate-900 dark:text-white">Cakes for every occasion</h2>
              </div>
              <p className="text-sm text-slate-500 dark:text-slate-400">{cartCount} {cartCount === 1 ? "item" : "items"} in your cart</p>
            </div>

            <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
              {products.map((product) => (
                <article key={product.id} data-testid={`store-product-${product.id}`} className="overflow-hidden rounded-2xl border border-slate-200 bg-white dark:border-slate-700 dark:bg-slate-800">
                  <div className={`flex h-36 items-center justify-center bg-gradient-to-br ${product.color}`}>
                    <span aria-hidden="true" className="text-6xl">🍰</span>
                  </div>
                  <div className="p-4">
                    <h3 className="font-semibold text-slate-900 dark:text-white">{product.name}</h3>
                    <p className="mt-2 min-h-12 text-sm leading-6 text-slate-600 dark:text-slate-300">{product.description}</p>
                    <div className="mt-4 flex items-center justify-between gap-2">
                      <span className="font-semibold text-slate-900 dark:text-white">{formatPrice(product.price)}</span>
                      <button type="button" data-testid={`store-add-to-cart-${product.id}`} onClick={() => updateQuantity(product.id, 1)} className="rounded-full bg-fuchsia-600 px-3 py-2 text-sm font-semibold text-white transition hover:bg-fuchsia-500">
                        Add to cart
                      </button>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </section>

          <aside aria-labelledby="cart-heading" className="h-fit rounded-2xl border border-slate-200 bg-slate-50 p-5 dark:border-slate-700 dark:bg-slate-800">
            <h2 id="cart-heading" className="text-xl font-semibold text-slate-900 dark:text-white">Your cart</h2>

            {orderPlaced ? (
              <div className="mt-5" role="status" data-testid="store-order-confirmation">
                <p className="font-semibold text-emerald-700 dark:text-emerald-300">Demo order placed successfully.</p>
                <p className="mt-2 text-sm leading-6 text-slate-600 dark:text-slate-300">This was a sample checkout. No payment was taken and no order was sent to the store.</p>
                <button type="button" onClick={handleContinueShopping} className="mt-4 rounded-full border border-slate-300 px-4 py-2 text-sm font-semibold text-slate-700 transition hover:border-fuchsia-400 dark:border-slate-600 dark:text-slate-100">
                  Continue shopping
                </button>
              </div>
            ) : checkoutOpen ? (
              <form data-testid="store-checkout-form" className="mt-5 space-y-4" onSubmit={handlePlaceOrder}>
                <p className="text-sm text-slate-600 dark:text-slate-300">Demo checkout · no payment is collected.</p>
                <label className="block text-sm font-medium text-slate-700 dark:text-slate-200">
                  Name
                  <input data-testid="store-checkout-name" required autoComplete="name" value={checkout.name} onChange={(event) => setCheckout((current) => ({ ...current, name: event.target.value }))} className="mt-1.5 w-full rounded-xl border border-slate-300 bg-white px-3 py-2.5 text-slate-900 outline-none focus:border-fuchsia-500 focus:ring-2 focus:ring-fuchsia-500/20 dark:border-slate-600 dark:bg-slate-900 dark:text-white" />
                </label>
                <label className="block text-sm font-medium text-slate-700 dark:text-slate-200">
                  Email
                  <input data-testid="store-checkout-email" required type="email" autoComplete="email" value={checkout.email} onChange={(event) => setCheckout((current) => ({ ...current, email: event.target.value }))} className="mt-1.5 w-full rounded-xl border border-slate-300 bg-white px-3 py-2.5 text-slate-900 outline-none focus:border-fuchsia-500 focus:ring-2 focus:ring-fuchsia-500/20 dark:border-slate-600 dark:bg-slate-900 dark:text-white" />
                </label>
                <label className="block text-sm font-medium text-slate-700 dark:text-slate-200">
                  Delivery address
                  <textarea data-testid="store-checkout-address" required autoComplete="street-address" rows={3} value={checkout.address} onChange={(event) => setCheckout((current) => ({ ...current, address: event.target.value }))} className="mt-1.5 w-full resize-y rounded-xl border border-slate-300 bg-white px-3 py-2.5 text-slate-900 outline-none focus:border-fuchsia-500 focus:ring-2 focus:ring-fuchsia-500/20 dark:border-slate-600 dark:bg-slate-900 dark:text-white" />
                </label>
                <button type="submit" data-testid="store-place-demo-order" className="w-full rounded-full bg-fuchsia-600 px-4 py-3 text-sm font-semibold text-white transition hover:bg-fuchsia-500">
                  Place demo order
                </button>
                <button type="button" onClick={() => setCheckoutOpen(false)} className="w-full rounded-full border border-slate-300 px-4 py-2.5 text-sm font-semibold text-slate-700 transition hover:border-fuchsia-400 dark:border-slate-600 dark:text-slate-100">
                  Back to cart
                </button>
              </form>
            ) : (
              <>
                {cartCount === 0 ? (
                  <p className="mt-4 text-sm leading-6 text-slate-600 dark:text-slate-300">Your cart is empty. Add a cake to start a sample order.</p>
                ) : (
                  <ul className="mt-4 divide-y divide-slate-200 dark:divide-slate-700">
                    {products.filter((product) => cart[product.id]).map((product) => (
                      <li key={product.id} className="flex items-center justify-between gap-3 py-3">
                        <div>
                          <p className="text-sm font-medium text-slate-800 dark:text-slate-100">{product.name}</p>
                          <p className="mt-1 text-xs text-slate-500 dark:text-slate-400">{formatPrice(product.price)} each</p>
                        </div>
                        <div className="flex items-center gap-2">
                          <button type="button" aria-label={`Remove one ${product.name}`} data-testid={`store-decrease-${product.id}`} onClick={() => updateQuantity(product.id, -1)} className="rounded-full border border-slate-300 p-1.5 text-slate-700 dark:border-slate-600 dark:text-slate-100">
                            <Minus className="h-3.5 w-3.5" />
                          </button>
                          <span className="min-w-5 text-center text-sm font-semibold text-slate-900 dark:text-white">{cart[product.id]}</span>
                          <button type="button" aria-label={`Add one ${product.name}`} data-testid={`store-increase-${product.id}`} onClick={() => updateQuantity(product.id, 1)} className="rounded-full border border-slate-300 p-1.5 text-slate-700 dark:border-slate-600 dark:text-slate-100">
                            <Plus className="h-3.5 w-3.5" />
                          </button>
                        </div>
                      </li>
                    ))}
                  </ul>
                )}

                <div className="mt-5 flex items-center justify-between border-t border-slate-200 pt-4 dark:border-slate-700">
                  <span className="text-sm font-medium text-slate-600 dark:text-slate-300">Subtotal</span>
                  <span data-testid="store-subtotal" className="font-semibold text-slate-900 dark:text-white">{formatPrice(cartTotal)}</span>
                </div>
                <button type="button" data-testid="store-proceed-checkout" disabled={cartCount === 0} onClick={openCheckout} className="mt-5 w-full rounded-full bg-slate-900 px-4 py-3 text-sm font-semibold text-white transition hover:bg-slate-700 disabled:cursor-not-allowed disabled:bg-slate-400 dark:bg-fuchsia-600 dark:hover:bg-fuchsia-500 dark:disabled:bg-slate-600">
                  Proceed to checkout
                </button>
                <p className="mt-3 text-center text-xs leading-5 text-slate-500 dark:text-slate-400">Sample storefront only. This demo does not accept payment or submit orders.</p>
              </>
            )}
          </aside>
        </div>
      </section>
    </main>
  );
}
