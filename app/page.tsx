"use client";

import {useState} from "react";

const albums=[
 {year:"1995",title:"Lepi in trezni",img:"/album-lepi-in-trezni.jpg"},
 {year:"1997",title:"Žeja",img:"/album-zeja.jpg"},
 {year:"1999",title:"Pivolucija",img:"/album-pivolucija.jpg"},
 {year:"1999",title:"Zadnja večerja",img:"/album-zadnja-vecerja.jpg"},
 {year:"2001",title:"De Best Od",img:"/album-de-best-of.jpg"},
 {year:"2003",title:"Prohibicija",img:"/album-prohibicija.jpg"},
];

const products=[
 {name:"THE DRINKERS T-shirt",price:"€25",tag:"APPAREL"},
 {name:"THE DRINKERS Hoodie",price:"€55",tag:"APPAREL"},
 {name:"Lepi in trezni — CD",price:"€15",tag:"MUSIC"},
 {name:"The Drinkers — Poster",price:"€12",tag:"PRINT"}
];

export default function Home(){
 const [cart,setCart]=useState<string[]>([]);
 return <main>
  <nav className="nav"><a className="logo" href="#top">THE<br/>DRINKERS</a><div className="links"><a href="#music">MUSIC</a><a href="#story">STORY</a><a href="#shop">SHOP</a><a href="#live">LIVE</a></div><a className="cart" href="#shop">CART <span>{cart.length}</span></a></nav>

  <section id="top" className="hero">
   <div className="heroBg"/>
   <div className="heroOverlay"/>
   <div className="heroContent"><p className="eyebrow">LITIJA · SLOVENIA · SINCE 1993</p><h1>THE<br/><em>DRINKERS</em></h1><p className="heroLead">ROCK'N'ROLL, KI NE POTREBUJE RAZLAGE.</p><div className="actions"><a className="btn primary" href="#music">EXPLORE THE BAND ↓</a><a className="btn ghost" href="#shop">SHOP THE MERCH</a></div></div>
   <div className="heroStamp">TD<br/><small>30+ YEARS</small></div>
  </section>

  <div className="ticker"><span>THE DRINKERS</span><span>ROCK'N'ROLL</span><span>LITIJA</span><span>1993 — NOW</span><span>THE DRINKERS</span><span>ROCK'N'ROLL</span></div>

  <section id="story" className="story section">
   <div className="sectionHead"><span>01 / STORY</span><h2>IZ LITIJE.<br/><i>NA ODER.</i></h2></div>
   <div className="storyGrid"><div className="storyImage"><img src="/drinkers-band-photo.jpg" alt="The Drinkers"/></div><div className="storyText"><p className="big">The Drinkers so nastali julija 1993 v Litiji.</p><p>Skupina je svojo pot začela z nastopom na festivalu Zarjavele trobente in se nato zapisala slovenski rock sceni z lastnim, prepoznavnim izrazom.</p><p>Več kot tri desetletja glasbe, koncertov, menjav zasedbe in pesmi, ki so ostale del slovenske popularne kulture.</p><a className="textLink" href="#timeline">ODPRI ZGODBO →</a></div></div>
  </section>

  <section id="music" className="music section">
   <div className="sectionHead light"><span>02 / DISCOGRAPHY</span><h2>SEDEM<br/><i>ZGODB.</i></h2></div>
   <div className="albums">{albums.map((a,i)=><article className="album" key={a.title}><div className="albumCover"><img src={a.img} alt={a.title}/><span>0{i+1}</span></div><div className="albumMeta"><span>{a.year}</span><h3>{a.title}</h3><a href="#listen">LISTEN ↗</a></div></article>)}</div>
  </section>

  <section id="listen" className="listen section"><div><span className="kicker">LISTEN NOW</span><h2>THE SOUND<br/><i>OF DRINKERS.</i></h2></div><div className="platforms"><a href="https://www.youtube.com/results?search_query=The+Drinkers+Slovenia" target="_blank">YOUTUBE ↗</a><a href="https://open.spotify.com/search/The%20Drinkers%20Slovenia" target="_blank">SPOTIFY ↗</a><a href="https://www.google.com/search?q=The+Drinkers+Slovenia+music" target="_blank">MORE MUSIC ↗</a></div></section>

  <section id="timeline" className="timeline section"><div className="sectionHead"><span>03 / ARCHIVE</span><h2>1993 → <i>NOW</i></h2></div><div className="years">{[["1993","Nastanek skupine v Litiji."],["1995","Prvi album — Lepi in trezni."],["1997","Žeja."],["1999","Pivolucija in Zadnja večerja."],["2003","Prohibicija."],["2007","Hajdi."],["NOW","Zgodba se nadaljuje."]].map(x=><div className="year" key={x[0]}><strong>{x[0]}</strong><p>{x[1]}</p></div>)}</div></section>

  <section id="shop" className="shop section"><div className="sectionHead light"><span>04 / SHOP</span><h2>WEAR THE<br/><i>NOISE.</i></h2></div><div className="products">{products.map(p=><article className="product" key={p.name}><div className="productVisual"><span>{p.tag}</span><div className="productMark">TD</div></div><div className="productInfo"><div><h3>{p.name}</h3><p>{p.price}</p></div><button onClick={()=>setCart([...cart,p.name])}>ADD TO CART +</button></div></article>)}</div><p className="shopNote">Merch katalog je pripravljen kot prava trgovinska osnova; checkout in plačila se priključijo, ko določimo prodajne artikle, cene, dostavo in ponudnika plačil.</p></section>

  <section id="live" className="live section"><div className="sectionHead"><span>05 / LIVE</span><h2>SEE YOU<br/><i>OUT THERE.</i></h2></div><div className="liveCard"><span>LIVE DATES</span><h3>NEW SHOWS<br/>COMING SOON</h3><p>Ko bodo potrjeni novi datumi, jih bomo objavili tukaj — brez izmišljenih terminov.</p><a href="#contact" className="btn primary">BOOK THE DRINKERS</a></div></section>

  <footer id="contact"><div className="footerBrand">THE<br/><i>DRINKERS</i></div><div><span>OFFICIAL</span><a href="https://www.youtube.com/results?search_query=The+Drinkers+Slovenia">YouTube</a><a href="https://www.facebook.com/search/top?q=the%20drinkers">Facebook</a><a href="https://www.instagram.com/explore/search/keyword/?q=the%20drinkers">Instagram</a></div><div><span>CONTACT</span><a href="mailto:booking@thedrinkers.si">BOOKING</a><a href="#shop">MERCH</a></div><small>© THE DRINKERS · LITIJA · SLOVENIA</small></footer>
 </main>
}