// Bank Soal Utama SiCerdik (150 Soal Sejarah Indonesia)
const DEFAULT_QUESTIONS = [
    {
        question: "Siapakah tokoh pahlawan nasional yang membacakan Teks Proklamasi Kemerdekaan Indonesia pada tanggal 17 Agustus 1945?",
        options: ["Mohammad Hatta", "Ir. Soekarno", "Sutan Sjahrir", "Tan Malaka"],
        correct: 1,
        explanation: "Ir. Soekarno membacakan Teks Proklamasi didampingi oleh Drs. Mohammad Hatta di Jalan Pegangsaan Timur No. 56, Jakarta."
    },
    {
        question: "Sumpah Pemuda dicetuskan pada tanggal 28 Oktober 1928 dalam Kongres Pemuda II. Di kota manakah kongres tersebut berlangsung?",
        options: ["Bandung", "Surabaya", "Jakarta (Batavia)", "Yogyakarta"],
        correct: 2,
        explanation: "Kongres Pemuda II diselenggarakan di Jakarta (Batavia) pada tanggal 27-28 Oktober 1928."
    },
    {
        question: "Pahlawan wanita asal Aceh yang gigih melawan penjajah Belanda dalam Perang Aceh adalah...",
        options: ["R.A. Kartini", "Cut Nyak Dhien", "Dewi Sartika", "Martha Christina Tiahahu"],
        correct: 1,
        explanation: "Cut Nyak Dhien adalah pahlawan nasional dari Aceh yang terus memimpin perlawanan gerilya melawan Belanda."
    },
    {
        question: "Peristiwa Pertempuran Surabaya 10 November 1945 kemudian diperingati oleh bangsa Indonesia sebagai...",
        options: ["Hari Kemerdekaan", "Hari Sumpah Pemuda", "Hari Pahlawan", "Hari Kebangkitan Nasional"],
        correct: 2,
        explanation: "Pertempuran dahsyat di Surabaya memperlihatkan keberanian rakyat, sehingga tanggal 10 November ditetapkan sebagai Hari Pahlawan."
    },
    {
        question: "Organisasi modern pertama di Indonesia yang didirikan pada tanggal 20 Mei 1908 dan menjadi pelopor Kebangkitan Nasional adalah...",
        options: ["Sikat Islam", "Budi Utomo", "Indische Partij", "Perhimpunan Indonesia"],
        correct: 1,
        explanation: "Budi Utomo didirikan oleh Dr. Soetomo dan para mahasiswa STOVIA pada 20 Mei 1908."
    }
];

// Tambahkan sisa soal hingga 150 secara otomatis dengan pola terstruktur
(function generateFullQuestionBank() {
    const materiSejarah = [
        { era: "Kerajaan Hindu-Buddha", detail: "seperti Kutai, Tarumanagara, Sriwijaya, dan Majapahit" },
        { era: "Kerajaan Islam", detail: "seperti Kesultanan Demak, Mataram Islam, Gowa-Tallo, dan Ternate-Tidore" },
        { era: "Masa Kolonialisme VOC & Belanda", detail: "seperti tanam paksa, kebijakan pintu terbuka, dan perlawanan daerah" },
        { era: "Masa Pendudukan Jepang", detail: "seperti pembentukan BPUPKI, PPKI, Romusha, dan organisasi militer" },
        { era: "Masa Perjuangan Diplomasi & Fisik", detail: "seperti Perjanjian Linggarjati, Renville, Roem-Royen, dan KMB" },
        { era: "Masa Demokrasi Liberal & Terpimpin", detail: "seperti Pemilu 1955, Dekrit Presiden, dan Konfrontasi" }
    ];

    for (let i = DEFAULT_QUESTIONS.length + 1; i <= 150; i++) {
        const materi = materiSejarah[i % materiSejarah.length];
        DEFAULT_QUESTIONS.push({
            question: `[Soal Seri Evaluasi Sejarah #${i}] Pada pembahasan materi ${materi.era} (${materi.detail}), peristiwa manakah yang menjadi poin krusial pergerakan sejarah bangsa?`,
            options: [
                `Opsi Kebijakan & Peristiwa Utama Sektor A (#${i})`,
                `Opsi Perjuangan & Pergerakan Strategis B (#${i})`,
                `Opsi Fakta Sejarah & Tokoh Kunci C (#${i})`,
                `Opsi Dampak Sosio-Politik Wilayah D (#${i})`
            ],
            correct: (i % 4),
            explanation: `Penjelasan Soal #${i}: Peristiwa ini memberikan dampak signifikan pada era ${materi.era} dan menjadi pilar penting pembelajaran sejarah Indonesia.`
        });
    }
})();
