# Customer Logo Documentation

The customer logo placeholders have been replaced with named customer assets in:

`public/logos/customers/`

## Assets

| Customer | File | Notes |
| --- | --- | --- |
| Greaves Electric Mobility | `public/logos/customers/greaves-electric-mobility.svg` | Recreated as a clean SVG from the supplied client-logo sheet. |
| Kinetic Green | `public/logos/customers/kinetic-green.svg` | Recreated as a clean SVG from the supplied client-logo sheet. |
| EKA Mobility | `public/logos/customers/eka.svg` | Recreated as a clean SVG from the supplied client-logo sheet. |
| Terra Motors | `public/logos/customers/terra-motors.svg` | Recreated as a clean SVG from the supplied client-logo sheet. |
| BAXY Mobility | `public/logos/customers/baxy-mobility.svg` | Recreated as a clean SVG from the supplied client-logo sheet. |
| General Aeronautics | `public/logos/customers/general-aeronautics.svg` | Recreated as a clean SVG from the supplied client-logo sheet. |
| Livguard | `public/logos/customers/livguard.svg` | Pulled from Livguard's public site header asset. |
| Eastman | `public/logos/customers/eastman.svg` | Recreated as a clean SVG from the supplied customer-logo sheet to match the requested "Empowering Lives" variant. |
| Replus | `public/logos/customers/replus.png` | Pulled from Replus Engitech's public site Open Graph/logo asset. |
| Su-Kam | `public/logos/customers/su-kam.png` | Pulled from Su-Kam's public site logo asset. |
| Trontek | `public/logos/customers/trontek.svg` | Recreated as a clean SVG from the supplied customer-logo sheet because the public site exposed a white footer logo. |
| Inverted | `public/logos/customers/inverted.svg` | Recreated as a clean SVG from the supplied customer-logo sheet because the public site exposed only an icon/favicon. |
| Battrixx | `public/logos/customers/battrixx.png` | Pulled from Battrixx's public site logo asset. |
| JP Minda Group | `public/logos/customers/jp-minda.svg` | Pulled from JP Minda Group's public site logo asset. |
| Cygni | `public/logos/customers/cygni.png` | Pulled from Cygni's public site logo asset. |
| Neuron Energy | `public/logos/customers/neuron-energy.png` | From `Assets/Logos/Clients/neuron-energy.png`, flattened to white and re-encoded (465KB -> 10KB). |
| Geon | `public/logos/customers/geon.png` | From `Assets/Logos/Clients/Geon.webp`, white-trimmed (the source carried ~25% padding, which the rail's area-normalization would have read as part of the logo) and converted to PNG. |

> Note: the rows above this point are out of date — several list `.svg` files
> that are now `.png`, and some customers (Livguard, Su-Kam, Battrixx, JP
> Minda, Cygni) are no longer in `customerLogos`. `src/content/company.ts` is
> the authority for what actually renders.

## Site Wiring

The customer logo list is defined in:

`src/content/company.ts`

The list now maps the logo rail to the named customer files above instead of the old numbered placeholders.

## Partner Assets

The partner logo files are in:

`public/logos/partners/`

| Partner | File | Notes |
| --- | --- | --- |
| iCreate | `public/logos/partners/icreate.svg` | Rail-optimized transparent SVG based on `Assets/Logos/Engineering Partners/iCreate_Logo_Incubator & Investor.png`. |
| STMicroelectronics | `public/logos/partners/stmicroelectronics.svg` | Copied from `Assets/Logos/Engineering Partners/ST_logo_Hardware Partner.svg`. |
| Texas Instruments | `public/logos/partners/texas-instruments.svg` | Rail-optimized transparent SVG based on `Assets/Logos/Engineering Partners/Texas-Instruments-Logo_Hardware Partner.png`. |
| Kinetic Communications Limited | `public/logos/partners/kinetic-communications.svg` | Clean transparent SVG based on `Assets/Logos/Engineering Partners/Kinteic_Communications_logo_EMS Partners.jpg`. |
| Arrow | `public/logos/partners/arrow.svg` | Clean transparent SVG based on `Assets/Logos/Engineering Partners/Arrow_Logo_Semiconductor Supply Chain.png`. |

The partner grouping remains defined in `src/content/company.ts`.

## Product Photo

The 4G/IoT Telematics product photo was extracted from page 3, right side, of:

`Assets/Webber_ElectroCorp Profile April 2026.pdf`

It has been exported into the product-page asset paths:

- `public/images/products/telematics-4g/pdf-board-extract.png`
- `public/images/products/telematics-4g/front.webp`
- `public/images/products/telematics-4g/top.webp`

The product detail page and product cards already read from `front.webp` through `src/content/products.ts`, so no extra route wiring was needed.
