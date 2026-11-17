window.ENG6_LESSONS = window.ENG6_LESSONS || {};

window.ENG6_LESSONS[48] = {
    unit: 5, // Thuộc Unit 5: Natural Wonders of Viet Nam
    title: "Day 48: Writing - A Natural Wonder",
    description: "Viết đoạn văn ngắn (khoảng 50 từ) giới thiệu một kỳ quan thiên nhiên (I am writing about Ha Long Bay. It is in Quang Ninh.)",
    ipa: "/ˈraɪtɪŋ ə ˈpærəɡræf əˈbaʊt ə ˈnætʃrəl ˈwʌndər/",
    
    // Cấu hình lộ trình 7 màn hoạt động chuẩn cho Day 48
    activities: [
        'grammar-intro-day48',         // Màn 1: Hướng dẫn bố cục viết đoạn văn giới thiệu kỳ quan
        'multiple-choice',              // Màn 2: Trắc nghiệm cấu trúc câu viết đoạn văn
        'matching-meaning',             // Màn 3: Nối câu & Nghĩa Tiếng Việt
        'listening',                    // Màn 4: Nghe mẫu đoạn văn & chọn đáp án đúng
        'matching-ipa',                 // Màn 5: Nối câu & Phiên âm IPA chuẩn
        'sentence-builder-wonder',      // Màn 6: Sắp xếp câu hoàn chỉnh miêu tả kỳ quan thiên nhiên
        'spelling'                      // Màn 7: Kiểm tra hoàn thiện chính tả các câu viết
    ],

    vocab: [
        { 
            id: 'd48_w1', 
            en: 'I am writing about Ha Long Bay', 
            ipa: '/aɪ æm ˈraɪtɪŋ əˈbaʊt hɑː lɑːŋ beɪ/', 
            vi: 'Tôi đang viết về Vịnh Hạ Long', 
            wrongSpells: ['I am write about Ha Long Bay', 'I writing about Ha Long Bay', 'I am writing about Ha Long Bays'] 
        },
        { 
            id: 'd48_w2', 
            en: 'It is in Quang Ninh province', 
            ipa: '/ɪt ɪz ɪn kwɑːŋ nɪn ˈprɑːvɪns/', 
            vi: 'Nó ở tỉnh Quảng Ninh', 
            wrongSpells: ['It are in Quang Ninh province', 'It is at Quang Ninh province', 'It in Quang Ninh province'] 
        },
        { 
            id: 'd48_w3', 
            en: 'You can go there by boat', 
            ipa: '/juː kæn ɡoʊ ðer baɪ boʊt/', 
            vi: 'Bạn có thể đến đó bằng thuyền', 
            wrongSpells: ['You can goes there by boat', 'You can go there with boat', 'You can go there on boat'] 
        },
        { 
            id: 'd48_w4', 
            en: 'It has many islands and caves', 
            ipa: '/ɪt hæz ˈmeni ˈaɪləndz ænd keɪvz/', 
            vi: 'Nó có nhiều hòn đảo và hang động', 
            wrongSpells: ['It have many islands and caves', 'It has much islands and caves', 'It is many islands and caves'] 
        },
        { 
            id: 'd48_w5', 
            en: 'Visitors can enjoy seafood and take photos', 
            ipa: '/ˈvɪzɪtərz kæn ɪnˈdʒɔɪ ˈsiːfuːd ænd teɪk ˈfoʊtoʊz/', 
            vi: 'Du khách có thể thưởng thức hải sản và chụp ảnh', 
            wrongSpells: ['Visitors can enjoys seafood', 'Visitors can enjoy seafood and takes photos', 'Visitors can enjoying seafood'] 
        }
    ]
};

window.ENG6_GAME_MODULES = window.ENG6_GAME_MODULES || {};

// MÀN 1: Hướng dẫn bố cục viết đoạn văn giới thiệu kỳ quan (Day 48)
window.ENG6_GAME_MODULES['grammar-intro-day48'] = {
    title: 'Màn 1: Hướng Dẫn Viết Đoạn Văn Về Kỳ Quan Thiên Nhiên',
    render(ctx) {
        ctx.container.innerHTML = `
            <div class="space-y-4">
                <div class="text-center">
                    <span class="px-3 py-1 bg-teal-100 text-teal-800 font-bold text-xs rounded-full">Unit 5: Writing Skills</span>
                    <h3 class="text-2xl font-black text-slate-800 mt-2">Viết Về Kỳ Quan Thiên Nhiên</h3>
                    <p class="text-slate-600 text-sm mt-1">Nắm vững cấu trúc 5 câu hỏi trọng tâm để hoàn thành đoạn văn khoảng 50 từ thật chuẩn xác!</p>
                </div>

                <div class="bg-teal-50 border-2 border-teal-200 p-4 rounded-2xl space-y-2.5 text-slate-700 text-sm">
                    <div class="flex items-start space-x-3">
                        <div class="w-7 h-7 rounded-full bg-teal-600 text-white font-bold flex items-center justify-center flex-shrink-0 text-xs">1</div>
                        <div>
                            <strong class="text-teal-900 font-bold">Giới thiệu tên và vị trí:</strong>
                            <span class="font-semibold text-slate-900">I am writing about [Tên kỳ quan]. It is in [Địa điểm].</span>
                        </div>
                    </div>
                    <div class="flex items-start space-x-3">
                        <div class="w-7 h-7 rounded-full bg-teal-600 text-white font-bold flex items-center justify-center flex-shrink-0 text-xs">2</div>
                        <div>
                            <strong class="text-teal-900 font-bold">Cách di chuyển:</strong>
                            <span class="font-semibold text-slate-900">You can go there by [boat / bus / plane]...</span>
                        </div>
                    </div>
                    <div class="flex items-start space-x-3">
                        <div class="w-7 h-7 rounded-full bg-teal-600 text-white font-bold flex items-center justify-center flex-shrink-0 text-xs">3</div>
                        <div>
                            <strong class="text-teal-900 font-bold">Đặc điểm và hoạt động:</strong>
                            <span class="font-semibold text-slate-900">It has many islands and caves. You can visit and enjoy seafood.</span>
                        </div>
                    </div>
                </div>

                <div class="bg-amber-50 border border-amber-200 p-3 rounded-xl text-xs text-slate-700 italic">
                    <strong class="text-amber-900 not-italic block mb-1">📖 Đoạn văn mẫu hoàn chỉnh (SGK trang 55):</strong>
                    "I am writing about Ha Long Bay. It is in Quang Ninh. You can go there by boat. It has many islands and caves. Visitors can enjoy seafood and take beautiful photos."
                </div>

                <div class="text-center pt-1">
                    <button onclick="playBtnSound(); completeLevel()" class="px-8 py-3.5 bg-gradient-to-r from-teal-600 to-cyan-600 text-white font-extrabold rounded-2xl shadow-lg hover:opacity-95 transition-all text-base">
                        Đã hiểu bố cục, luyện tập ngay! <i class="fa-solid fa-arrow-right ml-2"></i>
                    </button>
                </div>
            </div>
        `;
    }
};

// MÀN 6: Sắp xếp câu hoàn chỉnh miêu tả kỳ quan (Sentence Builder)
window.ENG6_GAME_MODULES['sentence-builder-wonder'] = {
    title: 'Màn 6: Sắp Xếp Câu Hoàn Chỉnh Viết Đoạn Văn Kỳ Quan',
    render(ctx) {
        window.day48BuildIndex = window.day48BuildIndex || 0;
        const sentences = [
            { words: ['I', 'am', 'writing', 'about', 'Ha', 'Long', 'Bay'], full: 'I am writing about Ha Long Bay' },
            { words: ['It', 'is', 'in', 'Quang', 'Ninh', 'province'], full: 'It is in Quang Ninh province' },
            { words: ['You', 'can', 'go', 'there', 'by', 'boat'], full: 'You can go there by boat' },
            { words: ['It', 'has', 'many', 'islands', 'and', 'caves'], full: 'It has many islands and caves' },
            { words: ['Visitors', 'can', 'enjoy', 'seafood', 'and', 'take', 'photos'], full: 'Visitors can enjoy seafood and take photos' }
        ];

        if (window.day48BuildIndex >= sentences.length) {
            window.day48BuildIndex = 0;
            completeLevel();
            return;
        }

        const currS = sentences[window.day48BuildIndex];
        
        // Khởi tạo mảng xáo trộn ngẫu nhiên cho từng câu hỏi
        if (!window.day48ShuffledWords || window.day48CurrentQuestionIndex !== window.day48BuildIndex) {
            window.day48CurrentQuestionIndex = window.day48BuildIndex;
            let pool = [...currS.words];
            for (let i = pool.length - 1; i > 0; i--) {
                const j = Math.floor(Math.random() * (i + 1));
                [pool[i], pool[j]] = [pool[j], pool[i]];
            }
            window.day48ShuffledWords = pool;
            window.day48SelectedWords = [];
        }

        window.day48SelectedWords = window.day48SelectedWords || [];

        // Lọc các từ chưa được chọn từ kho từ đã xáo trộn
        let availablePool = [...window.day48ShuffledWords];
        window.day48SelectedWords.forEach(sel => {
            const idx = availablePool.indexOf(sel);
            if (idx > -1) availablePool.splice(idx, 1);
        });

        let selectedHTML = window.day48SelectedWords.map((w, i) => {
            const safeWord = w.replace(/'/g, "\\'");
            return `<button onclick="removeDay48Word(${i})" class="px-3 py-2 bg-teal-600 text-white font-bold rounded-xl text-sm shadow">${w}</button>`;
        }).join('');

        let poolHTML = availablePool.map((w) => {
            const safeWord = w.replace(/'/g, "\\'");
            return `<button onclick="addDay48Word('${safeWord}')" class="px-4 py-2.5 bg-slate-100 hover:bg-slate-200 text-slate-800 font-bold rounded-xl text-sm border-2 border-slate-300">${w}</button>`;
        }).join('');

        const safeFullText = currS.full.replace(/'/g, "\\'");

        ctx.container.innerHTML = `
            <div>
                <div class="bg-teal-50 border border-teal-200 p-2.5 rounded-xl text-center mb-3">
                    <span class="text-xs font-bold text-teal-800">💡 Ghép các từ bên dưới thành câu hoàn chỉnh để viết đoạn văn kỳ quan</span>
                </div>
                <div class="flex justify-between items-center mb-2">
                    <span class="text-xs font-bold text-slate-500">Câu ${window.day48BuildIndex + 1} / ${sentences.length}</span>
                </div>

                <div class="min-h-[60px] p-3 border-2 border-dashed border-teal-300 bg-white rounded-2xl flex flex-wrap gap-2 items-center mb-4">
                    ${selectedHTML || '<span class="text-xs text-slate-400 font-medium">Bấm các từ xáo trộn bên dưới để ghép câu...</span>'}
                </div>

                <div class="flex flex-wrap gap-2 justify-center mb-6">${poolHTML}</div>

                <div class="text-center space-x-2">
                    <button onclick="checkDay48BuildSentence('${safeFullText}')" class="px-6 py-3 bg-teal-600 text-white font-extrabold rounded-xl shadow">Kiểm tra</button>
                    <button onclick="resetDay48BuildSentence()" class="px-4 py-3 bg-slate-200 text-slate-700 font-bold rounded-xl">Làm lại</button>
                </div>
            </div>
        `;
    }
};

window.addDay48Word = function(word) {
    playBtnSound();
    window.day48SelectedWords = window.day48SelectedWords || [];
    window.day48SelectedWords.push(word);
    loadLevel(currentLevel);
};

window.removeDay48Word = function(index) {
    playBtnSound();
    window.day48SelectedWords.splice(index, 1);
    loadLevel(currentLevel);
};

window.resetDay48BuildSentence = function() {
    playBtnSound();
    window.day48SelectedWords = [];
    loadLevel(currentLevel);
};

window.checkDay48BuildSentence = function(target) {
    playBtnSound();
    const result = (window.day48SelectedWords || []).join(' ');
    if (result === target) {
        playSound('correct');
        window.day48SelectedWords = [];
        window.day48ShuffledWords = null;
        window.day48BuildIndex++;
        setTimeout(() => { loadLevel(currentLevel); }, 600);
    } else {
        handleWrongAnswer();
    }
};