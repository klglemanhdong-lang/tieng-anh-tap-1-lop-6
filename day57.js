window.ENG6_LESSONS = window.ENG6_LESSONS || {};

window.ENG6_LESSONS[57] = {
    unit: 6, // Thuộc Unit 6: Our Tet Holiday
    title: "Day 57: Writing an Email about Tet",
    description: "Viết email cho bạn bè kể về việc chuẩn bị đón Tết (Dear Tom, At Tet, we should clean our houses and decorate with peach flowers.)",
    ipa: "/ˈraɪtɪŋ ən ˈiːmeɪl əˈbaʊt tet ˌprepəˈreɪʃnz/",
    
    // Cấu hình lộ trình 7 màn hoạt động chuẩn cho Day 57
    activities: [
        'grammar-intro-day57',         // Màn 1: Hướng dẫn bố cục viết email về ngày Tết
        'multiple-choice',              // Màn 2: Trắc nghiệm cấu trúc viết email
        'matching-meaning',             // Màn 3: Nối câu email & Nghĩa Tiếng Việt
        'listening',                    // Màn 4: Nghe mẫu email & chọn đáp án đúng
        'matching-ipa',                 // Màn 5: Nối câu & Phiên âm IPA chuẩn
        'sentence-builder-email',       // Màn 6: Sắp xếp câu hoàn chỉnh viết email Tết
        'spelling'                      // Màn 7: Kiểm tra chính tả từ vựng bài viết
    ],

    vocab: [
        { 
            id: 'd57_w1', 
            en: 'Dear Tom I will tell you about our Tet', 
            ipa: '/dɪər tɑːm aɪ wɪl tel juː əˈbaʊt aʊər tet/', 
            vi: 'Thân gửi Tom, tôi sẽ kể cho bạn nghe về ngày Tết của chúng tôi', 
            wrongSpells: ['Dear Tom I will tells you', 'Dear Tom I tell you about Tet', 'Dear Tom I will telling you'] 
        },
        { 
            id: 'd57_w2', 
            en: 'At Tet we should decorate our houses', 
            ipa: '/æt tet wiː ʃʊd ˈdekəreɪt aʊər ˈhaʊzɪz/', 
            vi: 'Vào dịp Tết, chúng ta nên trang hoàng nhà cửa', 
            wrongSpells: ['At Tet we shouldn\'t decorate', 'At Tet we should decorates', 'At Tet we should decorating'] 
        },
        { 
            id: 'd57_w3', 
            en: 'We should buy peach flowers and banh chung', 
            ipa: '/wiː ʃʊd baɪ piːtʃ ˈflaʊərz ænd bæŋ tʃʊŋ/', 
            vi: 'Chúng ta nên mua hoa đào và bánh chưng', 
            wrongSpells: ['We should buys peach flowers', 'We shouldn\'t buy peach flowers', 'We should buying flowers'] 
        },
        { 
            id: 'd57_w4', 
            en: 'We should not break anything at Tet', 
            ipa: '/wiː ʃʊd nɑːt breɪk ˈeniθɪŋ æt tet/', 
            vi: 'Chúng ta không nên làm vỡ bất cứ thứ gì vào dịp Tết', 
            wrongSpells: ['We should break anything at Tet', 'We shouldn\'t breaks anything', 'We shouldn\'t broke anything'] 
        },
        { 
            id: 'd57_w5', 
            en: 'Please write and tell me about your New Year', 
            ipa: '/pliːz raɪt ænd tel miː əˈbaʊt jʊər nuː jɪər/', 
            vi: 'Hãy viết thư và kể cho tôi nghe về năm mới của bạn nhé', 
            wrongSpells: ['Please writes and tell me', 'Please write and tells me', 'Please writing and tell me'] 
        }
    ]
};

window.ENG6_GAME_MODULES = window.ENG6_GAME_MODULES || {};

// MÀN 1: Hướng dẫn bố cục viết email về ngày Tết (Day 57)
window.ENG6_GAME_MODULES['grammar-intro-day57'] = {
    title: 'Màn 1: Hướng Dẫn Viết Email Về Công Tác Chuẩn Bị Tết',
    render(ctx) {
        ctx.container.innerHTML = `
            <div class="space-y-4">
                <div class="text-center">
                    <span class="px-3 py-1 bg-amber-100 text-amber-800 font-bold text-xs rounded-full">Unit 6: Writing Skills</span>
                    <h3 class="text-2xl font-black text-slate-800 mt-2">Writing an Email about Tet</h3>
                    <p class="text-slate-600 text-sm mt-1">Nắm vững bố cục 3 phần của một bức email để viết thư kể về ngày Tết thật trôi chảy!</p>
                </div>

                <div class="bg-amber-50 border-2 border-amber-200 p-4 rounded-2xl space-y-2.5 text-slate-700 text-sm">
                    <div class="flex items-start space-x-3">
                        <div class="w-7 h-7 rounded-full bg-amber-600 text-white font-bold flex items-center justify-center flex-shrink-0 text-xs">1</div>
                        <div>
                            <strong class="text-amber-900 font-bold">Phần mở đầu (Opening):</strong>
                            <span class="font-semibold text-slate-900">Dear [Tên bạn], I will tell you about our Tet.</span>
                        </div>
                    </div>
                    <div class="flex items-start space-x-3">
                        <div class="w-7 h-7 rounded-full bg-amber-600 text-white font-bold flex items-center justify-center flex-shrink-0 text-xs">2</div>
                        <div>
                            <strong class="text-amber-900 font-bold">Phần thân bài (Body - Việc nên/không nên):</strong>
                            <span class="font-semibold text-slate-900">At Tet, we should decorate our houses and buy peach flowers. We shouldn't break anything.</span>
                        </div>
                    </div>
                    <div class="flex items-start space-x-3">
                        <div class="w-7 h-7 rounded-full bg-amber-600 text-white font-bold flex items-center justify-center flex-shrink-0 text-xs">3</div>
                        <div>
                            <strong class="text-amber-900 font-bold">Phần kết thúc (Closing):</strong>
                            <span class="font-semibold text-slate-900">Please write and tell me about your celebration. Yours, [Tên bạn].</span>
                        </div>
                    </div>
                </div>

                <div class="bg-white border border-amber-200 p-3 rounded-xl text-xs text-slate-700 italic shadow-sm">
                    <strong class="text-amber-900 not-italic block mb-1">📖 Email mẫu tham khảo (SGK trang 65):</strong>
                    "From: Nguyen, To: Tom. Dear Tom, I will tell you more about our Tet. At Tet, we should clean our houses and decorate with peach flowers too. But we shouldn't break anything, either. Please write and tell me about your New Year celebration. Yours, Nguyen."
                </div>

                <div class="text-center pt-1">
                    <button onclick="playBtnSound(); completeLevel()" class="px-8 py-3.5 bg-gradient-to-r from-amber-600 to-orange-600 text-white font-extrabold rounded-2xl shadow-lg hover:opacity-95 transition-all text-base">
                        Đã hiểu bố cục, luyện tập ngay! <i class="fa-solid fa-arrow-right ml-2"></i>
                    </button>
                </div>
            </div>
        `;
    }
};

// MÀN 6: Sắp xếp câu hoàn chỉnh viết email Tết (Sentence Builder)
window.ENG6_GAME_MODULES['sentence-builder-email'] = {
    title: 'Màn 6: Sắp Xếp Câu Hoàn Chỉnh Viết Email Tết',
    render(ctx) {
        window.day57BuildIndex = window.day57BuildIndex || 0;
        const sentences = [
            { words: ['Dear', 'Tom', 'I', 'will', 'tell', 'you', 'about', 'our', 'Tet'], full: 'Dear Tom I will tell you about our Tet' },
            { words: ['At', 'Tet', 'we', 'should', 'decorate', 'our', 'houses'], full: 'At Tet we should decorate our houses' },
            { words: ['We', 'should', 'buy', 'peach', 'flowers', 'and', 'banh', 'chung'], full: 'We should buy peach flowers and banh chung' },
            { words: ['We', 'should', 'not', 'break', 'anything', 'at', 'Tet'], full: 'We should not break anything at Tet' },
            { words: ['Please', 'write', 'and', 'tell', 'me', 'about', 'your', 'New', 'Year'], full: 'Please write and tell me about your New Year' }
        ];

        if (window.day57BuildIndex >= sentences.length) {
            window.day57BuildIndex = 0;
            completeLevel();
            return;
        }

        const currS = sentences[window.day57BuildIndex];
        
        // Khởi tạo mảng xáo trộn ngẫu nhiên cho từng câu hỏi
        if (!window.day57ShuffledWords || window.day57CurrentQuestionIndex !== window.day57BuildIndex) {
            window.day57CurrentQuestionIndex = window.day57BuildIndex;
            let pool = [...currS.words];
            for (let i = pool.length - 1; i > 0; i--) {
                const j = Math.floor(Math.random() * (i + 1));
                [pool[i], pool[j]] = [pool[j], pool[i]];
            }
            window.day57ShuffledWords = pool;
            window.day57SelectedWords = [];
        }

        window.day57SelectedWords = window.day57SelectedWords || [];

        // Lọc các từ chưa được chọn từ kho từ đã xáo trộn
        let availablePool = [...window.day57ShuffledWords];
        window.day57SelectedWords.forEach(sel => {
            const idx = availablePool.indexOf(sel);
            if (idx > -1) availablePool.splice(idx, 1);
        });

        let selectedHTML = window.day57SelectedWords.map((w, i) => {
            const safeWord = w.replace(/'/g, "\\'");
            return `<button onclick="removeDay57Word(${i})" class="px-3 py-2 bg-amber-600 text-white font-bold rounded-xl text-sm shadow">${w}</button>`;
        }).join('');

        let poolHTML = availablePool.map((w) => {
            const safeWord = w.replace(/'/g, "\\'");
            return `<button onclick="addDay57Word('${safeWord}')" class="px-4 py-2.5 bg-slate-100 hover:bg-slate-200 text-slate-800 font-bold rounded-xl text-sm border-2 border-slate-300">${w}</button>`;
        }).join('');

        const safeFullText = currS.full.replace(/'/g, "\\'");

        ctx.container.innerHTML = `
            <div>
                <div class="bg-amber-50 border border-amber-200 p-2.5 rounded-xl text-center mb-3">
                    <span class="text-xs font-bold text-amber-800">💡 Ghép các từ bên dưới thành câu hoàn chỉnh để viết email Tết</span>
                </div>
                <div class="flex justify-between items-center mb-2">
                    <span class="text-xs font-bold text-slate-500">Câu ${window.day57BuildIndex + 1} / ${sentences.length}</span>
                </div>

                <div class="min-h-[60px] p-3 border-2 border-dashed border-amber-300 bg-white rounded-2xl flex flex-wrap gap-2 items-center mb-4">
                    ${selectedHTML || '<span class="text-xs text-slate-400 font-medium">Bấm các từ xáo trộn bên dưới để ghép câu...</span>'}
                </div>

                <div class="flex flex-wrap gap-2 justify-center mb-6">${poolHTML}</div>

                <div class="text-center space-x-2">
                    <button onclick="checkDay57BuildSentence('${safeFullText}')" class="px-6 py-3 bg-amber-600 text-white font-extrabold rounded-xl shadow">Kiểm tra</button>
                    <button onclick="resetDay57BuildSentence()" class="px-4 py-3 bg-slate-200 text-slate-700 font-bold rounded-xl">Làm lại</button>
                </div>
            </div>
        `;
    }
};

window.addDay57Word = function(word) {
    playBtnSound();
    window.day57SelectedWords = window.day57SelectedWords || [];
    window.day57SelectedWords.push(word);
    loadLevel(currentLevel);
};

window.removeDay57Word = function(index) {
    playBtnSound();
    window.day57SelectedWords.splice(index, 1);
    loadLevel(currentLevel);
};

window.resetDay57BuildSentence = function() {
    playBtnSound();
    window.day57SelectedWords = [];
    loadLevel(currentLevel);
};

window.checkDay57BuildSentence = function(target) {
    playBtnSound();
    const result = (window.day57SelectedWords || []).join(' ');
    if (result === target) {
        playSound('correct');
        window.day57SelectedWords = [];
        window.day57ShuffledWords = null;
        window.day57BuildIndex++;
        setTimeout(() => { loadLevel(currentLevel); }, 600);
    } else {
        handleWrongAnswer();
    }
};