// welcome
let nama = localStorage.getItem("userName");
if (!nama) {
  nama = prompt("Masukkan Nama Anda") || "";
  localStorage.setItem("userName", nama);
}
document.getElementById("welcome-speech").textContent = "Selamat Datang " + nama + "!";

function updateClock() {
  const now = new Date();
  const hours = String(now.getHours()).padStart(2, "0");
  const minutes = String(now.getMinutes()).padStart(2, "0");
  const seconds = String(now.getSeconds()).padStart(2, "0");
  document.getElementById("clock").textContent = `${hours}:${minutes}:${seconds}`;
}
setInterval(updateClock, 1000);
updateClock();

// form
document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("form");
  const mapelInput = document.getElementById("mapel");
  const jamInput = document.getElementById("jam");
  const menitInput = document.getElementById("menit");
  const output = document.getElementById("output");
  const section = document.getElementById("Section");

  [jamInput, menitInput].forEach((input) => {
    input.addEventListener("input", () => {
      input.value = input.value.replace(/[^0-9]/g, "");
    });
  });

  form.addEventListener("submit", function (e) {
    e.preventDefault();

    const mapel = mapelInput.value.trim();
    const jam = parseInt(jamInput.value) || 0;
    const menit = parseInt(menitInput.value) || 0;

    if (!mapel) {
      output.textContent = "Mapel harus diisi";
      output.classList.remove("hidden");
      return;
    }
    if (jam === 0 && menit === 0) {
      output.textContent = "Durasi tidak boleh 0";
      output.classList.remove("hidden");
      return;
    }

    output.classList.add("hidden");
    section.classList.remove("hidden");
    startSesiBelajar(mapel, jam, menit);
  });
});

// sesi belajar
function startSesiBelajar(mapel, jam, menit) {
   let timeLeft = (jam * 60 + menit) * 60;
  const totalTime = timeLeft;

  const mapelAktif = document.getElementById("mapelAktif");
  const timerDisplay = document.getElementById("studyTimer");
  const progressBar = document.getElementById("progressBar");
  const progressText = document.getElementById("progressText");
  const resetBtn = document.getElementById("resetBtn");
  const finishBtn = document.getElementById("finishBtn");

  mapelAktif.textContent = mapel;

  const timerInterval = setInterval(updateTimer, 1000);

  function updateTimer() {
    if (timeLeft > 0) {
      timeLeft--;
       const h = Math.floor(timeLeft / 3600);
    const m = Math.floor((timeLeft % 3600) / 60);
    const s = timeLeft % 60;
    timerDisplay.textContent = `${String(h).padStart(2, "0")}:${String(m).padStart(2, "0")}:${String(s).padStart(2, "0")}`;
 const progress = ((totalTime - timeLeft) / totalTime) * 100;
      progressBar.style.width = progress + "%";
      progressText.textContent = Math.floor(progress) + "% Selesai";
    } else {
      clearInterval(timerInterval);
      progressText.textContent = "Sesi selesai";
    }
  }

  resetBtn.addEventListener("click", () => {
    clearInterval(timerInterval);
    location.reload();
  });

finishBtn.addEventListener("click", () => {
  clearInterval(timerInterval); // hentikan timer
  progressBar.style.width = "100%"; 
  progressText.textContent = "Selesai";

 
  setTimeout(() => {
    document.getElementById("Section").classList.add("hidden"); 
    document.getElementById("form").classList.remove("hidden"); 
    alert("Sesi belajar selesai");
  }, 1000); 
});
}
