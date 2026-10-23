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
    explanation: "VOC mengalami kebangkrutan parah pada akhir abad ke-18 akibat praktik korupsi internal pengurusnya, kemerosotan perdagangan, dan utang perang yang sangat besar."
  },
  {
    question: "Gubernur Jenderal yang memerintahkan pembangunan Jalan Raya Pos dari Anyer sampai Panarukan adalah...",
    options: ["Herman Willem Daendels", "Thomas Stamford Raffles", "Johannes van den Bosch", "Janssens"],
    answer: "Herman Willem Daendels",
    explanation: "Daendels membangun Jalan Raya Pos (Grote Postweg) sepanjang ±1.000 km dari Anyer hingga Panarukan untuk kepentingan pertahanan militer dan kelancaran lalu lintas."
  },
  {
    question: "Sistem kerja paksa tanpa diberi upah layak pada masa penjajahan kolonial Belanda dinamakan...",
    options: ["Kerja Rodi", "Romusha", "Sewa Tanah", "Tanam Paksa"],
    answer: "Kerja Rodi",
    explanation: "Kerja Rodi adalah sistem kerja paksa bagi penduduk pribumi di bawah pemerintahan kolonial Belanda (seperti pembangunan jalan era Daendels) tanpa imbalan upah memadai."
  },
  {
    question: "Sistem Tanam Paksa (Cultuurstelsel) yang mewajibkan rakyat menanam komoditas ekspor dicetuskan oleh...",
    options: ["Johannes van den Bosch", "Herman Willem Daendels", "Thomas Stamford Raffles", "Douwes Dekker"],
    answer: "Johannes van den Bosch",
    explanation: "Johannes van den Bosch menerapkan Cultuurstelsel pada tahun 1830 untuk mengisi kembali kas negara Belanda yang kosong akibat Perang Diponegoro dan Perang Kemerdekaan Belgia."
  },
  {
    question: "Buku 'Max Havelaar' yang membuka mata dunia akan penderitaan rakyat akibat Tanam Paksa ditulis oleh Multatuli, yaitu nama pena dari...",
    options: ["Eduard Douwes Dekker", "Conrad Theodor van Deventer", "Snouck Hurgronje", "Baron van Hoevell"],
    answer: "Eduard Douwes Dekker",
    explanation: "Eduard Douwes Dekker memakai nama samaran Multatuli saat menerbitkan roman 'Max Havelaar' (1860) untuk mengkritik kekejaman pejabat Belanda dan bupati lokal terhadap rakyat di Lebak."
  },
  {
    question: "Tiga pilar utama dalam kebijakan Politik Etis yang diusulkan oleh Van Deventer meliputi...",
    options: ["Edukasi, Irigasi, Transmigrasi", "Edukasi, Emansipasi, Industrialisasi", "Irigasi, Monopoli, Transmigrasi", "Eksploitasi, Edukasi, Emansipasi"],
    answer: "Edukasi, Irigasi, Transmigrasi",
    explanation: "Politik Etis (Politik Balas Budi) memiliki tiga program utama yaitu Edukasi (pendidikan), Irigasi (pengairan), dan Transmigrasi/Migrasi (perpindahan penduduk)."
  },
  {
    question: "Pahlawan nasional dari Maluku yang memimpin bentrok perlawanan menentang Belanda di Benteng Duurstede Saparua adalah...",
    options: ["Pattimura", "Diponegoro", "Tuanku Imam Bonjol", "Sultan Hasanuddin"],
    answer: "Pattimura",
    explanation: "Kapitan Pattimura memimpin perlawanan rakyat Saparua, Maluku pada tahun 1817 dan berhasil merebut Benteng Duurstede dari tangan Belanda."
  },
  {
    question: "Nama asli dari Kapitan Pattimura adalah...",
    options: ["Thomas Matulessy", "Sultan Nuku", "I Gusti Ngurah Rai", "Sisingamangaraja XII"],
    answer: "Thomas Matulessy",
    explanation: "Pattimura memiliki nama asli Thomas Matulessy, seorang bekas perwira militer pimpinan Inggris sebelum wilayah Maluku diserahkan kembali kepada Belanda."
  },
  {
    question: "Sebab khusus meletusnya Perang Diponegoro (1825–1830) adalah tindakan Belanda yang mematok tanah di atas...",
    options: ["Makam leluhur Pangeran Diponegoro", "Kediaman Pangeran Diponegoro", "Masjid milik Keraton", "Sawah milik warga desa"],
    answer: "Makam leluhur Pangeran Diponegoro",
    explanation: "Belanda secara sepihak memasang patok-patok pembuatan jalan yang melintasi tanah dan makam leluhur Pangeran Diponegoro di Tegalrejo tanpa izin."
  },
  {
    question: "Pemimpin Perang Padri di Sumatra Barat yang gigih menentang penjajahan Belanda adalah...",
    options: ["Tuanku Imam Bonjol", "Pangeran Diponegoro", "Teuku Umar", "Pangeran Antasari"],
    answer: "Tuanku Imam Bonjol",
    explanation: "Tuanku Imam Bonjol (Muhammad Syahab) memimpin Kaum Padri dan Kaum Adat bersatu melawan penjajahan Belanda di Sumatra Barat (1803–1838)."
  },
  {
    question: "Pahlawan wanita tangguh asal Aceh yang memimpin gerilya melawan tentara Belanda pasca gugurnya Teuku Umar adalah...",
    options: ["Cut Nyak Dien", "R.A. Kartini", "Dewi Sartika", "Christina Martha Tiahahu"],
    answer: "Cut Nyak Dien",
    explanation: "Cut Nyak Dien terus melanjutkan perang gerilya di pedalaman Aceh melawan Belanda meski usianya sudah lanjut dan penglihatannya memburuk."
  },
  {
    question: "Perang hingga titik darah penghabisan yang dilakoni oleh para raja dan rakyat Bali melawan penyerangan Belanda dinamakan...",
    options: ["Perang Puputan", "Perang Saparua", "Perang Padri", "Perang Margarana"],
    answer: "Perang Puputan",
    explanation: "Puputan berasal dari kata 'puput' yang berarti putus, habis, atau mati. Perang Puputan adalah tradisi bertempur sampai mati demi mempertahankan kehormatan tanah air dari penjajah."
  },
  {
    question: "Pahlawan nasional yang memimpin pertahanan Perang Banjar di Kalimantan Selatan menentang Belanda adalah...",
    options: ["Pangeran Antasari", "Pangeran Diponegoro", "Sultan Hasanuddin", "Kapitan Pattimura"],
    answer: "Pangeran Antasari",
    explanation: "Pangeran Antasari memimpin perlawanan rakyat dalam Perang Banjar (1859) dengan semboyan 'Haram Menyerah Waja Sampai Ka Puting'."
  },
  {
    question: "Raja Kerajaan Batak yang memimpin perlawanan sengit menentang perluasan wilayah Belanda di Sumatra Utara adalah...",
    options: ["Sisingamangaraja XII", "Tuanku Imam Bonjol", "Sultan Siak", "Kapitan Pattimura"],
    answer: "Sisingamangaraja XII",
    explanation: "Sisingamangaraja XII gigih memimpin perlawanan rakyat Batak menentang ekspansi Belanda di Tapanuli hingga gugur pada tahun 1907."
  },
  {
    question: "Organisasi pergerakan nasional modern pertama yang berdiri pada tanggal 20 Mei 1908 adalah...",
    options: ["Budi Utomo", "Sarekat Islam", "Indische Partij", "Partai Nasional Indonesia"],
    answer: "Budi Utomo",
    explanation: "Budi Utomo didirikan oleh para mahasiswa STOVIA pada 20 Mei 1908 dan menandai dimulainya babak baru perjuangan pergerakan nasional modern di Indonesia."
  },
  {
    question: "Pendiri Budi Utomo atas dorongan gagasan Dr. Wahidin Soedirohoesodo adalah...",
    options: ["Dr. Soetomo", "Ir. Sukarno", "Ki Hajar Dewantara", "Drs. Mohammad Hatta"],
    answer: "Dr. Soetomo",
    explanation: "Dr. Soetomo bersama para pemuda pelajar STOVIA mendirikan Budi Utomo di Jakarta setelah mendengarkan gagasan mengenai dana pendidikan dari Dr. Wahidin."
  },
  {
    question: "Tanggal berdirinya Budi Utomo yaitu 20 Mei sampai kini selalu diperingati sebagai Hari...",
    options: ["Kebangkitan Nasional", "Sumpah Pemuda", "Pahlawan", "Pendidikan Nasional"],
    answer: "Kebangkitan Nasional",
    explanation: "Tanggal 20 Mei ditetapkan sebagai Hari Kebangkitan Nasional (Harkitnas) untuk mengenang lahirnya pergerakan nasional modern pertama di Indonesia."
  },
  {
    question: "Organisasi Sarekat Dagang Islam (SDI) pertama kali didirikan di Surakarta oleh...",
    options: ["H. Samanhudi", "H.O.S. Tjokroaminoto", "H. Agus Salim", "Semaun"],
    answer: "H. Samanhudi",
    explanation: "H. Samanhudi mendirikan Sarekat Dagang Islam (SDI) di Surakarta pada tahun 1905 untuk melindungi kepentingan pedagang batik pribumi dari persaingan pedagang asing."
  },
  {
    question: "Tokoh 'Tiga Serangkai' yang mendirikan partai politik Indische Partij terdiri dari Douwes Dekker, Cipto Mangunkusumo, dan...",
    options: ["Ki Hajar Dewantara", "Dr. Soetomo", "Drs. Mohammad Hatta", "Ir. Sukarno"],
    answer: "Ki Hajar Dewantara",
    explanation: "Tiga Serangkai pendiri Indische Partij (1912) adalah E.F.E. Douwes Dekker (Danudirja Setiabudi), Dr. Cipto Mangunkusumo, dan Suwardi Suryaningrat (Ki Hajar Dewantara)."
  },
  {
    question: "Ki Hajar Dewantara merupakan tokoh pelopor pendidikan nasional yang mendirikan lembaga sekolah...",
    options: ["Taman Siswa", "Sakola Istri", "Muhammadiyah", "INS Kayutanam"],
    answer: "Taman Siswa",
    explanation: "Ki Hajar Dewantara mendirikan Perguruan Taman Siswa di Yogyakarta pada 3 Juli 1922 untuk memberikan kesempatan belajar bagi rakyat pribumi."
  },
  {
    question: "Semboyan dunia pendidikan Indonesia 'Tut Wuri Handayani' dicetuskan oleh...",
    options: ["Ki Hajar Dewantara", "R.A. Kartini", "Dr. Soetomo", "Mohammad Yamin"],
    answer: "Ki Hajar Dewantara",
    explanation: "Semboyan 'Ing Ngarsa Sung Tuladha, Ing Madya Mangun Karsa, Tut Wuri Handayani' dirumuskan oleh Ki Hajar Dewantara sebagai asas kepemimpinan pendidikan."
  },
  {
    question: "Peristiwa pembacaan ikrar Sumpah Pemuda yang menyatukan pemuda Nusantara terjadi pada tanggal...",
    options: ["28 Oktober 1928", "20 Mei 1908", "17 Agustus 1945", "10 November 1945"],
    answer: "28 Oktober 1928",
    explanation: "Ikrar Sumpah Pemuda dirumuskan dan diikrarkan dalam Kongres Pemuda II yang berlangsung di Jakarta pada tanggal 28 Oktober 1928."
  },
  {
    question: "Lagu 'Indonesia Raya' ciptaan W.R. Supratman pertama kali diperdengarkan secara instrumen gesek biola pada acara...",
    options: ["Kongres Pemuda II", "Proklamasi Kemerdekaan", "Sidang BPUPKI", "Kongres Budi Utomo"],
    answer: "Kongres Pemuda II",
    explanation: "W.R. Supratman memainkan lagu ciptaannya, 'Indonesia Raya', menggunakan biola tanpa vokal pada penutupan Kongres Pemuda II tanggal 28 Oktober 1928."
  },
  {
    question: "Ketua panitia yang bertugas memimpin jalannya Kongres Pemuda II tahun 1928 adalah...",
    options: ["Sugondo Djojopuspito", "Mohammad Yamin", "J. Leimena", "Amir Sjarifuddin"],
    answer: "Sugondo Djojopuspito",
    explanation: "Sugondo Djojopuspito dari Perhimpunan Pelajar-Pelajar Indonesia (PPPI) terpilih sebagai ketua yang memimpin jalannya Kongres Pemuda II."
  },
  {
    question: "Pahlawan wanita dari Jepara yang dikenal gigih memperjuangkan kesetaraan dan pendidikan bagi kaum wanita adalah...",
    options: ["R.A. Kartini", "Dewi Sartika", "Cut Nyak Dien", "Christina Martha Tiahahu"],
    answer: "R.A. Kartini",
    explanation: "Raden Ajeng Kartini merupakan pahlawan emansipasi wanita yang memperjuangkan hak-hak perempuan untuk mendapatkan pendidikan serta kesetaraan derajat."
  },
  {
    question: "Buku yang berisi kumpulan surat-surat R.A. Kartini yang diterbitkan oleh J.H. Abendanon berjudul...",
    options: ["Habis Gelap Terbitlah Terang", "Indonesia Menggugat", "Max Havelaar", "Mencapai Indonesia Merdeka"],
    answer: "Habis Gelap Terbitlah Terang",
    explanation: "J.H. Abendanon mengumpulkan surat-surat yang dikirim Kartini kepada teman-temannya di Eropa lalu menerbitkannya dalam buku berjudul 'Door Duisternis tot Licht' (Habis Gelap Terbitlah Terang)."
  },
  {
    question: "Pahlawan wanita dari Jawa Barat yang memelopori pendirian lembaga pendidikan 'Sakola Istri' adalah...",
    options: ["Dewi Sartika", "R.A. Kartini", "Cut Meutia", "Rasuna Said"],
    answer: "Dewi Sartika",
    explanation: "Raden Dewi Sartika mendirikan Sakola Istri di Bandung pada tahun 1904 untuk melatih keahlian dan memberikan pendidikan bagi wanita pribumi."
  },
  {
    question: "Organisasi kemasyarakatan bernapaskan Islam, Muhammadiyah, didirikan di Yogyakarta oleh...",
    options: ["K.H. Ahmad Dahlan", "K.H. Hasyim Asy'ari", "H.O.S. Tjokroaminoto", "K.H. Mas Mansyur"],
    answer: "K.H. Ahmad Dahlan",
    explanation: "K.H. Ahmad Dahlan mendirikan organisasi Muhammadiyah di Yogyakarta pada tanggal 18 November 1912 untuk memurnikan ajaran Islam dan memajukan pendidikan."
  },
  {
    question: "Organisasi Nahdlatul Ulama (NU) didirikan di Surabaya pada tahun 1926 oleh...",
    options: ["K.H. Hasyim Asy'ari", "K.H. Ahmad Dahlan", "K.H. Wahid Hasyim", "Gus Dur"],
    answer: "K.H. Hasyim Asy'ari",
    explanation: "K.H. Hasyim Asy'ari bersama para ulama pesantren mendirikan Nahdlatul Ulama (NU) di Surabaya pada 31 Januari 1926 untuk mempertahankan tradisi Islam kebangsaan."
  },
  {
    question: "Partai Nasional Indonesia (PNI) yang mengusung asas perjuangan kemerdekaan didirikan tahun 1927 oleh...",
    options: ["Ir. Sukarno", "Drs. Mohammad Hatta", "Sutan Sjahrir", "Tjipto Mangunkusumo"],
    answer: "Ir. Sukarno",
    explanation: "Ir. Sukarno bersama rekan-rekannya di Bandung mendirikan PNI pada 4 Juli 1927 dengan tujuan utama mencapai kemerdekaan Indonesia dari penjajahan Belanda."
  },
  {
    question: "Bangsa Belanda menyerahkan kekuasaan di Indonesia tanpa syarat kepada pihak Jepang melalui Perjanjian...",
    options: ["Kalijati", "Linggarjati", "Renville", "Den Haag"],
    answer: "Kalijati",
    explanation: "Belanda menyerahkan kekuasaannya kepada tentara Jepang pada tanggal 8 Maret 1942 di Kalijati, Subang, Jawa Barat."
  },
  {
    question: "Sistem kerja paksa tanpa upah yang diberlakukan oleh pemerintah militer Jepang di Indonesia disebut...",
    options: ["Romusha", "Rodi", "Tanam Paksa", "Heiho"],
    answer: "Romusha",
    explanation: "Romusha adalah pengerahan tenaga kerja secara paksa oleh Jepang terhadap rakyat desa untuk membangun benteng, jalan kereta api, dan sarana perang."
  },
  {
    question: "Sikap membungkukkan badan 90 derajat ke arah matahari terbit pada masa pendudukan Jepang disebut...",
    options: ["Seikerei", "Kimigayo", "Tenno Heika", "Origami"],
    answer: "Seikerei",
    explanation: "Seikerei adalah penghormatan wajib setiap pagi ke arah timur (terbitnya matahari) sebagai lambang penghormatan kepada Kaisar Jepang (Tenno Heika)."
  },
  {
    question: "Organisasi tentara sukarela bentukan Jepang di Indonesia yang bertujuan membela tanah air disingkat...",
    options: ["PETA", "Heiho", "Romusha", "KNIL"],
    answer: "PETA",
    explanation: "PETA (Pembela Tanah Air) dibentuk oleh Jepang pada Oktober 1943 sebagai pasukan pemuda lokal untuk membantu pertahanan militer Jepang di Nusantara."
  },
  {
    question: "Pemberontakan pemuda tentara PETA menentang pendudukan Jepang di Blitar dipimpin oleh...",
    options: ["Supriyadi", "Jenderal Sudirman", "Soeharto", "Slamet Riyadi"],
    answer: "Supriyadi",
    explanation: "Shodancho Supriyadi memimpin pemberontakan PETA di Blitar pada 14 Februari 1945 akibat penderitaan rakyat yang tertekan kebijakan Romusha."
  },
  {
    question: "Kepanjangan dari nama badan penyelidik buatan Jepang 'BPUPKI' adalah...",
    options: ["Badan Penyelidik Usaha-usaha Persiapan Kemerdekaan Indonesia", "Badan Pengembang Pemuda Indonesia", "Barisan Pemuda Untuk Kemerdekaan Indonesia", "Badan Panitia Persiapan Kemerdekaan Indonesia"],
    answer: "Badan Penyelidik Usaha-usaha Persiapan Kemerdekaan Indonesia",
    explanation: "BPUPKI (Dokuritsu Junbi Cosakai) dibentuk tanggal 1 Maret 1945 untuk menyelidiki dan menyiapkan hal-hal penting terkait kemerdekaan Indonesia."
  },
  {
    question: "Ketua dari BPUPKI yang ditunjuk memimpin sidang-sidang perumusan dasar negara adalah...",
    options: ["Dr. K.R.T. Radjiman Wedyodiningrat", "Dr. Soetomo", "Dr. Wahidin Soedirohoesodo", "Dr. Kariadi"],
    answer: "Dr. K.R.T. Radjiman Wedyodiningrat",
    explanation: "Dr. K.R.T. Radjiman Wedyodiningrat ditunjuk sebagai ketua BPUPKI dan memimpin jalannya perumusan dasar negara serta rancangan undang-undang dasar."
  },
  {
    question: "Hari Lahir Pancasila diperingati setiap tanggal 1 Juni berdasarkan peristiwa...",
    options: ["Pidato Ir. Sukarno mengenalkan lima konsep dasar negara", "Pengesahan UUD 1945 oleh PPKI", "Penandatanganan Piagam Jakarta", "Pembacaan Teks Proklamasi"],
    answer: "Pidato Ir. Sukarno mengenalkan lima konsep dasar negara",
    explanation: "Pada 1 Juni 1945 dalam sidang BPUPKI, Ir. Sukarno menyampaikan pidato gagasan awal mengenai lima prinsip dasar negara yang diberi nama Pancasila."
  },
  {
    question: "Dua kota utama di Jepang yang hancur dijatuhi bom atom oleh pasukan Sekutu pada Agustus 1945 adalah...",
    options: ["Hiroshima dan Nagasaki", "Tokyo dan Kyoto", "Osaka dan Yokohama", "Nagasaki dan Sapporo"],
    answer: "Hiroshima dan Nagasaki",
    explanation: "Amerika Serikat menjatuhkan bom atom di Hiroshima (6 Agustus 1945) dan Nagasaki (9 Agustus 1945), yang memaksa Jepang menyerah tanpa syarat kepada Sekutu."
  },
  {
    question: "Peristiwa diamankannya Sukarno dan Hatta oleh para pemuda sebelum hari proklamasi dinamakan Peristiwa...",
    options: ["Rengasdengklok", "Cikini", "Bandung Lautan Api", "Surabaya"],
    answer: "Rengasdengklok",
    explanation: "Golongan muda membawa Sukarno dan Hatta ke Rengasdengklok pada 16 Agustus 1945 untuk mengamankan mereka dari tekanan dan pengaruh janji kemerdekaan Jepang."
  },
  {
    question: "Tujuan utama golongan pemuda membawa Sukarno dan Hatta ke Rengasdengklok adalah agar...",
    options: ["Bebas dari tekanan dan pengaruh Jepang", "Aman dari kejaran tentara Inggris", "Dapat merumuskan Piagam Jakarta", "Menghindari pertempuran di Jakarta"],
    answer: "Bebas dari tekanan dan pengaruh Jepang",
    explanation: "Pemuda ingin memastikan Proklamasi Kemerdekaan Indonesia murni merupakan perjuangan bangsa sendiri, bukan pemberian dari pemerintah Jepang."
  },
  {
    question: "Perwira Tinggi Angkatan Laut Jepang yang meminjamkan rumahnya sebagai tempat perumusan Teks Proklamasi adalah...",
    options: ["Laksamana Tadashi Maeda", "Jenderal Terauchi", "Nishimura", "Koidzumi"],
    answer: "Laksamana Tadashi Maeda",
    explanation: "Laksamana Tadashi Maeda mendukung kemerdekaan Indonesia dan menjamin keamanan rumah kediamannya di Jakarta untuk dijadikan tempat merumuskan naskah proklamasi."
  },
  {
    question: "Tokoh pemuda yang bertugas mengetik naskah asli Proklamasi Kemerdekaan adalah...",
    options: ["Sayuti Melik", "Sukarni", "B.M. Diah", "Chaerul Saleh"],
    answer: "Sayuti Melik",
    explanation: "Sayuti Melik mengetik naskah tulisan tangan Ir. Sukarno menjadi naskah ketikan resmi dengan melakukan beberapa perubahan penulisan kata."
  },
  {
    question: "Pembacaan Teks Proklamasi Kemerdekaan Indonesia dilaksanakan pada hari...",
    options: ["Jumat, 17 Agustus 1945", "Sabtu, 17 Agustus 1945", "Jumat, 18 Agustus 1945", "Minggu, 17 Agustus 1945"],
    answer: "Jumat, 17 Agustus 1945",
    explanation: "Teks Proklamasi Kemerdekaan Indonesia dibacakan oleh Ir. Sukarno didampingi Drs. Mohammad Hatta pada hari Jumat, 17 Agustus 1945 pukul 10.00 WIB."
  },
  {
    question: "Tempat Pembacaan Teks Proklamasi Kemerdekaan Indonesia dilaksanakan di kediaman Sukarno di jalan...",
    options: ["Pegangsaan Timur No. 56 Jakarta", "Imam Bonjol No. 1 Jakarta", "Menteng Raya No. 31 Jakarta", "Kebangsaan No. 45 Jakarta"],
    answer: "Pegangsaan Timur No. 56 Jakarta",
    explanation: "Upacara pembacaan naskah proklamasi berlangsung secara sederhana di halaman rumah Ir. Sukarno di Jalan Pegangsaan Timur No. 56 Jakarta Pusat."
  },
  {
    question: "Istri Ir. Sukarno yang berjasa menjahit Sang Merah Putih untuk dikibarkan saat proklamasi adalah Ibu...",
    options: ["Fatmawati", "Inggit Garnasih", "Rahmi Hatta", "Dewi Sukarno"],
    answer: "Fatmawati",
    explanation: "Ibu Fatmawati menjahit sendiri kain Merah Putih yang menjadi Bendera Pusaka pertama saat pengibaran Proklamasi 17 Agustus 1945."
  },
  {
    question: "Dua tokoh pemuda yang bertugas mengibarkan Bendera Merah Putih pertama kali saat upacara Proklamasi adalah...",
    options: ["Latief Hendraningrat dan Suhud", "Sayuti Melik dan Sukarni", "B.M. Diah dan Chaerul Saleh", "Wilopo dan Nurtanio"],
    answer: "Latief Hendraningrat dan Suhud",
    explanation: "Latief Hendraningrat dan Suhud Sastro Kusumo ditugaskan mengibarkan Bendera Pusaka Merah Putih dengan diiringi lagu Indonesia Raya secara spontan."
  },
  {
    question: "Sidang PPKI pertama pada tanggal 18 Agustus 1945 menetapkan pasangan Presiden dan Wakil Presiden pertama Indonesia yaitu...",
    options: ["Ir. Sukarno dan Drs. Moh. Hatta", "Ir. Sukarno dan Sutan Sjahrir", "Moh. Hatta dan Agus Salim", "Soeharto dan B.J. Habibie"],
    answer: "Ir. Sukarno dan Drs. Moh. Hatta",
    explanation: "Hasil sidang pertama PPKI pada 18 Agustus 1945 secara aklamasi memilih Ir. Sukarno sebagai Presiden dan Drs. Mohammad Hatta sebagai Wakil Presiden RI."
  },
  {
    question: "UUD 1945 secara resmi disahkan sebagai konstitusi dasar negara Republik Indonesia pada tanggal...",
    options: ["18 Agustus 1945", "17 Agustus 1945", "1 Juni 1945", "22 Juni 1945"],
    answer: "18 Agustus 1945",
    explanation: "PPKI mengesahkan UUD 1945 sebagai konstitusi dasar negara Republik Indonesia pada tanggal 18 Agustus 1945."
  },
  {
    question: "Pertempuran besar 10 November 1945 membendung kedatangan pasukan Sekutu terjadi di kota...",
    options: ["Surabaya", "Bandung", "Semarang", "Ambarawa"],
    answer: "Surabaya",
    explanation: "Pertempuran Surabaya meletus pada 10 November 1945 antara pemuda Surabaya melawan pasukan Inggris/Sekutu yang diboncangi NICA."
  },
  {
    question: "Tokoh pejuang yang mengobarkan semangat bertempur rakyat Surabaya melalui siaran radio adalah...",
    options: ["Bung Tomo", "Gubernur Suryo", "Jenderal Sudirman", "Bung Karno"],
    answer: "Bung Tomo",
    explanation: "Sutomo (Bung Tomo) menyiarkan pidato-pidato berapi-api lewat Radio Pemberontakan untuk membakar semangat pemuda Surabaya bertempur sampai titik darah penghabisan."
  },
  {
    question: "Peristiwa sejarah pertempuran Surabaya pada tanggal 10 November sampai kini diperingati nasional sebagai Hari...",
    options: ["Pahlawan", "Sumpah Pemuda", "TNI", "Kemerdekaan"],
    answer: "Pahlawan",
    explanation: "Pemerintah menetapkan tanggal 10 November sebagai Hari Pahlawan untuk menghormati pengorbanan para pejuang yang gugur dalam Pertempuran Surabaya."
  },
  {
    question: "Peristiwa sengaja dibakarnya kota Bandung oleh para pejuang agar sarana kota tidak dikuasai Sekutu dinamakan...",
    options: ["Bandung Lautan Api", "Bandung Membara", "Peristiwa Cikini", "Bandung Lautan Es"],
    answer: "Bandung Lautan Api",
    explanation: "Pada 23 Maret 1946, sekitar 200.000 penduduk dan pejuang membakar rumah serta fasilitas kota Bandung Selatan sebelum mundur ke daerah pegunungan."
  },
  {
    question: "Tokoh pemuda pejuang yang gugur meledakkan gudang amunisi besar Sekutu di Dayeuhkolot Bandung adalah...",
    options: ["Mohammad Toha", "Sungkono", "Daan Mogot", "Slamet Riyadi"],
    answer: "Mohammad Toha",
    explanation: "Mohammad Toha anggota Laskar Rakyat Pasundan gugur bersama kawannya Ramdan setelah berhasil meledakkan gudang amunisi tentara Sekutu."
  },
  {
    question: "Panglima Besar TNI pertama Indonesia yang memimpin perang gerilya dari atas tandu adalah...",
    options: ["Jenderal Sudirman", "Jenderal Ahmad Yani", "Jenderal Soeharto", "Jenderal A.H. Nasution"],
    answer: "Jenderal Sudirman",
    explanation: "Panglima Besar Jenderal Sudirman memimpin taktik perang gerilya mengitari hutan dan desa di Jawa meski dalam kondisi sakit paru-paru parah."
  },
  {
    question: "Aksi Serangan Umum 1 Maret 1949 untuk menunjukkan eksistensi TNI kepada PBB dan dunia terjadi di kota...",
    options: ["Yogyakarta", "Jakarta", "Surabaya", "Bandung"],
    answer: "Yogyakarta",
    explanation: "TNI melakukan serangan mendadak selama 6 jam di ibu kota Yogyakarta pada 1 Maret 1949 untuk membuktikan bahwa Republik Indonesia dan tentaranya masih berdiri tegak."
  },
  {
    question: "Komandan lapangan yang memimpin aksi pasukan dalam Serangan Umum 1 Maret 1949 adalah...",
    options: ["Letkol Soeharto", "Jenderal Sudirman", "Sultan Hamengkubuwono IX", "Gatot Soebroto"],
    answer: "Letkol Soeharto",
    explanation: "Letkol Soeharto (Komandan Wehrkreise III) memimpin langsung pelaksanaan Serangan Umum 1 Maret 1949 atas persetujuan Sultan Hamengkubuwono IX."
  },
  {
    question: "Pengakuan kedaulatan Indonesia oleh pemerintah Belanda secara penuh disepakati melalui forum...",
    options: ["Konferensi Meja Bundar (KMB)", "Perjanjian Linggarjati", "Perjanjian Renville", "Perjanjian Roem-Royen"],
    answer: "Konferensi Meja Bundar (KMB)",
    explanation: "KMB berlangsung di Den Haag pada akhir 1949 dan menghasilkan kesepakatan pengakuan kedaulatan Indonesia oleh Belanda tanpa syarat."
  },
  {
    question: "Konferensi Meja Bundar (KMB) tahun 1949 diselenggarakan di kota Den Haag di negara...",
    options: ["Belanda", "Inggris", "Indonesia", "Amerika Serikat"],
    answer: "Belanda",
    explanation: "KMB digelar di gedung parlemen kota Den Haag, Belanda, dari tanggal 23 Agustus hingga 2 November 1949."
  },
  {
    question: "Ketua pimpinan delegasi Republik Indonesia dalam perundingan Konferensi Meja Bundar adalah...",
    options: ["Drs. Mohammad Hatta", "Ir. Sukarno", "Sutan Sjahrir", "Mr. Mohammad Roem"],
    answer: "Drs. Mohammad Hatta",
    explanation: "Drs. Mohammad Hatta memimpin delegasi Indonesia dalam KMB dan berhasil memperjuangkan pengakuan kedaulatan Indonesia."
  },
  {
    question: "Pemilihan Umum (Pemilu) pertama di Indonesia untuk memilih anggota DPR dan Konstituante dilaksanakan pada tahun...",
    options: ["1955", "1945", "1971", "1999"],
    answer: "1955",
    explanation: "Pemilu 1955 merupakan pemilu pertama dalam sejarah Indonesia yang berlangsung sangat demokratis pada masa Kabinet Burhanuddin Harahap."
  },
  {
    question: "Konferensi Asia-Afrika (KAA) yang menyatukan bangsa-bangsa terjajah diselenggarakan tahun 1955 di kota...",
    options: ["Bandung", "Jakarta", "Bogor", "Surabaya"],
    answer: "Bandung",
    explanation: "KAA diselenggarakan di Gedung Merdeka, Bandung, pada 18–24 April 1955 dan dihadiri oleh 29 negara dari benua Asia dan Afrika."
  },
  {
    question: "Gedung bersejarah tempat berlangsungnya sidang Konferensi Asia-Afrika di Bandung dinamakan...",
    options: ["Gedung Merdeka", "Gedung Sate", "Gedung Pancasila", "Gedung Agung"],
    answer: "Gedung Merdeka",
    explanation: "Gedung Merdeka yang berlokasi di Jalan Asia Afrika Bandung menjadi tempat utama pelaksanaan Sidang KAA tahun 1955."
  },
  {
    question: "Dekrit Presiden 5 Juli 1959 yang menyatakan kembali ke UUD 1945 dikeluarkan oleh...",
    options: ["Ir. Sukarno", "Soeharto", "B.J. Habibie", "Drs. Moh. Hatta"],
    answer: "Ir. Sukarno",
    explanation: "Presiden Sukarno mengeluarkan Dekrit Presiden 5 Juli 1959 untuk mengatasi kemacetan politik akibat kegagalan Dewan Konstituante merumuskan UUD baru."
  },
  {
    question: "Pahlawan Angkatan Laut yang gugur bertempur di atas Kapal Macan Tutul di Laut Aru saat misi pembebasan Irian Barat adalah...",
    options: ["Yos Sudarso", "Adisucipto", "Slamet Riyadi", "I Gusti Ngurah Rai"],
    answer: "Yos Sudarso",
    explanation: "Komodor Yos Sudarso gugur bersama Kapal Macan Tutul pada 15 Januari 1962 dalam Pertempuran Laut Aru menentang armada Belanda."
  },
  {
    question: "Masa kepemimpinan Presiden Soeharto yang berlangsung selama 32 tahun (1966-1998) dinamakan era...",
    options: ["Orde Baru", "Orde Lama", "Era Reformasi", "Demokrasi Liberal"],
    answer: "Orde Baru",
    explanation: "Orde Baru adalah sebutan bagi masa pemerintahan Presiden Soeharto yang menegakkan kembali Pancasila dan UUD 1945 secara murni dan konsekuen."
  },
  {
    question: "Surat perintah penyerahan wewenang pengamanan negara dari Presiden Sukarno kepada Letjen Soeharto dinamakan...",
    options: ["Supersemar", "Dekrit Presiden", "Trikora", "Dwikora"],
    answer: "Supersemar",
    explanation: "Supersemar (Surat Perintah 11 Maret 1966) berisi penyerahan mandat kepada Soeharto untuk mengambil tindakan demi memulihkan keamanan dan ketertiban negara."
  },
  {
    question: "Presiden Republik Indonesia kedua, Soeharto, dikenal oleh masyarakat dengan julukan...",
    options: ["Bapak Pembangunan", "Bapak Proklamator", "Bapak Reformasi", "Bapak Teknologi"],
    answer: "Bapak Pembangunan",
    explanation: "Soeharto dijuluki 'Bapak Pembangunan' karena keberhasilannya menjalankan pembangunan ekonomi bertahap melalui program Pembangunan Lima Tahun (Pelita)."
  },
  {
    question: "Era demokrasi baru di Indonesia yang dimulai tahun 1998 setelah tumbangnya rezim Orde Baru dinamakan era...",
    options: ["Reformasi", "Orde Baru", "Orde Lama", "Milenium"],
    answer: "Reformasi",
    explanation: "Era Reformasi ditandai dengan turunnya Presiden Soeharto pada 21 Mei 1998 dan dibukanya kran kebebasan demokrasi di Indonesia."
  },
  {
    question: "Wakil Presiden yang secara resmi menggantikan posisi Presiden Soeharto saat mengundurkan diri tahun 1998 adalah...",
    options: ["B.J. Habibie", "Gus Dur", "Megawati Soekarnoputri", "Try Sutrisno"],
    answer: "B.J. Habibie",
    explanation: "Sesuai Pasal 8 UUD 1945, Prof. B.J. Habibie dilantik menjadi Presiden ke-3 RI menggantikan Presiden Soeharto yang mengundurkan diri."
  },
  {
    question: "Presiden wanita pertama dalam sejarah negara Republik Indonesia adalah...",
    options: ["Megawati Soekarnoputri", "R.A. Kartini", "Fatmawati", "Khofifah Indar Parawansa"],
    answer: "Megawati Soekarnoputri",
    explanation: "Megawati Soekarnoputri menjabat sebagai Presiden ke-5 RI pada periode 2001–2004 dan tercatat sebagai presiden wanita pertama di Indonesia."
  },
  {
    question: "Presiden RI ke-4 yang dikenal sebagai ulama pluralis dan humoris adalah...",
    options: ["K.H. Abdurrahman Wahid (Gus Dur)", "B.J. Habibie", "Susilo Bambang Yudhoyono", "Soeharto"],
    answer: "K.H. Abdurrahman Wahid (Gus Dur)",
    explanation: "Gus Dur menjabat Presiden ke-4 RI (1999–2001) dan dikenal sebagai tokoh yang menjunjung tinggi toleransi keberagaman serta hak-hak minoritas."
  },
  {
    question: "Lembaga independen yang dibentuk untuk mengusut dan memberantas tindak pidana korupsi disingkat...",
    options: ["KPK", "KPU", "KPAI", "Komnas HAM"],
    answer: "KPK",
    explanation: "KPK (Komisi Pemberantasan Korupsi) dibentuk pada tahun 2002 di era Presiden Megawati Soekarnoputri untuk membebas-bersihkan Indonesia dari korupsi."
  },
  {
    question: "Organisasi perhimpunan persatuan negara-negara di kawasan Asia Tenggara bernama...",
    options: ["ASEAN", "PBB", "GNB", "OKI"],
    answer: "ASEAN",
    explanation: "ASEAN (Association of Southeast Asian Nations) didirikan pada 8 Agustus 1967 di Bangkok oleh 5 negara pendiri, termasuk Indonesia."
  },
  {
    question: "Menteri Luar Negeri Indonesia yang mewakili penandatanganan penjelasan pembentukan ASEAN tahun 1967 adalah...",
    options: ["Adam Malik", "Ali Alatas", "Mochtar Kusumaatmadja", "Subandrio"],
    answer: "Adam Malik",
    explanation: "Adam Malik menjabat Menteri Luar Negeri RI dan menandatangani Deklarasi Bangkok mewakili Indonesia bersama 4 utusan menteri luar negeri negara pendiri ASEAN."
  },
  {
    question: "Fosil manusia purba jenis Pithecanthropus Erectus ditemukan oleh Eugene Dubois di lembah Sungai Bengawan Solo, tepatnya di desa...",
    options: ["Trinil", "Sangiran", "Wajak", "Ngandong"],
    answer: "Trinil",
    explanation: "Eugene Dubois menemukan fosil batok kepala dan tulang paha Pithecanthropus Erectus (manusia kera berjalan tegak) di Trinil, Ngawi, Jawa Timur."
  },
  {
    question: "Nenek moyang bangsa Indonesia yang datang pada gelombang migrasi pertama sekitar 1500 SM dinamakan...",
    options: ["Proto Melayu", "Deutro Melayu", "Melanesoid", "Negrito"],
    answer: "Proto Melayu",
    explanation: "Proto Melayu (Melayu Tua) memasuki wilayah Nusantara pada gelombang pertama membawa kebudayaan batu baru (Neolitikum)."
  },
  {
    question: "Suku bangsa di Indonesia yang merupakan keturunan langsung dari gelombang migrasi Proto Melayu di antaranya...",
    options: ["Suku Dayak dan Toraja", "Suku Jawa dan Sunda", "Suku Bugis dan Minang", "Suku Bali dan Madura"],
    answer: "Suku Dayak dan Toraja",
    explanation: "Keturunan ras Proto Melayu yang masih bertahan hingga kini antara lain Suku Dayak di Kalimantan, Suku Toraja di Sulawesi, dan Suku Batak di Sumatra."
  },
  {
    question: "Tumpukan fosil cangkang kerang dan siput yang menggunung peninggalan manusia purba pantai dinamakan...",
    options: ["Kjokkenmoddinger", "Abris Sous Roche", "Menhir", "Sarkofagus"],
    answer: "Kjokkenmoddinger",
    explanation: "Kjokkenmoddinger berasal dari bahasa Denmark (kjokken=dapur, modding=sampah), yaitu sampah dapur berupa fosil kulit kerang peninggalan zaman Mesolitikum."
  },
  {
    question: "Gua-gua tempat tinggal manusia purba zaman Mesolitikum yang terlindung di bawah ceruk karang dinamakan...",
    options: ["Abris Sous Roche", "Kjokkenmoddinger", "Waruga", "Dolmen"],
    answer: "Abris Sous Roche",
    explanation: "Abris Sous Roche adalah tempat tinggal sementara manusia purba berupa gua-gua ceruk tebing batu karang sebagai tempat berlindung dari cuaca dan binatang buas."
  },
  {
    question: "Gendang perunggu berukuran besar yang dipakai dalam ritual keagamaan pemanggilan hujan zaman logam disebut...",
    options: ["Nekara", "Gamelan", "Gong", "Moko"],
    answer: "Nekara",
    explanation: "Nekara adalah tambur/gendang perunggu berbentuk dandang berpinggang yang dipakai dalam upacara ritual pemanggilan hujan atau pemujaan nenek moyang."
  },
  {
    question: "Ratu yang memerintah Kerajaan Kalingga dengan menerapkan hukum yang sangat adil dan tegas adalah...",
    options: ["Ratu Shima", "Ratu Hemas", "Ratu Kalinyamat", "Ratu Tribhuwana"],
    answer: "Ratu Shima",
    explanation: "Ratu Shima memimpin Kerajaan Kalingga (Jawa Tengah) pada abad ke-7 dengan menegakkan hukum secara tegas dan tidak pandang bulu, bahkan kepada keluarganya sendiri."
  },
  {
    question: "Pendeta Buddha asal Tiongkok yang bermukim lama di Sriwijaya untuk menerjemahkan kitab-kitab suci adalah...",
    options: ["I-Tsing", "Fa-Hien", "Cheng Ho", "Huan Tsang"],
    answer: "I-Tsing",
    explanation: "I-Tsing adalah musafir pendeta Buddha dari Tiongkok yang singgah di Sriwijaya selama bertahun-tahun untuk mempelajari bahasa Sanskerta sebelum melanjutkan ke India."
  },
  {
    question: "Pendiri Kerajaan Singasari yang merebut kekuasaan Tumapel dari Akuwu Tunggul Ametung bernama...",
    options: ["Ken Arok", "Anusapati", "Tohjaya", "Kertanegara"],
    answer: "Ken Arok",
    explanation: "Ken Arok mendirikan Kerajaan Singasari pada tahun 1222 Masehi setelah mengalahkan Tunggul Ametung dan mengalahkan Raja Kertajaya dari Kediri."
  },
  {
    question: "Raja Kerajaan Kediri yang terkenal sangat bijaksana serta memiliki ramalan-ramalan peristiwa masa depan adalah...",
    options: ["Jayabaya", "Kertajaya", "Bameswara", "Airlangga"],
    answer: "Jayabaya",
    explanation: "Prabu Jayabaya adalah raja terbesar Kediri yang terkenal dengan Kitab Jangka Jayabaya, memuat ramalan-ramalan masa depan Nusantara."
  },
  {
    question: "Kerajaan Sunda (Pajajaran) mencapai ketenteraman dan kemakmuran di bawah pimpinan raja terkenal yaitu...",
    options: ["Prabu Siliwangi", "Purnawarman", "Sultan Ageng Tirtayasa", "Sanjaya"],
    answer: "Prabu Siliwangi",
    explanation: "Prabu Siliwangi (Sri Baduga Maharaja) memimpin Kerajaan Pajajaran dengan bijaksana dan membawa kemakmuran bagi rakyat Sunda."
  },
  {
    question: "Peristiwa Pertempuran Bubat terjadi karena perselisihan pernikahan antara Kerajaan Majapahit dengan Kerajaan...",
    options: ["Sunda (Pajajaran)", "Kediri", "Singasari", "Sriwijaya"],
    answer: "Sunda (Pajajaran)",
    explanation: "Peristiwa Bubat (1357 M) adalah pertempuran antara pengawal Kerajaan Sunda dan pasukan Majapahit akibat kesalahpahaman niat pernikahan Raja Hayam Wuruk dan Dyah Pitaloka."
  },
  {
    question: "Perang saudara memperebutkan takhta yang menyebabkan melemahnya kekuatan Kerajaan Majapahit adalah Perang...",
    options: ["Paregreg", "Bubat", "Ganter", "Diponegoro"],
    answer: "Paregreg",
    explanation: "Perang Paregreg (1404–1406 M) adalah perang saudara antara Wikramawardhana dan Bhre Wirabhumi yang menguras kekuatan dan menandai kemunduran Majapahit."
  },
  {
    question: "Teori yang dikemukakan Snouck Hurgronje bahwa Islam di Nusantara dibawa pedagang India adalah Teori...",
    options: ["Gujarat", "Mekkah", "Persia", "Tiongkok"],
    answer: "Gujarat",
    explanation: "Teori Gujarat menyatakan bahwa agama Islam masuk ke Nusantara melalui para pedagang muslim dari wilayah Gujarat, India, pada sekitar abad ke-13 Masehi."
  },
  {
    question: "Mata uang emas resmi peninggalan Kerajaan Samudera Pasai yang berukir nama sultan dinamakan...",
    options: ["Dirham", "Rupiah", "Gobog", "Kepeng"],
    answer: "Dirham",
    explanation: "Kerajaan Samudera Pasai sudah menggunakan mata uang emas sendiri yang disebut Dirham sebagai alat pembayaran resmi dalam kegiatan perdagangan internasional."
  },
  {
    question: "Masjid Agung Demak yang terkenal dengan tiang utama berbahan 'tatal' kayu dibangun oleh kolaborasi...",
    options: ["Walisongo", "Raja Majapahit", "Pedagang Gujarat", "Tentara PETA"],
    answer: "Walisongo",
    explanation: "Masjid Agung Demak didirikan oleh para Walisongo pada masa pemerintahan Raden Patah sebagai pusat penyiaran agama Islam di tanah Jawa."
  },
  {
    question: "Tokoh pejuang Islam yang berhasil memimpin pasukan gabungan mengusir armada Portugis dari Sunda Kelapa adalah...",
    options: ["Fatahillah", "Sunan Kalijaga", "Pati Unus", "Sultan Agung"],
    answer: "Fatahillah",
    explanation: "Fatahillah (Faletehan) memimpin armada gabungan Demak-Cirebon merebut pelabuhan Sunda Kelapa dari Portugis pada 22 Juni 1527."
  },
  {
    question: "Putra Raden Patah yang memimpin armada penyerangan Kerajaan Demak menentang Portugis di Malaka dijuluki...",
    options: ["Pati Unus (Pangeran Sabrang Lor)", "Sultan Trenggono", "Fatahillah", "Sunan Kudus"],
    answer: "Pati Unus (Pangeran Sabrang Lor)",
    explanation: "Pati Unus dijuluki 'Pangeran Sabrang Lor' karena keberaniannya memimpin armada laut menyeberang ke utara (sabrang lor) menyerang markas Portugis di Malaka."
  },
  {
    question: "Kerajaan Banten dan Cirebon dirintis dan dikembangkan oleh salah satu ulama Walisongo yaitu...",
    options: ["Sunan Gunung Jati", "Sunan Kudus", "Sunan Giri", "Sunan Ampel"],
    answer: "Sunan Gunung Jati",
    explanation: "Sunan Gunung Jati (Syarif Hidayatullah) adalah pimpinan penyebar Islam yang membangun dasar Kesultanan Cirebon dan Kesultanan Banten."
  },
  {
    question: "Perjanjian Giyanti tahun 1755 memecah Kerajaan Mataram Islam menjadi Kesultanan Yogyakarta dan...",
    options: ["Kasunanan Surakarta", "Kesultanan Banten", "Kadipaten Mangkunegaran", "Kesultanan Cirebon"],
    answer: "Kasunanan Surakarta",
    explanation: "Perjanjian Giyanti (1755) membagi wilayah Mataram Islam menjadi Kasunanan Surakarta di bawah Pakubuwono III dan Kesultanan Yogyakarta di bawah Sultan Hamengkubuwono I."
  },
  {
    question: "Sultan dari Kesultanan Ternate yang berhasil mengusir total kekuasaan Portugis dari wilayah Maluku adalah...",
    options: ["Sultan Baabullah", "Sultan Khairun", "Sultan Nuku", "Sultan Hasanuddin"],
    answer: "Sultan Baabullah",
    explanation: "Sultan Baabullah memimpin perlawanan rakyat Maluku membendung kekejaman Portugis pasca wafatnya Sultan Khairun dan merebut Benteng Gamlamo tahun 1575."
  },
  {
    question: "Gubernur Jenderal VOC yang memindahkan markas perdagangan pusat dari Ambon ke Batavia adalah...",
    options: ["Jan Pieterszoon Coen", "Pieter Both", "Daendels", "Raffles"],
    answer: "Jan Pieterszoon Coen",
    explanation: "J.P. Coen memindahkan pusat kekuasaan VOC dari Ambon ke Jayakarta pada tahun 1619 lalu mengubah namanya menjadi Batavia."
  },
  ];
  
