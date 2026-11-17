window.ENG6_LESSONS = window.ENG6_LESSONS || {};

window.ENG6_LESSONS[40] = {
    unit: 5, // Thuộc Unit 5: Natural Wonders of Viet Nam
    title: "Day 40: Travel Items",
    description: "Học tên các vật dụng thiết yếu khi đi cắm trại và khám phá (plaster, sleeping bag, backpack, compass, sun cream, scissors)",
    ipa: "/ˈtrævl ˈaɪtəmz/",
    
    // Cấu hình lộ trình 7 màn hoạt động chuẩn cho Day 40
    activities: [
        'grammar-intro-day40',         // Màn 1: Khám phá các đồ dùng du lịch thiết yếu
        'multiple-choice',              // Màn 2: Trắc nghiệm mặt chữ từ vựng
        'matching-meaning',             // Màn 3: Nối từ & Nghĩa Tiếng Việt
        'listening',                    // Màn 4: Nghe âm thanh & chọn đáp án đúng
        'matching-ipa',                 // Màn 5: Nối từ & Phiên âm IPA chuẩn
        'sentence-builder-travel',      // Màn 6: Ghép câu đồ dùng (I need a sleeping bag)
        'spelling'                      // Màn 7: Kiểm tra chính tả từ vựng đồ dùng
    ],

    vocab: [
        { 
            id: 'd40_plaster', 
            en: 'plaster', 
            ipa: '/ˈplæstər/', 
            vi: 'băng cá nhân', 
            wrongSpells: ['plastar', 'plasterr', 'plaister'] 
        },
        { 
            id: 'd40_sleepingbag', 
            en: 'sleeping bag', 
            ipa: '/ˈsliːpɪŋ bæɡ/', 
            vi: 'túi ngủ', 
            wrongSpells: ['sleep bag', 'sleeping beg', 'sleepung bag'] 
        },
        { 
            id: 'd40_backpack', 
            en: 'backpack', 
            ipa: '/ˈbækpæk/', 
            vi: 'ba lô', 
            wrongSpells: ['back pack', 'backpak', 'backpach'] 
        },
        { 
            id: 'd40_compass', 
            en: 'compass', 
            ipa: '/ˈkʌmpəs/', 
            vi: 'la bàn', 
            wrongSpells: ['compas', 'compuss', 'kompass'] 
        },
        { 
            id: 'd40_suncream', 
            en: 'sun cream', 
            ipa: '/ˈsʌn kriːm/', 
            vi: 'kem chống nắng', 
            wrongSpells: ['suncream', 'sun crim', 'sun-cream'] 
        },
        { 
            id: 'd40_scissors', 
            en: 'scissors', 
            ipa: '/ˈsɪzərz/', 
            vi: 'cái kéo', 
            wrongSpells: ['scisors', 'scizzors', 'scisor'] 
        }
    ]
};

window.ENG6_GAME_MODULES = window.ENG6_GAME_MODULES || {};

// MÀN 1: Khám phá đồ dùng du lịch thiết yếu (Day 40)
window.ENG6_GAME_MODULES['grammar-intro-day40'] = {
    title: 'Màn 1: Khám Phá - Đồ Dùng Khi Đi Du Lịch (Travel Items)',
    render(ctx) {
        ctx.container.innerHTML = `
            <div class="space-y-4">
                <div class="text-center">
                    <span class="px-3 py-1 bg-teal-100 text-teal-800 font-bold text-xs rounded-full">Unit 5: A Closer Look 1</span>
                    <h3 class="text-2xl font-black text-slate-800 mt-2">Đồ Dùng Thiết Yếu Khi Du Lịch</h3>
                    <p class="text-slate-600 text-sm mt-1">Ghi nhớ tên các vật dụng cần mang theo khi đi cắm trại và khám phá thiên nhiên!</p>
                </div>

                <div class="bg-teal-50 border-2 border-teal-200 p-4 rounded-2xl space-y-3 text-slate-700 text-sm">
                    <div class="flex items-start space-x-3">
                        <div class="w-8 h-8 rounded-full bg-teal-600 text-white font-bold flex items-center justify-center flex-shrink-0">1</div>
                        <div>
                            <strong class="text-teal-900 block font-bold">Vật dụng bảo vệ & sơ cứu:</strong>
                            - <span class="text-slate-900 font-semibold">plaster</span> (/ˈplæstər/): băng cá nhân[cite: 9].<br>
                            - <span class="text-slate-900 font-semibold">sun cream</span> (/ˈsʌn kriːm/): kem chống nắng[cite: 9].<br>
                            - <span class="text-slate-900 font-semibold">scissors</span> (/ˈsɪzərz/): cái kéo[cite: 9].
                        </div>
                    </div>
                    <div class="flex items-start space-x-3">
                        <div class="w-8 h-8 rounded-full bg-teal-600 text-white font-bold flex items-center justify-center flex-shrink-0">2</div>
                        <div>
                            <strong class="text-teal-900 block font-bold">Thiết bị định hướng & cắm trại:</strong>
                            - <span class="text-slate-900 font-semibold">backpack</span> (/ˈbækpæk/): ba lô[cite: 9].<br>
                            - <span class="text-slate-900 font-semibold">compass</span> (/ˈkʌmpəs/): la bàn[cite: 9].<br>
                            - <span class="text-slate-900 font-semibold">sleeping bag</span> (/ˈsliːpɪŋ bæɡ/): túi ngủ[cite: 9].
                        </div>
                    </div>
                    <div class="flex items-start space-x-3">
                        <div class="w-8 h-8 rounded-full bg-teal-600 text-white font-bold flex items-center justify-center flex-shrink-0">3</div>
                        <div>
                            <strong class="text-teal-900 block font-bold">Cấu trúc mẫu câu ứng dụng:</strong>
                            - <span class="font-mono bg-white px-2 py-0.5 rounded border border-teal-200 font-bold">I need a sleeping bag when I go camping.</span><br>
                            - <span class="text-xs text-teal-900 font-semibold">👉 Ví dụ: We are lost, please give me the compass. (Chúng ta bị lạc rồi, hãy đưa tôi la bàn nhé.)</span>[cite: 9]
                        </div>
                    </div>
                </div>

                <div class="text-center pt-2">
                    <button onclick="playBtnSound(); completeLevel()" class="px-8 py-3.5 bg-gradient-to-r from-teal-600 to-cyan-600 text-white font-extrabold rounded-2xl shadow-lg hover:opacity-95 transition-all text-base">
                        Đã hiểu rõ, vào luyện tập ngay! <i class="fa-solid fa-arrow-right ml-2"></i>
                    </button>
                </div>
            </div>
        `;
    }
};

// MÀN 6: Sắp xếp câu đồ dùng du lịch (Sentence Builder)
window.ENG6_GAME_MODULES['sentence-builder-travel'] = {
    title: 'Màn 6: Ghép Câu Về Đồ Dùng Du Lịch',
    render(ctx) {
        window.day40BuildIndex = window.day40BuildIndex || 0;
        const sentences = [
            { words: ['I', 'need', 'a', 'sleeping', 'bag'], full: 'I need a sleeping bag' },
            { words: ['Please', 'give', 'me', 'the', 'compass'], full: 'Please give me the compass' },
            { words: ['I', 'want', 'to', 'put', 'sun', 'cream', 'on'], full: 'I want to put sun cream on' },
            { words: ['My', 'foot', 'hurts', 'need', 'a', 'plaster'], full: 'My foot hurts need a plaster' }, // simplified structure
            { words: ['All', 'my', 'things', 'are', 'in', 'my', 'backpack'], full: 'All my things are in my backpack' }
        ];

        if (window.day40BuildIndex >= sentences.length) {
            window.day40BuildIndex = 0;
            completeLevel();
            return;
        }

        const currS = sentences[window.day40BuildIndex];
        
        // Khởi tạo mảng xáo trộn ngẫu nhiên cho từng câu hỏi
        if (!window.day40ShuffledWords || window.day40CurrentQuestionIndex !== window.day40BuildIndex) {
            window.day40CurrentQuestionIndex = window.day40BuildIndex;
            let pool = [...currS.words];
            for (let i = pool.length - 1; i > 0; i--) {
                const j = Math.floor(Math.random() * (i + 1));
                [pool[i], pool[j]] = [pool[j], pool[i]];
            }
            window.day40ShuffledWords = pool;
            window.day40SelectedWords = [];
        }

        window.day40SelectedWords = window.day40SelectedWords || [];

        // Lọc các từ chưa được chọn từ kho từ đã xáo trộn
        let availablePool = [...window.day40ShuffledWords];
        window.day40SelectedWords.forEach(sel => {
            const idx = availablePool.indexOf(sel);
            if (idx > -1) availablePool.splice(idx, 1);
        });

        let selectedHTML = window.day40SelectedWords.map((w, i) => {
            const safeWord = w.replace(/'/g, "\\'");
            return `<button onclick="removeDay40Word(${i})" class="px-3 py-2 bg-teal-600 text-white font-bold rounded-xl text-sm shadow">${w}</button>`;
        }).join('');

        let poolHTML = availablePool.map((w) => {
            const safeWord = w.replace(/'/g, "\\'");
            return `<button onclick="addDay40Word('${safeWord}')" class="px-4 py-2.5 bg-slate-100 hover:bg-slate-200 text-slate-800 font-bold rounded-xl text-sm border-2 border-slate-300">${w}</button>`;
        }).join('');

        const safeFullText = currS.full.replace(/'/g, "\\'");

        ctx.container.innerHTML = `
            <div>
                <div class="bg-teal-50 border border-teal-200 p-2.5 rounded-xl text-center mb-3">
                    <span class="text-xs font-bold text-teal-800">💡 Ghép các từ xáo trộn bên dưới thành câu nói về đồ dùng du lịch</span>
                </div>
                <div class="flex justify-between items-center mb-2">
                    <span class="text-xs font-bold text-slate-500">Câu ${window.day40BuildIndex + 1} / ${sentences.length}</span>
                </div>

                <div class="min-h-[60px] p-3 border-2 border-dashed border-teal-300 bg-white rounded-2xl flex flex-wrap gap-2 items-center mb-4">
                    ${selectedHTML || '<span class="text-xs text-slate-400 font-medium">Bấm các từ xáo trộn bên dưới để ghép câu...</span>'}
                </div>

                <div class="flex flex-wrap gap-2 justify-center mb-6">${poolHTML}</div>

                <div class="text-center space-x-2">
                    <button onclick="checkDay40BuildSentence('${safeFullText}')" class="px-6 py-3 bg-teal-600 text-white font-extrabold rounded-xl shadow">Kiểm tra</button>
                    <button onclick="resetDay40BuildSentence()" class="px-4 py-3 bg-slate-200 text-slate-700 font-bold rounded-xl">Làm lại</button>
                </div>
            </div>
        `;
    }
};

window.addDay40Word = function(word) {
    playBtnSound();
    window.day40SelectedWords = window.day40SelectedWords || [];
    window.day40SelectedWords.push(word);
    loadLevel(currentLevel);
};

window.removeDay40Word = function(index) {
    playBtnSound();
    window.day40SelectedWords.splice(index, 1);
    loadLevel(currentLevel);
};

window.resetDay40BuildSentence = function() {
    playBtnSound();
    window.day40SelectedWords = [];
    loadLevel(currentLevel);
};

window.checkDay40BuildSentence = function(target) {
    playBtnSound();
    const result = (window.day40SelectedWords || []).join(' ');
    if (result === target) {
        playSound('correct');
        window.day40SelectedWords = [];
        window.day40ShuffledWords = null;
        window.day40BuildIndex++;
        setTimeout(() => { loadLevel(currentLevel); }, 600);
    } else {
        handleWrongAnswer();
    }
};