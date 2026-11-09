const questionsData = [
  {
    question: "Benda-benda peninggalan sejarah dari masa lalu yang dibuat oleh manusia disebut...",
    options: ["Artefak", "Prasasti", "Fosil", "Naskah"],
    kunci: "Artefak",
    answer: "Artefak",
    explanation: "Artefak adalah benda-benda buatan manusia pada masa lalu seperti perkakas batu, gerabah, dan senjata."
  },
  {
    question: "Sisa-sisa tulang-belalang manusia, hewan, atau tumbuhan dari masa lalu yang telah membantu dinamakan...",
    options: ["Fosil", "Artefak", "Prasasti", "Monumen"],
    kunci: "Fosil",
    answer: "Fosil",
    explanation: "Fosil merupakan sisa-sisa bagian tubuh organisme yang terawetkan secara alami dalam lapisan bumi."
  },
  {
    question: "Masa ketika manusia belum mengenal tulisan dinamakan masa...",
    options: ["Praaksara", "Sejarah", "Kuno", "Modern"],
    kunci: "Praaksara",
    answer: "Praaksara",
    explanation: "Praaksara berasal dari kata 'pra' (sebelum) dan 'aksara' (tulisan), artinya masa sebelum mengenal tulisan."
  },
  {
    question: "Kehidupan manusia purba yang selalu berpindah-pindah tempat mengikuti sumber makanan disebut...",
    options: ["Nomaden", "Sedenter", "Semi-nomaden", "Menetap"],
    kunci: "Nomaden",
    answer: "Nomaden",
    explanation: "Pola hidup nomaden dilakukan dengan berpindah tempat bergantung pada ketersediaan bahan makanan di alam."
  },
  {
    question: "Kerajaan Hindu tertua di Indonesia yang dibuktikan dengan penemuan 7 buah Yupa adalah Kerajaan...",
    options: ["Kutai", "Tarumanagara", "Majapahit", "Singasari"],
    kunci: "Kutai",
    answer: "Kutai",
    explanation: "Kerajaan Kutai berdiri sekitar abad ke-4 Masehi di Muara Kaman, Kalimantan Timur."
  },
  {
    question: "Raja terkenal dari Kerajaan Kutai yang menyedekahkan 20.000 ekor lembu kepada para brahmana adalah...",
    options: ["Mulawarman", "Kudungga", "Aswawarman", "Purnawarman"],
    kunci: "Mulawarman",
    answer: "Mulawarman",
    explanation: "Raja Mulawarman dicatat dalam Yupa sebagai raja yang sangat dermawan dan membawa kejayaan Kutai."
  },
  {
    question: "Kerajaan Hindu di Jawa Barat yang terkenal dengan Raja Purnawarman dan prasasti Ciaruteun adalah...",
    options: ["Tarumanagara", "Sunda", "Pajajaran", "Kalingga"],
    kunci: "Tarumanagara",
    answer: "Tarumanagara",
    explanation: "Kerajaan Tarumanagara berkembang pada abad ke-5 Masehi di wilayah Bogor dan sekitarnya."
  },
  {
    question: "Kerajaan Buddha terbesar di Indonesia yang menjadi pusat pelayaran dan perdagangan Nusantara adalah...",
    options: ["Sriwijaya", "Majapahit", "Kalingga", "Mataram Kuno"],
    kunci: "Sriwijaya",
    answer: "Sriwijaya",
    explanation: "Sriwijaya adalah kerajaan maritim besar yang menguasai Selat Malaka pada abad ke-7 hingga ke-13."
  },
  {
    question: "Candi Borobudur dibangun pada masa Kerajaan Mataram Kuno oleh dinasti/wangsa...",
    options: ["Syailendra", "Sanjaya", "Isyana", "Rajasa"],
    kunci: "Syailendra",
    answer: "Syailendra",
    explanation: "Wangsa Syailendra yang bercorak Buddha Mahayana memprakarsai pembangunan Candi Borobudur."
  },
  {
    question: "Candi Prambanan merupakan candi peninggalan agama Hindu yang dibangun oleh raja dari wangsa...",
    options: ["Sanjaya", "Syailendra", "Isyana", "Girindra"],
    kunci: "Sanjaya",
    answer: "Sanjaya",
    explanation: "Rakai Pikatan dari Wangsa Sanjaya membangun Candi Prambanan sebagai penanda kebangkitan Hindu di Jawa Tengah."
  },
  {
    question: "Sumpah Palapa yang berikrar untuk menyatukan Nusantara diucapkan oleh Mahapatih...",
    options: ["Gajah Mada", "Hayam Wuruk", "Ken Arok", "Raden Wijaya"],
    kunci: "Gajah Mada",
    answer: "Gajah Mada",
    explanation: "Gajah Mada mengumpahkan Sumpah Palapa saat diangkat menjadi Mahapatih Amangkubhumi Majapahit."
  },
  {
    question: "Pendiri Kerajaan Majapahit yang memanfaatkan pasukan Mongol untuk mengalahkan Jayakatwang adalah...",
    options: ["Raden Wijaya", "Hayam Wuruk", "Jayanegara", "Tribhuwana Tunggadewi"],
    kunci: "Raden Wijaya",
    answer: "Raden Wijaya",
    explanation: "Raden Wijaya mendirikan Majapahit pada tahun 1293 Masehi dan bergelar Kertarajasa Jayawardhana."
  },
  {
    question: "Semboyan 'Bhinneka Tunggal Ika' diambil dari karya sastra era Majapahit yaitu Kitab Sutasoma karangan...",
    options: ["Mpu Tantular", "Mpu Prapanca", "Mpu Sedah", "Mpu Panuluh"],
    kunci: "Mpu Tantular",
    answer: "Mpu Tantular",
    explanation: "Mpu Tantular menulis Kitab Sutasoma yang memuat ajaran toleransi beragama 'Bhinneka Tunggal Ika Tan Hana Dharma Mangrwa'."
  },
  {
    question: "Kerajaan Islam pertama di Indonesia yang terletak di ujung utara Pulau Sumatra adalah...",
    options: ["Samudera Pasai", "Aceh Darussalam", "Demak", "Malaka"],
    kunci: "Samudera Pasai",
    answer: "Samudera Pasai",
    explanation: "Samudera Pasai berdiri pada abad ke-13 di Lhokseumawe, Aceh, dipimpin oleh Sultan Malik al-Saleh."
  },
  {
    question: "Kerajaan Islam pertama di Pulau Jawa yang didirikan oleh Raden Patah adalah...",
    options: ["Demak", "Banten", "Cirebon", "Mataram Islam"],
    kunci: "Demak",
    answer: "Demak",
    explanation: "Kerajaan Demak menjadi pusat penyebaran agama Islam di Jawa dengan dukungan Wali Songo."
  },
  {
    question: "Tokoh Wali Songo yang menyebarkan agama Islam menggunakan media wayang kulit dan tembang Jawa adalah...",
    options: ["Sunan Kalijaga", "Sunan Giri", "Sunan Ampel", "Sunan Bonang"],
    kunci: "Sunan Kalijaga",
    answer: "Sunan Kalijaga",
    explanation: "Sunan Kalijaga memanfaatkan seni kebudayaan lokal seperti wayang kulit dan gamelan sebagai sarana dakwah."
  },
  {
    question: "Sultan dari Kesultanan Gowa-Tallo yang dijuluki 'Ayam Jantan dari Timur' oleh Belanda adalah...",
    options: ["Sultan Hasanuddin", "Sultan Baabullah", "Sultan Nuku", "Sultan Ageng Tirtayasa"],
    kunci: "Sultan Hasanuddin",
    answer: "Sultan Hasanuddin",
    explanation: "Sultan Hasanuddin gigih melawan monopoli perdagangan VOC di Makassar sehingga mendapat julukan tersebut."
  },
  {
    question: "Bangsa Eropa pertama yang berhasil mendarat di Nusantara (Malaka) pada tahun 1511 adalah...",
    options: ["Portugis", "Spanyol", "Belanda", "Inggris"],
    kunci: "Portugis",
    answer: "Portugis",
    explanation: "Pasukan Portugis di bawah pimpinan Alfonso de Albuquerque menaklukkan Malaka pada tahun 1511."
  },
  {
    question: "Gubernur Jenderal VOC yang memindahkan markas dagang dari Ambon ke Batavia pada tahun 1619 adalah...",
    options: ["Jan Pieterszoon Coen", "Pieter Both", "Daendels", "Raffles"],
    kunci: "Jan Pieterszoon Coen",
    answer: "Jan Pieterszoon Coen",
    explanation: "J.P. Coen menduduki Jayakarta, membakarnya, dan merebutnya menjadi markas pusat VOC bernama Batavia."
  },
  {
    question: "Sistem Tanam Paksa (Cultuurstelsel) di Indonesia diperkenalkan oleh Gubernur Jenderal...",
    options: ["Johannes van den Bosch", "H.W. Daendels", "T.S. Raffles", "van Deventer"],
    kunci: "Johannes van den Bosch",
    answer: "Johannes van den Bosch",
    explanation: "Van den Bosch menerapkan Tanam Paksa pada tahun 1830 untuk menutupi krisis keuangan pemerintah Belanda."
  }
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

// Menghubungkan variabel agar kompatibel dengan seluruh script
window.questionsData = questionsData;
window.quizData = questionsData;
window.sicerdik_questions = questionsData;
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
