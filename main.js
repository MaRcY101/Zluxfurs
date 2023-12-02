
document.addEventListener('DOMContentLoaded', function() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();

            const targetId = this.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);

            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth'
                });

                // Очищаем хеш в адресной строке
                history.replaceState({}, document.title, window.location.pathname);
            }
        });
    });

    document.querySelectorAll('.parent-container').forEach(container => {
        container.addEventListener('click', function() {
            // Выполните нужное действие при клике на родительский элемент
            window.location.href = this.querySelector('a').href;
        });
    });

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
});


AOS.init({
    // Global settings:
    disable: false, // accepts following values: 'phone', 'tablet', 'mobile', boolean, expression or function
});