window.ENG6_LESSONS = window.ENG6_LESSONS || {};

window.ENG6_LESSONS[17] = {
    unit: 2,
    title: "Day 17: Final Sounds /s/ & /z/ & Extra Vocab",
    description: "Luyện phát âm âm cuối /s/, /z/ và bổ sung từ vựng đồ dùng (toilet, shower, cooker, TV, fan)",
    ipa: "/ˈfaɪnl saʊndz /s/ ænd /z//",
    
    activities: [
        'grammar-intro-day17',
        'pronunciation-s-z',
        'multiple-choice',
        'matching-meaning',
        'listening',
        'speaking',
        'spelling'
    ],

    vocab: [
        { id: 'd17_toilet', en: 'toilet', ipa: '/ˈtɔɪlət/', vi: 'bồn cầu / nhà vệ sinh', wrongSpells: ['toilette', 'tolet', 'toylet'] },
        { id: 'd17_shower', en: 'shower', ipa: '/ˈʃaʊər/', vi: 'vòi hoa sen', wrongSpells: ['showr', 'schower', 'showre'] },
        { id: 'd17_cooker', en: 'cooker', ipa: '/ˈkʊkər/', vi: 'bếp nấu', wrongSpells: ['cookar', 'cooker', 'kooker'] },
        { id: 'd17_tv', en: 'television', ipa: '/ˈtelɪvɪʒn/', vi: 'ti vi', wrongSpells: ['televisionn', 'telivision', 'televison'] },
        { id: 'd17_fan', en: 'fan', ipa: '/fæn/', vi: 'quạt', wrongSpells: ['fann', 'faen', 'fane'] }
    ]
};

window.ENG6_GAME_MODULES = window.ENG6_GAME_MODULES || {};

window.ENG6_GAME_MODULES['grammar-intro-day17'] = {
    title: 'Màn 1: Lý Thuyết - Phân Biệt Âm Cuối /s/ và /z/',
    render(ctx) {
        ctx.container.innerHTML = `
            <div class="space-y-4">
                <div class="text-center">
                    <span class="px-3 py-1 bg-indigo-100 text-indigo-800 font-bold text-xs rounded-full">Unit 2: Phát Âm Chuẩn</span>
                    <h3 class="text-2xl font-black text-slate-800 mt-2">Âm Cuối (Final Sounds) /s/ và /z/</h3>
                    <p class="text-slate-600 text-sm mt-1">Luyện phát âm âm đuôi để nói tiếng Anh tự nhiên như người bản xứ!</p>
                </div>

                <div class="bg-indigo-50 border-2 border-indigo-200 p-4 rounded-2xl space-y-3 text-slate-700 text-sm">
                    <div class="flex items-start space-x-3">
                        <div class="w-8 h-8 rounded-full bg-indigo-600 text-white font-bold flex items-center justify-center flex-shrink-0">1</div>
                        <div>
                            <strong class="text-indigo-900 block font-bold">Phát âm /s/ (Âm xì xát nhẹ)</strong>
                            Thường xuất hiện khi từ kết thúc bằng các âm vô thanh như /p/, /k/, /t/, /f/...<br>
                            <span class="text-xs text-indigo-800 font-semibold">👉 Ví dụ: lamps /læmps/, sinks /sɪŋks/, flats /flæts/, toilets /ˈtɔɪləts/</span>
                        </div>
                    </div>
                    <div class="flex items-start space-x-3">
                        <div class="w-8 h-8 rounded-full bg-indigo-600 text-white font-bold flex items-center justify-center flex-shrink-0">2</div>
                        <div>
                            <strong class="text-indigo-900 block font-bold">Phát âm /z/ (Âm rung dây thanh quản)</strong>
                            Thường xuất hiện khi từ kết thúc bằng nguyên âm hoặc phụ âm hữu thanh.<br>
                            <span class="text-xs text-indigo-800 font-semibold">👉 Ví dụ: cupboards /ˈkʌbədz/, sofas /ˈsəʊfəz/, kitchens /ˈkɪtʃɪnz/, rooms /ruːmz/</span>
                        </div>
                    </div>
                </div>

                <div class="text-center pt-2">
                    <button onclick="playBtnSound(); completeLevel()" class="px-8 py-3.5 bg-gradient-to-r from-indigo-600 to-blue-600 text-white font-extrabold rounded-2xl shadow-lg hover:opacity-95 transition-all text-base">
                        Đã hiểu quy tắc, luyện tập ngay! <i class="fa-solid fa-arrow-right ml-2"></i>
                    </button>
                </div>
            </div>
        `;
    }
};

window.ENG6_GAME_MODULES['pronunciation-s-z'] = {
    title: 'Màn 2: Phân Loại Phát Âm /s/ hay /z/',
    render(ctx) {
        window.day17PronIndex = window.day17PronIndex || 0;
        const questions = [
            { word: "lamps (/læmps/)", correctSound: "/s/" },
            { word: "cupboards (/ˈkʌbədz/)", correctSound: "/z/" },
            { word: "sinks (/sɪŋks/)", correctSound: "/s/" },
            { word: "sofas (/ˈsəʊfəz/)", correctSound: "/z/" },
            { word: "flats (/flæts/)", correctSound: "/s/" },
            { word: "kitchens (/ˈkɪtʃɪnz/)", correctSound: "/z/" },
            { word: "toilets (/ˈtɔɪləts/)", correctSound: "/s/" },
            { word: "rooms (/ruːmz/)", correctSound: "/z/" }
        ];

        if (window.day17PronIndex >= questions.length) {
            window.day17PronIndex = 0;
            completeLevel();
            return;
        }

        const currQ = questions[window.day17PronIndex];

        ctx.container.innerHTML = `
            <div class="text-center space-y-4">
                <div class="flex justify-between items-center mb-2">
                    <span class="text-xs font-bold text-indigo-600 bg-indigo-50 px-2.5 py-1 rounded-md">Câu ${window.day17PronIndex + 1} / ${questions.length}</span>
                    <span class="txt-vi text-xs text-slate-500">Chọn âm đuôi đúng</span>
                </div>

                <div class="p-6 bg-indigo-50 border-2 border-indigo-200 rounded-2xl">
                    <h3 class="text-2xl font-black text-indigo-900 mb-2">${currQ.word}</h3>
                    <p class="text-xs text-slate-500">Từ này có âm cuối đuôi -s phát âm là gì?</p>
                </div>

                <div class="grid grid-cols-2 gap-4 max-w-sm mx-auto">
                    <button onclick="checkDay17PronAnswer('/s/', '${currQ.correctSound}', this)" class="p-5 rounded-2xl border-2 border-slate-200 bg-white hover:border-indigo-500 hover:bg-indigo-50 font-black text-2xl text-slate-800 shadow-sm transition-all">
                        /s/
                    </button>
                    <button onclick="checkDay17PronAnswer('/z/', '${currQ.correctSound}', this)" class="p-5 rounded-2xl border-2 border-slate-200 bg-white hover:border-indigo-500 hover:bg-indigo-50 font-black text-2xl text-slate-800 shadow-sm transition-all">
                        /z/
                    </button>
                </div>
            </div>
        `;
    }
};

window.checkDay17PronAnswer = function(selected, correct, btnElem) {
    playBtnSound();
    if (selected === correct) {
        btnElem.className = "p-5 rounded-2xl border-2 border-emerald-500 bg-emerald-50 font-black text-2xl text-emerald-800 shadow-md";
        playSound('correct');
        window.day17PronIndex++;
        setTimeout(() => { loadLevel(currentLevel); }, 600);
    } else {
        btnElem.className = "p-5 rounded-2xl border-2 border-rose-500 bg-rose-50 font-black text-2xl text-rose-800 card-shake shadow-md";
        handleWrongAnswer();
    }
};