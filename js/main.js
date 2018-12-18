let url             = new URL(window.location.href);

let instagram       = url.searchParams.get('instagram');
let facebook        = url.searchParams.get('facebook'); 
let youtube         = url.searchParams.get('youtube');
let twitter         = url.searchParams.get('twitter');
let twitch          = url.searchParams.get('twitch');
let snapchat        = url.searchParams.get('snapchat');
let others          = url.searchParams.get('others');

let width           = url.searchParams.get('width')          || 272;
let height          = url.searchParams.get('height')         || 72;
let animation       = url.searchParams.get('animation')      || 'slide-top';
let animationSpeed  = url.searchParams.get('speed')          || 3; 
let interval        = url.searchParams.get('interval')       || '5';

console.log("executed");
$('body').css({"width": width, "height": height});

if (instagram != null) { buildInstagram(); }
if (facebook  != null) { buildFacebook();  }
if (youtube   != null) { buildYoutube();   }
if (twitter   != null) { buildtwitter();   }
if (twitch    != null) { buildTwitch();    }
if (snapchat  != null) { buildSnapchat();  }
if (others    != null) { buildOthers();    }

function buildBanner(img, title, subTitle) {
  $('.banners__container').append(`
    <li class="banner__item">
      <div class="item__img">${img}</div>
      <div class="item__title">${title}</div>
      <div class="item__subTitle">${subTitle}</div>
    </li>
  `);
}

function buildInstagram() {
  let icon        = '<i class="fab fa-instagram"></i>';
  let name        = instagram;
  let description = "Suivez-moi :";

  buildBanner(icon, name, description);
}

function buildFacebook() {
  let icon = '<i class="fab fa-facebook"></i>';
  let name = facebook;
  let description = "Likez :";
  
  buildBanner(icon, name, description);
}

function buildYoutube() {
  let icon = '<i class="fab fa-youtube"></i>';
  let name = youtube;
  let description = "Abonnez-vous :";

  buildBanner(icon, name, description);
}

function buildtwitter() {
  let icon = '<i class="fab fa-twitter"></i>';
  let name = twitter;
  let description = "Suivez-moi :";

  buildBanner(icon, name, description);
}

function buildtwitch() {
  let icon = '<i class="fab fa-twitch"></i>';
  let name = twitter;
  let description = "Follow :";

  buildBanner(icon, name, description);
}

function buildSnapchat() {
  let icon = '<i class="fab fa-snapchat-ghost"></i>';
  let name = snapchat;
  let description = 'Ajoutez :';

  buildBanner(icon, name, description);
}

function buildOthers() {
  let icon = '<i class="fas fa-angle-right"></i>';
  let name = twitter;
  let description = "";

  buildBanner(icon, name, description);
}

function animate() {
  $('.active').attr('style', `animation: ${animation} ${animationSpeed}s alternate 2`);
}

const bannerCount = $('.banner__item').length;
const timeOut = (animationSpeed * 2) * 1000; // Seconds
let i = 0;
/*
if (interval.includes("s")) { 
  console.log("SECONDES")
  interval = interval.split('s')[0];
  var newInterval = (interval + timeOut) * 1000 ;
}

if (interval.includes("m")) { 
  console.log("MINUTES")
  interval = interval.split('m')[0];
  interval = ((interval + timeOut) * 60) * 1000;
}
*/

if (interval == "demo") {
  console.log('DEMO STARTED');
  $('body').css('background', 'black');
  $('body').append('<h1 style="position:absolute; top:50%; left:50%; transform:translate(-50%, -50%);">DEMO, please wait...</h1>');
  setInterval(() => {
    if (i < bannerCount) {
      $(`.banner__item:eq(${i})`).addClass('active');
      $('.active').attr('style', `animation: ${animation} 2s alternate 2`);
      setTimeout(()=> {
        $(`.banner__item:eq(${i})`).removeClass('active');
        i++;
      }, 4000);
    } else {
      i = 0;
    }
  }, 4500);
} else {

  setInterval(() => {
    if (i < bannerCount) {
      $(`.banner__item:eq(${i})`).addClass('active');
      animate();
      setTimeout(()=> {
        $(`.banner__item:eq(${i})`).removeClass('active');
        i++;
      }, timeOut);
    } else {
      i = 0;
    }
  }, (interval + timeOut) * 60 * 1000);
}
