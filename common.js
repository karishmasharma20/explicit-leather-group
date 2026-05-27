// Cursor
const cursor = document.getElementById('cursor');
const ring = document.getElementById('cursorRing');
let mx=0,my=0,rx=0,ry=0;
document.addEventListener('mousemove',e=>{mx=e.clientX;my=e.clientY;});
function animateCursor(){
  if(cursor){cursor.style.left=mx+'px';cursor.style.top=my+'px';}
  if(ring){rx+=(mx-rx)*.12;ry+=(my-ry)*.12;ring.style.left=rx+'px';ring.style.top=ry+'px';}
  requestAnimationFrame(animateCursor);
}
animateCursor();

// Scroll top
const scrollBtn=document.getElementById('scrollTop');
if(scrollBtn){window.addEventListener('scroll',()=>{scrollBtn.classList.toggle('visible',window.scrollY>400);});}

// Fade up
const faders=document.querySelectorAll('.fade-up');
const obs=new IntersectionObserver(entries=>{entries.forEach(e=>{if(e.isIntersecting)e.target.classList.add('visible');});},{threshold:.12});
faders.forEach(f=>obs.observe(f));

// Active nav
const path=window.location.pathname.split('/').pop();
document.querySelectorAll('.nav-links a').forEach(a=>{
  if(a.getAttribute('href')===path||a.getAttribute('href')===('./'+path))a.classList.add('active');
});