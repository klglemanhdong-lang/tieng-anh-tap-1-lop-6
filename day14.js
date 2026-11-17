window.ENG6_LESSONS = window.ENG6_LESSONS || {};

window.ENG6_LESSONS[14] = {
    unit: 2, // Thuộc Unit 2: My House
    title: "Day 14: Prepositions of Place",
    description: "Giới từ chỉ vị trí (in, on, next to, behind, in front of, under, between)",
    ipa: "/ˌprepəˈzɪʃnz əv pleɪs/",
    
    // Cấu hình lộ trình 7 màn hoạt động chuẩn cho Day 14
    activities: [
        'grammar-intro-prepositions',       // Màn 1: Lý thuyết giới thiệu các giới từ chỉ vị trí
        'multiple-choice',                  // Màn 2: Trắc nghiệm mặt chữ từ vựng/giới từ
        'matching-meaning',                 // Màn 3: Nối cụm giới từ & Nghĩa Tiếng Việt
        'listening',                        // Màn 4: Nghe âm thanh & chọn nghĩa đúng
        'matching-ipa',                     // Màn 5: Nối cụm từ & Phiên âm IPA
        'sentence-builder-prepositions',    // Màn 6: Sắp xếp cấu trúc câu chứa giới từ chỉ vị trí
        'spelling'                          // Màn 7: Kiểm tra chính tả từ vựng
    ],

    vocab: [
        { 
            id: 'd14_in', 
            en: 'in the living room', 
            ipa: '/ɪn ðə ˈlɪvɪŋ ruːm/', 
            vi: 'ở trong phòng khách', 
            wrongSpells: ['in livin room', 'in the livings room', 'inn the living room'] 
        },
        { 
            id: 'd14_on', 
            en: 'on the chair', 
            ipa: '/ɒn ðə tʃeər/', 
            vi: 'ở trên ghế', 
            wrongSpells: ['on the chare', 'onn the chair', 'on chair'] 
        },
        { 
            id: 'd14_nextto', 
            en: 'next to the window', 
            ipa: '/nekst tuː ðə ˈwɪndəʊ/', 
            vi: 'bên cạnh cửa sổ', 
            wrongSpells: ['next to windo', 'nex to the window', 'next two the window'] 
        },
        { 
            id: 'd14_behind', 
            en: 'behind the bed', 
            ipa: '/bɪˈhaɪnd ðə bed/', 
            vi: 'ở phía sau cái giường', 
            wrongSpells: ['behind bet', 'behynd the bed', 'behind the bet'] 
        },
        { 
            id: 'd14_infrontof', 
            en: 'in front of the computer', 
            ipa: '/ɪn frʌnt əv ðə kəmˈpjuːtər/', 
            vi: 'ở phía trước máy tính', 
            wrongSpells: ['in front the computer', 'in front of computer', 'inn front of the computer'] 
        },
        { 
            id: 'd14_under', 
            en: 'under the bed', 
            ipa: '/ˈʌndər ðə bed/', 
            vi: 'ở dưới cái giường', 
            wrongSpells: ['under bed', 'andar the bed', 'under the bet'] 
        },
        { 
            id: 'd14_between', 
            en: 'between the door and the window', 
            ipa: '/bɪˈtwiːn ðə dɔːr ənd ðə ˈwɪndəʊ/', 
            vi: 'ở giữa cửa ra vào và cửa sổ', 
            wrongSpells: ['betwen the door and window', 'between door and window', 'beetween the door and the window'] 
        }
    ]
};

window.ENG6_GAME_MODULES = window.ENG6_GAME_MODULES || {};

// MÀN 1: Lý thuyết giải thích các giới từ chỉ vị trí
window.ENG6_GAME_MODULES['grammar-intro-prepositions'] = {
    title: 'Màn 1: Lý Thuyết - Giới Từ Chỉ Vị Trí (Prepositions of Place)',
    render(ctx) {
        ctx.container.innerHTML = `
            <div class="space-y-4">
                <div class="text-center">
                    <span class="px-3 py-1 bg-cyan-100 text-cyan-800 font-bold text-xs rounded-full">Ngữ Pháp Trọng Tâm Unit 2</span>
                    <h3 class="text-2xl font-black text-slate-800 mt-2">Giới Từ Chỉ Vị Trí (Prepositions of Place)</h3>
                    <p class="text-slate-600 text-sm mt-1">Dùng để diễn tả vị trí chính xác của người hoặc đồ vật trong nhà!</p>
                </div>

                <div class="bg-cyan-50 border-2 border-cyan-200 p-4 rounded-2xl space-y-2.5 text-slate-700 text-xs md:text-sm">
                    <div class="grid grid-cols-1 md:grid-cols-2 gap-2">
                        <div class="p-2 bg-white rounded-xl border border-cyan-100">
                            <strong>in</strong> (ở trong): <span class="text-cyan-800">in the living room</span>
                        </div>
                        <div class="p-2 bg-white rounded-xl border border-cyan-100">
                            <strong>on</strong> (ở trên bề mặt): <span class="text-cyan-800">on the chair</span>
                        </div>
                        <div class="p-2 bg-white rounded-xl border border-cyan-100">
                            <strong>next to</strong> (bên cạnh): <span class="text-cyan-800">next to the window</span>
                        </div>
                        <div class="p-2 bg-white rounded-xl border border-cyan-100">
                            <strong>behind</strong> (phía sau): <span class="text-cyan-800">behind the bed</span>
                        </div>
                        <div class="p-2 bg-white rounded-xl border border-cyan-100">
                            <strong>in front of</strong> (phía trước): <span class="text-cyan-800">in front of the computer</span>
                        </div>
                        <div class="p-2 bg-white rounded-xl border border-cyan-100">
                            <strong>under</strong> (ở dưới): <span class="text-cyan-800">under the bed</span>
                        </div>
                    </div>
                    <div class="p-2 bg-white rounded-xl border border-cyan-100 text-center">
                        <strong>between ... and ...</strong> (ở giữa hai đối tượng): <span class="text-cyan-800">between the door and the window</span>
                    </div>
                </div>

                <div class="text-center pt-2">
                    <button onclick="playBtnSound(); completeLevel()" class="px-8 py-3.5 bg-gradient-to-r from-cyan-600 to-blue-600 text-white font-extrabold rounded-2xl shadow-lg hover:opacity-95 transition-all text-base">
                        Đã hiểu rõ, vào luyện tập ngay! <i class="fa-solid fa-arrow-right ml-2"></i>
                    </button>
                </div>
            </div>
        `;
    }
};

// MÀN 6: Sắp xếp cấu trúc câu chứa giới từ chỉ vị trí
window.ENG6_GAME_MODULES['sentence-builder-prepositions'] = {
    title: 'Màn 6: Ghép Câu Chứa Giới Từ Chỉ Vị Trí',
    render(ctx) {
        window.day14BuildIndex = window.day14BuildIndex || 0;
        const sentences = [
            { words: ['The', 'cat', 'is', 'in', 'the', 'living', 'room'], full: 'The cat is in the living room' },
            { words: ['The', 'book', 'is', 'on', 'the', 'chair'], full: 'The book is on the chair' },
            { words: ['The', 'desk', 'is', 'next', 'to', 'the', 'window'], full: 'The desk is next to the window' },
            { words: ['The', 'ball', 'is', 'under', 'the', 'bed'], full: 'The ball is under the bed' },
            { words: ['The', 'lamp', 'is', 'behind', 'the', 'bed'], full: 'The lamp is behind the bed' }
        ];

        if (window.day14BuildIndex >= sentences.length) {
            window.day14BuildIndex = 0;
            completeLevel();
            return;
        }

        const currS = sentences[window.day14BuildIndex];
        window.day14SelectedWords = window.day14SelectedWords || [];

        let shuffled = [...currS.words].sort(() => Math.random() - 0.5);

        let selectedHTML = window.day14SelectedWords.map((w, i) => `
            <button onclick="removeDay14Word(${i})" class="px-3 py-2 bg-cyan-600 text-white font-bold rounded-xl text-sm shadow">
                ${w}
            </button>
        `).join('');

        let poolHTML = shuffled.map((w) => `
            <button onclick="addDay14Word('${w}')" class="px-4 py-2.5 bg-slate-100 hover:bg-slate-200 text-slate-800 font-bold rounded-xl text-sm border-2 border-slate-300">
                ${w}
            </button>
        `).join('');

        ctx.container.innerHTML = `
            <div>
                <div class="bg-cyan-50 border border-cyan-200 p-2.5 rounded-xl text-center mb-3">
                    <span class="text-xs font-bold text-cyan-800">💡 Cấu trúc: [Chủ thể] + is/are + [Giới từ vị trí] + [Vật/Nơi chốn]</span>
                </div>
                <div class="flex justify-between items-center mb-2">
                    <span class="text-xs font-bold text-slate-500">Câu ${window.day14BuildIndex + 1} / ${sentences.length}</span>
                </div>

                <div class="min-h-[60px] p-3 border-2 border-dashed border-cyan-300 bg-white rounded-2xl flex flex-wrap gap-2 items-center mb-4">
                    ${selectedHTML || '<span class="text-xs text-slate-400 font-medium">Bấm các từ bên dưới để ghép câu...</span>'}
                </div>

                <div class="flex flex-wrap gap-2 justify-center mb-6">${poolHTML}</div>

                <div class="text-center space-x-2">
                    <button onclick="checkDay14BuildSentence('${currS.full}')" class="px-6 py-3 bg-emerald-600 text-white font-extrabold rounded-xl shadow">Kiểm tra</button>
                    <button onclick="resetDay14BuildSentence()" class="px-4 py-3 bg-slate-200 text-slate-700 font-bold rounded-xl">Làm lại</button>
                </div>
            </div>
        `;
    }
};

window.addDay14Word = function(word) {
    playBtnSound();
    window.day14SelectedWords = window.day14SelectedWords || [];
    window.day14SelectedWords.push(word);
    loadLevel(currentLevel);
};

window.removeDay14Word = function(index) {
    playBtnSound();
    window.day14SelectedWords.splice(index, 1);
    loadLevel(currentLevel);
};

window.resetDay14BuildSentence = function() {
    playBtnSound();
    window.day14SelectedWords = [];
    loadLevel(currentLevel);
};

window.checkDay14BuildSentence = function(target) {
    playBtnSound();
    const result = (window.day14SelectedWords || []).join(' ');
    if (result === target) {
        playSound('correct');
        window.day14SelectedWords = [];
        window.day14BuildIndex++;
        setTimeout(() => { loadLevel(currentLevel); }, 600);
    } else {
        handleWrongAnswer();
    }
};