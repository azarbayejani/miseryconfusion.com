---
title: How this website is made
tags: blog
---

This website is built with [Eleventy](https://11ty.dev) (11ty), a **static site
generator**, and hosted on Cloudflare Pages. The code, written in HTML, CSS,
JavaScript, and the Nunjucks templating language, is available on
[GitHub](https://github.com/azarbayejani/miseryconfusion.com).

For my first blog post, I'm documenting how I built this site, not just for
myself, but in case it helps anyone else thinking about making their own. If
you've ever wanted to create a personal website without relying on platforms
like Squarespace or Wordpress, this might be useful.

That said, this isn’t a one-size-fits-all guide. I built the site this way
because it matched my skills and preferences. If you’re new to coding, you might
prefer a more beginner-friendly approach (which I’ll cover in another post). But
if you're curious about static site generators and want a setup that’s **cheap,
fast, and flexible**, I'll walk you through how I did it—technical details
included.

I'll also try to keep this post updated as my site evolves.

## Getting a Domain

The first thing you'll need if you're making a website is a domain[^1]. This
website is accessible via both `miseryconfusion.com` and `azarbayejani.com`.
I've owned these domains for a while. They each cost around $18 a year.

If you're looking to buy a domain, here are some good places to buy them:

- [Cloudflare](https://cloudflare.com)
- [Hover](https://hover.com)
- [Namecheap](https://namecheap.com)

This site's domains are from Hover, but I may switch over to Cloudflare.

## Deciding how to build the site

This website initially consisted of 4 standalone HTML files. These were small
and distinct, so maintaining them manually wasn't a problem. Whenever I made a
change, I could simply push the updated file up to my web host.

This setup worked fine until I decided I wanted to make a
[page that lists all my past and future shows](/shows). That page would require
a lot of repeated HTML, and I didn’t want to copy and paste the same structure
over and over.

I also wanted to start a blog but I didn't want to write raw HTML for every
post. I just wanted to be able to write in
[Markdown](https://en.wikipedia.org/wiki/Markdown). I don't want to maintain my
own server to host a CMS. I could have gone with a blog hosting site or CMS, but
I didn't really want to pay $10-20 a month for one.

This is why I turned to a
[static site generator](https://en.wikipedia.org/wiki/Static_site_generator).

### What is a static site generator and why use one?

A **content management system** (CMS) like
[Squarespace](https://squarespace.com), [WordPress](https://wordpress.com), or
[Ghost](http://ghost.org) lets you publish content through an admin panel. Your
content is stored in a database, and every time someone visits your site, the
server dynamically generates the page by pulling data from that database.

That approach has trade-offs: it requires ongoing maintenance, a database, and
either a hosting plan or your own server.

A **static site generator** (SSG), on the other hand, builds all your pages
ahead of time and outputs plain HTML files. You write content (often in
Markdown), and the generator applies templates to produce a complete,
ready-to-publish website.

Think of it like meal prep: instead of cooking every dish on-demand (a CMS
dynamically generating pages), you prepare and store everything in advance (a
static site generator). This makes serving the meal (your website) much faster
and cheaper.

There are multiple benefits to this:

- **Cheap (or free) hosting** - No need to pay for a server or a managed
  solution.
- **Speed** - No server-side processing means quicker page loads.
- **It's secure.** - I'm sure you've seen a Wordpress site that's been hacked
  because they didn't keep up with security updates. No databases means, fewer
  vulnerabilities.
- **Version control** - Your entire site lives in Git, making it easy to track
  changes and roll back if needed.

That said, SSGs aren’t for everyone. If you just want a simple site with minimal
setup, a managed CMS like Ghost might be a better fit. I’ll cover different
options based on budget, time, and technical expertise in a future post.

### Why Eleventy?

There are _tons_ of static site generator frameworks:
[Jekyll](https://jekyllrb.com), [Hugo](https://gohugo.io),
[Gatsby](https://www.gatsbyjs.com), and [NextJS](https://nextjs.org), to name a
few.

I've used all of those before, but I picked **Eleventy (11ty)** because it's
super simple to get started and it's written in Javascript, which I like using.

So far, it's been the most fun to work with!

## Deciding where to host the site

There are a million places to host a site, but I wanted something **free**. I
evaluated the free options that I knew of:

- Netlify
- Cloudflare Pages
- Vercel

All three let you connect a GitHub repository to so they can automatically build
and deploy your site whenever you push an update. They also offer free hosting,
though with some limits on how often you can push updates or how long builds
take.

I chose Cloudflare Pages because it offered the best free-tier:

- **Unlimited data storage and bandwidth**. Netlify and Vercel limit monthly
  bandwidth to 100GB.
- **DDoS protection**. Vercel offers this, too. Netlify does not, which has led
  to users receiving massive unexpected bills, like
  [this person who got charged $104k](https://www.reddit.com/r/webdev/comments/1b14bty/netlify_just_sent_me_a_104k_bill_for_a_simple/)
  after a DDoS attack.

Since static sites are portable, switching hosts is easy. I originally started
on Netlify before moving to Cloudflare Pages.

## Wrapping Up

That’s the foundation of how this site is built: a **custom domain**, an
**Eleventy-powered static site**, and **free hosting on Cloudflare Pages**. This
setup keeps things **fast, cheap, and easy to maintain** while minimizing
reliance on third-party platforms.

There’s still more to cover! In future posts, I’ll dive into:

- A step-by-step **walkthrough of setting up Eleventy**
- How I structured my templates and content
- Automating deployments
- Alternative approaches for those who prefer less coding

If you’re thinking about building your own site and have questions, let me know!
I’ll keep this post updated as my setup evolves.

[^1]:
    I know that Neocities, Wordpress, and others offer free plans that allow you
    to have a URL like foo.neocities.org. This URL could go away if that
    platform goes away or decides to stop offering a free service. I think it's
    very important to own your own domain name for longevity. I'll explore this
    in a later blog post.
