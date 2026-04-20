const menuToggle = document.getElementById("menuToggle");
const navMenu = document.getElementById("navMenu");
const navLinks = document.querySelectorAll(".nav-menu a");

if (menuToggle && navMenu) {
  menuToggle.addEventListener("click", () => {
    navMenu.classList.toggle("show");
  });
}

navLinks.forEach((link) => {
  link.addEventListener("click", () => {
    if (navMenu) {
      navMenu.classList.remove("show");
    }
  });
});

const bookingForm = document.getElementById("bookingForm");

if (bookingForm) {
  bookingForm.addEventListener("submit", function (e) {
    e.preventDefault();

    const nama = document.getElementById("nama").value.trim();
    const telepon = document.getElementById("telepon").value.trim();
    const jenisAcara = document.getElementById("jenisAcara").value;
    const paketDipilih = document.getElementById("paketDipilih").value;
    const tanggal = document.getElementById("tanggal").value;
    const lokasi = document.getElementById("lokasi").value.trim();
    const detail = document.getElementById("detail").value.trim();

    const nomorAdmin = "6283894036552";

    const pesan = `Halo Shine Studio Photobooth, saya ingin booking.

Nama Lengkap: ${nama}
Nomor WhatsApp: ${telepon}
Jenis Acara: ${jenisAcara}
Paket: ${paketDipilih}
Tanggal Acara: ${tanggal}
Lokasi Acara: ${lokasi}
Detail Kebutuhan: ${detail}`;

    const url = `https://wa.me/${nomorAdmin}?text=${encodeURIComponent(pesan)}`;
    window.open(url, "_blank");
  });
}
