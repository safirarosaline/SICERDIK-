// Bank Soal Terpadu - Sejarah Indonesia Kurikulum Merdeka
const questionsData = [
  // --- BAGIAN 1: ARTEFAK & KERAJAAN HINDU-BUDDHA ---
  {
    question: "Benda-benda peninggalan sejarah dari masa lalu yang dibuat oleh manusia disebut...",
    options: ["Artefak", "Prasasti", "Fosil", "Naskah"],
    correct: 0,
    answer: "Artefak",
    explanation: "Artefak adalah benda-benda buatan manusia pada masa lalu seperti perkakas batu, gerabah, dan senjata."
  },
  {
    question: "Sisa-sisa tulang-belulang manusia, hewan, atau tumbuhan dari masa lalu yang telah membatu dinamakan...",
    options: ["Fosil", "Artefak", "Prasasti", "Monumen"],
    correct: 0,
    answer: "Fosil",
    explanation: "Fosil merupakan sisa-sisa bagian tubuh organisme yang terawetkan secara alami dalam lapisan bumi."
  },
  {
    question: "Masa ketika manusia belum mengenal tulisan dinamakan masa...",
    options: ["Praaksara", "Sejarah", "Kuno", "Modern"],
    correct: 0,
    answer: "Praaksara",
    explanation: "Praaksara berasal dari kata 'pra' (sebelum) dan 'aksara' (tulisan), artinya masa sebelum mengenal tulisan."
  },
  {
    question: "Kehidupan manusia purba yang selalu berpindah-pindah tempat mengikuti sumber makanan disebut...",
    options: ["Nomaden", "Sedenter", "Semi-nomaden", "Menetap"],
    correct: 0,
    answer: "Nomaden",
    explanation: "Pola hidup nomaden dilakukan dengan berpindah tempat bergantung pada ketersediaan bahan makanan di alam."
  },
  {
    question: "Kerajaan Hindu tertua di Indonesia yang dibuktikan dengan penemuan 7 buah Yupa adalah Kerajaan...",
    options: ["Kutai", "Tarumanagara", "Majapahit", "Singasari"],
    correct: 0,
    answer: "Kutai",
    explanation: "Kerajaan Kutai berdiri sekitar abad ke-4 Masehi di Muara Kaman, Kalimantan Timur."
  },
  {
    question: "Raja terkenal dari Kerajaan Kutai yang menyedekahkan 20.000 ekor lembu kepada para brahmana adalah...",
    options: ["Mulawarman", "Kudungga", "Aswawarman", "Purnawarman"],
    correct: 0,
    answer: "Mulawarman",
    explanation: "Raja Mulawarman dicatat dalam Yupa sebagai raja yang sangat dermawan dan membawa kejayaan Kutai."
  },
  {
    question: "Kerajaan Hindu di Jawa Barat yang terkenal dengan Raja Purnawarman dan prasasti Ciaruteun adalah...",
    options: ["Tarumanagara", "Sunda", "Pajajaran", "Kalingga"],
    correct: 0,
    answer: "Tarumanagara",
    explanation: "Kerajaan Tarumanagara berkembang pada abad ke-5 Masehi di wilayah Bogor dan sekitarnya."
  },
  {
    question: "Kerajaan Buddha terbesar di Indonesia yang menjadi pusat pelayaran dan perdagangan Nusantara adalah...",
    options: ["Sriwijaya", "Majapahit", "Kalingga", "Mataram Kuno"],
    correct: 0,
    answer: "Sriwijaya",
    explanation: "Sriwijaya adalah kerajaan maritim besar yang menguasai Selat Malaka pada abad ke-7 hingga ke-13."
  },
  {
    question: "Candi Borobudur dibangun pada masa Kerajaan Mataram Kuno oleh dinasti/wangsa...",
    options: ["Syailendra", "Sanjaya", "Isyana", "Rajasa"],
    correct: 0,
    answer: "Syailendra",
    explanation: "Wangsa Syailendra yang bercorak Buddha Mahayana memprakarsai pembangunan Candi Borobudur."
  },
  {
    question: "Candi Prambanan merupakan candi peninggalan agama Hindu yang dibangun oleh raja dari wangsa...",
    options: ["Sanjaya", "Syailendra", "Isyana", "Girindra"],
    correct: 0,
    answer: "Sanjaya",
    explanation: "Rakai Pikatan dari Wangsa Sanjaya membangun Candi Prambanan sebagai penanda kebangkitan Hindu di Jawa Tengah."
  },
  {
    question: "Sumpah Palapa yang berikrar untuk menyatukan Nusantara diucapkan oleh Mahapatih...",
    options: ["Gajah Mada", "Hayam Wuruk", "Ken Arok", "Raden Wijaya"],
    correct: 0,
    answer: "Gajah Mada",
    explanation: "Gajah Mada mengucapkan Sumpah Palapa saat diangkat menjadi Mahapatih Amangkubhumi Majapahit."
  },
  {
    question: "Pendiri Kerajaan Majapahit yang memanfaatkan pasukan Mongol untuk mengalahkan Jayakatwang adalah...",
    options: ["Raden Wijaya", "Hayam Wuruk", "Jayanegara", "Tribhuwana Tunggadewi"],
    correct: 0,
    answer: "Raden Wijaya",
    explanation: "Raden Wijaya mendirikan Majapahit pada tahun 1293 Masehi dan bergelar Kertarajasa Jayawardhana."
  },
  {
    question: "Semboyan 'Bhinneka Tunggal Ika' diambil dari karya sastra era Majapahit yaitu Kitab Sutasoma karangan...",
    options: ["Mpu Tantular", "Mpu Prapanca", "Mpu Sedah", "Mpu Panuluh"],
    correct: 0,
    answer: "Mpu Tantular",
    explanation: "Mpu Tantular menulis Kitab Sutasoma yang memuat ajaran toleransi beragama 'Bhinneka Tunggal Ika Tan Hana Dharma Mangrwa'."
  },
  {
    question: "Kerajaan Islam pertama di Indonesia yang terletak di ujung utara Pulau Sumatra adalah...",
    options: ["Samudera Pasai", "Aceh Darussalam", "Demak", "Malaka"],
    correct: 0,
    answer: "Samudera Pasai",
    explanation: "Samudera Pasai berdiri pada abad ke-13 di Lhokseumawe, Aceh, dipimpin oleh Sultan Malik al-Saleh."
  },
  {
    question: "Kerajaan Islam pertama di Pulau Jawa yang didirikan oleh Raden Patah adalah...",
    options: ["Demak", "Banten", "Cirebon", "Mataram Islam"],
    correct: 0,
    answer: "Demak",
    explanation: "Kerajaan Demak menjadi pusat penyebaran agama Islam di Jawa dengan dukungan Wali Songo."
  },
  {
    question: "Tokoh Wali Songo yang menyebarkan agama Islam menggunakan media wayang kulit dan tembang Jawa adalah...",
    options: ["Sunan Kalijaga", "Sunan Giri", "Sunan Ampel", "Sunan Bonang"],
    correct: 0,
    answer: "Sunan Kalijaga",
    explanation: "Sunan Kalijaga memanfaatkan seni kebudayaan lokal seperti wayang kulit dan gamelan sebagai sarana dakwah."
  },
  {
    question: "Sultan dari Kesultanan Gowa-Tallo yang dijuluki 'Ayam Jantan dari Timur' oleh Belanda adalah...",
    options: ["Sultan Hasanuddin", "Sultan Baabullah", "Sultan Nuku", "Sultan Ageng Tirtayasa"],
    correct: 0,
    answer: "Sultan Hasanuddin",
    explanation: "Sultan Hasanuddin gigih melawan monopoli perdagangan VOC di Makassar sehingga mendapat julukan tersebut."
  },
  {
    question: "Bangsa Eropa pertama yang berhasil mendarat di Nusantara (Malaka) pada tahun 1511 adalah...",
    options: ["Portugis", "Spanyol", "Belanda", "Inggris"],
    correct: 0,
    answer: "Portugis",
    explanation: "Pasukan Portugis di bawah pimpinan Alfonso de Albuquerque menaklukkan Malaka pada tahun 1511."
  },
  {
    question: "Gubernur Jenderal VOC yang memindahkan markas dagang dari Ambon ke Batavia pada tahun 1619 adalah...",
    options: ["Jan Pieterszoon Coen", "Pieter Both", "Daendels", "Raffles"],
    correct: 0,
    answer: "Jan Pieterszoon Coen",
    explanation: "J.P. Coen menduduki Jayakarta, membakarnya, dan merebutnya menjadi markas pusat VOC bernama Batavia."
  },
  {
    question: "Sistem Tanam Paksa (Cultuurstelsel) di Indonesia diperkenalkan oleh Gubernur Jenderal...",
    options: ["Johannes van den Bosch", "H.W. Daendels", "T.S. Raffles", "van Deventer"],
    correct: 0,
    answer: "Johannes van den Bosch",
    explanation: "Van den Bosch menerapkan Tanam Paksa pada tahun 1830 untuk menutupi krisis keuangan pemerintah Belanda."
  },

  // --- BAGIAN 2: PROKLAMASI & PERGERAKAN NASIONAL ---
  {
    question: "Siapakah tokoh pahlawan nasional yang membacakan Teks Proklamasi Kemerdekaan Indonesia pada tanggal 17 Agustus 1945?",
    options: ["Mohammad Hatta", "Ir. Soekarno", "Sutan Sjahrir", "Tan Malaka"],
    correct: 1,
    answer: "Ir. Soekarno",
    explanation: "Ir. Soekarno membacakan Teks Proklamasi Kemerdekaan didampingi oleh Drs. Mohammad Hatta di Jalan Pegangsaan Timur No. 56, Jakarta."
  },
  {
    question: "Di kota manakah peristiwa Rengasdengklok terjadi sebelum pembacaan Proklamasi Kemerdekaan Indonesia?",
    options: ["Bandung", "Karawang", "Bogor", "Cirebon"],
    correct: 1,
    answer: "Karawang",
    explanation: "Peristiwa Rengasdengklok terjadi di Kabupaten Karawang, Jawa Barat, di mana para pemuda membawa Soekarno dan Hatta untuk menjauhkan mereka dari pengaruh Jepang."
  },
  {
    question: "Tokoh yang mengetik naskah Proklamasi Kemerdekaan Indonesia setelah dirumuskan oleh Soekarno, Hatta, dan Ahmad Soebardjo adalah...",
    options: ["Sayuti Melik", "B.M. Diah", "Sukarni", "Chaerul Saleh"],
    correct: 0,
    answer: "Sayuti Melik",
    explanation: "Sayuti Melik adalah tokoh pemuda yang mengetik naskah Proklamasi Kemerdekaan Indonesia dengan melakukan beberapa perubahan ejaan."
  },
  {
    question: "Sumpah Pemuda dicetuskan pada tanggal 28 Oktober 1928 dalam Kongres Pemuda II. Di kota manakah kongres tersebut berlangsung?",
    options: ["Bandung", "Surabaya", "Jakarta", "Yogyakarta"],
    correct: 2,
    answer: "Jakarta",
    explanation: "Kongres Pemuda II diselenggarakan di Jakarta (dahulu Batavia) pada tanggal 27-28 Oktober 1928 dan melahirkan ikrar Sumpah Pemuda."
  },
  {
    question: "Organisasi modern pertama di Indonesia yang didirikan pada tanggal 20 Mei 1908 dan menjadi pelopor Kebangkitan Nasional adalah...",
    options: ["Sarekat Islam", "Budi Utomo", "Indische Partij", "Perhimpunan Indonesia"],
    correct: 1,
    answer: "Budi Utomo",
    explanation: "Budi Utomo didirikan oleh Dr. Soetomo dan para mahasiswa STOVIA pada 20 Mei 1908, yang peringatannya kini ditetapkan sebagai Hari Kebangkitan Nasional."
  },
  {
    question: "Lagu kebangsaan 'Indonesia Raya' pertama kali diperdengarkan secara resmi pada peristiwa...",
    options: ["Proklamasi Kemerdekaan 1945", "Kongres Pemuda II tahun 1928", "Sidang Pertama BPUPKI", "Peristiwa Rengasdengklok"],
    correct: 1,
    answer: "Kongres Pemuda II tahun 1928",
    explanation: "Lagu Indonesia Raya ciptaan Wage Rudolf Supratman pertama kali dimainkan menggunakan biola pada Kongres Pemuda II tanggal 28 Oktober 1928."
  },
  {
    question: "Peristiwa Pertempuran Surabaya tanggal 10 November 1945 yang dipimpin oleh Bung Tomo kini diperingati oleh bangsa Indonesia sebagai...",
    options: ["Hari Kemerdekaan", "Hari Sumpah Pemuda", "Hari Pahlawan", "Hari Kebangkitan Nasional"],
    correct: 2,
    answer: "Hari Pahlawan",
    explanation: "Pertempuran dahsyat di Surabaya memperlihatkan keberanian rakyat dalam mempertahankan kemerdekaan, sehingga tanggal 10 November ditetapkan sebagai Hari Pahlawan."
  },
  {
    question: "Peristiwa pembumihangusan kota oleh rakyat dan pejuang agar tidak dijadikan markas militer oleh Sekutu dan NICA dinamakan...",
    options: ["Bandung Lautan Api", "Pertempuran Ambarawa", "Puputan Margarana", "Pertempuran Medan Area"],
    correct: 0,
    answer: "Bandung Lautan Api",
    explanation: "Peristiwa Bandung Lautan Api terjadi pada 23 Maret 1946, di mana penduduk membakar rumah dan kota Bandung bagian selatan sebelum meninggalkan kota tersebut."
  }
];

// Sinkronisasi variabel agar bisa dibaca oleh script quiz di web kamu
window.questionsData = questionsData;
window.quizData = questionsData;
window.sicerdik_questions = questionsData;
