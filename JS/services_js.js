const q=s=>document.querySelector(s),
Q=s=>document.querySelectorAll(s),
h=q('.hamburger'),
n=q('.nav-menu'),
b=q('.navbar'),
t=(e,m)=>e.classList[m]('active');

h.onclick=_=>{t(n,'toggle');t(h,'toggle')};

Q('.nav-menu a').forEach(l=>l.onclick=_=>{t(n,'remove');t(h,'remove')});

q('.submit-btn').onclick = e => { e.preventDefault(); bookingForm.dispatchEvent(new Event('submit')); };

bookingForm.onsubmit=e=>{
    e.preventDefault();
    
    localStorage.setItem('services_name', q('input[type="text"]').value);
    localStorage.setItem('services_email', q('input[type="email"]').value);
    localStorage.setItem('services_datetime', q('input[type="datetime-local"]').value);
    localStorage.setItem('services_service', q('select').value);
    localStorage.setItem('services_comments', q('textarea').value);

    alert('Thank you for your booking request! We will contact you shortly.');
    e.target.reset();
    
    window.location.href = "Booking_page.html";
};

Q('a[href^="#"]').forEach(k=>k.onclick=function(e){
    e.preventDefault();
    q(this.hash)?.scrollIntoView({behavior:'smooth'})
});

onscroll=_=>b.style.boxShadow=scrollY>50?'0 4px 10px #0003':'0 2px 5px #0001';