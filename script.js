// ==========================
// PASSWORD
// ==========================

const pages = document.querySelectorAll("section.page");

let currentPage = 0;

function checkPassword() {
  const password = document.getElementById("passwordInput").value;

  if (password === "16042026") {
    document.getElementById("password-screen").style.display = "none";
    // document.querySelector(".navigation").style.display = "flex";

    pages[currentPage].classList.remove("hidden");
    music.play();
  } else {
    alert("Wrong answer baby 🥺❤️");
  }
}

// ==========================
// PAGE NAVIGATION
// ==========================

// NEXT
function nextPage() {
  if (currentPage < pages.length - 1) {
    pages[currentPage].classList.add("hidden");

    currentPage++;

    pages[currentPage].classList.remove("hidden");

    pages[currentPage].style.opacity = 0;

    setTimeout(() => {
      pages[currentPage].style.opacity = 1;
    }, 50);

    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }
}

// PREVIOUS
function prevPage() {
  if (currentPage > 0) {
    pages[currentPage].classList.add("hidden");

    currentPage--;

    pages[currentPage].classList.remove("hidden");

    pages[currentPage].style.opacity = 0;

    setTimeout(() => {
      pages[currentPage].style.opacity = 1;
    }, 50);

    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }
}

const music = document.getElementById("bgMusic");

const musicBtn = document.getElementById("musicBtn");

musicBtn.addEventListener("click", () => {
  if (music.paused) {
    music.play();

    musicBtn.innerText = "⏸ Pause Music";
  } else {
    music.pause();

    musicBtn.innerText = "🎵 Play Music";
  }
});

function openLetter() {

    document
        .querySelector(".letter")
        .classList.remove("hidden");

    if (letterIndex === 0) {

        typeLetter();

    }

}

function updateCounter() {
  const startDate = new Date("2026-04-16");

  const today = new Date();

  const difference = today - startDate;

  const days = Math.floor(difference / (1000 * 60 * 60 * 24));

  document.getElementById("daysCounter").innerText = days + " Days ❤️";
}

updateCounter();

function secretSurprise() {
  alert("Thank you for choosing me every day, baby ❤️");
}

const fullLetter = `
These past two months have been some of the happiest months of my life.

Thank you for choosing me, loving me and making every day special.

We fight, we fix and we stay together baby. ❤️

Happy 2 Months, My Baby ❤️
`;

let letterIndex = 0;

function typeLetter() {

    const target =
        document.getElementById("typedLetter");

    if (letterIndex < fullLetter.length) {

        target.innerHTML += fullLetter.charAt(letterIndex);

        letterIndex++;

        setTimeout(typeLetter, 40);

    }

}