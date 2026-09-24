# THE DRINKERS — Official Website

Professional band website and merchandise storefront for The Drinkers from Litija, Slovenia.

## Stack
- Next.js 16 App Router
- React 19
- TypeScript
- CSS-first responsive UI
- Vercel-ready
- npm lockfile with reproducible CI install

## Current site
- 2026 comeback presentation and verified current lineup
- New single: **Ni še umru**
- Live section with the publicly announced **25.09.2026 · Blunout · Domžale** show
- Press / booking information hub
- Historical discography presented as releases: albums, single, EP and compilation
- Responsive navigation and mobile menu
- Functional local cart selection for merch
- Accessible cart dialog with Escape handling and background scroll locking
- Open Graph, Twitter metadata and Schema.org MusicGroup / MusicEvent data

## Verification
GitHub Actions validates:
1. `npm ci`
2. `npm audit --audit-level=high`
3. `npm run build`

The latest production-polish CI run is green.

## Content sources
Current 2026 lineup / comeback / single:
- Rockline: https://www.rockline.si/opojni-napitki-eksoticne-plesalke-in-zupnik-the-drinkers-so-nazaj/
- Blunout/Kultura.net: https://kultura.media.si/event/blunout-the-drinkers-25-09-2026
- Rocker.si: https://www.rocker.si/the-drinkers-so-nazaj-sin-pokojnega-kolija-za-mikrofonom-v-novi-pesmi-ni-se-umru/

Historical discography:
- Obrazi slovenskih pokrajin: https://www.obrazislovenskihpokrajin.si/oseba/sandi-kolenc/
- Delo: https://www.delo.si/kultura/glasba/the-drinkers-dve-desetletji-drinknrolla

## Important
The shop currently demonstrates the product browsing/cart UX without pretending that payment processing, stock, sizes, shipping or checkout are live.

The 2026 press photo used as a temporary reference is explicitly marked in the UI as requiring rights confirmation before production use. It should be replaced by an authorized high-resolution press asset before final public launch.

No invented booking email or unverified social profile is published.

## Development
npm ci
npm run dev
