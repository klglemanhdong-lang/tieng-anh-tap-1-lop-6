window.ENG6_LESSONS = window.ENG6_LESSONS || {};

window.ENG6_LESSONS[25] = {
    unit: 3, // Thuộc Unit 3: My Friends
    title: "Day 25: Present Continuous (Questions)",
    description: "Cách đặt câu hỏi và trả lời với thì hiện tại tiếp diễn (Is/Are + Subject + Verb-ing...?)",
    ipa: "/ˈpreznt kənˈtɪnjuəs ˈkwestʃənz/",
    
    // Cấu hình lộ trình 7 màn hoạt động chuẩn cho Day 25
    activities: [
        'grammar-intro-day25',           // Màn 1: Lý thuyết đặt câu hỏi Yes/No & Wh-
        'multiple-choice',                // Màn 2: Trắc nghiệm ngữ pháp / câu hỏi
        'matching-meaning',               // Màn 3: Nối câu hỏi & Câu trả lời
        'listening',                      // Màn 4: Nghe âm thanh & chọn đáp án đúng
        'matching-ipa',                   // Màn 5: Nối câu & Phiên âm IPA chuẩn
        'sentence-builder-continuous-q',  // Màn 6: Sắp xếp câu hỏi (Are you reading now?)
        'spelling'                        // Màn 7: Kiểm tra chính tả từ vựng / cấu trúc
    ],

    vocab: [
        { 
            id: 'd25_q1', 
            en: 'Are you reading now', 
            ipa: '/ɑːr juː ˈriːdɪŋ naʊ/', 
            vi: 'Bạn có đang đọc sách bây giờ không?', 
            wrongSpells: ['Is you reading now', 'Are you read now', 'Are you readings now'] 
        },
        { 
            id: 'd25_a1', 
            en: 'Yes I am', 
            ipa: '/jes aɪ əm/', 
            vi: 'Vâng, tôi đang đọc', 
            wrongSpells: ['Yes I is', 'Yes I are', 'Yes am I'] 
        },
        { 
            id: 'd25_q2', 
            en: 'Is your sister making a cake', 
            ipa: '/ɪz jʊər ˈsɪstər ˈmeɪkɪŋ ə keɪk/', 
            vi: 'Chị của bạn có đang làm bánh không?', 
            wrongSpells: ['Are your sister making a cake', 'Is your sister make a cake', 'Is your sisters making a cake'] 
        },
        { 
            id: 'd25_a2', 
            en: 'No she is not', 
            ipa: '/noʊ ʃiː ɪz nɑːt/', 
            vi: 'Không, cô ấy không làm', 
            wrongSpells: ['No she are not', 'No she is no', 'No she not is'] 
        },
        { 
            id: 'd25_q3', 
            en: 'What are you reading Phong', 
            ipa: '/wʌt ɑːr juː ˈriːdɪŋ fɔːŋ/', 
            vi: 'Bạn đang đọc gì thế Phong?', 
            wrongSpells: ['What is you reading Phong', 'What are you read Phong', 'What you are reading Phong'] 
        }
    ]
};

window.ENG6_GAME_MODULES = window.ENG6_GAME_MODULES || {};

// MÀN 1: Lý thuyết đặt câu hỏi Yes/No & Wh- (Day 25)
window.ENG6_GAME_MODULES['grammar-intro-day25'] = {
    title: 'Màn 1: Lý Thuyết - Câu Hỏi Thì Hiện Tại Tiếp Diễn',
    render(ctx) {
        ctx.container.innerHTML = `
            <div class="space-y-4">
                <div class="text-center">
                    <span class="px-3 py-1 bg-pink-100 text-pink-800 font-bold text-xs rounded-full">Unit 3: Grammar</span>
                    <h3 class="text-2xl font-black text-slate-800 mt-2">Câu Hỏi & Trả Lời (Yes/No & Wh-)</h3>
                    <p class="text-slate-600 text-sm mt-1">Học cách đảo trợ động từ để hỏi về hành động đang diễn ra!</p>
                </div>

                <div class="bg-pink-50 border-2 border-pink-200 p-4 rounded-2xl space-y-3 text-slate-700 text-sm">
                    <div class="flex items-start space-x-3">
                        <div class="w-8 h-8 rounded-full bg-pink-600 text-white font-bold flex items-center justify-center flex-shrink-0">1</div>
                        <div>
                            <strong class="text-pink-900 block font-bold">Câu hỏi Yes / No Questions:</strong>
                            - Công thức: <span class="font-mono bg-white px-2 py-0.5 rounded border border-pink-200 font-bold">Is / Are + Subject + Verb-ing...?</span>[cite: 14]<br>
                            - Trả lời ngắn: <span class="font-semibold text-slate-900">Yes, subject + is / are</span> hoặc <span class="font-semibold text-slate-900">No, subject + is not / are not</span>[cite: 14].<br>
                            - <span class="text-xs text-pink-900 font-semibold">👉 Ví dụ: Are you reading now? $\rightarrow$ Yes, I am. / No, I am not.</span>[cite: 14]
                        </div>
                    </div>
                    <div class="flex items-start space-x-3">
                        <div class="w-8 h-8 rounded-full bg-pink-600 text-white font-bold flex items-center justify-center flex-shrink-0">2</div>
                        <div>
                            <strong class="text-pink-900 block font-bold">Câu hỏi Wh- Questions (Từ để hỏi):</strong>
                            - Công thức: <span class="font-mono bg-white px-2 py-0.5 rounded border border-pink-200 font-bold">Wh- + is / are / am + Subject + Verb-ing...?</span><br>
                            - <span class="text-xs text-pink-900 font-semibold">👉 Ví dụ: What are you reading, Phong? (Bạn đang đọc gì thế Phong?)</span>[cite: 12]
                        </div>
                    </div>
                </div>

                <div class="text-center pt-2">
                    <button onclick="playBtnSound(); completeLevel()" class="px-8 py-3.5 bg-gradient-to-r from-pink-600 to-rose-600 text-white font-extrabold rounded-2xl shadow-lg hover:opacity-95 transition-all text-base">
                        Đã hiểu cấu trúc, luyện tập ngay! <i class="fa-solid fa-arrow-right ml-2"></i>
                    </button>
                </div>
            </div>
        `;
    }
};

// MÀN 6: Sắp xếp câu hỏi hiện tại tiếp diễn (Sentence Builder)
window.ENG6_GAME_MODULES['sentence-builder-continuous-q'] = {
    title: 'Màn 6: Sắp Xếp Câu Hỏi Hiện Tại Tiếp Diễn',
    render(ctx) {
        window.day25BuildIndex = window.day25BuildIndex || 0;
        const sentences = [
            { words: ['Are', 'you', 'reading', 'now'], full: 'Are you reading now' },
            { words: ['Is', 'your', 'sister', 'making', 'a', 'cake'], full: 'Is your sister making a cake' },
            { words: ['What', 'are', 'you', 'reading', 'Phong'], full: 'What are you reading Phong' },
            { words: ['Are', 'they', 'playing', 'football'], full: 'Are they playing football' },
            { words: ['What', 'is', 'she', 'doing'], full: 'What is she doing' }
        ];

        if (window.day25BuildIndex >= sentences.length) {
            window.day25BuildIndex = 0;
            completeLevel();
            return;
        }

        const currS = sentences[window.day25BuildIndex];
        
        // Khởi tạo mảng xáo trộn ngẫu nhiên cho từng câu hỏi
        if (!window.day25ShuffledWords || window.day25CurrentQuestionIndex !== window.day25BuildIndex) {
            window.day25CurrentQuestionIndex = window.day25BuildIndex;
            let pool = [...currS.words];
            for (let i = pool.length - 1; i > 0; i--) {
                const j = Math.floor(Math.random() * (i + 1));
                [pool[i], pool[j]] = [pool[j], pool[i]];
            }
            window.day25ShuffledWords = pool;
            window.day25SelectedWords = [];
        }

        window.day25SelectedWords = window.day25SelectedWords || [];

        // Lọc các từ chưa được chọn từ kho từ đã xáo trộn
        let availablePool = [...window.day25ShuffledWords];
        window.day25SelectedWords.forEach(sel => {
            const idx = availablePool.indexOf(sel);
            if (idx > -1) availablePool.splice(idx, 1);
        });

        let selectedHTML = window.day25SelectedWords.map((w, i) => {
            const safeWord = w.replace(/'/g, "\\'");
            return `<button onclick="removeDay25Word(${i})" class="px-3 py-2 bg-pink-600 text-white font-bold rounded-xl text-sm shadow">${w}</button>`;
        }).join('');

        let poolHTML = availablePool.map((w) => {
            const safeWord = w.replace(/'/g, "\\'");
            return `<button onclick="addDay25Word('${safeWord}')" class="px-4 py-2.5 bg-slate-100 hover:bg-slate-200 text-slate-800 font-bold rounded-xl text-sm border-2 border-slate-300">${w}</button>`;
        }).join('');

        const safeFullText = currS.full.replace(/'/g, "\\'");

        ctx.container.innerHTML = `
            <div>
                <div class="bg-pink-50 border border-pink-200 p-2.5 rounded-xl text-center mb-3">
                    <span class="text-xs font-bold text-pink-800">💡 Cấu trúc: Is / Are + Subject + Verb-ing...? hoặc Wh- + is / are + Subject + Verb-ing...?</span>
                </div>
                <div class="flex justify-between items-center mb-2">
                    <span class="text-xs font-bold text-slate-500">Câu ${window.day25BuildIndex + 1} / ${sentences.length}</span>
                </div>

                <div class="min-h-[60px] p-3 border-2 border-dashed border-pink-300 bg-white rounded-2xl flex flex-wrap gap-2 items-center mb-4">
                    ${selectedHTML || '<span class="text-xs text-slate-400 font-medium">Bấm các từ xáo trộn bên dưới để ghép câu...</span>'}
                </div>

                <div class="flex flex-wrap gap-2 justify-center mb-6">${poolHTML}</div>

                <div class="text-center space-x-2">
                    <button onclick="checkDay25BuildSentence('${safeFullText}')" class="px-6 py-3 bg-emerald-600 text-white font-extrabold rounded-xl shadow">Kiểm tra</button>
                    <button onclick="resetDay25BuildSentence()" class="px-4 py-3 bg-slate-200 text-slate-700 font-bold rounded-xl">Làm lại</button>
                </div>
            </div>
        `;
    }
};

window.addDay25Word = function(word) {
    playBtnSound();
    window.day25SelectedWords = window.day25SelectedWords || [];
    window.day25SelectedWords.push(word);
    loadLevel(currentLevel);
};

window.removeDay25Word = function(index) {
    playBtnSound();
    window.day25SelectedWords.splice(index, 1);
    loadLevel(currentLevel);
};

window.resetDay25BuildSentence = function() {
    playBtnSound();
    window.day25SelectedWords = [];
    loadLevel(currentLevel);
};

window.checkDay25BuildSentence = function(target) {
    playBtnSound();
    const result = (window.day25SelectedWords || []).join(' ');
    if (result === target) {
        playSound('correct');
        window.day25SelectedWords = [];
        window.day25ShuffledWords = null;
        window.day25BuildIndex++;
        setTimeout(() => { loadLevel(currentLevel); }, 600);
    } else {
        handleWrongAnswer();
    }
};