// Bank Soal Sejarah Indonesia - SiCerdik Kurikulum Merdeka
const questionsData = [
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
    },
    {
        question: "Kerajaan maritim Buddha terbesar di Indonesia yang menjadi pusat pembelajaran agama Buddha di Asia Tenggara adalah...",
        options: ["Kerajaan Majapahit", "Kerajaan Sriwijaya", "Kerajaan Singasari", "Kerajaan Mataram Kuno"],
        correct: 1,
        explanation: "Kerajaan Sriwijaya yang berpusat di Palembang merupakan kerajaan bahari besar yang menguasai jalur pelayaran Selat Malaka serta menjadi pusat agama Buddha."
    },
    {
        question: "Pahlawan wanita asal Aceh yang pantang menyerah dan terus memimpin perlawanan gerilya melawan penjajah Belanda adalah...",
        options: ["R.A. Kartini", "Cut Nyak Dhien", "Dewi Sartika", "Martha Christina Tiahahu"],
        correct: 1,
        explanation: "Cut Nyak Dhien adalah pahlawan nasional wanita dari Aceh yang melanjutkan perjuangan suaminya, Teuku Umar, melawan kolonial Belanda."
    },
    {
        question: "Sistem tanam paksa (Cultuurstelsel) yang sangat menyengsarakan rakyat Indonesia pada masa kolonial Belanda diperkenalkan oleh Gubernur Jenderal...",
        options: ["Herman Willem Daendels", "Johannes van den Bosch", "Jan Pieterszoon Coen", "Thomas Stamford Raffles"],
        correct: 1,
        explanation: "Johannes van den Bosch menerapkan sistem Tanam Paksa pada tahun 1830 untuk mengisi kembali kas negara Belanda yang kosong akibat perang."
    },
    {
        question: "Badan yang dibentuk oleh pemerintah Jepang pada tanggal 1 Maret 1945 untuk mempersiapkan kemerdekaan Indonesia adalah...",
        options: ["BPUPKI", "PPKI", "KNPI", "PETA"],
        correct: 0,
        explanation: "BPUPKI (Badan Penyelidik Usaha-usaha Persiapan Kemerdekaan Indonesia) atau Dokuritsu Junbi Cosakai bertugas menyelidiki dan merumuskan dasar negara Indonesia."
    },
    {
        question: "Raja terkenal dari Kerajaan Kediri yang terkenal dengan ramalan-ramalannya mengenai masa depan Nusantara adalah...",
        options: ["Raja Mulawarman", "Raja Purnawarman", "Raja Jayabaya", "Raja Ken Arok"],
        correct: 2,
        explanation: "Raja Jayabaya adalah raja terbesar Kerajaan Kediri yang memerintah pada abad ke-12 dan sangat tersohor dengan Ramalan Jayabaya."
    },
    {
        question: "Konferensi Meja Bundar (KMB) yang menandai pengakuan kedaulatan Indonesia oleh Belanda diselenggarakan di kota...",
        options: ["Jakarta", "Linggarjati", "Den Haag", "Bangkok"],
        correct: 2,
        explanation: "KMB dilaksanakan di Den Haag, Belanda, pada akhir tahun 1949 dan menghasilkan penyerahan/pengakuan kedaulatan bagi Republik Indonesia Serikat (RIS)."
    },
    {
        question: "Berapa jumlah bulu pada leher Burung Garuda lambang negara Indonesia?",
        options: ["44", "45", "46", "47"],
        correct: 1,
        explanation: "Jumlah bulu pada bagian leher Burung Garuda adalah 45, yang melambangkan angka tahun kemerdekaan (1945)."
    }
];

// Sinkronisasi variabel global agar aman dibaca script utama web
window.questionsData = questionsData;
window.quizData = questionsData;
window.DEFAULT_QUESTIONS = questionsData;
