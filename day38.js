window.ENG6_LESSONS = window.ENG6_LESSONS || {};

window.ENG6_LESSONS[38] = {
    unit: 4, // Thuộc Unit 4: My Neighbourhood
    title: "Day 38: Writing - A Paragraph about a Neighbourhood",
    description: "Viết đoạn văn ngắn miêu tả khu xóm của mình (đặc điểm, điểm thích và không thích)",
    ipa: "/ˈraɪtɪŋ ə ˈpærəɡræf əˈbaʊt ə ˈneɪbərhʊd/",
    
    // Cấu hình lộ trình 7 màn hoạt động chuẩn cho Day 38
    activities: [
        'grammar-intro-day38',         // Màn 1: Hướng dẫn bố cục viết đoạn văn miêu tả khu xóm
        'multiple-choice',              // Màn 2: Trắc nghiệm cấu trúc câu viết đoạn văn
        'matching-meaning',             // Màn 3: Nối câu & Nghĩa Tiếng Việt
        'listening',                    // Màn 4: Nghe mẫu đoạn văn & chọn đáp án đúng
        'matching-ipa',                 // Màn 5: Nối câu & Phiên âm IPA chuẩn
        'sentence-builder-paragraph',   // Màn 6: Sắp xếp câu hoàn chỉnh miêu tả khu xóm
        'spelling'                      // Màn 7: Kiểm tra hoàn thiện chính tả các câu viết
    ],

    vocab: [
        { 
            id: 'd38_s1', 
            en: 'I live in the suburbs', 
            ipa: '/aɪ lɪv ɪn ðə ˈsʌbɜːrbz/', 
            vi: 'Tôi sống ở vùng ngoại ô', 
            wrongSpells: ['I lives in the suburbs', 'I live at the suburbs', 'I living in suburbs'] 
        },
        { 
            id: 'd38_s2', 
            en: 'There are many things I like', 
            ipa: '/ðer ɑːr ˈmeni θɪŋz aɪ laɪk/', 
            vi: 'Có rất nhiều điều tôi thích', 
            wrongSpells: ['There is many things I like', 'There are much things I like', 'There are many thing I like'] 
        },
        { 
            id: 'd38_s3', 
            en: 'The people here are very friendly', 
            ipa: '/ðə ˈpiːpl hɪər ɑːr ˈveri ˈfrendli/', 
            vi: 'Mọi người ở đây rất thân thiện', 
            wrongSpells: ['The people here is very friendly', 'The peoples here are very friendly', 'The people here are friendly very'] 
        },
        { 
            id: 'd38_s4', 
            en: 'However there are some things I dislike', 
            ipa: '/haʊˈevər ðer ɑːr sʌm θɪŋz aɪ dɪsˈlaɪk/', 
            vi: 'Tuy nhiên có một vài điều tôi không thích', 
            wrongSpells: ['However there is some things I dislike', 'However there are any things I dislike', 'How ever there are some things I dislike'] 
        },
        { 
            id: 'd38_s5', 
            en: 'The streets are busy and crowded', 
            ipa: '/ðə striːts ɑːr ˈbɪzi ænd ˈkraʊdɪd/', 
            vi: 'Các con đường bận rộn và đông đúc', 
            wrongSpells: ['The street are busy and crowded', 'The streets is busy and crowded', 'The streets are busy but crowded'] 
        }
    ]
};

window.ENG6_GAME_MODULES = window.ENG6_GAME_MODULES || {};

// MÀN 1: Hướng dẫn bố cục viết đoạn văn miêu tả khu xóm (Day 38)
window.ENG6_GAME_MODULES['grammar-intro-day38'] = {
    title: 'Màn 1: Hướng Dẫn Viết Đoạn Văn Về Khu Xóm',
    render(ctx) {
        ctx.container.innerHTML = `
            <div class="space-y-4">
                <div class="text-center">
                    <span class="px-3 py-1 bg-emerald-100 text-emerald-800 font-bold text-xs rounded-full">Unit 4: Writing Skills</span>
                    <h3 class="text-2xl font-black text-slate-800 mt-2">Viết Đoạn Văn Miêu Tả Khu Xóm</h3>
                    <p class="text-slate-600 text-sm mt-1">Nắm vững cấu trúc 3 phần để hoàn thành đoạn văn khoảng 50 từ thật chuẩn xác!</p>
                </div>

                <div class="bg-emerald-50 border-2 border-emerald-200 p-4 rounded-2xl space-y-2.5 text-slate-700 text-sm">
                    <div class="flex items-start space-x-3">
                        <div class="w-7 h-7 rounded-full bg-emerald-600 text-white font-bold flex items-center justify-center flex-shrink-0 text-xs">1</div>
                        <div>
                            <strong class="text-emerald-900 font-bold">Phần mở đầu (Giới thiệu nơi sống):</strong>
                            <span class="font-semibold text-slate-900">I live in the suburbs / centre of [Tên thành phố]...</span>[cite: 6]
                        </div>
                    </div>
                    <div class="flex items-start space-x-3">
                        <div class="w-7 h-7 rounded-full bg-emerald-600 text-white font-bold flex items-center justify-center flex-shrink-0 text-xs">2</div>
                        <div>
                            <strong class="text-emerald-900 font-bold">Phần thân (Những điểm yêu thích):</strong>
                            <span class="font-semibold text-slate-900">There are many things I like. The weather is fine and the people are friendly.</span>[cite: 5, 6]
                        </div>
                    </div>
                    <div class="flex items-start space-x-3">
                        <div class="w-7 h-7 rounded-full bg-emerald-600 text-white font-bold flex items-center justify-center flex-shrink-0 text-xs">3</div>
                        <div>
                            <strong class="text-emerald-900 font-bold">Phần kết (Những điểm chưa thích):</strong>
                            <span class="font-semibold text-slate-900">However, there are some things I dislike. The streets are busy and crowded.</span>[cite: 5, 6]
                        </div>
                    </div>
                </div>

                <div class="bg-amber-50 border border-amber-200 p-3 rounded-xl text-xs text-slate-700 italic">
                    <strong class="text-amber-900 not-italic block mb-1">📖 Đoạn văn mẫu hoàn chỉnh (SGK trang 45):</strong>
                    "I live in the suburbs of Da Nang City. There are many things I like about my neighbourhood. It has beautiful parks, sandy beaches, and friendly people. However, there are some things I dislike. The streets are busy and crowded."[cite: 5, 6]
                </div>

                <div class="text-center pt-1">
                    <button onclick="playBtnSound(); completeLevel()" class="px-8 py-3.5 bg-gradient-to-r from-emerald-600 to-teal-600 text-white font-extrabold rounded-2xl shadow-lg hover:opacity-95 transition-all text-base">
                        Đã hiểu bố cục, luyện tập ngay! <i class="fa-solid fa-arrow-right ml-2"></i>
                    </button>
                </div>
            </div>
        `;
    }
};

// MÀN 6: Sắp xếp câu hoàn chỉnh miêu tả khu xóm (Sentence Builder)
window.ENG6_GAME_MODULES['sentence-builder-paragraph'] = {
    title: 'Màn 6: Sắp Xếp Câu Hoàn Chỉnh Viết Đoạn Văn',
    render(ctx) {
        window.day38BuildIndex = window.day38BuildIndex || 0;
        const sentences = [
            { words: ['I', 'live', 'in', 'the', 'suburbs'], full: 'I live in the suburbs' },
            { words: ['There', 'are', 'many', 'things', 'I', 'like'], full: 'There are many things I like' },
            { words: ['The', 'people', 'here', 'are', 'very', 'friendly'], full: 'The people here are very friendly' },
            { words: ['However', 'there', 'are', 'some', 'things', 'I', 'dislike'], full: 'However there are some things I dislike' },
            { words: ['The', 'streets', 'are', 'busy', 'and', 'crowded'], full: 'The streets are busy and crowded' }
        ];

        if (window.day38BuildIndex >= sentences.length) {
            window.day38BuildIndex = 0;
            completeLevel();
            return;
        }

        const currS = sentences[window.day38BuildIndex];
        
        // Khởi tạo mảng xáo trộn ngẫu nhiên cho từng câu hỏi
        if (!window.day38ShuffledWords || window.day38CurrentQuestionIndex !== window.day38BuildIndex) {
            window.day38CurrentQuestionIndex = window.day38BuildIndex;
            let pool = [...currS.words];
            for (let i = pool.length - 1; i > 0; i--) {
                const j = Math.floor(Math.random() * (i + 1));
                [pool[i], pool[j]] = [pool[j], pool[i]];
            }
            window.day38ShuffledWords = pool;
            window.day38SelectedWords = [];
        }

        window.day38SelectedWords = window.day38SelectedWords || [];

        // Lọc các từ chưa được chọn từ kho từ đã xáo trộn
        let availablePool = [...window.day38ShuffledWords];
        window.day38SelectedWords.forEach(sel => {
            const idx = availablePool.indexOf(sel);
            if (idx > -1) availablePool.splice(idx, 1);
        });

        let selectedHTML = window.day38SelectedWords.map((w, i) => {
            const safeWord = w.replace(/'/g, "\\'");
            return `<button onclick="removeDay38Word(${i})" class="px-3 py-2 bg-emerald-600 text-white font-bold rounded-xl text-sm shadow">${w}</button>`;
        }).join('');

        let poolHTML = availablePool.map((w) => {
            const safeWord = w.replace(/'/g, "\\'");
            return `<button onclick="addDay38Word('${safeWord}')" class="px-4 py-2.5 bg-slate-100 hover:bg-slate-200 text-slate-800 font-bold rounded-xl text-sm border-2 border-slate-300">${w}</button>`;
        }).join('');

        const safeFullText = currS.full.replace(/'/g, "\\'");

        ctx.container.innerHTML = `
            <div>
                <div class="bg-emerald-50 border border-emerald-200 p-2.5 rounded-xl text-center mb-3">
                    <span class="text-xs font-bold text-emerald-800">💡 Ghép các từ bên dưới thành câu hoàn chỉnh để viết đoạn văn</span>
                </div>
                <div class="flex justify-between items-center mb-2">
                    <span class="text-xs font-bold text-slate-500">Câu ${window.day38BuildIndex + 1} / ${sentences.length}</span>
                </div>

                <div class="min-h-[60px] p-3 border-2 border-dashed border-emerald-300 bg-white rounded-2xl flex flex-wrap gap-2 items-center mb-4">
                    ${selectedHTML || '<span class="text-xs text-slate-400 font-medium">Bấm các từ xáo trộn bên dưới để ghép câu...</span>'}
                </div>

                <div class="flex flex-wrap gap-2 justify-center mb-6">${poolHTML}</div>

                <div class="text-center space-x-2">
                    <button onclick="checkDay38BuildSentence('${safeFullText}')" class="px-6 py-3 bg-emerald-600 text-white font-extrabold rounded-xl shadow">Kiểm tra</button>
                    <button onclick="resetDay38BuildSentence()" class="px-4 py-3 bg-slate-200 text-slate-700 font-bold rounded-xl">Làm lại</button>
                </div>
            </div>
        `;
    }
};

window.addDay38Word = function(word) {
    playBtnSound();
    window.day38SelectedWords = window.day38SelectedWords || [];
    window.day38SelectedWords.push(word);
    loadLevel(currentLevel);
};

window.removeDay38Word = function(index) {
    playBtnSound();
    window.day38SelectedWords.splice(index, 1);
    loadLevel(currentLevel);
};

window.resetDay38BuildSentence = function() {
    playBtnSound();
    window.day38SelectedWords = [];
    loadLevel(currentLevel);
};

window.checkDay38BuildSentence = function(target) {
    playBtnSound();
    const result = (window.day38SelectedWords || []).join(' ');
    if (result === target) {
        playSound('correct');
        window.day38SelectedWords = [];
        window.day38ShuffledWords = null;
        window.day38BuildIndex++;
        setTimeout(() => { loadLevel(currentLevel); }, 600);
    } else {
        handleWrongAnswer();
    }
};