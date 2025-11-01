function dispalysection1() {
  const section1 = document.getElementById("section1");
  const aside = document.getElementById("aside");
  const section2 = document.getElementById("section2");
  const section3 = document.getElementById("section3");
  aside.style.display = "none";
  section1.style.display = "none";
  section2.style.display = "flex";
  section3.style.display = "none";
}
const btns = document.querySelectorAll(".botton");
let btncntr = document.getElementById("counteur");
let cntr = 1;
function plus() {
  cntr++;
  btncntr.innerHTML = cntr;
}
function moin() {
  if (cntr > 1) {
    cntr--;
    btncntr.innerHTML = cntr;
  }
}
btns.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    const eventcard = e.currentTarget.closest(".card");
    let objetEvent = {
      image: eventcard.querySelector("img").src,
      title: eventcard.querySelector("h3").textContent,
      details: Array.from(eventcard.querySelectorAll("ul li")).map(
        (li) => li.textContent
      ),
      price: eventcard.querySelector("p").textContent,
    };
    const div2 = document.querySelector("#div");

    div2.innerHTML = `<img src="${objetEvent.image}"/>
          <h3>${objetEvent.title}</h3>
          <ul>
            <li>${objetEvent.details[0]}</li>
            <li>${objetEvent.details[1]}</li>
            <li>${objetEvent.details[2]}</li>
          </ul>
          <button
            onclick="dispalysection1()"
            type="button"
          ></button>
          <p>${objetEvent.price}</p>
          `;
  });
});

function btnprecedent() {
  const section2 = document.getElementById("section2");
  section2.style.display = "none";
  const section1 = document.getElementById("section1");
  section1.style.display = "block";
}
function btnsuivant() {
  const section2 = document.getElementById("section2");
  section2.style.display = "none";
  const section3 = document.getElementById("section3");
  section3.style.display = "block";
}
function resetcnt() {
  cntr = 1;
  btncntr.innerHTML = "1";
}
let buttonform = document.querySelector(".form");

buttonform.addEventListener("submit", (e) => {
  e.preventDefault();
  let dataform = e.target.closest(".form");
  let objetformdata = {
    Nom: dataform.querySelector(".nom-input").value,
    Prenom: dataform.querySelector(".prenom-input").value,
    Telephone: dataform.querySelector(".tel-input").value,
    Email: dataform.querySelector(".email-input").value,
  };
  let dataformdisplay = document.querySelector("#dataextracteddiv");
  dataformdisplay.innerHTML += `
          <div id='dataformdisplaydiv' class='rounded-lg bg-blue-400 text-center gap-8 my-5'>
          <h2>Nom:${objetformdata.Nom}</h2>
          <h2>Prenom:${objetformdata.Prenom}</h2>
          <h2>Telephone:${objetformdata.Telephone}</h2>
          <h2>Email:${objetformdata.Email}</h2> 
          <button id='buttonreset' type='button' onclick='deleteuser()'><img class='flex mx-auto w-8 h-8 ' src='img/user.png'/> </button>
          </div>`;
  buttonform.reset();
});
function deleteuser() {
  let dataformdisplaydiv = document.querySelector("#dataformdisplaydiv");
  dataformdisplaydiv.remove();
}
