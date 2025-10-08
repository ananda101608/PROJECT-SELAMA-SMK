// eskul-script.js
    const hamburger = document.querySelector(".hamburger");
    const navMenu = document.querySelector(".nav-menu");

    hamburger.addEventListener("click", () => {
        hamburger.classList.toggle("active");
        navMenu.classList.toggle("active");
    });


document.addEventListener('DOMContentLoaded', function() {
    
    const dataEskul = [
        { id: 'pramuka', nama: 'Pramuka', ikon: 'fa-solid fa-person-hiking', gambar: 'pramuka.jpg', deskripsi: 'Kegiatan kepanduan yang melatih kemandirian, kerjasama tim, dan keterampilan bertahan di alam bebas.', jadwal: 'Setiap Sabtu, 14:00 - 16:00', pembina: 'Kak Budi Hartono' },
        { id: 'paskibra', nama: 'Paskibra', ikon: 'fa-solid fa-flag', gambar: 'paskib.jpg', deskripsi: 'Pasukan Pengibar Bendera yang mendidik kedisiplinan, cinta tanah air, dan keterampilan baris-berbaris.', jadwal: 'Setiap Jumat, 15:00 - 17:00', pembina: 'Bapak Agus Setiawan' },
        { id: 'futsal', nama: 'Futsal', ikon: 'fa-solid fa-futbol', gambar: 'futsal.jpg', deskripsi: 'Mengembangkan bakat dalam olahraga sepak bola mini, fokus pada teknik, strategi, dan kerja sama tim.', jadwal: 'Selasa & Kamis, 16:00 - 18:00', pembina: 'Coach Rian' },
        { id: 'basket', nama: 'Basket', ikon: 'fa-solid fa-basketball', gambar: 'basket.jpg', deskripsi: 'Melatih keterampilan bermain bola basket, termasuk dribbling, shooting, dan strategi permainan tim.', jadwal: 'Rabu & Jumat, 16:00 - 18:00', pembina: 'Coach Vania' },
        { id: 'rohis', nama: 'Rohani Islam', ikon: 'fa-solid fa-mosque', gambar: 'rohis.jpg', deskripsi: 'Wadah pendalaman ilmu agama Islam, kajian, dan kegiatan sosial keagamaan untuk membentuk karakter Islami.', jadwal: 'Setiap Jumat, 11:30 - 12:30', pembina: 'Ustadz Ibrahim' },
        { id: 'rohkris', nama: 'Rohani Kristen', ikon: 'fa-solid fa-church', gambar: 'rohkris.jpg', deskripsi: 'Kegiatan pendalaman Alkitab, persekutuan doa, dan pelayanan untuk memperkuat iman Kristiani.', jadwal: 'Setiap Jumat, 11:30 - 12:30', pembina: 'Bapak Samuel' },
        { id: 'taekwondo', nama: 'Taekwondo', ikon: 'fa-solid fa-user-ninja', gambar: 'tekondo.jpg', deskripsi: 'Seni bela diri asal Korea yang fokus pada tendangan, kecepatan, dan disiplin diri.', jadwal: 'Setiap Rabu, 15:30 - 17:00', pembina: 'Sabeum-nim Alex' },
        { id: 'silat', nama: 'Pencak Silat', ikon: 'fa-solid fa-hand-fist', gambar: 'silat.jpg', deskripsi: 'Mempelajari seni bela diri warisan budaya Indonesia, melatih fisik, mental, dan sportivitas.', jadwal: 'Setiap Selasa, 15:30 - 17:00', pembina: 'Bapak Iwan' },
        { id: 'robotik', nama: 'Robotik', ikon: 'fa-solid fa-robot', gambar: 'robotik.jpg', deskripsi: 'Klub untuk para penggemar teknologi, belajar merakit, memprogram, dan mengkompetisikan robot.', jadwal: 'Setiap Kamis, 15:00 - 17:00', pembina: 'Ibu Dian S.Kom' },
        { id: 'tari', nama: 'Tari Tradisional', ikon: 'fa-solid fa-masks-theater', gambar: 'tari.jpg', deskripsi: 'Mempelajari dan melestarikan berbagai tarian daerah Indonesia, dari gerakan hingga makna filosofisnya.', jadwal: 'Setiap Senin, 15:00 - 17:00', pembina: 'Ibu Ratih' },
        { id: 'jurnalistik', nama: 'Jurnalistik', ikon: 'fa-solid fa-camera-retro', gambar: 'jurnalis.jpg', deskripsi: 'Mengasah kemampuan menulis, fotografi, dan publikasi. Bertugas meliput acara sekolah dan mengelola mading/website.', jadwal: 'Setiap Rabu, 15:00 - 16:30', pembina: 'Bapak Rendy' }
    ];

    const eskulListContainer = document.getElementById('eskul-list');
    const eskulDetailContainer = document.getElementById('eskul-detail-container');

    dataEskul.forEach(eskul => {
        const card = document.createElement('div');
        card.className = 'eskul-card';
        card.dataset.id = eskul.id;

        card.innerHTML = `
            <i class="icon ${eskul.ikon}"></i>
            <h3>${eskul.nama}</h3>
        `;
        eskulListContainer.appendChild(card);
    });

    const cards = document.querySelectorAll('.eskul-card');
    cards.forEach(card => {
        card.addEventListener('click', function() {
            const eskulId = this.dataset.id;
            const eskulData = dataEskul.find(e => e.id === eskulId);
            
            if (eskulData) {
                displayEskulDetail(eskulData);
            }
        });
    });

    function displayEskulDetail(eskul) {
        eskulDetailContainer.innerHTML = `
            <div class="eskul-detail-content">
                <img src="${eskul.gambar}" alt="Foto ${eskul.nama}">
                <div class="info">
                    <h2>${eskul.nama}</h2>
                    <p>${eskul.deskripsi}</p>
                    <ul>
                        <li><strong>Jadwal:</strong> ${eskul.jadwal}</li>
                        <li><strong>Pembina:</strong> ${eskul.pembina}</li>
                    </ul>
                </div>
            </div>
        `;
        eskulDetailContainer.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
});
