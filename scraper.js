// ============================================================
// THE OUTLET STORE — WWTOP Auto-Scraper
// Checks WWTOP for new albums and appends them to products.js
// Run: node scraper.js
// ============================================================

const https = require('https');
const fs = require('fs');

const WWTOP_CATEGORIES = [
  { id: '5230586', name: 'Nike/Jordan' },
  { id: '5230730', name: 'Balenciaga' },
  { id: '5231981', name: 'New Balance' },
  { id: '5230724', name: 'Margiela' },
  { id: '5230725', name: 'Rick Owens' },
  { id: '5231967', name: 'Adidas' },
  { id: '5232584', name: 'Yeezy' },
  { id: '5230588', name: 'Asics' },
  { id: '5232572', name: 'Puma' },
  { id: '5233759', name: 'Converse' },
  { id: '5230743', name: 'Vans' },
  { id: '5232730', name: 'Salomon' },
  { id: '5232535', name: 'Hoka' },
  { id: '5254539', name: 'Saucony' },
  { id: '5232540', name: 'GGDB' },
  { id: '5232718', name: 'Bape' },
  { id: '5233667', name: 'Amiri' },
  { id: '5232591', name: 'McQueen' },
  { id: '5232550', name: 'Valentino' },
  { id: '5230735', name: 'On' },
  { id: '5232532', name: 'Onitsuka Tiger' },
];

function fetchPage(url) {
  return new Promise((resolve, reject) => {
    https.get(url, { headers: { 'User-Agent': 'Mozilla/5.0' } }, (res) => {
      let data = '';
      res.on('data', chunk => data += chunk);
      res.on('end', () => resolve(data));
    }).on('error', reject);
  });
}

function parseAlbums(html) {
  const albums = [];
  // Match album links and titles
  const regex = /href="https:\/\/wwfake100\.x\.yupoo\.com\/albums\/(\d+)[^"]*"\s+title="([^"]+)"/g;
  let m;
  while ((m = regex.exec(html)) !== null) {
    const id = m[1];
    const title = m[2].trim();
    // Skip non-product albums
    if (['How to purchase','WEIDIAN Guide','Order Issues','Social media','TIK TOK','KAKOBUY','The Rat King Logistics','MULEBUY'].includes(title)) continue;
    albums.push({ albumId: id, title });
  }
  return albums;
}

function titleToProductName(title) {
  return title
    .replace(/^GX\s+/i, '')
    .replace(/^LJR\s+BATCH\s+/i, '')
    .replace(/^LW\s+BATCH\s+/i, '')
    .replace(/^KZ\s+BATCH\s+/i, '')
    .replace(/^KX\/KZ\s+BATCH\s+/i, '')
    .replace(/^OWF\s+BATCH\s+/i, '')
    .replace(/^S2\s+BATCH\s+/i, '')
    .replace(/^Y3\s+BATCH\s+/i, '')
    .replace(/^ZX\s+/i, '')
    .replace(/\bAJ(\d+)\b/g, 'Air Jordan $1')
    .replace(/\bAF1\b/g, 'Air Force 1')
    .replace(/\bNK\s+/i, 'Nike ')
    .replace(/\bN1KE\b/ig, 'Nike')
    .replace(/\bOW\b/g, 'Off-White')
    .replace(/\bTS\b/g, 'Travis Scott')
    .trim();
}

function titleToBrand(title) {
  const t = title.toUpperCase();
  if (t.includes('AJ') || t.includes('AF1') || t.includes('DUNK') || t.includes('AIR MAX') || t.includes('KOBE') || t.includes('MIND') || t.includes('JORDAN') || t.includes('NOCTA')) return 'Nike';
  if (t.includes('BALENCIAGA')) return 'Balenciaga';
  if (t.includes('NEW BALANCE') || /\b(9060|2002|990|574|327|530)\b/.test(t)) return 'New Balance';
  if (t.includes('MARGIELA')) return 'Margiela';
  if (t.includes('RICK')) return 'Rick Owens';
  if (t.includes('YEEZY')) return 'Adidas';
  if (t.includes('ADIDAS') || t.includes('CAMPUS')) return 'Adidas';
  if (t.includes('ASICS')) return 'Asics';
  if (t.includes('PUMA')) return 'Puma';
  if (t.includes('CONVERSE')) return 'Converse';
  if (t.includes('VANS')) return 'Vans';
  if (t.includes('SALOMON')) return 'Salomon';
  if (t.includes('HOKA')) return 'Hoka';
  if (t.includes('SAUCONY')) return 'Saucony';
  if (t.includes('GGDB') || t.includes('GOLDEN GOOSE')) return 'Golden Goose';
  if (t.includes('BAPE')) return 'Bape';
  if (t.includes('AMIRI')) return 'Amiri';
  return 'Sneakers';
}

async function run() {
  console.log('Starting WWTOP scrape...');
  
  // Load existing product IDs to avoid duplicates
  const existingContent = fs.readFileSync('products.js', 'utf8');
  const existingUrls = new Set(existingContent.match(/url:'[^']+'/g)?.map(u => u.replace("url:'","").replace("'","")) || []);
  
  const newProducts = [];

  for (const cat of WWTOP_CATEGORIES) {
    try {
      const url = `https://wwfake100.x.yupoo.com/categories/${cat.id}`;
      console.log(`Fetching ${cat.name}...`);
      const html = await fetchPage(url);
      const albums = parseAlbums(html);
      
      for (const album of albums) {
        const albumUrl = `https://wwfake100.x.yupoo.com/albums/${album.albumId}`;
        if (existingUrls.has(albumUrl)) continue;
        
        const productName = titleToProductName(album.title);
        const brand = titleToBrand(album.title);
        const id = `auto_${album.albumId}`;
        
        newProducts.push({
          id, brand,
          name: productName,
          cat: cat.name,
          tags: [brand.toLowerCase(), ...productName.toLowerCase().split(' ')],
          color: '#333',
          imgs: [],
          url: albumUrl
        });
      }
      
      // Polite delay
      await new Promise(r => setTimeout(r, 800));
    } catch (err) {
      console.error(`Error fetching ${cat.name}:`, err.message);
    }
  }

  if (newProducts.length === 0) {
    console.log('No new products found.');
    return;
  }

  console.log(`Found ${newProducts.length} new products. Appending...`);
  
  // Append new products before the closing ];
  const newEntries = newProducts.map(p => 
    `  { id:'${p.id}', brand:'${p.brand.replace(/'/g,"\\'")}', name:'${p.name.replace(/'/g,"\\'")}', cat:'${p.cat}', tags:${JSON.stringify(p.tags)}, color:'${p.color}', imgs:[], url:'${p.url}' },`
  ).join('\n');
  
  const updated = existingContent.replace(/\n\];/, `\n  // Auto-added ${new Date().toISOString().split('T')[0]}\n${newEntries}\n];`);
  fs.writeFileSync('products.js', updated);
  console.log(`Done. ${newProducts.length} new products added.`);
}

run().catch(console.error);
