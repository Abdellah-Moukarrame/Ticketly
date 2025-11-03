const section1 = document.getElementById("section1");
const aside = document.getElementById("aside");
const section2 = document.getElementById("section2");
const section3 = document.getElementById("section3");
const section4 = document.getElementById("section4");
function dispalysection1() {
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
const div2 = document.querySelector("#div");
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

    div2.innerHTML = `<img class='rounded-md w-full h-40 object-cover' src="${objetEvent.image}"/>
          <h3>${objetEvent.title}</h3>
          <ul>
            <li>Temps: ${objetEvent.details[0]}</li>
            <li>Lieu: ${objetEvent.details[1]}</li>
            <li>Places: ${objetEvent.details[2]}</li>
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
  section2.style.display = "none";
  section1.style.display = "block";
}
function btnsuivant() {
  section2.style.display = "none";
  section3.style.display = "block";
}
function resetcnt() {
  cntr = 1;
  btncntr.innerHTML = "1";
}
let buttonform = document.querySelector(".form");
let dataformdisplay = document.querySelector("#dataextracteddiv");

let cntrparticipant = 0;
buttonform.addEventListener("submit", (e) => {
  e.preventDefault();
  const regex_nom_prenom = /^[a-zA-ZÀ-ÿ\s'-]{2,}$/;
  const regex_tel = /^(0[5-7][0-9]{8})$/;
  const regex_email = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{3,}$/;
  const nominput = document.querySelector(".nom-input").value;
  const prenominput = document.querySelector(".prenom-input").value;
  const telinput = document.querySelector(".tel-input").value;
  const emailinput = document.querySelector(".email-input").value;

  if (!regex_nom_prenom.test(nominput)) {
    return alert("le nom est invalide essayer une autre fois");
  }
  if (!regex_nom_prenom.test(prenominput)) {
    return alert("le prenom est invalide essayer une autre fois");
  }
  if (!regex_tel.test(telinput)) {
    return alert("le numero est invalide essayer une autre fois");
  }
  if (!regex_email.test(emailinput)) {
    return alert("le email est invalide essayer une autre fois");
  }
  e.preventDefault();
  if (cntrparticipant < cntr) {
    cntrparticipant++;
    let dataform = e.target.closest(".form");
    let objetformdata = {
      Nom: dataform.querySelector(".nom-input").value,
      Prenom: dataform.querySelector(".prenom-input").value,
      Telephone: dataform.querySelector(".tel-input").value,
      Email: dataform.querySelector(".email-input").value,
    };

    dataformdisplay.innerHTML += `
          <div id='dataformdisplaydiv' class='rounded-lg bg-blue-400 text-center gap-8 my-5 '>
            <h1 class='font-mono text-black'>le participant:${cntrparticipant}/${cntr} </h1>
            <h2 class='font-bold text-black'>Nom:${objetformdata.Nom}</h2>
            <h2 class='font-bold text-black'>Prenom:${objetformdata.Prenom}</h2>
            <h2 class='font-bold text-black'>Telephone:${objetformdata.Telephone}</h2>
            <h2 class='font-bold text-black'>Email:${objetformdata.Email}</h2> 
            <button class='transform transition-transform duration-300 ease-in-out hover:scale-110 bg-black rounded' id='buttonreset' type='button' onclick='deleteuser(this)'><img class='flex mx-auto w-8 h-8 ' src='img/user.png'/> </button>
          </div>`;
  } else {
    alert("max utilisateur ajouter ");
  }

  e.preventDefault();
  buttonform.reset();
});
function deleteuser(button) {
  button.parentElement.remove();
  cntrparticipant--;
}
function btnprecedentformsection() {
  section2.style.display = "flex";
  section3.style.display = "none";
}
function btnsuivantformsection() {
  section3.style.display = "none";
  section4.style.display = "block";
}
