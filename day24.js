window.ENG6_LESSONS = window.ENG6_LESSONS || {};

window.ENG6_LESSONS[24] = {
    unit: 3, // Thuộc Unit 3: My Friends
    title: "Day 24: Present Continuous (Affirmative & Negative)",
    description: "Thì hiện tại tiếp diễn dạng khẳng định và phủ định (Subject + is / are / am + Verb-ing)",
    ipa: "/ˈpreznt kənˈtɪnjuəs tens/",
    
    // Cấu hình lộ trình 7 màn hoạt động chuẩn cho Day 24
    activities: [
        'grammar-intro-day24',            // Màn 1: Lý thuyết bản chất thì hiện tại tiếp diễn
        'multiple-choice',                 // Màn 2: Trắc nghiệm chia động từ / ngữ pháp
        'matching-meaning',                // Màn 3: Nối câu & Nghĩa Tiếng Việt
        'listening',                       // Màn 4: Nghe âm thanh & chọn đáp án đúng
        'matching-ipa',                    // Màn 5: Nối câu & Phiên âm IPA chuẩn
        'sentence-builder-continuous',     // Màn 6: Ghép cấu trúc câu (They are playing football)
        'spelling'                         // Màn 7: Kiểm tra chính tả từ vựng / cấu trúc
    ],

    vocab: [
        { 
            id: 'd24_ex1', 
            en: 'She is talking to Mai', 
            ipa: '/ʃiː ɪz ˈtɔːkɪŋ tuː maɪ/', 
            vi: 'Cô ấy đang nói chuyện với Mai', 
            wrongSpells: ['She is talk to Mai', 'She are talking to Mai', 'She is talking Mai'] 
        },
        { 
            id: 'd24_ex2', 
            en: 'They are playing football', 
            ipa: '/ðeɪ ɑːr ˈpleɪɪŋ ˈfʊtbɔːl/', 
            vi: 'Họ đang chơi bóng đá', 
            wrongSpells: ['They is playing football', 'They are play football', 'They am playing football'] 
        },
        { 
            id: 'd24_ex3', 
            en: 'I am doing my homework', 
            ipa: '/aɪ əm ˈduːɪŋ maɪ ˈhoʊmwɜːrk/', 
            vi: 'Tôi đang làm bài tập về nhà của mình', 
            wrongSpells: ['I is doing my homework', 'I am do my homework', 'I are doing my homework'] 
        },
        { 
            id: 'd24_ex4', 
            en: 'He is reading a comic book', 
            ipa: '/hiː ɪz ˈriːdɪŋ ə ˈkɑːmɪk bʊk/', 
            vi: 'Cậu ấy đang đọc truyện tranh', 
            wrongSpells: ['He is read a comic book', 'He are reading a comic book', 'He is reading comic'] 
        },
        { 
            id: 'd24_ex5', 
            en: 'We are not talking now', 
            ipa: '/wiː ɑːr nɑːt ˈtɔːkɪŋ naʊ/', 
            vi: 'Chúng tôi đang không nói chuyện bây giờ', 
            wrongSpells: ['We is not talking now', 'We are not talk now', 'We am not talking now'] 
        }
    ]
};

window.ENG6_GAME_MODULES = window.ENG6_GAME_MODULES || {};

// MÀN 1: Lý thuyết bản chất thì hiện tại tiếp diễn (Day 24)
window.ENG6_GAME_MODULES['grammar-intro-day24'] = {
    title: 'Màn 1: Lý Thuyết - Thì Hiện Tại Tiếp Diễn (Present Continuous)',
    render(ctx) {
        ctx.container.innerHTML = `
            <div class="space-y-4">
                <div class="text-center">
                    <span class="px-3 py-1 bg-pink-100 text-pink-800 font-bold text-xs rounded-full">Unit 3: Grammar</span>
                    <h3 class="text-2xl font-black text-slate-800 mt-2">Thì Hiện Tại Tiếp Diễn (Khẳng Định & Phủ Định)</h3>
                    <p class="text-slate-600 text-sm mt-1">Dùng để diễn tả những hành động đang xảy ra ngay tại thời điểm nói!</p>
                </div>

                <div class="bg-pink-50 border-2 border-pink-200 p-4 rounded-2xl space-y-3 text-slate-700 text-sm">
                    <div class="flex items-start space-x-3">
                        <div class="w-8 h-8 rounded-full bg-pink-600 text-white font-bold flex items-center justify-center flex-shrink-0">1</div>
                        <div>
                            <strong class="text-pink-900 block font-bold">Thể khẳng định (Affirmative):</strong>
                            - Công thức: <span class="font-mono bg-white px-2 py-0.5 rounded border border-pink-200 font-bold">Subject + is / are / am + Verb-ing</span>[cite: 14]<br>
                            - Phân chia: <span class="text-slate-900 font-semibold">I + am</span> | <span class="text-slate-900 font-semibold">He / She / It / Danh từ số ít + is</span> | <span class="text-slate-900 font-semibold">We / You / They / Danh từ số nhiều + are</span>.<br>
                            - <span class="text-xs text-pink-900 font-semibold">👉 Ví dụ: She is talking to Mai. / They are playing football.</span>
                        </div>
                    </div>
                    <div class="flex items-start space-x-3">
                        <div class="w-8 h-8 rounded-full bg-pink-600 text-white font-bold flex items-center justify-center flex-shrink-0">2</div>
                        <div>
                            <strong class="text-pink-900 block font-bold">Thể phủ định (Negative):</strong>
                            - Công thức: <span class="font-mono bg-white px-2 py-0.5 rounded border border-pink-200 font-bold">Subject + is / are / am + not + Verb-ing</span><br>
                            - <span class="text-xs text-pink-900 font-semibold">👉 Ví dụ: We are not talking now. (Chúng tôi đang không nói chuyện.)</span>
                        </div>
                    </div>
                </div>

                <div class="text-center pt-2">
                    <button onclick="playBtnSound(); completeLevel()" class="px-8 py-3.5 bg-gradient-to-r from-pink-600 to-rose-600 text-white font-extrabold rounded-2xl shadow-lg hover:opacity-95 transition-all text-base">
                        Đã hiểu rõ cấu trúc, luyện tập ngay! <i class="fa-solid fa-arrow-right ml-2"></i>
                    </button>
                </div>
            </div>
        `;
    }
};

// MÀN 6: Sắp xếp cấu trúc câu hiện tại tiếp diễn (Sentence Builder)
window.ENG6_GAME_MODULES['sentence-builder-continuous'] = {
    title: 'Màn 6: Ghép Cấu Trúc Câu Hiện Tại Tiếp Diễn',
    render(ctx) {
        window.day24BuildIndex = window.day24BuildIndex || 0;
        const sentences = [
            { words: ['They', 'are', 'playing', 'football'], full: 'They are playing football' },
            { words: ['She', 'is', 'talking', 'to', 'Mai'], full: 'She is talking to Mai' },
            { words: ['I', 'am', 'doing', 'my', 'homework'], full: 'I am doing my homework' },
            { words: ['He', 'is', 'reading', 'a', 'comic', 'book'], full: 'He is reading a comic book' },
            { words: ['We', 'are', 'not', 'talking', 'now'], full: 'We are not talking now' }
        ];

        if (window.day24BuildIndex >= sentences.length) {
            window.day24BuildIndex = 0;
            completeLevel();
            return;
        }

        const currS = sentences[window.day24BuildIndex];
        
        // Khởi tạo mảng xáo trộn ngẫu nhiên cho từng câu hỏi
        if (!window.day24ShuffledWords || window.day24CurrentQuestionIndex !== window.day24BuildIndex) {
            window.day24CurrentQuestionIndex = window.day24BuildIndex;
            let pool = [...currS.words];
            for (let i = pool.length - 1; i > 0; i--) {
                const j = Math.floor(Math.random() * (i + 1));
                [pool[i], pool[j]] = [pool[j], pool[i]];
            }
            window.day24ShuffledWords = pool;
            window.day24SelectedWords = [];
        }

        window.day24SelectedWords = window.day24SelectedWords || [];

        // Lọc các từ chưa được chọn từ kho từ đã xáo trộn
        let availablePool = [...window.day24ShuffledWords];
        window.day24SelectedWords.forEach(sel => {
            const idx = availablePool.indexOf(sel);
            if (idx > -1) availablePool.splice(idx, 1);
        });

        let selectedHTML = window.day24SelectedWords.map((w, i) => {
            const safeWord = w.replace(/'/g, "\\'");
            return `<button onclick="removeDay24Word(${i})" class="px-3 py-2 bg-pink-600 text-white font-bold rounded-xl text-sm shadow">${w}</button>`;
        }).join('');

        let poolHTML = availablePool.map((w) => {
            const safeWord = w.replace(/'/g, "\\'");
            return `<button onclick="addDay24Word('${safeWord}')" class="px-4 py-2.5 bg-slate-100 hover:bg-slate-200 text-slate-800 font-bold rounded-xl text-sm border-2 border-slate-300">${w}</button>`;
        }).join('');

        const safeFullText = currS.full.replace(/'/g, "\\'");

        ctx.container.innerHTML = `
            <div>
                <div class="bg-pink-50 border border-pink-200 p-2.5 rounded-xl text-center mb-3">
                    <span class="text-xs font-bold text-pink-800">💡 Cấu trúc: Subject + is / are / am + Verb-ing</span>
                </div>
                <div class="flex justify-between items-center mb-2">
                    <span class="text-xs font-bold text-slate-500">Câu ${window.day24BuildIndex + 1} / ${sentences.length}</span>
                </div>

                <div class="min-h-[60px] p-3 border-2 border-dashed border-pink-300 bg-white rounded-2xl flex flex-wrap gap-2 items-center mb-4">
                    ${selectedHTML || '<span class="text-xs text-slate-400 font-medium">Bấm các từ xáo trộn bên dưới để ghép câu...</span>'}
                </div>

                <div class="flex flex-wrap gap-2 justify-center mb-6">${poolHTML}</div>

                <div class="text-center space-x-2">
                    <button onclick="checkDay24BuildSentence('${safeFullText}')" class="px-6 py-3 bg-emerald-600 text-white font-extrabold rounded-xl shadow">Kiểm tra</button>
                    <button onclick="resetDay24BuildSentence()" class="px-4 py-3 bg-slate-200 text-slate-700 font-bold rounded-xl">Làm lại</button>
                </div>
            </div>
        `;
    }
};

window.addDay24Word = function(word) {
    playBtnSound();
    window.day24SelectedWords = window.day24SelectedWords || [];
    window.day24SelectedWords.push(word);
    loadLevel(currentLevel);
};

window.removeDay24Word = function(index) {
    playBtnSound();
    window.day24SelectedWords.splice(index, 1);
    loadLevel(currentLevel);
};

window.resetDay24BuildSentence = function() {
    playBtnSound();
    window.day24SelectedWords = [];
    loadLevel(currentLevel);
};

window.checkDay24BuildSentence = function(target) {
    playBtnSound();
    const result = (window.day24SelectedWords || []).join(' ');
    if (result === target) {
        playSound('correct');
        window.day24SelectedWords = [];
        window.day24ShuffledWords = null;
        window.day24BuildIndex++;
        setTimeout(() => { loadLevel(currentLevel); }, 600);
    } else {
        handleWrongAnswer();
    }
};