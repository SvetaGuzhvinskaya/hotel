document.addEventListener('DOMContentLoaded', function () {

  // Btn menu
  document.querySelector(".js-btn-menu").addEventListener('click', function (e) {
    e.preventDefault();
    this.classList.toggle("is-open")
    document.querySelector(".nav").classList.toggle("nav--is-open");
    document.querySelector("body").classList.toggle("menu-is-open");
  });

  // menu
  const els = document.querySelectorAll(".nav__link");
  els.forEach((el, i) => {
    el.addEventListener("click", function () {

      [].forEach.call(els, function (el) {
        if (el !== this) {
          el.classList.remove("is-active");
        } else {
          el.classList.add("is-active");
        }
      }, this);
      if ($(window).width() < 1000) {
        document.querySelector(".nav").classList.toggle("nav--is-open");
        document.querySelector(".js-btn-menu").classList.toggle("is-open")
        document.querySelector("body").classList.toggle("menu-is-open");
      }
    });

  });

  // sliders
  const fraction = document.getElementById("fraction");
  const slides = document.querySelectorAll(".swiper-slide");
  const slideCount = slides.length;
  fraction.textContent = `1 из ${slideCount}`;

  var swiper = new Swiper(".js-question-slider", {
    effect: 'fade',
    fadeEffect: {
      crossFade: true
    },
    pagination: {
      el: ".js-swiper-progressbar",
      type: "progressbar",
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    on: {
      slideChange: () => {
          fraction.textContent = `${swiper.realIndex + 1} из ${slideCount}`;
      }
    }
  });

  //tabs
  const tabs = document.getElementById('tabs');
  const tab = document.getElementsByClassName('js-tab-tit');
  const tabContent = document.getElementsByClassName('js-tab-content');
  hidTabcontent(1);

  tabs.addEventListener('click', function(event) {
      let target = event.target;
      if(target.classList.contains('js-tab-tit')){
          for(let i = 0; i < tab.length; i++){
              if(target === tab[i]){
                  showTabcontent(i);
                  break;
              }
          }
      }
  })

  function hidTabcontent(a){
      for(let i = a; i < tabContent.length; i++){
          tabContent[i].classList.remove('show-tab');
          tabContent[i].classList.add('hide-tab');
          tab[i].classList.remove('active-tab');
      }
  }

  function showTabcontent(a){
      if(tabContent[a].classList.contains('hide-tab')){
          hidTabcontent(0);
          tab[a].classList.add('active-tab');
          tabContent[a].classList.remove('hide-tab');
          tabContent[a].classList.add('show-tab');
      }
  }

  //modal
  document.addEventListener('click', modalWindow);

  function modalWindow(evt) {
    const modalBtnOpen = evt.target.closest('.js-modal');
    if (modalBtnOpen) {
      const modalSelector = modalBtnOpen.dataset.modal;
      showModal(document.querySelector(modalSelector));
    }

    const modalBtnClose = evt.target.closest('.js-modal-close');
    if (modalBtnClose) {
      evt.preventDefault();
      hideModal(modalBtnClose.closest('.modal'));
    }
  }

  function showModal(modalElem) {
    modalElem.classList.add('show');
  }

  function hideModal(modalElem) {
    modalElem.classList.remove('show');
  }


  // Mask
  let $jsMaskPhone = $('.js-mask-phone');
  $jsMaskPhone.inputmask('+7 (999) 999-99-99');
});
