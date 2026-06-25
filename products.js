// ============================================================
// THE OUTLET STORE — Product Data
// To add new products: add an object to the PRODUCTS array
// Images: array of Yupoo photo URLs (photo.yupoo.com/...)
// ============================================================

const PRODUCTS = [

  // ── NIKE / JORDAN ─────────────────────────────────────────
  { id:'nk001', brand:'Nike', name:'Air Jordan 1 High – Travis Scott',    cat:'Jordan 1',    tags:['jordan','aj1','travis scott','high'],      color:'#c8392b', imgs:[], url:'https://wwfake100.x.yupoo.com/albums/241366468' },
  { id:'nk002', brand:'Nike', name:'Air Jordan 1 High – LJR Batch',       cat:'Jordan 1',    tags:['jordan','aj1','high'],                     color:'#c8392b', imgs:[], url:'https://wwfake100.x.yupoo.com/albums/242505451' },
  { id:'nk003', brand:'Nike', name:'Air Jordan 1 High – OW Collab',       cat:'Jordan 1',    tags:['jordan','aj1','off white','high'],          color:'#c8392b', imgs:[], url:'https://wwfake100.x.yupoo.com/albums/225358534' },
  { id:'nk004', brand:'Nike', name:'Air Jordan 1 Low',                    cat:'Jordan 1',    tags:['jordan','aj1','low'],                      color:'#c8392b', imgs:[], url:'https://wwfake100.x.yupoo.com/categories/891447' },
  { id:'nk005', brand:'Nike', name:'Air Jordan 3',                        cat:'Jordan 3',    tags:['jordan','aj3'],                            color:'#e74c3c', imgs:[], url:'https://wwfake100.x.yupoo.com/albums/240160840' },
  { id:'nk006', brand:'Nike', name:'Air Jordan 3 – Black Cat',            cat:'Jordan 3',    tags:['jordan','aj3','black cat'],                color:'#e74c3c', imgs:[], url:'https://wwfake100.x.yupoo.com/albums/180647992' },
  { id:'nk007', brand:'Nike', name:'Air Jordan 3 – AMM',                  cat:'Jordan 3',    tags:['jordan','aj3','amm'],                      color:'#e74c3c', imgs:[], url:'https://wwfake100.x.yupoo.com/albums/187120993' },
  { id:'nk008', brand:'Nike', name:'Air Jordan 3 – Solefly',              cat:'Jordan 3',    tags:['jordan','aj3','solefly'],                  color:'#e74c3c', imgs:[], url:'https://wwfake100.x.yupoo.com/albums/236189163' },
  { id:'nk009', brand:'Nike', name:'Air Jordan 4',                        cat:'Jordan 4',    tags:['jordan','aj4'],                            color:'#e67e22', imgs:[], url:'https://wwfake100.x.yupoo.com/albums/239964738' },
  { id:'nk010', brand:'Nike', name:'Air Jordan 4 – LJR Batch',            cat:'Jordan 4',    tags:['jordan','aj4','ljr'],                      color:'#e67e22', imgs:[], url:'https://wwfake100.x.yupoo.com/albums/242722054' },
  { id:'nk011', brand:'Nike', name:'Air Jordan 4 – AMM',                  cat:'Jordan 4',    tags:['jordan','aj4','amm'],                      color:'#e67e22', imgs:[], url:'https://wwfake100.x.yupoo.com/albums/177839996' },
  { id:'nk012', brand:'Nike', name:'Air Jordan 4 – Black Cat',            cat:'Jordan 4',    tags:['jordan','aj4','black cat'],                color:'#e67e22', imgs:[], url:'https://wwfake100.x.yupoo.com/albums/203545421' },
  { id:'nk013', brand:'Nike', name:'Air Jordan 4 – SB Blue',              cat:'Jordan 4',    tags:['jordan','aj4','sb','blue'],                color:'#e67e22', imgs:[], url:'https://wwfake100.x.yupoo.com/albums/188992813' },
  { id:'nk014', brand:'Nike', name:'Air Jordan 4 – Union',                cat:'Jordan 4',    tags:['jordan','aj4','union'],                    color:'#e67e22', imgs:[], url:'https://wwfake100.x.yupoo.com/albums/166474758' },
  { id:'nk015', brand:'Nike', name:'Air Jordan 5',                        cat:'Jordan 5',    tags:['jordan','aj5'],                            color:'#f39c12', imgs:[], url:'https://wwfake100.x.yupoo.com/albums/224351615' },
  { id:'nk016', brand:'Nike', name:'Air Jordan 5 – OW',                   cat:'Jordan 5',    tags:['jordan','aj5','off white'],                color:'#f39c12', imgs:[], url:'https://wwfake100.x.yupoo.com/albums/153194613' },
  { id:'nk017', brand:'Nike', name:'Air Jordan 6 – Y3 Batch',             cat:'Jordan 6',    tags:['jordan','aj6','y3'],                       color:'#d35400', imgs:[], url:'https://wwfake100.x.yupoo.com/albums/240194573' },
  { id:'nk018', brand:'Nike', name:'Air Jordan 11 – LJR Batch',           cat:'Jordan 11',   tags:['jordan','aj11','ljr'],                     color:'#8e44ad', imgs:[], url:'https://wwfake100.x.yupoo.com/albums/242722548' },
  { id:'nk019', brand:'Nike', name:'Air Jordan 12',                       cat:'Jordan 12',   tags:['jordan','aj12'],                           color:'#9b59b6', imgs:[], url:'https://wwfake100.x.yupoo.com/albums/240195441' },
  { id:'nk020', brand:'Nike', name:'Air Jordan 13',                       cat:'Jordan 13',   tags:['jordan','aj13'],                           color:'#7d3c98', imgs:[], url:'https://wwfake100.x.yupoo.com/categories/891828' },
  { id:'nk021', brand:'Nike', name:'Air Jordan 14',                       cat:'Jordan 14',   tags:['jordan','aj14'],                           color:'#6c3483', imgs:[], url:'https://wwfake100.x.yupoo.com/categories/892854' },
  { id:'nk022', brand:'Nike', name:'Air Force 1 – GX Batch',              cat:'Air Force 1', tags:['af1','air force','nike'],                  color:'#2c3e50', imgs:[], url:'https://wwfake100.x.yupoo.com/albums/240161089' },
  { id:'nk023', brand:'Nike', name:'Air Force 1 – NOCTA Collab',          cat:'Air Force 1', tags:['af1','air force','nocta','drake'],          color:'#2c3e50', imgs:[], url:'https://wwfake100.x.yupoo.com/albums/241369762' },
  { id:'nk024', brand:'Nike', name:'Air Force 1 – OW Batch',              cat:'Air Force 1', tags:['af1','air force','off white'],              color:'#2c3e50', imgs:[], url:'https://wwfake100.x.yupoo.com/albums/241242576' },
  { id:'nk025', brand:'Nike', name:'Nike Dunk Low',                       cat:'Dunk',        tags:['dunk','nike','low'],                       color:'#1a252f', imgs:[], url:'https://wwfake100.x.yupoo.com/categories/891449' },
  { id:'nk026', brand:'Nike', name:'Nike Dunk High',                      cat:'Dunk',        tags:['dunk','nike','high'],                      color:'#1a252f', imgs:[], url:'https://wwfake100.x.yupoo.com/categories/891449' },
  { id:'nk027', brand:'Nike', name:'Air Max 95',                          cat:'Air Max',     tags:['air max','95','nike'],                     color:'#16a085', imgs:[], url:'https://wwfake100.x.yupoo.com/albums/243476062' },
  { id:'nk028', brand:'Nike', name:'Air Max 95 – Palace Collab',          cat:'Air Max',     tags:['air max','95','palace'],                   color:'#16a085', imgs:[], url:'https://wwfake100.x.yupoo.com/albums/243262380' },
  { id:'nk029', brand:'Nike', name:"Air Max 95 – Levi's",                 cat:'Air Max',     tags:['air max','95','levis'],                    color:'#16a085', imgs:[], url:'https://wwfake100.x.yupoo.com/albums/241696233' },
  { id:'nk030', brand:'Nike', name:'Air Max 90',                          cat:'Air Max',     tags:['air max','90','nike'],                     color:'#1abc9c', imgs:[], url:'https://wwfake100.x.yupoo.com/categories/892805' },
  { id:'nk031', brand:'Nike', name:'Air Max 97',                          cat:'Air Max',     tags:['air max','97','nike'],                     color:'#148f77', imgs:[], url:'https://wwfake100.x.yupoo.com/categories/892882' },
  { id:'nk032', brand:'Nike', name:'Air Max 98',                          cat:'Air Max',     tags:['air max','98','nike'],                     color:'#117a65', imgs:[], url:'https://wwfake100.x.yupoo.com/categories/892883' },
  { id:'nk033', brand:'Nike', name:'Air Max 1',                           cat:'Air Max',     tags:['air max','1','nike'],                      color:'#0e6251', imgs:[], url:'https://wwfake100.x.yupoo.com/albums/240195324' },
  { id:'nk034', brand:'Nike', name:'Air Max Plus TN – KZ Batch',         cat:'Air Max',     tags:['air max','tn','plus'],                     color:'#0d6efd', imgs:[], url:'https://wwfake100.x.yupoo.com/albums/240191838' },
  { id:'nk035', brand:'Nike', name:'Air Max DN',                          cat:'Air Max',     tags:['air max','dn','nike'],                     color:'#0b5ed7', imgs:[], url:'https://wwfake100.x.yupoo.com/categories/892806' },
  { id:'nk036', brand:'Nike', name:'Air Max 270',                         cat:'Air Max',     tags:['air max','270','nike'],                    color:'#0a58ca', imgs:[], url:'https://wwfake100.x.yupoo.com/albums/241521542' },
  { id:'nk037', brand:'Nike', name:'Air Shox',                            cat:'Air Shox',    tags:['air shox','shox','nike'],                  color:'#6610f2', imgs:[], url:'https://wwfake100.x.yupoo.com/categories/892851' },
  { id:'nk038', brand:'Nike', name:'Nike Mind 001',                       cat:'Mind 001',    tags:['mind','001','nike'],                       color:'#6f42c1', imgs:[], url:'https://wwfake100.x.yupoo.com/albums/242501334' },
  { id:'nk039', brand:'Nike', name:'Nike Mind 001 – LW Batch',            cat:'Mind 001',    tags:['mind','001','nike','lw'],                  color:'#6f42c1', imgs:[], url:'https://wwfake100.x.yupoo.com/albums/241794821' },
  { id:'nk040', brand:'Nike', name:'Nike Mind 002',                       cat:'Mind 002',    tags:['mind','002','nike'],                       color:'#563d7c', imgs:[], url:'https://wwfake100.x.yupoo.com/categories/891830' },
  { id:'nk041', brand:'Nike', name:'Nike JA3',                            cat:'JA3',         tags:['ja3','ja morant','nike'],                  color:'#20c997', imgs:[], url:'https://wwfake100.x.yupoo.com/categories/892852' },
  { id:'nk042', brand:'Nike', name:'Nike P6000',                          cat:'P6000',       tags:['p6000','nike'],                            color:'#17a2b8', imgs:[], url:'https://wwfake100.x.yupoo.com/categories/892855' },
  { id:'nk043', brand:'Nike', name:'Nike Vomero 5',                       cat:'Vomero',      tags:['vomero','5','nike'],                       color:'#138496', imgs:[], url:'https://wwfake100.x.yupoo.com/categories/892895' },
  { id:'nk044', brand:'Nike', name:'Nike Uptempo',                        cat:'Uptempo',     tags:['uptempo','pippen','nike'],                 color:'#117a8b', imgs:[], url:'https://wwfake100.x.yupoo.com/categories/892903' },
  { id:'nk045', brand:'Nike', name:'Nike Air Max TL',                     cat:'Air Max',     tags:['air max','tl','nike'],                     color:'#0c7489', imgs:[], url:'https://wwfake100.x.yupoo.com/categories/892880' },
  { id:'nk046', brand:'Nike', name:'Nike Air Max R4',                     cat:'Air Max',     tags:['air max','r4','nike'],                     color:'#0a6275', imgs:[], url:'https://wwfake100.x.yupoo.com/categories/892886' },
  { id:'nk047', brand:'Nike', name:'Nike Air Max Moto',                   cat:'Air Max',     tags:['air max','moto','nike'],                   color:'#085e6e', imgs:[], url:'https://wwfake100.x.yupoo.com/categories/892885' },
  { id:'nk048', brand:'Nike', name:'Nike Book 1',                         cat:'Basketball',  tags:['book','1','devin booker'],                 color:'#1565c0', imgs:[], url:'https://wwfake100.x.yupoo.com/categories/893500' },
  { id:'nk049', brand:'Nike', name:'Nike Zoom Sneakers',                  cat:'Zoom',        tags:['zoom','nike'],                             color:'#1976d2', imgs:[], url:'https://wwfake100.x.yupoo.com/categories/891833' },
  { id:'nk050', brand:'Nike', name:'Nike NOCTA 2',                        cat:'NOCTA',       tags:['nocta','drake','nike'],                    color:'#1e88e5', imgs:[], url:'https://wwfake100.x.yupoo.com/albums/219525508' },
  { id:'nk051', brand:'Nike', name:'OW Blazer',                           cat:'Blazer',      tags:['blazer','off white','nike'],               color:'#2196f3', imgs:[], url:'https://wwfake100.x.yupoo.com/albums/165849524' },
  { id:'nk052', brand:'Nike', name:'TS Jumpman Jack',                     cat:'Jumpman',     tags:['jumpman','jack','travis scott'],            color:'#42a5f5', imgs:[], url:'https://wwfake100.x.yupoo.com/categories/892884' },
  { id:'nk053', brand:'Nike', name:'Nike ReactX Rejuven8',                cat:'ReactX',      tags:['reactx','rejuven8','nike'],                color:'#64b5f6', imgs:[], url:'https://wwfake100.x.yupoo.com/categories/892890' },
  // KOBE
  { id:'nk054', brand:'Nike', name:'Kobe 4',                              cat:'Kobe',        tags:['kobe','4','kobe bryant'],                  color:'#ffd700', imgs:[], url:'https://wwfake100.x.yupoo.com/albums/171804152' },
  { id:'nk055', brand:'Nike', name:'Kobe 6',                              cat:'Kobe',        tags:['kobe','6','kobe bryant'],                  color:'#ffd700', imgs:[], url:'https://wwfake100.x.yupoo.com/albums/163474382' },
  { id:'nk056', brand:'Nike', name:'Kobe 8',                              cat:'Kobe',        tags:['kobe','8','kobe bryant'],                  color:'#ffd700', imgs:[], url:'https://wwfake100.x.yupoo.com/albums/242722798' },
  { id:'nk057', brand:'Nike', name:'Kobe – S2 Batch',                    cat:'Kobe',        tags:['kobe','s2','kobe bryant'],                 color:'#ffd700', imgs:[], url:'https://wwfake100.x.yupoo.com/albums/241274872' },

  // ── BALENCIAGA ────────────────────────────────────────────
  { id:'bl001', brand:'Balenciaga', name:'Balenciaga Track',              cat:'Balenciaga',  tags:['balenciaga','track'],                      color:'#1a1a1a', imgs:[], url:'https://wwfake100.x.yupoo.com/categories/891834' },
  { id:'bl002', brand:'Balenciaga', name:'Balenciaga Triple S',           cat:'Balenciaga',  tags:['balenciaga','triple s'],                   color:'#1a1a1a', imgs:[], url:'https://wwfake100.x.yupoo.com/categories/891836' },
  { id:'bl003', brand:'Balenciaga', name:'Balenciaga Triple S 2.0',       cat:'Balenciaga',  tags:['balenciaga','triple s','2.0'],             color:'#1a1a1a', imgs:[], url:'https://wwfake100.x.yupoo.com/categories/891837' },
  { id:'bl004', brand:'Balenciaga', name:'Balenciaga Runner',             cat:'Balenciaga',  tags:['balenciaga','runner'],                     color:'#1a1a1a', imgs:[], url:'https://wwfake100.x.yupoo.com/categories/891835' },
  { id:'bl005', brand:'Balenciaga', name:'Balenciaga 3XL',                cat:'Balenciaga',  tags:['balenciaga','3xl'],                        color:'#1a1a1a', imgs:[], url:'https://wwfake100.x.yupoo.com/categories/892892' },
  { id:'bl006', brand:'Balenciaga', name:'Balenciaga 10XL',               cat:'Balenciaga',  tags:['balenciaga','10xl'],                       color:'#1a1a1a', imgs:[], url:'https://wwfake100.x.yupoo.com/categories/892893' },
  { id:'bl007', brand:'Balenciaga', name:'Balenciaga 16XL',               cat:'Balenciaga',  tags:['balenciaga','16xl'],                       color:'#1a1a1a', imgs:[], url:'https://wwfake100.x.yupoo.com/categories/892894' },
  { id:'bl008', brand:'Balenciaga', name:'Balenciaga Speed',              cat:'Balenciaga',  tags:['balenciaga','speed'],                      color:'#1a1a1a', imgs:[], url:'https://wwfake100.x.yupoo.com/categories/892887' },
  { id:'bl009', brand:'Balenciaga', name:'Balenciaga Radar',              cat:'Balenciaga',  tags:['balenciaga','radar'],                      color:'#1a1a1a', imgs:[], url:'https://wwfake100.x.yupoo.com/categories/891838' },
  { id:'bl010', brand:'Balenciaga', name:'Balenciaga Anatomic',           cat:'Balenciaga',  tags:['balenciaga','anatomic'],                   color:'#1a1a1a', imgs:[], url:'https://wwfake100.x.yupoo.com/categories/892801' },
  { id:'bl011', brand:'Balenciaga', name:'Balenciaga Monday',             cat:'Balenciaga',  tags:['balenciaga','monday'],                     color:'#1a1a1a', imgs:[], url:'https://wwfake100.x.yupoo.com/categories/892896' },
  { id:'bl012', brand:'Balenciaga', name:'Balenciaga Cargo',              cat:'Balenciaga',  tags:['balenciaga','cargo'],                      color:'#1a1a1a', imgs:[], url:'https://wwfake100.x.yupoo.com/categories/892899' },
  { id:'bl013', brand:'Balenciaga', name:'Balenciaga Hike',               cat:'Balenciaga',  tags:['balenciaga','hike'],                       color:'#1a1a1a', imgs:[], url:'https://wwfake100.x.yupoo.com/categories/892900' },
  { id:'bl014', brand:'Balenciaga', name:'Balenciaga Hamptons',           cat:'Balenciaga',  tags:['balenciaga','hamptons'],                   color:'#1a1a1a', imgs:[], url:'https://wwfake100.x.yupoo.com/categories/892888' },
  { id:'bl015', brand:'Balenciaga', name:'Balenciaga Canvas Shoes',       cat:'Balenciaga',  tags:['balenciaga','canvas'],                     color:'#1a1a1a', imgs:[], url:'https://wwfake100.x.yupoo.com/categories/892891' },
  { id:'bl016', brand:'Balenciaga', name:'Balenciaga HD Sneakers',        cat:'Balenciaga',  tags:['balenciaga','hd'],                         color:'#1a1a1a', imgs:[], url:'https://wwfake100.x.yupoo.com/categories/892889' },
  { id:'bl017', brand:'Balenciaga', name:'Balenciaga x Puma',             cat:'Balenciaga',  tags:['balenciaga','puma','collab'],              color:'#1a1a1a', imgs:[], url:'https://wwfake100.x.yupoo.com/categories/892850' },
  { id:'bl018', brand:'Balenciaga', name:'Balenciaga Slippers',           cat:'Balenciaga',  tags:['balenciaga','slippers'],                   color:'#1a1a1a', imgs:[], url:'https://wwfake100.x.yupoo.com/categories/891846' },
  { id:'bl019', brand:'Balenciaga', name:'Balenciaga Boots',              cat:'Balenciaga',  tags:['balenciaga','boots'],                      color:'#1a1a1a', imgs:[], url:'https://wwfake100.x.yupoo.com/categories/892879' },
  { id:'bl020', brand:'Balenciaga', name:'Balenciaga Defender',           cat:'Balenciaga',  tags:['balenciaga','defender'],                   color:'#1a1a1a', imgs:[], url:'https://wwfake100.x.yupoo.com/categories/893513' },
  { id:'bl021', brand:'Balenciaga', name:'Balenciaga X-Pander',           cat:'Balenciaga',  tags:['balenciaga','x-pander'],                   color:'#1a1a1a', imgs:[], url:'https://wwfake100.x.yupoo.com/categories/893609' },

  // ── NEW BALANCE ───────────────────────────────────────────
  { id:'nb001', brand:'New Balance', name:'New Balance 2002R',            cat:'New Balance', tags:['new balance','2002','2002r'],              color:'#cc3333', imgs:[], url:'https://wwfake100.x.yupoo.com/categories/892812' },
  { id:'nb002', brand:'New Balance', name:'New Balance 1906',             cat:'New Balance', tags:['new balance','1906'],                      color:'#cc3333', imgs:[], url:'https://wwfake100.x.yupoo.com/categories/892813' },
  { id:'nb003', brand:'New Balance', name:'New Balance 9060',             cat:'New Balance', tags:['new balance','9060'],                      color:'#cc3333', imgs:[], url:'https://wwfake100.x.yupoo.com/categories/892814' },
  { id:'nb004', brand:'New Balance', name:'New Balance 990V3',            cat:'New Balance', tags:['new balance','990','990v3'],               color:'#cc3333', imgs:[], url:'https://wwfake100.x.yupoo.com/categories/892815' },
  { id:'nb005', brand:'New Balance', name:'New Balance 990V6',            cat:'New Balance', tags:['new balance','990','990v6'],               color:'#cc3333', imgs:[], url:'https://wwfake100.x.yupoo.com/categories/892816' },
  { id:'nb006', brand:'New Balance', name:'New Balance 991',              cat:'New Balance', tags:['new balance','991'],                       color:'#cc3333', imgs:[], url:'https://wwfake100.x.yupoo.com/categories/892817' },
  { id:'nb007', brand:'New Balance', name:'New Balance 992',              cat:'New Balance', tags:['new balance','992'],                       color:'#cc3333', imgs:[], url:'https://wwfake100.x.yupoo.com/categories/892818' },
  { id:'nb008', brand:'New Balance', name:'New Balance 993',              cat:'New Balance', tags:['new balance','993'],                       color:'#cc3333', imgs:[], url:'https://wwfake100.x.yupoo.com/categories/893618' },
  { id:'nb009', brand:'New Balance', name:'New Balance 574',              cat:'New Balance', tags:['new balance','574'],                       color:'#cc3333', imgs:[], url:'https://wwfake100.x.yupoo.com/categories/892826' },
  { id:'nb010', brand:'New Balance', name:'New Balance 327',              cat:'New Balance', tags:['new balance','327'],                       color:'#cc3333', imgs:[], url:'https://wwfake100.x.yupoo.com/categories/892828' },
  { id:'nb011', brand:'New Balance', name:'New Balance 530',              cat:'New Balance', tags:['new balance','530'],                       color:'#cc3333', imgs:[], url:'https://wwfake100.x.yupoo.com/categories/892823' },
  { id:'nb012', brand:'New Balance', name:'New Balance 740',              cat:'New Balance', tags:['new balance','740'],                       color:'#cc3333', imgs:[], url:'https://wwfake100.x.yupoo.com/categories/892822' },
  { id:'nb013', brand:'New Balance', name:'New Balance 471',              cat:'New Balance', tags:['new balance','471'],                       color:'#cc3333', imgs:[], url:'https://wwfake100.x.yupoo.com/categories/892819' },
  { id:'nb014', brand:'New Balance', name:'New Balance 2000',             cat:'New Balance', tags:['new balance','2000'],                      color:'#cc3333', imgs:[], url:'https://wwfake100.x.yupoo.com/categories/892820' },
  { id:'nb015', brand:'New Balance', name:'New Balance 2010',             cat:'New Balance', tags:['new balance','2010'],                      color:'#cc3333', imgs:[], url:'https://wwfake100.x.yupoo.com/categories/892821' },
  { id:'nb016', brand:'New Balance', name:'New Balance 860',              cat:'New Balance', tags:['new balance','860'],                       color:'#cc3333', imgs:[], url:'https://wwfake100.x.yupoo.com/categories/892824' },
  { id:'nb017', brand:'New Balance', name:'New Balance 204',              cat:'New Balance', tags:['new balance','204'],                       color:'#cc3333', imgs:[], url:'https://wwfake100.x.yupoo.com/categories/892825' },

  // ── MARGIELA ──────────────────────────────────────────────
  { id:'mg001', brand:'Margiela', name:'Margiela GATS',                   cat:'Margiela',    tags:['margiela','gats','mm6'],                   color:'#2c2c2c', imgs:[], url:'https://wwfake100.x.yupoo.com/albums/240133915' },
  { id:'mg002', brand:'Margiela', name:'Margiela Runner MM6',             cat:'Margiela',    tags:['margiela','runner','mm6'],                 color:'#2c2c2c', imgs:[], url:'https://wwfake100.x.yupoo.com/albums/238072960' },
  { id:'mg003', brand:'Margiela', name:'Margiela Tabi',                   cat:'Margiela',    tags:['margiela','tabi'],                         color:'#2c2c2c', imgs:[], url:'https://wwfake100.x.yupoo.com/categories/5230724' },

  // ── RICK OWENS ────────────────────────────────────────────
  { id:'ro001', brand:'Rick Owens', name:'Rick Owens DRKSHDW Sneakers',   cat:'Rick Owens',  tags:['rick owens','drkshdw'],                    color:'#3a3020', imgs:[], url:'https://wwfake100.x.yupoo.com/categories/5230725' },
  { id:'ro002', brand:'Rick Owens', name:'Rick Owens Ramones',            cat:'Rick Owens',  tags:['rick owens','ramones'],                    color:'#3a3020', imgs:[], url:'https://wwfake100.x.yupoo.com/categories/5230725' },

  // ── ADIDAS ────────────────────────────────────────────────
  { id:'ad001', brand:'Adidas', name:'Adidas Campus',                     cat:'Adidas',      tags:['adidas','campus'],                         color:'#000000', imgs:[], url:'https://wwfake100.x.yupoo.com/categories/5231967' },
  { id:'ad002', brand:'Adidas', name:'Yeezy 350',                         cat:'Yeezy',       tags:['yeezy','350','adidas'],                    color:'#3d3d3d', imgs:[], url:'https://wwfake100.x.yupoo.com/categories/5232584' },
  { id:'ad003', brand:'Adidas', name:'Yeezy 500',                         cat:'Yeezy',       tags:['yeezy','500','adidas'],                    color:'#3d3d3d', imgs:[], url:'https://wwfake100.x.yupoo.com/categories/5232584' },
  { id:'ad004', brand:'Adidas', name:'Yeezy 700',                         cat:'Yeezy',       tags:['yeezy','700','adidas'],                    color:'#3d3d3d', imgs:[], url:'https://wwfake100.x.yupoo.com/categories/5232584' },
  { id:'ad005', brand:'Adidas', name:'Yeezy Foam Runner',                 cat:'Yeezy',       tags:['yeezy','foam','adidas'],                   color:'#3d3d3d', imgs:[], url:'https://wwfake100.x.yupoo.com/albums/164922649' },
  { id:'ad006', brand:'Adidas', name:'Yeezy Slide',                       cat:'Yeezy',       tags:['yeezy','slide','adidas'],                  color:'#3d3d3d', imgs:[], url:'https://wwfake100.x.yupoo.com/albums/164922638' },

  // ── ASICS ─────────────────────────────────────────────────
  { id:'as001', brand:'Asics', name:'Asics Gel-Kayano',                   cat:'Asics',       tags:['asics','kayano','gel'],                    color:'#003399', imgs:[], url:'https://wwfake100.x.yupoo.com/categories/5230588' },
  { id:'as002', brand:'Asics', name:'Asics Gel-Nimbus',                   cat:'Asics',       tags:['asics','nimbus','gel'],                    color:'#003399', imgs:[], url:'https://wwfake100.x.yupoo.com/categories/5230588' },

  // ── PUMA ──────────────────────────────────────────────────
  { id:'pm001', brand:'Puma', name:'Puma Speed Cat',                      cat:'Puma',        tags:['puma','speed cat'],                        color:'#e94e1b', imgs:[], url:'https://wwfake100.x.yupoo.com/categories/5232572' },
  { id:'pm002', brand:'Puma', name:'Puma Palermo',                        cat:'Puma',        tags:['puma','palermo'],                          color:'#e94e1b', imgs:[], url:'https://wwfake100.x.yupoo.com/categories/5232572' },

  // ── CONVERSE ──────────────────────────────────────────────
  { id:'cv001', brand:'Converse', name:'Converse Chuck Taylor All Star',  cat:'Converse',    tags:['converse','chuck taylor','all star'],       color:'#cc0000', imgs:[], url:'https://wwfake100.x.yupoo.com/categories/5233759' },
  { id:'cv002', brand:'Converse', name:'Converse Chuck 70',               cat:'Converse',    tags:['converse','chuck 70'],                     color:'#cc0000', imgs:[], url:'https://wwfake100.x.yupoo.com/categories/5233759' },

  // ── VANS ──────────────────────────────────────────────────
  { id:'vn001', brand:'Vans', name:'Vans Old Skool',                      cat:'Vans',        tags:['vans','old skool'],                        color:'#1a1a1a', imgs:[], url:'https://wwfake100.x.yupoo.com/categories/5230743' },
  { id:'vn002', brand:'Vans', name:'Vans Sk8-Hi',                         cat:'Vans',        tags:['vans','sk8','high'],                       color:'#1a1a1a', imgs:[], url:'https://wwfake100.x.yupoo.com/categories/5230743' },

  // ── SALOMON ───────────────────────────────────────────────
  { id:'sl001', brand:'Salomon', name:'Salomon XT-6',                     cat:'Salomon',     tags:['salomon','xt6','xt-6'],                    color:'#ff6600', imgs:[], url:'https://wwfake100.x.yupoo.com/categories/5232730' },
  { id:'sl002', brand:'Salomon', name:'Salomon Speedcross',               cat:'Salomon',     tags:['salomon','speedcross'],                    color:'#ff6600', imgs:[], url:'https://wwfake100.x.yupoo.com/categories/5232730' },

  // ── HOKA ──────────────────────────────────────────────────
  { id:'hk001', brand:'Hoka', name:'Hoka Clifton',                        cat:'Hoka',        tags:['hoka','clifton'],                          color:'#1a85ff', imgs:[], url:'https://wwfake100.x.yupoo.com/categories/5232535' },
  { id:'hk002', brand:'Hoka', name:'Hoka Bondi',                          cat:'Hoka',        tags:['hoka','bondi'],                            color:'#1a85ff', imgs:[], url:'https://wwfake100.x.yupoo.com/categories/5232535' },
  { id:'hk003', brand:'Hoka', name:'Hoka Speedgoat',                      cat:'Hoka',        tags:['hoka','speedgoat'],                        color:'#1a85ff', imgs:[], url:'https://wwfake100.x.yupoo.com/categories/5232535' },

  // ── SAUCONY ───────────────────────────────────────────────
  { id:'sc001', brand:'Saucony', name:'Saucony Jazz',                     cat:'Saucony',     tags:['saucony','jazz'],                          color:'#cc2200', imgs:[], url:'https://wwfake100.x.yupoo.com/categories/5254539' },
  { id:'sc002', brand:'Saucony', name:'Saucony Shadow',                   cat:'Saucony',     tags:['saucony','shadow'],                        color:'#cc2200', imgs:[], url:'https://wwfake100.x.yupoo.com/categories/5254539' },

  // ── ON RUNNING ────────────────────────────────────────────
  { id:'on001', brand:'On Running', name:'On Cloud 5',                    cat:'On Running',  tags:['on','cloud','5'],                          color:'#2d2d2d', imgs:[], url:'https://wwfake100.x.yupoo.com/categories/5230735' },
  { id:'on002', brand:'On Running', name:'On Cloudmonster',               cat:'On Running',  tags:['on','cloudmonster'],                       color:'#2d2d2d', imgs:[], url:'https://wwfake100.x.yupoo.com/categories/5230735' },

  // ── ONITSUKA TIGER ────────────────────────────────────────
  { id:'ot001', brand:'Onitsuka Tiger', name:'Onitsuka Tiger Mexico 66',  cat:'Onitsuka',    tags:['onitsuka','tiger','mexico 66'],             color:'#cc3333', imgs:[], url:'https://wwfake100.x.yupoo.com/categories/5232532' },
  { id:'ot002', brand:'Onitsuka Tiger', name:'Onitsuka Tiger Ultimate 81',cat:'Onitsuka',    tags:['onitsuka','tiger','ultimate 81'],           color:'#cc3333', imgs:[], url:'https://wwfake100.x.yupoo.com/categories/5232532' },

  // ── DIOR (SNEAKERS) ───────────────────────────────────────
  { id:'di001', brand:'Dior', name:'Dior B23 Sneakers',                   cat:'Dior',        tags:['dior','b23'],                              color:'#c8b89a', imgs:[], url:'https://wwfake100.x.yupoo.com/categories/5230733' },
  { id:'di002', brand:'Dior', name:'Dior B27 Sneakers',                   cat:'Dior',        tags:['dior','b27'],                              color:'#c8b89a', imgs:[], url:'https://wwfake100.x.yupoo.com/categories/5230733' },
  { id:'di003', brand:'Dior', name:'Dior B30 Sneakers',                   cat:'Dior',        tags:['dior','b30'],                              color:'#c8b89a', imgs:[], url:'https://wwfake100.x.yupoo.com/categories/5230733' },

  // ── GOLDEN GOOSE (GGDB) ───────────────────────────────────
  { id:'gg001', brand:'Golden Goose', name:'Golden Goose Superstar',      cat:'GGDB',        tags:['golden goose','ggdb','superstar'],          color:'#c8a430', imgs:[], url:'https://wwfake100.x.yupoo.com/categories/5232540' },
  { id:'gg002', brand:'Golden Goose', name:'Golden Goose Ball Star',      cat:'GGDB',        tags:['golden goose','ggdb','ball star'],          color:'#c8a430', imgs:[], url:'https://wwfake100.x.yupoo.com/categories/5232540' },

  // ── BAPE ──────────────────────────────────────────────────
  { id:'bp001', brand:'Bape', name:'Bape Sta',                            cat:'Bape',        tags:['bape','sta','a bathing ape'],               color:'#4a7a4a', imgs:[], url:'https://wwfake100.x.yupoo.com/categories/5232718' },

  // ── AMIRI ─────────────────────────────────────────────────
  { id:'am001', brand:'Amiri', name:'Amiri Bone Runner',                  cat:'Amiri',       tags:['amiri','bone runner'],                     color:'#8b1a1a', imgs:[], url:'https://wwfake100.x.yupoo.com/categories/5233667' },
  { id:'am002', brand:'Amiri', name:'Amiri MX1',                          cat:'Amiri',       tags:['amiri','mx1'],                             color:'#8b1a1a', imgs:[], url:'https://wwfake100.x.yupoo.com/categories/5233667' },

  // ── VALENTINO ─────────────────────────────────────────────
  { id:'vl001', brand:'Valentino', name:'Valentino Garavani Sneakers',    cat:'Valentino',   tags:['valentino','garavani'],                    color:'#d40000', imgs:[], url:'https://wwfake100.x.yupoo.com/categories/5232550' },

  // ── GUCCI (SNEAKERS) ──────────────────────────────────────
  { id:'gu001', brand:'Gucci', name:'Gucci Ace Sneakers',                 cat:'Gucci',       tags:['gucci','ace'],                             color:'#2d5a27', imgs:[], url:'https://wwfake100.x.yupoo.com/categories/5232533' },
  { id:'gu002', brand:'Gucci', name:'Gucci Rhyton Sneakers',              cat:'Gucci',       tags:['gucci','rhyton'],                          color:'#2d5a27', imgs:[], url:'https://wwfake100.x.yupoo.com/categories/5232533' },

  // ── MCQUEEN ───────────────────────────────────────────────
  { id:'mq001', brand:'McQueen', name:'Alexander McQueen Oversized',      cat:'McQueen',     tags:['mcqueen','alexander','oversized'],          color:'#1a1a1a', imgs:[], url:'https://wwfake100.x.yupoo.com/categories/5232591' },

  // ── LANVIN ────────────────────────────────────────────────
  { id:'lv001', brand:'Lanvin', name:'Lanvin Curb Sneakers',              cat:'Lanvin',      tags:['lanvin','curb'],                           color:'#1a1a3e', imgs:[], url:'https://wwfake100.x.yupoo.com/categories/5232517' },

  // ── PRADA (SNEAKERS) ──────────────────────────────────────
  { id:'pr001', brand:'Prada', name:'Prada Cloudbust Sneakers',           cat:'Prada',       tags:['prada','cloudbust'],                       color:'#2c2c2c', imgs:[], url:'https://wwfake100.x.yupoo.com/categories/5230748' },
  { id:'pr002', brand:'Prada', name:'Prada Americas Cup',                 cat:'Prada',       tags:['prada','americas cup'],                    color:'#2c2c2c', imgs:[], url:'https://wwfake100.x.yupoo.com/categories/5230748' },

  // ── LOEWE (SNEAKERS) ──────────────────────────────────────
  { id:'lw001', brand:'Loewe', name:'Loewe Flow Runner',                  cat:'Loewe',       tags:['loewe','flow runner'],                     color:'#7a6040', imgs:[], url:'https://wwfake100.x.yupoo.com/categories/5230734' },

  // ── BURBERRY ──────────────────────────────────────────────
  { id:'bu001', brand:'Burberry', name:'Burberry Sneakers',               cat:'Burberry',    tags:['burberry'],                                color:'#b5924c', imgs:[], url:'https://wwfake100.x.yupoo.com/categories/5230745' },

  // ── LORO PIANA ────────────────────────────────────────────
  { id:'lp001', brand:'Loro Piana', name:'Loro Piana Loafers',            cat:'Loro Piana',  tags:['loro piana','loafers'],                    color:'#c8a46e', imgs:[], url:'https://wwfake100.x.yupoo.com/categories/5230739' },

  // ── MIUMIU ────────────────────────────────────────────────
  { id:'mm001', brand:'Miu Miu', name:'Miu Miu Sneakers',                 cat:'Miu Miu',     tags:['miu miu'],                                 color:'#c1729e', imgs:[], url:'https://wwfake100.x.yupoo.com/categories/5232014' },

  // ── LIFESTYLE / OTHER ─────────────────────────────────────
  { id:'tm001', brand:'Timberland', name:'Timberland 6-Inch Premium Boot',cat:'Timberland',  tags:['timberland','boot','6 inch'],              color:'#8b6914', imgs:[], url:'https://wwfake100.x.yupoo.com/categories/5231979' },
  { id:'bk001', brand:'Birkenstock', name:'Birkenstock Arizona',          cat:'Birkenstock', tags:['birkenstock','arizona'],                   color:'#c8a46e', imgs:[], url:'https://wwfake100.x.yupoo.com/categories/5231933' },
  { id:'bk002', brand:'Birkenstock', name:'Birkenstock Boston',           cat:'Birkenstock', tags:['birkenstock','boston'],                    color:'#c8a46e', imgs:[], url:'https://wwfake100.x.yupoo.com/categories/5231933' },
  { id:'ug001', brand:'UGG', name:'UGG Classic Short Boot',               cat:'UGG',         tags:['ugg','classic','boot'],                    color:'#c8a46e', imgs:[], url:'https://wwfake100.x.yupoo.com/categories/5232521' },
  { id:'ug002', brand:'UGG', name:'UGG Tasman Slippers',                  cat:'UGG',         tags:['ugg','tasman','slippers'],                 color:'#c8a46e', imgs:[], url:'https://wwfake100.x.yupoo.com/categories/5232521' },
  { id:'cr001', brand:'Crocs', name:'Crocs Classic Clog',                 cat:'Crocs',       tags:['crocs','clog'],                            color:'#4caf50', imgs:[], url:'https://wwfake100.x.yupoo.com/categories/5230751' },
  { id:'cr002', brand:'Crocs', name:'Crocs Classic Sandal',               cat:'Crocs',       tags:['crocs','sandal'],                          color:'#4caf50', imgs:[], url:'https://wwfake100.x.yupoo.com/categories/5230751' },
  { id:'mb001', brand:'Moon Boot', name:'Moon Boot Icon',                 cat:'Moon Boot',   tags:['moon boot','icon'],                        color:'#5c5c5c', imgs:[], url:'https://wwfake100.x.yupoo.com/categories/5232520' },
  { id:'raf001',brand:'Raf Simons', name:'Raf Simons Ozweego',            cat:'Raf Simons',  tags:['raf simons','ozweego'],                    color:'#1c1c1c', imgs:[], url:'https://wwfake100.x.yupoo.com/categories/5231977' },
  { id:'mmy001',brand:'Mihara Yasuhiro', name:'Mihara Yasuhiro Sneakers', cat:'MMY',         tags:['mihara','yasuhiro','mmy'],                 color:'#2c2c2c', imgs:[], url:'https://wwfake100.x.yupoo.com/categories/5231926' },
  { id:'miz001',brand:'Mizuno', name:'Mizuno Wave Rider',                 cat:'Mizuno',      tags:['mizuno','wave rider'],                     color:'#003399', imgs:[], url:'https://wwfake100.x.yupoo.com/categories/5231975' },
  { id:'bks001',brand:'Brooks', name:'Brooks Ghost',                      cat:'Brooks',      tags:['brooks','ghost'],                          color:'#cc2200', imgs:[], url:'https://wwfake100.x.yupoo.com/categories/5232529' },
  { id:'the001',brand:'The Row', name:'The Row Sneakers',                 cat:'The Row',     tags:['the row'],                                 color:'#c8b89a', imgs:[], url:'https://wwfake100.x.yupoo.com/categories/5232612' },
  { id:'sts001',brand:'Stussy', name:'Stussy x Nike Collab',              cat:'Stussy',      tags:['stussy','collab'],                         color:'#1a1a1a', imgs:[], url:'https://wwfake100.x.yupoo.com/categories/5232717' },
  { id:'vib001',brand:'Vibram', name:'Vibram FiveFingers',                cat:'Vibram',      tags:['vibram','fivefingers'],                    color:'#333',    imgs:[], url:'https://wwfake100.x.yupoo.com/categories/5232574' },
  { id:'mcl001',brand:'Moncler', name:'Moncler Trainers',                 cat:'Moncler',     tags:['moncler'],                                 color:'#003366', imgs:[], url:'https://wwfake100.x.yupoo.com/categories/5232519' },
  { id:'blm001',brand:'Balmain', name:'Balmain Unicorn Sneakers',         cat:'Balmain',     tags:['balmain','unicorn'],                       color:'#8b7355', imgs:[], url:'https://wwfake100.x.yupoo.com/categories/5232544' },
  { id:'brc001',brand:'Brunello Cucinelli', name:'Brunello Cucinelli Sneakers', cat:'Brunello', tags:['brunello','cucinelli'],               color:'#8b7355', imgs:[], url:'https://wwfake100.x.yupoo.com/categories/5232570' },
  { id:'zeg001',brand:'Zegna', name:'Zegna Triple Stitch Sneakers',       cat:'Zegna',       tags:['zegna','triple stitch'],                   color:'#4a4a4a', imgs:[], url:'https://wwfake100.x.yupoo.com/categories/5230738' },
  { id:'bv001', brand:'Bottega Veneta', name:'Bottega Veneta Sneakers',   cat:'Bottega',     tags:['bottega veneta','sneakers'],               color:'#7c6c2e', imgs:[], url:'https://wwfake100.x.yupoo.com/categories/5230726' },
  { id:'chsn001',brand:'Chanel', name:'Chanel Sneakers',                  cat:'Chanel',      tags:['chanel','sneakers'],                       color:'#1a1a1a', imgs:[], url:'https://wwfake100.x.yupoo.com/categories/5232560' },
  { id:'her001',brand:'Hermes', name:'Hermes Avantreille Sneakers',       cat:'Hermes',      tags:['hermes','sneakers'],                       color:'#e8650a', imgs:[], url:'https://wwfake100.x.yupoo.com/categories/5230737' },
  { id:'sm001', brand:'Saint Michael', name:'Saint Michael x Shoes',      cat:'Saint Michael',tags:['saint michael'],                          color:'#1a1a1a', imgs:[], url:'https://wwfake100.x.yupoo.com/categories/5230750' },
  { id:'arc001',brand:'Arc\'teryx', name:'Arc\'teryx Shoes',              cat:'Arcteryx',    tags:['arcteryx','arc\'teryx'],                   color:'#2c4a2c', imgs:[], url:'https://wwfake100.x.yupoo.com/categories/5232720' },
  { id:'tnf001',brand:'The North Face', name:'TNF Shoes',                 cat:'TNF',         tags:['tnf','the north face'],                    color:'#cc2200', imgs:[], url:'https://wwfake100.x.yupoo.com/categories/5232198' },

  // ── BRANDGIFT BAGS ────────────────────────────────────────
  { id:'bg001', brand:'Louis Vuitton', name:'LV Neverfull Tote',          cat:'LV Bags',     tags:['lv','louis vuitton','neverfull','tote','bag'], color:'#8b6914', imgs:[], url:'https://brandgift.x.yupoo.com/categories/227288' },
  { id:'bg002', brand:'Louis Vuitton', name:'LV Speedy Bag',              cat:'LV Bags',     tags:['lv','louis vuitton','speedy','bag'],        color:'#8b6914', imgs:[], url:'https://brandgift.x.yupoo.com/categories/227288' },
  { id:'bg003', brand:'Louis Vuitton', name:'LV Onthego Tote',            cat:'LV Bags',     tags:['lv','louis vuitton','onthego','tote','bag'],color:'#8b6914', imgs:[], url:'https://brandgift.x.yupoo.com/categories/227288' },
  { id:'bg004', brand:'Louis Vuitton', name:'LV Pochette Accessoires',    cat:'LV Bags',     tags:['lv','louis vuitton','pochette','bag'],      color:'#8b6914', imgs:[], url:'https://brandgift.x.yupoo.com/categories/227288' },
  { id:'bg005', brand:'Louis Vuitton', name:'LV Wallet & Card Holder',    cat:'LV Bags',     tags:['lv','louis vuitton','wallet','accessories'],color:'#8b6914', imgs:[], url:'https://brandgift.x.yupoo.com/categories/227308' },
  { id:'bg006', brand:'Louis Vuitton', name:'LV Men\'s Duffle Bag',       cat:'LV Bags',     tags:['lv','louis vuitton','duffle','mens','bag'], color:'#8b6914', imgs:[], url:'https://brandgift.x.yupoo.com/categories/227284' },
  { id:'bg007', brand:'Louis Vuitton', name:'LV Classic Monogram Handbag',cat:'LV Bags',     tags:['lv','louis vuitton','classic','monogram'],  color:'#8b6914', imgs:[], url:'https://brandgift.x.yupoo.com/categories/296764' },
  { id:'bg008', brand:'Louis Vuitton', name:'LV NFC Chip Version Bag',    cat:'LV Bags',     tags:['lv','louis vuitton','nfc','chip'],          color:'#8b6914', imgs:[], url:'https://brandgift.x.yupoo.com/categories/5164935' },
  { id:'bg009', brand:'Louis Vuitton', name:'LV Luggage / Bisten Trunk',  cat:'LV Bags',     tags:['lv','louis vuitton','luggage','trunk'],     color:'#8b6914', imgs:[], url:'https://brandgift.x.yupoo.com/categories/4726567' },
  { id:'bg010', brand:'Chanel', name:'Chanel Classic Flap Bag',           cat:'Chanel Bags', tags:['chanel','classic','flap','bag'],            color:'#1a1a1a', imgs:[], url:'https://brandgift.x.yupoo.com/categories/227309' },
  { id:'bg011', brand:'Chanel', name:'Chanel Wallet on Chain',            cat:'Chanel Bags', tags:['chanel','wallet on chain','woc','bag'],     color:'#1a1a1a', imgs:[], url:'https://brandgift.x.yupoo.com/categories/227309' },
  { id:'bg012', brand:'Chanel', name:'Chanel Wallet',                     cat:'Chanel Bags', tags:['chanel','wallet'],                          color:'#1a1a1a', imgs:[], url:'https://brandgift.x.yupoo.com/categories/4572784' },
  { id:'bg013', brand:'Gucci', name:'Gucci Dionysus Bag',                 cat:'Gucci Bags',  tags:['gucci','dionysus','bag'],                   color:'#2d5a27', imgs:[], url:'https://brandgift.x.yupoo.com/categories/3513672' },
  { id:'bg014', brand:'Gucci', name:'Gucci Marmont Bag',                  cat:'Gucci Bags',  tags:['gucci','marmont','bag'],                    color:'#2d5a27', imgs:[], url:'https://brandgift.x.yupoo.com/categories/3513672' },
  { id:'bg015', brand:'Gucci', name:'Gucci Wallet',                       cat:'Gucci Bags',  tags:['gucci','wallet'],                           color:'#2d5a27', imgs:[], url:'https://brandgift.x.yupoo.com/categories/227291' },
  { id:'bg016', brand:'Dior', name:'Dior Saddle Bag',                     cat:'Dior Bags',   tags:['dior','saddle','bag'],                      color:'#c8b89a', imgs:[], url:'https://brandgift.x.yupoo.com/categories/5227717' },
  { id:'bg017', brand:'Dior', name:'Dior Book Tote',                      cat:'Dior Bags',   tags:['dior','book tote','tote','bag'],            color:'#c8b89a', imgs:[], url:'https://brandgift.x.yupoo.com/categories/5227717' },
  { id:'bg018', brand:'YSL', name:'YSL Loulou Bag',                       cat:'YSL Bags',    tags:['ysl','saint laurent','loulou','bag'],       color:'#1a1a1a', imgs:[], url:'https://brandgift.x.yupoo.com/categories/3769361' },
  { id:'bg019', brand:'YSL', name:'YSL Sunset Bag',                       cat:'YSL Bags',    tags:['ysl','saint laurent','sunset','bag'],       color:'#1a1a1a', imgs:[], url:'https://brandgift.x.yupoo.com/categories/3769361' },
  { id:'bg020', brand:'YSL', name:'YSL Kate Bag',                         cat:'YSL Bags',    tags:['ysl','saint laurent','kate','bag'],         color:'#1a1a1a', imgs:[], url:'https://brandgift.x.yupoo.com/categories/3769361' },
  { id:'bg021', brand:'YSL', name:'YSL Wallet',                           cat:'YSL Bags',    tags:['ysl','saint laurent','wallet'],             color:'#1a1a1a', imgs:[], url:'https://brandgift.x.yupoo.com/categories/5081364' },
  { id:'bg022', brand:'Prada', name:'Prada Re-Edition 2005 Bag',          cat:'Prada Bags',  tags:['prada','re-edition','2005','bag'],          color:'#2c2c2c', imgs:[], url:'https://brandgift.x.yupoo.com/categories/227307' },
  { id:'bg023', brand:'Prada', name:'Prada Cleo Bag',                     cat:'Prada Bags',  tags:['prada','cleo','bag'],                       color:'#2c2c2c', imgs:[], url:'https://brandgift.x.yupoo.com/categories/227307' },
  { id:'bg024', brand:'Fendi', name:'Fendi Baguette Bag',                 cat:'Fendi Bags',  tags:['fendi','baguette','bag'],                   color:'#c8a96e', imgs:[], url:'https://brandgift.x.yupoo.com/categories/227283' },
  { id:'bg025', brand:'Fendi', name:'Fendi Peekaboo Bag',                 cat:'Fendi Bags',  tags:['fendi','peekaboo','bag'],                   color:'#c8a96e', imgs:[], url:'https://brandgift.x.yupoo.com/categories/227283' },
  { id:'bg026', brand:'Fendi', name:'Fendi Wallet & Accessories',         cat:'Fendi Bags',  tags:['fendi','wallet','accessories'],             color:'#c8a96e', imgs:[], url:'https://brandgift.x.yupoo.com/categories/573688' },
  { id:'bg027', brand:'Hermès', name:'Hermès Birkin',                     cat:'Hermes Bags', tags:['hermes','birkin','bag'],                    color:'#e8650a', imgs:[], url:'https://brandgift.x.yupoo.com/categories/227301' },
  { id:'bg028', brand:'Hermès', name:'Hermès Kelly Bag',                  cat:'Hermes Bags', tags:['hermes','kelly','bag'],                     color:'#e8650a', imgs:[], url:'https://brandgift.x.yupoo.com/categories/227301' },
  { id:'bg029', brand:'Bottega Veneta', name:'Bottega Veneta Pouch',      cat:'BV Bags',     tags:['bottega veneta','pouch','bag'],             color:'#7c6c2e', imgs:[], url:'https://brandgift.x.yupoo.com/categories/4579126' },
  { id:'bg030', brand:'Bottega Veneta', name:'Bottega Veneta Intrecciato Bag',cat:'BV Bags', tags:['bottega veneta','intrecciato','bag'],       color:'#7c6c2e', imgs:[], url:'https://brandgift.x.yupoo.com/categories/4579126' },
  { id:'bg031', brand:'Balenciaga', name:'Balenciaga City Bag',           cat:'Balenciaga Bags',tags:['balenciaga','city','bag'],               color:'#1a1a1a', imgs:[], url:'https://brandgift.x.yupoo.com/categories/363908' },
  { id:'bg032', brand:'Balenciaga', name:'Balenciaga Le Cagole Bag',      cat:'Balenciaga Bags',tags:['balenciaga','le cagole','bag'],          color:'#1a1a1a', imgs:[], url:'https://brandgift.x.yupoo.com/categories/363908' },
  { id:'bg033', brand:'Valentino', name:'Valentino Rockstud Bag',         cat:'Valentino Bags',tags:['valentino','rockstud','bag'],             color:'#d40000', imgs:[], url:'https://brandgift.x.yupoo.com/categories/227299' },
  { id:'bg034', brand:'Celine', name:'Celine Triomphe Bag',               cat:'Celine Bags', tags:['celine','triomphe','bag'],                  color:'#5a5a5a', imgs:[], url:'https://brandgift.x.yupoo.com/categories/3340154' },
  { id:'bg035', brand:'Celine', name:'Celine Luggage Tote',               cat:'Celine Bags', tags:['celine','luggage','tote','bag'],            color:'#5a5a5a', imgs:[], url:'https://brandgift.x.yupoo.com/categories/3340154' },
  { id:'bg036', brand:'Givenchy', name:'Givenchy Voyou Bag',              cat:'Givenchy Bags',tags:['givenchy','voyou','bag'],                  color:'#1a1a2e', imgs:[], url:'https://brandgift.x.yupoo.com/albums/239924530' },
  { id:'bg037', brand:'Givenchy', name:'Givenchy 4G Bag',                 cat:'Givenchy Bags',tags:['givenchy','4g','bag'],                     color:'#1a1a2e', imgs:[], url:'https://brandgift.x.yupoo.com/albums/239924736' },
  { id:'bg038', brand:'Givenchy', name:'Givenchy Cut Out Bag',            cat:'Givenchy Bags',tags:['givenchy','cut out','bag'],                color:'#1a1a2e', imgs:[], url:'https://brandgift.x.yupoo.com/albums/239924810' },
  { id:'bg039', brand:'Givenchy', name:'Givenchy Moon Cut Bag',           cat:'Givenchy Bags',tags:['givenchy','moon','cut','bag'],             color:'#1a1a2e', imgs:[], url:'https://brandgift.x.yupoo.com/albums/239924874' },
  { id:'bg040', brand:'Givenchy', name:'Givenchy GV3 Bag',                cat:'Givenchy Bags',tags:['givenchy','gv3','bag'],                    color:'#1a1a2e', imgs:[], url:'https://brandgift.x.yupoo.com/albums/239924667' },
  { id:'bg041', brand:'Goyard', name:'Goyard Saint Louis Tote',           cat:'Goyard Bags', tags:['goyard','saint louis','tote','bag'],        color:'#b5a642', imgs:[], url:'https://brandgift.x.yupoo.com/categories/487176' },
  { id:'bg042', brand:'Goyard', name:'Goyard Artois Bag',                 cat:'Goyard Bags', tags:['goyard','artois','bag'],                    color:'#b5a642', imgs:[], url:'https://brandgift.x.yupoo.com/categories/487176' },
  { id:'bg043', brand:'Miu Miu', name:'Miu Miu Wander Bag',              cat:'Miu Miu Bags',tags:['miu miu','wander','bag'],                   color:'#c1729e', imgs:[], url:'https://brandgift.x.yupoo.com/categories/347982' },
  { id:'bg044', brand:'Miu Miu', name:'Miu Miu Arcade Bag',              cat:'Miu Miu Bags',tags:['miu miu','arcade','bag'],                   color:'#c1729e', imgs:[], url:'https://brandgift.x.yupoo.com/categories/347982' },
  { id:'bg045', brand:'Jacquemus', name:'Jacquemus Le Chiquito',          cat:'Jacquemus',   tags:['jacquemus','le chiquito','bag'],            color:'#e07052', imgs:[], url:'https://brandgift.x.yupoo.com/categories/4705122' },
  { id:'bg046', brand:'Jacquemus', name:'Jacquemus Le Bambino',           cat:'Jacquemus',   tags:['jacquemus','le bambino','bag'],             color:'#e07052', imgs:[], url:'https://brandgift.x.yupoo.com/categories/4705122' },
  { id:'bg047', brand:'Burberry', name:'Burberry Lola Bag',               cat:'Burberry Bags',tags:['burberry','lola','bag'],                  color:'#b5924c', imgs:[], url:'https://brandgift.x.yupoo.com/categories/227296' },
  { id:'bg048', brand:'Loewe', name:'Loewe Puzzle Bag',                   cat:'Loewe Bags',  tags:['loewe','puzzle','bag'],                     color:'#7a6040', imgs:[], url:'https://brandgift.x.yupoo.com/categories/4746840' },
  { id:'bg049', brand:'Loewe', name:'Loewe Hammock Bag',                  cat:'Loewe Bags',  tags:['loewe','hammock','bag'],                    color:'#7a6040', imgs:[], url:'https://brandgift.x.yupoo.com/categories/4746840' },
  { id:'bg050', brand:'Chloe', name:'Chloe Marcie Bag',                   cat:'Chloe Bags',  tags:['chloe','marcie','bag'],                     color:'#c8a478', imgs:[], url:'https://brandgift.x.yupoo.com/categories/227290' },
  { id:'bg051', brand:'Chloe', name:'Chloe Pixie Bag',                    cat:'Chloe Bags',  tags:['chloe','pixie','bag'],                      color:'#c8a478', imgs:[], url:'https://brandgift.x.yupoo.com/categories/227290' },
  { id:'bg052', brand:'MCM', name:'MCM Visetos Tote',                     cat:'MCM Bags',    tags:['mcm','visetos','tote','bag'],               color:'#c8aa52', imgs:[], url:'https://brandgift.x.yupoo.com/categories/2963170' },
  { id:'bg053', brand:'Dolce & Gabbana', name:'D&G Sicily Bag',           cat:'D&G Bags',    tags:['dolce gabbana','dg','sicily','bag'],        color:'#c8973c', imgs:[], url:'https://brandgift.x.yupoo.com/categories/2897850' },
  { id:'bg054', brand:'Bvlgari', name:'Bvlgari Serpenti Bag',             cat:'Bvlgari Bags',tags:['bvlgari','serpenti','bag'],                 color:'#2e6ea6', imgs:[], url:'https://brandgift.x.yupoo.com/categories/3330853' },
  { id:'bg055', brand:'Mulberry', name:'Mulberry Alexa Bag',              cat:'Mulberry Bags',tags:['mulberry','alexa','bag'],                  color:'#8b1a1a', imgs:[], url:'https://brandgift.x.yupoo.com/categories/227287' },
  { id:'bg056', brand:'Versace', name:'Versace La Medusa Bag',            cat:'Versace Bags',tags:['versace','la medusa','bag'],                color:'#c09c2c', imgs:[], url:'https://brandgift.x.yupoo.com/categories/227305' },
  { id:'bg057', brand:'Tom Ford', name:'Tom Ford Jennifer Bag',           cat:'Tom Ford Bags',tags:['tom ford','jennifer','bag'],               color:'#1a1a1a', imgs:[], url:'https://brandgift.x.yupoo.com/categories/3209978' },
  { id:'bg058', brand:'Alexander Wang', name:'Alexander Wang Rockie Bag', cat:'AW Bags',     tags:['alexander wang','rockie','bag'],            color:'#1a1a1a', imgs:[], url:'https://brandgift.x.yupoo.com/categories/736295' },
  { id:'bg059', brand:'Stella McCartney', name:'Stella McCartney Falabella',cat:'Stella Bags',tags:['stella mccartney','falabella','bag'],     color:'#6b9e6b', imgs:[], url:'https://brandgift.x.yupoo.com/categories/227292' },
];

if (typeof module !== 'undefined') module.exports = PRODUCTS;
