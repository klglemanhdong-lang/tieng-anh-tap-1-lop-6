window.ENG6_LESSONS = window.ENG6_LESSONS || {};

window.ENG6_LESSONS[20] = {
    unit: 3, // Thuộc Unit 3: My Friends
    title: "Day 20: Appearance",
    description: "Cách miêu tả tóc, mắt, dáng người (long, short, big, small, blonde, curly, straight)",
    ipa: "/əˈpɪrəns/",
    
    // Cấu hình lộ trình 7 màn hoạt động chuẩn cho Day 20
    activities: [
        'grammar-intro-day20',           // Màn 1: Lý thuyết miêu tả ngoại hình
        'multiple-choice',                // Màn 2: Trắc nghiệm mặt chữ từ vựng
        'matching-meaning',               // Màn 3: Nối từ & Nghĩa Tiếng Việt
        'listening',                      // Màn 4: Nghe âm thanh & chọn đáp án đúng
        'matching-ipa',                   // Màn 5: Nối từ & Phiên âm IPA chuẩn
        'sentence-builder-appearance',    // Màn 6: Ghép câu miêu tả (She has long hair)
        'spelling'                        // Màn 7: Kiểm tra chính tả từ vựng
    ],

    vocab: [
        { 
            id: 'd20_long', 
            en: 'long', 
            ipa: '/lɔːŋ/', 
            vi: 'dài', 
            wrongSpells: ['longg', 'lon', 'loong'] 
        },
        { 
            id: 'd20_short', 
            en: 'short', 
            ipa: '/ʃɔːrt/', 
            vi: 'ngắn / thấp', 
            wrongSpells: ['shor', 'shortt', 'shoart'] 
        },
        { 
            id: 'd20_big', 
            en: 'big', 
            ipa: '/bɪɡ/', 
            vi: 'to / lớn', 
            wrongSpells: ['bigg', 'beeg', 'bige'] 
        },
        { 
            id: 'd20_small', 
            en: 'small', 
            ipa: '/smɔːl/', 
            vi: 'nhỏ', 
            wrongSpells: ['smal', 'smoll', 'smaul'] 
        },
        { 
            id: 'd20_blonde', 
            en: 'blonde', 
            ipa: '/blɑːnd/', 
            vi: 'vàng (tóc)', 
            wrongSpells: ['blond', 'blondu', 'blound'] 
        },
        { 
            id: 'd20_curly', 
            en: 'curly', 
            ipa: '/ˈkɜːrli/', 
            vi: 'xoăn (tóc)', 
            wrongSpells: ['curli', 'curlye', 'cuerly'] 
        },
        { 
            id: 'd20_straight', 
            en: 'straight', 
            ipa: '/streɪt/', 
            vi: 'thẳng (tóc)', 
            wrongSpells: ['strait', 'streight', 'stratet'] 
        }
    ]
};

window.ENG6_GAME_MODULES = window.ENG6_GAME_MODULES || {};

// MÀN 1: Lý thuyết miêu tả ngoại hình (Day 20)
window.ENG6_GAME_MODULES['grammar-intro-day20'] = {
    title: 'Màn 1: Lý Thuyết - Miêu Tả Ngoại Hình (Appearance)',
    render(ctx) {
        ctx.container.innerHTML = `
            <div class="space-y-4">
                <div class="text-center">
                    <span class="px-3 py-1 bg-pink-100 text-pink-800 font-bold text-xs rounded-full">Unit 3: My Friends</span>
                    <h3 class="text-2xl font-black text-slate-800 mt-2">Cách Miêu Tả Ngoại Hình</h3>
                    <p class="text-slate-600 text-sm mt-1">Học các tính từ chỉ hình dáng, mái tóc và đôi mắt bằng tiếng Anh!</p>
                </div>

                <div class="bg-pink-50 border-2 border-pink-200 p-4 rounded-2xl space-y-3 text-slate-700 text-sm">
                    <div class="flex items-start space-x-3">
                        <div class="w-8 h-8 rounded-full bg-pink-600 text-white font-bold flex items-center justify-center flex-shrink-0">1</div>
                        <div>
                            <strong class="text-pink-900 block font-bold">Kích thước (Size):</strong>
                            - <span class="text-slate-900 font-semibold">long</span> (/lɔːŋ/): dài.<br>
                            - <span class="text-slate-900 font-semibold">short</span> (/ʃɔːrt/): ngắn / thấp.<br>
                            - <span class="text-slate-900 font-semibold">big</span> (/bɪɡ/): to / lớn.<br>
                            - <span class="text-slate-900 font-semibold">small</span> (/smɔːl/): nhỏ.
                        </div>
                    </div>
                    <div class="flex items-start space-x-3">
                        <div class="w-8 h-8 rounded-full bg-pink-600 text-white font-bold flex items-center justify-center flex-shrink-0">2</div>
                        <div>
                            <strong class="text-pink-900 block font-bold">Kiểu tóc & Màu tóc (Hair types & Colors):</strong>
                            - <span class="text-slate-900 font-semibold">blonde</span> (/blɑːnd/): tóc vàng.<br>
                            - <span class="text-slate-900 font-semibold">curly</span> (/ˈkɜːrli/): tóc xoăn.<br>
                            - <span class="text-slate-900 font-semibold">straight</span> (/streɪt/): tóc thẳng.
                        </div>
                    </div>
                    <div class="flex items-start space-x-3">
                        <div class="w-8 h-8 rounded-full bg-pink-600 text-white font-bold flex items-center justify-center flex-shrink-0">3</div>
                        <div>
                            <strong class="text-pink-900 block font-bold">Cấu trúc mẫu câu miêu tả:</strong>
                            - Dùng động từ <span class="font-bold text-rose-600">has / have</span> để miêu tả tóc và mắt.<br>
                            <span class="text-xs text-pink-900 font-semibold">👉 Ví dụ: She has long hair. (Cô ấy có mái tóc dài.)</span>
                        </div>
                    </div>
                </div>

                <div class="text-center pt-2">
                    <button onclick="playBtnSound(); completeLevel()" class="px-8 py-3.5 bg-gradient-to-r from-pink-600 to-rose-600 text-white font-extrabold rounded-2xl shadow-lg hover:opacity-95 transition-all text-base">
                        Đã hiểu rõ, vào luyện tập ngay! <i class="fa-solid fa-arrow-right ml-2"></i>
                    </button>
                </div>
            </div>
        `;
    }
};

// MÀN 6: Sắp xếp cấu trúc câu miêu tả (Sentence Builder)
window.ENG6_GAME_MODULES['sentence-builder-appearance'] = {
    title: 'Màn 6: Ghép Câu Miêu Tả Ngoại Hình',
    render(ctx) {
        window.day20BuildIndex = window.day20BuildIndex || 0;
        const sentences = [
            { words: ['She', 'has', 'long', 'hair'], full: 'She has long hair' },
            { words: ['He', 'has', 'short', 'hair'], full: 'He has short hair' },
            { words: ['She', 'has', 'big', 'eyes'], full: 'She has big eyes' },
            { words: ['He', 'has', 'curly', 'hair'], full: 'He has curly hair' },
            { words: ['She', 'has', 'straight', 'hair'], full: 'She has straight hair' }
        ];

        if (window.day20BuildIndex >= sentences.length) {
            window.day20BuildIndex = 0;
            completeLevel();
            return;
        }

        const currS = sentences[window.day20BuildIndex];
        
        // Khởi tạo mảng xáo trộn ngẫu nhiên cho từng câu hỏi
        if (!window.day20ShuffledWords || window.day20CurrentQuestionIndex !== window.day20BuildIndex) {
            window.day20CurrentQuestionIndex = window.day20BuildIndex;
            let pool = [...currS.words];
            for (let i = pool.length - 1; i > 0; i--) {
                const j = Math.floor(Math.random() * (i + 1));
                [pool[i], pool[j]] = [pool[j], pool[i]];
            }
            window.day20ShuffledWords = pool;
            window.day20SelectedWords = [];
        }

        window.day20SelectedWords = window.day20SelectedWords || [];

        // Lọc các từ chưa được chọn từ kho từ đã xáo trộn
        let availablePool = [...window.day20ShuffledWords];
        window.day20SelectedWords.forEach(sel => {
            const idx = availablePool.indexOf(sel);
            if (idx > -1) availablePool.splice(idx, 1);
        });

        let selectedHTML = window.day20SelectedWords.map((w, i) => {
            const safeWord = w.replace(/'/g, "\\'");
            return `<button onclick="removeDay20Word(${i})" class="px-3 py-2 bg-pink-600 text-white font-bold rounded-xl text-sm shadow">${w}</button>`;
        }).join('');

        let poolHTML = availablePool.map((w) => {
            const safeWord = w.replace(/'/g, "\\'");
            return `<button onclick="addDay20Word('${safeWord}')" class="px-4 py-2.5 bg-slate-100 hover:bg-slate-200 text-slate-800 font-bold rounded-xl text-sm border-2 border-slate-300">${w}</button>`;
        }).join('');

        const safeFullText = currS.full.replace(/'/g, "\\'");

        ctx.container.innerHTML = `
            <div>
                <div class="bg-pink-50 border border-pink-200 p-2.5 rounded-xl text-center mb-3">
                    <span class="text-xs font-bold text-pink-800">💡 Cấu trúc: Subject (He/She) + has + [Tính từ] + [Danh từ cơ thể]</span>
                </div>
                <div class="flex justify-between items-center mb-2">
                    <span class="text-xs font-bold text-slate-500">Câu ${window.day20BuildIndex + 1} / ${sentences.length}</span>
                </div>

                <div class="min-h-[60px] p-3 border-2 border-dashed border-pink-300 bg-white rounded-2xl flex flex-wrap gap-2 items-center mb-4">
                    ${selectedHTML || '<span class="text-xs text-slate-400 font-medium">Bấm các từ xáo trộn bên dưới để ghép câu...</span>'}
                </div>

                <div class="flex flex-wrap gap-2 justify-center mb-6">${poolHTML}</div>

                <div class="text-center space-x-2">
                    <button onclick="checkDay20BuildSentence('${safeFullText}')" class="px-6 py-3 bg-emerald-600 text-white font-extrabold rounded-xl shadow">Kiểm tra</button>
                    <button onclick="resetDay20BuildSentence()" class="px-4 py-3 bg-slate-200 text-slate-700 font-bold rounded-xl">Làm lại</button>
                </div>
            </div>
        `;
    }
};

window.addDay20Word = function(word) {
    playBtnSound();
    window.day20SelectedWords = window.day20SelectedWords || [];
    window.day20SelectedWords.push(word);
    loadLevel(currentLevel);
};

window.removeDay20Word = function(index) {
    playBtnSound();
    window.day20SelectedWords.splice(index, 1);
    loadLevel(currentLevel);
};

window.resetDay20BuildSentence = function() {
    playBtnSound();
    window.day20SelectedWords = [];
    loadLevel(currentLevel);
};

window.checkDay20BuildSentence = function(target) {
    playBtnSound();
    const result = (window.day20SelectedWords || []).join(' ');
    if (result === target) {
        playSound('correct');
        window.day20SelectedWords = [];
        window.day20ShuffledWords = null;
        window.day20BuildIndex++;
        setTimeout(() => { loadLevel(currentLevel); }, 600);
    } else {
        handleWrongAnswer();
    }
};