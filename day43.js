window.ENG6_LESSONS = window.ENG6_LESSONS || {};

window.ENG6_LESSONS[43] = {
    unit: 5, // Thuộc Unit 5: Natural Wonders of Viet Nam
    title: "Day 43: Modal Verb must / mustn't",
    description: "Cấu trúc diễn tả sự bắt buộc và điều cấm kỵ với must và mustn't",
    ipa: "/ˈmoʊdl vɜːrb mʌst ˈmʌsnt/",
    
    // Cấu hình lộ trình 7 màn hoạt động chuẩn cho Day 43
    activities: [
        'grammar-intro-day43',         // Màn 1: Lý thuyết must và mustn't
        'multiple-choice',              // Màn 2: Trắc nghiệm chia động từ must / mustn't
        'matching-meaning',             // Màn 3: Nối câu nội quy & Nghĩa Tiếng Việt
        'listening',                    // Màn 4: Nghe âm thanh & chọn đáp án đúng
        'matching-ipa',                 // Màn 5: Nối câu & Phiên âm IPA chuẩn
        'sentence-builder-must',        // Màn 6: Ghép câu nội quy (You must follow all the rules)
        'spelling'                      // Màn 7: Kiểm tra chính tả ngữ pháp
    ],

    vocab: [
        { 
            id: 'd43_ex1', 
            en: 'You must follow all the rules', 
            ipa: '/juː mʌst ˈfɑːloʊ ɔːr ðə ruːlz/', 
            vi: 'Bạn phải tuân theo tất cả các quy tắc', 
            wrongSpells: ['You mustn\'t follow all the rules', 'You must follows all the rules', 'You must following all the rules'] 
        },
        { 
            id: 'd43_ex2', 
            en: 'You must not litter in the park', 
            ipa: '/juː mʌst nɑːt ˈlɪtər ɪn ðə pɑːrk/', 
            vi: 'Bạn không được xả rác trong công viên', 
            wrongSpells: ['You must litter in the park', 'You must not litters in the park', 'You don\'t must litter'] 
        },
        { 
            id: 'd43_ex3', 
            en: 'We must always arrive on time', 
            ipa: '/wiː mʌst ˈɔːlweɪz əˈraɪv ɑːr taɪm/', 
            vi: 'Chúng ta phải luôn luôn đến đúng giờ', 
            wrongSpells: ['We mustn\'t always arrive on time', 'We must arrive always on time', 'We must arrives on time'] 
        },
        { 
            id: 'd43_ex4', 
            en: 'You must bring the necessary travel items', 
            ipa: '/juː mʌst brɪŋ ðə ˈnesəseri ˈtrævl ˈaɪtəmz/', 
            vi: 'Bạn phải mang theo các đồ dùng du lịch cần thiết', 
            wrongSpells: ['You mustn\'t bring travel items', 'You must brings travel items', 'You must bringing travel items'] 
        },
        { 
            id: 'd43_ex5', 
            en: 'You must not travel alone', 
            ipa: '/juː mʌst nɑːt ˈtrævl əˈloʊn/', 
            vi: 'Bạn không được đi du lịch một mình', 
            wrongSpells: ['You must travel alone', 'You mustn\'t travels alone', 'You don\'t must travel alone'] 
        }
    ]
};

window.ENG6_GAME_MODULES = window.ENG6_GAME_MODULES || {};

// MÀN 1: Lý thuyết must và mustn't (Day 43)
window.ENG6_GAME_MODULES['grammar-intro-day43'] = {
    title: 'Màn 1: Lý Thuyết - Modal Verb must / mustn\'t',
    render(ctx) {
        ctx.container.innerHTML = `
            <div class="space-y-4">
                <div class="text-center">
                    <span class="px-3 py-1 bg-teal-100 text-teal-800 font-bold text-xs rounded-full">Unit 5: Grammar</span>
                    <h3 class="text-2xl font-black text-slate-800 mt-2">Động Từ Khuyết Thiếu: must / mustn't</h3>
                    <p class="text-slate-600 text-sm mt-1">Học cách diễn tả sự bắt buộc và các điều cấm kỵ trong nội quy!</p>
                </div>

                <div class="bg-teal-50 border-2 border-teal-200 p-4 rounded-2xl space-y-3 text-slate-700 text-sm">
                    <div class="flex items-start space-x-3">
                        <div class="w-8 h-8 rounded-full bg-teal-600 text-white font-bold flex items-center justify-center flex-shrink-0">1</div>
                        <div>
                            <strong class="text-teal-900 block font-bold">Cấu trúc MUST (Phải làm gì):</strong>
                            - Dùng để diễn tả điều gì đó rất cần thiết hoặc cực kỳ quan trọng phải thực hiện[cite: 11].<br>
                            - Công thức: <span class="font-mono bg-white px-2 py-0.5 rounded border border-teal-200 font-bold">S + must + V (nguyên mẫu)</span><br>
                            - <span class="text-xs text-teal-900 font-semibold">👉 Ví dụ: You must follow all the rules. (Bạn phải tuân theo mọi quy tắc.)</span>
                        </div>
                    </div>
                    <div class="flex items-start space-x-3">
                        <div class="w-8 h-8 rounded-full bg-teal-600 text-white font-bold flex items-center justify-center flex-shrink-0">2</div>
                        <div>
                            <strong class="text-teal-900 block font-bold">Cấu trúc MUSTN'T (Không được phép làm gì):</strong>
                            - Dùng để diễn tả điều gì đó bị cấm hoặc không được phép làm[cite: 11].<br>
                            - Công thức: <span class="font-mono bg-white px-2 py-0.5 rounded border border-teal-200 font-bold">S + mustn't + V (nguyên mẫu)</span><br>
                            - <span class="text-xs text-teal-900 font-semibold">👉 Ví dụ: You mustn't litter. (Bạn không được xả rác.)</span>
                        </div>
                    </div>
                </div>

                <div class="text-center pt-2">
                    <button onclick="playBtnSound(); completeLevel()" class="px-8 py-3.5 bg-gradient-to-r from-teal-600 to-cyan-600 text-white font-extrabold rounded-2xl shadow-lg hover:opacity-95 transition-all text-base">
                        Đã hiểu rõ cấu trúc, luyện tập ngay! <i class="fa-solid fa-arrow-right ml-2"></i>
                    </button>
                </div>
            </div>
        `;
    }
};

// MÀN 6: Sắp xếp câu nội quy (Sentence Builder)
window.ENG6_GAME_MODULES['sentence-builder-must'] = {
    title: 'Màn 6: Ghép Câu Nội Quy với must / mustn\'t',
    render(ctx) {
        window.day43BuildIndex = window.day43BuildIndex || 0;
        const sentences = [
            { words: ['You', 'must', 'follow', 'all', 'the', 'rules'], full: 'You must follow all the rules' },
            { words: ['You', 'must', 'not', 'litter', 'in', 'the', 'park'], full: 'You must not litter in the park' },
            { words: ['We', 'must', 'always', 'arrive', 'on', 'time'], full: 'We must always arrive on time' },
            { words: ['You', 'must', 'bring', 'the', 'necessary', 'travel', 'items'], full: 'You must bring the necessary travel items' },
            { words: ['You', 'must', 'not', 'travel', 'alone'], full: 'You must not travel alone' }
        ];

        if (window.day43BuildIndex >= sentences.length) {
            window.day43BuildIndex = 0;
            completeLevel();
            return;
        }

        const currS = sentences[window.day43BuildIndex];
        
        // Khởi tạo mảng xáo trộn ngẫu nhiên cho từng câu hỏi
        if (!window.day43ShuffledWords || window.day43CurrentQuestionIndex !== window.day43BuildIndex) {
            window.day43CurrentQuestionIndex = window.day43BuildIndex;
            let pool = [...currS.words];
            for (let i = pool.length - 1; i > 0; i--) {
                const j = Math.floor(Math.random() * (i + 1));
                [pool[i], pool[j]] = [pool[j], pool[i]];
            }
            window.day43ShuffledWords = pool;
            window.day43SelectedWords = [];
        }

        window.day43SelectedWords = window.day43SelectedWords || [];

        // Lọc các từ chưa được chọn từ kho từ đã xáo trộn
        let availablePool = [...window.day43ShuffledWords];
        window.day43SelectedWords.forEach(sel => {
            const idx = availablePool.indexOf(sel);
            if (idx > -1) availablePool.splice(idx, 1);
        });

        let selectedHTML = window.day43SelectedWords.map((w, i) => {
            const safeWord = w.replace(/'/g, "\\'");
            return `<button onclick="removeDay43Word(${i})" class="px-3 py-2 bg-teal-600 text-white font-bold rounded-xl text-sm shadow">${w}</button>`;
        }).join('');

        let poolHTML = availablePool.map((w) => {
            const safeWord = w.replace(/'/g, "\\'");
            return `<button onclick="addDay43Word('${safeWord}')" class="px-4 py-2.5 bg-slate-100 hover:bg-slate-200 text-slate-800 font-bold rounded-xl text-sm border-2 border-slate-300">${w}</button>`;
        }).join('');

        const safeFullText = currS.full.replace(/'/g, "\\'");

        ctx.container.innerHTML = `
            <div>
                <div class="bg-teal-50 border border-teal-200 p-2.5 rounded-xl text-center mb-3">
                    <span class="text-xs font-bold text-teal-800">💡 Ghép các từ xáo trộn bên dưới thành câu nội quy hoàn chỉnh</span>
                </div>
                <div class="flex justify-between items-center mb-2">
                    <span class="text-xs font-bold text-slate-500">Câu ${window.day43BuildIndex + 1} / ${sentences.length}</span>
                </div>

                <div class="min-h-[60px] p-3 border-2 border-dashed border-teal-300 bg-white rounded-2xl flex flex-wrap gap-2 items-center mb-4">
                    ${selectedHTML || '<span class="text-xs text-slate-400 font-medium">Bấm các từ xáo trộn bên dưới để ghép câu...</span>'}
                </div>

                <div class="flex flex-wrap gap-2 justify-center mb-6">${poolHTML}</div>

                <div class="text-center space-x-2">
                    <button onclick="checkDay43BuildSentence('${safeFullText}')" class="px-6 py-3 bg-teal-600 text-white font-extrabold rounded-xl shadow">Kiểm tra</button>
                    <button onclick="resetDay43BuildSentence()" class="px-4 py-3 bg-slate-200 text-slate-700 font-bold rounded-xl">Làm lại</button>
                </div>
            </div>
        `;
    }
};

window.addDay43Word = function(word) {
    playBtnSound();
    window.day43SelectedWords = window.day43SelectedWords || [];
    window.day43SelectedWords.push(word);
    loadLevel(currentLevel);
};

window.removeDay43Word = function(index) {
    playBtnSound();
    window.day43SelectedWords.splice(index, 1);
    loadLevel(currentLevel);
};

window.resetDay43BuildSentence = function() {
    playBtnSound();
    window.day43SelectedWords = [];
    loadLevel(currentLevel);
};

window.checkDay43BuildSentence = function(target) {
    playBtnSound();
    const result = (window.day43SelectedWords || []).join(' ');
    if (result === target) {
        playSound('correct');
        window.day43SelectedWords = [];
        window.day43ShuffledWords = null;
        window.day43BuildIndex++;
        setTimeout(() => { loadLevel(currentLevel); }, 600);
    } else {
        handleWrongAnswer();
    }
};