"use client";

import {useEffect,useState} from "react";

const releases=[
 {year:"1995",title:"Lepi in trezni",type:"ALBUM",img:"/album-lepi-in-trezni.jpg"},
 {year:"1997",title:"Žeja",type:"ALBUM",img:"/album-zeja.jpg"},
 {year:"1998",title:"Ko to tamo peva",type:"SINGLE",img:"/ko-to-tamo-peva.jpg"},
 {year:"1999",title:"Pivolucija",type:"ALBUM",img:"/album-pivolucija.jpg"},
 {year:"1999",title:"Zadnja večerja",type:"EP",img:"/album-zadnja-vecerja.jpg"},
 {year:"2001",title:"De Best Od",type:"COMPILATION",img:"/album-de-best-of.jpg"},
 {year:"2003",title:"Prohibicija",type:"ALBUM",img:"/album-prohibicija.jpg"},
 {year:"2007",title:"Hajdi",type:"ALBUM",img:null},
 {year:"2014",title:"Recidiv",type:"ALBUM",img:null},
];

const lineup=[
 ["Domen Kolenc","VOKAL"],
 ["Robert Likar","KITARA · VOKAL"],
 ["Primož Trebec","KLAVIATURE · VOKAL"],
 ["Kristian Buovski","BAS"],
 ["Janez Grošelj","BOBNI"],
 ["David Zavolovšek","KITARA"],
];

const shows=[
 {date:"07.03.2026",datetime:"2026-03-07T19:00:00+01:00",place:"Jevnica",venue:"Jevniški Retro Džuboks · 19:00",href:null},
 {date:"25.09.2026",datetime:"2026-09-25T20:30:00+02:00",place:"Domžale",venue:"Blunout · 20:30",href:"https://blunout.si/izdelek/koncert-the-drinkers-petek-25-09-2026-20-30/"},
];

const products=[
 {name:"THE DRINKERS T-shirt",price:"€25",tag:"APPAREL"},
 {name:"THE DRINKERS Hoodie",price:"€55",tag:"APPAREL"},
 {name:"Lepi in trezni — CD",price:"€15",tag:"MUSIC"},
 {name:"The Drinkers — Poster",price:"€12",tag:"PRINT"},
];

const spotifyArtist="https://open.spotify.com/artist/6XSxgkalTJrh6wkh1LFEF5";
const youtubeSingle="https://www.youtube.com/watch?v=SvPAsFE3Y_8";
const appleMusic="https://music.apple.com/us/artist/the-drinkers/1863334471";

export default function Home(){
 const [cart,setCart]=useState<string[]>([]);
 const [cartOpen,setCartOpen]=useState(false);
 const [menuOpen,setMenuOpen]=useState(false);
 const cartProducts=cart.map(name=>products.find(p=>p.name===name)).filter(Boolean);
 const cartTotal=cartProducts.reduce((sum,p)=>sum+Number((p?.price??"€0").replace("€","")),0);
 const now=Date.now();
 const nextShow=shows.filter(s=>new Date(s.datetime).getTime()>=now).sort((a,b)=>new Date(a.datetime).getTime()-new Date(b.datetime).getTime())[0];

 useEffect(()=>{
  if(!cartOpen)return;
  const onKeyDown=(event:KeyboardEvent)=>{if(event.key==="Escape")setCartOpen(false);};
  document.addEventListener("keydown",onKeyDown);
  const previousOverflow=document.body.style.overflow;
  document.body.style.overflow="hidden";
  return()=>{document.removeEventListener("keydown",onKeyDown);document.body.style.overflow=previousOverflow;};
 },[cartOpen]);

 const toggleCartItem=(name:string)=>{
  setCart(current=>current.includes(name)?current.filter(item=>item!==name):[...current,name]);
 };

 return <main id="main-content">
  <a className="skipLink" href="#content">PRESKOČI NA VSEBINO</a>
  <nav className="nav" aria-label="Glavna navigacija">
   <a className="logo" href="#top" aria-label="The Drinkers — na vrh">THE<br/>DRINKERS</a>
   <div className="links">
    <a href="#music">MUSIC</a><a href="#band">BAND</a><a href="#media">MEDIA</a><a href="#shop">SHOP</a><a href="#live">LIVE</a><a href="#press">PRESS</a>
   </div>
   <div className="navActions">
    <button className="cart" type="button" onClick={()=>setCartOpen(true)} aria-haspopup="dialog" aria-expanded={cartOpen}>CART <span>{cart.length}</span></button>
    <button className="menuButton" type="button" onClick={()=>setMenuOpen(!menuOpen)} aria-label={menuOpen?"Zapri meni":"Odpri meni"} aria-expanded={menuOpen} aria-controls="mobileMenu">MENU <span>☰</span></button>
   </div>
   {menuOpen&&<div id="mobileMenu" className="mobileMenu">
    {["music","band","media","shop","live","press"].map(id=><a key={id} href={"#"+id} onClick={()=>setMenuOpen(false)}>{id.toUpperCase()}</a>)}
   </div>}
  </nav>

  {cartOpen&&<div className="cartBackdrop" role="presentation" onClick={()=>setCartOpen(false)}>
   <aside className="cartPanel" role="dialog" aria-modal="true" aria-labelledby="cartTitle" onClick={e=>e.stopPropagation()}>
    <div className="cartHeader"><div><span className="kicker">MERCH SELECTION</span><h2 id="cartTitle">YOUR CART.</h2></div><button type="button" className="closeButton" onClick={()=>setCartOpen(false)} aria-label="Zapri košarico">×</button></div>
    {cart.length===0?<div className="cartEmpty"><strong>KOŠARICA JE PRAZNA.</strong><p>Izberi kos mercha. Ko bo checkout priključen, bo ta izbor postal pravi nakupni tok.</p></div>:
      <div className="cartItems">{cartProducts.map(p=><div className="cartItem" key={p!.name}><div><strong>{p!.name}</strong><span>{p!.tag}</span></div><div><b>{p!.price}</b><button type="button" onClick={()=>toggleCartItem(p!.name)}>REMOVE</button></div></div>)}</div>}
    <div className="cartFooter"><div><span>TOTAL SELECTION</span><strong>€{cartTotal}</strong></div><button type="button" className="btn primary cartCta" disabled>CHECKOUT · COMING SOON</button><p>Plačila in dostava še niso povezani; trenutno gre za vizualni trgovinski prototip.</p></div>
   </aside>
  </div>}

  <div id="content" className="contentAnchor" aria-hidden="true"/>
  <section id="top" className="hero" aria-labelledby="heroTitle">
   <div className="heroBg"/><div className="heroOverlay"/>
   <div className="heroContent"><p className="eyebrow">LITIJA · SLOVENIA · SINCE 1993</p><h1 id="heroTitle">THE<br/><em>DRINKERS</em></h1><p className="heroLead">THE DRINKERS 2.0 · NOVA ZASEDBA · NOVA GLASBA</p><div className="actions"><a className="btn primary" href="#new">NI ŠE UMRU ↓</a><a className="btn ghost" href="#live">LIVE DATES</a></div></div>
   <div className="heroStamp">TD<br/><small>BACK · 2026</small></div>
  </section>

  <div className="ticker" aria-label="Novosti">
   <span>THE DRINKERS 2.0</span><span>NI ŠE UMRU</span><span>DOMEN KOLENC</span><span>{nextShow?nextShow.date+" · "+nextShow.place:"NEW LIVE DATES SOON"}</span><span>THE DRINKERS</span><span>NEW MUSIC</span>
  </div>

  <section id="new" className="newRelease section">
   <div className="releaseVisual"><img src="https://i.ytimg.com/vi/SvPAsFE3Y_8/maxresdefault.jpg" alt="The Drinkers — Ni še umru, videospot" /></div>
   <div className="releaseCopy"><span className="kicker">NEW SINGLE · 2026</span><h2>NI ŠE<br/><i>UMRU.</i></h2><p>Prvi novi singel novega obdobja The Drinkers. Glasbo je napisal Robert Likar, besedilo Domen Kolenc. Videospot je režiral in zmontiral Rožle Kisovec.</p><div className="releaseActions"><a className="btn darkSolid" href={youtubeSingle} target="_blank" rel="noopener noreferrer">WATCH VIDEO ↗</a><a className="btn darkGhost" href={spotifyArtist} target="_blank" rel="noopener noreferrer">SPOTIFY ↗</a></div></div>
  </section>

  <section id="band" className="band section">
   <div className="sectionHead"><span>01 / THE NEW DRINKERS</span><h2>NOVA<br/><i>ZASEDBA.</i></h2></div>
   <div className="bandGrid">{lineup.map(([name,role],i)=><article className="member" key={name}><span>0{i+1}</span><div><h3>{name}</h3><p>{role}</p></div></article>)}</div>
   <p className="sourceNote">Vir za aktualno zasedbo: Blunout, 25. 9. 2026, in Rockline, 15. 9. 2026.</p>
  </section>

  <section id="media" className="media section">
   <div className="sectionHead light"><span>02 / NEW MEDIA</span><h2>NOVI<br/><i>OBRAZ.</i></h2></div>
   <div className="mediaGrid">
    <article className="mediaCard featured"><img src="https://kultura.media.si/media/2026/08/mpro-retrieved-fb-photo-1553544069578762-1785890530096-150x150.avif" alt="The Drinkers — aktualna fotografija, 2026" loading="lazy" /><div><span>2026 · PRESS PHOTO</span><h3>THE DRINKERS 2.0</h3><p>Aktualna fotografija, objavljena ob napovedi koncerta v Domžalah.</p><a href="https://www.rockline.si/opojni-napitki-eksoticne-plesalke-in-zupnik-the-drinkers-so-nazaj/" target="_blank" rel="noopener noreferrer">PRESS SOURCE ↗</a></div></article>
    <article className="mediaCard"><img src="https://i.ytimg.com/vi/SvPAsFE3Y_8/maxresdefault.jpg" alt="Ni še umru — videospot" loading="lazy" /><div><span>NEW VIDEO</span><h3>NI ŠE UMRU</h3><p>Uradni videospot nove skladbe.</p><a href={youtubeSingle} target="_blank" rel="noopener noreferrer">OGLEJ ↗</a></div></article>
   </div>
   <p className="sourceNote">Fotografija: Špela Ostrež / objavljeno pri Rockline. Pred produkcijsko objavo je potrebno urediti dovoljenje imetnika pravic; do takrat naj ostane ta vir le referenca.</p>
  </section>

  <section id="story" className="story section">
   <div className="sectionHead"><span>03 / STORY</span><h2>IZ LITIJE.<br/><i>NA ODER.</i></h2></div>
   <div className="storyGrid"><div className="storyImage"><img src="/drinkers-band-photo.jpg" alt="The Drinkers" loading="lazy"/></div><div className="storyText"><p className="big">1993 → 2026</p><p>The Drinkers so nastali leta 1993 v Litiji. Po večletnem premoru so se leta 2026 vrnili na odre z novo zasedbo, ki jo vodi Domen Kolenc.</p><p>Prvi nastop nove zasedbe je bil 7. marca 2026 na Jevniškem Retro Džuboksu v Jevnici.</p><a className="textLink" href="#timeline">ODPRI ARHIV →</a></div></div>
  </section>

  <section id="music" className="music section">
   <div className="sectionHead light"><span>04 / DISCOGRAPHY</span><h2>ZGODOVINA<br/><i>+ NOVA ERA.</i></h2></div>
   <div className="albums">{releases.map((a,i)=><article className="album" key={a.title+a.year}><div className={"albumCover "+(!a.img?"textCover":"")}>{a.img?<img src={a.img} alt={a.title+" — "+a.type} loading="lazy"/>:<strong>{a.title}</strong>}<span>{String(i+1).padStart(2,"0")}</span></div><div className="albumMeta"><span>{a.year} · {a.type}</span><h3>{a.title}</h3><a href="#listen">ARTIST ↗</a></div></article>)}</div>
   <div className="currentTrack"><span>2026 · NEW SINGLE</span><strong>NI ŠE UMRU</strong><a href={youtubeSingle} target="_blank" rel="noopener noreferrer">PLAY VIDEO ↗</a></div>
  </section>

  <section id="listen" className="listen section"><div><span className="kicker">LISTEN NOW</span><h2>THE SOUND<br/><i>OF DRINKERS.</i></h2></div><div className="platforms"><a href={youtubeSingle} target="_blank" rel="noopener noreferrer">NI ŠE UMRU · YOUTUBE ↗</a><a href={spotifyArtist} target="_blank" rel="noopener noreferrer">THE DRINKERS · SPOTIFY ↗</a><a href={appleMusic} target="_blank" rel="noopener noreferrer">THE DRINKERS · APPLE MUSIC ↗</a></div></section>

  <section id="timeline" className="timeline section">
   <div className="sectionHead"><span>05 / ARCHIVE</span><h2>1993 → <i>2026</i></h2></div>
   <div className="years">{[["1993","Nastanek skupine v Litiji."],["1995","Lepi in trezni."],["1997","Žeja."],["1999","Pivolucija in Zadnja večerja."],["2001","De Best Od."],["2003","Prohibicija."],["2007","Hajdi."],["2014","Recidiv."],["07.03.2026","Prvi nastop nove zasedbe · Jevnica."],["2026","Nova skladba: Ni še umru."]].map(x=><div className="year" key={x[0]}><strong>{x[0]}</strong><p>{x[1]}</p></div>)}</div>
  </section>

  <section id="shop" className="shop section">
   <div className="sectionHead light"><span>06 / SHOP</span><h2>WEAR THE<br/><i>NOISE.</i></h2></div>
   <div className="products">{products.map(p=><article className="product" key={p.name}><div className="productVisual"><span>{p.tag}</span><div className="productMark">TD</div></div><div className="productInfo"><div><h3>{p.name}</h3><p>{p.price}</p></div><button type="button" onClick={()=>toggleCartItem(p.name)} aria-pressed={cart.includes(p.name)}>{cart.includes(p.name)?"SELECTED ✓":"ADD TO CART +"}</button></div></article>)}</div>
   <p className="shopNote">Trgovina je trenutno pripravljena kot preverljiv katalog in UX osnova. Checkout, plačilo, zaloga, velikosti in dostava še niso povezani.</p>
  </section>

  <section id="press" className="press section">
   <div className="sectionHead"><span>07 / PRESS & BOOKING</span><h2>READY FOR<br/><i>THE STAGE.</i></h2></div>
   <div className="pressGrid">
    <div>
     <p className="pressLead">THE DRINKERS 2.0 · LITIJA · SLOVENIA · 1993 → 2026</p>
     <p>Nova zasedba nadaljuje zgodbo skupine The Drinkers z Domnom Kolencem za mikrofonom, novo skladbo <strong>Ni še umru</strong> in javno napovedanim koncertom v Blunoutu v Domžalah.</p>
     <p>Za novi singel je glasbo napisal Robert Likar, besedilo Domen Kolenc, videospot pa je režiral in zmontiral Rožle Kisovec.</p>
     <div className="pressLinks">
      <a href="https://www.rockline.si/opojni-napitki-eksoticne-plesalke-in-zupnik-the-drinkers-so-nazaj/" target="_blank" rel="noopener noreferrer">ROCKLINE ↗</a>
      <a href="https://www.rocker.si/the-drinkers-so-nazaj-sin-pokojnega-kolija-za-mikrofonom-v-novi-pesmi-ni-se-umru/" target="_blank" rel="noopener noreferrer">ROCKER.SI ↗</a>
      <a href="https://kultura.media.si/event/blunout-the-drinkers-25-09-2026" target="_blank" rel="noopener noreferrer">KULTURA.NET ↗</a>
      <a href={youtubeSingle} target="_blank" rel="noopener noreferrer">YOUTUBE ↗</a>
      <a href={spotifyArtist} target="_blank" rel="noopener noreferrer">SPOTIFY ↗</a>
      <a href={appleMusic} target="_blank" rel="noopener noreferrer">APPLE MUSIC ↗</a>
     </div>
    </div>
    <div className="pressFacts">
     <div><span>LINEUP</span><strong>6 MEMBERS</strong></div>
     <div><span>FRONTMAN</span><strong>DOMEN KOLENC</strong></div>
     <div><span>NEW SINGLE</span><strong>NI ŠE UMRU</strong></div>
     <div><span>NEXT PUBLIC SHOW</span><strong>25.09.2026 · BLUNOUT · DOMŽALE</strong></div>
     <div><span>HOMETOWN</span><strong>LITIJA · SLOVENIA</strong></div>
     <div><span>OUTPUT</span><strong>LIVE · MUSIC · MEDIA · MERCH</strong></div>
    </div>
   </div>
   <p className="sourceNote">Aktualno zasedbo in vrnitev v letu 2026 potrjujeta Rockline in Blunout/Kultura.net (september 2026). Formalnega booking kontakta ne objavljamo, dokler uradni kontakt ni potrjen.</p>
  </section>

  <section id="live" className="live section">
   <div className="sectionHead"><span>08 / LIVE</span><h2>SEE YOU<br/><i>OUT THERE.</i></h2></div>
   <div className="shows">{shows.map(s=>{const upcoming=s.datetime===nextShow?.datetime;return <article className={"show "+(upcoming?"next":"")} key={s.date}><div><strong><time dateTime={s.datetime}>{s.date}</time></strong><span>{upcoming?"NASLEDNJI NASTOP":"ODIGRANO"}</span></div><div><h3>{s.place}</h3><p>{s.venue}</p></div>{upcoming&&s.href?<a className="btn primary" href={s.href} target="_blank" rel="noopener noreferrer">TICKETS ↗</a>:<span className="showPast" aria-label="Nastop odigran">✓</span>}</article>;})}</div>
   <div className="liveCard"><span>THE RETURN</span><h3>THE STORY<br/>CONTINUES.</h3>{nextShow?<><p>Naslednji javno objavljen nastop: {nextShow.date} · {nextShow.venue} · {nextShow.place}.</p><a className="btn primary" href={nextShow.href??"#live"} target={nextShow.href?"_blank":undefined} rel={nextShow.href?"noopener noreferrer":undefined}>{nextShow.href?("TICKETS · "+nextShow.place.toUpperCase()+" ↗"):"LIVE UPDATES →"}</a></>:<p>Trenutno ni javno objavljenega naslednjega termina. Nove nastope bomo dodali v LIVE.</p>}</div>
  </section>

  <footer id="contact">
   <div className="footerBrand">THE<br/><i>DRINKERS</i></div>
   <div><span>PRESS</span><a href="https://www.rockline.si/opojni-napitki-eksoticne-plesalke-in-zupnik-the-drinkers-so-nazaj/" target="_blank" rel="noopener noreferrer">Rockline · 2026 ↗</a><a href="https://kultura.media.si/event/blunout-the-drinkers-25-09-2026" target="_blank" rel="noopener noreferrer">Kultura.net · Blunout ↗</a></div>
   <div><span>LIVE</span><a href="https://blunout.si/izdelek/koncert-the-drinkers-petek-25-09-2026-20-30/" target="_blank" rel="noopener noreferrer">25.09.2026 · BLUNOUT ↗</a><a href="#press">PRESS / BOOKING →</a><a href="#shop">MERCH →</a></div>
   <small>© THE DRINKERS · LITIJA · SLOVENIA · 2026</small>
  </footer>
 </main>
}
