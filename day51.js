window.ENG6_LESSONS = window.ENG6_LESSONS || {};

window.ENG6_LESSONS[51] = {
    unit: 6, // Thuộc Unit 6: Our Tet Holiday
    title: "Day 51: Should / Shouldn't for Advice",
    description: "Cấu trúc đưa ra lời khuyên nên hoặc không nên làm gì (Children should behave well. Children shouldn't eat lots of sweets.)",
    ipa: "/ʃʊd ˈʃʊdnt fɔːr ædˈvaɪs/",
    
    // Cấu hình lộ trình 7 màn hoạt động chuẩn cho Day 51
    activities: [
        'grammar-intro-day51',         // Màn 1: Lý thuyết should và shouldn't
        'multiple-choice',              // Màn 2: Trắc nghiệm chia động từ should / shouldn't
        'matching-meaning',             // Màn 3: Nối lời khuyên & Nghĩa Tiếng Việt
        'listening',                    // Màn 4: Nghe âm thanh & chọn đáp án đúng
        'matching-ipa',                 // Màn 5: Nối câu & Phiên âm IPA chuẩn
        'sentence-builder-should',      // Màn 6: Ghép câu lời khuyên (You should keep quiet)
        'spelling'                      // Màn 7: Kiểm tra chính tả ngữ pháp lời khuyên
    ],

    vocab: [
        { 
            id: 'd51_ex1', 
            en: 'You should keep quiet', 
            ipa: '/juː ʃʊd kiːp ˈkwaɪət/', 
            vi: 'Bạn nên giữ trật tự', 
            wrongSpells: ['You shouldn\'t keep quiet', 'You should keeps quiet', 'You should keeping quiet'] 
        },
        { 
            id: 'd51_ex2', 
            en: 'Children should behave well', 
            ipa: '/ˈtʃɪldrən ʃʊd bɪˈheɪv wel/', 
            vi: 'Trẻ em nên cư xử ngoan ngoãn', 
            wrongSpells: ['Children shouldn\'t behave well', 'Children should behaves well', 'Children should behaving well'] 
        },
        { 
            id: 'd51_ex3', 
            en: 'Children shouldn t eat lots of sweets', 
            ipa: '/ˈtʃɪldrən ˈʃʊdnt iːt lɑːts ʌv swiːts/', 
            vi: 'Trẻ em không nên ăn nhiều kẹo ngọt', 
            wrongSpells: ['Children should eat lots of sweets', 'Children shouldn\'t eats sweets', 'Children shouldn\'t eating sweets'] 
        },
        { 
            id: 'd51_ex4', 
            en: 'We should dress beautifully at Tet', 
            ipa: '/wiː ʃʊd dres ˈbjuːtɪfəli æt tet/', 
            vi: 'Chúng ta nên ăn mặc đẹp vào dịp Tết', 
            wrongSpells: ['We shouldn\'t dress beautifully', 'We should dresses beautifully', 'We should dressing beautifully'] 
        },
        { 
            id: 'd51_ex5', 
            en: 'You should knock before you enter', 
            ipa: '/juː ʃʊd nɑːk bɪˈfɔːr juː ˈentər/', 
            vi: 'Bạn nên gõ cửa trước khi bước vào', 
            wrongSpells: ['You shouldn\'t knock before entering', 'You should knocks before you enter', 'You should knocking'] 
        }
    ]
};

window.ENG6_GAME_MODULES = window.ENG6_GAME_MODULES || {};

// MÀN 1: Lý thuyết should và shouldn't (Day 51)
window.ENG6_GAME_MODULES['grammar-intro-day51'] = {
    title: 'Màn 1: Lý Thuyết - Should / Shouldn\'t for Advice',
    render(ctx) {
        ctx.container.innerHTML = `
            <div class="space-y-4">
                <div class="text-center">
                    <span class="px-3 py-1 bg-amber-100 text-amber-800 font-bold text-xs rounded-full">Unit 6: Grammar</span>
                    <h3 class="text-2xl font-black text-slate-800 mt-2">Đưa Ra Lời Khuyên Với should / shouldn't</h3>
                    <p class="text-slate-600 text-sm mt-1">Học cách nói về những việc nên làm và không nên làm trong các tình huống hàng ngày!</p>
                </div>

                <div class="bg-amber-50 border-2 border-amber-200 p-4 rounded-2xl space-y-3 text-slate-700 text-sm">
                    <div class="flex items-start space-x-3">
                        <div class="w-8 h-8 rounded-full bg-amber-600 text-white font-bold flex items-center justify-center flex-shrink-0">1</div>
                        <div>
                            <strong class="text-amber-900 block font-bold">Cấu trúc SHOULD (Nên làm gì):</strong>
                            - Dùng để đưa ra lời khuyên cho những việc tốt nên thực hiện[cite: 11].<br>
                            - Công thức: <span class="font-mono bg-white px-2 py-0.5 rounded border border-amber-200 font-bold">S + should + V (nguyên mẫu)</span><br>
                            - <span class="text-xs text-amber-900 font-semibold">👉 Ví dụ: Children should behave well. (Trẻ em nên cư xử ngoan ngoãn.)</span>[cite: 11]
                        </div>
                    </div>
                    <div class="flex items-start space-x-3">
                        <div class="w-8 h-8 rounded-full bg-amber-600 text-white font-bold flex items-center justify-center flex-shrink-0">2</div>
                        <div>
                            <strong class="text-amber-900 block font-bold">Cấu trúc SHOULDN'T (Không nên làm gì):</strong>
                            - Dùng để đưa ra lời khuyên can cho những việc không tốt không nên làm[cite: 11].<br>
                            - Công thức: <span class="font-mono bg-white px-2 py-0.5 rounded border border-amber-200 font-bold">S + shouldn't + V (nguyên mẫu)</span><br>
                            - <span class="text-xs text-amber-900 font-semibold">👉 Ví dụ: Children shouldn't eat lots of sweets. (Trẻ em không nên ăn nhiều đồ ngọt.)</span>[cite: 11]
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

// MÀN 6: Sắp xếp câu lời khuyên (Sentence Builder)
window.ENG6_GAME_MODULES['sentence-builder-should'] = {
    title: 'Màn 6: Ghép Câu Lời Khuyên với should / shouldn\'t',
    render(ctx) {
        window.day51BuildIndex = window.day51BuildIndex || 0;
        const sentences = [
            { words: ['You', 'should', 'keep', 'quiet'], full: 'You should keep quiet' },
            { words: ['Children', 'should', 'behave', 'well'], full: 'Children should behave well' },
            { words: ['Children', 'shouldn', 't', 'eat', 'lots', 'of', 'sweets'], full: 'Children shouldn t eat lots of sweets' },
            { words: ['We', 'should', 'dress', 'beautifully', 'at', 'Tet'], full: 'We should dress beautifully at Tet' },
            { words: ['You', 'should', 'knock', 'before', 'you', 'enter'], full: 'You should knock before you enter' }
        ];

        if (window.day51BuildIndex >= sentences.length) {
            window.day51BuildIndex = 0;
            completeLevel();
            return;
        }

        const currS = sentences[window.day51BuildIndex];
        
        // Khởi tạo mảng xáo trộn ngẫu nhiên cho từng câu hỏi
        if (!window.day51ShuffledWords || window.day51CurrentQuestionIndex !== window.day51BuildIndex) {
            window.day51CurrentQuestionIndex = window.day51BuildIndex;
            let pool = [...currS.words];
            for (let i = pool.length - 1; i > 0; i--) {
                const j = Math.floor(Math.random() * (i + 1));
                [pool[i], pool[j]] = [pool[j], pool[i]];
            }
            window.day51ShuffledWords = pool;
            window.day51SelectedWords = [];
        }

        window.day51SelectedWords = window.day51SelectedWords || [];

        // Lọc các từ chưa được chọn từ kho từ đã xáo trộn
        let availablePool = [...window.day51ShuffledWords];
        window.day51SelectedWords.forEach(sel => {
            const idx = availablePool.indexOf(sel);
            if (idx > -1) availablePool.splice(idx, 1);
        });

        let selectedHTML = window.day51SelectedWords.map((w, i) => {
            const safeWord = w.replace(/'/g, "\\'");
            return `<button onclick="removeDay51Word(${i})" class="px-3 py-2 bg-amber-600 text-white font-bold rounded-xl text-sm shadow">${w}</button>`;
        }).join('');

        let poolHTML = availablePool.map((w) => {
            const safeWord = w.replace(/'/g, "\\'");
            return `<button onclick="addDay51Word('${safeWord}')" class="px-4 py-2.5 bg-slate-100 hover:bg-slate-200 text-slate-800 font-bold rounded-xl text-sm border-2 border-slate-300">${w}</button>`;
        }).join('');

        const safeFullText = currS.full.replace(/'/g, "\\'");

        ctx.container.innerHTML = `
            <div>
                <div class="bg-amber-50 border border-amber-200 p-2.5 rounded-xl text-center mb-3">
                    <span class="text-xs font-bold text-amber-800">💡 Ghép các từ xáo trộn bên dưới thành câu lời khuyên hoàn chỉnh</span>
                </div>
                <div class="flex justify-between items-center mb-2">
                    <span class="text-xs font-bold text-slate-500">Câu ${window.day51BuildIndex + 1} / ${sentences.length}</span>
                </div>

                <div class="min-h-[60px] p-3 border-2 border-dashed border-amber-300 bg-white rounded-2xl flex flex-wrap gap-2 items-center mb-4">
                    ${selectedHTML || '<span class="text-xs text-slate-400 font-medium">Bấm các từ xáo trộn bên dưới để ghép câu...</span>'}
                </div>

                <div class="flex flex-wrap gap-2 justify-center mb-6">${poolHTML}</div>

                <div class="text-center space-x-2">
                    <button onclick="checkDay51BuildSentence('${safeFullText}')" class="px-6 py-3 bg-amber-600 text-white font-extrabold rounded-xl shadow">Kiểm tra</button>
                    <button onclick="resetDay51BuildSentence()" class="px-4 py-3 bg-slate-200 text-slate-700 font-bold rounded-xl">Làm lại</button>
                </div>
            </div>
        `;
    }
};

window.addDay51Word = function(word) {
    playBtnSound();
    window.day51SelectedWords = window.day51SelectedWords || [];
    window.day51SelectedWords.push(word);
    loadLevel(currentLevel);
};

window.removeDay51Word = function(index) {
    playBtnSound();
    window.day51SelectedWords.splice(index, 1);
    loadLevel(currentLevel);
};

window.resetDay51BuildSentence = function() {
    playBtnSound();
    window.day51SelectedWords = [];
    loadLevel(currentLevel);
};

window.checkDay51BuildSentence = function(target) {
    playBtnSound();
    const result = (window.day51SelectedWords || []).join(' ');
    if (result === target) {
        playSound('correct');
        window.day51SelectedWords = [];
        window.day51ShuffledWords = null;
        window.day51BuildIndex++;
        setTimeout(() => { loadLevel(currentLevel); }, 600);
    } else {
        handleWrongAnswer();
    }
};