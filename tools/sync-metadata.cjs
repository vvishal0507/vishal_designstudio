/* Optional owner utility. The website itself needs neither Node nor a build. */
const fs = require('node:fs');
const path = require('node:path');
const vm = require('node:vm');
const root = path.resolve(__dirname, '..');
const config = { window: {} };
vm.runInNewContext(fs.readFileSync(path.join(root, 'js/data.js'), 'utf8'), config);
const seo = config.window.VDS.seo;
const escape = value => String(value).replace(/[&<>"']/g, char => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[char]));
let canonical = '';
if (seo.canonicalUrl) {
  const url = new URL(seo.canonicalUrl);
  if (!['http:', 'https:'].includes(url.protocol)) throw new Error('canonicalUrl must use HTTP or HTTPS.');
  canonical = url.href;
}
const image = canonical ? new URL(seo.socialImage, canonical).href : seo.socialImage;
const file = path.join(root, 'index.html');
let html = fs.readFileSync(file, 'utf8');
html = html.replace(/<title>.*?<\/title>/, '<title>'+escape(seo.title)+'</title>');
for (const [attribute, name, value] of [
  ['name','description',seo.description],
  ['property','og:title',seo.title],
  ['property','og:description',seo.description],
  ['property','og:image',image],
  ['name','twitter:image',image]
]) {
  const pattern = new RegExp('<meta '+attribute+'="'+name.replace(/[.*+?^${}()|[\]\\]/g,'\\$&')+'" content="[^"]*">');
  html = html.replace(pattern, '<meta '+attribute+'="'+name+'" content="'+escape(value)+'">');
}
html = html.replace(/\s*<link rel="canonical" href="[^"]*">/g,'').replace(/\s*<meta property="og:url" content="[^"]*">/g,'');
if (canonical) html = html.replace('</head>', '  <link rel="canonical" href="'+escape(canonical)+'">\n  <meta property="og:url" content="'+escape(canonical)+'">\n</head>');
fs.writeFileSync(file, html);
console.log(canonical ? 'Static sharing metadata synchronized from data.js.' : 'Metadata synchronized. Set seo.canonicalUrl after your real hosting URL is known.');
