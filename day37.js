window.ENG6_LESSONS = window.ENG6_LESSONS || {};

window.ENG6_LESSONS[37] = {
    unit: 4, // Thuộc Unit 4: My Neighbourhood
    title: "Day 37: Speaking - Talking about Likes and Dislikes",
    description: "Thảo luận về những điểm thích và không thích về khu xóm đang sống (Where do you live? - I live in the suburbs.)",
    ipa: "/ˈspiːkɪŋ ˈtɔːkɪŋ əˈbaʊt laɪks ænd dɪsˈlaɪks/",
    
    // Cấu hình lộ trình 7 màn hoạt động chuẩn cho Day 37
    activities: [
        'grammar-intro-day37',         // Màn 1: Hội thoại mẫu & Lý thuyết hỏi về nơi sống & sở thích
        'multiple-choice',              // Màn 2: Trắc nghiệm giao tiếp thảo luận
        'matching-meaning',             // Màn 3: Nối câu hỏi/đáp & Nghĩa Tiếng Việt
        'listening',                    // Màn 4: Nghe đoạn hội thoại mẫu & chọn đáp án
        'matching-ipa',                 // Màn 5: Nối câu & Phiên âm IPA chuẩn
        'sentence-builder-speaking',    // Màn 6: Ghép câu thảo luận (Where do you live? - I live in the suburbs.)
        'speaking'                      // Màn 7: Luyện nói AI chuẩn xác
    ],

    vocab: [
        { 
            id: 'd37_q1', 
            en: 'Where do you live', 
            ipa: '/wer duː juː lɪv/', 
            vi: 'Bạn sống ở đâu?', 
            wrongSpells: ['Where does you live', 'Where do you lives', 'Where are you live'] 
        },
        { 
            id: 'd37_a1', 
            en: 'I live in the suburbs', 
            ipa: '/aɪ lɪv ɪn ðə ˈsʌbɜːrbz/', 
            vi: 'Tôi sống ở vùng ngoại ô', 
            wrongSpells: ['I lives in the suburbs', 'I live at the suburbs', 'I living in the suburbs'] 
        },
        { 
            id: 'd37_q2', 
            en: 'What do you like about it', 
            ipa: '/wʌt duː juː laɪk əˈbaʊt ɪt/', 
            vi: 'Bạn thích điều gì về nó?', 
            wrongSpells: ['What does you like about it', 'What do you likes about it', 'What you like about it'] 
        },
        { 
            id: 'd37_a2', 
            en: 'The weather is fine and people are friendly', 
            ipa: '/ðə ˈweðər ɪz faɪn ænd ˈpiːpl ɑːr ˈfrendli/', 
            vi: 'Thời tiết đẹp và mọi người rất thân thiện', 
            wrongSpells: ['The weather are fine and people are friendly', 'The weather is fine and people is friendly', 'The weather is fine but people are friendly'] 
        },
        { 
            id: 'd37_a3', 
            en: 'I dislike the busy streets', 
            ipa: '/aɪ dɪsˈlaɪk ðə ˈbɪzi striːts/', 
            vi: 'Tôi không thích những con đường đông đúc bận rộn', 
            wrongSpells: ['I dislikes the busy streets', 'I am dislike the busy streets', 'I dislike busy street'] 
        }
    ]
};

window.ENG6_GAME_MODULES = window.ENG6_GAME_MODULES || {};

// MÀN 1: Hội thoại mẫu & Lý thuyết thảo luận nơi sống (Day 37)
window.ENG6_GAME_MODULES['grammar-intro-day37'] = {
    title: 'Màn 1: Hội Thoại Mẫu - Thảo Luận Nơi Sống & Sở Thích',
    render(ctx) {
        ctx.container.innerHTML = `
            <div class="space-y-4">
                <div class="text-center">
                    <span class="px-3 py-1 bg-emerald-100 text-emerald-800 font-bold text-xs rounded-full">Unit 4: Speaking Skills</span>
                    <h3 class="text-2xl font-black text-slate-800 mt-2">Nói Về Điểm Thích & Không Thích</h3>
                    <p class="text-slate-600 text-sm mt-1">Luyện tập mẫu câu hỏi đáp về khu xóm nơi bạn đang sinh sống!</p>
                </div>

                <div class="bg-white border-2 border-emerald-200 p-3.5 rounded-2xl space-y-2 text-xs md:text-sm shadow-sm">
                    <div class="font-bold text-emerald-700 uppercase tracking-wide text-xs mb-1">💬 Hội thoại mẫu (SGK Tiếng Anh 6):</div>
                    <p><strong class="text-slate-900">A:</strong> Where do you live?</p>
                    <p><strong class="text-emerald-700">B:</strong> I live in the suburbs of Da Nang City[cite: 5].</p>
                    <p><strong class="text-slate-900">A:</strong> What do you like about it?</p>
                    <p><strong class="text-emerald-700">B:</strong> The weather is fine and the people are friendly[cite: 5].</p>
                    <p><strong class="text-slate-900">A:</strong> What do you dislike about it?</p>
                    <p><strong class="text-emerald-700">B:</strong> The streets are busy and crowded[cite: 5].</p>
                </div>

                <div class="bg-emerald-50 border-2 border-emerald-200 p-4 rounded-2xl space-y-3 text-slate-700 text-sm">
                    <div class="flex items-start space-x-3">
                        <div class="w-8 h-8 rounded-full bg-emerald-600 text-white font-bold flex items-center justify-center flex-shrink-0">1</div>
                        <div>
                            <strong class="text-emerald-900 block font-bold">Hỏi đáp về nơi sống:</strong>
                            - <span class="font-mono bg-white px-2 py-0.5 rounded border border-emerald-200 font-bold">Where do you live?</span> $\rightarrow$ <span class="font-semibold text-slate-900">I live in...</span>[cite: 5]
                        </div>
                    </div>
                    <div class="flex items-start space-x-3">
                        <div class="w-8 h-8 rounded-full bg-emerald-600 text-white font-bold flex items-center justify-center flex-shrink-0">2</div>
                        <div>
                            <strong class="text-emerald-900 block font-bold">Hỏi đáp về điểm thích / không thích:</strong>
                            - <span class="font-mono bg-white px-2 py-0.5 rounded border border-emerald-200 font-bold">What do you like / dislike about it?</span><br>
                            - Trả lời: <span class="font-semibold text-slate-900">I like... / The weather is... / There are...</span>[cite: 5]
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

// MÀN 6: Sắp xếp câu thảo luận (Sentence Builder)
window.ENG6_GAME_MODULES['sentence-builder-speaking'] = {
    title: 'Màn 6: Ghép Câu Thảo Luận Nơi Sống & Sở Thích',
    render(ctx) {
        window.day37BuildIndex = window.day37BuildIndex || 0;
        const sentences = [
            { words: ['Where', 'do', 'you', 'live'], full: 'Where do you live' },
            { words: ['I', 'live', 'in', 'the', 'suburbs'], full: 'I live in the suburbs' },
            { words: ['What', 'do', 'you', 'like', 'about', 'it'], full: 'What do you like about it' },
            { words: ['The', 'weather', 'is', 'fine'], full: 'The weather is fine' },
            { words: ['I', 'dislike', 'the', 'busy', 'streets'], full: 'I dislike the busy streets' }
        ];

        if (window.day37BuildIndex >= sentences.length) {
            window.day37BuildIndex = 0;
            completeLevel();
            return;
        }

        const currS = sentences[window.day37BuildIndex];
        
        // Khởi tạo mảng xáo trộn ngẫu nhiên cho từng câu hỏi
        if (!window.day37ShuffledWords || window.day37CurrentQuestionIndex !== window.day37BuildIndex) {
            window.day37CurrentQuestionIndex = window.day37BuildIndex;
            let pool = [...currS.words];
            for (let i = pool.length - 1; i > 0; i--) {
                const j = Math.floor(Math.random() * (i + 1));
                [pool[i], pool[j]] = [pool[j], pool[i]];
            }
            window.day37ShuffledWords = pool;
            window.day37SelectedWords = [];
        }

        window.day37SelectedWords = window.day37SelectedWords || [];

        // Lọc các từ chưa được chọn từ kho từ đã xáo trộn
        let availablePool = [...window.day37ShuffledWords];
        window.day37SelectedWords.forEach(sel => {
            const idx = availablePool.indexOf(sel);
            if (idx > -1) availablePool.splice(idx, 1);
        });

        let selectedHTML = window.day37SelectedWords.map((w, i) => {
            const safeWord = w.replace(/'/g, "\\'");
            return `<button onclick="removeDay37Word(${i})" class="px-3 py-2 bg-emerald-600 text-white font-bold rounded-xl text-sm shadow">${w}</button>`;
        }).join('');

        let poolHTML = availablePool.map((w) => {
            const safeWord = w.replace(/'/g, "\\'");
            return `<button onclick="addDay37Word('${safeWord}')" class="px-4 py-2.5 bg-slate-100 hover:bg-slate-200 text-slate-800 font-bold rounded-xl text-sm border-2 border-slate-300">${w}</button>`;
        }).join('');

        const safeFullText = currS.full.replace(/'/g, "\\'");

        ctx.container.innerHTML = `
            <div>
                <div class="bg-emerald-50 border border-emerald-200 p-2.5 rounded-xl text-center mb-3">
                    <span class="text-xs font-bold text-emerald-800">💡 Ghép các từ xáo trộn bên dưới thành câu thảo luận hoàn chỉnh</span>
                </div>
                <div class="flex justify-between items-center mb-2">
                    <span class="text-xs font-bold text-slate-500">Câu ${window.day37BuildIndex + 1} / ${sentences.length}</span>
                </div>

                <div class="min-h-[60px] p-3 border-2 border-dashed border-emerald-300 bg-white rounded-2xl flex flex-wrap gap-2 items-center mb-4">
                    ${selectedHTML || '<span class="text-xs text-slate-400 font-medium">Bấm các từ xáo trộn bên dưới để ghép câu...</span>'}
                </div>

                <div class="flex flex-wrap gap-2 justify-center mb-6">${poolHTML}</div>

                <div class="text-center space-x-2">
                    <button onclick="checkDay37BuildSentence('${safeFullText}')" class="px-6 py-3 bg-emerald-600 text-white font-extrabold rounded-xl shadow">Kiểm tra</button>
                    <button onclick="resetDay37BuildSentence()" class="px-4 py-3 bg-slate-200 text-slate-700 font-bold rounded-xl">Làm lại</button>
                </div>
            </div>
        `;
    }
};

window.addDay37Word = function(word) {
    playBtnSound();
    window.day37SelectedWords = window.day37SelectedWords || [];
    window.day37SelectedWords.push(word);
    loadLevel(currentLevel);
};

window.removeDay37Word = function(index) {
    playBtnSound();
    window.day37SelectedWords.splice(index, 1);
    loadLevel(currentLevel);
};

window.resetDay37BuildSentence = function() {
    playBtnSound();
    window.day37SelectedWords = [];
    loadLevel(currentLevel);
};

window.checkDay37BuildSentence = function(target) {
    playBtnSound();
    const result = (window.day37SelectedWords || []).join(' ');
    if (result === target) {
        playSound('correct');
        window.day37SelectedWords = [];
        window.day37ShuffledWords = null;
        window.day37BuildIndex++;
        setTimeout(() => { loadLevel(currentLevel); }, 600);
    } else {
        handleWrongAnswer();
    }
};