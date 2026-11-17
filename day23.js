window.ENG6_LESSONS = window.ENG6_LESSONS || {};

window.ENG6_LESSONS[23] = {
    unit: 3, // Thuộc Unit 3: My Friends
    title: "Day 23: Pronunciation /b/ and /p/",
    description: "Phân biệt cặp âm phụ âm môi-môi /b/ và /p/ (big - pig, bear - pear, buy - pie, robe - rope)",
    ipa: "/prəˌnʌnsiˈeɪʃn bɪnd ænd piː/",
    
    // Cấu hình lộ trình 7 màn hoạt động cho Day 23
    activities: [
        'grammar-intro-day23',       // Màn 1: Lý thuyết phát âm cặp âm /b/ và /p/
        'pronunciation-b-p',         // Màn 2: Phân loại âm /b/ hay /p/
        'multiple-choice',           // Màn 3: Trắc nghiệm mặt chữ từ vựng
        'matching-meaning',          // Màn 4: Nối từ & Nghĩa Tiếng Việt
        'listening',                 // Màn 5: Nghe âm thanh & chọn đáp án đúng
        'speaking',                  // Màn 6: Luyện phát âm AI chuẩn xác
        'spelling'                   // Màn 7: Kiểm tra chính tả từ vựng
    ],

    vocab: [
        { 
            id: 'd23_big', 
            en: 'big', 
            ipa: '/bɪɡ/', 
            vi: 'to / lớn (âm /b/)', 
            wrongSpells: ['biɡg', 'beeg', 'bige'] 
        },
        { 
            id: 'd23_pig', 
            en: 'pig', 
            ipa: '/pɪɡ/', 
            vi: 'con heo / lợn (âm /p/)', 
            wrongSpells: ['pigg', 'peeg', 'pyg'] 
        },
        { 
            id: 'd23_bear', 
            en: 'bear', 
            ipa: '/ber/', 
            vi: 'con gấu (âm /b/)', 
            wrongSpells: ['bare', 'behr', 'beer'] 
        },
        { 
            id: 'd23_pear', 
            en: 'pear', 
            ipa: '/per/', 
            vi: 'quả lê (âm /p/)', 
            wrongSpells: ['pare', 'pearr', 'peer'] 
        },
        { 
            id: 'd23_buy', 
            en: 'buy', 
            ipa: '/baɪ/', 
            vi: 'mua (âm /b/)', 
            wrongSpells: ['byy', 'bie', 'bui'] 
        },
        { 
            id: 'd23_pie', 
            en: 'pie', 
            ipa: '/paɪ/', 
            vi: 'bánh nướng (âm /p/)', 
            wrongSpells: ['piie', 'pye', 'piy'] 
        },
        { 
            id: 'd23_rope', 
            en: 'rope', 
            ipa: '/roʊp/', 
            vi: 'dây thừng (âm /p/)', 
            wrongSpells: ['ropp', 'roap', 'rop'] 
        }
    ]
};

window.ENG6_GAME_MODULES = window.ENG6_GAME_MODULES || {};

// MÀN 1: Lý thuyết phát âm cặp âm /b/ và /p/ (Day 23)
window.ENG6_GAME_MODULES['grammar-intro-day23'] = {
    title: 'Màn 1: Lý Thuyết - Phát Âm /b/ và /p/',
    render(ctx) {
        ctx.container.innerHTML = `
            <div class="space-y-4">
                <div class="text-center">
                    <span class="px-3 py-1 bg-pink-100 text-pink-800 font-bold text-xs rounded-full">Unit 3: Pronunciation</span>
                    <h3 class="text-2xl font-black text-slate-800 mt-2">Phân Biệt Cặp Âm /b/ và /p/</h3>
                    <p class="text-slate-600 text-sm mt-1">Luyện tập khẩu hình miệng và độ rung của dây thanh quản!</p>
                </div>

                <div class="bg-pink-50 border-2 border-pink-200 p-4 rounded-2xl space-y-3 text-slate-700 text-sm">
                    <div class="flex items-start space-x-3">
                        <div class="w-8 h-8 rounded-full bg-pink-600 text-white font-bold flex items-center justify-center flex-shrink-0">1</div>
                        <div>
                            <strong class="text-pink-900 block font-bold">Âm hữu thanh /b/ (Voiced sound):</strong>
                            - Khẩu hình: Hai môi ngậm lại rồi bật mở ra, dây thanh quản <span class="font-bold text-rose-600">rung</span>.<br>
                            - <span class="text-slate-900 font-semibold">Ví dụ:</span> <span class="text-pink-800">big</span> (/bɪɡ/), <span class="text-pink-800">bear</span> (/ber/), <span class="text-pink-800">buy</span> (/baɪ/).
                        </div>
                    </div>
                    <div class="flex items-start space-x-3">
                        <div class="w-8 h-8 rounded-full bg-pink-600 text-white font-bold flex items-center justify-center flex-shrink-0">2</div>
                        <div>
                            <strong class="text-pink-900 block font-bold">Âm vô thanh /p/ (Voiceless sound):</strong>
                            - Khẩu hình: Hai môi ngậm lại rồi bật hơi mạnh ra ngoài, dây thanh quản <span class="font-bold text-rose-600">không rung</span>.<br>
                            - <span class="text-slate-900 font-semibold">Ví dụ:</span> <span class="text-pink-800">pig</span> (/pɪɡ/), <span class="text-pink-800">pear</span> (/per/), <span class="text-pink-800">pie</span> (/paɪ/), <span class="text-pink-800">rope</span> (/roʊp/).
                        </div>
                    </div>
                </div>

                <div class="text-center pt-2">
                    <button onclick="playBtnSound(); completeLevel()" class="px-8 py-3.5 bg-gradient-to-r from-pink-600 to-rose-600 text-white font-extrabold rounded-2xl shadow-lg hover:opacity-95 transition-all text-base">
                        Đã hiểu quy tắc, vào luyện tập ngay! <i class="fa-solid fa-arrow-right ml-2"></i>
                    </button>
                </div>
            </div>
        `;
    }
};

// MÀN 2: Phân loại âm /b/ hay /p/ (Pronunciation Practice Module)
window.ENG6_GAME_MODULES['pronunciation-b-p'] = {
    title: 'Màn 2: Phân Loại Âm /b/ hay /p/',
    render(ctx) {
        window.day23PronIndex = window.day23PronIndex || 0;
        const questions = [
            { word: "big (/bɪɡ/)", correctSound: "/b/" },
            { word: "pig (/pɪɡ/)", correctSound: "/p/" },
            { word: "bear (/ber/)", correctSound: "/b/" },
            { word: "pear (/per/)", correctSound: "/p/" },
            { word: "buy (/baɪ/)", correctSound: "/b/" },
            { word: "pie (/paɪ/)", correctSound: "/p/" },
            { word: "rope (/roʊp/)", correctSound: "/p/" }
        ];

        if (window.day23PronIndex >= questions.length) {
            window.day23PronIndex = 0;
            completeLevel();
            return;
        }

        const currQ = questions[window.day23PronIndex];

        ctx.container.innerHTML = `
            <div class="text-center space-y-4">
                <div class="flex justify-between items-center mb-2">
                    <span class="text-xs font-bold text-pink-600 bg-pink-50 px-2.5 py-1 rounded-md">Câu ${window.day23PronIndex + 1} / ${questions.length}</span>
                    <span class="txt-vi text-xs text-slate-500">Chọn âm phát đầu đúng</span>
                </div>

                <div class="p-6 bg-pink-50 border-2 border-pink-200 rounded-2xl">
                    <h3 class="text-2xl font-black text-pink-900 mb-2">${currQ.word}</h3>
                    <p class="text-xs text-slate-500">Từ này bắt đầu bằng âm phụ âm nào?</p>
                </div>

                <div class="grid grid-cols-2 gap-4 max-w-sm mx-auto">
                    <button onclick="checkDay23PronAnswer('/b/', '${currQ.correctSound}', this)" class="p-5 rounded-2xl border-2 border-slate-200 bg-white hover:border-pink-500 hover:bg-pink-50 font-black text-2xl text-slate-800 shadow-sm transition-all">
                        /b/
                    </button>
                    <button onclick="checkDay23PronAnswer('/p/', '${currQ.correctSound}', this)" class="p-5 rounded-2xl border-2 border-slate-200 bg-white hover:border-pink-500 hover:bg-pink-50 font-black text-2xl text-slate-800 shadow-sm transition-all">
                        /p/
                    </button>
                </div>
            </div>
        `;
    }
};

window.checkDay23PronAnswer = function(selected, correct, btnElem) {
    playBtnSound();
    if (selected === correct) {
        btnElem.className = "p-5 rounded-2xl border-2 border-emerald-500 bg-emerald-50 font-black text-2xl text-emerald-800 shadow-md";
        playSound('correct');
        window.day23PronIndex++;
        setTimeout(() => { loadLevel(currentLevel); }, 600);
    } else {
        btnElem.className = "p-5 rounded-2xl border-2 border-rose-500 bg-rose-50 font-black text-2xl text-rose-800 card-shake shadow-md";
        handleWrongAnswer();
    }
};