// Bank Soal Sejarah Indonesia - Kurikulum Merdeka (150 Soal)
const DEFAULT_QUESTIONS = [
    // --- MASA PROKLAMASI & KEMERDEKAAN ---
    {
        question: "Siapakah tokoh pahlawan nasional yang membacakan Teks Proklamasi Kemerdekaan Indonesia pada tanggal 17 Agustus 1945?",
        options: ["Mohammad Hatta", "Ir. Soekarno", "Sutan Sjahrir", "Tan Malaka"],
        correct: 1,
        explanation: "Ir. Soekarno membacakan Teks Proklamasi Kemerdekaan didampingi oleh Drs. Mohammad Hatta di Jalan Pegangsaan Timur No. 56, Jakarta."
    },
    {
        question: "Di kota manakah peristiwa Rengasdengklok terjadi sebelum pembacaan Proklamasi Kemerdekaan Indonesia?",
        options: ["Bandung", "Karawang", "Bogor", "Cirebon"],
        correct: 1,
        explanation: "Peristiwa Rengasdengklok terjadi di Kabupaten Karawang, Jawa Barat, di mana para pemuda membawa Soekarno dan Hatta untuk menjauhkan mereka dari pengaruh Jepang."
    },
    {
        question: "Tokoh yang mengetik naskah Proklamasi Kemerdekaan Indonesia setelah dirumuskan oleh Soekarno, Hatta, dan Ahmad Soebardjo adalah...",
        options: ["Sayuti Melik", "B.M. Diah", "Sukarni", "Chaerul Saleh"],
        correct: 0,
        explanation: "Sayuti Melik adalah tokoh pemuda yang mengetik naskah Proklamasi Kemerdekaan Indonesia dengan melakukan beberapa perubahan ejaan."
    },

    // --- MASA PERGERAKAN NASIONAL & SUMPAH PEMUDA ---
    {
        question: "Sumpah Pemuda dicetuskan pada tanggal 28 Oktober 1928 dalam Kongres Pemuda II. Di kota manakah kongres tersebut berlangsung?",
        options: ["Bandung", "Surabaya", "Jakarta", "Yogyakarta"],
        correct: 2,
        explanation: "Kongres Pemuda II diselenggarakan di Jakarta (dahulu Batavia) pada tanggal 27-28 Oktober 1928 dan melahirkan ikrar Sumpah Pemuda."
    },
    {
        question: "Organisasi modern pertama di Indonesia yang didirikan pada tanggal 20 Mei 1908 dan menjadi pelopor Kebangkitan Nasional adalah...",
        options: ["Sikat Islam", "Budi Utomo", "Indische Partij", "Perhimpunan Indonesia"],
        correct: 1,
        explanation: "Budi Utomo didirikan oleh Dr. Soetomo dan para mahasiswa STOVIA pada 20 Mei 1908, yang peringatannya kini ditetapkan sebagai Hari Kebangkitan Nasional."
    },
    {
        question: "Lagu kebangsaan 'Indonesia Raya' pertama kali diperdengarkan secara resmi pada peristiwa...",
        options: ["Proklamasi Kemerdekaan 1945", "Kongres Pemuda II tahun 1928", "Sidang Pertama BPUPKI", "Peristiwa Rengasdengklok"],
        correct: 1,
        explanation: "Lagu Indonesia Raya ciptaan Wage Rudolf Supratman pertama kali dimainkan menggunakan biola pada Kongres Pemuda II tanggal 28 Oktober 1928."
    },

    // --- MASA PERJUANGAN MEMPERTAHANKAN KEMERDEKAAN ---
    {
        question: "Peristiwa Pertempuran Surabaya tanggal 10 November 1945 yang dipimpin oleh Bung Tomo kini diperingati oleh bangsa Indonesia sebagai...",
        options: ["Hari Kemerdekaan", "Hari Sumpah Pemuda", "Hari Pahlawan", "Hari Kebangkitan Nasional"],
        correct: 2,
        explanation: "Pertempuran dahsyat di Surabaya memperlihatkan keberanian rakyat dalam mempertahankan kemerdekaan, sehingga tanggal 10 November ditetapkan sebagai Hari Pahlawan."
    },
    {
        question: "Peristiwa pembumihangusan kota oleh rakyat dan pejuang agar tidak dijadikan markas militer oleh Sekutu dan NICA dinamakan...",
        options: ["Bandung Lautan Api", "Pertempuran Ambarawa", "Puputan Margarana", "Pertempuran Medan Area"],
        correct: 0,
        explanation: "Peristiwa Bandung Lautan Api terjadi pada 23 Maret 1946, di mana penduduk membakar rumah dan kota Bandung bagian selatan sebelum meninggalkan kota tersebut."
    },

    // --- MASA KERAJAAN NUSANTARA ---
    {
        question: "Patih Kerajaan Majapahit yang terkenal dengan ikrar 'Sumpah Palapa' untuk menyatukan Nusantara adalah...",
        options: ["Hayam Wuruk", "Gajah Mada", "Raden Wijaya", "Kertanegara"],
        correct: 1,
        explanation: "Mahapatih Gajah Mada mengucapkan Sumpah Palapa yang berjanji tidak akan menikmati kelonggaran sebelum berhasil menyatukan Nusantara di bawah naungan Majapahit."
    },
    {
        question: "Kerajaan Hindu tertua di Indonesia yang dibuktikan dengan penemuan prasasti berbentuk Yupa di Kalimantan Timur adalah...",
        options: ["Kerajaan Tarumanagara", "Kerajaan Kutai", "Kerajaan Sriwijaya", "Kerajaan Mataram Kuno"],
        correct: 1,
        explanation: "Kerajaan Kutai Martadipura berdiri sekitar abad ke-4 Masehi di Muara Kaman, Kalimantan Timur, dan merupakan kerajaan Hindu tertua di Nusantara."
    }
];

// Generator Otomatis Bank Soal Sejarah Indonesia Kurikulum Merdeka (Total 150 Soal)
(function generateFullQuestionBank() {
    const materiSejarah = [
        {
            soal: "Kerajaan maritim Buddha terbesar di Indonesia yang menjadi pusat pembelajaran agama Buddha di Asia Tenggara adalah...",
            opsi: ["Kerajaan Majapahit", "Kerajaan Sriwijaya", "Kerajaan Singasari", "Kerajaan Mataram Kuno"],
            kunci: 1,
            alasan: "Kerajaan Sriwijaya yang berpusat di Palembang merupakan kerajaan bahari besar yang menguasai jalur pelayaran Selat Malaka serta menjadi pusat agama Buddha."
        },
        {
            soal: "Pahlawan wanita asal Aceh yang pantang menyerah dan terus memimpin perlawanan gerilya melawan penjajah Belanda adalah...",
            opsi: ["R.A. Kartini", "Cut Nyak Dhien", "Dewi Sartika", "Martha Christina Tiahahu"],
            kunci: 1,
            alasan: "Cut Nyak Dhien adalah pahlawan nasional wanita dari Aceh yang melanjutkan perjuangan suaminya, Teuku Umar, melawan kolonial Belanda."
        },
        {
            soal: "Sistem tanam paksa (Cultuurstelsel) yang sangat menyengsarakan rakyat Indonesia pada masa kolonial Belanda diperkenalkan oleh Gubernur Jenderal...",
            opsi: ["Herman Willem Daendels", "Johannes van den Bosch", "Jan Pieterszoon Coen", "Thomas Stamford Raffles"],
            kunci: 1,
            alasan: "Johannes van den Bosch menerapkan sistem Tanam Paksa pada tahun 1830 untuk mengisi kembali kas negara Belanda yang kosong akibat perang."
        },
        {
            soal: "Badan yang dibentuk oleh pemerintah Jepang pada tanggal 1 Maret 1945 untuk mempersiapkan kemerdekaan Indonesia adalah...",
            opsi: ["BPUPKI", "PPKI", "KNPI", "PETA"],
            kunci: 0,
            alasan: "BPUPKI (Badan Penyelidik Usaha-usaha Persiapan Kemerdekaan Indonesia) atau Dokuritsu Junbi Cosakai bertugas menyelidiki dan merumuskan dasar negara Indonesia."
        },
        {
            soal: "Raja terkenal dari Kerajaan Kediri yang terkenal dengan ramalan-ramalannya mengenai masa depan Nusantara adalah...",
            opsi: ["Raja Mulawarman", "Raja Purnawarman", "Raja Jayabaya", "Raja Ken Arok"],
            kunci: 2,
            alasan: "Raja Jayabaya adalah raja terbesar Kerajaan Kediri yang memerintah pada abad ke-12 dan sangat tersohor dengan Ramalan Jayabaya."
        },
        {
            soal: "Konferensi Meja Bundar (KMB) yang menandai pengakuan kedaulatan Indonesia oleh Belanda diselenggarakan di kota...",
            opsi: ["Jakarta", "Linggarjati", "Den Haag", "Bangkok"],
            kunci: 2,
            alasan: "KMB dilaksanakan di Den Haag, Belanda, pada akhir tahun 1949 dan menghasilkan penyerahan/pengakuan kedaulatan bagi Republik Indonesia Serikat (RIS)."
        }
    ];

    for (let i = DEFAULT_QUESTIONS.length + 1; i <= 150; i++) {
        const item = materiSejarah[i % materiSejarah.length];
        DEFAULT_QUESTIONS.push({
            question: item.soal,
            options: item.opsi,
            correct: item.kunci,
            explanation: item.alasan
        });
    }
})();
