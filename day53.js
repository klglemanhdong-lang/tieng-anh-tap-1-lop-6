window.ENG6_LESSONS = window.ENG6_LESSONS || {};

window.ENG6_LESSONS[53] = {
    unit: 6, // Thuộc Unit 6: Our Tet Holiday
    title: "Day 53: Saying New Year Wishes",
    description: "Mẫu câu chúc mừng năm mới (Wishing you joy and laughter from January to December! A year full of fun.)",
    ipa: "/ˈseɪɪŋ nuː jɪər wɪʃɪz/",
    
    // Cấu hình lộ trình 7 màn hoạt động chuẩn cho Day 53
    activities: [
        'grammar-intro-day53',         // Màn 1: Hội thoại chúc Tết & Lý thuyết lời chúc
        'multiple-choice',              // Màn 2: Trắc nghiệm giao tiếp chúc mừng năm mới
        'matching-meaning',             // Màn 3: Nối câu chúc & Nghĩa Tiếng Việt
        'listening',                    // Màn 4: Nghe câu chúc & chọn đáp án đúng
        'matching-ipa',                 // Màn 5: Nối câu & Phiên âm IPA chuẩn
        'sentence-builder-wishes',      // Màn 6: Ghép câu chúc mừng năm mới
        'speaking'                      // Màn 7: Luyện nói AI chuẩn xác
    ],

    vocab: [
        { 
            id: 'd53_w1', 
            en: 'Wishing you joy and laughter from January to December', 
            ipa: '/ˈwɪʃɪŋ juː dʒɔɪ ænd ˈlæftər frɑːm ˈdʒænjueri tuː dɪˈsembər/', 
            vi: 'Chúc bạn niềm vui và tiếng cười từ tháng Giêng đến tháng Mười Hai', 
            wrongSpells: ['Wishing you joys and laughter', 'Wish you joy and laughter from January', 'Wishing you joy and laugh'] 
        },
        { 
            id: 'd53_w2', 
            en: 'A year full of fun happiness and cheers', 
            ipa: '/ə jɪər fʊl ʌv fʌn ˈhæpinəs ænd tʃɪərz/', 
            vi: 'Một năm tràn ngập niềm vui, hạnh phúc và những lời chúc tụng', 
            wrongSpells: ['A year full with fun', 'A year filled of fun', 'Year full of fun and happiness'] 
        },
        { 
            id: 'd53_w3', 
            en: 'A life full of happy moments', 
            ipa: '/ə laɪf fʊl ʌv ˈhæpi ˈmoʊmənts/', 
            vi: 'Một cuộc sống tràn ngập những khoảnh khắc hạnh phúc', 
            wrongSpells: ['A life full with happy moments', 'Life full of happy moment', 'A live full of happy moments'] 
        },
        { 
            id: 'd53_w4', 
            en: 'Success in your studies', 
            ipa: '/səkˈses ɪn jʊər ˈstʌdiz/', 
            vi: 'Thành công trong việc học tập của bạn', 
            wrongSpells: ['Success in your study', 'Successful in your studies', 'Succes in your studies'] 
        },
        { 
            id: 'd53_w5', 
            en: 'Say Happy New Year when we meet people', 
            ipa: '/seɪ ˈhæpi nuː jɪər wen wiː miːt ˈpiːpl/', 
            vi: 'Nói Chúc mừng năm mới khi chúng ta gặp mọi người', 
            wrongSpells: ['Say Happy New Year when we meets people', 'Say Happy New Years', 'Saying Happy New Year'] 
        }
    ]
};

window.ENG6_GAME_MODULES = window.ENG6_GAME_MODULES || {};

// MÀN 1: Hội thoại chúc Tết & Lý thuyết lời chúc (Day 53)
window.ENG6_GAME_MODULES['grammar-intro-day53'] = {
    title: 'Màn 1: Hội Thoại Mẫu - Chúc Mừng Năm Mới (New Year Wishes)',
    render(ctx) {
        ctx.container.innerHTML = `
            <div class="space-y-4">
                <div class="text-center">
                    <span class="px-3 py-1 bg-amber-100 text-amber-800 font-bold text-xs rounded-full">Unit 6: Everyday English</span>
                    <h3 class="text-2xl font-black text-slate-800 mt-2">Saying New Year's Wishes</h3>
                    <p class="text-slate-600 text-sm mt-1">Học các câu chúc hay và ý nghĩa dành tặng người thân, bạn bè vào dịp đầu năm mới!</p>
                </div>

                <div class="bg-white border-2 border-amber-200 p-3.5 rounded-2xl space-y-2 text-xs md:text-sm shadow-sm">
                    <div class="font-bold text-amber-700 uppercase tracking-wide text-xs mb-1">💬 Lời chúc Tết mẫu (SGK Tiếng Anh 6 trang 63[cite: 12]):</div>
                    <p class="italic text-slate-800 font-medium">"Wishing you joy and laughter from January to December! A year full of fun, happiness and cheers."[cite: 12]</p>
                </div>

                <div class="bg-amber-50 border-2 border-amber-200 p-4 rounded-2xl space-y-3 text-slate-700 text-sm">
                    <div class="flex items-start space-x-3">
                        <div class="w-8 h-8 rounded-full bg-amber-600 text-white font-bold flex items-center justify-center flex-shrink-0">1</div>
                        <div>
                            <strong class="text-amber-900 block font-bold">Mẫu câu chúc sức khỏe & niềm vui:</strong>
                            - <span class="font-mono bg-white px-2 py-0.5 rounded border border-amber-200 font-bold">Wishing you joy and laughter...</span>[cite: 12]<br>
                            - <span class="font-mono bg-white px-2 py-0.5 rounded border border-amber-200 font-bold">A year full of fun and happiness.</span>[cite: 12]
                        </div>
                    </div>
                    <div class="flex items-start space-x-3">
                        <div class="w-8 h-8 rounded-full bg-amber-600 text-white font-bold flex items-center justify-center flex-shrink-0">2</div>
                        <div>
                            <strong class="text-amber-900 block font-bold">Mẫu câu chúc học tập:</strong>
                            - <span class="font-semibold text-slate-900">Success in your studies.</span>[cite: 12] (Thành công trong học tập).
                        </div>
                    </div>
                </div>

                <div class="text-center pt-2">
                    <button onclick="playBtnSound(); completeLevel()" class="px-8 py-3.5 bg-gradient-to-r from-amber-600 to-orange-600 text-white font-extrabold rounded-2xl shadow-lg hover:opacity-95 transition-all text-base">
                        Đã hiểu rõ, vào luyện tập ngay! <i class="fa-solid fa-arrow-right ml-2"></i>
                    </button>
                </div>
            </div>
        `;
    }
};

// MÀN 6: Sắp xếp câu chúc mừng năm mới (Sentence Builder)
window.ENG6_GAME_MODULES['sentence-builder-wishes'] = {
    title: 'Màn 6: Ghép Câu Chúc Mừng Năm Mới',
    render(ctx) {
        window.day53BuildIndex = window.day53BuildIndex || 0;
        const sentences = [
            { words: ['Wishing', 'you', 'joy', 'and', 'laughter', 'from', 'January', 'to', 'December'], full: 'Wishing you joy and laughter from January to December' },
            { words: ['A', 'year', 'full', 'of', 'fun', 'happiness', 'and', 'cheers'], full: 'A year full of fun happiness and cheers' },
            { words: ['A', 'life', 'full', 'of', 'happy', 'moments'], full: 'A life full of happy moments' },
            { words: ['Success', 'in', 'your', 'studies'], full: 'Success in your studies' },
            { words: ['Say', 'Happy', 'New', 'Year', 'when', 'we', 'meet', 'people'], full: 'Say Happy New Year when we meet people' }
        ];

        if (window.day53BuildIndex >= sentences.length) {
            window.day53BuildIndex = 0;
            completeLevel();
            return;
        }

        const currS = sentences[window.day53BuildIndex];
        
        // Khởi tạo mảng xáo trộn ngẫu nhiên cho từng câu hỏi
        if (!window.day53ShuffledWords || window.day53CurrentQuestionIndex !== window.day53BuildIndex) {
            window.day53CurrentQuestionIndex = window.day53BuildIndex;
            let pool = [...currS.words];
            for (let i = pool.length - 1; i > 0; i--) {
                const j = Math.floor(Math.random() * (i + 1));
                [pool[i], pool[j]] = [pool[j], pool[i]];
            }
            window.day53ShuffledWords = pool;
            window.day53SelectedWords = [];
        }

        window.day53SelectedWords = window.day53SelectedWords || [];

        // Lọc các từ chưa được chọn từ kho từ đã xáo trộn
        let availablePool = [...window.day53ShuffledWords];
        window.day53SelectedWords.forEach(sel => {
            const idx = availablePool.indexOf(sel);
            if (idx > -1) availablePool.splice(idx, 1);
        });

        let selectedHTML = window.day53SelectedWords.map((w, i) => {
            const safeWord = w.replace(/'/g, "\\'");
            return `<button onclick="removeDay53Word(${i})" class="px-3 py-2 bg-amber-600 text-white font-bold rounded-xl text-sm shadow">${w}</button>`;
        }).join('');

        let poolHTML = availablePool.map((w) => {
            const safeWord = w.replace(/'/g, "\\'");
            return `<button onclick="addDay53Word('${safeWord}')" class="px-4 py-2.5 bg-slate-100 hover:bg-slate-200 text-slate-800 font-bold rounded-xl text-sm border-2 border-slate-300">${w}</button>`;
        }).join('');

        const safeFullText = currS.full.replace(/'/g, "\\'");

        ctx.container.innerHTML = `
            <div>
                <div class="bg-amber-50 border border-amber-200 p-2.5 rounded-xl text-center mb-3">
                    <span class="text-xs font-bold text-amber-800">💡 Ghép các từ xáo trộn bên dưới thành câu chúc Tết hoàn chỉnh</span>
                </div>
                <div class="flex justify-between items-center mb-2">
                    <span class="text-xs font-bold text-slate-500">Câu ${window.day53BuildIndex + 1} / ${sentences.length}</span>
                </div>

                <div class="min-h-[60px] p-3 border-2 border-dashed border-amber-300 bg-white rounded-2xl flex flex-wrap gap-2 items-center mb-4">
                    ${selectedHTML || '<span class="text-xs text-slate-400 font-medium">Bấm các từ xáo trộn bên dưới để ghép câu...</span>'}
                </div>

                <div class="flex flex-wrap gap-2 justify-center mb-6">${poolHTML}</div>

                <div class="text-center space-x-2">
                    <button onclick="checkDay53BuildSentence('${safeFullText}')" class="px-6 py-3 bg-amber-600 text-white font-extrabold rounded-xl shadow">Kiểm tra</button>
                    <button onclick="resetDay53BuildSentence()" class="px-4 py-3 bg-slate-200 text-slate-700 font-bold rounded-xl">Làm lại</button>
                </div>
            </div>
        `;
    }
};

window.addDay53Word = function(word) {
    playBtnSound();
    window.day53SelectedWords = window.day53SelectedWords || [];
    window.day53SelectedWords.push(word);
    loadLevel(currentLevel);
};

window.removeDay53Word = function(index) {
    playBtnSound();
    window.day53SelectedWords.splice(index, 1);
    loadLevel(currentLevel);
};

window.resetDay53BuildSentence = function() {
    playBtnSound();
    window.day53SelectedWords = [];
    loadLevel(currentLevel);
};

window.checkDay53BuildSentence = function(target) {
    playBtnSound();
    const result = (window.day53SelectedWords || []).join(' ');
    if (result === target) {
        playSound('correct');
        window.day53SelectedWords = [];
        window.day53ShuffledWords = null;
        window.day53BuildIndex++;
        setTimeout(() => { loadLevel(currentLevel); }, 600);
    } else {
        handleWrongAnswer();
    }
};