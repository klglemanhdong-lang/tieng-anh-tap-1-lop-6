window.ENG6_LESSONS = window.ENG6_LESSONS || {};

window.ENG6_LESSONS[32] = {
    unit: 4, // Thuộc Unit 4: My Neighbourhood
    title: "Day 32: Comparative Adjectives (Short Adjectives)",
    description: "Cấu trúc so sánh hơn với tính từ ngắn (Short Adj + er + than)",
    ipa: "/kəmˈperətɪv ˈædʒɪktɪvz/",
    
    // Cấu hình lộ trình 7 màn hoạt động chuẩn cho Day 32
    activities: [
        'grammar-intro-day32',         // Màn 1: Lý thuyết so sánh hơn với tính từ ngắn
        'multiple-choice',              // Màn 2: Trắc nghiệm chia tính từ so sánh
        'matching-meaning',             // Màn 3: Nối câu & Nghĩa Tiếng Việt
        'listening',                    // Màn 4: Nghe âm thanh & chọn đáp án đúng
        'matching-ipa',                 // Màn 5: Nối câu & Phiên âm IPA chuẩn
        'sentence-builder-comp-short',  // Màn 6: Ghép câu so sánh ngắn (This street is noisier than that one)
        'spelling'                      // Màn 7: Kiểm tra chính tả dạng so sánh
    ],

    vocab: [
        { 
            id: 'd32_ex1', 
            en: 'This building is taller than that building', 
            ipa: '/ðɪs ˈbɪldɪŋ ɪz ˈtɔːlər ðæn ðæt ˈbɪldɪŋ/', 
            vi: 'Tòa nhà này cao hơn tòa nhà kia', 
            wrongSpells: ['This building is tall than that building', 'This building are taller than that building', 'This building is taller then that building'] 
        },
        { 
            id: 'd32_ex2', 
            en: 'This street is noisier than that one', 
            ipa: '/ðɪs striːt ɪz ˈnɔɪziər ðæn ðæt wʌn/', 
            vi: 'Con đường này ồn ào hơn con đường kia', 
            wrongSpells: ['This street is noisy than that one', 'This street is noisiest than that one', 'This street are noisier than that one'] 
        },
        { 
            id: 'd32_ex3', 
            en: 'My neighbourhood is quieter than your town', 
            ipa: '/maɪ ˈneɪbərhʊd ɪz ˈkwaɪətər ðæn jʊər taʊn/', 
            vi: 'Khu xóm của tôi yên tĩnh hơn thị trấn của bạn', 
            wrongSpells: ['My neighbourhood is quiet than your town', 'My neighbourhood is quieter then your town', 'My neighbourhood are quieter than your town'] 
        },
        { 
            id: 'd32_ex4', 
            en: 'The weather is hotter today', 
            ipa: '/ðe ˈweðər ɪz ˈhɑːtər təˈdeɪ/', 
            vi: 'Thời tiết hôm nay nóng hơn', 
            wrongSpells: ['The weather is hot today', 'The weather is hottest today', 'The weather are hotter today'] 
        },
        { 
            id: 'd32_ex5', 
            en: 'My house is bigger than yours', 
            ipa: '/maɪ haʊs ɪz ˈbɪɡər ðæn jʊərz/', 
            vi: 'Nhà của tôi to hơn nhà của bạn', 
            wrongSpells: ['My house is big than yours', 'My house is biggest than yours', 'My house are bigger than yours'] 
        }
    ]
};

window.ENG6_GAME_MODULES = window.ENG6_GAME_MODULES || {};

// MÀN 1: Lý thuyết so sánh hơn với tính từ ngắn (Day 32)
window.ENG6_GAME_MODULES['grammar-intro-day32'] = {
    title: 'Màn 1: Lý Thuyết - So Sánh Hơn (Tính Từ Ngắn)',
    render(ctx) {
        ctx.container.innerHTML = `
            <div class="space-y-4">
                <div class="text-center">
                    <span class="px-3 py-1 bg-emerald-100 text-emerald-800 font-bold text-xs rounded-full">Unit 4: Grammar</span>
                    <h3 class="text-2xl font-black text-slate-800 mt-2">So Sánh Hơn (Short Adjectives)</h3>
                    <p class="text-slate-600 text-sm mt-1">Dùng để so sánh giữa hai người, hai vật hoặc hai địa điểm với nhau!</p>
                </div>

                <div class="bg-emerald-50 border-2 border-emerald-200 p-4 rounded-2xl space-y-3 text-slate-700 text-sm">
                    <div class="flex items-start space-x-3">
                        <div class="w-8 h-8 rounded-full bg-emerald-600 text-white font-bold flex items-center justify-center flex-shrink-0">1</div>
                        <div>
                            <strong class="text-emerald-900 block font-bold">Công thức chung (Short Adjectives):</strong>
                            - Cấu trúc: <span class="font-mono bg-white px-2 py-0.5 rounded border border-emerald-200 font-bold">S1 + be + Adj-er + than + S2</span><br>
                            - <span class="text-xs text-emerald-900 font-semibold">👉 Ví dụ: This building is taller than that building. (Tòa nhà này cao hơn tòa nhà kia.)</span>
                        </div>
                    </div>
                    <div class="flex items-start space-x-3">
                        <div class="w-8 h-8 rounded-full bg-emerald-600 text-white font-bold flex items-center justify-center flex-shrink-0">2</div>
                        <div>
                            <strong class="text-emerald-900 block font-bold">Quy tắc biến đổi tính từ ngắn:</strong>
                            - Hầu hết tính từ ngắn: Thêm <span class="font-bold text-rose-600">-er</span> (tall $\rightarrow$ taller, quiet $\rightarrow$ quieter).<br>
                            - Tận cùng là 'e': Chỉ cần thêm <span class="font-bold text-rose-600">-r</span> (large $\rightarrow$ larger).<br>
                            - Tận cùng là (Phụ âm - Nguyên âm - Phụ âm): Gấp đôi phụ âm cuối rồi thêm <span class="font-bold text-rose-600">-er</span> (big $\rightarrow$ bigger, hot $\rightarrow$ hotter).<br>
                            - Tận cùng là 'y': Đổi 'y' thành <span class="font-bold text-rose-600">-ier</span> (noisy $\rightarrow$ noisier).
                        </div>
                    </div>
                </div>

                <div class="text-center pt-2">
                    <button onclick="playBtnSound(); completeLevel()" class="px-8 py-3.5 bg-gradient-to-r from-emerald-600 to-teal-600 text-white font-extrabold rounded-2xl shadow-lg hover:opacity-95 transition-all text-base">
                        Đã hiểu rõ cấu trúc, luyện tập ngay! <i class="fa-solid fa-arrow-right ml-2"></i>
                    </button>
                </div>
            </div>
        `;
    }
};

// MÀN 6: Sắp xếp câu so sánh ngắn (Sentence Builder)
window.ENG6_GAME_MODULES['sentence-builder-comp-short'] = {
    title: 'Màn 6: Ghép Câu So Sánh Hơn (Tính Từ Ngắn)',
    render(ctx) {
        window.day32BuildIndex = window.day32BuildIndex || 0;
        const sentences = [
            { words: ['This', 'street', 'is', 'noisier', 'than', 'that', 'one'], full: 'This street is noisier than that one' },
            { words: ['This', 'building', 'is', 'taller', 'than', 'that', 'building'], full: 'This building is taller than that building' },
            { words: ['My', 'neighbourhood', 'is', 'quieter', 'than', 'your', 'town'], full: 'My neighbourhood is quieter than your town' },
            { words: ['My', 'house', 'is', 'bigger', 'than', 'yours'], full: 'My house is bigger than yours' },
            { words: ['The', 'weather', 'is', 'hotter', 'today'], full: 'The weather is hotter today' }
        ];

        if (window.day32BuildIndex >= sentences.length) {
            window.day32BuildIndex = 0;
            completeLevel();
            return;
        }

        const currS = sentences[window.day32BuildIndex];
        
        // Khởi tạo mảng xáo trộn ngẫu nhiên cho từng câu hỏi
        if (!window.day32ShuffledWords || window.day32CurrentQuestionIndex !== window.day32BuildIndex) {
            window.day32CurrentQuestionIndex = window.day32BuildIndex;
            let pool = [...currS.words];
            for (let i = pool.length - 1; i > 0; i--) {
                const j = Math.floor(Math.random() * (i + 1));
                [pool[i], pool[j]] = [pool[j], pool[i]];
            }
            window.day32ShuffledWords = pool;
            window.day32SelectedWords = [];
        }

        window.day32SelectedWords = window.day32SelectedWords || [];

        // Lọc các từ chưa được chọn từ kho từ đã xáo trộn
        let availablePool = [...window.day32ShuffledWords];
        window.day32SelectedWords.forEach(sel => {
            const idx = availablePool.indexOf(sel);
            if (idx > -1) availablePool.splice(idx, 1);
        });

        let selectedHTML = window.day32SelectedWords.map((w, i) => {
            const safeWord = w.replace(/'/g, "\\'");
            return `<button onclick="removeDay32Word(${i})" class="px-3 py-2 bg-emerald-600 text-white font-bold rounded-xl text-sm shadow">${w}</button>`;
        }).join('');

        let poolHTML = availablePool.map((w) => {
            const safeWord = w.replace(/'/g, "\\'");
            return `<button onclick="addDay32Word('${safeWord}')" class="px-4 py-2.5 bg-slate-100 hover:bg-slate-200 text-slate-800 font-bold rounded-xl text-sm border-2 border-slate-300">${w}</button>`;
        }).join('');

        const safeFullText = currS.full.replace(/'/g, "\\'");

        ctx.container.innerHTML = `
            <div>
                <div class="bg-emerald-50 border border-emerald-200 p-2.5 rounded-xl text-center mb-3">
                    <span class="text-xs font-bold text-emerald-800">💡 Cấu trúc: S1 + be + Short Adj-er + than + S2</span>
                </div>
                <div class="flex justify-between items-center mb-2">
                    <span class="text-xs font-bold text-slate-500">Câu ${window.day32BuildIndex + 1} / ${sentences.length}</span>
                </div>

                <div class="min-h-[60px] p-3 border-2 border-dashed border-emerald-300 bg-white rounded-2xl flex flex-wrap gap-2 items-center mb-4">
                    ${selectedHTML || '<span class="text-xs text-slate-400 font-medium">Bấm các từ xáo trộn bên dưới để ghép câu...</span>'}
                </div>

                <div class="flex flex-wrap gap-2 justify-center mb-6">${poolHTML}</div>

                <div class="text-center space-x-2">
                    <button onclick="checkDay32BuildSentence('${safeFullText}')" class="px-6 py-3 bg-emerald-600 text-white font-extrabold rounded-xl shadow">Kiểm tra</button>
                    <button onclick="resetDay32BuildSentence()" class="px-4 py-3 bg-slate-200 text-slate-700 font-bold rounded-xl">Làm lại</button>
                </div>
            </div>
        `;
    }
};

window.addDay32Word = function(word) {
    playBtnSound();
    window.day32SelectedWords = window.day32SelectedWords || [];
    window.day32SelectedWords.push(word);
    loadLevel(currentLevel);
};

window.removeDay32Word = function(index) {
    playBtnSound();
    window.day32SelectedWords.splice(index, 1);
    loadLevel(currentLevel);
};

window.resetDay32BuildSentence = function() {
    playBtnSound();
    window.day32SelectedWords = [];
    loadLevel(currentLevel);
};

window.checkDay32BuildSentence = function(target) {
    playBtnSound();
    const result = (window.day32SelectedWords || []).join(' ');
    if (result === target) {
        playSound('correct');
        window.day32SelectedWords = [];
        window.day32ShuffledWords = null;
        window.day32BuildIndex++;
        setTimeout(() => { loadLevel(currentLevel); }, 600);
    } else {
        handleWrongAnswer();
    }
};