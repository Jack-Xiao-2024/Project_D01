//手機版banner
const swiperMobileBanner = new Swiper(".swiper-mobile-banner", {
    cssMode: true,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    loop: true,
});
//房型費用卡片
const swiperIntroCard = new Swiper(".swiper-intro-card", {
    slidesPerView: 1,
    spaceBetween: 24,
    breakpoints: {
        992: {
            slidesPerView: 3,
        },
    },
});
//桌機版banner
const swiper = new Swiper(".swiper-banner-thubms", {
    loop: true,
    spaceBetween: 8,
    slidesPerView: 4,
    direction: "vertical", // 將縮略圖改為垂直顯示
    freeMode: true,
    watchSlidesProgress: true,
});
const swiperBannerMain = new Swiper(".swiper-banner-main", {
    loop: true,
    spaceBetween: 10,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    thumbs: {
        swiper: swiper,
    },
});

//強制加上focus;
document.addEventListener("DOMContentLoaded", () => {
    const links = document.querySelectorAll("a.intro-btn");
    links.forEach((link) => {
        link.addEventListener("click", function (e) {
            e.preventDefault(); // 防止默認的導航行為
            setTimeout(() => {
                this.focus();
                // console.log("Forced focus on:", this);
            }, 0);
        });
    });
});
//點讚切換
const introLikeIcon = document.querySelector("#intro-like-icon");
let isIntroLiked = false;
const introLike = document.querySelector('#intro-like');
introLikeIcon.addEventListener("click", () => {
    const defaultImage =
        "https://github.com/Jack-Xiao-2024/Project_D01/blob/dev/assets/images/Interact%20Icon/Like-01.png?raw=true";
    const likedImage =
        "https://github.com/Jack-Xiao-2024/Project_D01/blob/dev/assets/images/Interact%20Icon/Like-02.png?raw=true";
    isIntroLiked = !isIntroLiked;
    introLikeIcon.setAttribute('src', isIntroLiked ? likedImage : defaultImage);
    isIntroLiked ? introLike.textContent++ : introLike.textContent--;
});