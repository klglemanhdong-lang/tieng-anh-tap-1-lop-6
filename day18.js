window.ENG6_LESSONS = window.ENG6_LESSONS || {};

window.ENG6_LESSONS[18] = {
    unit: 2,
    title: "Day 18: Asking Where Things & People Are",
    description: "Hỏi và đáp về nơi ở, vị trí đồ vật trong nhà (Where do you live?, Where is/are...?)",
    ipa: "/ˈɑːskɪŋ weər θɪŋz ænd ˈpiːpl ɑːr/",
    
    activities: [
        'grammar-intro-day18',
        'multiple-choice',
        'matching-meaning',
        'listening',
        'sentence-builder-day18',
        'speaking',
        'spelling'
    ],

    vocab: [
        { id: 'd18_q1', en: "Where do you live?", ipa: '/weər duː juː lɪv/', vi: 'Bạn sống ở đâu?', wrongSpells: ["Where do you lives", "Where does you live"] },
        { id: 'd18_a1', en: "I live in a town house", ipa: '/aɪ lɪv ɪn ə ˈtaʊn haʊs/', vi: 'Tôi sống trong một ngôi nhà phố', wrongSpells: ["I live in town house", "I lives in a town house"] },
        { id: 'd18_q2', en: "Where is the cat?", ipa: '/weər ɪz ðə kæt/', vi: 'Con mèo đang ở đâu?', wrongSpells: ["Where are the cat", "Where is cat"] },
        { id: 'd18_a2', en: "It is under the table", ipa: '/ɪt ɪz ˈʌndər ðə ˈteɪbl/', vi: 'Nó ở dưới cái bàn', wrongSpells: ["It is under table", "It is in under the table"] },
        { id: 'd18_q3', en: "Where are the books?", ipa: '/weər ɑːr ðə bʊks/', vi: 'Những quyển sách đang ở đâu?', wrongSpells: ["Where is the books", "Where are books"] },
        { id: 'd18_a3', en: "They are on the shelf", ipa: '/ðeɪ ɑːr ɒn ðə ʃelf/', vi: 'Chúng ở trên kệ sách', wrongSpells: ["They is on the shelf", "They are in the shelf"] }
    ]
};

window.ENG6_GAME_MODULES = window.ENG6_GAME_MODULES || {};

window.ENG6_GAME_MODULES['grammar-intro-day18'] = {
    title: 'Màn 1: Lý Thuyết - Hỏi Đáp Vị Trí & Nơi Ở',
    render(ctx) {
        ctx.container.innerHTML = `
            <div class="space-y-4">
                <div class="text-center">
                    <span class="px-3 py-1 bg-emerald-100 text-emerald-800 font-bold text-xs rounded-full">Unit 2: Giao Tiếp Cốt Lõi</span>
                    <h3 class="text-2xl font-black text-slate-800 mt-2">Hỏi & Trả Lời Về Vị Trí</h3>
                    <p class="text-slate-600 text-sm mt-1">Luyện tập mẫu câu hỏi đáp phổ biến nhất trong các đề thi và giao tiếp!</p>
                </div>

                <div class="bg-emerald-50 border-2 border-emerald-200 p-4 rounded-2xl space-y-3 text-slate-700 text-sm">
                    <div class="flex items-start space-x-3">
                        <div class="w-8 h-8 rounded-full bg-emerald-600 text-white font-bold flex items-center justify-center flex-shrink-0">1</div>
                        <div>
                            <strong class="text-emerald-900 block font-bold">Hỏi nơi ở:</strong>
                            - Hỏi: <span class="font-bold text-emerald-800">Where do you live?</span> (Bạn sống ở đâu?)<br>
                            - Đáp: <span class="font-bold text-emerald-800">I live in a town house / flat / country house.</span>
                        </div>
                    </div>
                    <div class="flex items-start space-x-3">
                        <div class="w-8 h-8 rounded-full bg-emerald-600 text-white font-bold flex items-center justify-center flex-shrink-0">2</div>
                        <div>
                            <strong class="text-emerald-900 block font-bold">Hỏi vị trí đồ vật / con vật:</strong>
                            - Đồ vật số ít: <span class="font-bold text-emerald-800">Where is + the [vật số ít]?</span> $\rightarrow$ <span class="font-bold text-emerald-800">It's + [giới từ] + the [vật khác].</span><br>
                            - Đồ vật số nhiều: <span class="font-bold text-emerald-800">Where are + the [vật số nhiều]?</span> $\rightarrow$ <span class="font-bold text-emerald-800">They're + [giới từ] + the [vật khác].</span>
                        </div>
                    </div>
                </div>

                <div class="text-center pt-2">
                    <button onclick="playBtnSound(); completeLevel()" class="px-8 py-3.5 bg-gradient-to-r from-emerald-600 to-teal-600 text-white font-extrabold rounded-2xl shadow-lg hover:opacity-95 transition-all text-base">
                        Đã hiểu, ôn tập ngay! <i class="fa-solid fa-arrow-right ml-2"></i>
                    </button>
                </div>
            </div>
        `;
    }
};

window.ENG6_GAME_MODULES['sentence-builder-day18'] = {
    title: 'Màn 5: Ghép Câu Hỏi Đáp Vị Trí',
    render(ctx) {
        window.day18BuildIndex = window.day18BuildIndex || 0;
        const sentences = [
            { words: ['Where', 'do', 'you', 'live'], full: 'Where do you live' },
            { words: ['I', 'live', 'in', 'a', 'town', 'house'], full: 'I live in a town house' },
            { words: ['Where', 'is', 'the', 'cat'], full: 'Where is the cat' },
            { words: ['It', 'is', 'under', 'the', 'table'], full: 'It is under the table' },
            { words: ['Where', 'are', 'the', 'books'], full: 'Where are the books' },
            { words: ['They', 'are', 'on', 'the', 'shelf'], full: 'They are on the shelf' }
        ];

        if (window.day18BuildIndex >= sentences.length) {
            window.day18BuildIndex = 0;
            completeLevel();
            return;
        }

        const currS = sentences[window.day18BuildIndex];
        window.day18SelectedWords = window.day18SelectedWords || [];

        let shuffled = [...currS.words].sort(() => Math.random() - 0.5);

        let selectedHTML = window.day18SelectedWords.map((w, i) => `
            <button onclick="removeDay18Word(${i})" class="px-3 py-2 bg-emerald-600 text-white font-bold rounded-xl text-sm shadow">
                ${w}
            </button>
        `).join('');

        let poolHTML = shuffled.map((w) => `
            <button onclick="addDay18Word('${w}')" class="px-4 py-2.5 bg-slate-100 hover:bg-slate-200 text-slate-800 font-bold rounded-xl text-sm border-2 border-slate-300">
                ${w}
            </button>
        `).join('');

        ctx.container.innerHTML = `
            <div>
                <div class="bg-emerald-50 border border-emerald-200 p-2.5 rounded-xl text-center mb-3">
                    <span class="text-xs font-bold text-emerald-800">💡 Ghép chính xác thứ tự các từ trong câu hỏi/câu trả lời</span>
                </div>
                <div class="flex justify-between items-center mb-2">
                    <span class="text-xs font-bold text-slate-500">Câu ${window.day18BuildIndex + 1} / ${sentences.length}</span>
                </div>

                <div class="min-h-[60px] p-3 border-2 border-dashed border-emerald-300 bg-white rounded-2xl flex flex-wrap gap-2 items-center mb-4">
                    ${selectedHTML || '<span class="text-xs text-slate-400 font-medium">Bấm các từ bên dưới để ghép câu...</span>'}
                </div>

                <div class="flex flex-wrap gap-2 justify-center mb-6">${poolHTML}</div>

                <div class="text-center space-x-2">
                    <button onclick="checkDay18BuildSentence('${currS.full}')" class="px-6 py-3 bg-emerald-600 text-white font-extrabold rounded-xl shadow">Kiểm tra</button>
                    <button onclick="resetDay18BuildSentence()" class="px-4 py-3 bg-slate-200 text-slate-700 font-bold rounded-xl">Làm lại</button>
                </div>
            </div>
        `;
    }
};

window.addDay18Word = function(word) {
    playBtnSound();
    window.day18SelectedWords = window.day18SelectedWords || [];
    window.day18SelectedWords.push(word);
    loadLevel(currentLevel);
};

window.removeDay18Word = function(index) {
    playBtnSound();
    window.day18SelectedWords.splice(index, 1);
    loadLevel(currentLevel);
};

window.resetDay18BuildSentence = function() {
    playBtnSound();
    window.day18SelectedWords = [];
    loadLevel(currentLevel);
};

window.checkDay18BuildSentence = function(target) {
    playBtnSound();
    const result = (window.day18SelectedWords || []).join(' ');
    if (result === target) {
        playSound('correct');
        window.day18SelectedWords = [];
        window.day18BuildIndex++;
        setTimeout(() => { loadLevel(currentLevel); }, 600);
    } else {
        handleWrongAnswer();
    }
};