
const heartContainer = document.getElementById("floating-hearts");

// Create a floating heart or sparkle.
function createHeart() {
  const heart = document.createElement("span");
  const symbols = ["♡", "♥", "💕", "✦", "✨", "🌸"];

  heart.className = "floating-heart";
  heart.textContent = symbols[Math.floor(Math.random() * symbols.length)];

  heart.style.left = Math.random() * 100 + "%";
  heart.style.fontSize = (14 + Math.random() * 20) + "px";
  heart.style.animationDuration = (5 + Math.random() * 5) + "s";
  heart.style.animationDelay = (Math.random() * 1.5) + "s";

  heartContainer.appendChild(heart);

  // Remove finished animations to keep the page lightweight.
  heart.addEventListener("animationend", () => {
    heart.remove();
  }, { once: true });
}

// Start with a few floating hearts.
for (let i = 0; i < 12; i++) {
  setTimeout(createHeart, i * 250);
}

// Continue adding a heart occasionally.
setInterval(createHeart, 1200);

// Make greeting cards open and close.
const greetingCards = document.querySelectorAll(".greeting-card");

greetingCards.forEach((card) => {
  card.addEventListener("click", () => {
    const isOpening = !card.classList.contains("open");

    card.classList.toggle("open", isOpening);
    card.setAttribute("aria-expanded", String(isOpening));
  });
});

// Open the gift box and reveal the surprise.
const giftButton = document.getElementById("gift-button");
const giftMessage = document.getElementById("gift-message");

giftButton.addEventListener("click", () => {
  const isOpening = !giftButton.classList.contains("opened");

  giftButton.classList.toggle("opened", isOpening);
  giftButton.setAttribute("aria-expanded", String(isOpening));
  giftMessage.hidden = !isOpening;

  if (isOpening) {
    // A little burst of hearts when the gift opens.
    for (let i = 0; i < 18; i++) {
      setTimeout(createHeart, i * 80);
    }

    giftMessage.scrollIntoView({
      behavior: "smooth",
      block: "nearest"
    });
  }
});

// Reveal or hide the secret letter.
const letterButton = document.getElementById("letter-button");
const secretLetter = document.getElementById("secret-letter");

letterButton.addEventListener("click", () => {
  const isOpening = secretLetter.hidden;

  secretLetter.hidden = !isOpening;
  letterButton.setAttribute("aria-expanded", String(isOpening));

  letterButton.textContent = isOpening
    ? "Close your secret letter 💗"
    : "Read your secret letter 💗";

  if (isOpening) {
    secretLetter.scrollIntoView({
      behavior: "smooth",
      block: "nearest"
    });

    for (let i = 0; i < 8; i++) {
      setTimeout(createHeart, i * 150);
    }
  }
});

// Send a special shower of hearts on demand.
const moreHeartsButton = document.getElementById("more-hearts");

moreHeartsButton.addEventListener("click", () => {
  for (let i = 0; i < 35; i++) {
    setTimeout(createHeart, i * 100);
  }

  moreHeartsButton.textContent = "Sending you lots of love! 💖";

  setTimeout(() => {
    moreHeartsButton.textContent = "Send me more hearts! 💕";
  }, 2500);
});

console.log("Bandriya's surprise website is ready! 💗");
