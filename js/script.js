document.addEventListener("DOMContentLoaded", function() {

    let name = localStorage.getItem("userName");

    if (!name) {
        name = prompt("Masukkan Nama Anda");
        if (!name || name.trim() === "") {
            name = "";
        }
        localStorage.setItem("userName", name); 
    }
    document.getElementById('welcome-speech').textContent = 'Selamat Datang, ' + name + '!';
});


function updateClock() {
    const now = new Date();
    
    let hours = now.getHours();
    let minutes = now.getMinutes();
    let seconds = now.getSeconds();

    hours = hours < 10 ? '0' + hours : hours;
    minutes = minutes < 10 ? '0' + minutes : minutes;
    seconds = seconds < 10 ? '0' + seconds : seconds;
    document.getElementById('clock').textContent = `${hours}:${minutes}:${seconds}`;
}
setInterval(updateClock, 1000);
updateClock();

document.addEventListener('DOMContentLoaded', function() {
    const jamInput = document.getElementById('jam');
    const menitInput = document.getElementById('menit');

    // Cegah input negatif & non-angka untuk jam
    jamInput.addEventListener('input', function() {
        this.value = this.value.replace(/[^0-9]/g, '');
        if (this.value.startsWith('-')) {
            this.value = this.value.replace('-', '');
        }
    });
    menitInput.addEventListener('input', function() {
        this.value = this.value.replace(/[^0-9]/g, '');
        if (this.value.startsWith('-')) {
            this.value = this.value.replace('-', '');
        }
    });
});

document.addEventListener("DOMContentLoaded", function() {
    const form = document.getElementById("form");
  const mapelInput = document.getElementById("mapel");
  const jamInput = document.getElementById("jam");
  const menitInput = document.getElementById("menit");
  
  const catatanInput = document.getElementById("catatan");
  const output = document.getElementById("output");

form.addEventListener("submit", async function(e){
    const mapel=mapelInput.value.trim();
   
   if(!mapel){
       output.innerHTML='Mapel harus diisi'
       output.style.display="block";
       return;
    
    }
    output.style.display = "none";
    console.log("Mapel:", mapel);
     console.log("Jam:", jam);
    console.log("Catatan:", catatan);
    alert("Form berhasil dikirim!");
})  });


