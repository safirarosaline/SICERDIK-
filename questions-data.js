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
];

// Menghubungkan variabel agar kompatibel dengan seluruh script
window.questionsData = questionsData;
window.quizData = questionsData;
window.sicerdik_questions = questionsData;
