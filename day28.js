window.ENG6_LESSONS = window.ENG6_LESSONS || {};

window.ENG6_LESSONS[28] = {
    unit: 3, // Thuộc Unit 3: My Friends
    title: "Day 28: Writing - A Diary Entry about Best Friend",
    description: "Viết nhật ký ngắn miêu tả người bạn thân nhất (ngoại hình, tính cách, lý do yêu quý)",
    ipa: "/ˈraɪtɪŋ ə ˈdaɪəri ˈentri əˈbaʊt best frend/",
    
    // Cấu hình lộ trình 7 màn hoạt động chuẩn cho Day 28
    activities: [
        'grammar-intro-day28',         // Màn 1: Hướng dẫn bố cục viết nhật ký (Dear Diary...)
        'multiple-choice',              // Màn 2: Trắc nghiệm cấu trúc câu viết nhật ký
        'matching-meaning',             // Màn 3: Nối câu & Nghĩa Tiếng Việt
        'listening',                    // Màn 4: Nghe mẫu viết nhật ký & chọn đáp án
        'matching-ipa',                 // Màn 5: Nối câu & Phiên âm IPA chuẩn
        'sentence-builder-diary',       // Màn 6: Sắp xếp câu hoàn chỉnh miêu tả bạn thân
        'spelling'                      // Màn 7: Kiểm tra hoàn thiện chính tả các mẫu câu viết
    ],

    vocab: [
        { 
            id: 'd28_s1', 
            en: 'Dear Diary', 
            ipa: '/dɪər ˈdaɪəri/', 
            vi: 'Nhật ký thân mến (Lời mở đầu nhật ký)', 
            wrongSpells: ['Dear Dairy', 'Deer Diary', 'Dear Diari'] 
        },
        { 
            id: 'd28_s2', 
            en: 'My best friend is Lan', 
            ipa: '/maɪ best frend ɪz læn/', 
            vi: 'Bạn thân nhất của tôi là Lan', 
            wrongSpells: ['My best friend are Lan', 'My best friends is Lan', 'My best friend is'] 
        },
        { 
            id: 'd28_s3', 
            en: 'She has long black hair', 
            ipa: '/ʃiː hæz lɔːŋ blæk her/', 
            vi: 'Cô ấy có mái tóc đen dài', 
            wrongSpells: ['She have long black hair', 'She is long black hair', 'She has black long hair'] 
        },
        { 
            id: 'd28_s4', 
            en: 'She is very kind and funny', 
            ipa: '/ʃiː ɪz ˈveri kaɪnd ænd ˈfʌni/', 
            vi: 'Cô ấy rất tốt bụng và vui tính', 
            wrongSpells: ['She are very kind and funny', 'She has very kind and funny', 'She is very kind and fun'] 
        },
        { 
            id: 'd28_s5', 
            en: 'I like her because she helps me', 
            ipa: '/aɪ laɪk hɜːr bɪˈkɒz ʃiː helps miː/', 
            vi: 'Tôi thích cô ấy vì cô ấy luôn giúp đỡ tôi', 
            wrongSpells: ['I like her because she help me', 'I likes her because she helps me', 'I like she because she helps me'] 
        }
    ]
};

window.ENG6_GAME_MODULES = window.ENG6_GAME_MODULES || {};

// MÀN 1: Hướng dẫn bố cục viết nhật ký về bạn thân (Day 28)
window.ENG6_GAME_MODULES['grammar-intro-day28'] = {
    title: 'Màn 1: Hướng Dẫn Viết Nhật Ký Về Bạn Thân (Dear Diary...)',
    render(ctx) {
        ctx.container.innerHTML = `
            <div class="space-y-4">
                <div class="text-center">
                    <span class="px-3 py-1 bg-pink-100 text-pink-800 font-bold text-xs rounded-full">Unit 3: Writing Skills</span>
                    <h3 class="text-2xl font-black text-slate-800 mt-2">Viết Nhật Ký Miêu Tả Bạn Thân</h3>
                    <p class="text-slate-600 text-sm mt-1">Nắm vững 4 bước viết một đoạn nhật ký ngắn (khoảng 50 từ) thật hay!</p>
                </div>

                <div class="bg-pink-50 border-2 border-pink-200 p-4 rounded-2xl space-y-2.5 text-slate-700 text-sm">
                    <div class="flex items-start space-x-3">
                        <div class="w-7 h-7 rounded-full bg-pink-600 text-white font-bold flex items-center justify-center flex-shrink-0 text-xs">1</div>
                        <div>
                            <strong class="text-pink-900 font-bold">Mở đầu & Giới thiệu tên bạn:</strong>
                            <span class="font-semibold text-slate-900">Dear Diary, My best friend is [Tên]...</span>
                        </div>
                    </div>
                    <div class="flex items-start space-x-3">
                        <div class="w-7 h-7 rounded-full bg-pink-600 text-white font-bold flex items-center justify-center flex-shrink-0 text-xs">2</div>
                        <div>
                            <strong class="text-pink-900 font-bold">Miêu tả ngoại hình (Appearance):</strong>
                            <span class="font-semibold text-slate-900">She is tall / short. She has long black hair and big eyes.</span>
                        </div>
                    </div>
                    <div class="flex items-start space-x-3">
                        <div class="w-7 h-7 rounded-full bg-pink-600 text-white font-bold flex items-center justify-center flex-shrink-0 text-xs">3</div>
                        <div>
                            <strong class="text-pink-900 font-bold">Miêu tả tính cách (Personality):</strong>
                            <span class="font-semibold text-slate-900">She is very kind, friendly and creative.</span>
                        </div>
                    </div>
                    <div class="flex items-start space-x-3">
                        <div class="w-7 h-7 rounded-full bg-pink-600 text-white font-bold flex items-center justify-center flex-shrink-0 text-xs">4</div>
                        <div>
                            <strong class="text-pink-900 font-bold">Lý do yêu quý bạn (Why you like him/her):</strong>
                            <span class="font-semibold text-slate-900">I like her because she always helps me with my homework.</span>
                        </div>
                    </div>
                </div>

                <div class="bg-amber-50 border border-amber-200 p-3 rounded-xl text-xs text-slate-700 italic">
                    <strong class="text-amber-900 not-italic block mb-1">📖 Bài mẫu hoàn chỉnh:</strong>
                    "Dear Diary, My best friend is Lan. She is tall with long black hair and a small nose. She is very kind and funny. I like her because she always makes me laugh and helps me with my homework."
                </div>

                <div class="text-center pt-1">
                    <button onclick="playBtnSound(); completeLevel()" class="px-8 py-3.5 bg-gradient-to-r from-pink-600 to-rose-600 text-white font-extrabold rounded-2xl shadow-lg hover:opacity-95 transition-all text-base">
                        Đã hiểu bố cục, luyện tập ngay! <i class="fa-solid fa-arrow-right ml-2"></i>
                    </button>
                </div>
            </div>
        `;
    }
};

// MÀN 6: Sắp xếp câu hoàn chỉnh miêu tả bạn thân (Sentence Builder)
window.ENG6_GAME_MODULES['sentence-builder-diary'] = {
    title: 'Màn 6: Sắp Xếp Câu Hoàn Chỉnh Viết Nhật Ký',
    render(ctx) {
        window.day28BuildIndex = window.day28BuildIndex || 0;
        const sentences = [
            { words: ['My', 'best', 'friend', 'is', 'Lan'], full: 'My best friend is Lan' },
            { words: ['She', 'has', 'long', 'black', 'hair'], full: 'She has long black hair' },
            { words: ['She', 'is', 'very', 'kind', 'and', 'funny'], full: 'She is very kind and funny' },
            { words: ['I', 'like', 'her', 'because', 'she', 'helps', 'me'], full: 'I like her because she helps me' },
            { words: ['We', 'often', 'play', 'together', 'after', 'school'], full: 'We often play together after school' }
        ];

        if (window.day28BuildIndex >= sentences.length) {
            window.day28BuildIndex = 0;
            completeLevel();
            return;
        }

        const currS = sentences[window.day28BuildIndex];
        
        // Khởi tạo mảng xáo trộn ngẫu nhiên cho từng câu hỏi
        if (!window.day28ShuffledWords || window.day28CurrentQuestionIndex !== window.day28BuildIndex) {
            window.day28CurrentQuestionIndex = window.day28BuildIndex;
            let pool = [...currS.words];
            for (let i = pool.length - 1; i > 0; i--) {
                const j = Math.floor(Math.random() * (i + 1));
                [pool[i], pool[j]] = [pool[j], pool[i]];
            }
            window.day28ShuffledWords = pool;
            window.day28SelectedWords = [];
        }

        window.day28SelectedWords = window.day28SelectedWords || [];

        // Lọc các từ chưa được chọn từ kho từ đã xáo trộn
        let availablePool = [...window.day28ShuffledWords];
        window.day28SelectedWords.forEach(sel => {
            const idx = availablePool.indexOf(sel);
            if (idx > -1) availablePool.splice(idx, 1);
        });

        let selectedHTML = window.day28SelectedWords.map((w, i) => {
            const safeWord = w.replace(/'/g, "\\'");
            return `<button onclick="removeDay28Word(${i})" class="px-3 py-2 bg-pink-600 text-white font-bold rounded-xl text-sm shadow">${w}</button>`;
        }).join('');

        let poolHTML = availablePool.map((w) => {
            const safeWord = w.replace(/'/g, "\\'");
            return `<button onclick="addDay28Word('${safeWord}')" class="px-4 py-2.5 bg-slate-100 hover:bg-slate-200 text-slate-800 font-bold rounded-xl text-sm border-2 border-slate-300">${w}</button>`;
        }).join('');

        const safeFullText = currS.full.replace(/'/g, "\\'");

        ctx.container.innerHTML = `
            <div>
                <div class="bg-pink-50 border border-pink-200 p-2.5 rounded-xl text-center mb-3">
                    <span class="text-xs font-bold text-pink-800">💡 Ghép các từ bên dưới thành câu miêu tả bạn thân hoàn chỉnh</span>
                </div>
                <div class="flex justify-between items-center mb-2">
                    <span class="text-xs font-bold text-slate-500">Câu ${window.day28BuildIndex + 1} / ${sentences.length}</span>
                </div>

                <div class="min-h-[60px] p-3 border-2 border-dashed border-pink-300 bg-white rounded-2xl flex flex-wrap gap-2 items-center mb-4">
                    ${selectedHTML || '<span class="text-xs text-slate-400 font-medium">Bấm các từ xáo trộn bên dưới để ghép câu...</span>'}
                </div>

                <div class="flex flex-wrap gap-2 justify-center mb-6">${poolHTML}</div>

                <div class="text-center space-x-2">
                    <button onclick="checkDay28BuildSentence('${safeFullText}')" class="px-6 py-3 bg-emerald-600 text-white font-extrabold rounded-xl shadow">Kiểm tra</button>
                    <button onclick="resetDay28BuildSentence()" class="px-4 py-3 bg-slate-200 text-slate-700 font-bold rounded-xl">Làm lại</button>
                </div>
            </div>
        `;
    }
};

window.addDay28Word = function(word) {
    playBtnSound();
    window.day28SelectedWords = window.day28SelectedWords || [];
    window.day28SelectedWords.push(word);
    loadLevel(currentLevel);
};

window.removeDay28Word = function(index) {
    playBtnSound();
    window.day28SelectedWords.splice(index, 1);
    loadLevel(currentLevel);
};

window.resetDay28BuildSentence = function() {
    playBtnSound();
    window.day28SelectedWords = [];
    loadLevel(currentLevel);
};

window.checkDay28BuildSentence = function(target) {
    playBtnSound();
    const result = (window.day28SelectedWords || []).join(' ');
    if (result === target) {
        playSound('correct');
        window.day28SelectedWords = [];
        window.day28ShuffledWords = null;
        window.day28BuildIndex++;
        setTimeout(() => { loadLevel(currentLevel); }, 600);
    } else {
        handleWrongAnswer();
    }
};