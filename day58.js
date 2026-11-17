window.ENG6_LESSONS = window.ENG6_LESSONS || {};

window.ENG6_LESSONS[58] = {
    unit: 6, // Thuộc Unit 6: Our Tet Holiday
    title: "Day 58: Review and Consolidation",
    description: "Ôn tập toàn diện từ vựng, ngữ pháp should/shouldn't, some/any và kỹ năng của Unit 6",
    ipa: "/rɪˈvjuː ænd kənˌsɑːlɪˈdeɪʃn/",
    
    // Cấu hình lộ trình 7 màn hoạt động chuẩn cho Day 58
    activities: [
        'grammar-intro-day58',         // Màn 1: Tổng kết từ vựng & điểm ngữ pháp trọng tâm Unit 6
        'multiple-choice',              // Màn 2: Trắc nghiệm tổng hợp kiến thức Unit 6
        'matching-meaning',             // Màn 3: Nối tổng hợp câu & Nghĩa Tiếng Việt
        'listening',                    // Màn 4: Nghe ôn tập & chọn đáp án đúng
        'matching-ipa',                 // Màn 5: Nối câu & Phiên âm IPA chuẩn
        'sentence-builder-review',      // Màn 6: Ghép câu ôn tập toàn diện Unit 6
        'spelling'                      // Màn 7: Thử thách kiểm tra chính tả từ vựng cuối Unit 6
    ],

    vocab: [
        { 
            id: 'd58_v1', 
            en: 'We should decorate our houses with peach flowers', 
            ipa: '/wiː ʃʊd ˈdekəreɪt aʊər ˈhaʊzɪz wɪð piːtʃ ˈflaʊərz/', 
            vi: 'Chúng ta nên trang hoàng nhà cửa bằng hoa đào', 
            wrongSpells: ['We should decorates our houses', 'We shouldn\'t decorate houses', 'We should decorating houses'] 
        },
        { 
            id: 'd58_v2', 
            en: 'Children should not eat lots of sweets at Tet', 
            ipa: '/ˈtʃɪldrən ʃʊd nɑːt iːt lɑːts ʌv swiːts æt tet/', 
            vi: 'Trẻ em không nên ăn nhiều đồ ngọt vào dịp Tết', 
            wrongSpells: ['Children should eat lots of sweets', 'Children shouldn\'t eats sweets', 'Children shouldn\'t eating sweets'] 
        },
        { 
            id: 'd58_v3', 
            en: 'My mother bought some fruits for Tet', 
            ipa: '/maɪ ˈmʌðər bɔːt sʌm fruːts fɔːr tet/', 
            vi: 'Mẹ tôi đã mua một ít trái cây cho dịp Tết', 
            wrongSpells: ['My mother bought any fruits', 'My mother buy some fruits', 'My mother bought some fruit'] 
        },
        { 
            id: 'd58_v4', 
            en: 'There is not any ice cream in the fridge', 
            ipa: '/ðer ɪz nɑːt ˈeni aɪs kriːm ɪn ðə frɪdʒ/', 
            vi: 'Không có chút kem nào trong tủ lạnh cả', 
            wrongSpells: ['There is not some ice cream', 'There are not any ice cream', 'There is no any ice cream'] 
        },
        { 
            id: 'd58_v5', 
            en: 'Wishing you joy and laughter in the New Year', 
            ipa: '/ˈwɪʃɪŋ juː dʒɔɪ ænd ˈlæftər ɪn ðə nuː jɪər/', 
            vi: 'Chúc bạn niềm vui và tiếng cười trong năm mới', 
            wrongSpells: ['Wishing you joys and laughter', 'Wish you joy and laughter', 'Wishing you joy and laugh'] 
        }
    ]
};

window.ENG6_GAME_MODULES = window.ENG6_GAME_MODULES || {};

// MÀN 1: Tổng kết từ vựng & điểm ngữ pháp trọng tâm Unit 6 (Day 58)
window.ENG6_GAME_MODULES['grammar-intro-day58'] = {
    title: 'Màn 1: Tổng Kết - Ôn Tập Toàn Diện Unit 6 (Our Tet Holiday)',
    render(ctx) {
        ctx.container.innerHTML = `
            <div class="space-y-4">
                <div class="text-center">
                    <span class="px-3 py-1 bg-amber-100 text-amber-800 font-bold text-xs rounded-full">Unit 6: Review & Consolidation</span>
                    <h3 class="text-2xl font-black text-slate-800 mt-2">Ôn Tập Toàn Diện Unit 6</h3>
                    <p class="text-slate-600 text-sm mt-1">Củng cố vững chắc từ vựng Tết, ngữ pháp should/shouldn't, some/any trước khi bước sang bài kiểm tra lớn!</p>
                </div>

                <div class="bg-amber-50 border-2 border-amber-200 p-4 rounded-2xl space-y-3 text-slate-700 text-sm">
                    <div class="flex items-start space-x-3">
                        <div class="w-8 h-8 rounded-full bg-amber-600 text-white font-bold flex items-center justify-center flex-shrink-0">1</div>
                        <div>
                            <strong class="text-amber-900 block font-bold">Từ vựng & Lời chúc Tết:</strong>
                            - peach flower, lucky money, banh chung, family gathering, fireworks.<br>
                            - <span class="text-slate-900 font-semibold">Wishing you joy and laughter from January to December!</span>
                        </div>
                    </div>
                    <div class="flex items-start space-x-3">
                        <div class="w-8 h-8 rounded-full bg-amber-600 text-white font-bold flex items-center justify-center flex-shrink-0">2</div>
                        <div>
                            <strong class="text-amber-900 block font-bold">Ngữ pháp trọng tâm:</strong>
                            - **Should / Shouldn't:** Đưa ra lời khuyên (Children should behave well. Children shouldn't eat lots of sweets.).<br>
                            - **Some / Any:** Chỉ số lượng (I bought some fruits. There is not any ice cream.).
                        </div>
                    </div>
                </div>

                <div class="text-center pt-2">
                    <button onclick="playBtnSound(); completeLevel()" class="px-8 py-3.5 bg-gradient-to-r from-amber-600 to-orange-600 text-white font-extrabold rounded-2xl shadow-lg hover:opacity-95 transition-all text-base">
                        Sẵn sàng thử thách ôn tập, bắt đầu ngay! <i class="fa-solid fa-arrow-right ml-2"></i>
                    </button>
                </div>
            </div>
        `;
    }
};

// MÀN 6: Sắp xếp câu ôn tập toàn diện Unit 6 (Sentence Builder)
window.ENG6_GAME_MODULES['sentence-builder-review'] = {
    title: 'Màn 6: Ghép Câu Ôn Tập Toàn Diện Unit 6',
    render(ctx) {
        window.day58BuildIndex = window.day58BuildIndex || 0;
        const sentences = [
            { words: ['We', 'should', 'decorate', 'our', 'houses', 'with', 'peach', 'flowers'], full: 'We should decorate our houses with peach flowers' },
            { words: ['Children', 'should', 'not', 'eat', 'lots', 'of', 'sweets', 'at', 'Tet'], full: 'Children should not eat lots of sweets at Tet' },
            { words: ['My', 'mother', 'bought', 'some', 'fruits', 'for', 'Tet'], full: 'My mother bought some fruits for Tet' },
            { words: ['There', 'is', 'not', 'any', 'ice', 'cream', 'in', 'the', 'fridge'], full: 'There is not any ice cream in the fridge' },
            { words: ['Wishing', 'you', 'joy', 'and', 'laughter', 'in', 'the', 'New', 'Year'], full: 'Wishing you joy and laughter in the New Year' }
        ];

        if (window.day58BuildIndex >= sentences.length) {
            window.day58BuildIndex = 0;
            completeLevel();
            return;
        }

        const currS = sentences[window.day58BuildIndex];
        
        // Khởi tạo mảng xáo trộn ngẫu nhiên cho từng câu hỏi
        if (!window.day58ShuffledWords || window.day58CurrentQuestionIndex !== window.day58BuildIndex) {
            window.day58CurrentQuestionIndex = window.day58BuildIndex;
            let pool = [...currS.words];
            for (let i = pool.length - 1; i > 0; i--) {
                const j = Math.floor(Math.random() * (i + 1));
                [pool[i], pool[j]] = [pool[j], pool[i]];
            }
            window.day58ShuffledWords = pool;
            window.day58SelectedWords = [];
        }

        window.day58SelectedWords = window.day58SelectedWords || [];

        // Lọc các từ chưa được chọn từ kho từ đã xáo trộn
        let availablePool = [...window.day58ShuffledWords];
        window.day58SelectedWords.forEach(sel => {
            const idx = availablePool.indexOf(sel);
            if (idx > -1) availablePool.splice(idx, 1);
        });

        let selectedHTML = window.day58SelectedWords.map((w, i) => {
            const safeWord = w.replace(/'/g, "\\'");
            return `<button onclick="removeDay58Word(${i})" class="px-3 py-2 bg-amber-600 text-white font-bold rounded-xl text-sm shadow">${w}</button>`;
        }).join('');

        let poolHTML = availablePool.map((w) => {
            const safeWord = w.replace(/'/g, "\\'");
            return `<button onclick="addDay58Word('${safeWord}')" class="px-4 py-2.5 bg-slate-100 hover:bg-slate-200 text-slate-800 font-bold rounded-xl text-sm border-2 border-slate-300">${w}</button>`;
        }).join('');

        const safeFullText = currS.full.replace(/'/g, "\\'");

        ctx.container.innerHTML = `
            <div>
                <div class="bg-amber-50 border border-amber-200 p-2.5 rounded-xl text-center mb-3">
                    <span class="text-xs font-bold text-amber-800">💡 Ghép các từ xáo trộn bên dưới thành câu ôn tập hoàn chỉnh</span>
                </div>
                <div class="flex justify-between items-center mb-2">
                    <span class="text-xs font-bold text-slate-500">Câu ${window.day58BuildIndex + 1} / ${sentences.length}</span>
                </div>

                <div class="min-h-[60px] p-3 border-2 border-dashed border-amber-300 bg-white rounded-2xl flex flex-wrap gap-2 items-center mb-4">
                    ${selectedHTML || '<span class="text-xs text-slate-400 font-medium">Bấm các từ xáo trộn bên dưới để ghép câu...</span>'}
                </div>

                <div class="flex flex-wrap gap-2 justify-center mb-6">${poolHTML}</div>

                <div class="text-center space-x-2">
                    <button onclick="checkDay58BuildSentence('${safeFullText}')" class="px-6 py-3 bg-amber-600 text-white font-extrabold rounded-xl shadow">Kiểm tra</button>
                    <button onclick="resetDay58BuildSentence()" class="px-4 py-3 bg-slate-200 text-slate-700 font-bold rounded-xl">Làm lại</button>
                </div>
            </div>
        `;
    }
};

window.addDay58Word = function(word) {
    playBtnSound();
    window.day58SelectedWords = window.day58SelectedWords || [];
    window.day58SelectedWords.push(word);
    loadLevel(currentLevel);
};

window.removeDay58Word = function(index) {
    playBtnSound();
    window.day58SelectedWords.splice(index, 1);
    loadLevel(currentLevel);
};

window.resetDay58BuildSentence = function() {
    playBtnSound();
    window.day58SelectedWords = [];
    loadLevel(currentLevel);
};

window.checkDay58BuildSentence = function(target) {
    playBtnSound();
    const result = (window.day58SelectedWords || []).join(' ');
    if (result === target) {
        playSound('correct');
        window.day58SelectedWords = [];
        window.day58ShuffledWords = null;
        window.day58BuildIndex++;
        setTimeout(() => { loadLevel(currentLevel); }, 600);
    } else {
        handleWrongAnswer();
    }
};