// ============================================================
// THE OUTLET STORE — Scraper
// Checks WWTOP for new albums, fetches their images,
// and appends complete product entries to products.js
// Run manually: node scraper.js
// Runs automatically: every Monday via GitHub Actions
// ============================================================

const https = require('https');
const fs    = require('fs');

// ── CONFIG ───────────────────────────────────────────────────
const WWTOP_USER = 'wwfake100';

const CATEGORIES = [
  { id:'5230586', brand:'Nike',          label:'Nike/Jordan' },
  { id:'5230730', brand:'Balenciaga',    label:'Balenciaga' },
  { id:'5231981', brand:'New Balance',   label:'New Balance' },
  { id:'5230724', brand:'Margiela',      label:'Margiela' },
  { id:'5230725', brand:'Rick Owens',    label:'Rick Owens' },
  { id:'5231967', brand:'Adidas',        label:'Adidas' },
  { id:'5232584', brand:'Adidas',        label:'Yeezy' },
  { id:'5230588', brand:'Asics',         label:'Asics' },
  { id:'5232572', brand:'Puma',          label:'Puma' },
  { id:'5233759', brand:'Converse',      label:'Converse' },
  { id:'5230743', brand:'Vans',          label:'Vans' },
  { id:'5232730', brand:'Salomon',       label:'Salomon' },
  { id:'5232535', brand:'Hoka',          label:'Hoka' },
  { id:'5254539', brand:'Saucony',       label:'Saucony' },
  { id:'5230735', brand:'On Running',    label:'On Running' },
  { id:'5232532', brand:'Onitsuka Tiger',label:'Onitsuka Tiger' },
  { id:'5232540', brand:'Golden Goose',  label:'GGDB' },
  { id:'5232718', brand:'Bape',          label:'Bape' },
  { id:'5233667', brand:'Amiri',         label:'Amiri' },
  { id:'5232591', brand:'McQueen',       label:'McQueen' },
  { id:'5232550', brand:'Valentino',     label:'Valentino' },
  { id:'5230733', brand:'Dior',          label:'Dior' },
  { id:'5232533', brand:'Gucci',         label:'Gucci' },
  { id:'5230748', brand:'Prada',         label:'Prada' },
  { id:'5230734', brand:'Loewe',         label:'Loewe' },
  { id:'5231979', brand:'Timberland',    label:'Timberland' },
  { id:'5231933', brand:'Birkenstock',   label:'Birkenstock' },
  { id:'5232521', brand:'UGG',           label:'UGG' },
  { id:'5230751', brand:'Crocs',         label:'Crocs' },
  { id:'5232520', brand:'Moon Boot',     label:'Moon Boot' },
  { id:'5231977', brand:'Raf Simons',    label:'Raf Simons' },
  { id:'5231975', brand:'Mizuno',        label:'Mizuno' },
  { id:'5232529', brand:'Brooks',        label:'Brooks' },
  { id:'5232612', brand:'The Row',       label:'The Row' },
  { id:'5232717', brand:'Stussy',        label:'Stussy' },
  { id:'5232519', brand:'Moncler',       label:'Moncler' },
  { id:'5232544', brand:'Balmain',       label:'Balmain' },
  { id:'5232570', brand:'Brunello Cucinelli', label:'Brunello' },
  { id:'5230726', brand:'Bottega Veneta',label:'Bottega' },
  { id:'5232560', brand:'Chanel',        label:'Chanel' },
  { id:'5230737', brand:'Hermès',        label:'Hermes' },
  { id:'5230738', brand:'Zegna',         label:'Zegna' },
  { id:'5230739', brand:'Loro Piana',    label:'Loro Piana' },
  { id:'5232014', brand:'Miu Miu',       label:'Miu Miu' },
  { id:'5231926', brand:'Mihara Yasuhiro', label:'MMY' },
  { id:'5232198', brand:'The North Face', label:'TNF' },
  { id:'5232720', brand:"Arc'teryx",     label:'Arcteryx' },
  { id:'5230745', brand:'Burberry',      label:'Burberry' },
  { id:'5230750', brand:'Saint Michael', label:'Saint Michael' },
];

// ── SKIP WORDS — non-product albums ───────────────────────────
const SKIP = new Set([
  'How to purchase','WEIDIAN Guide','Order Issues','Social media',
  'TIK TOK','KAKOBUY','The Rat King Logistics','MULEBUY','Recommended Agents'
]);

// ── CLEAN NAME — strip batch prefixes ─────────────────────────
function cleanName(raw) {
  return raw
    .replace(/^(GX|LJR|LW|KZ|KX\/KZ|OWF|S2|Y3|ZX|TG|OW)\s+(BATCH\s+)?/i, '')
    .replace(/\bAJ(\d+)\b/g,    'Air Jordan $1')
    .replace(/\bAF1\b/gi,       'Air Force 1')
    .replace(/\bNK\s+/i,        'Nike ')
    .replace(/\bN1KE\b/gi,      'Nike')
    .replace(/\bOW\b/g,         'Off-White')
    .replace(/\bTS\b/g,         'Travis Scott')
    .replace(/\bAMM\b/g,        'A Ma Maniére')
    .replace(/\bUND\b/g,        'Undefeated')
    .trim();
}

// ── BRAND COLOUR MAP ──────────────────────────────────────────
const COLORS = {
  'Nike':'#c8392b','Balenciaga':'#1a1a1a','New Balance':'#cc3333',
  'Margiela':'#2c2c2c','Rick Owens':'#3a3020','Adidas':'#000',
  'Asics':'#003399','Puma':'#e94e1b','Converse':'#cc0000','Vans':'#1a1a1a',
  'Salomon':'#ff6600','Hoka':'#1a85ff','Saucony':'#cc2200',
  'On Running':'#2d2d2d','Onitsuka Tiger':'#cc3333','Golden Goose':'#c8a430',
  'Bape':'#4a7a4a','Amiri':'#8b1a1a','McQueen':'#1a1a1a',
  'Valentino':'#d40000','Dior':'#c8b89a','Gucci':'#2d5a27','Prada':'#2c2c2c',
  'Loewe':'#7a6040','Timberland':'#8b6914','Birkenstock':'#c8a46e',
  'UGG':'#c8a46e','Crocs':'#4caf50','Moon Boot':'#5c5c5c',
  'Raf Simons':'#1c1c1c','Mizuno':'#003399','Brooks':'#cc2200',
  'The Row':'#c8b89a','Stussy':'#1a1a1a','Moncler':'#003366',
  'Balmain':'#8b7355','Brunello Cucinelli':'#8b7355','Bottega Veneta':'#7c6c2e',
  'Chanel':'#1a1a1a','Hermès':'#e8650a','Zegna':'#4a4a4a',
  'Loro Piana':'#c8a46e','Miu Miu':'#c1729e','Mihara Yasuhiro':'#2c2c2c',
  'The North Face':'#cc2200',"Arc'teryx":'#2c4a2c','Burberry':'#b5924c',
  'Saint Michael':'#1a1a1a',
};

// ── HTTP HELPER ───────────────────────────────────────────────
function get(url) {
  return new Promise((res, rej) => {
    https.get(url, { headers:{ 'User-Agent':'Mozilla/5.0' } }, r => {
      let d = '';
      r.on('data', c => d += c);
      r.on('end', () => res(d));
    }).on('error', rej);
  });
}

function delay(ms) { return new Promise(r => setTimeout(r, ms)); }

// ── PARSE ALBUM LIST from category page ───────────────────────
function parseAlbums(html) {
  const out = [];
  // Match: href="...albums/ALBUMID..." title="NAME"
  const re = /href="https:\/\/wwfake100\.x\.yupoo\.com\/albums\/(\d+)[^"]*"\s+(?:uid=1[^"]*"[^"]*"\s+)?title="([^"]+)"/g;
  let m;
  while ((m = re.exec(html)) !== null) {
    const title = m[2].trim();
    if (SKIP.has(title)) continue;
    out.push({ albumId: m[1], title });
  }
  return out;
}

// ── PARSE IMAGES from album page ──────────────────────────────
function parseImages(html) {
  const re = /https:\/\/photo\.yupoo\.com\/wwfake100\/([a-f0-9]+)\/medium\.jpeg/g;
  const seen = new Set();
  const imgs = [];
  let m;
  while ((m = re.exec(html)) !== null) {
    const url = m[0];
    if (!seen.has(url)) { seen.add(url); imgs.push(url); }
  }
  // Return first 8 images max (keep payload small)
  return imgs.slice(0, 8);
}

// ── MAIN ──────────────────────────────────────────────────────
async function run() {
  console.log('=== Outlet Store Scraper starting ===');

  const src = fs.readFileSync('products.js', 'utf8');

  // Extract all existing album URLs so we don't add dupes
  const existingUrls = new Set(
    [...src.matchAll(/url:'(https:\/\/wwfake100\.x\.yupoo\.com\/albums\/\d+)'/g)]
      .map(m => m[1])
  );
  console.log(`Existing products: ${existingUrls.size}`);

  const newEntries = [];

  for (const cat of CATEGORIES) {
    try {
      console.log(`Fetching category: ${cat.label}...`);
      const html = await get(`https://wwfake100.x.yupoo.com/categories/${cat.id}`);
      const albums = parseAlbums(html);

      for (const album of albums) {
        const albumUrl = `https://wwfake100.x.yupoo.com/albums/${album.albumId}`;
        if (existingUrls.has(albumUrl)) continue;

        // New album found — fetch its images
        console.log(`  New album: ${album.title} (${album.albumId})`);
        await delay(600);

        let imgs = [];
        try {
          const albumHtml = await get(albumUrl);
          imgs = parseImages(albumHtml);
          console.log(`    → ${imgs.length} images`);
        } catch (e) {
          console.warn(`    Image fetch failed: ${e.message}`);
        }

        const name  = cleanName(album.title);
        const brand = cat.brand;
        const color = COLORS[brand] || '#333';
        const id    = `auto_${album.albumId}`;
        const tags  = [brand.toLowerCase(), ...name.toLowerCase().split(/\s+/)];

        newEntries.push(
          `  { id:'${id}', brand:'${brand.replace(/'/g,"\\'")}', ` +
          `name:'${name.replace(/'/g,"\\'")}', cat:'${cat.label}', ` +
          `tags:${JSON.stringify(tags)}, color:'${color}', ` +
          `imgs:${JSON.stringify(imgs)}, ` +
          `url:'${albumUrl}' },`
        );

        existingUrls.add(albumUrl);
        await delay(400);
      }
    } catch (err) {
      console.error(`Error on ${cat.label}:`, err.message);
    }
  }

  if (newEntries.length === 0) {
    console.log('No new products found. Nothing to update.');
    return;
  }

  console.log(`\nAdding ${newEntries.length} new products...`);

  const dateTag = `  // Auto-added ${new Date().toISOString().split('T')[0]}`;
  const updated = src.replace(
    /\n\];/,
    `\n\n${dateTag}\n${newEntries.join('\n')}\n];`
  );

  fs.writeFileSync('products.js', updated);
  console.log(`Done. products.js updated with ${newEntries.length} new entries.`);
}

run().catch(err => {
  console.error('Scraper failed:', err);
  process.exit(1);
});
