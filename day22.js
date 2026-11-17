window.ENG6_LESSONS = window.ENG6_LESSONS || {};

window.ENG6_LESSONS[22] = {
    unit: 3, // Thuộc Unit 3: My Friends
    title: "Day 22: Personality Adjectives - Part 2",
    description: "Mở rộng từ vựng tính cách (hard-working, confident, funny, caring, active)",
    ipa: "/ˌpɜːrsəˈnæləti ˈædʒɪktɪvz/",
    
    // Cấu hình lộ trình 7 màn hoạt động cho Day 22
    activities: [
        'grammar-intro-day22',          // Màn 1: Lý thuyết nhóm tính cách nâng cao
        'multiple-choice',               // Màn 2: Trắc nghiệm mặt chữ từ vựng
        'matching-meaning',              // Màn 3: Nối từ & Nghĩa Tiếng Việt
        'listening',                     // Màn 4: Nghe âm thanh & chọn đáp án đúng
        'matching-ipa',                  // Màn 5: Nối từ & Phiên âm IPA chuẩn
        'sentence-builder-personality2', // Màn 6: Ghép câu (Minh is hard-working)
        'spelling'                       // Màn 7: Kiểm tra chính tả từ vựng
    ],

    vocab: [
        { 
            id: 'd22_hardworking', 
            en: 'hard-working', 
            ipa: '/ˌhɑːrd ˈwɜːrkɪŋ/', 
            vi: 'chăm chỉ', 
            wrongSpells: ['hardworking', 'hard workng', 'hard-workkng'] 
        },
        { 
            id: 'd22_confident', 
            en: 'confident', 
            ipa: '/ˈkɑːnfɪdənt/', 
            vi: 'tự tin', 
            wrongSpells: ['confidant', 'confidnt', 'confiddent'] 
        },
        { 
            id: 'd22_funny', 
            en: 'funny', 
            ipa: '/ˈfʌni/', 
            vi: 'vui tính / hài hước', 
            wrongSpells: ['funni', 'funy', 'funnee'] 
        },
        { 
            id: 'd22_caring', 
            en: 'caring', 
            ipa: '/ˈkerɪŋ/', 
            vi: 'chu đáo / ân cần', 
            wrongSpells: ['caringg', 'carring', 'caringe'] 
        },
        { 
            id: 'd22_active', 
            en: 'active', 
            ipa: '/ˈæktɪv/', 
            vi: 'năng động', 
            wrongSpells: ['activ', 'actve', 'aktive'] 
        }
    ]
};

window.ENG6_GAME_MODULES = window.ENG6_GAME_MODULES || {};

// MÀN 1: Lý thuyết nhóm tính cách nâng cao (Day 22)
window.ENG6_GAME_MODULES['grammar-intro-day22'] = {
    title: 'Màn 1: Lý Thuyết - Tính Cách Nâng Cao (Personality Adjectives)',
    render(ctx) {
        ctx.container.innerHTML = `
            <div class="space-y-4">
                <div class="text-center">
                    <span class="px-3 py-1 bg-pink-100 text-pink-800 font-bold text-xs rounded-full">Unit 3: My Friends</span>
                    <h3 class="text-2xl font-black text-slate-800 mt-2">Tính Cách Nâng Cao (Part 2)</h3>
                    <p class="text-slate-600 text-sm mt-1">Mở rộng thêm các tính từ miêu tả tính cách tuyệt vời của bạn bè!</p>
                </div>

                <div class="bg-pink-50 border-2 border-pink-200 p-4 rounded-2xl space-y-3 text-slate-700 text-sm">
                    <div class="flex items-start space-x-3">
                        <div class="w-8 h-8 rounded-full bg-pink-600 text-white font-bold flex items-center justify-center flex-shrink-0">1</div>
                        <div>
                            <strong class="text-pink-900 block font-bold">Chăm chỉ & Tự tin:</strong>
                            - <span class="text-slate-900 font-semibold">hard-working</span> (/ˌhɑːrd ˈwɜːrkɪŋ/): chăm chỉ.<br>
                            - <span class="text-slate-900 font-semibold">confident</span> (/ˈkɑːnfɪdənt/): tự tin.
                        </div>
                    </div>
                    <div class="flex items-start space-x-3">
                        <div class="w-8 h-8 rounded-full bg-pink-600 text-white font-bold flex items-center justify-center flex-shrink-0">2</div>
                        <div>
                            <strong class="text-pink-900 block font-bold">Hài hước & Chu đáo:</strong>
                            - <span class="text-slate-900 font-semibold">funny</span> (/ˈfʌni/): vui tính, hài hước.<br>
                            - <span class="text-slate-900 font-semibold">caring</span> (/ˈkerɪŋ/): chu đáo, hay quan tâm người khác.
                        </div>
                    </div>
                    <div class="flex items-start space-x-3">
                        <div class="w-8 h-8 rounded-full bg-pink-600 text-white font-bold flex items-center justify-center flex-shrink-0">3</div>
                        <div>
                            <strong class="text-pink-900 block font-bold">Năng động & Mẫu câu ứng dụng:</strong>
                            - <span class="text-slate-900 font-semibold">active</span> (/ˈæktɪv/): năng động.<br>
                            <span class="text-xs text-pink-900 font-semibold">👉 Ví dụ: Minh is hard-working. (Minh là một người chăm chỉ.)</span>
                        </div>
                    </div>
                </div>

                <div class="text-center pt-2">
                    <button onclick="playBtnSound(); completeLevel()" class="px-8 py-3.5 bg-gradient-to-r from-pink-600 to-rose-600 text-white font-extrabold rounded-2xl shadow-lg hover:opacity-95 transition-all text-base">
                        Đã hiểu rõ, vào luyện tập ngay! <i class="fa-solid fa-arrow-right ml-2"></i>
                    </button>
                </div>
            </div>
        `;
    }
};

// MÀN 6: Sắp xếp cấu trúc câu chứa tính cách (Sentence Builder)
window.ENG6_GAME_MODULES['sentence-builder-personality2'] = {
    title: 'Màn 6: Ghép Câu Miêu Tả Tính Cách',
    render(ctx) {
        window.day22BuildIndex = window.day22BuildIndex || 0;
        const sentences = [
            { words: ['Minh', 'is', 'hard-working'], full: 'Minh is hard-working' },
            { words: ['Lan', 'is', 'confident'], full: 'Lan is confident' },
            { words: ['Nam', 'is', 'funny'], full: 'Nam is funny' },
            { words: ['Hoa', 'is', 'caring'], full: 'Hoa is caring' },
            { words: ['Phong', 'is', 'active'], full: 'Phong is active' }
        ];

        if (window.day22BuildIndex >= sentences.length) {
            window.day22BuildIndex = 0;
            completeLevel();
            return;
        }

        const currS = sentences[window.day22BuildIndex];
        
        // Khởi tạo mảng xáo trộn ngẫu nhiên cho từng câu hỏi
        if (!window.day22ShuffledWords || window.day22CurrentQuestionIndex !== window.day22BuildIndex) {
            window.day22CurrentQuestionIndex = window.day22BuildIndex;
            let pool = [...currS.words];
            for (let i = pool.length - 1; i > 0; i--) {
                const j = Math.floor(Math.random() * (i + 1));
                [pool[i], pool[j]] = [pool[j], pool[i]];
            }
            window.day22ShuffledWords = pool;
            window.day22SelectedWords = [];
        }

        window.day22SelectedWords = window.day22SelectedWords || [];

        // Lọc các từ chưa được chọn từ kho từ đã xáo trộn
        let availablePool = [...window.day22ShuffledWords];
        window.day22SelectedWords.forEach(sel => {
            const idx = availablePool.indexOf(sel);
            if (idx > -1) availablePool.splice(idx, 1);
        });

        let selectedHTML = window.day22SelectedWords.map((w, i) => {
            const safeWord = w.replace(/'/g, "\\'");
            return `<button onclick="removeDay22Word(${i})" class="px-3 py-2 bg-pink-600 text-white font-bold rounded-xl text-sm shadow">${w}</button>`;
        }).join('');

        let poolHTML = availablePool.map((w) => {
            const safeWord = w.replace(/'/g, "\\'");
            return `<button onclick="addDay22Word('${safeWord}')" class="px-4 py-2.5 bg-slate-100 hover:bg-slate-200 text-slate-800 font-bold rounded-xl text-sm border-2 border-slate-300">${w}</button>`;
        }).join('');

        const safeFullText = currS.full.replace(/'/g, "\\'");

        ctx.container.innerHTML = `
            <div>
                <div class="bg-pink-50 border border-pink-200 p-2.5 rounded-xl text-center mb-3">
                    <span class="text-xs font-bold text-pink-800">💡 Cấu trúc: Tên riêng + is + [Tính từ chỉ tính cách]</span>
                </div>
                <div class="flex justify-between items-center mb-2">
                    <span class="text-xs font-bold text-slate-500">Câu ${window.day22BuildIndex + 1} / ${sentences.length}</span>
                </div>

                <div class="min-h-[60px] p-3 border-2 border-dashed border-pink-300 bg-white rounded-2xl flex flex-wrap gap-2 items-center mb-4">
                    ${selectedHTML || '<span class="text-xs text-slate-400 font-medium">Bấm các từ xáo trộn bên dưới để ghép câu...</span>'}
                </div>

                <div class="flex flex-wrap gap-2 justify-center mb-6">${poolHTML}</div>

                <div class="text-center space-x-2">
                    <button onclick="checkDay22BuildSentence('${safeFullText}')" class="px-6 py-3 bg-emerald-600 text-white font-extrabold rounded-xl shadow">Kiểm tra</button>
                    <button onclick="resetDay22BuildSentence()" class="px-4 py-3 bg-slate-200 text-slate-700 font-bold rounded-xl">Làm lại</button>
                </div>
            </div>
        `;
    }
};

window.addDay22Word = function(word) {
    playBtnSound();
    window.day22SelectedWords = window.day22SelectedWords || [];
    window.day22SelectedWords.push(word);
    loadLevel(currentLevel);
};

window.removeDay22Word = function(index) {
    playBtnSound();
    window.day22SelectedWords.splice(index, 1);
    loadLevel(currentLevel);
};

window.resetDay22BuildSentence = function() {
    playBtnSound();
    window.day22SelectedWords = [];
    loadLevel(currentLevel);
};

window.checkDay22BuildSentence = function(target) {
    playBtnSound();
    const result = (window.day22SelectedWords || []).join(' ');
    if (result === target) {
        playSound('correct');
        window.day22SelectedWords = [];
        window.day22ShuffledWords = null;
        window.day22BuildIndex++;
        setTimeout(() => { loadLevel(currentLevel); }, 600);
    } else {
        handleWrongAnswer();
    }
};