# VISHAL DESIGN STUDIO

A standalone HTML, CSS and vanilla JavaScript portfolio. There is no application backend, subscription, build step or external font requirement.

## Open the website

1. Extract the project ZIP completely.
2. Open `vishal-design-studio/index.html` in a current Chrome, Edge, Firefox or Safari browser.
3. Keep `css`, `js` and `assets` beside `index.html`. Opening the HTML from inside the ZIP will not load its supporting files.

JavaScript must be enabled. The page uses ordinary deferred scripts and relative paths, without modules or configuration fetches. Contact links open external apps or websites and therefore need the appropriate app/network access.

## What is included

- All 14 requested main sections, including separate website and graphic portfolios.
- 10 website concepts and 10 graphic pieces from the supplied assets.
- Original VDS logo, original full-size portfolio PNG files and smaller WebP previews.
- Graphic filters, full-image viewer, previous/next controls, keyboard handlers, mobile navigation, FAQs and back-to-top link.
- 4 website packages, 5 additional website services and 6 graphic services.
- Draft pricing controls, approved contact links and a WhatsApp enquiry form.
- Responsive CSS, reduced-motion support, focus styles, image descriptions and semantic form labels.
- An asset manifest and an accurate completion/validation report.

## Edit content and prices

`js/data.js` is the central editable configuration:

| Setting | Purpose |
| --- | --- |
| `brand` | Studio name, owner, logo and message |
| `contact` | WhatsApp, Instagram, email and phone |
| `websitePackages` | Website prices, inclusions and scope notes |
| `additionalServices` | Redesign, extra pages, maintenance and other pricing |
| `graphicServices` | Graphic service prices and descriptions |
| `websites` / `graphics` | Portfolio entries |
| `missingGraphicAssets` | Categories awaiting finished sample artwork |
| `pricingApproved` | Controls draft labels; currently `false` |
| `seo` | Title, description, real public URL and sharing image |

Keep `pricingApproved: false` until Vishal explicitly approves both amounts and scope. Prices are proposed charges, not market-rate claims. The catalogue package does not include payment processing, inventory, checkout or order management.

The page content that is not configurable, including the personal introduction and process wording, is in `index.html`. Visual styling is in `css/styles.css`. Do not add private API keys or passwords to any frontend file.

## Portfolio updates

Each website entry uses `assets/websites/<id>.png` as its original and `assets/websites/<id>-preview.webp` as its preview. Graphic entries use the same convention under `assets/graphic-design/`.

To add a graphic:

1. Put the authorized original and an uncropped, smaller WebP preview in `assets/graphic-design/`.
2. Add an entry to `graphics` with `id`, `width`, `height`, `name`, `industry`, `category` and `description`.
3. Use `Posters`, `Social Media`, `Advertisements`, `Thumbnails`, `Flyers` or `Business Cards` as the category. A filter appears only if a matching item exists.
4. Remove its category from `missingGraphicAssets` once a finished sample is supplied.

All displayed pieces are labelled as concepts. Businesses, promotional offers and claims printed inside those original concepts are illustrative; they are not studio clients or current commercial offers. The original artwork has not been rewritten or regenerated.

Finished YouTube thumbnail, flyer and business-card examples were unavailable. Labelled slots identify these gaps. Unused raw background images were not presented as completed graphic-design projects.

## Contact form behavior

The form validates its required fields and prepares a formatted message for `https://wa.me/917358428509`. The visitor must review and send the message in WhatsApp. The site does not save submissions, send email, submit to a database or claim a message has been delivered. A fallback link is displayed if the popup does not open.

## Publish with Netlify

1. Sign in to your own Netlify account.
2. Open Netlify Drop or the manual-deploy area of your team's Projects page.
3. Drag the extracted `vishal-design-studio` folder into the deployment area. `index.html` must be at the root of the uploaded folder.
4. Open the assigned URL and check navigation, images and WhatsApp enquiries.
5. To update the same site, use its Deploys area and upload the updated folder.

No build command is needed. If using a Git-connected setup, publish the directory containing `index.html` and leave the build command empty. Use the account's applicable free plan limits; custom domain purchases and optional upgrades are separate.

Official instructions: https://docs.netlify.com/deploy/create-deploys/#drag-and-drop

## Publish with Cloudflare Pages

1. Sign in to your own Cloudflare account and open Workers & Pages.
2. Choose Create application → Pages → Use direct upload.
3. Name the project and upload the extracted website folder. If you make a deployment ZIP, put `index.html` at its top level rather than adding an extra enclosing directory.
4. Select Deploy site and check the assigned `pages.dev` URL.
5. Upload later versions to that same Pages project.

Choose Direct Upload deliberately: Cloudflare documents it separately from Git integration. No build command or backend configuration is required for this project. Use the applicable free-plan limits.

Official instructions: https://developers.cloudflare.com/pages/get-started/direct-upload/

## Set the real sharing URL after publishing

Set `seo.canonicalUrl` in `js/data.js` to the real HTTPS URL, including a trailing slash. No fictional domain is supplied.

The page updates metadata in JavaScript, but many social-sharing crawlers do not execute JavaScript. To update the static HTML metadata from that same configuration, run the optional maintenance utility once from the project folder:

```sh
node tools/sync-metadata.cjs
```

Then redeploy the folder. This utility requires Node.js only when maintaining metadata; visitors and local preview do not require Node.js. Alternatively, update the corresponding canonical, `og:url`, `og:image` and `twitter:image` tags in the HTML head manually. The supplied VDS logo is the sharing-image reference; no replacement image was generated.

## Validation and final review

See `COMPLETION_REPORT.md` and `VALIDATION_RESULTS.json` for checks actually run. Automated DOM and file checks passed. Graphical browser rendering was unavailable, so this release must not be described as visually verified at 360, 390, 768, 1024 or 1440 pixels.

Before public launch, inspect those widths in a browser. Check the mobile menu, every filter, full-image viewer, Escape/focus behavior, FAQ keyboard controls, pricing and form. Confirm there is no clipping or horizontal overflow. Test a draft WhatsApp enquiry and send it only when you intend to contact the studio.

This project has not been deployed by the assistant.
