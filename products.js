// THE OUTLET STORE — Product Data
// imgs: array of photo.yupoo.com URLs (scraped directly)
// color: accent colour for placeholder fallback
// Add new products here — no other file needs changing

const PRODUCTS = [

  // ── AIR JORDAN 1 ─────────────────────────────────────────
  { id:'aj1-ts', brand:'Nike', name:'Air Jordan 1 High – Travis Scott',
    cat:'Jordan 1', tags:['jordan','aj1','high'],  color:'#c8392b',
    imgs:['https://photo.yupoo.com/wwfake100/303a21cde3/medium.jpeg',
          'https://photo.yupoo.com/wwfake100/bf19528070/medium.jpeg',
          'https://photo.yupoo.com/wwfake100/5c426ce9c4/medium.jpeg',
          'https://photo.yupoo.com/wwfake100/07e8e23dbc/medium.jpeg',
          'https://photo.yupoo.com/wwfake100/0c529838d6/medium.jpeg',
          'https://photo.yupoo.com/wwfake100/c1b555ff70/medium.jpeg'] },

  { id:'aj1-low', brand:'Nike', name:'Air Jordan 1 Low',
    cat:'Jordan 1', tags:['jordan','aj1','low'], color:'#c8392b',
    imgs:['https://photo.yupoo.com/wwfake100/4fe78afb25/medium.jpeg',
          'https://photo.yupoo.com/wwfake100/e0ebc0c082/medium.jpeg',
          'https://photo.yupoo.com/wwfake100/9e175f93ad/medium.jpeg'] },

  { id:'aj1-ow', brand:'Nike', name:'Air Jordan 1 – Off-White',
    cat:'Jordan 1', tags:['jordan','aj1','off white','high'], color:'#c8392b',
    imgs:['https://photo.yupoo.com/wwfake100/83a6e8f9b1/medium.jpeg',
          'https://photo.yupoo.com/wwfake100/9101fd8145/medium.jpeg',
          'https://photo.yupoo.com/wwfake100/5f742e8ad3/medium.jpeg'] },

  // ── AIR JORDAN 3 ─────────────────────────────────────────
  { id:'aj3', brand:'Nike', name:'Air Jordan 3',
    cat:'Jordan 3', tags:['jordan','aj3'], color:'#e74c3c',
    imgs:['https://photo.yupoo.com/wwfake100/dc13bf0eeb/medium.jpeg'] },

  { id:'aj3-bc', brand:'Nike', name:'Air Jordan 3 – Black Cat',
    cat:'Jordan 3', tags:['jordan','aj3','black cat'], color:'#1a1a1a',
    imgs:[] },

  // ── AIR JORDAN 4 ─────────────────────────────────────────
  { id:'aj4', brand:'Nike', name:'Air Jordan 4',
    cat:'Jordan 4', tags:['jordan','aj4'], color:'#e67e22',
    imgs:['https://photo.yupoo.com/wwfake100/4f7f24be9a/medium.jpeg',
          'https://photo.yupoo.com/wwfake100/0d4db77ca8/medium.jpeg',
          'https://photo.yupoo.com/wwfake100/68a174332c/medium.jpeg',
          'https://photo.yupoo.com/wwfake100/5f3389cf4a/medium.jpeg',
          'https://photo.yupoo.com/wwfake100/1cb595d562/medium.jpeg',
          'https://photo.yupoo.com/wwfake100/b05d9cf7a7/medium.jpeg',
          'https://photo.yupoo.com/wwfake100/4574ab6ccd/medium.jpeg',
          'https://photo.yupoo.com/wwfake100/a5f98630ad/medium.jpeg'] },

  { id:'aj4-amm', brand:'Nike', name:'Air Jordan 4 – A Ma Maniére',
    cat:'Jordan 4', tags:['jordan','aj4','amm'], color:'#e67e22',
    imgs:['https://photo.yupoo.com/wwfake100/d1b4f0012a/medium.jpeg',
          'https://photo.yupoo.com/wwfake100/bbe82514fa/medium.jpeg',
          'https://photo.yupoo.com/wwfake100/7249a79e9a/medium.jpeg'] },

  { id:'aj4-sb', brand:'Nike', name:'Air Jordan 4 – SB Collab',
    cat:'Jordan 4', tags:['jordan','aj4','sb'], color:'#0a58ca',
    imgs:['https://photo.yupoo.com/wwfake100/a5e6079b85/medium.jpeg',
          'https://photo.yupoo.com/wwfake100/43dcc5d4fe/medium.jpeg'] },

  { id:'aj4-union', brand:'Nike', name:'Air Jordan 4 – Union',
    cat:'Jordan 4', tags:['jordan','aj4','union'], color:'#e67e22',
    imgs:['https://photo.yupoo.com/wwfake100/4a0ae67fb6/medium.jpeg',
          'https://photo.yupoo.com/wwfake100/2ddbe736de/medium.jpeg'] },

  { id:'aj4-bc', brand:'Nike', name:'Air Jordan 4 – Black Cat',
    cat:'Jordan 4', tags:['jordan','aj4','black cat'], color:'#111',
    imgs:['https://photo.yupoo.com/wwfake100/991cbd86fc/medium.jpeg',
          'https://photo.yupoo.com/wwfake100/fa61c56a8c/medium.jpeg'] },

  // ── AIR JORDAN 5 ─────────────────────────────────────────
  { id:'aj5', brand:'Nike', name:'Air Jordan 5',
    cat:'Jordan 5', tags:['jordan','aj5'], color:'#f39c12',
    imgs:['https://photo.yupoo.com/wwfake100/e9e747eb5d/medium.jpeg',
          'https://photo.yupoo.com/wwfake100/485e601f38/medium.jpeg',
          'https://photo.yupoo.com/wwfake100/6e6a9af94a/medium.jpeg'] },

  { id:'aj5-ow', brand:'Nike', name:'Air Jordan 5 – Off-White',
    cat:'Jordan 5', tags:['jordan','aj5','off white'], color:'#f39c12',
    imgs:[] },

  // ── AIR JORDAN 6, 11, 12, 13, 14 ────────────────────────
  { id:'aj6', brand:'Nike', name:'Air Jordan 6',
    cat:'Jordan 6', tags:['jordan','aj6'], color:'#d35400', imgs:[] },

  { id:'aj11', brand:'Nike', name:'Air Jordan 11',
    cat:'Jordan 11', tags:['jordan','aj11'], color:'#8e44ad',
    imgs:['https://photo.yupoo.com/wwfake100/21028d893b/medium.jpeg',
          'https://photo.yupoo.com/wwfake100/3385b54b44/medium.jpeg',
          'https://photo.yupoo.com/wwfake100/de06f0afae/medium.jpeg'] },

  { id:'aj12', brand:'Nike', name:'Air Jordan 12',
    cat:'Jordan 12', tags:['jordan','aj12'], color:'#9b59b6', imgs:[] },

  { id:'aj13', brand:'Nike', name:'Air Jordan 13',
    cat:'Jordan 13', tags:['jordan','aj13'], color:'#7d3c98', imgs:[] },

  { id:'aj14', brand:'Nike', name:'Air Jordan 14',
    cat:'Jordan 14', tags:['jordan','aj14'], color:'#6c3483', imgs:[] },

  // ── AIR FORCE 1 ──────────────────────────────────────────
  { id:'af1', brand:'Nike', name:'Nike Air Force 1',
    cat:'Air Force 1', tags:['af1','air force'], color:'#2c3e50',
    imgs:['https://photo.yupoo.com/wwfake100/a9b48fa201/medium.jpeg',
          'https://photo.yupoo.com/wwfake100/fe77b61405/medium.jpeg',
          'https://photo.yupoo.com/wwfake100/96fbd11507/medium.jpeg',
          'https://photo.yupoo.com/wwfake100/8bbb8cd25f/medium.jpeg'] },

  { id:'af1-nocta', brand:'Nike', name:'Air Force 1 – NOCTA Collab',
    cat:'Air Force 1', tags:['af1','nocta','drake'], color:'#2c3e50',
    imgs:['https://photo.yupoo.com/wwfake100/3cadee345f/medium.jpeg',
          'https://photo.yupoo.com/wwfake100/3b79d6f71a/medium.jpeg'] },

  { id:'af1-ow', brand:'Nike', name:'Air Force 1 – Off-White',
    cat:'Air Force 1', tags:['af1','off white'], color:'#2c3e50',
    imgs:['https://photo.yupoo.com/wwfake100/4cd02dd56d/medium.jpeg',
          'https://photo.yupoo.com/wwfake100/4c0340fe59/medium.jpeg'] },

  // ── DUNK ─────────────────────────────────────────────────
  { id:'dunk-lo', brand:'Nike', name:'Nike Dunk Low',
    cat:'Dunk', tags:['dunk','low'], color:'#1a252f',
    imgs:['https://photo.yupoo.com/wwfake100/c7b078d9bb/medium.jpeg',
          'https://photo.yupoo.com/wwfake100/63a5c46485/medium.jpeg',
          'https://photo.yupoo.com/wwfake100/8f76a6545f/medium.jpeg'] },

  { id:'dunk-hi', brand:'Nike', name:'Nike Dunk High',
    cat:'Dunk', tags:['dunk','high'], color:'#1a252f',
    imgs:['https://photo.yupoo.com/wwfake100/5a39eec437/medium.jpeg',
          'https://photo.yupoo.com/wwfake100/ad5af2ac6c/medium.jpeg'] },

  // ── AIR MAX ───────────────────────────────────────────────
  { id:'am95', brand:'Nike', name:'Nike Air Max 95',
    cat:'Air Max', tags:['air max','95'], color:'#16a085',
    imgs:['https://photo.yupoo.com/wwfake100/f2c01d771d/medium.jpeg',
          'https://photo.yupoo.com/wwfake100/6001940e8c/medium.jpeg',
          'https://photo.yupoo.com/wwfake100/c2e42f2252/medium.jpeg',
          'https://photo.yupoo.com/wwfake100/9e88bcef6b/medium.jpeg'] },

  { id:'am95-palace', brand:'Nike', name:'Air Max 95 – Palace',
    cat:'Air Max', tags:['air max','95','palace'], color:'#16a085',
    imgs:['https://photo.yupoo.com/wwfake100/7264a082f4/medium.jpeg',
          'https://photo.yupoo.com/wwfake100/edb8e1b8d7/medium.jpeg'] },

  { id:'am95-levis', brand:'Nike', name:"Air Max 95 – Levi's",
    cat:'Air Max', tags:['air max','95','levis'], color:'#16a085',
    imgs:['https://photo.yupoo.com/wwfake100/563192c98e/medium.jpeg',
          'https://photo.yupoo.com/wwfake100/86e338406f/medium.jpeg'] },

  { id:'am90', brand:'Nike', name:'Nike Air Max 90',
    cat:'Air Max', tags:['air max','90'], color:'#1abc9c', imgs:[] },

  { id:'am97', brand:'Nike', name:'Nike Air Max 97',
    cat:'Air Max', tags:['air max','97'], color:'#148f77', imgs:[] },

  { id:'am-tn', brand:'Nike', name:'Nike Air Max Plus TN',
    cat:'Air Max', tags:['air max','tn','plus'], color:'#0d6efd',
    imgs:['https://photo.yupoo.com/wwfake100/3c53e0782c/medium.jpeg',
          'https://photo.yupoo.com/wwfake100/d2f6a57714/medium.jpeg',
          'https://photo.yupoo.com/wwfake100/fc7935405e/medium.jpeg'] },

  { id:'am-dn', brand:'Nike', name:'Nike Air Max DN',
    cat:'Air Max', tags:['air max','dn'], color:'#0b5ed7', imgs:[] },

  { id:'am-270', brand:'Nike', name:'Nike Air Max 270',
    cat:'Air Max', tags:['air max','270'], color:'#0a58ca',
    imgs:['https://photo.yupoo.com/wwfake100/a43f5aef55/medium.jpeg',
          'https://photo.yupoo.com/wwfake100/5dcf72e406/medium.jpeg'] },

  { id:'am-1', brand:'Nike', name:'Nike Air Max 1',
    cat:'Air Max', tags:['air max','1'], color:'#0e6251',
    imgs:['https://photo.yupoo.com/wwfake100/a6e10a7647/medium.jpeg',
          'https://photo.yupoo.com/wwfake100/0ec21e5264/medium.jpeg'] },

  { id:'am-tl', brand:'Nike', name:'Nike Air Max TL',
    cat:'Air Max', tags:['air max','tl'], color:'#0c7489', imgs:[] },

  { id:'am-moto', brand:'Nike', name:'Nike Air Max Moto',
    cat:'Air Max', tags:['air max','moto'], color:'#085e6e', imgs:[] },

  // ── AIR SHOX / OTHER NIKE ────────────────────────────────
  { id:'shox', brand:'Nike', name:'Nike Air Shox',
    cat:'Air Shox', tags:['air shox','shox'], color:'#6610f2',
    imgs:['https://photo.yupoo.com/wwfake100/25a0f4a06a/medium.jpeg',
          'https://photo.yupoo.com/wwfake100/0522ae4483/medium.jpeg',
          'https://photo.yupoo.com/wwfake100/513f3cd678/medium.jpeg'] },

  { id:'mind001', brand:'Nike', name:'Nike Mind 001',
    cat:'Mind 001', tags:['mind','001'], color:'#6f42c1',
    imgs:['https://photo.yupoo.com/wwfake100/ddc7562688/medium.jpeg',
          'https://photo.yupoo.com/wwfake100/eeb3cf0b2f/medium.jpeg',
          'https://photo.yupoo.com/wwfake100/c9e0456dc8/medium.jpeg',
          'https://photo.yupoo.com/wwfake100/0e3401c77e/medium.jpeg'] },

  { id:'mind002', brand:'Nike', name:'Nike Mind 002',
    cat:'Mind 002', tags:['mind','002'], color:'#563d7c', imgs:[] },

  { id:'nocta2', brand:'Nike', name:'Nike NOCTA 2',
    cat:'NOCTA', tags:['nocta','drake'], color:'#1e88e5',
    imgs:['https://photo.yupoo.com/wwfake100/7ff9f58b2f/medium.jpeg',
          'https://photo.yupoo.com/wwfake100/010bad1fb6/medium.jpeg',
          'https://photo.yupoo.com/wwfake100/bd4b8bcc11/medium.jpeg'] },

  { id:'vomero5', brand:'Nike', name:'Nike Vomero 5',
    cat:'Vomero', tags:['vomero','5'], color:'#138496', imgs:[] },

  { id:'uptempo', brand:'Nike', name:'Nike Uptempo',
    cat:'Uptempo', tags:['uptempo'], color:'#117a8b', imgs:[] },

  { id:'p6000', brand:'Nike', name:'Nike P6000',
    cat:'P6000', tags:['p6000'], color:'#17a2b8', imgs:[] },

  { id:'ja3', brand:'Nike', name:'Nike JA3',
    cat:'JA3', tags:['ja3','ja morant'], color:'#20c997', imgs:[] },

  { id:'book1', brand:'Nike', name:'Nike Book 1',
    cat:'Basketball', tags:['book','devin booker'], color:'#1565c0', imgs:[] },

  { id:'ow-blazer', brand:'Nike', name:'Nike Blazer – Off-White',
    cat:'Blazer', tags:['blazer','off white'], color:'#2196f3', imgs:[] },

  { id:'ts-jumpman', brand:'Nike', name:'Travis Scott Jumpman Jack',
    cat:'Jumpman', tags:['jumpman','travis scott'], color:'#42a5f5', imgs:[] },

  // ── KOBE ──────────────────────────────────────────────────
  { id:'kobe4', brand:'Nike', name:'Kobe 4',
    cat:'Kobe', tags:['kobe','4'], color:'#ffd700',
    imgs:['https://photo.yupoo.com/wwfake100/92b964f6b8/medium.jpeg',
          'https://photo.yupoo.com/wwfake100/eed71de6a5/medium.jpeg'] },

  { id:'kobe6', brand:'Nike', name:'Kobe 6',
    cat:'Kobe', tags:['kobe','6'], color:'#ffd700',
    imgs:['https://photo.yupoo.com/wwfake100/db5e776b16/medium.jpeg',
          'https://photo.yupoo.com/wwfake100/fb749d758c/medium.jpeg',
          'https://photo.yupoo.com/wwfake100/8fd9086113/medium.jpeg'] },

  { id:'kobe8', brand:'Nike', name:'Kobe 8',
    cat:'Kobe', tags:['kobe','8'], color:'#ffd700',
    imgs:['https://photo.yupoo.com/wwfake100/92c1e2f4af/medium.jpeg',
          'https://photo.yupoo.com/wwfake100/632d535904/medium.jpeg',
          'https://photo.yupoo.com/wwfake100/7d2428cf70/medium.jpeg'] },

  // ── BALENCIAGA ────────────────────────────────────────────
  { id:'blcg-track', brand:'Balenciaga', name:'Balenciaga Track',
    cat:'Balenciaga', tags:['balenciaga','track'], color:'#1a1a1a',
    imgs:['https://photo.yupoo.com/wwfake100/f4c2d4a012/medium.jpeg',
          'https://photo.yupoo.com/wwfake100/dd6993bb45/medium.jpeg',
          'https://photo.yupoo.com/wwfake100/3fa358e9d0/medium.jpeg'] },

  { id:'blcg-ts', brand:'Balenciaga', name:'Balenciaga Triple S',
    cat:'Balenciaga', tags:['balenciaga','triple s'], color:'#1a1a1a',
    imgs:['https://photo.yupoo.com/wwfake100/b4ac9d62a4/medium.jpeg',
          'https://photo.yupoo.com/wwfake100/e8b5f18a9e/medium.jpeg',
          'https://photo.yupoo.com/wwfake100/2484e6b216/medium.jpeg'] },

  { id:'blcg-ts2', brand:'Balenciaga', name:'Balenciaga Triple S 2.0',
    cat:'Balenciaga', tags:['balenciaga','triple s','2.0'], color:'#1a1a1a',
    imgs:['https://photo.yupoo.com/wwfake100/6fc994ad08/medium.jpeg',
          'https://photo.yupoo.com/wwfake100/5d17651b05/medium.jpeg'] },

  { id:'blcg-runner', brand:'Balenciaga', name:'Balenciaga Runner',
    cat:'Balenciaga', tags:['balenciaga','runner'], color:'#1a1a1a',
    imgs:['https://photo.yupoo.com/wwfake100/353a5d151f/medium.jpeg',
          'https://photo.yupoo.com/wwfake100/b73cc91aa4/medium.jpeg'] },

  { id:'blcg-3xl', brand:'Balenciaga', name:'Balenciaga 3XL',
    cat:'Balenciaga', tags:['balenciaga','3xl'], color:'#1a1a1a',
    imgs:['https://photo.yupoo.com/wwfake100/26d009063c/medium.jpeg',
          'https://photo.yupoo.com/wwfake100/e3013bd353/medium.jpeg',
          'https://photo.yupoo.com/wwfake100/31315a7049/medium.jpeg'] },

  { id:'blcg-10xl', brand:'Balenciaga', name:'Balenciaga 10XL',
    cat:'Balenciaga', tags:['balenciaga','10xl'], color:'#1a1a1a',
    imgs:['https://photo.yupoo.com/wwfake100/0936a1af40/medium.jpeg',
          'https://photo.yupoo.com/wwfake100/c06aaf63ec/medium.jpeg'] },

  { id:'blcg-speed', brand:'Balenciaga', name:'Balenciaga Speed',
    cat:'Balenciaga', tags:['balenciaga','speed'], color:'#1a1a1a',
    imgs:['https://photo.yupoo.com/wwfake100/3c018e3733/medium.jpeg',
          'https://photo.yupoo.com/wwfake100/082bb4c21b/medium.jpeg'] },

  { id:'blcg-radar', brand:'Balenciaga', name:'Balenciaga Radar',
    cat:'Balenciaga', tags:['balenciaga','radar'], color:'#1a1a1a',
    imgs:['https://photo.yupoo.com/wwfake100/ce9ee0f4c1/medium.jpeg'] },

  { id:'blcg-monday', brand:'Balenciaga', name:'Balenciaga Monday',
    cat:'Balenciaga', tags:['balenciaga','monday'], color:'#1a1a1a', imgs:[] },

  { id:'blcg-cargo', brand:'Balenciaga', name:'Balenciaga Cargo',
    cat:'Balenciaga', tags:['balenciaga','cargo'], color:'#1a1a1a', imgs:[] },

  { id:'blcg-hike', brand:'Balenciaga', name:'Balenciaga Hike',
    cat:'Balenciaga', tags:['balenciaga','hike'], color:'#1a1a1a', imgs:[] },

  { id:'blcg-hamp', brand:'Balenciaga', name:'Balenciaga Hamptons',
    cat:'Balenciaga', tags:['balenciaga','hamptons'], color:'#1a1a1a', imgs:[] },

  { id:'blcg-canvas', brand:'Balenciaga', name:'Balenciaga Canvas Shoes',
    cat:'Balenciaga', tags:['balenciaga','canvas'], color:'#1a1a1a', imgs:[] },

  { id:'blcg-boots', brand:'Balenciaga', name:'Balenciaga Boots',
    cat:'Balenciaga', tags:['balenciaga','boots'], color:'#1a1a1a', imgs:[] },

  { id:'blcg-defender', brand:'Balenciaga', name:'Balenciaga Defender',
    cat:'Balenciaga', tags:['balenciaga','defender'], color:'#1a1a1a', imgs:[] },

  { id:'blcg-xpander', brand:'Balenciaga', name:'Balenciaga X-Pander',
    cat:'Balenciaga', tags:['balenciaga','x-pander'], color:'#1a1a1a', imgs:[] },

  // ── NEW BALANCE ───────────────────────────────────────────
  { id:'nb-9060', brand:'New Balance', name:'New Balance 9060',
    cat:'New Balance', tags:['new balance','9060'], color:'#cc3333',
    imgs:['https://photo.yupoo.com/wwfake100/5de111086d/medium.jpeg',
          'https://photo.yupoo.com/wwfake100/61c5ab7e2e/medium.jpeg',
          'https://photo.yupoo.com/wwfake100/cf33aeef9f/medium.jpeg'] },

  { id:'nb-2002', brand:'New Balance', name:'New Balance 2002R',
    cat:'New Balance', tags:['new balance','2002'], color:'#cc3333',
    imgs:['https://photo.yupoo.com/wwfake100/8704f93c25/medium.jpeg',
          'https://photo.yupoo.com/wwfake100/53fd77c5c7/medium.jpeg'] },

  { id:'nb-1906', brand:'New Balance', name:'New Balance 1906',
    cat:'New Balance', tags:['new balance','1906'], color:'#cc3333',
    imgs:['https://photo.yupoo.com/wwfake100/a139d05eb8/medium.jpeg',
          'https://photo.yupoo.com/wwfake100/41d37dcc5d/medium.jpeg'] },

  { id:'nb-990v3', brand:'New Balance', name:'New Balance 990V3',
    cat:'New Balance', tags:['new balance','990v3'], color:'#cc3333',
    imgs:['https://photo.yupoo.com/wwfake100/3f92315790/medium.jpeg'] },

  { id:'nb-990v6', brand:'New Balance', name:'New Balance 990V6',
    cat:'New Balance', tags:['new balance','990v6'], color:'#cc3333',
    imgs:['https://photo.yupoo.com/wwfake100/8379598639/medium.jpeg'] },

  { id:'nb-574', brand:'New Balance', name:'New Balance 574',
    cat:'New Balance', tags:['new balance','574'], color:'#cc3333', imgs:[] },

  { id:'nb-327', brand:'New Balance', name:'New Balance 327',
    cat:'New Balance', tags:['new balance','327'], color:'#cc3333', imgs:[] },

  { id:'nb-530', brand:'New Balance', name:'New Balance 530',
    cat:'New Balance', tags:['new balance','530'], color:'#cc3333', imgs:[] },

  { id:'nb-993', brand:'New Balance', name:'New Balance 993',
    cat:'New Balance', tags:['new balance','993'], color:'#cc3333', imgs:[] },

  { id:'nb-991', brand:'New Balance', name:'New Balance 991',
    cat:'New Balance', tags:['new balance','991'], color:'#cc3333', imgs:[] },

  { id:'nb-992', brand:'New Balance', name:'New Balance 992',
    cat:'New Balance', tags:['new balance','992'], color:'#cc3333', imgs:[] },

  // ── MARGIELA ──────────────────────────────────────────────
  { id:'mg-gats', brand:'Margiela', name:'Margiela GATS',
    cat:'Margiela', tags:['margiela','gats','mm6'], color:'#2c2c2c',
    imgs:['https://photo.yupoo.com/wwfake100/4e57a723df/medium.jpeg',
          'https://photo.yupoo.com/wwfake100/e162aa860a/medium.jpeg'] },

  { id:'mg-runner', brand:'Margiela', name:'Margiela Runner MM6',
    cat:'Margiela', tags:['margiela','runner','mm6'], color:'#2c2c2c', imgs:[] },

  // ── RICK OWENS ────────────────────────────────────────────
  { id:'ro', brand:'Rick Owens', name:'Rick Owens DRKSHDW',
    cat:'Rick Owens', tags:['rick owens','drkshdw'], color:'#3a3020', imgs:[] },

  { id:'ro-ramones', brand:'Rick Owens', name:'Rick Owens Ramones',
    cat:'Rick Owens', tags:['rick owens','ramones'], color:'#3a3020', imgs:[] },

  // ── ADIDAS / YEEZY ────────────────────────────────────────
  { id:'campus', brand:'Adidas', name:'Adidas Campus',
    cat:'Adidas', tags:['adidas','campus'], color:'#000',
    imgs:['https://photo.yupoo.com/wwfake100/4cd6672484/medium.jpeg',
          'https://photo.yupoo.com/wwfake100/f901abe583/medium.jpeg',
          'https://photo.yupoo.com/wwfake100/06a2148385/medium.jpeg'] },

  { id:'yeezy-350', brand:'Adidas', name:'Yeezy Boost 350',
    cat:'Yeezy', tags:['yeezy','350','adidas'], color:'#3d3d3d',
    imgs:['https://photo.yupoo.com/wwfake100/a67da371fb/medium.jpeg',
          'https://photo.yupoo.com/wwfake100/6a124f126c/medium.jpeg'] },

  { id:'yeezy-500', brand:'Adidas', name:'Yeezy 500',
    cat:'Yeezy', tags:['yeezy','500'], color:'#3d3d3d',
    imgs:['https://photo.yupoo.com/wwfake100/ebddd2287d/medium.jpeg'] },

  { id:'yeezy-slide', brand:'Adidas', name:'Yeezy Slide',
    cat:'Yeezy', tags:['yeezy','slide'], color:'#3d3d3d',
    imgs:['https://photo.yupoo.com/wwfake100/b4ad70b179/medium.jpeg',
          'https://photo.yupoo.com/wwfake100/3897110d69/medium.jpeg'] },

  { id:'yeezy-foam', brand:'Adidas', name:'Yeezy Foam Runner',
    cat:'Yeezy', tags:['yeezy','foam'], color:'#3d3d3d',
    imgs:['https://photo.yupoo.com/wwfake100/1486a7249d/medium.jpeg',
          'https://photo.yupoo.com/wwfake100/aababdafe5/medium.jpeg'] },

  // ── ASICS ─────────────────────────────────────────────────
  { id:'asics-kayano', brand:'Asics', name:'Asics Gel-Kayano',
    cat:'Asics', tags:['asics','kayano','gel'], color:'#003399',
    imgs:['https://photo.yupoo.com/wwfake100/ae79846525/medium.jpeg',
          'https://photo.yupoo.com/wwfake100/5de111086d/medium.jpeg'] },

  // ── PUMA ──────────────────────────────────────────────────
  { id:'puma-speedcat', brand:'Puma', name:'Puma Speed Cat',
    cat:'Puma', tags:['puma','speed cat'], color:'#e94e1b', imgs:[] },

  { id:'puma-palermo', brand:'Puma', name:'Puma Palermo',
    cat:'Puma', tags:['puma','palermo'], color:'#e94e1b', imgs:[] },

  // ── CONVERSE ──────────────────────────────────────────────
  { id:'ct-allstar', brand:'Converse', name:'Converse Chuck Taylor',
    cat:'Converse', tags:['converse','chuck taylor'], color:'#cc0000', imgs:[] },

  { id:'ct-70', brand:'Converse', name:'Converse Chuck 70',
    cat:'Converse', tags:['converse','chuck 70'], color:'#cc0000', imgs:[] },

  // ── VANS ──────────────────────────────────────────────────
  { id:'vans-os', brand:'Vans', name:'Vans Old Skool',
    cat:'Vans', tags:['vans','old skool'], color:'#1a1a1a', imgs:[] },

  { id:'vans-sk8', brand:'Vans', name:'Vans Sk8-Hi',
    cat:'Vans', tags:['vans','sk8','high'], color:'#1a1a1a', imgs:[] },

  // ── SALOMON ───────────────────────────────────────────────
  { id:'salomon-xt6', brand:'Salomon', name:'Salomon XT-6',
    cat:'Salomon', tags:['salomon','xt-6'], color:'#ff6600', imgs:[] },

  { id:'salomon-sc', brand:'Salomon', name:'Salomon Speedcross',
    cat:'Salomon', tags:['salomon','speedcross'], color:'#ff6600', imgs:[] },

  // ── HOKA ──────────────────────────────────────────────────
  { id:'hoka-clifton', brand:'Hoka', name:'Hoka Clifton',
    cat:'Hoka', tags:['hoka','clifton'], color:'#1a85ff', imgs:[] },

  { id:'hoka-bondi', brand:'Hoka', name:'Hoka Bondi',
    cat:'Hoka', tags:['hoka','bondi'], color:'#1a85ff', imgs:[] },

  // ── SAUCONY ───────────────────────────────────────────────
  { id:'saucony-jazz', brand:'Saucony', name:'Saucony Jazz',
    cat:'Saucony', tags:['saucony','jazz'], color:'#cc2200', imgs:[] },

  { id:'saucony-shadow', brand:'Saucony', name:'Saucony Shadow',
    cat:'Saucony', tags:['saucony','shadow'], color:'#cc2200', imgs:[] },

  // ── ON RUNNING ────────────────────────────────────────────
  { id:'on-cloud5', brand:'On Running', name:'On Cloud 5',
    cat:'On Running', tags:['on','cloud','5'], color:'#2d2d2d', imgs:[] },

  { id:'on-monster', brand:'On Running', name:'On Cloudmonster',
    cat:'On Running', tags:['on','cloudmonster'], color:'#2d2d2d', imgs:[] },

  // ── ONITSUKA TIGER ────────────────────────────────────────
  { id:'ot-m66', brand:'Onitsuka Tiger', name:'Onitsuka Tiger Mexico 66',
    cat:'Onitsuka', tags:['onitsuka','mexico 66'], color:'#cc3333', imgs:[] },

  // ── DESIGNER SNEAKERS ────────────────────────────────────
  { id:'dior-b23', brand:'Dior', name:'Dior B23 Sneakers',
    cat:'Dior', tags:['dior','b23'], color:'#c8b89a', imgs:[] },

  { id:'dior-b27', brand:'Dior', name:'Dior B27 Sneakers',
    cat:'Dior', tags:['dior','b27'], color:'#c8b89a', imgs:[] },

  { id:'dior-b30', brand:'Dior', name:'Dior B30 Sneakers',
    cat:'Dior', tags:['dior','b30'], color:'#c8b89a', imgs:[] },

  { id:'ggdb-ss', brand:'Golden Goose', name:'Golden Goose Superstar',
    cat:'GGDB', tags:['golden goose','ggdb','superstar'], color:'#c8a430', imgs:[] },

  { id:'ggdb-bs', brand:'Golden Goose', name:'Golden Goose Ball Star',
    cat:'GGDB', tags:['golden goose','ggdb','ball star'], color:'#c8a430', imgs:[] },

  { id:'bape-sta', brand:'Bape', name:'Bape Sta',
    cat:'Bape', tags:['bape','sta'], color:'#4a7a4a', imgs:[] },

  { id:'amiri-bone', brand:'Amiri', name:'Amiri Bone Runner',
    cat:'Amiri', tags:['amiri','bone runner'], color:'#8b1a1a', imgs:[] },

  { id:'amiri-mx1', brand:'Amiri', name:'Amiri MX1',
    cat:'Amiri', tags:['amiri','mx1'], color:'#8b1a1a', imgs:[] },

  { id:'val-garavani', brand:'Valentino', name:'Valentino Garavani Sneakers',
    cat:'Valentino', tags:['valentino','garavani'], color:'#d40000', imgs:[] },

  { id:'gucci-ace', brand:'Gucci', name:'Gucci Ace Sneakers',
    cat:'Gucci', tags:['gucci','ace'], color:'#2d5a27', imgs:[] },

  { id:'mcqueen-os', brand:'McQueen', name:'Alexander McQueen Oversized',
    cat:'McQueen', tags:['mcqueen','oversized'], color:'#1a1a1a', imgs:[] },

  { id:'lanvin-curb', brand:'Lanvin', name:'Lanvin Curb Sneakers',
    cat:'Lanvin', tags:['lanvin','curb'], color:'#1a1a3e', imgs:[] },

  { id:'prada-cbs', brand:'Prada', name:'Prada Cloudbust Sneakers',
    cat:'Prada', tags:['prada','cloudbust'], color:'#2c2c2c', imgs:[] },

  { id:'loewe-flow', brand:'Loewe', name:'Loewe Flow Runner',
    cat:'Loewe', tags:['loewe','flow runner'], color:'#7a6040', imgs:[] },

  { id:'burberry-sn', brand:'Burberry', name:'Burberry Sneakers',
    cat:'Burberry', tags:['burberry'], color:'#b5924c', imgs:[] },

  { id:'miumiu-sn', brand:'Miu Miu', name:'Miu Miu Sneakers',
    cat:'Miu Miu', tags:['miu miu'], color:'#c1729e', imgs:[] },

  { id:'loro-loafer', brand:'Loro Piana', name:'Loro Piana Loafers',
    cat:'Loro Piana', tags:['loro piana','loafers'], color:'#c8a46e', imgs:[] },

  { id:'mmy-sn', brand:'Mihara Yasuhiro', name:'Mihara Yasuhiro Sneakers',
    cat:'MMY', tags:['mihara','yasuhiro'], color:'#2c2c2c', imgs:[] },

  { id:'raf-ozweego', brand:'Raf Simons', name:'Raf Simons Ozweego',
    cat:'Raf Simons', tags:['raf simons','ozweego'], color:'#1c1c1c', imgs:[] },

  { id:'mizuno-wr', brand:'Mizuno', name:'Mizuno Wave Rider',
    cat:'Mizuno', tags:['mizuno','wave rider'], color:'#003399', imgs:[] },

  { id:'brooks-ghost', brand:'Brooks', name:'Brooks Ghost',
    cat:'Brooks', tags:['brooks','ghost'], color:'#cc2200', imgs:[] },

  { id:'the-row', brand:'The Row', name:'The Row Sneakers',
    cat:'The Row', tags:['the row'], color:'#c8b89a', imgs:[] },

  { id:'stussy-nk', brand:'Stussy', name:'Stussy × Nike',
    cat:'Stussy', tags:['stussy','collab'], color:'#1a1a1a', imgs:[] },

  { id:'moncler-tr', brand:'Moncler', name:'Moncler Trailgrip',
    cat:'Moncler', tags:['moncler'], color:'#003366', imgs:[] },

  { id:'balmain-uc', brand:'Balmain', name:'Balmain Unicorn Sneakers',
    cat:'Balmain', tags:['balmain','unicorn'], color:'#8b7355', imgs:[] },

  { id:'bc-sn', brand:'Brunello Cucinelli', name:'Brunello Cucinelli Sneakers',
    cat:'Brunello', tags:['brunello cucinelli'], color:'#8b7355', imgs:[] },

  { id:'bv-sn', brand:'Bottega Veneta', name:'Bottega Veneta Sneakers',
    cat:'Bottega', tags:['bottega veneta'], color:'#7c6c2e', imgs:[] },

  { id:'chanel-sn', brand:'Chanel', name:'Chanel Sneakers',
    cat:'Chanel', tags:['chanel','sneakers'], color:'#1a1a1a', imgs:[] },

  { id:'hermes-sn', brand:'Hermès', name:'Hermès Sneakers',
    cat:'Hermes', tags:['hermes','sneakers'], color:'#e8650a', imgs:[] },

  { id:'zegna-ts', brand:'Zegna', name:'Zegna Triple Stitch',
    cat:'Zegna', tags:['zegna','triple stitch'], color:'#4a4a4a', imgs:[] },

  // ── LIFESTYLE ─────────────────────────────────────────────
  { id:'timberland', brand:'Timberland', name:'Timberland 6-Inch Boot',
    cat:'Timberland', tags:['timberland','boot'], color:'#8b6914',
    imgs:['https://photo.yupoo.com/wwfake100/4cd6672484/medium.jpeg'] },

  { id:'birk-az', brand:'Birkenstock', name:'Birkenstock Arizona',
    cat:'Birkenstock', tags:['birkenstock','arizona'], color:'#c8a46e', imgs:[] },

  { id:'birk-boston', brand:'Birkenstock', name:'Birkenstock Boston',
    cat:'Birkenstock', tags:['birkenstock','boston'], color:'#c8a46e', imgs:[] },

  { id:'ugg-classic', brand:'UGG', name:'UGG Classic Short Boot',
    cat:'UGG', tags:['ugg','classic','boot'], color:'#c8a46e', imgs:[] },

  { id:'ugg-tasman', brand:'UGG', name:'UGG Tasman Slippers',
    cat:'UGG', tags:['ugg','tasman','slippers'], color:'#c8a46e', imgs:[] },

  { id:'crocs-clog', brand:'Crocs', name:'Crocs Classic Clog',
    cat:'Crocs', tags:['crocs','clog'], color:'#4caf50', imgs:[] },

  { id:'moon-boot', brand:'Moon Boot', name:'Moon Boot Icon',
    cat:'Moon Boot', tags:['moon boot'], color:'#5c5c5c', imgs:[] },

  { id:'tnf-shoes', brand:'The North Face', name:'The North Face Shoes',
    cat:'TNF', tags:['tnf','north face'], color:'#cc2200', imgs:[] },

  { id:'arc-shoes', brand:"Arc'teryx", name:"Arc'teryx Shoes",
    cat:'Arcteryx', tags:['arcteryx'], color:'#2c4a2c', imgs:[] },

  // ── BRANDGIFT BAGS ────────────────────────────────────────
  { id:'bg-lv-nf', brand:'Louis Vuitton', name:'LV Neverfull Tote',
    cat:'Bags', tags:['lv','louis vuitton','neverfull','tote','bag'], color:'#8b6914',
    imgs:['https://photo.yupoo.com/brandgift0/dc13bf0eeb/medium.jpeg'] },

  { id:'bg-lv-sp', brand:'Louis Vuitton', name:'LV Speedy Bag',
    cat:'Bags', tags:['lv','louis vuitton','speedy','bag'], color:'#8b6914', imgs:[] },

  { id:'bg-lv-otg', brand:'Louis Vuitton', name:'LV OnTheGo Tote',
    cat:'Bags', tags:['lv','louis vuitton','onthego','tote'], color:'#8b6914', imgs:[] },

  { id:'bg-lv-poch', brand:'Louis Vuitton', name:'LV Pochette Accessoires',
    cat:'Bags', tags:['lv','louis vuitton','pochette'], color:'#8b6914', imgs:[] },

  { id:'bg-lv-wallet', brand:'Louis Vuitton', name:'LV Wallet',
    cat:'Bags', tags:['lv','louis vuitton','wallet'], color:'#8b6914', imgs:[] },

  { id:'bg-lv-men', brand:'Louis Vuitton', name:'LV Men\'s Bag',
    cat:'Bags', tags:['lv','louis vuitton','mens','bag'], color:'#8b6914', imgs:[] },

  { id:'bg-lv-trunk', brand:'Louis Vuitton', name:'LV Bisten Trunk',
    cat:'Bags', tags:['lv','louis vuitton','trunk'], color:'#8b6914', imgs:[] },

  { id:'bg-ch-flap', brand:'Chanel', name:'Chanel Classic Flap',
    cat:'Bags', tags:['chanel','classic','flap','bag'], color:'#1a1a1a', imgs:[] },

  { id:'bg-ch-woc', brand:'Chanel', name:'Chanel Wallet on Chain',
    cat:'Bags', tags:['chanel','wallet on chain','woc'], color:'#1a1a1a', imgs:[] },

  { id:'bg-ch-wallet', brand:'Chanel', name:'Chanel Wallet',
    cat:'Bags', tags:['chanel','wallet'], color:'#1a1a1a', imgs:[] },

  { id:'bg-gu-dion', brand:'Gucci', name:'Gucci Dionysus Bag',
    cat:'Bags', tags:['gucci','dionysus','bag'], color:'#2d5a27', imgs:[] },

  { id:'bg-gu-marm', brand:'Gucci', name:'Gucci Marmont Bag',
    cat:'Bags', tags:['gucci','marmont','bag'], color:'#2d5a27', imgs:[] },

  { id:'bg-gu-wallet', brand:'Gucci', name:'Gucci Wallet',
    cat:'Bags', tags:['gucci','wallet'], color:'#2d5a27', imgs:[] },

  { id:'bg-di-saddle', brand:'Dior', name:'Dior Saddle Bag',
    cat:'Bags', tags:['dior','saddle','bag'], color:'#c8b89a', imgs:[] },

  { id:'bg-di-tote', brand:'Dior', name:'Dior Book Tote',
    cat:'Bags', tags:['dior','book tote','bag'], color:'#c8b89a', imgs:[] },

  { id:'bg-ysl-loulou', brand:'YSL', name:'YSL Loulou Bag',
    cat:'Bags', tags:['ysl','saint laurent','loulou','bag'], color:'#1a1a1a', imgs:[] },

  { id:'bg-ysl-sunset', brand:'YSL', name:'YSL Sunset Bag',
    cat:'Bags', tags:['ysl','saint laurent','sunset','bag'], color:'#1a1a1a', imgs:[] },

  { id:'bg-ysl-kate', brand:'YSL', name:'YSL Kate Bag',
    cat:'Bags', tags:['ysl','saint laurent','kate','bag'], color:'#1a1a1a', imgs:[] },

  { id:'bg-prada-re', brand:'Prada', name:'Prada Re-Edition 2005',
    cat:'Bags', tags:['prada','re-edition','bag'], color:'#2c2c2c', imgs:[] },

  { id:'bg-prada-cleo', brand:'Prada', name:'Prada Cleo Bag',
    cat:'Bags', tags:['prada','cleo','bag'], color:'#2c2c2c', imgs:[] },

  { id:'bg-fendi-bag', brand:'Fendi', name:'Fendi Baguette Bag',
    cat:'Bags', tags:['fendi','baguette','bag'], color:'#c8a96e', imgs:[] },

  { id:'bg-fendi-peek', brand:'Fendi', name:'Fendi Peekaboo Bag',
    cat:'Bags', tags:['fendi','peekaboo','bag'], color:'#c8a96e', imgs:[] },

  { id:'bg-herm-birkin', brand:'Hermès', name:'Hermès Birkin',
    cat:'Bags', tags:['hermes','birkin','bag'], color:'#e8650a', imgs:[] },

  { id:'bg-herm-kelly', brand:'Hermès', name:'Hermès Kelly Bag',
    cat:'Bags', tags:['hermes','kelly','bag'], color:'#e8650a', imgs:[] },

  { id:'bg-bv-pouch', brand:'Bottega Veneta', name:'Bottega Veneta Pouch',
    cat:'Bags', tags:['bottega veneta','pouch','bag'], color:'#7c6c2e', imgs:[] },

  { id:'bg-bv-intrecc', brand:'Bottega Veneta', name:'Bottega Intrecciato Bag',
    cat:'Bags', tags:['bottega veneta','intrecciato','bag'], color:'#7c6c2e', imgs:[] },

  { id:'bg-blcg-city', brand:'Balenciaga', name:'Balenciaga City Bag',
    cat:'Bags', tags:['balenciaga','city','bag'], color:'#1a1a1a', imgs:[] },

  { id:'bg-blcg-cagole', brand:'Balenciaga', name:'Balenciaga Le Cagole',
    cat:'Bags', tags:['balenciaga','le cagole','bag'], color:'#1a1a1a', imgs:[] },

  { id:'bg-val-bag', brand:'Valentino', name:'Valentino Rockstud Bag',
    cat:'Bags', tags:['valentino','rockstud','bag'], color:'#d40000', imgs:[] },

  { id:'bg-cel-bag', brand:'Celine', name:'Celine Triomphe Bag',
    cat:'Bags', tags:['celine','triomphe','bag'], color:'#5a5a5a', imgs:[] },

  { id:'bg-giv-voyou', brand:'Givenchy', name:'Givenchy Voyou Bag',
    cat:'Bags', tags:['givenchy','voyou','bag'], color:'#1a1a2e', imgs:[] },

  { id:'bg-giv-4g', brand:'Givenchy', name:'Givenchy 4G Bag',
    cat:'Bags', tags:['givenchy','4g','bag'], color:'#1a1a2e', imgs:[] },

  { id:'bg-giv-cutout', brand:'Givenchy', name:'Givenchy Cut Out Bag',
    cat:'Bags', tags:['givenchy','cut out','bag'], color:'#1a1a2e', imgs:[] },

  { id:'bg-giv-gv3', brand:'Givenchy', name:'Givenchy GV3 Bag',
    cat:'Bags', tags:['givenchy','gv3','bag'], color:'#1a1a2e', imgs:[] },

  { id:'bg-goyard-sl', brand:'Goyard', name:'Goyard Saint Louis Tote',
    cat:'Bags', tags:['goyard','saint louis','tote','bag'], color:'#b5a642', imgs:[] },

  { id:'bg-miumiu-wand', brand:'Miu Miu', name:'Miu Miu Wander Bag',
    cat:'Bags', tags:['miu miu','wander','bag'], color:'#c1729e', imgs:[] },

  { id:'bg-jac-chi', brand:'Jacquemus', name:'Jacquemus Le Chiquito',
    cat:'Bags', tags:['jacquemus','le chiquito','bag'], color:'#e07052', imgs:[] },

  { id:'bg-jac-bamb', brand:'Jacquemus', name:'Jacquemus Le Bambino',
    cat:'Bags', tags:['jacquemus','le bambino','bag'], color:'#e07052', imgs:[] },

  { id:'bg-burb-lola', brand:'Burberry', name:'Burberry Lola Bag',
    cat:'Bags', tags:['burberry','lola','bag'], color:'#b5924c', imgs:[] },

  { id:'bg-loewe-puzz', brand:'Loewe', name:'Loewe Puzzle Bag',
    cat:'Bags', tags:['loewe','puzzle','bag'], color:'#7a6040', imgs:[] },

  { id:'bg-loewe-hamm', brand:'Loewe', name:'Loewe Hammock Bag',
    cat:'Bags', tags:['loewe','hammock','bag'], color:'#7a6040', imgs:[] },

  { id:'bg-chloe-marc', brand:'Chloe', name:'Chloe Marcie Bag',
    cat:'Bags', tags:['chloe','marcie','bag'], color:'#c8a478', imgs:[] },

  { id:'bg-mcm-vis', brand:'MCM', name:'MCM Visetos Tote',
    cat:'Bags', tags:['mcm','visetos','tote'], color:'#c8aa52', imgs:[] },

  { id:'bg-dg-sicily', brand:'Dolce & Gabbana', name:'D&G Sicily Bag',
    cat:'Bags', tags:['dolce gabbana','sicily','bag'], color:'#c8973c', imgs:[] },

  { id:'bg-bvlg-serp', brand:'Bvlgari', name:'Bvlgari Serpenti Bag',
    cat:'Bags', tags:['bvlgari','serpenti','bag'], color:'#2e6ea6', imgs:[] },

  { id:'bg-mul-alexa', brand:'Mulberry', name:'Mulberry Alexa Bag',
    cat:'Bags', tags:['mulberry','alexa','bag'], color:'#8b1a1a', imgs:[] },

  { id:'bg-vers-med', brand:'Versace', name:'Versace La Medusa Bag',
    cat:'Bags', tags:['versace','medusa','bag'], color:'#c09c2c', imgs:[] },

  { id:'bg-tf-jen', brand:'Tom Ford', name:'Tom Ford Jennifer Bag',
    cat:'Bags', tags:['tom ford','jennifer','bag'], color:'#1a1a1a', imgs:[] },

  { id:'bg-aw-rock', brand:'Alexander Wang', name:'Alexander Wang Rockie Bag',
    cat:'Bags', tags:['alexander wang','rockie','bag'], color:'#1a1a1a', imgs:[] },

  { id:'bg-sm-falb', brand:'Stella McCartney', name:'Stella McCartney Falabella',
    cat:'Bags', tags:['stella mccartney','falabella','bag'], color:'#6b9e6b', imgs:[] },
];

if (typeof module !== 'undefined') module.exports = PRODUCTS;
