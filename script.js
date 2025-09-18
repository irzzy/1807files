// Mengambil elemen-elemen yang dibutuhkan dari HTML
const tombolNggak = document.getElementById('tombolNggak');
const tombolMau = document.getElementById('tombolMau');
const containerAwal = document.getElementById('containerAwal');
const containerAkhir = document.getElementById('containerAkhir');

// Ini adalah FUNGSI yang isinya logika buat mindahin tombol
function pindahkanTombol() {
    const i = Math.floor(Math.random() * (window.innerWidth - 150));
    const j = Math.floor(Math.random() * (window.innerHeight - 100));

    tombolNggak.style.left = i + 'px';
    tombolNggak.style.top = j + 'px';
}

// PENGECEKAN UTAMA: Cek lebar layar saat halaman pertama kali dimuat
if (window.innerWidth <= 768) {
    // KONDISI 1: Jika lebar layar 768px atau kurang (dianggap HP)
    // Maka tombol "Nggak Mau" akan kabur saat di-KLIK
    tombolNggak.addEventListener('click', pindahkanTombol);
} else {
    // KONDISI 2: Jika lebar layar lebih besar dari 768px (dianggap Desktop)
    // Maka tombol "Nggak Mau" akan kabur saat di-HOVER
    tombolNggak.addEventListener('mouseover', pindahkanTombol);
}

// Event listener untuk tombol "Mau" tetap sama, tidak ada perubahan
tombolMau.addEventListener('click', () => {
    // Sembunyikan konten pertanyaan awal
    containerAwal.style.display = 'none';
    
    // Tampilkan konten "Jadian"
    containerAkhir.style.display = 'flex';
});