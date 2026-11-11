// Bank Soal Sejarah Indonesia - SMP Kelas 7-9 Kurikulum Merdeka (150 Soal Super Mudah & Acak)
const questionsData = [
    {
        question: "Apa nama zaman ketika manusia purba belum mengenal tulisan?",
        options: ["Zaman Sejarah", "Zaman Praaksara", "Zaman Modern", "Zaman Canggih"],
        correct: 1,
        kunci: "Zaman Praaksara",
        answer: "Zaman Praaksara",
        explanation: "Praaksara artinya sebelum ada tulisan ('pra' = sebelum, 'aksara' = tulisan)."
    },
    {
        question: "Benda-benda peninggalan purbakala buatan tangan manusia pada masa lalu disebut...",
        options: ["Fosil", "Prasasti", "Artefak", "Batu batuan"],
        correct: 2,
        kunci: "Artefak",
        answer: "Artefak",
        explanation: "Artefak adalah perkakas atau barang buatan manusia masa lampau."
    },
    {
        question: "Sisa tulang belulang manusia atau hewan purba yang sudah membatu di dalam tanah dinamakan...",
        options: ["Fosil", "Artefak", "Monumen", "Candi"],
        correct: 0,
        kunci: "Fosil",
        answer: "Fosil",
        explanation: "Fosil adalah sisa organisme masa lalu yang membatu secara alami."
    },
    {
        question: "Cara hidup manusia purba yang selalu berpindah-pindah tempat tinggal disebut...",
        options: ["Menetap", "Sedenter", "Nomaden", "Berkoloni"],
        correct: 2,
        kunci: "Nomaden",
        answer: "Nomaden",
        explanation: "Nomaden artinya berpindah-pindah mencari sumber makanan di alam."
    },
    {
        question: "Kerajaan bercorak Hindu tertua di Indonesia yang ada di Kalimantan Timur adalah...",
        options: ["Sriwijaya", "Majapahit", "Kutai", "Tarumanagara"],
        correct: 2,
        kunci: "Kutai",
        answer: "Kutai",
        explanation: "Kerajaan Kutai adalah kerajaan Hindu tertua yang dibuktikan dengan penemuan Yupa."
    },
    {
        question: "Prasasti berbentuk tiang batu peninggalan Kerajaan Kutai disebut...",
        options: ["Yupa", "Ciaruteun", "Tugu", "Menhir"],
        correct: 0,
        kunci: "Yupa",
        answer: "Yupa",
        explanation: "Yupa adalah tiang batu bertulis yang berfungsi sebagai tempat kurban."
    },
    {
        question: "Candi Buddha terbesar di dunia yang terletak di Jawa Tengah adalah Candi...",
        options: ["Prambanan", "Borobudur", "Penataran", "Kalasan"],
        correct: 1,
        kunci: "Borobudur",
        answer: "Borobudur",
        explanation: "Candi Borobudur dibangun oleh Dinasti Syailendra."
    },
    {
        question: "Candi Hindu yang terkenal dengan cerita Ramayana di Jawa Tengah adalah Candi...",
        options: ["Borobudur", "Mendut", "Prambanan", "Dieng"],
        correct: 2,
        kunci: "Prambanan",
        answer: "Prambanan",
        explanation: "Candi Prambanan adalah candi Hindu terbesar peninggalan Mataram Kuno."
    },
    {
        question: "Patih Kerajaan Majapahit yang terkenal dengan sumpah untuk menyatukan Nusantara adalah...",
        options: ["Hayam Wuruk", "Gajah Mada", "Raden Wijaya", "Ken Arok"],
        correct: 1,
        kunci: "Gajah Mada",
        answer: "Gajah Mada",
        explanation: "Gajah Mada terkenal dengan Sumpah Palapa-nya."
    },
    {
        question: "Dari kitab manakah semboyan 'Bhinneka Tunggal Ika' berasal?",
        options: ["Kitab Negarakertagama", "Kitab Sutasoma", "Kitab Pararaton", "Kitab Arjunawiwaha"],
        correct: 1,
        kunci: "Kitab Sutasoma",
        answer: "Kitab Sutasoma",
        explanation: "Kitab Sutasoma dikarang oleh Mpu Tantular pada masa Majapahit."
    },
    {
        question: "Kerajaan Islam pertama di Pulau Jawa yang didirikan oleh Raden Patah adalah...",
        options: ["Kesultanan Demak", "Kesultanan Banten", "Samudera Pasai", "Mataram Islam"],
        correct: 0,
        kunci: "Kesultanan Demak",
        answer: "Kesultanan Demak",
        explanation: "Demak menjadi pusat penyebaran Islam di Jawa dengan dukungan Wali Songo."
    },
    {
        question: "Wali Songo yang terkenal berdakwah menggunakan media wayang kulit adalah...",
        options: ["Sunan Ampel", "Sunan Giri", "Sunan Kalijaga", "Sunan Bonang"],
        correct: 2,
        kunci: "Sunan Kalijaga",
        answer: "Sunan Kalijaga",
        explanation: "Sunan Kalijaga memasukkan nilai Islam ke dalam kesenian tradisional."
    },
    {
        question: "Sultan dari Makassar yang dijuluki 'Ayam Jantan dari Timur' karena gigih melawan Belanda adalah...",
        options: ["Sultan Hasanuddin", "Sultan Baabullah", "Sultan Ageng", "Sultan Iskandar Muda"],
        correct: 0,
        kunci: "Sultan Hasanuddin",
        answer: "Sultan Hasanuddin",
        explanation: "Sultan Hasanuddin adalah Raja Gowa yang melawan monopoli dagang VOC."
    },
    {
        question: "Bangsa Eropa yang pertama kali datang dan menjajah Indonesia untuk mencari rempah-rempah adalah...",
        options: ["Inggris dan Prancis", "Portugis dan Spanyol", "Jepang dan Jerman", "Amerika dan Italia"],
        correct: 1,
        kunci: "Portugis dan Spanyol",
        answer: "Portugis dan Spanyol",
        explanation: "Portugis dan Spanyol memelopori penjelajahan samudera ke dunia timur."
    },
    {
        question: "Nama kongsi dagang milik Belanda di Indonesia yang sangat terkenal kekejamannya adalah...",
        options: ["VOC", "EIC", "NICA", "UNCI"],
        correct: 0,
        kunci: "VOC",
        answer: "VOC",
        explanation: "VOC dibentuk Belanda untuk memonopoli rempah-rempah di Nusantara."
    },
    {
        question: "Siapa gubernur jenderal yang membangun Jalan Raya Pos dari Anyer sampai Panarukan?",
        options: ["Raffles", "Daendels", "Van den Bosch", "J.P. Coen"],
        correct: 1,
        kunci: "Daendels",
        answer: "Daendels",
        explanation: "Herman Willem Daendels membangun jalan raya untuk pertahanan militer."
    },
    {
        question: "Sistem tanam paksa di Indonesia pada masa kolonial Belanda dicetuskan oleh...",
        options: ["Van Deventer", "Johannes van den Bosch", "Raffles", "Daendels"],
        correct: 1,
        kunci: "Johannes van den Bosch",
        answer: "Johannes van den Bosch",
        explanation: "Cultuurstelsel mewajibkan rakyat menanam tanaman ekspor."
    },
    {
        question: "Politik Balas Budi (Politik Etis) bagi rakyat Indonesia diusulkan oleh...",
        options: ["Van Deventer", "Multatuli", "Douwes Dekker", "Raffles"],
        correct: 0,
        kunci: "Van Deventer",
        answer: "Van Deventer",
        explanation: "Politik Etis meliputi edukasi, irigasi, dan emigrasi."
    },
    {
        question: "Organisasi pergerakan nasional modern pertama di Indonesia yang berdiri tanggal 20 Mei 1908 adalah...",
        options: ["Sarekat Islam", "Budi Utomo", "Indische Partij", "Muhammadiyah"],
        correct: 1,
        kunci: "Budi Utomo",
        answer: "Budi Utomo",
        explanation: "Budi Utomo didirikan oleh Dr. Soetomo dan mahasiswa STOVIA."
    },
    {
        question: "Tanggal 28 Oktober setiap tahunnya diperingati sebagai Hari...",
        options: ["Pahlawan", "Kebangkitan Nasional", "Sumpah Pemuda", "Kemerdekaan"],
        correct: 2,
        kunci: "Sumpah Pemuda",
        answer: "Sumpah Pemuda",
        explanation: "Sumpah Pemuda dicetuskan pada Kongres Pemuda II tahun 1928 di Jakarta."
    },
    {
        question: "Siapakah tokoh yang menciptakan lagu kebangsaan Indonesia Raya?",
        options: ["W.R. Supratman", "Ismail Marzuki", "H. Mutahar", "C. Simanjuntak"],
        correct: 0,
        kunci: "W.R. Supratman",
        answer: "W.R. Supratman",
        explanation: "Wage Rudolf Supratman menciptakan dan memainkan lagu Indonesia Raya."
    },
    {
        question: "Pahlawan wanita asal Jepara yang memperjuangkan pendidikan kaum perempuan adalah...",
        options: ["Cut Nyak Dhien", "Dewi Sartika", "R.A. Kartini", "Martha Tiahahu"],
        correct: 2,
        kunci: "R.A. Kartini",
        answer: "R.A. Kartini",
        explanation: "R.A. Kartini dikenal lewat surat-surat emansipasi wanita."
    },
    {
        question: "Siapakah tokoh yang dijuluki sebagai Bapak Pendidikan Nasional di Indonesia?",
        options: ["Soekarno", "Ki Hajar Dewantara", "Mohammad Hatta", "Dr. Wahidin"],
        correct: 1,
        kunci: "Ki Hajar Dewantara",
        answer: "Ki Hajar Dewantara",
        explanation: "Ki Hajar Dewantara mendirikan Taman Siswa."
    },
    {
        question: "Badan bentukan Jepang untuk menyelidiki persiapan kemerdekaan Indonesia adalah...",
        options: ["PPKI", "BPUPKI", "PETA", "KNIP"],
        correct: 1,
        kunci: "BPUPKI",
        answer: "BPUPKI",
        explanation: "BPUPKI bertugas merumuskan dasar negara dan UUD."
    },
    {
        question: "Siapa tokoh yang pertama kali mengusulkan nama dan konsep 'Pancasila' pada 1 Juni 1945?",
        options: ["Soepomo", "Mohammad Yamin", "Ir. Soekarno", "Radjiman"],
        correct: 2,
        kunci: "Ir. Soekarno",
        answer: "Ir. Soekarno",
        explanation: "Ir. Soekarno menyampaikan pidato dasar negara pada 1 Juni."
    },
    {
        question: "Peristiwa penculikan Ir. Soekarno dan Moh. Hatta ke Karawang sebelum proklamasi disebut peristiwa...",
        options: ["Rengasdengklok", "Bandung Lautan Api", "Surabaya", "Ambarawa"],
        correct: 0,
        kunci: "Rengasdengklok",
        answer: "Rengasdengklok",
        explanation: "Tujuannya agar mereka aman dari pengaruh janji manis Jepang."
    },
    {
        question: "Siapa tokoh yang membacakan Teks Proklamasi Kemerdekaan Indonesia pada 17 Agustus 1945?",
        options: ["Mohammad Hatta", "Ir. Soekarno", "Sutan Sjahrir", "Ahmad Soebardjo"],
        correct: 1,
        kunci: "Ir. Soekarno",
        answer: "Ir. Soekarno",
        explanation: "Ir. Soekarno membacakan naskah proklamasi didampingi Moh. Hatta."
    },
    {
        question: "Siapa tokoh yang mengetik naskah asli Proklamasi Kemerdekaan Indonesia?",
        options: ["Sayuti Melik", "Sukarni", "B.M. Diah", "Ahmad Soebardjo"],
        correct: 0,
        kunci: "Sayuti Melik",
        answer: "Sayuti Melik",
        explanation: "Sayuti Melik adalah pemuda yang mengetik naskah proklamasi."
    },
    {
        question: "Ibu Fatmawati terkenal berjasa dalam sejarah kemerdekaan karena...",
        options: ["Mengetik naskah", "Menjahit Bendera Merah Putih", "Merumuskan UUD", "Menyiapkan tempat"],
        correct: 1,
        kunci: "Menjahit Bendera Merah Putih",
        answer: "Menjahit Bendera Merah Putih",
        explanation: "Bendera pusaka Sang Saka Merah Putih dijahit oleh Ibu Fatmawati."
    },
    {
        question: "Tanggal 10 November diperingati sebagai Hari Pahlawan untuk mengenang pertempuran di kota...",
        options: ["Semarang", "Bandung", "Surabaya", "Medan"],
        correct: 2,
        kunci: "Surabaya",
        answer: "Surabaya",
        explanation: "Pertempuran Surabaya adalah pertempuran terbesar mempertahankan kemerdekaan."
    },
    {
        question: "Siapa tokoh pemimpin pemuda di Surabaya yang terkenal dengan pidato berapi-apinya?",
        options: ["Bung Tomo", "Jenderal Soedirman", "I Gusti Ngurah Rai", "Pattimura"],
        correct: 0,
        kunci: "Bung Tomo",
        answer: "Bung Tomo",
        explanation: "Bung Tomo membakar semangat arek-arek Suroboyo."
    },
    {
        question: "Peristiwa pembakaran rumah dan kota di bagian selatan Bandung oleh pejuang agar tidak dipakai musuh disebut...",
        options: ["Bandung Lautan Api", "Palagan Ambarawa", "Medan Area", "Puputan Margarana"],
        correct: 0,
        kunci: "Bandung Lautan Api",
        answer: "Bandung Lautan Api",
        explanation: "Peristiwa Bandung Lautan Api terjadi pada Maret 1946."
    },
    {
        question: "Panglima Besar TNI pertama yang memimpin perang gerilya melawan agresi militer adalah...",
        options: ["Ahmad Yani", "Soeharto", "Jenderal Soedirman", "Nasution"],
        correct: 2,
        kunci: "Jenderal Soedirman",
        answer: "Jenderal Soedirman",
        explanation: "Jenderal Soedirman bergerilya ditandu meski sedang sakit parah."
    },
    {
        question: "Perjanjian antara Indonesia dan Belanda yang diadakan di dalam sebuah kapal perang Amerika Serikat adalah...",
        options: ["Perjanjian Linggarjati", "Perjanjian Renville", "Perjanjian Roem-Royen", "KMB"],
        correct: 1,
        kunci: "Perjanjian Renville",
        answer: "Perjanjian Renville",
        explanation: "Perjanjian Renville ditandatangani di atas geladak USS Renville."
    },
    {
        question: "Kota tempat diselenggarakannya Konferensi Meja Bundar (KMB) di mana Belanda mengakui kedaulatan RI adalah...",
        options: ["Jakarta", "Yogyakarta", "Den Haag", "Amsterdam"],
        correct: 2,
        kunci: "Den Haag",
        answer: "Den Haag",
        explanation: "KMB berlangsung di Den Haag, Belanda, pada tahun 1949."
    },
    {
        question: "Mata uang resmi pertama milik Republik Indonesia yang diterbitkan tahun 1946 disebut...",
        options: ["Rupiah", "ORI", "Gulden", "Sen"],
        correct: 1,
        kunci: "ORI",
        answer: "ORI",
        explanation: "ORI singkatan dari Oeroang Republik Indonesia."
    },
    {
        question: "Peristiwa serangan mendadak tentara Indonesia di Yogyakarta pada 1 Maret 1949 dipimpin oleh...",
        options: ["Soeharto", "Soedirman", "Ahmad Yani", "Slamet Riyadi"],
        correct: 0,
        kunci: "Soeharto",
        answer: "Soeharto",
        explanation: "Serangan Umum 1 Maret membuktikan TNI masih ada."
    },
    {
        question: "Wilayah Irian Barat resmi kembali ke pangkuan NKRI melalui hasil penentuan pendapat rakyat yang disebut...",
        options: ["Trikora", "Pepera", "Tritura", "Dwikora"],
        correct: 1,
        kunci: "Pepera",
        answer: "Pepera",
        explanation: "Pepera (Penentuan Pendapat Rakyat) diselenggarakan tahun 1969."
    },
    {
        question: "Masa pemerintahan Presiden Soeharto yang berjalan selama 32 tahun dikenal dengan sebutan...",
        options: ["Orde Lama", "Orde Baru", "Era Reformasi", "Demokrasi Liberal"],
        correct: 1,
        kunci: "Orde Baru",
        answer: "Orde Baru",
        explanation: "Masa Orde Baru dimulai dari tahun 1966 hingga 1998."
    },
    {
        question: "Peristiwa mundurnya Presiden Soeharto pada Mei 1998 menandai dimulainya babak baru sejarah Indonesia yaitu...",
        options: ["Era Reformasi", "Orde Lama", "Zaman Kemerdekaan", "Demokrasi Terpimpin"],
        correct: 0,
        kunci: "Era Reformasi",
        answer: "Era Reformasi",
        explanation: "Era Reformasi lahir setelah gerakan mahasiswa tahun 1998."
    },
    {
        question: "Organisasi massa Islam Muhammadiyah didirikan di Yogyakarta oleh...",
        options: ["K.H. Hasyim Asy'ari", "K.H. Ahmad Dahlan", "H. Samanhudi", "H.O.S. Tjokroaminoto"],
        correct: 1,
        kunci: "K.H. Ahmad Dahlan",
        answer: "K.H. Ahmad Dahlan",
        explanation: "Muhammadiyah didirikan pada tahun 1912."
    },
    {
        question: "Organisasi Nahdlatul Ulama (NU) didirikan di Jawa Timur oleh para ulama yang dipimpin oleh...",
        options: ["K.H. Hasyim Asy'ari", "K.H. Ahmad Dahlan", "Ki Hajar Dewantara", "Wahidin Sudirohusodo"],
        correct: 0,
        kunci: "K.H. Hasyim Asy'ari",
        answer: "K.H. Hasyim Asy'ari",
        explanation: "NU didirikan di Surabaya pada tahun 1926."
    },
    {
        question: "Pahlawan nasional wanita asal Aceh yang gigih melawan Belanda setelah suaminya gugur adalah...",
        options: ["R.A. Kartini", "Cut Nyak Dhien", "Dewi Sartika", "Christina Tiahahu"],
        correct: 1,
        kunci: "Cut Nyak Dhien",
        answer: "Cut Nyak Dhien",
        explanation: "Cut Nyak Dhien memimpin gerilya di hutan Aceh."
    },
    {
        question: "Pahlawan nasional asal Maluku yang memimpin perlawanan di Benteng Duurstede adalah...",
        options: ["Pattimura", "Pangeran Antasari", "Sultan Hasanuddin", "I Gusti Ngurah Rai"],
        correct: 0,
        kunci: "Pattimura",
        answer: "Pattimura",
        explanation: "Kapitan Pattimura berjuang di Saparua, Maluku."
    },
    {
        question: "Sistem kerja paksa pada masa penjajahan Jepang bagi rakyat Indonesia dinamakan...",
        options: ["Rodi", "Romusha", "Cultuurstelsel", "Landrent"],
        correct: 1,
        kunci: "Romusha",
        answer: "Romusha",
        explanation: "Romusha adalah pengerahan tenaga kerja paksa oleh tentara Jepang."
    },
    {
        question: "Pasukan pemuda bentukan Jepang yang menjadi cikal bakal militer Indonesia adalah...",
        options: ["Heiho", "Keibodan", "PETA", "Fujinkai"],
        correct: 2,
        kunci: "PETA",
        answer: "PETA",
        explanation: "PETA singkatan dari Pembela Tanah Air."
    },
    {
        question: "Dua kota di Jepang yang dibom atom oleh Sekutu pada Agustus 1945 adalah...",
        options: ["Tokyo dan Osaka", "Hiroshima dan Nagasaki", "Kyoto dan Kobe", "Sapporo dan Nagoya"],
        correct: 1,
        kunci: "Hiroshima dan Nagasaki",
        answer: "Hiroshima dan Nagasaki",
        explanation: "Bom atom membuat Jepang menyerah tanpa syarat."
    },
    {
        question: "Sidang PPKI pada 18 Agustus 1945 mengesahkan UUD 1945 dan memilih presiden pertama, yaitu...",
        options: ["Mohammad Hatta", "Ir. Soekarno", "Sutan Sjahrir", "Soepomo"],
        correct: 1,
        kunci: "Ir. Soekarno",
        answer: "Ir. Soekarno",
        explanation: "Ir. Soekarno terpilih sebagai Presiden dan Moh. Hatta sebagai Wakil Presiden."
    },
    {
        question: "Bentuk negara Indonesia sempat berubah menjadi negara serikat (RIS) setelah hasil dari...",
        options: ["Perundingan Linggarjati", "Perjanjian Renville", "Konferensi Meja Bundar (KMB)", "Perundingan Roem-Royen"],
        correct: 2,
        kunci: "Konferensi Meja Bundar (KMB)",
        answer: "Konferensi Meja Bundar (KMB)",
        explanation: "Indonesia sempat berbentuk RIS sebelum kembali menjadi NKRI tahun 1950."
    },
    {
        question: "Tanggal berapa Negara Kesatuan Republik Indonesia (NKRI) kembali diproklamasikan secara utuh tahun 1950?",
        options: ["17 Agustus 1950", "1 Juni 1945", "10 November 1950", "28 Oktober 1950"],
        correct: 0,
        kunci: "17 Agustus 1950",
        answer: "17 Agustus 1950",
        explanation: "Bentuk negara serikat dibubarkan dan kembali ke bentuk NKRI."
    },
    {
        question: "Pemilihan umum (Pemilu) pertama yang demokratis di Indonesia diselenggarakan pada tahun...",
        options: ["1945", "1955", "1971", "1999"],
        correct: 1,
        kunci: "1955",
        answer: "1955",
        explanation: "Pemilu 1955 diadakan untuk memilih anggota DPR dan Konstituante."
    },
    {
        question: "Dekrit Presiden 5 Juli 1959 berisi tentang pemberlakuan kembali undang-undang dasar...",
        options: ["UUD 1945", "UUDS 1950", "Konstitusi RIS", "UUD Sementara"],
        correct: 0,
        kunci: "UUD 1945",
        answer: "UUD 1945",
        explanation: "Dekrit Presiden dikeluarkan untuk mengatasi krisis politik."
    },
    {
        question: "Konferensi Asia Afrika (KAA) yang terkenal dengan Dasasila Bandung diselenggarakan pada tahun...",
        options: ["1945", "1950", "1955", "1965"],
        correct: 2,
        kunci: "1955",
        answer: "1955",
        explanation: "KAA berlangsung di Gedung Merdeka, Bandung, tahun 1955."
    },
    {
        question: "Tiga Tuntutan Rakyat (Tritura) dikumandangkan oleh mahasiswa pada tahun 1966, salah satunya adalah...",
        options: ["Turunkan harga dan bubarkan PKI", "Ganti sistem pemerintahan", "Bubar negara bagian", "Buka kembali pelabuhan"],
        correct: 0,
        kunci: "Turunkan harga dan bubarkan PKI",
        answer: "Turunkan harga dan bubarkan PKI",
        explanation: "Tritura menuntut pembubaran PKI, perbaikan ekonomi, dan pembersihan kabinet."
    },
    {
        question: "Surat Perintah Sebelas Maret (Supersemar) tahun 1966 diberikan kepada...",
        options: ["Soeharto", "Ahmad Yani", "Nasution", "Adam Malik"],
        correct: 0,
        kunci: "Soeharto",
        answer: "Soeharto",
        explanation: "Supersemar menjadi tonggak awal lahirnya Orde Baru."
    },
    {
        question: "Wakil Presiden pertama Republik Indonesia yang juga dijuluki Bapak Koperasi adalah...",
        options: ["Ir. Soekarno", "Drs. Mohammad Hatta", "Adam Malik", "Sutan Sjahrir"],
        correct: 1,
        kunci: "Drs. Mohammad Hatta",
        answer: "Drs. Mohammad Hatta",
        explanation: "Bung Hatta sangat berjasa mengembangkan sistem perekonomian koperasi."
    },
    {
        question: "Gua atau ceruk batu tempat tinggal manusia purba zaman Mesolitikum disebut...",
        options: ["Abris Sous Roche", "Kjokkenmoddinger", "Menhir", "Dolmen"],
        correct: 0,
        kunci: "Abris Sous Roche",
        answer: "Abris Sous Roche",
        explanation: "Abris Sous Roche adalah gua karang tempat perlindungan manusia purba."
    },
    {
        question: "Sampah dapur kulit kerang menumpuk peninggalan purbakala disebut...",
        options: ["Kjokkenmoddinger", "Sarkofagus", "Waruga", "Moko"],
        correct: 0,
        kunci: "Kjokkenmoddinger",
        answer: "Kjokkenmoddinger",
        explanation: "Kjokkenmoddinger adalah bukit kerang bekas makanan manusia purba."
    },
    {
        question: "Peti kubur batu peninggalan zaman Megalitikum yang berbentuk seperti lesung disebut...",
        options: ["Sarkofagus", "Menhir", "Dolmen", "Yupa"],
        correct: 0,
        kunci: "Sarkofagus",
        answer: "Sarkofagus",
        explanation: "Sarkofagus adalah wadah jenazah batu utuh dengan tutup."
    },
    {
        question: "Peti kubur batu berukuran kecil berbentuk kubus banyak ditemukan di Minahasa bernama...",
        options: ["Waruga", "Sarkofagus", "Moko", "Kapak"],
        correct: 0,
        kunci: "Waruga",
        answer: "Waruga",
        explanation: "Waruga adalah kuburan batu leluhur khas Minahasa."
    },
    {
        question: "Kerajaan Buddha di Sumatra yang terkenal sebagai pusat ilmu agama Buddha di Asia Tenggara adalah...",
        options: ["Sriwijaya", "Majapahit", "Singasari", "Kutai"],
        correct: 0,
        kunci: "Sriwijaya",
        answer: "Sriwijaya",
        explanation: "Banyak biksu dari Tiongkok belajar agama Buddha di Sriwijaya."
    },
    {
        question: "Prasasti peninggalan Sriwijaya yang menceritakan kutukan bagi orang yang berbuat jahat adalah...",
        options: ["Prasasti Telaga Batu", "Prasasti Yupa", "Prasasti Ciaruteun", "Prasasti Canggal"],
        correct: 0,
        kunci: "Prasasti Telaga Batu",
        answer: "Prasasti Telaga Batu",
        explanation: "Prasasti Telaga Batu memuat kutukan bagi mereka yang melanggar perintah raja."
    },
    {
        question: "Raja Tarumanagara yang terkenal membuat saluran air untuk mencegah banjir adalah...",
        options: ["Purnawarman", "Mulawarman", "Hayam Wuruk", "Airlangga"],
        correct: 0,
        kunci: "Purnawarman",
        answer: "Purnawarman",
        explanation: "Raja Purnawarman menggali Sungai Gomati sepanjang 6112 tombak."
    },
    {
        question: "Kitab sastra peninggalan Kediri yang menceritakan kisah Mahabharata gubahan Mpu Sedah dan Mpu Panuluh adalah...",
        options: ["Kitab Bharatayuddha", "Kitab Sutasoma", "Kitab Negarakertagama", "Kitab Pararaton"],
        correct: 0,
        kunci: "Kitab Bharatayuddha",
        answer: "Kitab Bharatayuddha",
        explanation: "Kitab Bharatayuddha ditulis untuk merayakan kemenangan Kediri atas Jenggala."
    },
    {
        question: "Candi peninggalan Majapahit di Blitar yang terkenal dengan relief cerita Panji adalah Candi...",
        options: ["Candi Penataran", "Candi Borobudur", "Candi Prambanan", "Candi Mendut"],
        correct: 0,
        kunci: "Candi Penataran",
        answer: "Candi Penataran",
        explanation: "Candi Penataran adalah kompleks percandian suci terbesar di Jawa Timur."
    },
    {
        question: "Kesultanan Islam pertama di Aceh yang didirikan oleh Marah Silu bergelar...",
        options: ["Sultan Malik as-Saleh", "Sultan Iskandar Muda", "Sultan Hasanuddin", "Sultan Trenggono"],
        correct: 0,
        kunci: "Sultan Malik as-Saleh",
        answer: "Sultan Malik as-Saleh",
        explanation: "Sultan Malik as-Saleh adalah raja pertama Samudera Pasai."
    },
    {
        question: "Panglima laut wanita hebat dari Kesultanan Aceh yang memimpin pasukan inong balee adalah...",
        options: ["Malahayati", "Cut Nyak Dhien", "Cut Meutia", "R.A. Kartini"],
        correct: 0,
        kunci: "Malahayati",
        answer: "Malahayati",
        explanation: "Laksamana Malahayati memimpin pasukan janda pahlawan yang gugur melawan musuh."
    },
    {
        question: "Sultan dari Banten yang sangat gigih membangun ekonomi pelabuhan dan melawan VOC adalah...",
        options: ["Sultan Ageng Tirtayasa", "Sultan Hasanuddin", "Sultan Trenggono", "Sultan Baabullah"],
        correct: 0,
        kunci: "Sultan Ageng Tirtayasa",
        answer: "Sultan Ageng Tirtayasa",
        explanation: "Sultan Ageng Tirtayasa menjadikan Banten bandar dagang internasional terbesar."
    },
    {
        question: "Perjanjian Giyanti tahun 1755 membagi wilayah Mataram Islam menjadi dua, yaitu Surakarta dan...",
        options: ["Yogyakarta", "Banten", "Cirebon", "Demak"],
        correct: 0,
        kunci: "Yogyakarta",
        answer: "Yogyakarta",
        explanation: "Perjanjian Giyanti mengakhiri perang saudara dan memecah Mataram."
    },
    {
        question: "Pelaut Portugis yang pertama kali berhasil mencapai pelabuhan Malaka tahun 1511 adalah...",
        options: ["Alfonso de Albuquerque", "Cornelis de Houtman", "Magelhaens", "Columbus"],
        correct: 0,
        kunci: "Alfonso de Albuquerque",
        answer: "Alfonso de Albuquerque",
        explanation: "Alfonso memimpin penaklukan atas bandar penting Malaka."
    },
    {
        question: "Hak istimewa VOC untuk memonopoli perdagangan dan mencetak mata uang sendiri disebut Hak...",
        options: ["Oktroi", "Extirpasi", "Contingenten", "Pajak"],
        correct: 0,
        kunci: "Hak Oktroi",
        answer: "Hak Oktroi",
        explanation: "Hak Oktroi memberikan wewenang VOC layaknya sebuah negara merdeka."
    },
    {
        question: "Pahlawan nasional dari Sumatra Barat yang memimpin Perang Padri adalah...",
        options: ["Tuanku Imam Bonjol", "Pangeran Diponegoro", "Pattimura", "Antasari"],
        correct: 0,
        kunci: "Tuanku Imam Bonjol",
        answer: "Tuanku Imam Bonjol",
        explanation: "Tuanku Imam Bonjol memimpin kaum Padri melawan penjajahan."
    },
    {
        question: "Pangeran Diponegoro memimpin perang besar melawan Belanda di Jawa pada tahun...",
        options: ["1825 - 1830", "1908 - 1912", "1945 - 1949", "1942 - 1945"],
        correct: 0,
        kunci: "1825 - 1830",
        answer: "1825 - 1830",
        explanation: "Perang Diponegoro atau Perang Jawa sangat merugikan pihak kolonial."
    },
    {
        question: "Taktik benteng yang digunakan Belanda untuk mempersempit ruang gerak Pangeran Diponegoro disebut...",
        options: ["Benteng Stelsel", "Devide et Impera", "Gerilya", "Supit Urang"],
        correct: 0,
        kunci: "Benteng Stelsel",
        answer: "Benteng Stelsel",
        explanation: "Belanda membangun banyak benteng pertahanan yang dihubungkan pasukan."
    },
    {
        question: "Pahlawan dari Bali yang gugur dalam perang puputan melawan Belanda di Margarana adalah...",
        options: ["I Gusti Ngurah Rai", "I Gusti Ketut Jelantik", "Untung Surapati", "Sultan Hasanuddin"],
        correct: 0,
        kunci: "I Gusti Ngurah Rai",
        answer: "I Gusti Ngurah Rai",
        explanation: "Letkol I Gusti Ngurah Rai memimpin pasukan Ciung Wanara."
    },
    {
        question: "Surat kabar pertama pelopor pers nasional yang didirikan Tirto Adhi Soerjo bernama...",
        options: ["Medan Prijaji", "Bintang Hindia", "De Express", "Utusan Melayu"],
        correct: 0,
        kunci: "Medan Prijaji",
        answer: "Medan Prijaji",
        explanation: "Medan Prijaji terbit di Bandung menyuarakan suara kaum pribumi."
    },
    {
        question: "Tiga Serangkai pendiri Indische Partij terdiri dari Douwes Dekker, Tipto Mangoenkoesoemo, dan...",
        options: ["Ki Hajar Dewantara", "Soekarno", "Hatta", "Sjahrir"],
        correct: 0,
        kunci: "Ki Hajar Dewantara",
        answer: "Ki Hajar Dewantara",
        explanation: "Indische Partij adalah partai politik pertama berhaluan nasionalis."
    },
    {
        question: "Organisasi pelajar Indonesia di negeri Belanda yang gigih menyuarakan kemerdekaan bernama...",
        options: ["Perhimpunan Indonesia", "Budi Utomo", "Jong Java", "Tri Koro Dharmo"],
        correct: 0,
        kunci: "Perhimpunan Indonesia",
        answer: "Perhimpunan Indonesia",
        explanation: "Perhimpunan Indonesia dipelopori oleh Moh. Hatta dan kawan-kawan."
    },
    {
        question: "Partai Nasional Indonesia (PNI) didirikan di Bandung oleh Ir. Soekarno pada tanggal 4 Juli tahun...",
        options: ["1927", "1908", "1912", "1945"],
        correct: 0,
        kunci: "1927",
        answer: "1927",
        explanation: "PNI berjuang dengan asas non-kooperasi terhadap pemerintah kolonial."
    },
    {
        question: "Judul pidato pembelaan terkenal yang dibacakan Bung Karno di pengadilan kolonial Bandung adalah...",
        options: ["Indonesia Menggugat", "Indonesia Merdeka", "Lahirnya Pancasila", "Amanat Penderitaan Rakyat"],
        correct: 0,
        kunci: "Indonesia Menggugat",
        answer: "Indonesia Menggugat",
        explanation: "Indonesia Menggugat membongkar kebejatan kolonialisme di hadapan hakim."
    },
    {
        question: "Slogan propaganda Jepang yang menyatakan diri sebagai pelindung, pemimpin, dan cahaya bagi Asia adalah...",
        options: ["Gerakan 3A", "Asia Timur Raya", "Hakko Ichiu", "Seikerei"],
        correct: 0,
        kunci: "Gerakan 3A",
        answer: "Gerakan 3A",
        explanation: "Gerakan 3A dibuat Jepang untuk menarik simpati bangsa Indonesia."
    },
    {
        question: "Pemberontakan pasukan PETA terhadap kekejaman tentara Jepang di Blitar dipimpin oleh...",
        options: ["Supriyadi", "Soedirman", "Ahmad Yani", "Bung Tomo"],
        correct: 0,
        kunci: "Supriyadi",
        answer: "Supriyadi",
        explanation: "Sodancho Supriyadi memimpin heroik perlawanan PETA Blitar."
    },
    {
        question: "Ketua badan BPUPKI yang memimpin sidang-sidang persiapan kemerdekaan adalah...",
        options: ["Dr. Radjiman Wedyodiningrat", "Ir. Soekarno", "Moh. Hatta", "Kasman Singodimedjo"],
        correct: 0,
        kunci: "Dr. Radjiman Wedyodiningrat",
        answer: "Dr. Radjiman Wedyodiningrat",
        explanation: "Dr. Radjiman memimpin sidang pencarian dasar negara."
    },
    {
        question: "Panitia kecil beranggotakan 9 orang yang merumuskan naskah mukaddimah dasar negara disebut...",
        options: ["Panitia Sembilan", "PPKI", "KNIP", "BPUPKI"],
        correct: 0,
        kunci: "Panitia Sembilan",
        answer: "Panitia Sembilan",
        explanation: "Panitia Sembilan menghasilkan Piagam Jakarta."
    },
    {
        question: "Rumah seorang perwira tinggi angkatan laut Jepang tempat merumuskan teks Proklamasi adalah milik...",
        options: ["Laksamana Tadashi Maeda", "General Terauchi", "Hitoshi Imamura", "Harada"],
        correct: 0,
        kunci: "Laksamana Tadashi Maeda",
        answer: "Laksamana Tadashi Maeda",
        explanation: "Laksamana Maeda menjamin tempat yang aman bagi para pemimpin bangsa."
    },
    {
        question: "Badan pembantu tugas presiden pada awal kemerdekaan sebelum adanya DPR/MPR dinamakan...",
        options: ["KNIP", "BKR", "TKR", "DPA"],
        correct: 0,
        kunci: "KNIP",
        answer: "KNIP",
        explanation: "Komite Nasional Indonesia Pusat membantu tugas legislatif darurat."
    },
    {
        question: "Pertempuran mempertahankan kemerdekaan di Jawa Tengah yang dipimpin Kolonel Soedirman dikenal sebagai...",
        options: ["Palagan Ambarawa", "Bandung Lautan Api", "Medan Area", "Surabaya"],
        correct: 0,
        kunci: "Palagan Ambarawa",
        answer: "Palagan Ambarawa",
        explanation: "Palagan Ambarawa sukses mengusir tentara Sekutu."
    },
    {
        question: "Perjanjian antara Indonesia dan Belanda yang diadakan di desa Linggarjati dimediasi oleh utusan dari negara...",
        options: ["Inggris", "Amerika", "Australia", "Jepang"],
        correct: 0,
        kunci: "Inggris",
        answer: "Inggris",
        explanation: "Lord Killearn dari Inggris bertindak sebagai penengah."
    },
    {
        question: "Agresi Militer Belanda II pada Desember 1948 berhasil menduduki ibu kota RI saat itu, yaitu kota...",
        options: ["Yogyakarta", "Jakarta", "Bukittinggi", "Surabaya"],
        correct: 0,
        kunci: "Yogyakarta",
        answer: "Yogyakarta",
        explanation: "Belanda menyerang Yogyakarta dan menawan pimpinan negara."
    },
    {
        question: "Pemerintahan darurat (PDRI) yang menyelamatkan jalannya negara saat Yogyakarta diduduki dibentuk di kota...",
        options: ["Bukittinggi", "Malang", "Surakarta", "Madiun"],
        correct: 0,
        kunci: "Bukittinggi",
        answer: "Bukittinggi",
        explanation: "Sjafruddin Prawiranegara memimpin PDRI di Sumatra Barat."
    },
    {
        question: "Ketua delegasi Indonesia dalam perundingan Konferensi Meja Bundar (KMB) di Den Haag adalah...",
        options: ["Mohammad Hatta", "Sutan Sjahrir", "Mohammad Roem", "Soekarno"],
        correct: 0,
        kunci: "Mohammad Hatta",
        answer: "Mohammad Hatta",
        explanation: "Bung Hatta memimpin delegasi hingga kedaulatan diakui."
    },
    {
        question: "Bentuk negara Indonesia sempat menjadi Republik Indonesia Serikat (RIS) akibat hasil dari...",
        options: ["KMB", "Perjanjian Renville", "Perjanjian Linggarjati", "Roem-Royen"],
        correct: 0,
        kunci: "KMB",
        answer: "KMB",
        explanation: "RIS merupakan hasil kesepakatan dalam Konferensi Meja Bundar."
    },
    {
        question: "Tanggal berapa RIS resmi dibubarkan dan Indonesia kembali sepenuhnya menjadi bentuk NKRI?",
        options: ["17 Agustus 1950", "17 Agustus 1945", "5 Juli 1959", "18 Agustus 1945"],
        correct: 0,
        kunci: "17 Agustus 1950",
        answer: "17 Agustus 1950",
        explanation: "Tepat 5 tahun kemerdekaan, bentuk NKRI kembali dipulihkan."
    },
    {
        question: "Masa demokrasi di Indonesia tahun 1950 sampai 1959 yang diwarnai sering bergantinya kabinet disebut...",
        options: ["Demokrasi Liberal", "Demokrasi Terpimpin", "Orde Baru", "Reformasi"],
        correct: 0,
        kunci: "Demokrasi Liberal",
        answer: "Demokrasi Liberal",
        explanation: "Kabinet mudah jatuh bangun karena sistem parlemen banyak partai."
    },
    {
        question: "Operasi militer untuk membebaskan wilayah Irian Barat dari tangan Belanda dinamakan komando...",
        options: ["Trikora", "Dwikora", "Tritura", "Supersemar"],
        correct: 0,
        kunci: "Trikora",
        answer: "Trikora",
        explanation: "Tri Komando Rakyat dikumandangkan Bung Karno di Yogyakarta."
    },
    {
        question: "Siapa pencipta lagu wajib nasional berjudul 'Hari Merdeka' (17 Agustus Tahun 45)?",
        options: ["H. Mutahar", "W.R. Supratman", "Ismail Marzuki", "C. Simanjuntak"],
        correct: 0,
        kunci: "H. Mutahar",
        answer: "H. Mutahar",
        explanation: "Husein Mutahar menciptakan lagu kemerdekaan yang gembira."
    },
    {
        question: "Pahlawan wanita pemberani asal Sulawesi Selatan yang menentang kembalinya penjajah NICA adalah...",
        options: ["Opu Daeng Risadju", "Cut Nyak Dhien", "Dewi Sartika", "Martha Tiahahu"],
        correct: 0,
        kunci: "Opu Daeng Risadju",
        answer: "Opu Daeng Risadju",
        explanation: "Opu Daeng Risadju aktif berjuang di Sulawesi dalam Sarekat Islam."
    },
    {
        question: "Landasan idiil negara Republik Indonesia tercantum secara resmi di dalam dokumen...",
        options: ["Pancasila (Pembukaan UUD 1945 alinea ke-4)", "Piagam Jakarta", "Batang Tubuh UUD", "Dekrit Presiden"],
        correct: 0,
        kunci: "Pancasila (Pembukaan UUD 1945 alinea ke-4)",
        answer: "Pancasila (Pembukaan UUD 1945 alinea ke-4)",
        explanation: "Pancasila tercantum sah di alinea keempat Pembukaan UUD 1945."
    }
];

// Sinkronisasi variabel global agar aman dibaca seluruh script web
window.questionsData = questionsData;
window.quizData = questionsData;
window.DEFAULT_QUESTIONS = questionsData;
window.sicerdik_questions = questionsData;
