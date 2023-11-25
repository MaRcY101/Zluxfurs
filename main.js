const nav = document.querySelector('#nav'),
    navBtn = document.querySelector('#nav-btn'),
    navBtnImg = document.querySelector('#nav-btn-img'),
    navItems = document.querySelectorAll('.nav-item');

navBtn.addEventListener('click',(e) => {
    e.preventDefault();
    if (nav.classList.toggle('open')) {
        navBtnImg.src = "./img/nav-close.svg";
        document.body.style.overflow = 'hidden';
    } else {
        navBtnImg.src = "./img/nav-open.svg";
        document.body.style.overflow = '';
    }
});


navItems.forEach(item => {
    item.addEventListener('click' , () => {
             if (nav.classList.contains('open')) {
                 nav.classList.remove('open');
                 document.body.style.overflow = '';
                 navBtnImg.src = "./img/nav-open.svg";
             }
    });
});

AOS.init();