"use client";

import Link from "next/link";
import { useId, useState } from "react";
import type { Product } from "@/content/products";
import { SmartImage } from "@/components/ui/SmartImage.client";

/**
 * Catalogue card. Four fields for scanning a grid; the detail page carries the
 * full specification.
 *
 * The whole card navigates, but via a *stretched link* — the <Link> only wraps
 * the product name and covers the card with a `::before` overlay — rather than
 * an <a> wrapped around the entire card. That is what lets the accessories
 * toggle be a real focusable <button>: a button nested inside an anchor is
 * invalid HTML, and browsers/AT disagree about which control they are
 * activating. The link keeps the product name as its accessible name, and
 * anything that must sit above the overlay (the toggle, the drawer) is
 * `relative z-10`.
 */
export function ProductCard({ product }: { product: Product }) {
  const [open, setOpen] = useState(false);
  const panelId = useId();
  const accessories = product.accessories ?? [];
  const hasAccessories = accessories.length > 0;

  return (
    <article className="card group relative flex h-full flex-col overflow-hidden transition-colors hover:border-blue-300">
      <div className="flex aspect-[4/3] items-center justify-center bg-white p-4">
        <SmartImage
          src={product.images[0]}
          alt={`${product.name} BMS render`}
          ratio="4 / 3"
          fit="contain"
          className="h-full w-full object-center"
          placeholderLabel={product.name.toUpperCase()}
        />
      </div>
      <div className="flex flex-1 flex-col p-6">
        <div className="flex flex-wrap items-center gap-2">
          <span
            className={`micro-label rounded-full border px-2.5 py-1 ${
              product.application === "BESS"
                ? "border-teal-300 bg-teal-50 text-teal-700"
                : "border-blue-300 bg-blue-50 text-blue-700"
            }`}
          >
            {product.application}
          </span>
          <span className="type-small text-grey-400">{product.otherApplications}</span>
        </div>
        <h3 className="type-h4 mt-3 min-h-[3.9rem] leading-snug group-hover:text-blue-700">
          <Link
            href={`/products/${product.slug}`}
            className="before:absolute before:inset-0 before:z-0 before:content-['']"
          >
            {product.name}
          </Link>
        </h3>
        <dl className="mt-5 grid grid-cols-2 gap-x-5 gap-y-4 border-t border-grey-100 pt-5">
          <div><dt className="micro-label">Nominal voltage</dt><dd className="spec-value mt-1 text-ink">{product.nominalVoltage}</dd></div>
          <div><dt className="micro-label">Continuous current</dt><dd className="spec-value mt-1 text-ink">{product.continuousCurrent}</dd></div>
        </dl>
        <p className="spec-value mt-4 text-ink-soft">{product.cellConfiguration}</p>

        <div className="mt-auto flex items-end justify-between gap-3 pt-5">
          <p className="micro-label micro-label--blue">Full specification sheet →</p>
          {hasAccessories && (
            <button
              type="button"
              onClick={() => setOpen((v) => !v)}
              aria-expanded={open}
              aria-controls={panelId}
              className="relative z-10 -my-2 -mr-1 flex shrink-0 items-center gap-1.5 rounded-[4px] px-2 py-2 text-grey-500 transition-colors hover:text-blue-700"
            >
              <span
                aria-hidden="true"
                className={`flex h-5 w-5 items-center justify-center rounded-full border border-current transition-transform duration-200 ${
                  open ? "rotate-45" : ""
                }`}
              >
                {/* Plus, in the site's icon language: thin stroke, round caps,
                    currentColor. Rotating 45° turns it into a close affordance
                    without swapping the glyph. */}
                <svg width="11" height="11" viewBox="0 0 12 12" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round">
                  <path d="M6 1.5v9M1.5 6h9" />
                </svg>
              </span>
              <span className="micro-label !text-current">Accessories</span>
            </button>
          )}
        </div>

        {hasAccessories && (
          <div
            id={panelId}
            hidden={!open}
            className="accessory-panel relative z-10 mt-5 border-t border-grey-100 pt-5"
          >
            {/* 3-up: a list of three lands as a single row. */}
            <ul className="grid grid-cols-3 gap-3">
              {accessories.map((a) => (
                <li key={a.name} className="min-w-0">
                  <div className="flex aspect-square items-center justify-center rounded-[4px] border border-grey-200 bg-white p-1.5">
                    <SmartImage
                      src={a.image}
                      alt={`${a.name} accessory`}
                      ratio="1 / 1"
                      fit="contain"
                      className="h-full w-full"
                      placeholderLabel=""
                    />
                  </div>
                  <p className="micro-label mt-2 !text-[0.6875rem] !tracking-[0.06em] break-words">
                    {a.name}
                  </p>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </article>
  );
}
