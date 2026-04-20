const menuToggle = document.getElementById("menuToggle");
const navMenu = document.getElementById("navMenu");

menuToggle.addEventListener("click", () => {
  navMenu.classList.toggle("show");
});

document.querySelectorAll(".faq-question").forEach((button) => {
  button.addEventListener("click", () => {
    const answer = button.nextElementSibling;
    const isOpen = answer.style.maxHeight;

    document.querySelectorAll(".faq-answer").forEach((item) => {
      item.style.maxHeight = null;
    });

    if (!isOpen) {
      answer.style.maxHeight = answer.scrollHeight + "px";
    }
  });
});

const bookingForm = document.getElementById("bookingForm");

bookingForm.addEventListener("submit", function (e) {
  e.preventDefault();

  const nama = document.getElementById("nama").value;
  const acara = document.getElementById("acara").value;
  const tanggal = document.getElementById("tanggal").value;
  const pesan = document.getElementById("pesan").value;

  const nomorWA = "6281234567890"; // GANTI DENGAN NOMOR ADMIN KAMU

  const text = `Halo Shine Studio, saya mau booking photobooth.%0A%0A` +
    `Nama: ${encodeURIComponent(nama)}%0A` +
    `Jenis acara: ${encodeURIComponent(acara)}%0A` +
    `Tanggal acara: ${encodeURIComponent(tanggal)}%0A` +
    `Detail: ${encodeURIComponent(pesan)}`;

  window.open(`https://wa.me/${nomorWA}?text=${text}`, "_blank");
});
