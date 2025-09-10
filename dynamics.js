let us = true;

//BAND BIO w/formatting
const about_the_band = ` <p class="edu">We would like to introduce you to <button class="btn" onclick="members0()" ><strong class="charm orange">Captain Dave & High Tide</strong></button>. We perform an <strong class="">eclectic mix</strong> of
genres, and <strong class="">originals written by our members</strong>, which give our music a <strong class="">unique sound</strong>.</p>
<p class="edu" >We have been fortunate to perform with one another as well as with <strong class="">world-renowned musicians</strong>,
and we bring those experiences to our music. We have a dedicated following who come to <strong class="">enjoy
dinner and our shows</strong>. </p>
<p></p>
<p class="edu">We strive to connect with the audience, and our goal is to create the <strong class="">right
vibe for your venue</strong>.</p>
`;
/*<button class="btn charm" onclick="meetCrew()"> ↝ </button>*/

//consts for bakcground music
let playing = false;
let playIcon;
if (playing) playIcon=`<i class="fa-solid fa-pause orange"></i>`;
else playIcon=`<i class="fa-solid fa-pause orange"></i>`;


//navigation icons with formatting
const icons = `
<div id="top__about" class="top__about bottom__album"><video muted autoplay src="./assets/cdHt.mp4" class="bottom__album--img" loop></video></div>
          <!-- <button class="btn" onclick="aboutUs()">
        <h3 class="charm inside__anch">ABOUT THE BAND</h3></button> -->

          <div class="top__btns">

             <!-- <figure class="modal__language">
              <img src="" alt="">
              <span class="language__name">HTML</span>
            </figure>
             -->
            <figure class="top__btns--anch">
          <button id="swap" class="home" onclick="home0()">
            <i class="fa-solid fa-anchor orange"></i>
          </button>
        </figure>
            <figure class="btns--anch">
          <button class="home" id="play" onclick="go()">
            ${playIcon}
          </button></figure>
          <figure class="btns--anch">
          <a class="charm home" target="_blank" href="https://soundcloud.com/lizgeorgemusic?ref=clipboard&amp;p=i&amp;c=1&amp;si=7479096EEFF845AFAD309E1D4BE1C824&amp;utm_source=clipboard&amp;utm_medium=text&amp;utm_campaign=social_sharing"> 
    <i class="fa-brands fa-soundcloud orange" style="transform: scale(2);"></i>
    </a></figure>
            <figure class="btns--anch">
          <button class="home"><a href="contact.html" target="_blank" rel="noopener noreferrer">
            <i class="fa-solid fa-paper-plane orange send"></i></a>
          </button></figure>
          </div>`;

//loading bio as OSO
document.getElementsByClassName("top__about")[0].innerHTML = about_the_band;


// member lists
const members = [
  `Dave Basile, {a.k.a Captain Dave}`,
  `Liz George`,
  `Jim Anzalone`,
  `Mark Bonifacio`,
];


  //possibly unneeded
const pages = [
  `ABOUT THE BAND`,
  `MEET THE CREW`,
  `PAST ADVENTURES`,
  `BOOK THE BAND`,
];

const page = [
  "captDave(true)",
  "lizGeorge(true)",
  "jimAnz(true)",
  "markBon(true)",
];

//right side member section
const box = document.getElementById("memberBox");
//photo album (contact sheet?)
const bottom = document.getElementById("bottom");



function aboutUs() {

  person = false;

  //bio box
  const top = document.getElementById("top");
  const anchs = document.getElementsByClassName("inside__anchs")[0];
  anchs.style.cssText = `background-color: rgba(0, 0, 0, 0);`;
  setInterval(
    () =>
      (anchs.style.cssText = `transition: all 1000ms;background-color: rgba(245,255,255, .3);`),
    1000
  );

  top.innerHTML = ``;

  // TODO needs new logic**
  top.classList.toggle("hide");
  //// HERE ///
  //top__about=cycling pictures

  //logic for song playing and icon matching
  if (playing) playIcon=`<i class="fa-solid fa-pause orange"></i>`
  else playIcon=`<i class="fa-solid fa-play orange"></i>`
  bottom.innerHTML = icons;
  document.getElementsByClassName(
    "bottom__album"
  ).innerHTML = covers[cover];

  //animation for album cover loading
  bottom.style.cssText = `transition: all 0ms;opacity: 0;`;
  setTimeout(
    () => (bottom.style.cssText = `transition: all 1500ms;opacity:1;`),
    750
  );

  // hide or unhide **
  bottom.classList.toggle("hide");

  // icon matching
  if (playing) playIcon=`<i class="fa-solid fa-pause orange"></i>`
  else playIcon=`<i class="fa-solid fa-play orange"></i>`

  top.innerHTML =icons;

  //replacing bio box
    document.getElementsByClassName("top__about")[0].innerHTML = about_the_band;
    //back to wheel icon
  document.getElementById(
    "swap"
  ).innerHTML = `<i class="fa-solid fa-dharmachakra orange"></i>`;
  console.log(icons);
}
        // 
        //     <input class="contact__input edu" type="text" name="phone" placeholder="Phone (XXX)XXX-XXX">


function contactCrew() {

  //TODO: fix location of box

  //home box
  const top = document.getElementById("top");

  //album box
  const bottom = document.getElementById("bottom");

  //switches base photo
  bottomFlip(`./assets/highTideLogo.JPG`, true);

  // toggle logic needs to be switched **
  top.innerHTML = ``;
  top.classList.add("hide");

  //this is the equivalent of the going home
  bottom.innerHTML = ``;
  bottom.classList.remove("hide");
  bottom.classList.add("con");
  bottom.innerHTML = `
        <form class="contact" action="https://formsubmit.co/your@email.com" method="POST" style="margin: 0 auto; opacity:0; transition: all 1s ease;">
        <div class="contact__btns"> 
    <button class="contact__btn charm" onclick="home0()"><i class="fa-solid fa-anchor "></i></button>
                <figure class="btns--anch">
          <button class="contact__btn charm"  type="submit">
            <i class="fa-solid fa-paper-plane send"></i>
          </button></figure></div>
        <input class="contact__input edu" type="text" name="name" required placeholder="*Name">
     <input class="contact__input edu" type="email" name="email" required placeholder="*Email">
     <textarea class="contact__input edu" type="text" name="message" required placeholder="*Invite us Aboard!"></textarea>

</form> 
`;
setTimeout(()=>{document.querySelector(".contact").style.opacity = ``}, 2500);
}

function exitForm() {

  //this is not in all cases
  bottomFlip(`./assets/highTideLogo.JPG`, true);


  const top = document.getElementById("top");
  const bottom = document.getElementById("bottom");

  // toggle logic needs to be removed
  bottom.classList.toggle("hide");
  bottom.innerHTML = ``;

  //music matching
    if (playing) playIcon=`<i class="fa-solid fa-pause orange"></i>`
  else playIcon=`<i class="fa-solid fa-play orange"></i>`;

  //back to wheel
  top.innerHTML = icons;
           document.getElementsByClassName("top__about")[0].innerHTML = about_the_band;
             document.getElementById(
    "swap"
  ).innerHTML = `<i class="fa-solid fa-dharmachakra orange"></i>`;
  top.classList.toggle("hide");

  // swaps from central to left side
  meetCrew();
}

function meetCrew() {

  //swaps active album photo
  albumCover();

  box.innerHTML = ``;

  //animation of memberBox
  if (us) {
    box.style.cssText = `transition: all 0ms;opacity: 0;`;
    setTimeout(
      () => (box.style.cssText = `transition: all 1500ms;opacity:1;`),
      1000
    );
  } else if (us == false) {
    // box.style.cssText =`transition: all 500ms;opacity: 1;`
    box.style.cssText = `transition: all 500ms; opacity:0;`;
  }

  person = false;

  // anchor
  document.getElementById("swap").innerHTML = ``;
  document.getElementById(
    "swap"
  ).innerHTML = `<i class="fa-solid fa-anchor orange"></i>`;

  //replaces bio
 aboutUs();

  //consts
  const bg__img = document.getElementById("bg__img");
  const links = document.getElementsByClassName("inside__anch");
  const top = document.getElementsByClassName("inside__anchs")[0];
  const top2 = document.getElementById("top");

  //center to right || toggle needs to be replaced ***
  bg__img.classList.toggle("bg__img");
  bg__img.classList.toggle("bg__imgA");


  // checks for background ->us determines if we're looking at the members or we're at home
  if (us) {

    bg__img.src = "./assets/highTideLogo.jpg";
top.classList.add("topA");
top.classList.remove("topB");
    // TODO: set interval function to increment variable that loops through pictures
    // set bg__img src to that value

    //  document.getElementById("swap").innerHTML=``;
    //   document.getElementById("swap").innerHTML=`<i class="fa-solid fa-anchor orange"></i>`;
  } else {

            bg__img.src = "./assets/d3.JPG";
    top.classList.remove("topA");
top.classList.add("topB");
    //        document.getElementById("swap").innerHTML=``;
    //       document.getElementById("swap").innerHTML=`<i class="fa-solid fa-dharmachakra orange"></i>`;
    //
  }

  //fills member box with list of names
  for (let i = 0; i < members.length; i++) {
    const member = document.createElement("button");
    member.classList.add("btn");
    member.classList.add("dip");
    if (i === 0) {
      let dave = members[i].split(",");
      console.log(dave);
      member.innerHTML = `<h2 class="charm members__member"> ~ ${dave[0]} ~ </h2>
                <p class="edu members__member cd"><i> ${dave[1]}</i></p>`;
    } else {
      member.innerHTML = `<h2 class="charm members__member"> ~ ${members[i]} ~ </h2>`;
    }
    member.setAttribute("onclick", page[i]);
    box.appendChild(member);
  }
  box.classList.toggle("hide");

  //switches from member to home (signal)
  us = !us;

  // box.classList.toggle("hide");
}
let person = false;

function addX() {
  /**this is the EXIT from any individuals bio */
  // bottomFlip(`./assets/d3.JPG`, true);

  /* fills capt daves information in correct places*/ 
  //
  bottomFlip("./assets/highTideLogo.JPG", true);

  //music matching
    if (playing) playIcon=`<i class="fa-solid fa-pause orange"></i>`
  else playIcon=`<i class="fa-solid fa-play orange"></i>`

  bottom.innerHTML = icons ;

  // document.getElementsByClassName(
  //   "bottom__album"
  // )[0].innerHTML = covers[cover];

  //animates biography intros
  personJump();
  person = false;
  //fills list of members following delay to adhere to animation set up
  setTimeout(() => {
    box.innerHTML = ``;
    for (let i = 0; i < members.length; i++) {
      const member = document.createElement("button");
      member.classList.add("btn");
      if (i === 0) {
        let dave = members[i].split(",");
        console.log(dave);
        member.innerHTML = `<h2 class="charm members__member"> ~ ${dave[0]} ~</h2>
                <p class="edu members__member cd"><i>${dave[1]}</i></p>`;
      } else {
        member.innerHTML = `<h2 class="charm members__member"> ~ ${members[i]} ~ </h2>`;
      }
      member.setAttribute("onclick", page[i]);
      box.appendChild(member);
    }
  }, 750);
}

let bg__img = document.getElementById("bg__img");

function bottomFlip(bg, mod) {
  //**animations of bio box and album box */
  const square = document.getElementsByClassName("inside__anchs")[0];
  square.style.cssText = `transition: all 0ms;opacity: 0;`;
  setTimeout(
    () => (square.style.cssText = `transition: all 1500ms;opacity:1;`),
    1000
  );

  if (mod) {
    bg__img.style.cssText = `transition: all 0ms;opacity: 0;`;
    setTimeout(
      () => (bg__img.style.cssText = `transition: all 1500ms;opacity:1;`),
      600
    );

    bg__img.src = bg;
  }

  const bottom = document.getElementById("bottom");

  bottom.style.cssText = `transition: all 0ms;opacity: 0;`;
  setTimeout(
    () => (bottom.style.cssText = `transition: all 1500ms;opacity:1;`),
    1000
  );
}

function captDave(mod) {
/* fills capt daves information in correct places*/ 
  //
  bottomFlip("./assets/highTideLogo.JPG", mod);

  bottom.innerHTML = `<div class="name-cardsD"><h1 class="charm">-Dave Basile- </h1>
        <p> <i class="edu"> A.K.A Captain Dave </i></p><h3> <i>RHYTHM GUITAR</i> </h3><img src="./assets/david0.JPG" class="member__img">` ;
  personJump();
  //           const bg__img = document.getElementById("bg__img");
  // bg__img.src=`./assets/david0.JPG`
  person = true;
  setTimeout(() => {
    box.innerHTML = `
<button class="btn charm " onclick="addX()"> <strong>   X   </strong> </button>
        <p class="edu blue"> <strong> Dave Basile, <i>Captain Dave</i></strong>, played music from an early age as a drummer for a popular Rock
group. His band opened up for the Left Banke (<i>Just Walk Away Renee</i> and <i>Pretty Ballerina</i>).
They also opened for Ruby and the Romantics (Our Day Will Come). Captain Dave has also
appeared on stage with Willie Nile, American Singer/Songwriter. Dave has performed several
times at Café Artiste, a prestigious venue in Ocean Grove, New Jersey for original
singers/songwriters. Dave plays guitar, sings, and is the leader of <a class="" href="contact.html" target="_blank" rel="noopener noreferrer"><strong class="charm alt-con">Captain Dave & High Tide</strong></a>.</p>
<button class="btn charm " onclick="lizGeorge(false)"> ~ Liz ~ </button>
<button class="btn charm " onclick="jimAnz(false)"> ~ Jim ~ </button>
<button class="btn charm " onclick="markBon(false)"> ~ Mark ~ </button>
`;
    personReveal();
  }, 750);
}

function lizGeorge(mod) {
  /* fills livs information in correct places*/ 

  bottomFlip("./assets/highTideLogo.JPG", mod);

  bottom.innerHTML = `<div class="name-cardsL"><h1 class="charm"> -Liz George- </h1>
        <h3> <i>VOCALS & PERCUSSION</i> </h3><img src="./assets/liz0.JPG" class="member__img">`;

  personJump();
  //           const bg__img = document.getElementById("bg__img");
  // bg__img.src=`./assets/liz0.JPG`

  person = true;
  setTimeout(() => {
    box.innerHTML = `
    <button class="btn charm " onclick="addX()"> <strong>   X   </strong> </button>
        <p class="edu blue"> <strong> Liz George</strong>, is a vocalist and a percussionist who studied Classical voice with Seymour Osborne,
where she sang arias for Luciano Pavarotti and Fred Gwynne, and Rock and Blues voice with
Joyce Bryant. She has performed with Grammy winners Chuck Mangione, David Crosby, Gloria
Gaynor, and Ken Neill (<i>Twisted Sister</i>) opening for Darlene Love (<i>Grammy winner</i>) and Max
Weinberg. Liz has also performed with International Blues and Jazz Awards winner, Joel Perry;
Blues Awards winner, Son Lewis, Blues Hall of Fame winner, Bobby Kyle, and PP Junior; Tony
Award winner, Melba Moore; Gospel recording star, Mattie Moultrie Wilson; and Funk and Soul
recording star, Buddy Hanks (Aurra, Young and Company, and Steve Arrington’s Hall of Fame).</p>
<button class="btn charm " onclick="captDave(false)"> ~ Capt' ~ </button>
<button class="btn charm " onclick="jimAnz(false)"> ~ Jim ~ </button>
<button class="btn charm " onclick="markBon(false)"> ~ Mark ~ </button>
`;
    personReveal();
  }, 750);
}

function jimAnz(mod) {
/* fills jims information in correct places*/ 
  
  bottomFlip("./assets/highTideLogo.JPG");

  bottom.innerHTML = `<div class="name-cardsJ"><h1 class="charm"> -Jim Anzalone- </h1>
        <h3> <i>BASS GUITAR</i> </h3>
    <img src="./assets/jim0.JPG" class="member__img">`;

  personJump();
  //           const bg__img = document.getElementById("bg__img");
  // bg__img.src=`./assets/jim0.JPG`
  person = true;
  setTimeout(() => {
    box.innerHTML = `
    <button class="btn charm " onclick="addX()"> <strong>   X   </strong> </button>
        <p class="edu blue"> <strong> Jim Anzalone</strong>, started playing guitar in high school.  He played in a band called Rage with his
sister and friend, Rick. Jim started a band with his new best friend, Kevin, after high school. 
Kevin told Jim, “We can’t find a bass player, so you are it.” Jim continued to play with Kevin for
many years teaching himself bass. Jim decided to get serious and take bass lessons at age 55.
Ten years later he continues to take bass lessons from Rob Smith. Jim plays with Kevin in
BeerKanChickin and <a class="" href="contact.html" target="_blank" rel="noopener noreferrer"><strong class="charm alt-con">Captain Dave & High Tide</strong></a>. Jim loves playing bass and jamming with his
friends.</p>
<button class="btn charm " onclick="captDave(false)"> ~ Capt' ~ </button>
<button class="btn charm " onclick="lizGeorge(false)"> ~ Liz ~ </button>
<button class="btn charm " onclick="markBon(false)"> ~ Mark ~ </button>
`;
    personReveal();
  }, 750);
}

function markBon(mod) {
/* fills marks information in correct places*/ 


  bottomFlip("./assets/highTideLogo.JPG", mod);

  bottom.innerHTML = `<div class="name-cardsM"><h1 class="charm"> -Mark Bonifacio- </h1>
        <h3> <i>LEAD GUITAR</i> </h3>
    <img src="./assets/mark0.JPG" class="member__img">`;

  personJump();

  person = true;
  //       const bg__img = document.getElementById("bg__img");
  // bg__img.src=`./assets/mark1.JPG`
  setTimeout(() => {
    box.innerHTML = `
    <button class="btn charm " onclick="addX()"> <strong>   X   </strong> </button>
        <p class="edu blue"> <strong> Mark Bonifacio</strong>, has been playing guitar in bands for 30 years.  Starting while in college in
Rochester, NY in the 1990s, most of his time has been spent in bands around the NYC area,
including locations such as Mexicali Blues Cafe in Teaneck, NJ, The Turning Point in Piermont,
NY, and The Rye Roadhouse in Rye, NY.  Mark plays a wide variety of music styles, with
influences from various genres including Jam bands, British Rock, Classic Rock, Country, and
Reggae.</p>
<button class="btn charm " onclick="captDave(false)"> ~ Capt' ~ </button>
<button class="btn charm " onclick="lizGeorge(false)"> ~ Liz ~ </button>
<button class="btn charm " onclick="jimAnz(false)"> ~ Jim ~ </button>`;
    personReveal();
  }, 750);
}

// function bggSwap() {
//   const bgg = document.getElementsByClassName("bgg");
//   //changes deep background image visibility?
//   for (let i = 1; i < 3; i++) {
//     bgg[i].classList.toggle("hide");
//   }
// }

function personJump() {
  //animation of memberbox
  box.style.cssText = `transition: all 1000ms;transform: translateX(110vh);`;
  setTimeout(() => (box.style.cssText = `transition: all 1500ms;`), 750);
}

function personReveal() {

  //animation of bio
  const blue = document.getElementsByClassName("blue")[0];
  blue.style.cssText = `transition all 1000ms; opacity: 0;`;
  setTimeout(
    () => (blue.style.cssText = `transition: all 1500ms;opacity:1;`),
    750
  );
}

function formLink() {
  //getting to the contact form
  location.reload();
  contactCrew();
}

function go() {

  //playing music, icon matching

  console.log(playing);
  playing=!playing;
  console.log(playing);

  if (playing==true){
  document.getElementById("em").play();
    let plays= document.querySelectorAll("#play");
    for (let i=0; i<plays.length;i++)plays[i].innerHTML = `<i class="fa-solid fa-pause orange"></i>`;
  playIcon=`<i class="fa-solid fa-pause orange"></i>`;}
  if (playing==false){
    document.getElementById("em").pause();
       let plays= document.querySelectorAll("#play");
    for (let i=0; i<plays.length;i++)plays[i].innerHTML = `<i class="fa-solid fa-play orange"></i>`;
    playIcon=`<i class="fa-solid fa-play orange"></i>`;
     }

  }

// music related variables
let cover = 0;
const covers = [`<img src="./assets/ld0.JPG" class="bottom__album--img">`,
  `<img src="./assets/d0.JPG" class="bottom__album--img">`,
  `<img src="./assets/d1.JPG" class="bottom__album--img">`
];

//animating and changing of album covers **FIX THIS ANIMATION
function albumCover() {
  console.log(`hey there`);
  let albums = document.getElementById("top__about");
  console.log(albums);
   albums.innerHTML = `<video muted autoplay src="./assets/cdHt.mp4" class="bottom__album--img" loop></video>`


//   if (document.getElementsByClassName("bottom__album").length=!0){
//  cover++;
//   if (document.getElementsByClassName("bottom__album--img")[1]){
//     document.getElementsByClassName("bottom__album--img")[1].style.cssText = `opacity:0;transform:scale(.5);`
    setTimeout(()=>{
//         document.getElementsByClassName("bottom__album")[1].innerHTML= covers[cover%3];
      document.querySelector(".bottom__album--img").style.cssText = `transition: all 1s ease;transform: scale(1);opacity:1;`           


   

 }, 1000);}

// }

// albumCover();
// setInterval(albumCover, 10000);