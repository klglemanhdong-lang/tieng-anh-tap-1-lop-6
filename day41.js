window.ENG6_LESSONS = window.ENG6_LESSONS || {};

window.ENG6_LESSONS[41] = {
    unit: 5, // Thuộc Unit 5: Natural Wonders of Viet Nam
    title: "Day 41: Pronunciation /t/ and /d/",
    description: "Phân biệt phụ âm vô thanh /t/ và hữu thanh /d/ (mountain - wonder, waterfall - island, desert - guide)",
    ipa: "/prəˌnʌnsiˈeɪʃn aɪnd diː/",
    
    // Cấu hình lộ trình 7 màn hoạt động cho Day 41
    activities: [
        'grammar-intro-day41',       // Màn 1: Lý thuyết phát âm phụ âm /t/ và /d/
        'pronunciation-t-d',         // Màn 2: Phân loại âm /t/ hay /d/
        'multiple-choice',           // Màn 3: Trắc nghiệm mặt chữ từ vựng
        'matching-meaning',          // Màn 4: Nối từ & Nghĩa Tiếng Việt
        'listening',                 // Màn 5: Nghe âm thanh & chọn đáp án đúng
        'speaking',                  // Màn 6: Luyện phát âm AI chuẩn xác
        'spelling'                   // Màn 7: Kiểm tra chính tả từ vựng
    ],

    vocab: [
        { 
            id: 'd41_mountain', 
            en: 'mountain', 
            ipa: '/ˈmaʊntn/', 
            vi: 'núi (chứa âm vô thanh /t/)', 
            wrongSpells: ['mountin', 'mountein', 'mounten'] 
        },
        { 
            id: 'd41_wonder', 
            en: 'wonder', 
            ipa: '/ˈwʌndər/', 
            vi: 'kỳ quan (chứa âm hữu thanh /d/)', 
            wrongSpells: ['wondar', 'wondir', 'wonderr'] 
        },
        { 
            id: 'd41_waterfall', 
            en: 'waterfall', 
            ipa: '/ˈwɔːtərfɔːl/', 
            vi: 'thác nước (chứa âm /t/)', 
            wrongSpells: ['waterfaul', 'watarfall', 'water-fall'] 
        },
        { 
            id: 'd41_island', 
            en: 'island', 
            ipa: '/ˈaɪlənd/', 
            vi: 'hòn đảo (chứa âm hữu thanh /d/)', 
            wrongSpells: ['ailand', 'islands', 'islant'] 
        },
        { 
            id: 'd41_desert', 
            en: 'desert', 
            ipa: '/ˈdezərt/', 
            vi: 'sa mạc (chứa âm /t/)', 
            wrongSpells: ['dessert', 'desurt', 'dezert'] 
        },
        { 
            id: 'd41_guide', 
            en: 'guide', 
            ipa: '/ɡaɪd/', 
            vi: 'hướng dẫn / hướng dẫn viên (chứa âm /d/)', 
            wrongSpells: ['gyde', 'guyd', 'guidee'] 
        }
    ]
};

window.ENG6_GAME_MODULES = window.ENG6_GAME_MODULES || {};

// MÀN 1: Lý thuyết phát âm phụ âm /t/ và /d/ (Day 41)
window.ENG6_GAME_MODULES['grammar-intro-day41'] = {
    title: 'Màn 1: Lý Thuyết - Phụ Âm /t/ và /d/',
    render(ctx) {
        ctx.container.innerHTML = `
            <div class="space-y-4">
                <div class="text-center">
                    <span class="px-3 py-1 bg-teal-100 text-teal-800 font-bold text-xs rounded-full">Unit 5: Pronunciation</span>
                    <h3 class="text-2xl font-black text-slate-800 mt-2">Phân Biệt Phụ Âm /t/ và /d/</h3>
                    <p class="text-slate-600 text-sm mt-1">Luyện tập độ rung của dây thanh quản khi phát âm phụ âm vô thanh và hữu thanh!</p>
                </div>

                <div class="bg-teal-50 border-2 border-teal-200 p-4 rounded-2xl space-y-3 text-slate-700 text-sm">
                    <div class="flex items-start space-x-3">
                        <div class="w-8 h-8 rounded-full bg-teal-600 text-white font-bold flex items-center justify-center flex-shrink-0">1</div>
                        <div>
                            <strong class="text-teal-900 block font-bold">Phụ âm vô thanh /t/ (Voiceless sound):</strong>
                            - Khẩu hình: Đặt đầu lưỡi chạm vào lợi hàm trên, bật mạnh hơi ra ngoài, dây thanh quản không rung.<br>
                            - <span class="text-slate-900 font-semibold">Ví dụ:</span> <span class="text-teal-800">mountain</span> (/ˈmaʊntn/[cite: 10]), <span class="text-teal-800">waterfall</span> (/ˈwɔːtərfɔːl/[cite: 10]), <span class="text-teal-800">desert</span> (/ˈdezərt/[cite: 10]).
                        </div>
                    </div>
                    <div class="flex items-start space-x-3">
                        <div class="w-8 h-8 rounded-full bg-teal-600 text-white font-bold flex items-center justify-center flex-shrink-0">2</div>
                        <div>
                            <strong class="text-teal-900 block font-bold">Phụ âm hữu thanh /d/ (Voiced sound):</strong>
                            - Khẩu hình: Vị trí lưỡi giống âm /t/ nhưng dây thanh quản phải rung khi phát âm.<br>
                            - <span class="text-slate-900 font-semibold">Ví dụ:</span> <span class="text-teal-800">wonder</span> (/ˈwʌndər/[cite: 10]), <span class="text-teal-800">island</span> (/ˈaɪlənd/[cite: 10]), <span class="text-teal-800">guide</span> (/ɡaɪd/[cite: 10]).
                        </div>
                    </div>
                </div>

                <div class="text-center pt-2">
                    <button onclick="playBtnSound(); completeLevel()" class="px-8 py-3.5 bg-gradient-to-r from-teal-600 to-cyan-600 text-white font-extrabold rounded-2xl shadow-lg hover:opacity-95 transition-all text-base">
                        Đã hiểu quy tắc, vào luyện tập ngay! <i class="fa-solid fa-arrow-right ml-2"></i>
                    </button>
                </div>
            </div>
        `;
    }
};

// MÀN 2: Phân loại âm /t/ hay /d/ (Pronunciation Practice Module)
window.ENG6_GAME_MODULES['pronunciation-t-d'] = {
    title: 'Màn 2: Phân Loại Âm /t/ hay /d/',
    render(ctx) {
        window.day41PronIndex = window.day41PronIndex || 0;
        const questions = [
            { word: "mountain (/ˈmaʊntn/)", correctSound: "/t/" },
            { word: "wonder (/ˈwʌndər/)", correctSound: "/d/" },
            { word: "waterfall (/ˈwɔːtərfɔːl/)", correctSound: "/t/" },
            { word: "island (/ˈaɪlənd/)", correctSound: "/d/" },
            { word: "desert (/ˈdezərt/)", correctSound: "/t/" },
            { word: "guide (/ɡaɪd/)", correctSound: "/d/" }
        ];

        if (window.day41PronIndex >= questions.length) {
            window.day41PronIndex = 0;
            completeLevel();
            return;
        }

        const currQ = questions[window.day41PronIndex];

        ctx.container.innerHTML = `
            <div class="text-center space-y-4">
                <div class="flex justify-between items-center mb-2">
                    <span class="text-xs font-bold text-teal-700 bg-teal-50 px-2.5 py-1 rounded-md">Câu ${window.day41PronIndex + 1} / ${questions.length}</span>
                    <span class="txt-vi text-xs text-slate-500">Xác định phụ âm trong từ</span>
                </div>

                <div class="p-6 bg-teal-50 border-2 border-teal-200 rounded-2xl">
                    <h3 class="text-2xl font-black text-teal-900 mb-2">${currQ.word}</h3>
                    <p class="text-xs text-slate-500">Từ này chứa phụ âm nào trong hai âm sau đây?</p>
                </div>

                <div class="grid grid-cols-2 gap-4 max-w-sm mx-auto">
                    <button onclick="checkDay41PronAnswer('/t/', '${currQ.correctSound}', this)" class="p-5 rounded-2xl border-2 border-slate-200 bg-white hover:border-teal-500 hover:bg-teal-50 font-black text-2xl text-slate-800 shadow-sm transition-all">
                        /t/ (vô thanh)
                    </button>
                    <button onclick="checkDay41PronAnswer('/d/', '${currQ.correctSound}', this)" class="p-5 rounded-2xl border-2 border-slate-200 bg-white hover:border-teal-500 hover:bg-teal-50 font-black text-2xl text-slate-800 shadow-sm transition-all">
                        /d/ (hữu thanh)
                    </button>
                </div>
            </div>
        `;
    }
};

window.checkDay41PronAnswer = function(selected, correct, btnElem) {
    playBtnSound();
    if (selected === correct) {
        btnElem.className = "p-5 rounded-2xl border-2 border-teal-500 bg-teal-50 font-black text-2xl text-teal-800 shadow-md";
        playSound('correct');
        window.day41PronIndex++;
        setTimeout(() => { loadLevel(currentLevel); }, 600);
    } else {
        btnElem.className = "p-5 rounded-2xl border-2 border-rose-500 bg-rose-50 font-black text-2xl text-rose-800 card-shake shadow-md";
        handleWrongAnswer();
    }
};