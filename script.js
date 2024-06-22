const blobAnimation = () => {
    const blob = document.getElementById("blob");
    window.onpointermove = event => {
        const {
            clientX,
            clientY
        } = event;
        blob.animate({
            left: `${clientX}px`,
            top: `${clientY}px`
        }, {
            duration: 4400,
            fill: "forwards"
        });
    }
}
const navSlide = () => {
    const burger = document.querySelector('.burger')
    const nav = document.querySelector('.navlinks')
    const navLinks = document.querySelectorAll('.navlinks li')
    burger.addEventListener("click", function(){
        nav.classList.toggle('nav-active');
        navLinks.forEach((link, index)=>{
            link.style.animation = link.style.animation ? "" : `navLinkFade 0.5s ease forwards ${index /7 + 0.5}s`
        })
        burger.classList.toggle('toggle')
    });
}
const scrollAnimation= () =>{
    let progress = document.getElementById('bar');
    const sections = document.querySelectorAll('section')
    const navl = document.querySelectorAll('.navbar a')

    var totalheight = document.body.scrollHeight - window.innerHeight
    window.onscroll = () => {
        var totalheight = document.body.scrollHeight - window.innerHeight
        var progressHeight = (window.scrollY / totalheight) * 100
        progress.style.height = progressHeight + "%";
        sections.forEach(sec => {
            let top = window.scrollY
            let op = sec.offsetTop
            let id = sec.getAttribute("id")
            if (top >= op && top < (op + sec.offsetHeight)) {
                navl.forEach(l => {
                    l.classList.remove('active')
                    document.querySelector('.navbar a[href*=' + id + ']').classList.add("active")
                });
            };
        });
    }
    let progressHeight = (window.scrollY / totalheight) * 100
    progress.style.height = progressHeight + "%";
}
const burgerClick = () => {
    var dn = document.getElementById("light-dark")
    dn.onclick=  function(){
        document.body.classList.toggle("day")
        dn.innerHTML=`<span class="material-symbols-outlined">${document.body.classList.contains("day") ? "dark_mode" : "light_mode"}</span>`
        }

    var mail = document.getElementById("mail")
    mail.onclick=  function(){
        mail.innerHTML=`<span class="material-symbols-outlined">drafts</span>`
        window.location.href = 'mailto:email@example.com';
    }
}
const app = () =>{
    navSlide();
    blobAnimation();
    burgerClick();
    scrollAnimation();
}
app();
