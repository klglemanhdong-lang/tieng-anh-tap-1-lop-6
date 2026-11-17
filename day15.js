window.ENG6_LESSONS = window.ENG6_LESSONS || {};

window.ENG6_LESSONS[15] = {
    unit: 2, // Thuộc Unit 2: My House
    title: "Day 15: Describing with There is / There are",
    description: "Cấu trúc mô tả đồ vật/phòng (There is a/an ..., There are ...)",
    ipa: "/ðeər ɪz / ðeər ɑːr/",
    
    // Cấu hình lộ trình 7 màn hoạt động cho Day 15
    activities: [
        'grammar-intro-thereis-are',       // Màn 1: Lý thuyết giải thích There is / There are
        'multiple-choice',                 // Màn 2: Trắc nghiệm mặt chữ / cấu trúc
        'matching-meaning',                // Màn 3: Nối câu mô tả & Nghĩa Tiếng Việt
        'listening',                       // Màn 4: Nghe âm thanh & chọn đáp án đúng
        'matching-ipa',                    // Màn 5: Nối câu & Phiên âm IPA chuẩn
        'sentence-builder-thereis-are',    // Màn 6: Sắp xếp cấu trúc câu There is / There are
        'spelling'                         // Màn 7: Kiểm tra chính tả từ vựng/câu
    ],

    vocab: [
        { 
            id: 'd15_ex1', 
            en: "There is a big tiger on the wall", 
            ipa: '/ðeərz ə bɪɡ ˈtaɪɡər ɒn ðə wɔːl/', 
            vi: 'Có một con hổ lớn ở trên tường', 
            wrongSpells: ["Theres a big tiger on the wall", "There is a big tiger on wall"] 
        },
        { 
            id: 'd15_ex2', 
            en: "There are ten rooms in the house", 
            ipa: '/ðeər ɑːr ten ruːmz ɪn ðə haʊs/', 
            vi: 'Có mười phòng trong ngôi nhà', 
            wrongSpells: ["There is ten rooms in the house", "There are ten room in the house"] 
        },
        { 
            id: 'd15_ex3', 
            en: "There is a bed in the bedroom", 
            ipa: '/ðeərz ə bed ɪn ðə ˈbedruːm/', 
            vi: 'Có một cái giường trong phòng ngủ', 
            wrongSpells: ["There is a bed in bedroom", "Theres a bed in bedroom"] 
        },
        { 
            id: 'd15_ex4', 
            en: "There are two lamps on the desk", 
            ipa: '/ðeər ɑːr tuː læmps ɒn ðə desk/', 
            vi: 'Có hai chiếc đèn trên bàn học', 
            wrongSpells: ["There is two lamps on the desk", "There are two lamp on the desk"] 
        },
        { 
            id: 'd15_ex5', 
            en: "There is a fridge in the kitchen", 
            ipa: '/ðeərz ə frɪdʒ ɪn ðə ˈkɪtʃɪn/', 
            vi: 'Có một chiếc tủ lạnh trong phòng bếp', 
            wrongSpells: ["There is a fridge in kitchen", "Theres a fridge in the kithen"] 
        }
    ]
};

window.ENG6_GAME_MODULES = window.ENG6_GAME_MODULES || {};

// MÀN 1: Lý thuyết giải thích cấu trúc There is / There are
window.ENG6_GAME_MODULES['grammar-intro-thereis-are'] = {
    title: 'Màn 1: Lý Thuyết - Cấu Trúc There is / There are',
    render(ctx) {
        ctx.container.innerHTML = `
            <div class="space-y-4">
                <div class="text-center">
                    <span class="px-3 py-1 bg-emerald-100 text-emerald-800 font-bold text-xs rounded-full">Ngữ Pháp Trọng Tâm Unit 2</span>
                    <h3 class="text-2xl font-black text-slate-800 mt-2">Mô Tả Đồ Vật & Phòng (Describing)</h3>
                    <p class="text-slate-600 text-sm mt-1">Học cách nói "có cái gì đó" ở đâu trong ngôi nhà của bạn!</p>
                </div>

                <div class="bg-emerald-50 border-2 border-emerald-200 p-4 rounded-2xl space-y-3 text-slate-700 text-sm">
                    <div class="flex items-start space-x-3">
                        <div class="w-8 h-8 rounded-full bg-emerald-600 text-white font-bold flex items-center justify-center flex-shrink-0">1</div>
                        <div>
                            <strong class="text-emerald-900 block font-bold">THERE IS (Dùng cho danh từ số ít / không đếm được)</strong>
                            - Viết tắt: <span class="font-mono font-bold text-rose-600">There is</span><br>
                            - Công thức: <span class="font-mono text-xs bg-white px-2 py-1 rounded border border-emerald-200 inline-block mt-1">There is + a/an + Danh từ số ít</span><br>
                            - <span class="text-xs text-emerald-800 font-medium">👉 Ví dụ: There is a big tiger on the wall. (Có một con hổ lớn trên tường.)</span>
                        </div>
                    </div>
                    <div class="flex items-start space-x-3">
                        <div class="w-8 h-8 rounded-full bg-emerald-600 text-white font-bold flex items-center justify-center flex-shrink-0">2</div>
                        <div>
                            <strong class="text-emerald-900 block font-bold">THERE ARE (Dùng cho danh từ số nhiều - từ 2 đối tượng trở lên)</strong>
                            - Công thức: <span class="font-mono text-xs bg-white px-2 py-1 rounded border border-emerald-200 inline-block mt-1">There are + Số lượng / Danh từ số nhiều</span><br>
                            - <span class="text-xs text-emerald-800 font-medium">👉 Ví dụ: There are ten rooms in the house. (Có mười phòng trong nhà.)</span>
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

// MÀN 6: Sắp xếp cấu trúc câu chứa There is / There are
window.ENG6_GAME_MODULES['sentence-builder-thereis-are'] = {
    title: 'Màn 6: Ghép Câu Chứa There is / There are',
    render(ctx) {
        window.day15BuildIndex = window.day15BuildIndex || 0;
        const sentences = [
            { words: ['There', 'is', 'a', 'big', 'tiger', 'on', 'the', 'wall'], full: "There is a big tiger on the wall" },
            { words: ['There', 'are', 'ten', 'rooms', 'in', 'the', 'house'], full: 'There are ten rooms in the house' },
            { words: ['There', 'is', 'a', 'bed', 'in', 'the', 'bedroom'], full: 'There is a bed in the bedroom' },
            { words: ['There', 'are', 'two', 'lamps', 'on', 'the', 'desk'], full: 'There are two lamps on the desk' },
            { words: ['There', 'is', 'a', 'fridge', 'in', 'the', 'kitchen'], full: 'There is a fridge in the kitchen' }
        ];

        if (window.day15BuildIndex >= sentences.length) {
            window.day15BuildIndex = 0;
            completeLevel();
            return;
        }

        const currS = sentences[window.day15BuildIndex];
        window.day15SelectedWords = window.day15SelectedWords || [];

        let shuffled = [...currS.words].sort(() => Math.random() - 0.5);

        let selectedHTML = window.day15SelectedWords.map((w, i) => `
            <button onclick="removeDay15Word(${i})" class="px-3 py-2 bg-emerald-600 text-white font-bold rounded-xl text-sm shadow">
                ${w}
            </button>
        `).join('');

        let poolHTML = shuffled.map((w) => `
            <button onclick="addDay15Word('${w}')" class="px-4 py-2.5 bg-slate-100 hover:bg-slate-200 text-slate-800 font-bold rounded-xl text-sm border-2 border-slate-300">
                ${w}
            </button>
        `).join('');

        ctx.container.innerHTML = `
            <div>
                <div class="bg-emerald-50 border border-emerald-200 p-2.5 rounded-xl text-center mb-3">
                    <span class="text-xs font-bold text-emerald-800">💡 Cấu trúc: There is (số ít) / There are (số nhiều) + [Vật] + [Nơi chốn]</span>
                </div>
                <div class="flex justify-between items-center mb-2">
                    <span class="text-xs font-bold text-slate-500">Câu ${window.day15BuildIndex + 1} / ${sentences.length}</span>
                </div>

                <div class="min-h-[60px] p-3 border-2 border-dashed border-emerald-300 bg-white rounded-2xl flex flex-wrap gap-2 items-center mb-4">
                    ${selectedHTML || '<span class="text-xs text-slate-400 font-medium">Bấm các từ bên dưới để ghép câu...</span>'}
                </div>

                <div class="flex flex-wrap gap-2 justify-center mb-6">${poolHTML}</div>

                <div class="text-center space-x-2">
                    <button onclick="checkDay15BuildSentence('${currS.full}')" class="px-6 py-3 bg-emerald-600 text-white font-extrabold rounded-xl shadow">Kiểm tra</button>
                    <button onclick="resetDay15BuildSentence()" class="px-4 py-3 bg-slate-200 text-slate-700 font-bold rounded-xl">Làm lại</button>
                </div>
            </div>
        `;
    }
};

window.addDay15Word = function(word) {
    playBtnSound();
    window.day15SelectedWords = window.day15SelectedWords || [];
    window.day15SelectedWords.push(word);
    loadLevel(currentLevel);
};

window.removeDay15Word = function(index) {
    playBtnSound();
    window.day15SelectedWords.splice(index, 1);
    loadLevel(currentLevel);
};

window.resetDay15BuildSentence = function() {
    playBtnSound();
    window.day15SelectedWords = [];
    loadLevel(currentLevel);
};

window.checkDay15BuildSentence = function(target) {
    playBtnSound();
    const result = (window.day15SelectedWords || []).join(' ');
    if (result === target) {
        playSound('correct');
        window.day15SelectedWords = [];
    window.day15BuildIndex++;
        setTimeout(() => { loadLevel(currentLevel); }, 600);
    } else {
        handleWrongAnswer();
    }
};