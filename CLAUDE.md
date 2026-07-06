# CLAUDE.md
# Emma Kwon Official Site Production System v2.0

> Read this file first.
>
> This is the master instruction file for building the official Emma Kwon website in VS Code with Claude Code.
>
> The first job is not coding.
> The first job is interviewing Emma Kwon, locking the direction, then building with care.

---

## 0. Start Here

When Claude Code opens this project, it must immediately follow this order.

```text
1. Read this CLAUDE.md.
2. Do not build yet.
3. Do not initialize git yet.
4. Do not push to GitHub yet.
5. Do not connect Cloudflare yet.
6. Start Interview Mode.
7. Ask Emma only the questions needed for the current phase.
8. After each interview phase, summarize and wait for approval.
9. Build only after Emma says: APPROVE BUILD.
10. Push only after lint and build pass, and Emma says: APPROVE PUSH.
```

This is the official Emma Kwon site.

It is not a landing page.
It is not a temporary portfolio.
It is not an EMMAESTRO only music site.
It is not a startup website.
It is not an AI tool site.

It is a luxury maison style official website for Emma Kwon.

---

## 1. Project Lock

```text
Project name:
Emma Kwon Official Site

Target domain:
emmakwon.com

Domain status:
To be purchased later

GitHub repository name:
emmakwon-com

GitHub remote:
https://github.com/k-mama/emmakwon-com.git

GitHub repository page:
https://github.com/k-mama/emmakwon-com

Default branch:
main

Cloudflare Pages project name:
emmakwon-com

Deployment target:
Cloudflare Pages

Production branch:
main

Deployment flow:
VS Code -> GitHub main branch -> Cloudflare Pages automatic deployment

Cloudflare build command:
npm run build

Cloudflare build output directory:
out

Root directory in Cloudflare:
Leave blank if project is in repository root

Local preview:
Optional only

Required checks before push:
npm run lint
npm run build
```

The site must be built as if it could be seen by a global audience.

Quiet.
Expensive.
Cinematic.
Alive.
Precise.

---

## 2. Root Brand Architecture

Emma Kwon is the root brand.

```text
Emma Kwon =
person
author
creator
founder
producer
designer
publisher
music maker
the root identity behind every room
```

Primary rooms under Emma Kwon:

```text
1. EMMAESTRO
Official music artist brand

2. Amazing Tiger Publishing
Publishing imprint and book production business

3. BORN RARE
Literary memoir by Emma Kwon

4. Works
Luxury gallery of built work

5. K-MAMA
Children's content and family creative brand

6. Contact
Connection point
```

Correct hierarchy:

```text
Emma Kwon
├─ EMMAESTRO
│  └─ Official music artist brand
│
├─ Amazing Tiger Publishing
│  └─ Publishing imprint and book production
│
├─ BORN RARE
│  └─ Literary memoir
│
├─ Works
│  └─ Websites, cosmetic packaging, containers, bag design, brand objects, publishing work
│
└─ K-MAMA
   ├─ Coloring Books
   ├─ Kids Songs
   ├─ Learning Comic Video Series
   └─ Reels Wave Kids
```

Critical rule:

```text
Emma Kwon is the house.
Everything else is a room.
```

Do not treat EMMAESTRO as the root identity for the whole website.

EMMAESTRO is the official music artist brand.

---

## 3. Do Not Use

Never use these as public brand labels for this project:

```text
LUMA
Emma Lumi
AI Unicorn Studio
Studio as a main menu
landingpage
EMMAESTRO as the root identity
Vercel as the deployment target
pastel creative template
generic AI portfolio
```

Do not create these top level routes unless Emma explicitly asks later:

```text
/studio
/universe
/worlds
/journal
/reels-wave-kids
```

Do not call this project a landing page.

---

## 4. Official Public Assets

### 4.1 Social

Primary public social channel:

```text
Instagram:
@the_real_emma_kwon
https://www.instagram.com/the_real_emma_kwon
```

Instagram role:

```text
BORN RARE posts
Emma Kwon public voice
creative process notes
music and book updates
soft audience building
```

Facebook exists, but do not feature it in the first global launch.

```text
Facebook:
Eunjung Kwon
https://www.facebook.com/eunjung.kwon.391

Role:
Personal Korean network only
```

Website rule:

```text
Add Instagram in the footer.
Add Instagram on the Contact page.
Reference Instagram on the BORN RARE page for ongoing chapter posts.
Do not add Facebook unless Emma asks later.
```

### 4.2 Music

Official music artist brand:

```text
EMMAESTRO
```

Music proof:

```text
3 Spotify albums
2 Apple Music albums currently provided
20 songs released worldwide
```

Spotify album links:

```text
https://open.spotify.com/album/73jtNDnHgNkRqpBbIuyBoT
https://open.spotify.com/album/7wwePbfKpU75puc1l2C8dD
https://open.spotify.com/album/1FL6HJ0lR24MloZXWe3fYE
```

Apple Music album links:

```text
https://music.apple.com/au/album/sly-fairy/6785117705
https://music.apple.com/au/album/no-deadline-to-be-okay-ep/6787253426
```

Music rule:

```text
Use EMMAESTRO as the artist name.
Do not use Emma Lumi.
Do not use LUMA.
Do not use K-MAMA as the music artist name.
```

### 4.3 BORN RARE

```text
Title:
BORN RARE

Author:
Emma Kwon

Status:
Published on Amazon
```

Public purchase links:

```text
Kindle:
https://www.amazon.com/BORN-RARE-Emma-Kwon-ebook/dp/B0GX33CZQV

Paperback:
https://www.amazon.com/BORN-RARE-Emma-Kwon/dp/B0H3VPPWD8

Hardcover:
Public Amazon link needed before final launch
```

Book page rule:

```text
Show BORN RARE as live.
Do not show it as coming soon.
Do not show KDP dashboard information.
Do not show internal setup status.
Use clean public Amazon links only.
```

### 4.4 K-MAMA Published Assets

K-MAMA is Emma Kwon's children's content and family creative brand.

K-MAMA includes:

```text
coloring books
kids songs
learning comic video series
Reels Wave Kids
```

Reels Wave Kids belongs under K-MAMA.
It is not a top level brand.

Published product line:

```text
K-MAMA's Luxury Fashion Coloring Book

Author name:
Emma Kwon

Published format:
Paperback
```

English edition:

```text
Title:
K-MAMA's Luxury Fashion Coloring Book for Teens and Adults:
45 Stunning Illustrations Stitched with Emma Kwon's Happiness Wisdom

ASIN:
B0DRDDH5Q3

URL:
https://www.amazon.com/K-MAMAs-Luxury-Fashion-Coloring-Adults/dp/B0DRDDH5Q3
```

French edition:

```text
Title:
K-MAMA's Luxury Fashion Coloring Book for Teens and Adults (French Edition):
45 Stunning Illustrations Stitched with Emma Kwon's Happiness Wisdom

ASIN:
B0DSSTSX12

URL candidate:
https://www.amazon.com/dp/B0DSSTSX12

Action before final launch:
Copy final public URL from KDP View on Amazon.
```

German edition:

```text
Title:
K-MAMA's Luxury Fashion Coloring Book for Teens and Adults (Deutsche Ausgabe, 독일어판):
45 Stunning Illustrations Stitched with Emma Kwon's Happiness Wisdom

ASIN:
B0DRTG5MJ5

URL:
https://www.amazon.com/K-MAMAs-Fashion-Coloring-Deutsche-Ausgabe/dp/B0DRTG5MJ5
```

K-MAMA public rule:

```text
Do not show prices unless Emma asks.
Do not expose KDP dashboard details.
Show these as published Amazon products.
Keep K-MAMA warm, premium, family friendly, and K culture aware.
Do not make it childish or cheap.
```

---

## 5. Interview Mode

Claude must interview Emma before building.

Do not ask everything at once.
Ask in phases.
Ask no more than 5 questions at a time.
Prefer 3 questions when possible.
After each phase, summarize the answers and ask for approval.

Use this format:

```text
Current Understanding
Interview Questions
Assumptions
What I will lock after your answer
```

After Emma answers, output:

```text
Locked Summary
Open Points
Recommended Direction
Next Interview Phase
```

Do not move to the next phase until Emma approves.

### Phase A. Brand Core Interview

Ask:

```text
1. Should the first screen show only "Emma Kwon," or "Emma Kwon" with a small subtitle?
2. Which room should feel strongest on the first screen: BORN RARE, EMMAESTRO, or the whole maison?
3. Should the first launch feel more like a luxury brand site, a literary site, or a hybrid with luxury first?
```

Default assumptions:

```text
Logo:
Emma Kwon

First screen:
Emma Kwon as the house

Mood:
Luxury maison first, literary underneath
```

### Phase B. Site Content Interview

Ask:

```text
1. Do you want BORN RARE to be placed before EMMAESTRO on the home page, or EMMAESTRO before BORN RARE?
2. Should Amazing Tiger Publishing be shown as a small imprint or as a serious publishing room?
3. Should Works show placeholders first, or wait until real images are provided?
```

Default assumptions:

```text
Home order:
Emma Kwon
BORN RARE
EMMAESTRO
Amazing Tiger Publishing
Works
K-MAMA
Contact

Amazing Tiger Publishing:
Small but serious publishing imprint

Works:
Elegant placeholders allowed until real images are provided
```

### Phase C. Visual Direction Interview

Ask:

```text
1. Should the first design be mostly black and champagne, or ivory and champagne?
2. Should the hero feel more like a luxury fashion house or a quiet Apple product reveal?
3. Do you want a dramatic full screen hero, or a quieter editorial opening?
```

Default assumptions:

```text
Palette:
black
ivory
champagne
deep gold
muted bronze

Hero:
dramatic but quiet

No pastel main palette
```

### Phase D. Launch Interview

Ask:

```text
1. Should the first version use a simple Contact page without email backend?
2. Should GitHub push happen immediately after lint and build pass, or only after Emma reviews the generated files?
3. Should Cloudflare Pages be connected right after first push?
```

Default assumptions:

```text
Contact:
simple static Contact page first

GitHub:
push only after lint and build pass and Emma approves

Cloudflare:
connect after first push and Emma approves
```

---

## 6. Dream Team Operating Model

Claude must work as a coordinated professional team.

### 6.1 Executive Creative Director

Main job:

```text
Keep Emma Kwon as the root.
Make every room feel intentional.
Reject anything ordinary.
```

Main question:

```text
Does this make Emma Kwon feel more precise, more premium, and more real?
```

### 6.2 Apple Level Product Designer

Responsible for:

```text
spacing
typography
screen rhythm
negative space
motion
hierarchy
small details
premium restraint
```

Do not copy Apple.
Use only principles:

```text
clarity
restraint
precision
beautiful hierarchy
quiet confidence
```

### 6.3 Luxury Maison Art Director

Do not copy Louis Vuitton.
Use only principles:

```text
brand first
collection like rooms
strong visual entrances
few words
beautiful objects
editorial pacing
```

### 6.4 Brand Architect

Locks:

```text
Emma Kwon = root
EMMAESTRO = music artist brand
Amazing Tiger Publishing = publishing imprint
BORN RARE = memoir
Works = luxury gallery
K-MAMA = children's content brand
Reels Wave Kids = K-MAMA channel
```

### 6.5 Copy Director

Writes public English copy that is:

```text
short
exact
warm
quietly confident
human
not too symmetrical
not slogan heavy
not AI smelling
```

Avoid hyphens unless required for correctness or a fixed term.

### 6.6 Music Brand Director

Keeps EMMAESTRO clean and strong.

Must show:

```text
3 albums
20 songs
streaming worldwide
Spotify
Apple Music
```

### 6.7 Publishing Brand Director

Makes Amazing Tiger Publishing feel like a small real imprint.

Focus:

```text
book production
author projects
Esther Cho book project
future publishing work
```

### 6.8 Works Gallery Curator

Designs Works as a luxury gallery, not a freelance portfolio.

Includes:

```text
websites
DUFERI homepage
Esther Cho homepage
cosmetic packaging
cosmetic containers
bag design
publishing projects
brand objects
```

### 6.9 K-MAMA Producer

Keeps K-MAMA warm, premium, family friendly, and tied to K culture.

Includes:

```text
K-MAMA's Luxury Fashion Coloring Book
English edition
French edition
German edition
kids songs
learning comic video series
Reels Wave Kids
```

### 6.10 Frontend Architect

Responsible for:

```text
Next.js App Router
TypeScript
Tailwind CSS
static export
content files
accessibility
performance
Cloudflare Pages compatibility
```

### 6.11 Cloudflare Deployment Manager

Responsible for:

```text
GitHub main branch flow
Cloudflare Pages settings
build command
out directory
first deployment checklist
future custom domain setup
```

### 6.12 SEO and Global Sharing Manager

Responsible for:

```text
metadata
Open Graph
sitemap
robots
clean titles
share images
search friendly structure
```

### 6.13 QA Director

Must reject the site if it feels:

```text
cheap
template like
AI generated
ordinary
confusing
too soft
too childish
too sales heavy
```

---

## 7. Site Identity

This website is:

```text
Emma Kwon Official Site
```

It is also:

```text
a luxury maison style creator site
a public home for books, music, publishing, children's content, and designed work
a global brand house that starts small but can grow
```

It is not:

```text
a landing page
a simple author bio page
a music only page
a startup website
a portfolio dump
a blog first website
a store first website
```

North Star:

```text
Emma Kwon is the house.
Everything else is a room.
```

---

## 8. Information Architecture Lock

Top navigation:

```text
EMMAESTRO
Amazing Tiger Publishing
BORN RARE
Works
K-MAMA
Contact
```

Logo:

```text
Emma Kwon
```

Initial routes:

```text
/
/emmaestro
/amazing-tiger-publishing
/born-rare
/works
/k-mama
/contact
```

Optional future routes:

```text
/works/[slug]
/books/[slug]
/music/[slug]
/k-mama/coloring-books
/k-mama/reels-wave-kids
/k-mama/kids-songs
/k-mama/learning-comics
```

---

## 9. Page Strategy

### 9.1 Home

Purpose:

```text
The entrance to Emma Kwon's official house.
```

Must show:

```text
Emma Kwon as root
EMMAESTRO as music artist brand
BORN RARE as literary memoir
Amazing Tiger Publishing as publishing imprint
Works as gallery
K-MAMA as children's content brand
Instagram as living window
```

Hero draft direction:

```text
Emma Kwon

A house of music, books, publishing,
children's worlds, and designed objects.
```

Do not overexplain.

The first screen must feel quiet, expensive, and difficult to ignore.

### 9.2 EMMAESTRO

Purpose:

```text
Official music artist page.
```

Must show:

```text
EMMAESTRO
Official music artist brand by Emma Kwon
3 albums
20 songs
Streaming worldwide
Spotify album links
Apple Music album links
```

Tone:

```text
Music first.
Not book appendix.
Not personal diary.
Not K-MAMA.
```

### 9.3 Amazing Tiger Publishing

Purpose:

```text
Publishing imprint and book production house.
```

Must show:

```text
Small but real publishing imprint
BORN RARE
K-MAMA coloring books
Esther Cho book project
future author projects
book production capacity
```

Tone:

```text
serious
warm
editorial
trustworthy
not corporate
not fake large company
```

### 9.4 BORN RARE

Purpose:

```text
Official book page for BORN RARE.
```

Must show:

```text
BORN RARE by Emma Kwon
literary memoir
available on Amazon
Kindle link
Paperback link
Hardcover link later
Instagram chapter posts
```

Tone:

```text
literary
quiet
not trauma marketing
not motivational
not salesy
```

### 9.5 Works

Purpose:

```text
Luxury gallery of things Emma Kwon has made.
```

Categories:

```text
Websites
Cosmetic Packaging
Cosmetic Containers
Bag Design
Publishing Projects
Brand Objects
```

Must include or prepare for:

```text
DUFERI homepage
DUFERI cosmetic packaging
DUFERI HOMME package concepts
cosmetic container design
bag design
Esther Cho homepage
BORN RARE
K-MAMA coloring books
Esther Cho book project
```

Tone:

```text
gallery
editorial
luxury portfolio
few words
large visual rhythm
```

Do not make it look like a freelance service page.

### 9.6 K-MAMA

Purpose:

```text
Children's content and family creative brand by Emma Kwon.
```

Sections:

```text
Coloring Books
Kids Songs
Learning Comic Video Series
Reels Wave Kids
```

Must show:

```text
K-MAMA's Luxury Fashion Coloring Book
English edition
French edition
German edition
6 kids songs currently released
Reels Wave Kids as YouTube channel under K-MAMA
Learning comic video series coming later
```

Tone:

```text
warm
premium
bright enough
not childish
not cheap
K culture aware
```

### 9.7 Contact

Purpose:

```text
Connection point.
```

Inquiry types:

```text
Publishing Inquiry
Book Production Inquiry
Music Inquiry
Website and Brand Work Inquiry
Interview or Media Inquiry
K-MAMA Collaboration
Works Inquiry
General Message
```

First version may use:

```text
mailto link
or static contact page with Instagram
```

Do not add email backend until Emma asks.

---

## 10. Content System

Use file based content first.

Recommended structure:

```text
content/
  site.json
  navigation.json
  home.json
  emmaestro.json
  born-rare.json
  publishing.json
  works.json
  k-mama.json
  contact.json
  assets.json
```

Do not hardcode public asset links directly in components when they can live in content files.

All public URLs should live in content files.

---

## 11. Visual Design System

Design direction:

```text
Luxury maison
Apple level taste
Louis Vuitton level house principle
No copying
Quiet drama
Cinematic light
Premium materials
Strong negative space
Editorial pacing
```

Palette:

```text
Obsidian Black: #070707
Soft Black: #11100E
Warm Ivory: #F7F1E8
Pearl White: #FCFAF6
Liquid Champagne: #D8C6A3
Deep Tiger Gold: #B88A3B
Muted Bronze: #7A5A35
Soft Smoke: #8D8780
```

Color rules:

```text
Use black, ivory, champagne, and shadow as the main world.
Use gold sparingly.
Use color as a rare accent.
Do not use pastel palette as the main identity.
Do not use mint, lilac, coral, or rose as main colors.
Do not use loud gradients.
```

Typography:

```text
Use only two font families first.
Use an editorial display serif for headings.
Use a clean premium sans serif for body and UI.
```

Layout:

```text
large cinematic hero
strong vertical rhythm
full width editorial panels
thin champagne lines
large cards with visual weight
gallery sections
quiet hover states
```

Avoid:

```text
busy grids
many small cards
stock icons
cheap shadows
template hero sections
overcrowded navigation
```

Motion allowed:

```text
slow opacity reveal
small vertical reveal
subtle image scale
soft light movement
hover glow in tiny amount
```

Motion forbidden:

```text
bounce
spin
flash
heavy parallax
motion that blocks reading
meaningless animation
```

Respect reduced motion.

---

## 12. Technical Stack

Use:

```text
Next.js App Router
TypeScript
Tailwind CSS
Static export
Content files
Cloudflare Pages
GitHub auto deployment
```

Next config must include:

```ts
const nextConfig = {
  output: "export",
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
```

Do not use in the first version:

```text
database
auth
payment
server required pages
API routes that break static export
Vercel specific features
```

---

## 13. Cloudflare Pages Rules

Cloudflare settings:

```text
Framework preset:
Next.js

Build command:
npm run build

Build output directory:
out

Production branch:
main

Root directory:
blank
```

Do not rely on:

```text
server side rendering
Next Image optimization
Node server runtime
API routes
secret environment variables
```

If a contact form is needed later, use a Cloudflare compatible approach and update this file first.

---

## 14. Security and Secrets

Never commit:

```text
.env
.env.local
API keys
Resend keys
Cloudflare tokens
private email credentials
KDP dashboard links
private dashboard screenshots
```

Required:

```text
.gitignore must ignore .env files
public site must use public purchase links only
no private dashboard URLs in content
no hidden credentials in code
```

First version Contact page:

```text
No backend required unless Emma asks.
Use Contact page with Instagram and future inquiry direction.
```

---

## 15. SEO and Global Sharing

Every main page must have:

```text
title
description
canonical friendly path
Open Graph title
Open Graph description
basic share image placeholder
```

Required files:

```text
robots.txt
sitemap.xml
```

Suggested page titles:

```text
Emma Kwon | Official Site
EMMAESTRO | Music by Emma Kwon
BORN RARE | Emma Kwon
Amazing Tiger Publishing | Emma Kwon
Works | Emma Kwon
K-MAMA | Emma Kwon
Contact | Emma Kwon
```

---

## 16. Build Phases

### Phase 0. Orientation

Claude Code must check:

```text
current folder
whether files already exist
whether CLAUDE.md exists
whether package.json exists
whether git is initialized
```

If the folder is empty except CLAUDE.md, proceed carefully.

### Phase 1. Brand Core Lock

Use locked values unless Emma changes them:

```text
Root brand:
Emma Kwon

Target domain:
emmakwon.com

Repository:
k-mama/emmakwon-com

Primary social:
Instagram @the_real_emma_kwon

Main rooms:
EMMAESTRO
Amazing Tiger Publishing
BORN RARE
Works
K-MAMA
Contact
```

### Phase 2. Information Architecture

Use locked navigation:

```text
EMMAESTRO
Amazing Tiger Publishing
BORN RARE
Works
K-MAMA
Contact
```

### Phase 3. Copy System

Write content in content files.

Copy must be:

```text
short
specific
premium
human
warm
not overexplained
```

### Phase 4. Visual Direction

Lock luxury maison system before building.

Use approved palette.
Do not reuse pastel palette.

### Phase 5. Build

Build order:

```text
1. Create Next.js project in the current folder
2. Preserve CLAUDE.md
3. Configure static export
4. Configure Tailwind tokens
5. Create content files
6. Create layout and shared components
7. Create pages
8. Create SEO files
9. Run npm run lint
10. Run npm run build
```

### Phase 6. GitHub Push

Only after lint and build pass, and Emma approves:

```text
git init
git branch -M main
git remote add origin https://github.com/k-mama/emmakwon-com.git
git add .
git commit -m "Initial Emma Kwon official site"
git push -u origin main
```

### Phase 7. Cloudflare Pages Deployment

After push and Emma approval:

```text
Connect Cloudflare Pages to k-mama/emmakwon-com
Set production branch to main
Set build command to npm run build
Set output directory to out
Deploy
Check public Pages URL
```

### Phase 8. Domain

Do not connect emmakwon.com until:

```text
Cloudflare Pages deployment works
site routes work
mobile works
links work
sitemap and robots work
Emma approves
```

---

## 17. QA Checklist

Brand QA:

```text
□ Emma Kwon is clearly the root
□ EMMAESTRO is clearly the music artist brand
□ BORN RARE looks published, not imaginary
□ Amazing Tiger Publishing feels real, not decorative
□ Works feels like a gallery, not a service list
□ K-MAMA feels premium and warm
□ Instagram is present but not noisy
```

Design QA:

```text
□ Luxury maison feeling
□ Apple level restraint
□ No copying Apple
□ No copying Louis Vuitton
□ Black, ivory, champagne, gold world is visible
□ No pastel main palette
□ No startup feeling
□ No AI tool feeling
□ No cheap portfolio grid
```

Technical QA:

```text
□ npm run lint passes
□ npm run build passes
□ out folder is generated
□ navigation works
□ all public links work
□ no secrets committed
□ images or placeholders load
□ mobile layout works
□ reduced motion respected
```

Copy QA:

```text
□ No AI smelling slogans
□ No forced empowerment language
□ No excessive hyphens
□ No overexplaining trauma
□ No pretending future projects are already live
□ No hiding live assets that already exist
```

---

## 18. Launch Checklist

Before first push:

```text
□ CLAUDE.md v2.0 present
□ package.json present
□ next.config.ts static export configured
□ content files created
□ .gitignore protects .env files
□ npm run lint passes
□ npm run build passes
```

Before Cloudflare deployment:

```text
□ GitHub repository exists
□ remote is correct
□ main branch pushed
□ Cloudflare Pages project uses emmakwon-com
□ build command is npm run build
□ output directory is out
```

Before custom domain:

```text
□ Cloudflare Pages URL works
□ main pages work
□ mobile works
□ public links work
□ Emma approves
□ emmakwon.com is purchased
```

---

## 19. Claude Code Working Rules

Before changing many files, output:

```text
Current Understanding
Files I Will Create or Change
Assumptions
Next Action
```

After work, output:

```text
What changed
Files changed
Commands run
Build result
Deployment status
What to check next
```

Do not:

```text
delete existing user files
overwrite CLAUDE.md without Emma's instruction
run npm audit fix --force
commit secrets
connect Cloudflare before GitHub is ready
connect custom domain before first deployment works
```

Permission rules:

```text
Safe:
create files
edit project files
install necessary dependencies
run npm run lint
run npm run build

Needs explicit Emma approval:
git init
git push
delete folders
force fix dependencies
add real environment variables
connect Cloudflare
connect custom domain
change GitHub repository
change Cloudflare account settings
```

---

## 20. Final North Star

```text
Emma Kwon is the house.
EMMAESTRO is the music room.
Amazing Tiger Publishing is the publishing room.
BORN RARE is the memoir room.
Works is the gallery.
K-MAMA is the children's room.
Instagram is the living window.
Cloudflare Pages is the global stage.
```

Final standard:

```text
Build a site that feels quiet, expensive, cinematic, and real.

Not loud.
Not cute.
Not generic.
Not temporary.

A house with a name on the door:
Emma Kwon.
```

End.
