window.ENG6_LESSONS = window.ENG6_LESSONS || {};

window.ENG6_LESSONS[30] = {
    unit: 4, // Thuộc Unit 4: My Neighbourhood
    title: "Day 30: Adjectives for Neighbourhoods",
    description: "Học các tính từ miêu tả không gian sống (noisy, quiet, crowded, peaceful, modern, busy, boring)",
    ipa: "/ˈædʒɪktɪvz fɔːr ˈneɪbərhʊdz/",
    
    // Cấu hình lộ trình 7 màn hoạt động chuẩn cho Day 30
    activities: [
        'grammar-intro-day30',              // Màn 1: Lý thuyết tính từ miêu tả khu xóm
        'multiple-choice',                   // Màn 2: Trắc nghiệm mặt chữ từ vựng
        'matching-meaning',                  // Màn 3: Nối từ & Nghĩa Tiếng Việt
        'listening',                         // Màn 4: Nghe âm thanh & chọn đáp án đúng
        'matching-ipa',                      // Màn 5: Nối từ & Phiên âm IPA chuẩn
        'sentence-builder-neighbourhood',    // Màn 6: Ghép câu miêu tả (My neighbourhood is quiet)
        'spelling'                           // Màn 7: Kiểm tra chính tả từ vựng
    ],

    vocab: [
        { 
            id: 'd30_noisy', 
            en: 'noisy', 
            ipa: '/ˈnɔɪzi/', 
            vi: 'ồn ào', 
            wrongSpells: ['noizy', 'noisey', 'noisi'] 
        },
        { 
            id: 'd30_quiet', 
            en: 'quiet', 
            ipa: '/ˈkwaɪət/', 
            vi: 'yên tĩnh', 
            wrongSpells: ['quite', 'quyet', 'quiett'] 
        },
        { 
            id: 'd30_crowded', 
            en: 'crowded', 
            ipa: '/ˈkraʊdɪd/', 
            vi: 'đông đúc', 
            wrongSpells: ['crowed', 'crouded', 'crowdded'] 
        },
        { 
            id: 'd30_peaceful', 
            en: 'peaceful', 
            ipa: '/ˈpiːsfl/', 
            vi: 'yên bình', 
            wrongSpells: ['peacefull', 'peacful', 'peaseful'] 
        },
        { 
            id: 'd30_modern', 
            en: 'modern', 
            ipa: '/ˈmɑːdərn/', 
            vi: 'hiện đại', 
            wrongSpells: ['modren', 'modarn', 'modernn'] 
        },
        { 
            id: 'd30_busy', 
            en: 'busy', 
            ipa: '/ˈbɪzi/', 
            vi: 'bận rộn / nhộn nhịp', 
            wrongSpells: ['bisy', 'busi', 'busyy'] 
        },
        { 
            id: 'd30_boring', 
            en: 'boring', 
            ipa: '/ˈbɔːrɪŋ/', 
            vi: 'nhàm chán', 
            wrongSpells: ['borring', 'boreing', 'borng'] 
        }
    ]
};

window.ENG6_GAME_MODULES = window.ENG6_GAME_MODULES || {};

// MÀN 1: Lý thuyết tính từ miêu tả không gian sống (Day 30)
window.ENG6_GAME_MODULES['grammar-intro-day30'] = {
    title: 'Màn 1: Lý Thuyết - Tính Từ Miêu Tả Khu Xóm',
    render(ctx) {
        ctx.container.innerHTML = `
            <div class="space-y-4">
                <div class="text-center">
                    <span class="px-3 py-1 bg-emerald-100 text-emerald-800 font-bold text-xs rounded-full">Unit 4: My Neighbourhood</span>
                    <h3 class="text-2xl font-black text-slate-800 mt-2">Tính Từ Miêu Tả Không Gian Sống</h3>
                    <p class="text-slate-600 text-sm mt-1">Ghi nhớ các cặp tính từ trái nghĩa để miêu tả nơi bạn sống thật sinh động!</p>
                </div>

                <div class="bg-emerald-50 border-2 border-emerald-200 p-4 rounded-2xl space-y-3 text-slate-700 text-sm">
                    <div class="flex items-start space-x-3">
                        <div class="w-8 h-8 rounded-full bg-emerald-600 text-white font-bold flex items-center justify-center flex-shrink-0">1</div>
                        <div>
                            <strong class="text-emerald-900 block font-bold">Âm thanh & Nhịp sống:</strong>
                            - <span class="text-slate-900 font-semibold">noisy</span> (/ˈnɔɪzi/): ồn ào $\\neq$ <span class="text-slate-900 font-semibold">quiet</span> (/ˈkwaɪət/): yên tĩnh[cite: 10].<br>
                            - <span class="text-slate-900 font-semibold">crowded</span> (/ˈkraʊdɪd/): đông đúc $\\neq$ <span class="text-slate-900 font-semibold">peaceful</span> (/ˈpiːsfl/): yên bình[cite: 10].
                        </div>
                    </div>
                    <div class="flex items-start space-x-3">
                        <div class="w-8 h-8 rounded-full bg-emerald-600 text-white font-bold flex items-center justify-center flex-shrink-0">2</div>
                        <div>
                            <strong class="text-emerald-900 block font-bold">Đặc điểm & Cảm nhận:</strong>
                            - <span class="text-slate-900 font-semibold">modern</span> (/ˈmɑːdərn/): hiện đại[cite: 10].<br>
                            - <span class="text-slate-900 font-semibold">busy</span> (/ˈbɪzi/): bận rộn, nhộn nhịp[cite: 10].<br>
                            - <span class="text-slate-900 font-semibold">boring</span> (/ˈbɔːrɪŋ/): nhàm chán, tẻ nhạt[cite: 10].
                        </div>
                    </div>
                    <div class="flex items-start space-x-3">
                        <div class="w-8 h-8 rounded-full bg-emerald-600 text-white font-bold flex items-center justify-center flex-shrink-0">3</div>
                        <div>
                            <strong class="text-emerald-900 block font-bold">Cấu trúc câu miêu tả khu phố:</strong>
                            - Công thức: <span class="font-mono bg-white px-2 py-0.5 rounded border border-emerald-200 font-bold">Subject + is / are + [Tính từ]</span><br>
                            - <span class="text-xs text-emerald-900 font-semibold">👉 Ví dụ: My neighbourhood is quiet. (Khu xóm của tôi rất yên tĩnh.)</span>
                        </div>
                    </div>
                </div>

                <div class="text-center pt-2">
                    <button onclick="playBtnSound(); completeLevel()" class="px-8 py-3.5 bg-gradient-to-r from-emerald-600 to-teal-600 text-white font-extrabold rounded-2xl shadow-lg hover:opacity-95 transition-all text-base">
                        Đã hiểu rõ, vào luyện tập ngay! <i class="fa-solid fa-arrow-right ml-2"></i>
                    </button>
                </div>
            </div>
        `;
    }
};

// MÀN 6: Ghép câu miêu tả khu xóm (Sentence Builder)
window.ENG6_GAME_MODULES['sentence-builder-neighbourhood'] = {
    title: 'Màn 6: Ghép Câu Miêu Tả Khu Xóm',
    render(ctx) {
        window.day30BuildIndex = window.day30BuildIndex || 0;
        const sentences = [
            { words: ['My', 'neighbourhood', 'is', 'quiet'], full: 'My neighbourhood is quiet' },
            { words: ['The', 'streets', 'are', 'very', 'crowded'], full: 'The streets are very crowded' },
            { words: ['This', 'city', 'is', 'noisy', 'and', 'busy'], full: 'This city is noisy and busy' },
            { words: ['My', 'village', 'is', 'very', 'peaceful'], full: 'My village is very peaceful' },
            { words: ['There', 'are', 'many', 'modern', 'buildings'], full: 'There are many modern buildings' }
        ];

        if (window.day30BuildIndex >= sentences.length) {
            window.day30BuildIndex = 0;
            completeLevel();
            return;
        }

        const currS = sentences[window.day30BuildIndex];
        
        // Khởi tạo mảng xáo trộn ngẫu nhiên cho từng câu hỏi
        if (!window.day30ShuffledWords || window.day30CurrentQuestionIndex !== window.day30BuildIndex) {
            window.day30CurrentQuestionIndex = window.day30BuildIndex;
            let pool = [...currS.words];
            for (let i = pool.length - 1; i > 0; i--) {
                const j = Math.floor(Math.random() * (i + 1));
                [pool[i], pool[j]] = [pool[j], pool[i]];
            }
            window.day30ShuffledWords = pool;
            window.day30SelectedWords = [];
        }

        window.day30SelectedWords = window.day30SelectedWords || [];

        // Lọc các từ chưa được chọn từ kho từ đã xáo trộn
        let availablePool = [...window.day30ShuffledWords];
        window.day30SelectedWords.forEach(sel => {
            const idx = availablePool.indexOf(sel);
            if (idx > -1) availablePool.splice(idx, 1);
        });

        let selectedHTML = window.day30SelectedWords.map((w, i) => {
            const safeWord = w.replace(/'/g, "\\'");
            return `<button onclick="removeDay30Word(${i})" class="px-3 py-2 bg-emerald-600 text-white font-bold rounded-xl text-sm shadow">${w}</button>`;
        }).join('');

        let poolHTML = availablePool.map((w) => {
            const safeWord = w.replace(/'/g, "\\'");
            return `<button onclick="addDay30Word('${safeWord}')" class="px-4 py-2.5 bg-slate-100 hover:bg-slate-200 text-slate-800 font-bold rounded-xl text-sm border-2 border-slate-300">${w}</button>`;
        }).join('');

        const safeFullText = currS.full.replace(/'/g, "\\'");

        ctx.container.innerHTML = `
            <div>
                <div class="bg-emerald-50 border border-emerald-200 p-2.5 rounded-xl text-center mb-3">
                    <span class="text-xs font-bold text-emerald-800">💡 Ghép các từ xáo trộn bên dưới thành câu miêu tả không gian sống</span>
                </div>
                <div class="flex justify-between items-center mb-2">
                    <span class="text-xs font-bold text-slate-500">Câu ${window.day30BuildIndex + 1} / ${sentences.length}</span>
                </div>

                <div class="min-h-[60px] p-3 border-2 border-dashed border-emerald-300 bg-white rounded-2xl flex flex-wrap gap-2 items-center mb-4">
                    ${selectedHTML || '<span class="text-xs text-slate-400 font-medium">Bấm các từ xáo trộn bên dưới để ghép câu...</span>'}
                </div>

                <div class="flex flex-wrap gap-2 justify-center mb-6">${poolHTML}</div>

                <div class="text-center space-x-2">
                    <button onclick="checkDay30BuildSentence('${safeFullText}')" class="px-6 py-3 bg-emerald-600 text-white font-extrabold rounded-xl shadow">Kiểm tra</button>
                    <button onclick="resetDay30BuildSentence()" class="px-4 py-3 bg-slate-200 text-slate-700 font-bold rounded-xl">Làm lại</button>
                </div>
            </div>
        `;
    }
};

window.addDay30Word = function(word) {
    playBtnSound();
    window.day30SelectedWords = window.day30SelectedWords || [];
    window.day30SelectedWords.push(word);
    loadLevel(currentLevel);
};

window.removeDay30Word = function(index) {
    playBtnSound();
    window.day30SelectedWords.splice(index, 1);
    loadLevel(currentLevel);
};

window.resetDay30BuildSentence = function() {
    playBtnSound();
    window.day30SelectedWords = [];
    loadLevel(currentLevel);
};

window.checkDay30BuildSentence = function(target) {
    playBtnSound();
    const result = (window.day30SelectedWords || []).join(' ');
    if (result === target) {
        playSound('correct');
        window.day30SelectedWords = [];
        window.day30ShuffledWords = null;
        window.day30BuildIndex++;
        setTimeout(() => { loadLevel(currentLevel); }, 600);
    } else {
        handleWrongAnswer();
    }
};