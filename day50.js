window.ENG6_LESSONS = window.ENG6_LESSONS || {};

window.ENG6_LESSONS[50] = {
    unit: 6, // Thuộc Unit 6: Our Tet Holiday
    title: "Day 50: Pronunciation /s/ and /ʃ/",
    description: "Phân biệt phụ âm /s/ và /ʃ/ trong ngữ cảnh ngày Tết (shopping - spring, special - wish)",
    ipa: "/prəˌnʌnsiˈeɪʃn aɪnd ʃiː/",
    
    // Cấu hình lộ trình 7 màn hoạt động cho Day 50
    activities: [
        'grammar-intro-day50',       // Màn 1: Lý thuyết phát âm phụ âm /s/ và /ʃ/
        'pronunciation-s-sh',        // Màn 2: Phân loại âm /s/ hay /ʃ/
        'multiple-choice',           // Màn 3: Trắc nghiệm mặt chữ từ vựng
        'matching-meaning',          // Màn 4: Nối từ & Nghĩa Tiếng Việt
        'listening',                 // Màn 5: Nghe âm thanh & chọn đáp án đúng
        'speaking',                  // Màn 6: Luyện phát âm AI chuẩn xác
        'spelling'                   // Màn 7: Kiểm tra chính tả từ vựng
    ],

    vocab: [
        { 
            id: 'd50_shopping', 
            en: 'shopping', 
            ipa: '/ˈʃɑːpɪŋ/', 
            vi: 'mua sắm (chứa âm /ʃ/[cite: 10])', 
            wrongSpells: ['soping', 'shoping', 'shoppin'] 
        },
        { 
            id: 'd50_spring', 
            en: 'spring', 
            ipa: '/sprɪŋ/', 
            vi: 'mùa xuân (chứa âm /s/[cite: 10])', 
            wrongSpells: ['shpring', 'sprin', 'springe'] 
        },
        { 
            id: 'd50_special', 
            en: 'special', 
            ipa: '/ˈspeʃl/', 
            vi: 'đặc biệt (chứa âm /ʃ/[cite: 10])', 
            wrongSpells: ['spesial', 'speckal', 'speciel'] 
        },
        { 
            id: 'd50_wish', 
            en: 'wish', 
            ipa: '/wɪʃ/', 
            vi: 'điều ước / ước (chứa âm /ʃ/[cite: 10])', 
            wrongSpells: ['wiss', 'wih', 'wishh'] 
        },
        { 
            id: 'd50_celebrate', 
            en: 'celebrate', 
            ipa: '/ˈselbrɪt/', 
            vi: 'kỷ niệm / đón mừng (chứa âm /s/[cite: 10])', 
            wrongSpells: ['celebate', 'selbrate', 'celebrat'] 
        },
        { 
            id: 'd50_slice', 
            en: 'slice', 
            ipa: '/slaɪs/', 
            vi: 'miếng / lát (chứa âm /s/[cite: 10])', 
            wrongSpells: ['shlice', 'slise', 'slic'] 
        }
    ]
};

window.ENG6_GAME_MODULES = window.ENG6_GAME_MODULES || {};

// MÀN 1: Lý thuyết phát âm phụ âm /s/ và /ʃ/ (Day 50)
window.ENG6_GAME_MODULES['grammar-intro-day50'] = {
    title: 'Màn 1: Lý Thuyết - Phụ Âm /s/ và /ʃ/',
    render(ctx) {
        ctx.container.innerHTML = `
            <div class="space-y-4">
                <div class="text-center">
                    <span class="px-3 py-1 bg-amber-100 text-amber-800 font-bold text-xs rounded-full">Unit 6: Pronunciation</span>
                    <h3 class="text-2xl font-black text-slate-800 mt-2">Phân Biệt Phụ Âm /s/ và /ʃ/</h3>
                    <p class="text-slate-600 text-sm mt-1">Luyện tập khẩu hình miệng và luồng hơi khi phát âm hai âm này trong dịp Tết!</p>
                </div>

                <div class="bg-amber-50 border-2 border-amber-200 p-4 rounded-2xl space-y-3 text-slate-700 text-sm">
                    <div class="flex items-start space-x-3">
                        <div class="w-8 h-8 rounded-full bg-amber-600 text-white font-bold flex items-center justify-center flex-shrink-0">1</div>
                        <div>
                            <strong class="text-amber-900 block font-bold">Phụ âm /s/ (Ví dụ: spring[cite: 10], celebrate[cite: 10]):</strong>
                            - Khẩu hình: Đặt đầu lưỡi gần sát lợi hàm trên, đẩy luồng hơi nhẹ qua kẽ răng, môi không chụm lại.<br>
                            - <span class="text-slate-900 font-semibold">Ví dụ:</span> <span class="text-amber-800">spring</span> (/sprɪŋ/[cite: 10]), <span class="text-amber-800">celebrate</span> (/ˈselbrɪt/[cite: 10]).
                        </div>
                    </div>
                    <div class="flex items-start space-x-3">
                        <div class="w-8 h-8 rounded-full bg-amber-600 text-white font-bold flex items-center justify-center flex-shrink-0">2</div>
                        <div>
                            <strong class="text-amber-900 block font-bold">Phụ âm /ʃ/ (Ví dụ: shopping[cite: 10], wish[cite: 10]):</strong>
                            - Khẩu hình: Đẩy môi ra phía trước hơi tròn lại, đưa lưỡi gần vòm họng trên và đẩy mạnh hơi ra ngoài.<br>
                            - <span class="text-slate-900 font-semibold">Ví dụ:</span> <span class="text-amber-800">shopping</span> (/ˈʃɑːpɪŋ/[cite: 10]), <span class="text-amber-800">wish</span> (/wɪʃ/[cite: 10]).
                        </div>
                    </div>
                </div>

                <div class="text-center pt-2">
                    <button onclick="playBtnSound(); completeLevel()" class="px-8 py-3.5 bg-gradient-to-r from-amber-600 to-orange-600 text-white font-extrabold rounded-2xl shadow-lg hover:opacity-95 transition-all text-base">
                        Đã hiểu quy tắc, vào luyện tập ngay! <i class="fa-solid fa-arrow-right ml-2"></i>
                    </button>
                </div>
            </div>
        `;
    }
};

// MÀN 2: Phân loại âm /s/ hay /ʃ/ (Pronunciation Practice Module)
window.ENG6_GAME_MODULES['pronunciation-s-sh'] = {
    title: 'Màn 2: Phân Loại Âm /s/ hay /ʃ/',
    render(ctx) {
        window.day50PronIndex = window.day50PronIndex || 0;
        const questions = [
            { word: "shopping (/ˈʃɑːpɪŋ/)", correctSound: "/ʃ/" },
            { word: "spring (/sprɪŋ/)", correctSound: "/s/" },
            { word: "special (/ˈspeʃl/)", correctSound: "/ʃ/" },
            { word: "wish (/wɪʃ/)", correctSound: "/ʃ/" },
            { word: "celebrate (/ˈselbrɪt/)", correctSound: "/s/" },
            { word: "slice (/slaɪs/)", correctSound: "/s/" }
        ];

        if (window.day50PronIndex >= questions.length) {
            window.day50PronIndex = 0;
            completeLevel();
            return;
        }

        const currQ = questions[window.day50PronIndex];

        ctx.container.innerHTML = `
            <div class="text-center space-y-4">
                <div class="flex justify-between items-center mb-2">
                    <span class="text-xs font-bold text-amber-700 bg-amber-50 px-2.5 py-1 rounded-md">Câu ${window.day50PronIndex + 1} / ${questions.length}</span>
                    <span class="txt-vi text-xs text-slate-500">Xác định phụ âm trong từ</span>
                </div>

                <div class="p-6 bg-amber-50 border-2 border-amber-200 rounded-2xl">
                    <h3 class="text-2xl font-black text-amber-900 mb-2">${currQ.word}</h3>
                    <p class="text-xs text-slate-500">Từ này chứa phụ âm /s/ hay /ʃ/ (sh)?</p>
                </div>

                <div class="grid grid-cols-2 gap-4 max-w-sm mx-auto">
                    <button onclick="checkDay50PronAnswer('/s/', '${currQ.correctSound}', this)" class="p-5 rounded-2xl border-2 border-slate-200 bg-white hover:border-amber-500 hover:bg-amber-50 font-black text-2xl text-slate-800 shadow-sm transition-all">
                        /s/ (như spring)
                    </button>
                    <button onclick="checkDay50PronAnswer('/ʃ/', '${currQ.correctSound}', this)" class="p-5 rounded-2xl border-2 border-slate-200 bg-white hover:border-amber-500 hover:bg-amber-50 font-black text-2xl text-slate-800 shadow-sm transition-all">
                        /ʃ/ (như shopping)
                    </button>
                </div>
            </div>
        `;
    }
};

window.checkDay50PronAnswer = function(selected, correct, btnElem) {
    playBtnSound();
    if (selected === correct) {
        btnElem.className = "p-5 rounded-2xl border-2 border-amber-500 bg-amber-50 font-black text-2xl text-amber-800 shadow-md";
        playSound('correct');
        window.day50PronIndex++;
        setTimeout(() => { loadLevel(currentLevel); }, 600);
    } else {
        btnElem.className = "p-5 rounded-2xl border-2 border-rose-500 bg-rose-50 font-black text-2xl text-rose-800 card-shake shadow-md";
        handleWrongAnswer();
    }
};