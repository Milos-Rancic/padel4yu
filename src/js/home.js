
import '../home.scss'


var webflow = webflow || [];
Webflow.push(function() {

  console.log('test');
  var galleryThumbs1 = new Swiper('.gallery-thumbs1', {
    spaceBetween: 10,
    slidesPerView: 2,
    freeMode: true,
    watchSlidesVisibility: true,
    watchSlidesProgress: true,
    breakpoints: {
      767: {
        slidesPerView: 3,
        spaceBetween: 10
      },
    }
  });
  var galleryTop1 = new Swiper('.gallery-top1', {
    spaceBetween: 10,
    thumbs: {
      swiper: galleryThumbs1
    }
  });
  
    var galleryThumbs2 = new Swiper('.gallery-thumbs2', {
    spaceBetween: 10,
    slidesPerView: 2,
    freeMode: true,
    watchSlidesVisibility: true,
    watchSlidesProgress: true,
    breakpoints: {
      767: {
        slidesPerView: 3,
        spaceBetween: 10
      },
    }
  });
  var galleryTop2 = new Swiper('.gallery-top2', {
    spaceBetween: 10,
    thumbs: {
      swiper: galleryThumbs2
    }
  });

});
