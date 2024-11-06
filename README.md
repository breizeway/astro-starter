![Elite Door Logo](https://elite-door.netlify.app/logo.svg)
# Elite Door Landing Page

[![Netlify Status](https://api.netlify.com/api/v1/badges/93d59538-1193-412e-b5b7-410324ff4f08/deploy-status)](https://app.netlify.com/sites/elite-door/deploys)

## Summary

- The source of truth for the code is in this repository on github (`https://github.com/JHElite/landing-page`).
- This site is hosted by Netlify at () which automatically detects change in the code from github to build and host the website.
- The top-level domain (TLD) `elite-door.com` is registered with and purchased from GoDaddy and is configured as a custom domain on Netlify.
- Netlify is configured with Decap CMS (**C**ontent **M**anagement **S**ystem - or the `/admin` page) to allow you to update text and images on your site.
- This site was originally developed by Tannor Breitigam. Can be reached at:
  - dev@tannor.net
  - https://tannor.net
  - https://www.linkedin.com/in/tannor/

## How it works

### Github

- Your website's code lives at `https://github.com/JHElite/landing-page`.
- Your github account is `JHElite`. It's recommended to use this github account to log in to both netlify and to the `/admin` page on the website - that way you only have to remember one account for everything website-related
- If you want to allow someone to edit the code, you can invite collaborators to your repository on Github in the settings at `https://github.com/JHElite/landing-page/settings/access`.

### Netlify

- Log in to your Netlify with you Github credentials ("Log in wth Github") at `https://app.netlify.com/sites/elite-door/overview`
- Netlify is integrated with your Github account. Whenever changes are made to the Code on your Github account, Netlify will take those changes and update the website within a few minutes.
- When you make change to your website on the CMS `/admin` page, this makes changes directly to the source code on Github, which also triggers an update.
- User accounts and the CMS `/admin` integration are managed on the `Identity` page on Netlify (https://app.netlify.com/sites/elite-door/configuration/identity#content - Site Configuration > Identity.
  - To edit / invite CMS users, go to the `Users` section on the `Identity` page (https://app.netlify.com/sites/elite-door/configuration/identity#users)
  - The integration with Decap CMS that enables the `/admin` page is also here in the `Services` section (https://app.netlify.com/sites/elite-door/configuration/identity#users)
    - If for some reason the integration were to break, try removing and re-adding it here.
- The free tier on Netlify allows only 1 account for an organization. This mean that hosting / deployment settings (inviting users to the `/admin` page, domain name setup, integration with github) must be configured through a single account and the email and password may need to be shared with a developer in order to mak significant updates.

### CMS or the `/admin` page

Changes to text and images are enabled by the Decap CMS at `https://elite-door.com/admin`

- You can have up to 5 users at a time who have access to the admin page
- See the previous `Netlify` section on how to manage users

### The domain (GoDaddy)

The website is reachable at `https://elite-door.com` because we have instructed GoDaddy to point that domain at the site hosted on Netlify. This requires some set up on both GoDaddy and Netlify

- Set up on Netlify is at `https://app.netlify.com/sites/elite-door/domain-management/setup`
- You must also configure GoDaddy to point the domain to Netlify. Follow the instructions in Netlify's docs. `https://docs.netlify.com/domains-https/custom-domains/` is a good place to start

## Development

This project uses `AstroJs` with `TypeScript`, `Tailwind`, and some theming and components from `DaisyUI`. It integrates with `Decap` CMS for content.

### Running locally

In your shell, run...

- `nvm use`
- `npm install`
- `npm run dev`

Open in your browser at http://localhost/4321 to view the live local site.

### Configuration

The site has no ENV variable or extra set up needed.
