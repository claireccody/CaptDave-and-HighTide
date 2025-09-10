let atMembers = false;

function members0(){

    if (playing==false)go();
    atMembers =true;
    console.log(`hello friend`);

    //animation
        box.style.cssText = `transition: all 0ms;opacity: 0;`;
    setTimeout(
      () => (box.style.cssText = `transition: all 1500ms;opacity:1;`),
      1000
    );

      // anchor swap (*)
  document.getElementById("swap").innerHTML = ``;
  document.getElementById(
    "swap"
  ).innerHTML = `<i class="fa-solid fa-anchor orange"></i>`;

  //replaces bio
 aboutUs();

  //consts
  const bg__img = document.getElementById("bg__img");
  const top = document.getElementsByClassName("inside__anchs")[0];

  
  //center to right || toggle needs to be replaced ***
  bg__img.classList.toggle("bg__img");
  bg__img.classList.toggle("bg__imgA");

      bg__img.src = "./assets/highTideLogo.jpg";
top.classList.add("topA");
top.classList.remove("topB");

  //fills member box with list of names

    box.innerHTML = ``;

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

  let memTog = document.getElementsByClassName("memToggle")[0];
  memTog.innerHTML = `<button class="charm link-nav__btn" onclick="home0()"><i class="fa-solid fa-anchor orange"></i> Home</button>`

  albumCover();

}

function home0(){
location.reload();

}

function toContact(){
location.replace("contact.html")
}