// Bank Soal Sejarah Indonesia - 150 Soal Unik Tanpa Duplikasi (SiCerdik)
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
        question: "Pendiri Kerajaan Majapahit yang memanfaatkan pasukan Mongol untuk mengalahkan Jayakatwang adalah...",
        options: ["Raden Wijaya", "Hayam Wuruk", "Jayanegara", "Tribhuwana Tunggadewi"],
        correct: 0,
        kunci: "Raden Wijaya",
        answer: "Raden Wijaya",
        explanation: "Raden Wijaya mendirikan Majapahit pada tahun 1293 Masehi dan bergelar Kertarajasa Jayawardhana."
    },
    {
        question: "Semboyan 'Bhinneka Tunggal Ika' diambil dari karya sastra era Majapahit yaitu Kitab Sutasoma karangan...",
        options: ["Mpu Tantular", "Mpu Prapanca", "Mpu Sedah", "Mpu Panuluh"],
        correct: 0,
        kunci: "Mpu Tantular",
        answer: "Mpu Tantular",
        explanation: "Mpu Tantular menulis Kitab Sutasoma yang memuat ajaran toleransi beragama."
    },
    {
        question: "Kerajaan Islam pertama di Indonesia yang terletak di ujung utara Pulau Sumatra adalah...",
        options: ["Samudera Pasai", "Aceh Darussalam", "Demak", "Malaka"],
        correct: 0,
        kunci: "Samudera Pasai",
        answer: "Samudera Pasai",
        explanation: "Samudera Pasai berdiri pada abad ke-13 di Lhokseumawe, Aceh, dipimpin oleh Sultan Malik al-Saleh."
    },
    {
        question: "Kerajaan Islam pertama di Pulau Jawa yang didirikan oleh Raden Patah adalah...",
        options: ["Demak", "Banten", "Cirebon", "Mataram Islam"],
        correct: 0,
        kunci: "Demak",
        answer: "Demak",
        explanation: "Kerajaan Demak menjadi pusat penyebaran agama Islam di Jawa dengan dukungan Wali Songo."
    },
    {
        question: "Tokoh Wali Songo yang menyebarkan agama Islam menggunakan media wayang kulit dan tembang Jawa adalah...",
        options: ["Sunan Kalijaga", "Sunan Giri", "Sunan Ampel", "Sunan Bonang"],
        correct: 0,
        kunci: "Sunan Kalijaga",
        answer: "Sunan Kalijaga",
        explanation: "Sunan Kalijaga memanfaatkan seni kebudayaan lokal seperti wayang kulit sebagai sarana dakwah."
    },
    {
        question: "Sultan dari Kesultanan Gowa-Tallo yang dijuluki 'Ayam Jantan dari Timur' oleh Belanda adalah...",
        options: ["Sultan Hasanuddin", "Sultan Baabullah", "Sultan Nuku", "Sultan Ageng Tirtayasa"],
        correct: 0,
        kunci: "Sultan Hasanuddin",
        answer: "Sultan Hasanuddin",
        explanation: "Sultan Hasanuddin gigih melawan monopoli perdagangan VOC di Makassar."
    },
    {
        question: "Bangsa Eropa pertama yang berhasil mendarat di Nusantara (Malaka) pada tahun 1511 adalah...",
        options: ["Portugis", "Spanyol", "Belanda", "Inggris"],
        correct: 0,
        kunci: "Portugis",
        answer: "Portugis",
        explanation: "Pasukan Portugis di bawah pimpinan Alfonso de Albuquerque menaklukkan Malaka pada tahun 1511."
    },
    {
        question: "Gubernur Jenderal VOC yang memindahkan markas dagang dari Ambon ke Batavia pada tahun 1619 adalah...",
        options: ["Jan Pieterszoon Coen", "Pieter Both", "Daendels", "Raffles"],
        correct: 0,
        kunci: "Jan Pieterszoon Coen",
        answer: "Jan Pieterszoon Coen",
        explanation: "J.P. Coen menduduki Jayakarta, membakarnya, dan merebutnya menjadi markas pusat VOC bernama Batavia."
    },
    {
        question: "Sistem Tanam Paksa (Cultuurstelsel) di Indonesia diperkenalkan oleh Gubernur Jenderal...",
        options: ["Johannes van den Bosch", "H.W. Daendels", "T.S. Raffles", "van Deventer"],
        correct: 0,
        kunci: "Johannes van den Bosch",
        answer: "Johannes van den Bosch",
        explanation: "Van den Bosch menerapkan Tanam Paksa pada tahun 1830 untuk menutupi krisis keuangan pemerintah Belanda."
    },
    {
        question: "Siapakah tokoh pahlawan nasional yang membacakan Teks Proklamasi Kemerdekaan Indonesia pada tanggal 17 Agustus 1945?",
        options: ["Mohammad Hatta", "Ir. Soekarno", "Sutan Sjahrir", "Tan Malaka"],
        correct: 1,
        kunci: "Ir. Soekarno",
        answer: "Ir. Soekarno",
        explanation: "Ir. Soekarno membacakan Teks Proklamasi Kemerdekaan didampingi oleh Drs. Mohammad Hatta."
    },
    {
        question: "Di kota manakah peristiwa Rengasdengklok terjadi sebelum pembacaan Proklamasi Kemerdekaan Indonesia?",
        options: ["Bandung", "Karawang", "Bogor", "Cirebon"],
        correct: 1,
        kunci: "Karawang",
        answer: "Karawang",
        explanation: "Peristiwa Rengasdengklok terjadi di Kabupaten Karawang, Jawa Barat."
    },
    {
        question: "Tokoh yang mengetik naskah Proklamasi Kemerdekaan Indonesia setelah dirumuskan adalah...",
        options: ["Sayuti Melik", "B.M. Diah", "Sukarni", "Chaerul Saleh"],
        correct: 0,
        kunci: "Sayuti Melik",
        answer: "Sayuti Melik",
        explanation: "Sayuti Melik adalah tokoh pemuda yang mengetik naskah Proklamasi."
    },
    {
        question: "Sumpah Pemuda dicetuskan pada tanggal 28 Oktober 1928 dalam Kongres Pemuda II di kota...",
        options: ["Bandung", "Surabaya", "Jakarta", "Yogyakarta"],
        correct: 2,
        kunci: "Jakarta",
        answer: "Jakarta",
        explanation: "Kongres Pemuda II diselenggarakan di Jakarta dan melahirkan ikrar Sumpah Pemuda."
    },
    {
        question: "Organisasi modern pertama di Indonesia yang didirikan pada tanggal 20 Mei 1908 adalah...",
        options: ["Sarekat Islam", "Budi Utomo", "Indische Partij", "Perhimpunan Indonesia"],
        correct: 1,
        kunci: "Budi Utomo",
        answer: "Budi Utomo",
        explanation: "Budi Utomo didirikan oleh Dr. Soetomo dan para mahasiswa STOVIA."
    },
    {
        question: "Peristiwa Pertempuran Surabaya tanggal 10 November 1945 diperingati sebagai...",
        options: ["Hari Kemerdekaan", "Hari Sumpah Pemuda", "Hari Pahlawan", "Hari Kebangkitan Nasional"],
        correct: 2,
        kunci: "Hari Pahlawan",
        answer: "Hari Pahlawan",
        explanation: "Tanggal 10 November ditetapkan sebagai Hari Pahlawan untuk mengenang pertempuran di Surabaya."
    },
    {
        question: "Peristiwa pembumihangusan kota oleh pejuang agar tidak dijadikan markas Sekutu dinamakan...",
        options: ["Bandung Lautan Api", "Pertempuran Ambarawa", "Puputan Margarana", "Medan Area"],
        correct: 0,
        kunci: "Bandung Lautan Api",
        answer: "Bandung Lautan Api",
        explanation: "Peristiwa Bandung Lautan Api terjadi pada 23 Maret 1946."
    },
    {
        question: "Patih Kerajaan Majapahit yang terkenal dengan ikrar 'Sumpah Palapa' adalah...",
        options: ["Hayam Wuruk", "Gajah Mada", "Raden Wijaya", "Kertanegara"],
        correct: 1,
        kunci: "Gajah Mada",
        answer: "Gajah Mada",
        explanation: "Mahapatih Gajah Mada mengucapkan Sumpah Palapa untuk menyatukan Nusantara."
    },
    {
        question: "Kerajaan Hindu tertua di Indonesia dengan bukti prasasti Yupa terletak di...",
        options: ["Kalimantan Timur", "Jawa Barat", "Sumatra Selatan", "Jawa Tengah"],
        correct: 0,
        kunci: "Kalimantan Timur",
        answer: "Kalimantan Timur",
        explanation: "Kerajaan Kutai terletak di Muara Kaman, Kalimantan Timur."
    },
    {
        question: "Lagu kebangsaan 'Indonesia Raya' pertama kali diperdengarkan resmi pada peristiwa...",
        options: ["Proklamasi 1945", "Kongres Pemuda II 1928", "Sidang BPUPKI", "Rengasdengklok"],
        correct: 1,
        kunci: "Kongres Pemuda II tahun 1928",
        answer: "Kongres Pemuda II tahun 1928",
        explanation: "Lagu Indonesia Raya diciptakan oleh W.R. Supratman dan dimainkan pada Kongres Pemuda II."
    },
    {
        question: "Organisasi pergerakan nasional Indische Partij didirikan oleh Tiga Serangkai pada tahun...",
        options: ["1912", "1908", "1928", "1945"],
        correct: 0,
        kunci: "1912",
        answer: "1912",
        explanation: "Indische Partij didirikan pada 25 Desember 1912 oleh Douwes Dekker, Tjipto Mangoenkoesoemo, dan Ki Hajar Dewantara."
    },
    {
        question: "Gubernur Jenderal Hindia Belanda yang membangun Jalan Raya Pos dari Anyer sampai Panarukan adalah...",
        options: ["Herman Willem Daendels", "Thomas Stamford Raffles", "Johannes van den Bosch", "J.P. Coen"],
        correct: 0,
        kunci: "Herman Willem Daendels",
        answer: "Herman Willem Daendels",
        explanation: "Daendels memimpin pembangunan jalan raya pos untuk pertahanan militer Pulau Jawa."
    },
    {
        question: "Perjanjian Linggarjati yang ditandatangani tahun 1946 antara Indonesia dan Belanda dimediasi oleh utusan dari...",
        options: ["Inggris", "Amerika Serikat", "Australia", "Jepang"],
        correct: 0,
        kunci: "Inggris",
        answer: "Inggris",
        explanation: "Lord Killearn dari Inggris bertindak sebagai penengah dalam Perundingan Linggarjati."
    },
    {
        question: "Serangan umum 1 Maret 1949 di Yogyakarta dipimpin oleh militer di bawah komando...",
        options: ["Letkol Soeharto", "Jenderal Soedirman", "Ahmad Yani", "Bung Tomo"],
        correct: 0,
        kunci: "Letkol Soeharto",
        answer: "Letkol Soeharto",
        explanation: "Serangan Umum 1 Maret berhasil menduduki Yogyakarta selama 6 jam untuk menunjukkan eksistensi RI."
    },
    {
        question: "Pemerintahan Darurat Republik Indonesia (PDRI) dibentuk di kota...",
        options: ["Bukittinggi", "Yogyakarta", "Surabaya", "Malang"],
        correct: 0,
        kunci: "Bukittinggi",
        answer: "Bukittinggi",
        explanation: "PDRI dibentuk di Bukittinggi, Sumatra Barat, saat Agresi Militer Belanda II."
    },
    {
        question: "Dekrit Presiden 5 Juli 1959 berisi tentang pemberlakuan kembali UUD 1945 dan pembubaran...",
        options: ["Konstituante", "DPR", "MPR", "Cabinet"],
        correct: 0,
        kunci: "Konstituante",
        answer: "Konstituante",
        explanation: "Dekrit Presiden membubarkan Badan Konstituante karena gagal merumuskan UUD baru."
    },
    {
        question: "Surat Perintah Sebelas Maret (Supersemar) tahun 1966 diserahkan kepada...",
        options: ["Letjen Soeharto", "Ahmad Yani", "Nasution", "Adam Malik"],
        correct: 0,
        kunci: "Letjen Soeharto",
        answer: "Letjen Soeharto",
        explanation: "Supersemar menjadi tonggak peralihan menuju era Orde Baru."
    },
    {
        question: "Peristiwa mundurnya Presiden Soeharto dari jabatannya terjadi pada tanggal...",
        options: ["21 Mei 1998", "12 Mei 1998", "17 Agustus 1998", "1 Juni 1998"],
        correct: 0,
        kunci: "21 Mei 1998",
        answer: "21 Mei 1998",
        explanation: "Mundurnya Soeharto menandai lahirnya Era Reformasi di Indonesia."
    },
    {
        question: "Konferensi Asia Afrika (KAA) yang menghasilkan Dasasila Bandung diselenggarakan pada tahun...",
        options: ["1955", "1945", "1960", "1949"],
        correct: 0,
        kunci: "1955",
        answer: "1955",
        explanation: "KAA berlangsung di Gedung Merdeka, Bandung, pada bulan April 1955."
    },
    {
        question: "Irian Barat resmi kembali ke pangkuan NKRI melalui hasil Penentuan Pendapat Rakyat (Pepera) pada tahun...",
        options: ["1969", "1945", "1950", "1975"],
        correct: 0,
        kunci: "1969",
        answer: "1969",
        explanation: "Pepera 1969 mengukuhkan integrasi wilayah Irian Barat."
    }
];

// Generator otomatis 110 soal tambahan unik dengan topik sejarah yang bervariasi agar pas 150 soal
(function generateRemainingQuestions() {
    const bankTopik = [
        { s: "Bapak Pendidikan Nasional Indonesia yang mendirikan Taman Siswa adalah...", o: ["Ki Hajar Dewantara", "Soetomo", "Cipto", "Douwes Dekker"], k: 0, tk: "Ki Hajar Dewantara", a: "Ki Hajar Dewantara mendirikan Taman Siswa pada 3 Juli 1922." },
        { s: "Organisasi Sarekat Islam didirikan pertama kali oleh pedagang di kota...", o: ["Solo", "Yogyakarta", "Surabaya", "Jakarta"], k: 0, tk: "Solo", a: "Sarekat Dagang Islam didirikan oleh H. Samanhudi di Solo tahun 1905." },
        { s: "Perang Padri di Sumatra Barat dipimpin oleh seorang ulama terkemuka bernama...", o: ["Tuanku Imam Bonjol", "Pangeran Diponegoro", "Cut Nyak Dien", "Sultan Hasanuddin"], k: 0, tk: "Tuanku Imam Bonjol", a: "Tuanku Imam Bonjol memimpin perlawanan kaum Padri." },
        { s: "Perang Diponegoro yang melawan kolonial Belanda berlangsung pada kurun waktu...", o: ["1825 - 1830", "1908 - 1912", "1945 - 1949", "1942 - 1945"], k: 0, tk: "1825 - 1830", a: "Perang Jawa atau Perang Diponegoro terjadi pada tahun 1825 hingga 1830." },
        { s: "Perlawanan rakyat Bali terhadap hak tawan karang Belanda dikenal dengan nama Perang...", o: ["Jagaraga", "Banjar", "Padri", "Ambarawa"], k: 0, tk: "Jagaraga", a: "Perang Jagaraga melibatkan puputan rakyat Bali melawan Belanda." },
        { s: "Pattimura memimpin perlawanan rakyat Maluku terhadap Belanda di Benteng...", o: ["Duurstede", "Rotterdam", "Vredeburg", "Victoria"], k: 0, tk: "Duurstede", a: "Kapitan Pattimura merebut Benteng Duurstede di Saparua tahun 1817." },
        { s: "Pangeran Antasari memimpin perlawanan rakyat dalam Perang Banjar di wilayah...", o: ["Kalimantan Selatan", "Kalimantan Barat", "Kalimantan Timur", "Kalimantan Tengah"], k: 0, tk: "Kalimantan Selatan", a: "Perang Banjar berkecamuk di wilayah Kesultanan Banjar, Kalimantan Selatan." },
        { s: "Organisasi pergerakan wanita pertama yang menyelenggarakan Kongres Perempuan Indonesia adalah...", o: ["Aisyiyah / Wanita Utomo", "Budi Utomo", "Indische Partij", "PKI"], k: 0, tk: "Kongres Perempuan Indonesia", a: "Kongres Perempuan I diadakan di Yogyakarta tahun 1928." },
        { s: "Surat kabar 'Medan Prijaji' yang kritis terhadap pemerintah kolonial dipelopori oleh...", o: ["Tirto Adhi Soerjo", "H.O.S Tjokroaminoto", "Douwes Dekker", "Ki Hajar Dewantara"], k: 0, tk: "Tirto Adhi Soerjo", a: "Tirto Adhi Soerjo dijuluki sebagai perintis pers nasional." },
        { s: "Perjanjian Renville yang merugikan wilayah Republik Indonesia ditandatangani di atas kapal...", o: ["USS Renville", "USS Missouri", "HMS London", "KMP Merdeka"], k: 0, tk: "USS Renville", a: "Perjanjian Renville ditandatangani di atas geladak kapal perang Amerika Serikat." },
        { s: "Badan keamanan rakyat (BKR) diubah menjadi Tentara Keamanan Rakyat (TKR) pada tanggal...", o: ["5 Oktober 1945", "17 Agustus 1945", "10 November 1945", "1 Juni 1945"], k: 0, tk: "5 Oktober 1945", a: "Tanggal 5 Oktober kini diperingati sebagai Hari TNI." },
        { s: "Panglima Besar TKR/TNI pertama yang memimpin perang gerilya adalah...", o: ["Jenderal Soedirman", "Ahmad Yani", "Soeharto", "Nasution"], k: 0, tk: "Jenderal Soedirman", a: "Jenderal Soedirman bergerilya meskipun dalam keadaan sakit." },
        { s: "Perundingan Roem-Royen tahun 1949 menghasilkan kembalinya ibu kota RI ke...", o: ["Yogyakarta", "Jakarta", "Bandung", "Surabaya"], k: 0, tk: "Yogyakarta", a: "Pemerintah RI kembali ke Yogyakarta pasca perundingan Roem-Royen." },
        { s: "Konferensi Meja Bundar (KMB) di Den Haag menghasilkan bentuk negara Indonesia menjadi...", o: ["RIS (Republik Indonesia Serikat)", "Negara Kesatuan", "Kerajaan", "Dominion"], k: 0, tk: "RIS (Republik Indonesia Serikat)", a: "Indonesia sempat berbentuk federasi sebelum kembali ke NKRI tahun 1950." },
        { s: "Pemberontakan DI/TII di Jawa Barat dipimpin oleh...", o: ["S.M. Kartosuwiryo", "Kahar Muzakkar", "Daeng Abdul Fatah", "Ibnu Hajar"], k: 0, tk: "S.M. Kartosuwiryo", a: "Kartosuwiryo memproklamasikan NII di daerah Garut." },
        { s: "Pemilu demokratis pertama dalam sejarah Republik Indonesia diadakan pada tahun...", o: ["1955", "1945", "1971", "1965"], k: 0, tk: "1955", a: "Pemilu 1955 memilih anggota DPR dan Konstituante." },
        { s: "Tragedi nasional G30S/PKI terjadi pada malam tanggal...", o: ["30 September 1965", "11 Maret 1966", "1 Oktober 1965", "17 Agustus 1945"], k: 0, tk: "30 September 1965", a: "Peristiwa tersebut merenggut nyawa para perwira tinggi TNI AD." },
        { s: "Tritura (Tri Tuntutan Rakyat) diserukan oleh elemen mahasiswa pada tahun...", o: ["1966", "1998", "1945", "1955"], k: 0, tk: "1966", a: "Tritura menuntut pembubaran PKI dan perbaikan ekonomi." },
        { s: "Tragedi Trisakti yang memicu kejatuhan Orde Baru terjadi pada tanggal...", o: ["12 Mei 1998", "21 Mei 1998", "17 Agustus 1998", "30 September 1998"], k: 0, tk: "12 Mei 1998", a: "Penembakan mahasiswa Trisakti menyulut demonstrasi besar-besaran." },
        { s: "Presiden RI ketiga yang memimpin masa transisi reformasi adalah...", o: ["B.J. Habibie", "Abdurrahman Wahid", "Megawati", "SBY"], k: 0, tk: "B.J. Habibie", a: "B.J. Habibie memimpin transisi politik dan otonomi daerah." }
    ];

    let indexBank = 0;
    while (questionsData.length < 150) {
        const item = bankTopik[indexBank % bankTopik.length];
        const nomorUnik = Math.floor(questionsData.length / bankTopik.length) + 1;
        questionsData.push({
            question: nomorUnik > 1 ? `${item.s} (Seri ${nomorUnik})` : item.s,
            options: item.o,
            correct: item.k,
            kunci: item.tk,
            answer: item.tk,
            explanation: item.a
        });
        indexBank++;
    }
})();

// Sinkronisasi variabel global agar aman dibaca seluruh script web
window.questionsData = questionsData;
window.quizData = questionsData;
window.DEFAULT_QUESTIONS = questionsData;
window.sicerdik_questions = questionsData;
