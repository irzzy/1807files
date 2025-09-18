// Mengambil elemen-elemen yang dibutuhkan dari HTML
const tombolNggak = document.getElementById('tombolNggak');
const tombolMau = document.getElementById('tombolMau');
const containerAwal = document.getElementById('containerAwal');
const containerAkhir = document.getElementById('containerAkhir');

// Menambahkan event listener saat mouse mendekati tombol "Nggak Mau"
tombolNggak.addEventListener('mouseover', () => {
    // Menghitung posisi acak baru untuk tombol
    // window.innerWidth = lebar layar browser
    // window.innerHeight = tinggi layar browser
    const i = Math.floor(Math.random() * (window.innerWidth - 150));
    const j = Math.floor(Math.random() * (window.innerHeight - 100));

    // Mengubah posisi tombol ke koordinat acak yang baru
    tombolNggak.style.left = i + 'px';
    tombolNggak.style.top = j + 'px';
});

// Menambahkan event listener saat tombol "Mau" di-klik
tombolMau.addEventListener('click', () => {
    // Sembunyikan konten pertanyaan awal
    containerAwal.style.display = 'none';
    
    // Tampilkan konten "Jadian"
    containerAkhir.style.display = 'flex';
});