# Unslop pass

Done with the unslop skill (by Damir Sokolovsky, @heydamir, CC BY 4.0), 24 November 2026.

## Audit

Slop level: medium. A real poster look underneath (Unbounded, lime on near-black), with a lot of AI-default effects on top.

- Gradient text on the album title in the hero (`index.astro`, `.release`)
- Violet and magenta radial washes behind the hero (`index.astro`)
- Looping motion: the record spinning forever behind the sleeve, and the city ticker scrolling forever (`index.astro`)
- Magenta to violet gradients inside the cover art (`Cover.astro`)
- Headings at weight 800, logo, prices and labels at 700 to 800
- Uppercase tracked labels everywhere: section kickers, the band name over the title, nav links, player service tags, form labels, tour months, "Past shows", footer links, press kit facts
- City names and merch names set in the uppercase display face, so every line shouted
- Buttons jumping up and left with a magenta offset shadow on hover; merch cards lifting 4px
- Tour rows getting a lime gradient wash on hover
- "Sold out" as a dashed magenta badge
- Three buttons in the hero (Spotify, Apple Music, Bandcamp)
- Zero-padded dates ("04", "05")
- Hype in the tour intro ("Tickets go fast")
- Outlined giant wordmark in the footer
- Magenta accent bars on quotes, lime on every press kit heading, so nothing led

## Direction

- Product: the home of a four-piece synth-rock band, for the new album, tour dates, merch and press
- Character: loud, homemade, after-hours
- World: gig flyers on a telephone pole, a farmhouse studio in a Minnesota winter, the van between towns
- Moments: the Static Bloom sleeve with the record sliding out of it, and the tour list set like a flyer
- Signature: the short lime rule before each section label

## What changed

- Spacing: tour date block with a fixed 4px gap between month and day; press members in two even columns instead of three and an orphan
- Color: washes and gradient text removed; lime is the one accent (primary buttons, labels, the signature rule); magenta stays only inside the artwork and the logo dot; cover art uses flat magenta instead of a magenta to violet blend; quote bars are hairlines
- Copy: "Tickets go fast" dropped; the hero keeps Spotify and Apple Music as buttons, with Bandcamp as a quiet "Also on" link below
- Type: display headings stay uppercase (it's the band's poster face) at 600 instead of 800; everything small is sentence case at normal tracking; cities, merch names and press headings move to Space Grotesk at 600; dates read "Dec 4", day numbers tabular
- Details: "Sold out" is muted text; merch prices plain tabular text; the footer wordmark is solid and quiet instead of outlined
- Motion: the record and the ticker stand still; buttons change color on hover and press down slightly; no lifts or offset shadows; one easing curve

screenshot-2: Home, tour dates
screenshot-3: Press kit page
