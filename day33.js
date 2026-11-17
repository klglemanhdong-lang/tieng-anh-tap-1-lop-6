window.ENG6_LESSONS = window.ENG6_LESSONS || {};

window.ENG6_LESSONS[33] = {
    unit: 4, // Thuộc Unit 4: My Neighbourhood
    title: "Day 33: Comparative Adjectives (Long Adjectives)",
    description: "Cấu trúc so sánh hơn với tính từ dài (more + Long Adj + than)",
    ipa: "/kəmˈperətɪv ˈædʒɪktɪvz lɔːŋ/",
    
    // Cấu hình lộ trình 7 màn hoạt động chuẩn cho Day 33
    activities: [
        'grammar-intro-day33',         // Màn 1: Lý thuyết so sánh hơn với tính từ dài
        'multiple-choice',              // Màn 2: Trắc nghiệm chia tính từ so sánh dài
        'matching-meaning',             // Màn 3: Nối câu & Nghĩa Tiếng Việt
        'listening',                    // Màn 4: Nghe âm thanh & chọn đáp án đúng
        'matching-ipa',                 // Màn 5: Nối câu & Phiên âm IPA chuẩn
        'sentence-builder-comp-long',   // Màn 6: Ghép câu so sánh dài (A city house is more expensive than a country house)
        'spelling'                      // Màn 7: Kiểm tra chính tả dạng so sánh dài
    ],

    vocab: [
        { 
            id: 'd33_ex1', 
            en: 'A city house is more expensive than a country house', 
            ipa: '/ə ˈsɪti haʊs ɪz mɔːr ɪkˈspensɪv ðæn ə ˈkʌntri haʊs/', 
            vi: 'Nhà ở thành phố đắt đỏ hơn nhà ở nông thôn', 
            wrongSpells: ['A city house is expensive than a country house', 'A city house are more expensive than a country house', 'A city house is most expensive than a country house'] 
        },
        { 
            id: 'd33_ex2', 
            en: 'This museum is more modern than that one', 
            ipa: '/ðɪs mjuˈziːəm ɪz mɔːr ˈmɑːdərn ðæn ðæt wʌn/', 
            vi: 'Bảo tàng này hiện đại hơn bảo tàng kia', 
            wrongSpells: ['This museum is modern than that one', 'This museum is more modern then that one', 'This museum are more modern than that one'] 
        },
        { 
            id: 'd33_ex3', 
            en: 'Life in the city is more exciting than life in the village', 
            ipa: '/laɪf ɪn ðə ˈsɪti ɪz mɔːr ɪkˈsaɪtɪŋ ðæn laɪf ɪn ðə ˈvɪlɪdʒ/', 
            vi: 'Cuộc sống ở thành phố thú vị hơn cuộc sống ở làng quê', 
            wrongSpells: ['Life in the city is exciting than life in the village', 'Life in the city is more exciting then village', 'Life in the city are more exciting than life'] 
        },
        { 
            id: 'd33_ex4', 
            en: 'This park is more peaceful than that park', 
            ipa: '/ðɪs pɑːrk ɪz mɔːr ˈpiːsfl ðæn ðæt pɑːrk/', 
            vi: 'Công viên này yên bình hơn công viên kia', 
            wrongSpells: ['This park is peaceful than that park', 'This park is more peaceful then that park', 'This park are more peaceful than that park'] 
        },
        { 
            id: 'd33_ex5', 
            en: 'English is more interesting than math', 
            ipa: '/ˈɪŋɡlɪʃ ɪz mɔːr ˈɪntrəstɪŋ ðæn mæθ/', 
            vi: 'Môn tiếng Anh thú vị hơn môn toán', 
            wrongSpells: ['English is interesting than math', 'English is more interesting then math', 'English are more interesting than math'] 
        }
    ]
};

window.ENG6_GAME_MODULES = window.ENG6_GAME_MODULES || {};

// MÀN 1: Lý thuyết so sánh hơn với tính từ dài (Day 33)
window.ENG6_GAME_MODULES['grammar-intro-day33'] = {
    title: 'Màn 1: Lý Thuyết - So Sánh Hơn (Tính Từ Dài)',
    render(ctx) {
        ctx.container.innerHTML = `
            <div class="space-y-4">
                <div class="text-center">
                    <span class="px-3 py-1 bg-emerald-100 text-emerald-800 font-bold text-xs rounded-full">Unit 4: Grammar</span>
                    <h3 class="text-2xl font-black text-slate-800 mt-2">So Sánh Hơn (Long Adjectives)</h3>
                    <p class="text-slate-600 text-sm mt-1">Dùng với các tính từ dài (từ hai âm tiết trở lên) để so sánh tính chất!</p>
                </div>

                <div class="bg-emerald-50 border-2 border-emerald-200 p-4 rounded-2xl space-y-3 text-slate-700 text-sm">
                    <div class="flex items-start space-x-3">
                        <div class="w-8 h-8 rounded-full bg-emerald-600 text-white font-bold flex items-center justify-center flex-shrink-0">1</div>
                        <div>
                            <strong class="text-emerald-900 block font-bold">Cấu trúc chung (Long Adjectives):</strong>
                            - Công thức: <span class="font-mono bg-white px-2 py-0.5 rounded border border-emerald-200 font-bold">S1 + be + more + Long Adj + than + S2</span><br>
                            - <span class="text-xs text-emerald-900 font-semibold">👉 Ví dụ: A city house is more expensive than a country house. (Nhà ở thành phố đắt đỏ hơn nhà ở nông thôn.)</span>
                        </div>
                    </div>
                    <div class="flex items-start space-x-3">
                        <div class="w-8 h-8 rounded-full bg-emerald-600 text-white font-bold flex items-center justify-center flex-shrink-0">2</div>
                        <div>
                            <strong class="text-emerald-900 block font-bold">Đặc điểm nhận biết tính từ dài:</strong>
                            - Là những tính từ có từ 2 âm tiết trở lên (ví dụ: *expensive, modern, peaceful, exciting, interesting*).<br>
                            - Không thêm đuôi `-er` vào sau tính từ dài mà đặt từ <span class="font-bold text-rose-600">more</span> vào ngay trước tính từ đó.
                        </div>
                    </div>
                </div>

                <div class="text-center pt-2">
                    <button onclick="playBtnSound(); completeLevel()" class="px-8 py-3.5 bg-gradient-to-r from-emerald-600 to-teal-600 text-white font-extrabold rounded-2xl shadow-lg hover:opacity-95 transition-all text-base">
                        Đã hiểu rõ cấu trúc, luyện tập ngay! <i class="fa-solid fa-arrow-right ml-2"></i>
                    </button>
                </div>
            </div>
        `;
    }
};

// MÀN 6: Sắp xếp câu so sánh dài (Sentence Builder)
window.ENG6_GAME_MODULES['sentence-builder-comp-long'] = {
    title: 'Màn 6: Ghép Câu So Sánh Hơn (Tính Từ Dài)',
    render(ctx) {
        window.day33BuildIndex = window.day33BuildIndex || 0;
        const sentences = [
            { words: ['A', 'city', 'house', 'is', 'more', 'expensive', 'than', 'a', 'country', 'house'], full: 'A city house is more expensive than a country house' },
            { words: ['This', 'museum', 'is', 'more', 'modern', 'than', 'that', 'one'], full: 'This museum is more modern than that one' },
            { words: ['This', 'park', 'is', 'more', 'peaceful', 'than', 'that', 'park'], full: 'This park is more peaceful than that park' },
            { words: ['English', 'is', 'more', 'interesting', 'than', 'math'], full: 'English is more interesting than math' },
            { words: ['Life', 'in', 'the', 'city', 'is', 'more', 'exciting', 'than', 'in', 'the', 'village'], full: 'Life in the city is more exciting than in the village' }
        ];

        if (window.day33BuildIndex >= sentences.length) {
            window.day33BuildIndex = 0;
            completeLevel();
            return;
        }

        const currS = sentences[window.day33BuildIndex];
        
        // Khởi tạo mảng xáo trộn ngẫu nhiên cho từng câu hỏi
        if (!window.day33ShuffledWords || window.day33CurrentQuestionIndex !== window.day33BuildIndex) {
            window.day33CurrentQuestionIndex = window.day33BuildIndex;
            let pool = [...currS.words];
            for (let i = pool.length - 1; i > 0; i--) {
                const j = Math.floor(Math.random() * (i + 1));
                [pool[i], pool[j]] = [pool[j], pool[i]];
            }
            window.day33ShuffledWords = pool;
            window.day33SelectedWords = [];
        }

        window.day33SelectedWords = window.day33SelectedWords || [];

        // Lọc các từ chưa được chọn từ kho từ đã xáo trộn
        let availablePool = [...window.day33ShuffledWords];
        window.day33SelectedWords.forEach(sel => {
            const idx = availablePool.indexOf(sel);
            if (idx > -1) availablePool.splice(idx, 1);
        });

        let selectedHTML = window.day33SelectedWords.map((w, i) => {
            const safeWord = w.replace(/'/g, "\\'");
            return `<button onclick="removeDay33Word(${i})" class="px-3 py-2 bg-emerald-600 text-white font-bold rounded-xl text-sm shadow">${w}</button>`;
        }).join('');

        let poolHTML = availablePool.map((w) => {
            const safeWord = w.replace(/'/g, "\\'");
            return `<button onclick="addDay33Word('${safeWord}')" class="px-4 py-2.5 bg-slate-100 hover:bg-slate-200 text-slate-800 font-bold rounded-xl text-sm border-2 border-slate-300">${w}</button>`;
        }).join('');

        const safeFullText = currS.full.replace(/'/g, "\\'");

        ctx.container.innerHTML = `
            <div>
                <div class="bg-emerald-50 border border-emerald-200 p-2.5 rounded-xl text-center mb-3">
                    <span class="text-xs font-bold text-emerald-800">💡 Cấu trúc: S1 + be + more + Long Adj + than + S2</span>
                </div>
                <div class="flex justify-between items-center mb-2">
                    <span class="text-xs font-bold text-slate-500">Câu ${window.day33BuildIndex + 1} / ${sentences.length}</span>
                </div>

                <div class="min-h-[60px] p-3 border-2 border-dashed border-emerald-300 bg-white rounded-2xl flex flex-wrap gap-2 items-center mb-4">
                    ${selectedHTML || '<span class="text-xs text-slate-400 font-medium">Bấm các từ xáo trộn bên dưới để ghép câu...</span>'}
                </div>

                <div class="flex flex-wrap gap-2 justify-center mb-6">${poolHTML}</div>

                <div class="text-center space-x-2">
                    <button onclick="checkDay33BuildSentence('${safeFullText}')" class="px-6 py-3 bg-emerald-600 text-white font-extrabold rounded-xl shadow">Kiểm tra</button>
                    <button onclick="resetDay33BuildSentence()" class="px-4 py-3 bg-slate-200 text-slate-700 font-bold rounded-xl">Làm lại</button>
                </div>
            </div>
        `;
    }
};

window.addDay33Word = function(word) {
    playBtnSound();
    window.day33SelectedWords = window.day33SelectedWords || [];
    window.day33SelectedWords.push(word);
    loadLevel(currentLevel);
};

window.removeDay33Word = function(index) {
    playBtnSound();
    window.day33SelectedWords.splice(index, 1);
    loadLevel(currentLevel);
};

window.resetDay33BuildSentence = function() {
    playBtnSound();
    window.day33SelectedWords = [];
    loadLevel(currentLevel);
};

window.checkDay33BuildSentence = function(target) {
    playBtnSound();
    const result = (window.day33SelectedWords || []).join(' ');
    if (result === target) {
        playSound('correct');
        window.day33SelectedWords = [];
        window.day33ShuffledWords = null;
        window.day33BuildIndex++;
        setTimeout(() => { loadLevel(currentLevel); }, 600);
    } else {
        handleWrongAnswer();
    }
};