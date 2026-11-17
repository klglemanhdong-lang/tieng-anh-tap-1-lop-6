window.ENG6_LESSONS = window.ENG6_LESSONS || {};

window.ENG6_LESSONS[42] = {
    unit: 5, // Thuộc Unit 5: Natural Wonders of Viet Nam
    title: "Day 42: Countable and Uncountable Nouns",
    description: "Phân biệt danh từ đếm được / không đếm được và cách dùng some, many, a few, much, a little",
    ipa: "/ˈkaʊntəbl ænd ʌnˈkaʊntəbl naʊnz/",
    
    // Cấu hình lộ trình 7 màn hoạt động chuẩn cho Day 42
    activities: [
        'grammar-intro-day42',             // Màn 1: Lý thuyết danh từ đếm được & không đếm được
        'multiple-choice',                  // Màn 2: Trắc nghiệm phân loại và định lượng
        'matching-meaning',                 // Màn 3: Nối cấu trúc câu & Nghĩa Tiếng Việt
        'listening',                        // Màn 4: Nghe âm thanh & chọn đáp án đúng
        'matching-ipa',                     // Màn 5: Nối câu & Phiên âm IPA chuẩn
        'sentence-builder-nouns',           // Màn 6: Ghép câu (There is some snow on the road)
        'spelling'                          // Màn 7: Kiểm tra chính tả ngữ pháp
    ],

    vocab: [
        { 
            id: 'd42_ex1', 
            en: 'There is some snow on the road', 
            ipa: '/ðer ɪz sʌm snoʊ ɑːn ðə roʊd/', 
            vi: 'Có một ít tuyết trên đường', 
            wrongSpells: ['There are some snow on the road', 'There is any snow on the road', 'There is much snow on road'] 
        },
        { 
            id: 'd42_ex2', 
            en: 'How many books are there in your bag', 
            ipa: '/haʊ ˈmeni bʊks ɑːr ðer ɪn jʊər bæɡ/', 
            vi: 'Có bao nhiêu cuốn sách trong ba lô của bạn?', 
            wrongSpells: ['How much books are there in your bag', 'How many book are there in your bag', 'How many books is there in your bag'] 
        },
        { 
            id: 'd42_ex3', 
            en: 'There is not much milk left in the fridge', 
            ipa: '/ðer ɪz nɑːt mʌtʃ mɪlk left ɪn ðə frɪdʒ/', 
            vi: 'Không còn nhiều sữa trong tủ lạnh', 
            wrongSpells: ['There are not much milk left', 'There is not many milk left', 'There is no much milk left'] 
        },
        { 
            id: 'd42_ex4', 
            en: 'We need a few questions to ask you', 
            ipa: '/wiː niːd ə fjuː ˈkwestʃənz tuː æsk juː/', 
            vi: 'Chúng tôi cần một vài câu hỏi để hỏi bạn', 
            wrongSpells: ['We need a little questions to ask you', 'We need few questions to ask you', 'We need a few question to ask you'] 
        },
        { 
            id: 'd42_ex5', 
            en: 'Australia has a lot of natural wonders', 
            ipa: '/ɔːˈstreɪliə hæz ə lɑːt ʌv ˈnætʃrəl ˈwʌndərz/', 
            vi: 'Nước Úc có rất nhiều kỳ quan thiên nhiên', 
            wrongSpells: ['Australia have a lot of natural wonders', 'Australia has much natural wonders', 'Australia has a lot natural wonders'] 
        }
    ]
};

window.ENG6_GAME_MODULES = window.ENG6_GAME_MODULES || {};

// MÀN 1: Lý thuyết danh từ đếm được và không đếm được (Day 42)
window.ENG6_GAME_MODULES['grammar-intro-day42'] = {
    title: 'Màn 1: Lý Thuyết - Countable & Uncountable Nouns',
    render(ctx) {
        ctx.container.innerHTML = `
            <div class="space-y-4">
                <div class="text-center">
                    <span class="px-3 py-1 bg-teal-100 text-teal-800 font-bold text-xs rounded-full">Unit 5: Grammar</span>
                    <h3 class="text-2xl font-black text-slate-800 mt-2">Danh Từ Đếm Được & Không Đếm Được</h3>
                    <p class="text-slate-600 text-sm mt-1">Phân biệt danh từ và cách sử dụng các từ chỉ định lượng chuẩn xác!</p>
                </div>

                <div class="bg-teal-50 border-2 border-teal-200 p-4 rounded-2xl space-y-3 text-slate-700 text-sm">
                    <div class="flex items-start space-x-3">
                        <div class="w-8 h-8 rounded-full bg-teal-600 text-white font-bold flex items-center justify-center flex-shrink-0">1</div>
                        <div>
                            <strong class="text-teal-900 block font-bold">Danh từ đếm được (Countable Nouns):</strong>
                            - Là những từ có thể đếm bằng số lượng, có cả dạng số ít (a rock, an island) và số nhiều (rocks, islands)[cite: 11].<br>
                            - Đi với định lượng: <span class="font-bold text-teal-800">some, many, a few</span>[cite: 11].
                        </div>
                    </div>
                    <div class="flex items-start space-x-3">
                        <div class="w-8 h-8 rounded-full bg-teal-600 text-white font-bold flex items-center justify-center flex-shrink-0">2</div>
                        <div>
                            <strong class="text-teal-900 block font-bold">Danh từ không đếm được (Uncountable Nouns):</strong>
                            - Là những thứ không đếm trực tiếp bằng số lượng (ví dụ: *snow, milk, water, sugar, furniture*), không có dạng số nhiều[cite: 11].<br>
                            - Đi với định lượng: <span class="font-bold text-teal-800">some, much, a little</span>[cite: 11].
                        </div>
                    </div>
                    <div class="flex items-start space-x-3">
                        <div class="w-8 h-8 rounded-full bg-teal-600 text-white font-bold flex items-center justify-center flex-shrink-0">3</div>
                        <div>
                            <strong class="text-teal-900 block font-bold">Quy tắc ghi nhớ nhanh:</strong>
                            - <span class="font-mono bg-white px-2 py-0.5 rounded border border-teal-200 font-bold">There is some snow on the road.</span> (Snow không đếm được đi với *is* và *some*)[cite: 11].
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

// MÀN 6: Sắp xếp câu ngữ pháp danh từ định lượng (Sentence Builder)
window.ENG6_GAME_MODULES['sentence-builder-nouns'] = {
    title: 'Màn 6: Ghép Câu Danh Từ & Từ Định Lượng',
    render(ctx) {
        window.day42BuildIndex = window.day42BuildIndex || 0;
        const sentences = [
            { words: ['There', 'is', 'some', 'snow', 'on', 'the', 'road'], full: 'There is some snow on the road' },
            { words: ['How', 'many', 'books', 'are', 'there', 'in', 'your', 'bag'], full: 'How many books are there in your bag' },
            { words: ['There', 'is', 'not', 'much', 'milk', 'left', 'in', 'the', 'fridge'], full: 'There is not much milk left in the fridge' },
            { words: ['We', 'need', 'a', 'few', 'questions', 'to', 'ask', 'you'], full: 'We need a few questions to ask you' },
            { words: ['Australia', 'has', 'a', 'lot', 'of', 'natural', 'wonders'], full: 'Australia has a lot of natural wonders' }
        ];

        if (window.day42BuildIndex >= sentences.length) {
            window.day42BuildIndex = 0;
            completeLevel();
            return;
        }

        const currS = sentences[window.day42BuildIndex];
        
        // Khởi tạo mảng xáo trộn ngẫu nhiên cho từng câu hỏi
        if (!window.day42ShuffledWords || window.day42CurrentQuestionIndex !== window.day42BuildIndex) {
            window.day42CurrentQuestionIndex = window.day42BuildIndex;
            let pool = [...currS.words];
            for (let i = pool.length - 1; i > 0; i--) {
                const j = Math.floor(Math.random() * (i + 1));
                [pool[i], pool[j]] = [pool[j], pool[i]];
            }
            window.day42ShuffledWords = pool;
            window.day42SelectedWords = [];
        }

        window.day42SelectedWords = window.day42SelectedWords || [];

        // Lọc các từ chưa được chọn từ kho từ đã xáo trộn
        let availablePool = [...window.day42ShuffledWords];
        window.day42SelectedWords.forEach(sel => {
            const idx = availablePool.indexOf(sel);
            if (idx > -1) availablePool.splice(idx, 1);
        });

        let selectedHTML = window.day42SelectedWords.map((w, i) => {
            const safeWord = w.replace(/'/g, "\\'");
            return `<button onclick="removeDay42Word(${i})" class="px-3 py-2 bg-teal-600 text-white font-bold rounded-xl text-sm shadow">${w}</button>`;
        }).join('');

        let poolHTML = availablePool.map((w) => {
            const safeWord = w.replace(/'/g, "\\'");
            return `<button onclick="addDay42Word('${safeWord}')" class="px-4 py-2.5 bg-slate-100 hover:bg-slate-200 text-slate-800 font-bold rounded-xl text-sm border-2 border-slate-300">${w}</button>`;
        }).join('');

        const safeFullText = currS.full.replace(/'/g, "\\'");

        ctx.container.innerHTML = `
            <div>
                <div class="bg-teal-50 border border-teal-200 p-2.5 rounded-xl text-center mb-3">
                    <span class="text-xs font-bold text-teal-800">💡 Ghép các từ xáo trộn bên dưới thành câu ngữ pháp hoàn chỉnh</span>
                </div>
                <div class="flex justify-between items-center mb-2">
                    <span class="text-xs font-bold text-slate-500">Câu ${window.day42BuildIndex + 1} / ${sentences.length}</span>
                </div>

                <div class="min-h-[60px] p-3 border-2 border-dashed border-teal-300 bg-white rounded-2xl flex flex-wrap gap-2 items-center mb-4">
                    ${selectedHTML || '<span class="text-xs text-slate-400 font-medium">Bấm các từ xáo trộn bên dưới để ghép câu...</span>'}
                </div>

                <div class="flex flex-wrap gap-2 justify-center mb-6">${poolHTML}</div>

                <div class="text-center space-x-2">
                    <button onclick="checkDay42BuildSentence('${safeFullText}')" class="px-6 py-3 bg-teal-600 text-white font-extrabold rounded-xl shadow">Kiểm tra</button>
                    <button onclick="resetDay42BuildSentence()" class="px-4 py-3 bg-slate-200 text-slate-700 font-bold rounded-xl">Làm lại</button>
                </div>
            </div>
        `;
    }
};

window.addDay42Word = function(word) {
    playBtnSound();
    window.day42SelectedWords = window.day42SelectedWords || [];
    window.day42SelectedWords.push(word);
    loadLevel(currentLevel);
};

window.removeDay42Word = function(index) {
    playBtnSound();
    window.day42SelectedWords.splice(index, 1);
    loadLevel(currentLevel);
};

window.resetDay42BuildSentence = function() {
    playBtnSound();
    window.day42SelectedWords = [];
    loadLevel(currentLevel);
};

window.checkDay42BuildSentence = function(target) {
    playBtnSound();
    const result = (window.day42SelectedWords || []).join(' ');
    if (result === target) {
        playSound('correct');
        window.day42SelectedWords = [];
        window.day42ShuffledWords = null;
        window.day42BuildIndex++;
        setTimeout(() => { loadLevel(currentLevel); }, 600);
    } else {
        handleWrongAnswer();
    }
};