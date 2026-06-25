# The Outlet Store

Premium footwear and designer bags catalogue.

## Files

| File | Purpose |
|------|---------|
| `index.html` | The store website (open this in any browser) |
| `products.js` | All product data — edit this to add/remove items |
| `scraper.js` | Auto-scraper that checks WWTOP for new products |
| `.github/workflows/update-catalogue.yml` | GitHub Actions CI/CD — runs scraper weekly |

## Adding products manually

Open `products.js` and add an entry:
```js
{ id:'xx001', brand:'Nike', name:'Air Jordan 4 New Colorway', cat:'Jordan 4',
  tags:['jordan','aj4'], color:'#e67e22', imgs:[], url:'https://wwfake100.x.yupoo.com/albums/ALBUMID' },
```

## Adding images to a product

Fill the `imgs` array with Yupoo photo URLs:
```js
imgs: [
  'https://photo.yupoo.com/wwfake100/PHOTOID/medium.jpeg',
  'https://photo.yupoo.com/wwfake100/PHOTOID2/medium.jpeg',
]
```

## Running the scraper manually

```bash
node scraper.js
```

## Deploying to GitHub Pages

1. Push this repo to GitHub
2. Go to Settings → Pages → Source: Deploy from branch → main → / (root)
3. Your site will be live at `https://YOUR-USERNAME.github.io/REPO-NAME`
