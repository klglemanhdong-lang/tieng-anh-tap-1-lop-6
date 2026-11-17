window.ENG6_LESSONS = window.ENG6_LESSONS || {};

window.ENG6_LESSONS[52] = {
    unit: 6, // Thuộc Unit 6: Our Tet Holiday
    title: "Day 52: Some / Any for Amount",
    description: "Cách sử dụng some và any để chỉ số lượng trong câu khẳng định, phủ định và nghi vấn (There is not any ice cream)",
    ipa: "/sʌm ˈeni fɔːr əˈmaʊnt/",
    
    // Cấu hình lộ trình 7 màn hoạt động chuẩn cho Day 52
    activities: [
        'grammar-intro-day52',         // Màn 1: Lý thuyết some và any chỉ số lượng
        'multiple-choice',              // Màn 2: Trắc nghiệm điền some hoặc any
        'matching-meaning',             // Màn 3: Nối câu định lượng & Nghĩa Tiếng Việt
        'listening',                    // Màn 4: Nghe âm thanh & chọn đáp án đúng
        'matching-ipa',                 // Màn 5: Nối câu & Phiên âm IPA chuẩn
        'sentence-builder-some-any',    // Màn 6: Ghép câu định lượng (There is not any ice cream)
        'spelling'                      // Màn 7: Kiểm tra chính tả ngữ pháp định lượng
    ],

    vocab: [
        { 
            id: 'd52_ex1', 
            en: 'There is not any ice cream', 
            ipa: '/ðer ɪz nɑːt ˈeni aɪs kriːm/', 
            vi: 'Không có chút kem nào cả', 
            wrongSpells: ['There is not some ice cream', 'There are not any ice cream', 'There is no any ice cream'] 
        },
        { 
            id: 'd52_ex2', 
            en: 'My mother bought some fruits', 
            ipa: '/maɪ ˈmʌðər bɔːt sʌm fruːts/', 
            vi: 'Mẹ tôi đã mua một ít trái cây', 
            wrongSpells: ['My mother bought any fruits', 'My mother buy some fruits', 'My mother bought some fruit'] 
        },
        { 
            id: 'd52_ex3', 
            en: 'I need some milk for the cake', 
            ipa: '/aɪ niːd sʌm mɪlk fɔːr ðə keɪk/', 
            vi: 'Tôi cần một ít sữa cho chiếc bánh ngọt', 
            wrongSpells: ['I need any milk for the cake', 'I needs some milk', 'I need some milks'] 
        },
        { 
            id: 'd52_ex4', 
            en: 'I cannot answer any questions', 
            ipa: '/aɪ ˈkænt ˈænsər ˈeni ˈkwestʃənz/', 
            vi: 'Tôi không thể trả lời bất kỳ câu hỏi nào', 
            wrongSpells: ['I cannot answer some questions', 'I can answer any question', 'I cannot answers any questions'] 
        },
        { 
            id: 'd52_ex5', 
            en: 'Do you have any sugar', 
            ipa: '/duː juː hæv ˈeni ˈʃʊɡər/', 
            vi: 'Bạn có chút đường nào không?', 
            wrongSpells: ['Do you have some sugar', 'Does you have any sugar', 'Have you any sugar'] 
        }
    ]
};

window.ENG6_GAME_MODULES = window.ENG6_GAME_MODULES || {};

// MÀN 1: Lý thuyết some và any chỉ số lượng (Day 52)
window.ENG6_GAME_MODULES['grammar-intro-day52'] = {
    title: 'Màn 1: Lý Thuyết - Some / Any for Amount',
    render(ctx) {
        ctx.container.innerHTML = `
            <div class="space-y-4">
                <div class="text-center">
                    <span class="px-3 py-1 bg-amber-100 text-amber-800 font-bold text-xs rounded-full">Unit 6: Grammar</span>
                    <h3 class="text-2xl font-black text-slate-800 mt-2">Cách Dùng some và any Chỉ Số Lượng</h3>
                    <p class="text-slate-600 text-sm mt-1">Phân biệt rõ khi nào dùng some và khi nào dùng any trong câu tiếng Anh!</p>
                </div>

                <div class="bg-amber-50 border-2 border-amber-200 p-4 rounded-2xl space-y-3 text-slate-700 text-sm">
                    <div class="flex items-start space-x-3">
                        <div class="w-8 h-8 rounded-full bg-amber-600 text-white font-bold flex items-center justify-center flex-shrink-0">1</div>
                        <div>
                            <strong class="text-amber-900 block font-bold">Từ SOME (Một vài / Một ít):</strong>
                            - Thường dùng trong **câu khẳng định** với cả danh từ đếm được số nhiều và danh từ không đếm được[cite: 11].<br>
                            - <span class="text-xs text-amber-900 font-semibold">👉 Ví dụ: My mother bought some fruits. (Mẹ tôi mua một ít trái cây.) / I need some milk. (Tôi cần một ít sữa.)</span>[cite: 11]
                        </div>
                    </div>
                    <div class="flex items-start space-x-3">
                        <div class="w-8 h-8 rounded-full bg-amber-600 text-white font-bold flex items-center justify-center flex-shrink-0">2</div>
                        <div>
                            <strong class="text-amber-900 block font-bold">Từ ANY (Bất kỳ / Chút nào):</strong>
                            - Thường dùng trong **câu phủ định** và **câu hỏi (nghi vấn)**[cite: 11].<br>
                            - <span class="text-xs text-amber-900 font-semibold">👉 Ví dụ: There is not any ice cream. (Không có chút kem nào.) / Do you have any sugar? (Bạn có chút đường nào không?)</span>[cite: 11]
                        </div>
                    </div>
                </div>

                <div class="text-center pt-2">
                    <button onclick="playBtnSound(); completeLevel()" class="px-8 py-3.5 bg-gradient-to-r from-amber-600 to-orange-600 text-white font-extrabold rounded-2xl shadow-lg hover:opacity-95 transition-all text-base">
                        Đã hiểu rõ cấu trúc, luyện tập ngay! <i class="fa-solid fa-arrow-right ml-2"></i>
                    </button>
                </div>
            </div>
        `;
    }
};

// MÀN 6: Sắp xếp câu định lượng (Sentence Builder)
window.ENG6_GAME_MODULES['sentence-builder-some-any'] = {
    title: 'Màn 6: Ghép Câu Định Lượng Với some / any',
    render(ctx) {
        window.day52BuildIndex = window.day52BuildIndex || 0;
        const sentences = [
            { words: ['There', 'is', 'not', 'any', 'ice', 'cream'], full: 'There is not any ice cream' },
            { words: ['My', 'mother', 'bought', 'some', 'fruits'], full: 'My mother bought some fruits' },
            { words: ['I', 'need', 'some', 'milk', 'for', 'the', 'cake'], full: 'I need some milk for the cake' },
            { words: ['I', 'cannot', 'answer', 'any', 'questions'], full: 'I cannot answer any questions' },
            { words: ['Do', 'you', 'have', 'any', 'sugar'], full: 'Do you have any sugar' }
        ];

        if (window.day52BuildIndex >= sentences.length) {
            window.day52BuildIndex = 0;
            completeLevel();
            return;
        }

        const currS = sentences[window.day52BuildIndex];
        
        // Khởi tạo mảng xáo trộn ngẫu nhiên cho từng câu hỏi
        if (!window.day52ShuffledWords || window.day52CurrentQuestionIndex !== window.day52BuildIndex) {
            window.day52CurrentQuestionIndex = window.day52BuildIndex;
            let pool = [...currS.words];
            for (let i = pool.length - 1; i > 0; i--) {
                const j = Math.floor(Math.random() * (i + 1));
                [pool[i], pool[j]] = [pool[j], pool[i]];
            }
            window.day52ShuffledWords = pool;
            window.day52SelectedWords = [];
        }

        window.day52SelectedWords = window.day52SelectedWords || [];

        // Lọc các từ chưa được chọn từ kho từ đã xáo trộn
        let availablePool = [...window.day52ShuffledWords];
        window.day52SelectedWords.forEach(sel => {
            const idx = availablePool.indexOf(sel);
            if (idx > -1) availablePool.splice(idx, 1);
        });

        let selectedHTML = window.day52SelectedWords.map((w, i) => {
            const safeWord = w.replace(/'/g, "\\'");
            return `<button onclick="removeDay52Word(${i})" class="px-3 py-2 bg-amber-600 text-white font-bold rounded-xl text-sm shadow">${w}</button>`;
        }).join('');

        let poolHTML = availablePool.map((w) => {
            const safeWord = w.replace(/'/g, "\\'");
            return `<button onclick="addDay52Word('${safeWord}')" class="px-4 py-2.5 bg-slate-100 hover:bg-slate-200 text-slate-800 font-bold rounded-xl text-sm border-2 border-slate-300">${w}</button>`;
        }).join('');

        const safeFullText = currS.full.replace(/'/g, "\\'");

        ctx.container.innerHTML = `
            <div>
                <div class="bg-amber-50 border border-amber-200 p-2.5 rounded-xl text-center mb-3">
                    <span class="text-xs font-bold text-amber-800">💡 Ghép các từ xáo trộn bên dưới thành câu định lượng hoàn chỉnh</span>
                </div>
                <div class="flex justify-between items-center mb-2">
                    <span class="text-xs font-bold text-slate-500">Câu ${window.day52BuildIndex + 1} / ${sentences.length}</span>
                </div>

                <div class="min-h-[60px] p-3 border-2 border-dashed border-amber-300 bg-white rounded-2xl flex flex-wrap gap-2 items-center mb-4">
                    ${selectedHTML || '<span class="text-xs text-slate-400 font-medium">Bấm các từ xáo trộn bên dưới để ghép câu...</span>'}
                </div>

                <div class="flex flex-wrap gap-2 justify-center mb-6">${poolHTML}</div>

                <div class="text-center space-x-2">
                    <button onclick="checkDay52BuildSentence('${safeFullText}')" class="px-6 py-3 bg-amber-600 text-white font-extrabold rounded-xl shadow">Kiểm tra</button>
                    <button onclick="resetDay52BuildSentence()" class="px-4 py-3 bg-slate-200 text-slate-700 font-bold rounded-xl">Làm lại</button>
                </div>
            </div>
        `;
    }
};

window.addDay52Word = function(word) {
    playBtnSound();
    window.day52SelectedWords = window.day52SelectedWords || [];
    window.day52SelectedWords.push(word);
    loadLevel(currentLevel);
};

window.removeDay52Word = function(index) {
    playBtnSound();
    window.day52SelectedWords.splice(index, 1);
    loadLevel(currentLevel);
};

window.resetDay52BuildSentence = function() {
    playBtnSound();
    window.day52SelectedWords = [];
    loadLevel(currentLevel);
};

window.checkDay52BuildSentence = function(target) {
    playBtnSound();
    const result = (window.day52SelectedWords || []).join(' ');
    if (result === target) {
        playSound('correct');
        window.day52SelectedWords = [];
        window.day52ShuffledWords = null;
        window.day52BuildIndex++;
        setTimeout(() => { loadLevel(currentLevel); }, 600);
    } else {
        handleWrongAnswer();
    }
};