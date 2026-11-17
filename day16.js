window.ENG6_LESSONS = window.ENG6_LESSONS || {};

window.ENG6_LESSONS[16] = {
    unit: 2, // Thuộc Unit 2: My House
    title: "Day 16: Giving Suggestions",
    description: "Cấu trúc đưa ra lời gợi ý (How about + V-ing...?, Let's + V ...)",
    ipa: "/ˈɡɪvɪŋ səɡˈtʃestʃənz/",
    
    // Cấu hình lộ trình 7 màn hoạt động cho Day 16
    activities: [
        'grammar-intro-suggestions',       // Màn 1: Lý thuyết giải thích cấu trúc How about / Let's
        'multiple-choice',                 // Màn 2: Trắc nghiệm mặt chữ / cấu trúc
        'matching-meaning',                // Màn 3: Nối câu gợi ý & Nghĩa Tiếng Việt
        'listening',                       // Màn 4: Nghe âm thanh & chọn đáp án đúng
        'matching-ipa',                    // Màn 5: Nối câu & Phiên âm IPA chuẩn
        'sentence-builder-suggestions',    // Màn 6: Sắp xếp cấu trúc câu đưa ra lời gợi ý
        'spelling'                         // Màn 7: Kiểm tra chính tả từ vựng/câu
    ],

    vocab: [
        { 
            id: 'd16_ex1', 
            en: "How about putting a picture on the wall?", 
            ipa: '/haʊ əˈbaʊt ˈpʊtɪŋ ə ˈpɪktʃər ɒn ðə wɔːl/', 
            vi: 'Gợi ý treo một bức tranh lên tường nhé?', 
            wrongSpells: ["How about put a picture on the wall", "How about putting picture on wall"] 
        },
        { 
            id: 'd16_ex2', 
            en: "Let's go to the department store", 
            ipa: '/lets ɡəʊ tuː ðə dɪˈpɑːrtmənt stɔːr/', 
            vi: 'Hãy cùng đi đến cửa hàng bách hóa nhé', 
            wrongSpells: ["Let us going to the department store", "Lets go to department store"] 
        },
        { 
            id: 'd16_ex3', 
            en: "How about painting the wall blue?", 
            ipa: '/haʊ əˈbaʊt ˈpeɪntɪŋ ðə wɔːl bluː/', 
            vi: 'Gợi ý sơn bức tường màu xanh dương nhé?', 
            wrongSpells: ["How about paint the wall blue", "How about painting wall blue"] 
        },
        { 
            id: 'd16_ex4', 
            en: "Let's put the desk next to the window", 
            ipa: '/lets pʊt ðə desk nekst tuː ðə ˈwɪndəʊ/', 
            vi: 'Hãy đặt bàn học cạnh cửa sổ đi', 
            wrongSpells: ["Lets puts the desk next to the window", "Let's putting the desk next to window"] 
        },
        { 
            id: 'd16_ex5', 
            en: "How about buying a new sofa?", 
            ipa: '/haʊ əˈbaʊt ˈbaɪɪŋ ə nuː ˈsəʊfə/', 
            vi: 'Gợi ý mua một chiếc ghế sofa mới nhé?', 
            wrongSpells: ["How about buy a new sofa", "How about buying new sofa"] 
        }
    ]
};

window.ENG6_GAME_MODULES = window.ENG6_GAME_MODULES || {};

// MÀN 1: Lý thuyết giải thích cấu trúc Đưa ra lời gợi ý (Giving Suggestions)
window.ENG6_GAME_MODULES['grammar-intro-suggestions'] = {
    title: 'Màn 1: Lý Thuyết - Đưa Ra Lời Gợi Ý (Giving Suggestions)',
    render(ctx) {
        ctx.container.innerHTML = `
            <div class="space-y-4">
                <div class="text-center">
                    <span class="px-3 py-1 bg-purple-100 text-purple-800 font-bold text-xs rounded-full">Ngữ Pháp Trọng Tâm Unit 2</span>
                    <h3 class="text-2xl font-black text-slate-800 mt-2">Đưa Ra Lời Gợi Ý (Giving Suggestions)</h3>
                    <p class="text-slate-600 text-sm mt-1">Học cách rủ rê, đề xuất làm việc gì đó cùng người khác!</p>
                </div>

                <div class="bg-purple-50 border-2 border-purple-200 p-4 rounded-2xl space-y-3 text-slate-700 text-sm">
                    <div class="flex items-start space-x-3">
                        <div class="w-8 h-8 rounded-full bg-purple-600 text-white font-bold flex items-center justify-center flex-shrink-0">1</div>
                        <div>
                            <strong class="text-purple-900 block font-bold">HOW ABOUT + V-ING...? (Thế còn việc... thì sao?)</strong>
                            - Dùng để đưa ra gợi ý, đề xuất một hành động.<br>
                            - Lưu ý: Động từ theo sau <span class="font-bold text-rose-600">phải thêm đuôi -ing</span>.<br>
                            - <span class="text-xs text-purple-800 font-medium">👉 Ví dụ: How about putting a picture on the wall? (Treo tranh lên tường nhé?)</span>
                        </div>
                    </div>
                    <div class="flex items-start space-x-3">
                        <div class="w-8 h-8 rounded-full bg-purple-600 text-white font-bold flex items-center justify-center flex-shrink-0">2</div>
                        <div>
                            <strong class="text-purple-900 block font-bold">LET'S + V (nguyên thể)... (Hãy cùng...)</strong>
                            - Dùng để rủ ai đó cùng làm gì với mình.<br>
                            - Lưu ý: Động từ theo sau giữ nguyên mẫu, <span class="font-bold text-rose-600">không chia, không thêm gì cả</span>.<br>
                            - <span class="text-xs text-purple-800 font-medium">👉 Ví dụ: Let's go to the department store. (Hãy cùng đi đến cửa hàng bách hóa.)</span>
                        </div>
                    </div>
                </div>

                <div class="text-center pt-2">
                    <button onclick="playBtnSound(); completeLevel()" class="px-8 py-3.5 bg-gradient-to-r from-purple-600 to-indigo-600 text-white font-extrabold rounded-2xl shadow-lg hover:opacity-95 transition-all text-base">
                        Đã hiểu rõ, vào luyện tập ngay! <i class="fa-solid fa-arrow-right ml-2"></i>
                    </button>
                </div>
            </div>
        `;
    }
};

// MÀN 6: Sắp xếp cấu trúc câu đưa ra lời gợi ý
window.ENG6_GAME_MODULES['sentence-builder-suggestions'] = {
    title: 'Màn 6: Ghép Câu Đưa Ra Lời Gợi Ý',
    render(ctx) {
        window.day16BuildIndex = window.day16BuildIndex || 0;
        const sentences = [
            { words: ['How', 'about', 'putting', 'a', 'picture', 'on', 'the', 'wall'], full: 'How about putting a picture on the wall' },
            { words: ["Let's", 'go', 'to', 'the', 'department', 'store'], full: "Let's go to the department store" },
            { words: ['How', 'about', 'painting', 'the', 'wall', 'blue'], full: 'How about painting the wall blue' },
            { words: ["Let's", 'put', 'the', 'desk', 'next', 'to', 'the', 'window'], full: "Let's put the desk next to the window" },
            { words: ['How', 'about', 'buying', 'a', 'new', 'sofa'], full: 'How about buying a new sofa' }
        ];

        if (window.day16BuildIndex >= sentences.length) {
            window.day16BuildIndex = 0;
            completeLevel();
            return;
        }

        const currS = sentences[window.day16BuildIndex];
        window.day16SelectedWords = window.day16SelectedWords || [];

        let shuffled = [...currS.words].sort(() => Math.random() - 0.5);

        let selectedHTML = window.day16SelectedWords.map((w, i) => `
            <button onclick="removeDay16Word(${i})" class="px-3 py-2 bg-purple-600 text-white font-bold rounded-xl text-sm shadow">
                ${w}
            </button>
        `).join('');

        let poolHTML = shuffled.map((w) => `
            <button onclick="addDay16Word('${w}')" class="px-4 py-2.5 bg-slate-100 hover:bg-slate-200 text-slate-800 font-bold rounded-xl text-sm border-2 border-slate-300">
                ${w}
            </button>
        `).join('');

        ctx.container.innerHTML = `
            <div>
                <div class="bg-purple-50 border border-purple-200 p-2.5 rounded-xl text-center mb-3">
                    <span class="text-xs font-bold text-purple-800">💡 Cấu trúc: How about + V-ing...? / Let's + V nguyên thể...</span>
                </div>
                <div class="flex justify-between items-center mb-2">
                    <span class="text-xs font-bold text-slate-500">Câu ${window.day16BuildIndex + 1} / ${sentences.length}</span>
                </div>

                <div class="min-h-[60px] p-3 border-2 border-dashed border-purple-300 bg-white rounded-2xl flex flex-wrap gap-2 items-center mb-4">
                    ${selectedHTML || '<span class="text-xs text-slate-400 font-medium">Bấm các từ bên dưới để ghép câu...</span>'}
                </div>

                <div class="flex flex-wrap gap-2 justify-center mb-6">${poolHTML}</div>

                <div class="text-center space-x-2">
                    <button onclick="checkDay16BuildSentence('${currS.full}')" class="px-6 py-3 bg-emerald-600 text-white font-extrabold rounded-xl shadow">Kiểm tra</button>
                    <button onclick="resetDay16BuildSentence()" class="px-4 py-3 bg-slate-200 text-slate-700 font-bold rounded-xl">Làm lại</button>
                </div>
            </div>
        `;
    }
};

window.addDay16Word = function(word) {
    playBtnSound();
    window.day16SelectedWords = window.day16SelectedWords || [];
    window.day16SelectedWords.push(word);
    loadLevel(currentLevel);
};

window.removeDay16Word = function(index) {
    playBtnSound();
    window.day16SelectedWords.splice(index, 1);
    loadLevel(currentLevel);
};

window.resetDay16BuildSentence = function() {
    playBtnSound();
    window.day16SelectedWords = [];
    loadLevel(currentLevel);
};

window.checkDay16BuildSentence = function(target) {
    playBtnSound();
    const result = (window.day16SelectedWords || []).join(' ');
    if (result === target) {
        playSound('correct');
        window.day16SelectedWords = [];
        window.day16BuildIndex++;
        setTimeout(() => { loadLevel(currentLevel); }, 600);
    } else {
        handleWrongAnswer();
    }
};