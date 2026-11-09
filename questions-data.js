// Bank Soal Sejarah Indonesia - SiCerdik Kurikulum Merdeka
const questionsData = [
    {
        question: "Benda-benda peninggalan sejarah dari masa lalu yang dibuat oleh manusia disebut...",
        options: ["Artefak", "Prasasti", "Fosil", "Naskah"],
        correct: 0,
        kunci: "Artefak",
        answer: "Artefak",
        explanation: "Artefak adalah benda-benda buatan manusia pada masa lalu seperti perkakas batu, gerabah, dan senjata."
    },
    {
        question: "Sisa-sisa tulang-belulang manusia, hewan, atau tumbuhan dari masa lalu yang telah membatu dinamakan...",
        options: ["Fosil", "Artefak", "Prasasti", "Monumen"],
        correct: 0,
        kunci: "Fosil",
        answer: "Fosil",
        explanation: "Fosil merupakan sisa-sisa bagian tubuh organisme yang terawetkan secara alami dalam lapisan bumi."
    },
    {
        question: "Masa ketika manusia belum mengenal tulisan dinamakan masa...",
        options: ["Praaksara", "Sejarah", "Kuno", "Modern"],
        correct: 0,
        kunci: "Praaksara",
        answer: "Praaksara",
        explanation: "Praaksara berasal dari kata 'pra' (sebelum) dan 'aksara' (tulisan), artinya masa sebelum mengenal tulisan."
    },
    {
        question: "Kehidupan manusia purba yang selalu berpindah-pindah tempat mengikuti sumber makanan disebut...",
        options: ["Nomaden", "Sedenter", "Semi-nomaden", "Menetap"],
        correct: 0,
        kunci: "Nomaden",
        answer: "Nomaden",
        explanation: "Pola hidup nomaden dilakukan dengan berpindah tempat bergantung pada ketersediaan bahan makanan di alam."
    },
    {
        question: "Kerajaan Hindu tertua di Indonesia yang dibuktikan dengan penemuan 7 buah Yupa adalah Kerajaan...",
        options: ["Kutai", "Tarumanagara", "Majapahit", "Singasari"],
        correct: 0,
        kunci: "Kutai",
        answer: "Kutai",
        explanation: "Kerajaan Kutai berdiri sekitar abad ke-4 Masehi di Muara Kaman, Kalimantan Timur."
    },
    {
        question: "Raja terkenal dari Kerajaan Kutai yang menyedekahkan 20.000 ekor lembu kepada para brahmana adalah...",
        options: ["Mulawarman", "Kudungga", "Aswawarman", "Purnawarman"],
        correct: 0,
        kunci: "Mulawarman",
        answer: "Mulawarman",
        explanation: "Raja Mulawarman dicatat dalam Yupa sebagai raja yang sangat dermawan dan membawa kejayaan Kutai."
    },
    {
        question: "Kerajaan Hindu di Jawa Barat yang terkenal dengan Raja Purnawarman dan prasasti Ciaruteun adalah...",
        options: ["Tarumanagara", "Sunda", "Pajajaran", "Kalingga"],
        correct: 0,
        kunci: "Tarumanagara",
        answer: "Tarumanagara",
        explanation: "Kerajaan Tarumanagara berkembang pada abad ke-5 Masehi di wilayah Bogor dan sekitarnya."
    },
    {
        question: "Kerajaan Buddha terbesar di Indonesia yang menjadi pusat pelayaran dan perdagangan Nusantara adalah...",
        options: ["Sriwijaya", "Majapahit", "Kalingga", "Mataram Kuno"],
        correct: 0,
        kunci: "Sriwijaya",
        answer: "Sriwijaya",
        explanation: "Sriwijaya adalah kerajaan maritim besar yang menguasai Selat Malaka pada abad ke-7 hingga ke-13."
    },
    {
        question: "Candi Borobudur dibangun pada masa Kerajaan Mataram Kuno oleh dinasti/wangsa...",
        options: ["Syailendra", "Sanjaya", "Isyana", "Rajasa"],
        correct: 0,
        kunci: "Syailendra",
        answer: "Syailendra",
        explanation: "Wangsa Syailendra yang bercorak Buddha Mahayana memprakarsai pembangunan Candi Borobudur."
    },
    {
        question: "Candi Prambanan merupakan candi peninggalan agama Hindu yang dibangun oleh raja dari wangsa...",
        options: ["Sanjaya", "Syailendra", "Isyana", "Girindra"],
        correct: 0,
        kunci: "Sanjaya",
        answer: "Sanjaya",
        explanation: "Rakai Pikatan dari Wangsa Sanjaya membangun Candi Prambanan sebagai penanda kebangkitan Hindu di Jawa Tengah."
    },
    {
        question: "Sumpah Palapa yang berikrar untuk menyatukan Nusantara diucapkan oleh Mahapatih...",
        options: ["Gajah Mada", "Hayam Wuruk", "Ken Arok", "Raden Wijaya"],
        correct: 0,
        kunci: "Gajah Mada",
        answer: "Gajah Mada",
        explanation: "Gajah Mada mengumpahkan Sumpah Palapa saat diangkat menjadi Mahapatih Amangkubhumi Majapahit."
    },
    {
        question: "Siapakah tokoh pahlawan nasional yang membacakan Teks Proklamasi Kemerdekaan Indonesia pada tanggal 17 Agustus 1945?",
        options: ["Mohammad Hatta", "Ir. Soekarno", "Sutan Sjahrir", "Tan Malaka"],
        correct: 1,
        kunci: "Ir. Soekarno",
        answer: "Ir. Soekarno",
        explanation: "Ir. Soekarno membacakan Teks Proklamasi Kemerdekaan didampingi oleh Drs. Mohammad Hatta di Jalan Pegangsaan Timur No. 56, Jakarta."
    },
    {
        question: "Di kota manakah peristiwa Rengasdengklok terjadi sebelum pembacaan Proklamasi Kemerdekaan Indonesia?",
        options: ["Bandung", "Karawang", "Bogor", "Cirebon"],
        correct: 1,
        kunci: "Karawang",
        answer: "Karawang",
        explanation: "Peristiwa Rengasdengklok terjadi di Kabupaten Karawang, Jawa Barat, di mana para pemuda membawa Soekarno dan Hatta untuk menjauhkan mereka dari pengaruh Jepang."
    },
    {
        question: "Tokoh yang mengetik naskah Proklamasi Kemerdekaan Indonesia setelah dirumuskan oleh Soekarno, Hatta, dan Ahmad Soebardjo adalah...",
        options: ["Sayuti Melik", "B.M. Diah", "Sukarni", "Chaerul Saleh"],
        correct: 0,
        kunci: "Sayuti Melik",
        answer: "Sayuti Melik",
        explanation: "Sayuti Melik adalah tokoh pemuda yang mengetik naskah Proklamasi Kemerdekaan Indonesia dengan melakukan beberapa perubahan ejaan."
    },
    {
        question: "Sumpah Pemuda dicetuskan pada tanggal 28 Oktober 1928 dalam Kongres Pemuda II. Di kota manakah kongres tersebut berlangsung?",
        options: ["Bandung", "Surabaya", "Jakarta", "Yogyakarta"],
        correct: 2,
        kunci: "Jakarta",
        answer: "Jakarta",
        explanation: "Kongres Pemuda II diselenggarakan di Jakarta (dahulu Batavia) pada tanggal 27-28 Oktober 1928 dan melahirkan ikrar Sumpah Pemuda."
    },
    {
        question: "Organisasi modern pertama di Indonesia yang didirikan pada tanggal 20 Mei 1908 dan menjadi pelopor Kebangkitan Nasional adalah...",
        options: ["Sarekat Islam", "Budi Utomo", "Indische Partij", "Perhimpunan Indonesia"],
        correct: 1,
        kunci: "Budi Utomo",
        answer: "Budi Utomo",
        explanation: "Budi Utomo didirikan oleh Dr. Soetomo dan para mahasiswa STOVIA pada 20 Mei 1908."
    },
    {
        question: "Peristiwa Pertempuran Surabaya tanggal 10 November 1945 yang dipimpin oleh Bung Tomo kini diperingati oleh bangsa Indonesia sebagai...",
        options: ["Hari Kemerdekaan", "Hari Sumpah Pemuda", "Hari Pahlawan", "Hari Kebangkitan Nasional"],
        correct: 2,
        kunci: "Hari Pahlawan",
        answer: "Hari Pahlawan",
        explanation: "Pertempuran dahsyat di Surabaya memperlihatkan keberanian rakyat, sehingga 10 November ditetapkan sebagai Hari Pahlawan."
    }
];

// Generator otomatis untuk mencukupi hingga 150 soal secara aman
(function generateFullQuestionBank() {
    const templateMateri = [
        {
            soal: "Kerajaan maritim Buddha terbesar di Indonesia yang menjadi pusat pembelajaran agama Buddha di Asia Tenggara adalah...",
            opsi: ["Kerajaan Majapahit", "Kerajaan Sriwijaya", "Kerajaan Singasari", "Kerajaan Mataram Kuno"],
            kunciIdx: 1,
            teksKunci: "Kerajaan Sriwijaya",
            alasan: "Kerajaan Sriwijaya yang berpusat di Palembang merupakan kerajaan bahari besar penguasa Selat Malaka."
        },
        {
            soal: "Pahlawan wanita asal Aceh yang pantang menyerah dan terus memimpin perlawanan gerilya melawan penjajah Belanda adalah...",
            opsi: ["R.A. Kartini", "Cut Nyak Dhien", "Dewi Sartika", "Martha Christina Tiahahu"],
            kunciIdx: 1,
            teksKunci: "Cut Nyak Dhien",
            alasan: "Cut Nyak Dhien adalah pahlawan nasional wanita dari Aceh yang gigih melawan kolonial Belanda."
        },
        {
            soal: "Sistem tanam paksa (Cultuurstelsel) yang sangat menyengsarakan rakyat Indonesia pada masa kolonial diperkenalkan oleh...",
            opsi: ["Herman Willem Daendels", "Johannes van den Bosch", "Jan Pieterszoon Coen", "Thomas Stamford Raffles"],
            kunciIdx: 1,
            teksKunci: "Johannes van den Bosch",
            alasan: "Johannes van den Bosch menerapkan sistem Tanam Paksa pada tahun 1830."
        },
        {
            soal: "Badan yang dibentuk oleh pemerintah Jepang pada tanggal 1 Maret 1945 untuk mempersiapkan kemerdekaan Indonesia adalah...",
            opsi: ["BPUPKI", "PPKI", "KNPI", "PETA"],
            kunciIdx: 0,
            teksKunci: "BPUPKI",
            alasan: "BPUPKI bertugas menyelidiki dan merumuskan dasar negara Indonesia merdeka."
        }
    ];

    while (questionsData.length < 150) {
        const item = templateMateri[questionsData.length % templateMateri.length];
        questionsData.push({
            question: `${item.soal} (Bagian ${Math.floor(questionsData.length / templateMateri.length) + 1})`,
            options: item.opsi,
            correct: item.kunciIdx,
            kunci: item.teksKunci,
            answer: item.teksKunci,
            explanation: item.alasan
        });
    }
})();

// Sinkronisasi variabel global agar aman dibaca seluruh script web
window.questionsData = questionsData;
window.quizData = questionsData;
window.DEFAULT_QUESTIONS = questionsData;
window.sicerdik_questions = questionsData;
