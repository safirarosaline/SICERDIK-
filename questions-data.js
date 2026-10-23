// Bank Soal Sejarah Indonesia - Kurikulum Merdeka (150 Soal)
const DEFAULT_QUESTIONS = [
    // --- MASA PROKLAMASI & KEMERDEKAAN ---
    {
       const quizData = [
  {
    question: "Benda-benda peninggalan sejarah dari masa lalu yang dibuat oleh manusia disebut...",
    options: ["Artefak", "Prasasti", "Fosil", "Naskah"],
    answer: "Artefak",
    explanation: "Artefak adalah benda-benda buatan manusia pada masa lalu seperti perkakas batu, gerabah, dan senjata. Sedangkan fosil adalah sisa-sisa makhluk hidup yang telah membatu."
  },
  {
    question: "Sisa-sisa tulang-belalang manusia, hewan, atau tumbuhan dari masa lalu yang telah membatu dinamakan...",
    options: ["Fosil", "Artefak", "Prasasti", "Monumen"],
    answer: "Fosil",
    explanation: "Fosil merupakan sisa-sisa bagian tubuh organisme (tumbuhan, hewan, manusia) yang terawetkan secara alami di dalam lapisan bumi selama ribuan hingga jutaan tahun."
  },
  {
    question: "Masa ketika manusia belum mengenal tulisan dinamakan masa...",
    options: ["Praaksara", "Sejarah", "Kuno", "Modern"],
    answer: "Praaksara",
    explanation: "Praaksara berasal dari kata 'pra' (sebelum) dan 'aksara' (tulisan), yang berarti masa sebelum manusia mengenal tulisan. Masa praaksara berakhir setelah diketemukannya prasasti atau naskah tertulis."
  },
  {
    question: "Pola kehidupan manusia purba yang berpindah-pindah tempat mengikuti ketersediaan makanan disebut...",
    options: ["Nomaden", "Sedenter", "Semi-nomaden", "Koloni"],
    answer: "Nomaden",
    explanation: "Nomaden adalah pola hidup berpindah-pindah tempat untuk mencari bahan makanan (food gathering) dan menyesuaikan diri dengan lingkungan sekitarnya."
  },
  {
    question: "Tugu batu tunggal yang didirikan pada zaman Megalitikum untuk menyembah roh nenek moyang disebut...",
    options: ["Menhir", "Dolmen", "Sarkofagus", "Candi"],
    answer: "Menhir",
    explanation: "Menhir merupakan tugu batu tunggal berukuran besar yang didirikan sebagai media pemujaan dan penghormatan terhadap roh-roh nenek moyang."
  },
  {
    question: "Meja batu besar yang berfungsi sebagai tempat meletakkan sesaji pemujaan pada zaman megalitikum dinamakan...",
    options: ["Dolmen", "Menhir", "Waruga", "Punden berundak"],
    answer: "Dolmen",
    explanation: "Dolmen adalah bangunan megalitikum berbentuk meja batu dengan tiang batu di bawahnya, berfungsi sebagai tempat meletakkan sesaji atau penutup kubur."
  },
  {
    question: "Kerajaan Hindu tertua di Indonesia yang terletak di Kalimantan Timur adalah...",
    options: ["Kerajaan Kutai", "Kerajaan Tarumanagara", "Kerajaan Majapahit", "Kerajaan Singasari"],
    answer: "Kerajaan Kutai",
    explanation: "Kerajaan Kutai Martadipura di Kalimantan Timur diakui sebagai kerajaan Hindu tertua di Indonesia berdasarkan ditemukannya bukti sejarah Prasasti Yupa abad ke-5 Masehi."
  },
  {
    question: "Prasasti tertua peninggalan Kerajaan Kutai yang dipahat pada tugu batu dinamakan...",
    options: ["Prasasti Yupa", "Prasasti Ciaruteun", "Prasasti Kedukan Bukit", "Prasasti Tugu"],
    answer: "Prasasti Yupa",
    explanation: "Prasasti Yupa adalah tugu batu tempat mengikat hewan kurban yang berisi puji-pujian dan catatan mengenai Kerajaan Kutai, ditulis menggunakan huruf Pallawa dan bahasa Sanskerta."
  },
  {
    question: "Raja terkenal dari Kerajaan Kutai yang menyedekahkan 20.000 ekor sapi kepada para Brahmana adalah...",
    options: ["Mulawarman", "Kudungga", "Aswawarman", "Purnawarman"],
    answer: "Mulawarman",
    explanation: "Raja Mulawarman merupakan cucu Kudungga dan anak Aswawarman. Ia terkenal dermawan karena memberikan sedekah 20.000 ekor sapi kepada kaum Brahmana di tanah suci Waprakeswara."
  },
  {
    question: "Kerajaan Hindu pertama yang berdiri di Pulau Jawa adalah Kerajaan...",
    options: ["Tarumanagara", "Kutai", "Mataram Kuno", "Majapahit"],
    answer: "Tarumanagara",
    explanation: "Kerajaan Tarumanagara berpusat di wilayah Jawa Barat (sekitar Bogor dan Bekasi) pada abad ke-5 Masehi dan merupakan kerajaan Hindu tertua di Pulau Jawa."
  },
  {
    question: "Prasasti Ciaruteun memiliki keunikan berupa pahatan cap telapak kaki dari Raja...",
    options: ["Purnawarman", "Mulawarman", "Hayam Wuruk", "Airlangga"],
    answer: "Purnawarman",
    explanation: "Prasasti Ciaruteun memuat gambaran dua telapak kaki Raja Purnawarman yang diibaratkan seperti telapak kaki Dewa Wisnu sebagai pelindung dan pemelihara rakyat."
  },
  {
    question: "Kerajaan maritim Buddha terbesar di Nusantara yang pernah menjadi pusat pembelajaran bahasa Sanskerta adalah...",
    options: ["Sriwijaya", "Majapahit", "Kalingga", "Singasari"],
    answer: "Sriwijaya",
    explanation: "Kerajaan Sriwijaya di Sumatra Selatan merupakan kerajaan maritim berbasis keagamaan Buddha terbesar yang menguasai jalur perdagangan Selat Malaka dan Selat Sunda."
  },
  {
    question: "Candi Borobudur di Magelang Jawa Tengah merupakan candi peninggalan agama...",
    options: ["Buddha", "Hindu", "Islam", "Konghucu"],
    answer: "Buddha",
    explanation: "Candi Borobudur dibangun pada abad ke-8 sampai ke-9 Masehi dan merupakan monumen tempat pemujaan serta monumen keagamaan Buddha Mahayana terbesar di dunia."
  },
  {
    question: "Candi Prambanan yang terletak di Jawa Tengah merupakan contoh megah peninggalan candi agama...",
    options: ["Hindu", "Buddha", "Islam", "Kristen"],
    answer: "Hindu",
    explanation: "Candi Prambanan atau Candi Rara Jonggrang dibangun pada abad ke-9 Masehi oleh Dinasti Sanjaya sebagai candi pemujaan untuk Trimurti (Brahma, Wisnu, Siwa) dalam ajaran Hindu."
  },
  {
    question: "Candi Borobudur dibangun pada masa kejayaan raja-raja dari Dinasti...",
    options: ["Syailendra", "Sanjaya", "Isyana", "Rajasa"],
    answer: "Syailendra",
    explanation: "Dinasti Syailendra merupakan dinasti yang memeluk dan mengembangkan ajaran agama Buddha Mahayana di Jawa Tengah bagian selatan, termasuk mendirikan Candi Borobudur."
  },
  {
    question: "Kerajaan Majapahit berpusat di daerah Trowulan yang sekarang masuk dalam provinsi...",
    options: ["Jawa Timur", "Jawa Tengah", "Jawa Barat", "Bali"],
    answer: "Jawa Timur",
    explanation: "Pusat pemerintahan Kerajaan Majapahit terletak di daerah Trowulan, Mojokerto, provinsi Jawa Timur."
  },
  {
    question: "Pendiri sekaligus raja pertama yang memimpin Kerajaan Majapahit adalah...",
    options: ["Raden Wijaya", "Hayam Wuruk", "Gajah Mada", "Ken Arok"],
    answer: "Raden Wijaya",
    explanation: "Raden Wijaya mendirikan Kerajaan Majapahit pada tahun 1293 Masehi setelah mengalahkan pasukan Kerajaan Kediri dan memperdaya tentara Kekaisaran Mongol."
  },
  {
    question: "Sumpah Palapa diucapkan oleh Patih Gajah Mada dalam rencananya untuk...",
    options: ["Mewujudkan persatuan wilayah Nusantara", "Menghancurkan Kerajaan Kediri", "Membangun Candi Borobudur", "Mengusir penjajah Eropa"],
    answer: "Mewujudkan persatuan wilayah Nusantara",
    explanation: "Sumpah Palapa berisi ikrar Mahapatih Gajah Mada bahwa ia tidak akan menikmati kelezatan duniawi sebelum berhasil menundukkan wilayah-wilayah Nusantara di bawah naungan Majapahit."
  },
  {
    question: "Kerajaan Majapahit mencapai masa kejayaan dan masa keemasan terbesarnya pada pemerintahan Raja...",
    options: ["Hayam Wuruk", "Raden Wijaya", "Jayanegara", "Kertajaya"],
    answer: "Hayam Wuruk",
    explanation: "Di bawah kepemimpinan Raja Hayam Wuruk dan didampingi Mahapatih Gajah Mada (1350–1389 M), Majapahit berhasil menguasai hampir seluruh wilayah Nusantara hingga kawasan Asia Tenggara."
  },
  {
    question: "Semboyan persatuan bangsa Indonesia 'Bhinneka Tunggal Ika' dipetik dari kitab kuno bernama...",
    options: ["Kitab Sutasoma", "Kitab Negarakertagama", "Kitab Arjunawiwaha", "Kitab Pararaton"],
    answer: "Kitab Sutasoma",
    explanation: "Semboyan 'Bhinneka Tunggal Ika' diambil dari frasa dalam Kitab Sutasoma pupuh 139 bait 5, yang ditulis pada era keemasan Kerajaan Majapahit."
  },
  {
    question: "Kitab Sutasoma yang memuat ungkapan Bhinneka Tunggal Ika merupakan karya Pujangga...",
    options: ["Mpu Tantular", "Mpu Prapanca", "Mpu Sedah", "Mpu Kanwa"],
    answer: "Mpu Tantular",
    explanation: "Mpu Tantular adalah pujangga sastra Jawa Kuno ternama pada masa pemerintahan Raja Hayam Wuruk di Kerajaan Majapahit yang mengarang Kitab Sutasoma."
  },
  {
    question: "Kerajaan Islam tertua di Nusantara yang terletak di wilayah utara Sumatra adalah...",
    options: ["Samudera Pasai", "Demak", "Aceh Darussalam", "Mataram Islam"],
    answer: "Samudera Pasai",
    explanation: "Kerajaan Samudera Pasai berdiri pada abad ke-13 (sekitar tahun 1267 M) di Lhokseumawe, Aceh, dan tercatat sebagai kerajaan bernapaskan Islam tertua di Nusantara."
  },
  {
    question: "Sultan pertama sekaligus pendiri dari Kerajaan Samudera Pasai bernama...",
    options: ["Sultan Malik Al-Saleh", "Sultan Iskandar Muda", "Sultan Trenggono", "Sultan Hasanuddin"],
    answer: "Sultan Malik Al-Saleh",
    explanation: "Sultan Malik Al-Saleh (sebelumnya bernama Marah Silu) adalah pendiri sekaligus raja pertama Kerajaan Samudera Pasai yang memeluk agama Islam."
  },
  {
    question: "Kerajaan Islam pertama yang berdiri di Pulau Jawa adalah Kerajaan...",
    options: ["Demak", "Banten", "Cirebon", "Mataram Islam"],
    answer: "Demak",
    explanation: "Kerajaan Demak berdiri sekitar akhir abad ke-15 Masehi dan menjadi pelopor pusat penyebaran agama Islam pertama di Pulau Jawa pasca kemunduran Majapahit."
  },
  {
    question: "Pendiri dan pendahulu raja pertama dari Kerajaan Demak adalah...",
    options: ["Raden Patah", "Pati Unus", "Sultan Trenggono", "Fatahillah"],
    answer: "Raden Patah",
    explanation: "Raden Patah (putra dari raja Majapahit Brawijaya V) mendirikan Kesultanan Demak pada akhir abad ke-15 dengan dukungan penuh dari para Walisongo."
  },
  {
    question: "Sembilan orang ulama penyebar ajaran agama Islam di Pulau Jawa dikenal dengan sebutan...",
    options: ["Walisongo", "Empat Serangkai", "Tiga Serangkai", "Panitia Sembilan"],
    answer: "Walisongo",
    explanation: "Walisongo (Wali Sembilan) adalah tokoh-tokoh ulama yang berjasa menyebarkan ajaran agama Islam secara damai dan berakulturasi dengan budaya lokal Jawa."
  },
  {
    question: "Anggota Walisongo yang menggunakan sarana pertunjukan wayang kulit dan seni gamelan untuk berdakwah adalah...",
    options: ["Sunan Kalijaga", "Sunan Ampel", "Sunan Kudus", "Sunan Giri"],
    answer: "Sunan Kalijaga",
    explanation: "Sunan Kalijaga memanfaatkan kesenian rakyat seperti wayang kulit, tembang Jawa (Gundul Pacul, Lir Ilir), dan gamelan untuk menyiarkan agama Islam tanpa merusak tatanan tradisi lokal."
  },
  {
    question: "Fatahillah mengubah nama daerah Sunda Kelapa menjadi Jayakarta yang bermakna...",
    options: ["Kemenangan yang sempurna", "Kota pelabuhan aman", "Negeri yang sejahtera", "Kekuasaan yang agung"],
    answer: "Kemenangan yang sempurna",
    explanation: "Pasca mengalahkan armada Portugis pada 22 Juni 1527, Fatahillah mengubah nama Sunda Kelapa menjadi Jayakarta (Victory Complete/Kemenangan yang Sempurna)."
  },
  {
    question: "Raja dari Kerajaan Gowa-Tallo yang mendapat julukan 'Ayam Jantan dari Timur' dari pihak Belanda adalah...",
    options: ["Sultan Hasanuddin", "Sultan Baabullah", "Aru Palakka", "Sultan Nuku"],
    answer: "Sultan Hasanuddin",
    explanation: "Belanda menjuluki Sultan Hasanuddin sebagai 'De Haantjes van het Oosten' (Ayam Jantan dari Timur) karena keberanian dan ketangguhannya dalam memimpin perang menentang monopoli VOC."
  },
  {
    question: "Raja Mataram Islam yang memimpin penyerangan tentara besar-besaran melawan markas VOC di Batavia tahun 1628 dan 1629 adalah...",
    options: ["Sultan Agung", "Panembahan Senopati", "Amangkurat I", "Sultan Hamengkubuwono I"],
    answer: "Sultan Agung",
    explanation: "Sultan Agung Hanyokrokusumo merupakan raja terbesar Mataram Islam yang gigih menentang VOC dan melancarkan dua kali serangan besar ke Batavia."
  },
  {
    question: "Bangsa Eropa pertama yang berhasil menaklukkan dan menguasai kota pelabuhan Malaka pada tahun 1511 adalah...",
    options: ["Portugis", "Belanda", "Inggris", "Spanyol"],
    answer: "Portugis",
    explanation: "Armada bangsa Portugis di bawah pimpinan Afonso de Albuquerque berhasil merebut pelabuhan strategis Malaka pada tahun 1511 sebagai gerbang menuju kepulauan rempah-rempah."
  },
  {
    question: "Tiga tujuan penjelajahan samudra bangsa Eropa adalah Gold, Glory, dan Gospel. Istilah Gospel berarti...",
    options: ["Misi menyebarkan agama Kristen", "Mencari kekayaan emas dan rempah", "Meraih kejayaan dan wilayah baru", "Membangun pusat perdagangan"],
    answer: "Misi menyebarkan agama Kristen",
    explanation: "Gospel adalah misi suci keagamaan yang dibawa oleh penjelajah Barat untuk menyebarkan ajaran agama Kristen/Katolik ke wilayah-wilayah baru yang mereka singgahi."
  },
  {
    question: "Semboyan 'Gold' dalam tujuan imperialisme kuno bangsa Barat berarti dorongan untuk...",
    options: ["Mencari kekayaan emas dan rempah-rempah", "Meraih kejayaan politik", "Menyebarkan ajaran agama", "Menguasai wilayah laut"],
    answer: "Mencari kekayaan emas dan rempah-rempah",
    explanation: "Gold merujuk pada ambisi ekonomis untuk menumpuk kekayaan berharga berupa emas, perak, dan rempah-rempah yang bernilai tinggi di pasar Eropa."
  },
  {
    question: "Bangsa Belanda pertama kali mendarat di kepulauan Nusantara di wilayah...",
    options: ["Banten", "Maluku", "Batavia", "Surabaya"],
    answer: "Banten",
    explanation: "Ekspedisi pertama Belanda tiba di pelabuhan Banten pada tahun 1596 setelah menempuh pelayaran samudra yang panjang."
  },
  {
    question: "Ekspedisi penjelajahan kapal Belanda yang pertama kali berlabuh di pelabuhan Banten dipimpin oleh...",
    options: ["Cornelis de Houtman", "Herman Willem Daendels", "Stamford Raffles", "Van den Bosch"],
    answer: "Cornelis de Houtman",
    explanation: "Cornelis de Houtman memimpin 4 buah kapal Belanda dan mendarat di pelabuhan Banten pada Juni 1596."
  },
  {
    question: "Kongsi dagang perserikatan pedagang Belanda yang beroperasi di Nusantara disingkat dengan...",
    options: ["VOC", "EIC", "PETA", "KNIL"],
    answer: "VOC",
    explanation: "VOC singkatan dari Vereenigde Oostindische Compagnie, yaitu kongsi dagang Belanda yang didirikan pada tahun 1602 untuk memonopoli perdagangan di wilayah Asia."
  },
  {
    question: "Hak istimewa yang diberikan pemerintah Belanda kepada VOC seperti hak mencetak uang dan membentuk tentara disebut hak...",
    options: ["Oktroi", "Ekstirpasi", "Hongi", "Sewa Tanah"],
    answer: "Oktroi",
    explanation: "Hak Oktroi adalah hak istimewa setara wewenang negara yang dimiliki VOC, seperti mencetak uang, memiliki pasukan tentara, menyatakan perang, dan membuat perjanjian."
  },
  {
    question: "Pelayaran pengawasan menggunakan perahu kora-kora untuk memantau perdagangan rempah di Maluku dinamakan Pelayaran...",
    options: ["Hongi", "Oktroi", "Bahari", "Kora-kora"],
    answer: "Hongi",
    explanation: "Pelayaran Hongi adalah sistem patroli laut yang dijalankan VOC menggunakan perahu kora-kora untuk mencegah perdagangan gelap dan menjaga monopoli rempah-rempah di Maluku."
  },
  {
    question: "Penyebab utama yang membuat kongsi dagang VOC resmi dibubarkan pada akhir tahun 1799 adalah...",
    options: ["Praktik korupsi dan utang membengkak", "Serangan militer dari kerajaan lokal", "Bencana alam Dahsyat", "Kekalahan total perang di Eropa"],
    answer: "Praktik korupsi dan utang membengkak",
    explanation: "VOC mengalami kebangkrutan parah pada akhir abad ke-18 akibat praktik kor
