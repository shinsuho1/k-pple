
let url = location.href.split('/')[(location.href.split('/').length - 2)];
let html = document.querySelector("html"),
    body = document.querySelector("body"),
    main = document.querySelector("main"),
    header = document.querySelector("header"),
    footer = document.querySelector("footer");

// 페이지 로딩 시 위에서 시작
window.addEventListener("load", function () {
    setTimeout(() => {
        window.scrollTo({ top: 0 });
    }, 100);
});

// main, order 공통
if (url == "main" || url == "order") {
    window.addEventListener("DOMContentLoaded", function () {
        let a_1 = document.querySelectorAll(".a_1");
        a_1.forEach(function (el) {
            if (el.querySelector("span").getBoundingClientRect().width >= el.getBoundingClientRect().width) {
                let clone = document.createElement("span");
                clone.textContent = el.querySelector("span").textContent;
                clone.classList.add("clone");
                el.appendChild(clone);
                el.classList.add("move");
            }
        });
    });
    document.querySelector(".dark-bg").addEventListener("click", function (e) {
        document.querySelector(".popup.active").classList.remove("active");
        document.querySelector(".dark-bg").classList.remove("active");
    });
}

// main
if (url == "main") {

    let total = 0,
        t = 0;
    window.addEventListener("DOMContentLoaded", function () {

        let toggle_toggle_bg = document.querySelector("section.header .toggle .toggle_bg"),
            toggle_btn = document.querySelectorAll("section.header .toggle a");
        document.querySelectorAll("section.header .toggle a").forEach(function (el, index) {
            el.addEventListener("click", function (e) {
                e.preventDefault();
                document.querySelector(".toggle a.active").classList.remove("active");
                if (index == 0) {
                    if (toggle_toggle_bg.classList.contains("right")) toggle_toggle_bg.classList.remove("right");
                    toggle_toggle_bg.classList.add("left");
                    toggle_btn[index].classList.add("active");

                } else if (index == 1) {
                    if (toggle_toggle_bg.classList.contains("left")) toggle_toggle_bg.classList.remove("left");
                    toggle_toggle_bg.classList.add("right")
                    toggle_btn[index].classList.add("active");
                }
            });
        });

        let menu_top = document.querySelectorAll("h2"),
            posArr = [];

        menu_top.forEach(function (el, index) {
            posArr.push(el.offsetTop)
            header.querySelector(".header-wrap ul").innerHTML +=
                `<li><a href="">${el.textContent.replace('MENU', '')}</a></li>`
            if (index == 0) {
                header.querySelectorAll(".header-wrap ul li")[0].classList.add("active");
            }
        });

        header.querySelectorAll("ul li").forEach(function (el, index) {
            el.addEventListener("click", function (e) {
                e.preventDefault();
                header.querySelector("ul li.active").classList.remove("active");
                el.classList.add("active");
                window.scrollTo({ top: posArr[index], behavior: "smooth" })
            });
        });

        window.addEventListener("scroll", function (e) {
            if (window.scrollY > document.querySelector(".s01").getBoundingClientRect().height - header.getBoundingClientRect().height) {
                header.classList.add("active");
            } else {
                header.classList.remove("active");
            }

            posArr.forEach(function (el, index) {
                if (window.scrollY >= el) {
                    header.querySelector("ul li.active").classList.remove("active");
                    header.querySelectorAll("ul li")[index].classList.add("active");
                }
            });
        });


        document.querySelectorAll(".menu-option .swiper").forEach(function (ele, index) {
            var slide = new Swiper(ele, {
                speed: 1000,
                slidesPerView: "auto",
                spaceBetween: 10,
                pagination: {
                    el: ele.parentElement.querySelector(".pagination"),
                    type: "fraction",
                },
                on: {
                    init: function (swiper) {
                        swiper.slideTo(0);
                    }
                }
            })
        });

        document.querySelectorAll("main .more").forEach(function (el) {
            el.addEventListener("click", function (e) {
                e.preventDefault();
                document.querySelector(".dark-bg").classList.add("active");
                document.querySelector(".popup.menu-more").classList.add("active");
                body.classList.add("stop_scroll")
            });
        });
        document.querySelector(".popup.menu-more .close_btn").addEventListener("click", function (e) {
            e.preventDefault();
            document.querySelector(".dark-bg").classList.remove("active");
            document.querySelector(".popup.menu-more").classList.remove("active");
            body.classList.remove("stop_scroll")
        });

        document.querySelectorAll(".person_tab").forEach(function (ele, idx) {
            let el_li = ele.querySelectorAll("li");
            el_li.forEach(function (el, index) {
                el.addEventListener("click", function (e) {
                    ele.querySelector(".active").classList.remove("active");
                    el.classList.add("active");
                });
            });
        });

        let total_value = document.querySelector(".total_value")
        document.querySelectorAll(".select-menu").forEach(function (el, index) {
            let value = el.querySelector(".value"),
                count = 0;
            el.addEventListener("click", function (e) {
                t = 10;
                count = 0;
                total = 0;
                let total_element = document.querySelectorAll(".select-menu.main_option .value");
                total_element.forEach(function (ele, indx) {
                    total += Number(ele.textContent);
                });

                total_value.textContent = total;
                if (total_value.textContent > 0) {
                    total_value.classList.add("active");
                } else {
                    total_value.classList.remove("active");
                }

                let set = setInterval(() => {
                    count++;
                    if (count >= 5) {
                        el.classList.remove('active');
                        if (value.textContent > 0) {
                            el.classList.add('on');
                        }
                        clearInterval(set);
                    }
                }, 1000);
                if (el.classList.contains("on")) {
                    el.classList.remove("on");
                }
                if (el.parentElement.className == "top-wrap") {
                    let el_swiper = el.parentElement.parentElement;
                    if (value.textContent > 0) {
                        el_swiper.classList.add("active");
                    } else {
                        el_swiper.classList.remove("active");
                    }
                }
                el.classList.add('active');
            });

            el.querySelector(".minus").addEventListener("click", function (e) {
                e.preventDefault();
                if (value.textContent <= 0) {
                    return false;
                };
                value.textContent = Number(value.textContent) - 1;
            });
            el.querySelector(".plus").addEventListener("click", function (e) {
                e.preventDefault();
                value.textContent = Number(value.textContent) + 1;
            });
        });

        $(".slide-menu").click(function (e) {
            e.preventDefault();
            $(this).parent().siblings(".slide").stop().slideToggle();
        });

        document.querySelector("footer .top").addEventListener("click", function (e) {
            e.preventDefault();
            window.scrollTo({ top: 0, behavior: "smooth" })
        });

        document.querySelectorAll(".popup_test").forEach(function (el, index) {
            let popup = document.querySelectorAll(".popup");
            el.addEventListener("click", function (e) {
                popup[index].classList.add("active");
                document.querySelector(".dark-bg").classList.add("active");
                body.classList.add("stop_scroll")
            });
            if (popup[index].querySelector(".close_btn")) {
                popup[index].querySelector(".close_btn").addEventListener("click", function (e) {
                    e.preventDefault();
                    popup[index].classList.remove("active");
                    document.querySelector(".dark-bg").classList.remove("active");
                    body.classList.remove("stop_scroll")
                });
            }
        });

        document.querySelector(".order").addEventListener("click", function (e) {
            if (total <= 0) {
                e.preventDefault();
                alert("Please select one or more menus.");
            }
        });

        let s = 0,
            selectMenuMove = setInterval(() => {
                s++;
                document.querySelectorAll(".select-menu")[0].classList.add('active');
                if (s >= 2) {
                    if (t >= 1) {
                        clearInterval(selectMenuMove);
                    }
                    document.querySelectorAll(".select-menu")[0].classList.remove('active');
                    s = 0;
                    t++;
                }
            }, 2000);

        function select_function(e){
            e.classList.add("active");
            setTimeout(() => {
                e.classList.remove("active");
            }, 1000);
        }
        setTimeout(() => {
            window.addEventListener("scroll", function(e) {
                let m = document.querySelectorAll(".select-menu");
                m.forEach(function(el,index){
                    if(index == 0) return false;
                    if(0 == index % 2 || el.classList.contains("stop_event")) return false;
                    if(el.classList.contains("aos-animate")){
                        select_function(el);
                        el.classList.add("stop_event");
                    }
                });
            });

        }, 0);
    });

    document.querySelector("footer .restaurant").addEventListener("click",function(e){
        e.preventDefault();
        document.querySelector(".popup.restaurant").classList.add("active");
        document.querySelector(".dark-bg").classList.add("active");
        body.classList.add("stop_scroll");
    });
    
    document.querySelectorAll(".popup .more-wrap .more").forEach(function(el,index){
        el.addEventListener("click",function(e){
            e.preventDefault();
            el.previousElementSibling.classList.add("active");
            el.classList.add("hide");
        });
    });

    document.querySelector(".popup.restaurant .close_btn").addEventListener("click", function (e) {
        e.preventDefault();
        document.querySelector(".dark-bg").classList.remove("active");
        document.querySelector(".popup.restaurant").classList.remove("active");
        body.classList.remove("stop_scroll")
    });
    
    document.querySelectorAll(".popup .more-wrap .txt").forEach((function(el,index){
        if(el.getBoundingClientRect().height >= 38){
            el.classList.remove("active");
            el.nextElementSibling .classList.remove("hide");
        }
    }))
}


// order
if (url == "order") {
    document.querySelector(".home").addEventListener("click", function (e) {
        let popup = document.querySelector(".popup");
        e.preventDefault();
        popup.classList.add("active");
        document.querySelector(".dark-bg").classList.add("active");
        body.classList.add("stop_scroll");
        if (popup.querySelector(".close_btn")) {
            popup.querySelector(".close_btn").addEventListener("click", function (e) {
                e.preventDefault();
                popup.classList.remove("active");
                document.querySelector(".dark-bg").classList.remove("active");
                body.classList.remove("stop_scroll")
            });
        }
    })
    var order_banner = new Swiper(".order_banner", {
        loop: true,
        speed: 1000,
    })
    window.addEventListener("DOMContentLoaded", function () {
        body.classList.add("stop_scroll");
        setTimeout(() => {
            document.querySelector("section.s01").classList.add("load");
            setTimeout(() => {
                body.classList.remove("stop_scroll");
            }, 1000);
        }, 1000);
    });

}


