window.ENG6_LESSONS = window.ENG6_LESSONS || {};

window.ENG6_LESSONS[36] = {
    unit: 4, // Thuộc Unit 4: My Neighbourhood
    title: "Day 36: Reading - Khang's Blog about Da Nang",
    description: "Đọc hiểu blog cá nhân miêu tả khu vực ngoại ô (suburbs) và cuộc sống tại Đà Nẵng",
    ipa: "/ˈriːdɪŋ ˈkhæŋz blɑːɡ əˈbaʊt dɑː næŋ/",
    
    // Cấu hình lộ trình 7 màn hoạt động chuẩn cho Day 36
    activities: [
        'grammar-intro-day36',         // Màn 1: Giới thiệu bài đọc Khang's Blog & Từ vựng mới
        'multiple-choice',              // Màn 2: Trắc nghiệm thông tin bài đọc
        'matching-meaning',             // Màn 3: Nối từ vựng (suburbs, dislike, outdoor) & Nghĩa
        'listening',                    // Màn 4: Nghe đoạn văn blog & chọn đáp án đúng
        'matching-ipa',                 // Màn 5: Nối từ & Phiên âm IPA chuẩn
        'sentence-builder-blog',        // Màn 6: Ghép câu hỏi đáp nội dung bài đọc
        'spelling'                      // Màn 7: Kiểm tra chính tả từ vựng bài đọc
    ],

    vocab: [
        { 
            id: 'd36_suburbs', 
            en: 'suburbs', 
            ipa: '/ˈsʌbɜːrbz/', 
            vi: 'ngoại ô / vùng ngoại thành', 
            wrongSpells: ['suberbs', 'suburbs', 'suburbbs'] 
        },
        { 
            id: 'd36_dislike', 
            en: 'dislike', 
            ipa: '/dɪsˈlaɪk/', 
            vi: 'không thích / ghét', 
            wrongSpells: ['dislikee', 'dislyke', 'disslike'] 
        },
        { 
            id: 'd36_outdoor', 
            en: 'outdoor', 
            ipa: '/ˈaʊtdɔːr/', 
            vi: 'ngoài trời', 
            wrongSpells: ['outdor', 'out-door', 'outdoorr'] 
        },
        { 
            id: 'd36_neighborhood', 
            en: 'neighbourhood', 
            ipa: '/ˈneɪbərhʊd/', 
            vi: 'khu xóm / vùng lân cận', 
            wrongSpells: ['neighborhud', 'neighbourhud', 'neighbourhoodd'] 
        },
        { 
            id: 'd36_friendly', 
            en: 'friendly', 
            ipa: '/ˈfrendli/', 
            vi: 'thân thiện', 
            wrongSpells: ['friendli', 'frendly', 'friendley'] 
        }
    ]
};

window.ENG6_GAME_MODULES = window.ENG6_GAME_MODULES || {};

// MÀN 1: Giới thiệu bài đọc Khang's Blog & Từ vựng mới (Day 36)
window.ENG6_GAME_MODULES['grammar-intro-day36'] = {
    title: 'Màn 1: Giới Thiệu Bài Đọc - Khang\'s Blog',
    render(ctx) {
        ctx.container.innerHTML = `
            <div class="space-y-4">
                <div class="text-center">
                    <span class="px-3 py-1 bg-emerald-100 text-emerald-800 font-bold text-xs rounded-full">Unit 4: Reading Skills</span>
                    <h3 class="text-2xl font-black text-slate-800 mt-2">Khang's Blog: My Neighbourhood</h3>
                    <p class="text-slate-600 text-sm mt-1">Đọc hiểu đoạn blog miêu tả cuộc sống tuyệt vời tại khu ngoại ô Đà Nẵng!</p>
                </div>

                <div class="bg-white border-2 border-emerald-200 p-3.5 rounded-2xl space-y-2 text-xs md:text-sm shadow-sm">
                    <div class="font-bold text-emerald-700 uppercase tracking-wide text-xs mb-1">📖 Tóm tắt nội dung blog (SGK trang 44):</div>
                    <p class="text-slate-700 italic">"I live in the suburbs of Da Nang City. There are many things I like about my neighbourhood. It is great for outdoor activities because it has beautiful parks, sandy beaches and fine weather..."</p>
                </div>

                <div class="bg-emerald-50 border-2 border-emerald-200 p-4 rounded-2xl space-y-3 text-slate-700 text-sm">
                    <div class="flex items-start space-x-3">
                        <div class="w-8 h-8 rounded-full bg-emerald-600 text-white font-bold flex items-center justify-center flex-shrink-0">1</div>
                        <div>
                            <strong class="text-emerald-900 block font-bold">Điểm thích (Likes):</strong>
                            - Beautiful parks, sandy beaches, fine weather, friendly people, and good food[cite: 5].
                        </div>
                    </div>
                    <div class="flex items-start space-x-3">
                        <div class="w-8 h-8 rounded-full bg-emerald-600 text-white font-bold flex items-center justify-center flex-shrink-0">2</div>
                        <div>
                            <strong class="text-emerald-900 block font-bold">Điểm không thích (Dislikes):</strong>
                            - Modern buildings and offices, busy and crowded streets[cite: 5].
                        </div>
                    </div>
                    <div class="flex items-start space-x-3">
                        <div class="w-8 h-8 rounded-full bg-emerald-600 text-white font-bold flex items-center justify-center flex-shrink-0">3</div>
                        <div>
                            <strong class="text-emerald-900 block font-bold">Từ vựng cốt lõi:</strong>
                            - <span class="text-slate-900 font-semibold">suburbs</span> (/ˈsʌbɜːrbz/): vùng ngoại ô[cite: 5].<br>
                            - <span class="text-slate-900 font-semibold">dislike</span> (/dɪsˈlaɪk/): không thích[cite: 5].<br>
                            - <span class="text-slate-900 font-semibold">outdoor</span> (/ˈaʊtdɔːr/): ngoài trời[cite: 5].
                        </div>
                    </div>
                </div>

                <div class="text-center pt-2">
                    <button onclick="playBtnSound(); completeLevel()" class="px-8 py-3.5 bg-gradient-to-r from-emerald-600 to-teal-600 text-white font-extrabold rounded-2xl shadow-lg hover:opacity-95 transition-all text-base">
                        Đã hiểu nội dung, vào luyện tập ngay! <i class="fa-solid fa-arrow-right ml-2"></i>
                    </button>
                </div>
            </div>
        `;
    }
};

// MÀN 6: Sắp xếp câu hỏi đáp nội dung bài đọc (Sentence Builder)
window.ENG6_GAME_MODULES['sentence-builder-blog'] = {
    title: 'Màn 6: Ghép Câu Hỏi Đáp Về Bài Đọc Blog',
    render(ctx) {
        window.day36BuildIndex = window.day36BuildIndex || 0;
        const sentences = [
            { words: ['Khang', 'lives', 'in', 'the', 'suburbs', 'of', 'Da', 'Nang'], full: 'Khang lives in the suburbs of Da Nang' },
            { words: ['His', 'neighbourhood', 'has', 'beautiful', 'parks'], full: 'His neighbourhood has beautiful parks' },
            { words: ['The', 'people', 'here', 'are', 'very', 'friendly'], full: 'The people here are very friendly' },
            { words: ['He', 'dislikes', 'busy', 'and', 'crowded', 'streets'], full: 'He dislikes busy and crowded streets' },
            { words: ['The', 'weather', 'in', 'his', 'area', 'is', 'fine'], full: 'The weather in his area is fine' }
        ];

        if (window.day36BuildIndex >= sentences.length) {
            window.day36BuildIndex = 0;
            completeLevel();
            return;
        }

        const currS = sentences[window.day36BuildIndex];
        
        // Khởi tạo mảng xáo trộn ngẫu nhiên cho từng câu hỏi
        if (!window.day36ShuffledWords || window.day36CurrentQuestionIndex !== window.day36BuildIndex) {
            window.day36CurrentQuestionIndex = window.day36BuildIndex;
            let pool = [...currS.words];
            for (let i = pool.length - 1; i > 0; i--) {
                const j = Math.floor(Math.random() * (i + 1));
                [pool[i], pool[j]] = [pool[j], pool[i]];
            }
            window.day36ShuffledWords = pool;
            window.day36SelectedWords = [];
        }

        window.day36SelectedWords = window.day36SelectedWords || [];

        // Lọc các từ chưa được chọn từ kho từ đã xáo trộn
        let availablePool = [...window.day36ShuffledWords];
        window.day36SelectedWords.forEach(sel => {
            const idx = availablePool.indexOf(sel);
            if (idx > -1) availablePool.splice(idx, 1);
        });

        let selectedHTML = window.day36SelectedWords.map((w, i) => {
            const safeWord = w.replace(/'/g, "\\'");
            return `<button onclick="removeDay36Word(${i})" class="px-3 py-2 bg-emerald-600 text-white font-bold rounded-xl text-sm shadow">${w}</button>`;
        }).join('');

        let poolHTML = availablePool.map((w) => {
            const safeWord = w.replace(/'/g, "\\'");
            return `<button onclick="addDay36Word('${safeWord}')" class="px-4 py-2.5 bg-slate-100 hover:bg-slate-200 text-slate-800 font-bold rounded-xl text-sm border-2 border-slate-300">${w}</button>`;
        }).join('');

        const safeFullText = currS.full.replace(/'/g, "\\'");

        ctx.container.innerHTML = `
            <div>
                <div class="bg-emerald-50 border border-emerald-200 p-2.5 rounded-xl text-center mb-3">
                    <span class="text-xs font-bold text-emerald-800">💡 Ghép các từ xáo trộn bên dưới thành câu tóm tắt blog hoàn chỉnh</span>
                </div>
                <div class="flex justify-between items-center mb-2">
                    <span class="text-xs font-bold text-slate-500">Câu ${window.day36BuildIndex + 1} / ${sentences.length}</span>
                </div>

                <div class="min-h-[60px] p-3 border-2 border-dashed border-emerald-300 bg-white rounded-2xl flex flex-wrap gap-2 items-center mb-4">
                    ${selectedHTML || '<span class="text-xs text-slate-400 font-medium">Bấm các từ xáo trộn bên dưới để ghép câu...</span>'}
                </div>

                <div class="flex flex-wrap gap-2 justify-center mb-6">${poolHTML}</div>

                <div class="text-center space-x-2">
                    <button onclick="checkDay36BuildSentence('${safeFullText}')" class="px-6 py-3 bg-emerald-600 text-white font-extrabold rounded-xl shadow">Kiểm tra</button>
                    <button onclick="resetDay36BuildSentence()" class="px-4 py-3 bg-slate-200 text-slate-700 font-bold rounded-xl">Làm lại</button>
                </div>
            </div>
        `;
    }
};

window.addDay36Word = function(word) {
    playBtnSound();
    window.day36SelectedWords = window.day36SelectedWords || [];
    window.day36SelectedWords.push(word);
    loadLevel(currentLevel);
};

window.removeDay36Word = function(index) {
    playBtnSound();
    window.day36SelectedWords.splice(index, 1);
    loadLevel(currentLevel);
};

window.resetDay36BuildSentence = function() {
    playBtnSound();
    window.day36SelectedWords = [];
    loadLevel(currentLevel);
};

window.checkDay36BuildSentence = function(target) {
    playBtnSound();
    const result = (window.day36SelectedWords || []).join(' ');
    if (result === target) {
        playSound('correct');
        window.day36SelectedWords = [];
        window.day36ShuffledWords = null;
        window.day36BuildIndex++;
        setTimeout(() => { loadLevel(currentLevel); }, 600);
    } else {
        handleWrongAnswer();
    }
};