window.ENG6_LESSONS = window.ENG6_LESSONS || {};

window.ENG6_LESSONS[31] = {
    unit: 4, // Thuộc Unit 4: My Neighbourhood
    title: "Day 31: Pronunciation /ɪ/ and /i:/",
    description: "Phân biệt nguyên âm ngắn /ɪ/ và nguyên âm dài /i:/ (noisy - clean, exciting - peaceful, expensive - cheap)",
    ipa: "/prəˌnʌnsiˈeɪʃn ɪnd iː/",
    
    // Cấu hình lộ trình 7 màn hoạt động cho Day 31
    activities: [
        'grammar-intro-day31',       // Màn 1: Lý thuyết phát âm nguyên âm /ɪ/ và /i:/
        'pronunciation-i-ee',        // Màn 2: Phân loại âm /ɪ/ hay /i:/
        'multiple-choice',           // Màn 3: Trắc nghiệm mặt chữ từ vựng
        'matching-meaning',          // Màn 4: Nối từ & Nghĩa Tiếng Việt
        'listening',                 // Màn 5: Nghe âm thanh & chọn đáp án đúng
        'speaking',                  // Màn 6: Luyện phát âm AI chuẩn xác
        'spelling'                   // Màn 7: Kiểm tra chính tả từ vựng
    ],

    vocab: [
        { 
            id: 'd31_noisy', 
            en: 'noisy', 
            ipa: '/ˈnɔɪzi/', 
            vi: 'ồn ào (chứa âm /ɪ/ ở đuôi)', 
            wrongSpells: ['noizy', 'noisey', 'noisi'] 
        },
        { 
            id: 'd31_clean', 
            en: 'clean', 
            ipa: '/kliːn/', 
            vi: 'sạch sẽ (chứa âm dài /i:/)', 
            wrongSpells: ['cleann', 'cleen', 'clain'] 
        },
        { 
            id: 'd31_exciting', 
            en: 'exciting', 
            ipa: '/ɪkˈsaɪtɪŋ/', 
            vi: 'thú vị (chứa âm ngắn /ɪ/ ở đầu)', 
            wrongSpells: ['exiting', 'excitingg', 'exceiting'] 
        },
        { 
            id: 'd31_peaceful', 
            en: 'peaceful', 
            ipa: '/ˈpiːsfl/', 
            vi: 'yên bình (chứa âm dài /i:/)', 
            wrongSpells: ['peaseful', 'peacful', 'peacefull'] 
        },
        { 
            id: 'd31_expensive', 
            en: 'expensive', 
            ipa: '/ɪkˈspensɪv/', 
            vi: 'đắt đỏ (chứa âm ngắn /ɪ/)', 
            wrongSpells: ['expensiv', 'expencive', 'expensivee'] 
        },
        { 
            id: 'd31_cheap', 
            en: 'cheap', 
            ipa: '/tʃiːp/', 
            vi: 'rẻ (chứa âm dài /i:/)', 
            wrongSpells: ['cheep', 'cheapp', 'chiap'] 
        }
    ]
};

window.ENG6_GAME_MODULES = window.ENG6_GAME_MODULES || {};

// MÀN 1: Lý thuyết phát âm nguyên âm /ɪ/ và /i:/ (Day 31)
window.ENG6_GAME_MODULES['grammar-intro-day31'] = {
    title: 'Màn 1: Lý Thuyết - Nguyên Âm /ɪ/ và /i:/',
    render(ctx) {
        ctx.container.innerHTML = `
            <div class="space-y-4">
                <div class="text-center">
                    <span class="px-3 py-1 bg-emerald-100 text-emerald-800 font-bold text-xs rounded-full">Unit 4: Pronunciation</span>
                    <h3 class="text-2xl font-black text-slate-800 mt-2">Phân Biệt Nguyên Âm /ɪ/ và /i:/</h3>
                    <p class="text-slate-600 text-sm mt-1">Luyện tập độ dài và vị trí lưỡi khi phát âm nguyên âm ngắn và dài!</p>
                </div>

                <div class="bg-emerald-50 border-2 border-emerald-200 p-4 rounded-2xl space-y-3 text-slate-700 text-sm">
                    <div class="flex items-start space-x-3">
                        <div class="w-8 h-8 rounded-full bg-emerald-600 text-white font-bold flex items-center justify-center flex-shrink-0">1</div>
                        <div>
                            <strong class="text-emerald-900 block font-bold">Nguyên âm ngắn /ɪ/ (Short sound):</strong>
                            - Khẩu hình: Phát âm nhanh, ngắn, miệng mở hờ.<br>
                            - <span class="text-slate-900 font-semibold">Ví dụ:</span> <span class="text-emerald-800">noisy</span> (/ˈnɔɪzi/[cite: 10]), <span class="text-emerald-800">exciting</span> (/ɪkˈsaɪtɪŋ/[cite: 10]), <span class="text-emerald-800">expensive</span> (/ɪkˈspensɪv/[cite: 10]).
                        </div>
                    </div>
                    <div class="flex items-start space-x-3">
                        <div class="w-8 h-8 rounded-full bg-emerald-600 text-white font-bold flex items-center justify-center flex-shrink-0">2</div>
                        <div>
                            <strong class="text-emerald-900 block font-bold">Nguyên âm dài /i:/ (Long sound):</strong>
                            - Khẩu hình: Kéo dài âm hơn, khóe miệng mở rộng sang hai bên như đang cười nhẹ.<br>
                            - <span class="text-slate-900 font-semibold">Ví dụ:</span> <span class="text-emerald-800">clean</span> (/kliːn/[cite: 10]), <span class="text-emerald-800">peaceful</span> (/ˈpiːsfl/[cite: 10]), <span class="text-emerald-800">cheap</span> (/tʃiːp/[cite: 10]).
                        </div>
                    </div>
                </div>

                <div class="text-center pt-2">
                    <button onclick="playBtnSound(); completeLevel()" class="px-8 py-3.5 bg-gradient-to-r from-emerald-600 to-teal-600 text-white font-extrabold rounded-2xl shadow-lg hover:opacity-95 transition-all text-base">
                        Đã hiểu quy tắc, vào luyện tập ngay! <i class="fa-solid fa-arrow-right ml-2"></i>
                    </button>
                </div>
            </div>
        `;
    }
};

// MÀN 2: Phân loại âm /ɪ/ hay /i:/ (Pronunciation Practice Module)
window.ENG6_GAME_MODULES['pronunciation-i-ee'] = {
    title: 'Màn 2: Phân Loại Âm /ɪ/ hay /i:/',
    render(ctx) {
        window.day31PronIndex = window.day31PronIndex || 0;
        const questions = [
            { word: "clean (/kliːn/)", correctSound: "/i:/" },
            { word: "noisy (/ˈnɔɪzi/)", correctSound: "/ɪ/" },
            { word: "peaceful (/ˈpiːsfl/)", correctSound: "/i:/" },
            { word: "exciting (/ɪkˈsaɪtɪŋ/)", correctSound: "/ɪ/" },
            { word: "cheap (/tʃiːp/)", correctSound: "/i:/" },
            { word: "expensive (/ɪkˈspensɪv/)", correctSound: "/ɪ/" }
        ];

        if (window.day31PronIndex >= questions.length) {
            window.day31PronIndex = 0;
            completeLevel();
            return;
        }

        const currQ = questions[window.day31PronIndex];

        ctx.container.innerHTML = `
            <div class="text-center space-y-4">
                <div class="flex justify-between items-center mb-2">
                    <span class="text-xs font-bold text-emerald-700 bg-emerald-50 px-2.5 py-1 rounded-md">Câu ${window.day31PronIndex + 1} / ${questions.length}</span>
                    <span class="txt-vi text-xs text-slate-500">Xác định âm chứa trong từ</span>
                </div>

                <div class="p-6 bg-emerald-50 border-2 border-emerald-200 rounded-2xl">
                    <h3 class="text-2xl font-black text-emerald-900 mb-2">${currQ.word}</h3>
                    <p class="text-xs text-slate-500">Từ này chứa nguyên âm nào trong hai âm sau đây?</p>
                </div>

                <div class="grid grid-cols-2 gap-4 max-w-sm mx-auto">
                    <button onclick="checkDay31PronAnswer('/ɪ/', '${currQ.correctSound}', this)" class="p-5 rounded-2xl border-2 border-slate-200 bg-white hover:border-emerald-500 hover:bg-emerald-50 font-black text-2xl text-slate-800 shadow-sm transition-all">
                        /ɪ/ (ngắn)
                    </button>
                    <button onclick="checkDay31PronAnswer('/i:/', '${currQ.correctSound}', this)" class="p-5 rounded-2xl border-2 border-slate-200 bg-white hover:border-emerald-500 hover:bg-emerald-50 font-black text-2xl text-slate-800 shadow-sm transition-all">
                        /i:/ (dài)
                    </button>
                </div>
            </div>
        `;
    }
};

window.checkDay31PronAnswer = function(selected, correct, btnElem) {
    playBtnSound();
    if (selected === correct) {
        btnElem.className = "p-5 rounded-2xl border-2 border-emerald-500 bg-emerald-50 font-black text-2xl text-emerald-800 shadow-md";
        playSound('correct');
        window.day31PronIndex++;
        setTimeout(() => { loadLevel(currentLevel); }, 600);
    } else {
        btnElem.className = "p-5 rounded-2xl border-2 border-rose-500 bg-rose-50 font-black text-2xl text-rose-800 card-shake shadow-md";
        handleWrongAnswer();
    }
};