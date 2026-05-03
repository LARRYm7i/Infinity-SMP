const SERVER_IP = "infinity-smp.net";

const copyButton = document.querySelector("[data-copy-ip]");
const heroImages = Array.from(document.querySelectorAll(".hero-image"));

let activeImage = 0;

async function copyServerIp() {
  try {
    if (navigator.clipboard && window.isSecureContext) {
      await navigator.clipboard.writeText(SERVER_IP);
    } else {
      const helper = document.createElement("textarea");
      helper.value = SERVER_IP;
      helper.setAttribute("readonly", "");
      helper.style.position = "fixed";
      helper.style.opacity = "0";
      document.body.appendChild(helper);
      helper.select();
      document.execCommand("copy");
      helper.remove();
    }
  } catch {
    copyButton.classList.add("copy-failed");
    window.setTimeout(() => copyButton.classList.remove("copy-failed"), 1800);
  }
}

function rotateHeroImage() {
  if (heroImages.length < 2) {
    return;
  }

  heroImages[activeImage].classList.remove("active");
  activeImage = (activeImage + 1) % heroImages.length;
  heroImages[activeImage].classList.add("active");
}

copyButton.addEventListener("click", copyServerIp);
window.setInterval(rotateHeroImage, 5200);