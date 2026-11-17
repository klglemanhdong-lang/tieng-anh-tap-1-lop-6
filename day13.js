window.ENG6_LESSONS = window.ENG6_LESSONS || {};

window.ENG6_LESSONS[13] = {
    unit: 2, // Thuộc Unit 2: My House
    title: "Day 13: Possessive Case ('s)",
    description: "Sở hữu cách (Possessive Case) - Diễn tả quyền sở hữu của người đối với vật/người",
    ipa: "/pəˈzesɪv keɪs/",
    
    // Cấu hình lộ trình 7 màn hoạt động cho Day 13 (GIỮ NGUYÊN KHUNG)
    activities: [
        'grammar-intro-possessive',       // Màn 1: Lý thuyết sở hữu cách ('s)
        'multiple-choice',                // Màn 2: Trắc nghiệm mặt chữ
        'matching-meaning',               // Màn 3: Nối từ & Nghĩa Tiếng Việt
        'listening',                      // Màn 4: Nghe âm thanh & chọn nghĩa
        'matching-ipa',                   // Màn 5: Nối từ & Phiên âm IPA
        'sentence-builder-possessive',    // Màn 6: Ghép câu (Đã giữ nguyên chạy tốt)
        'spelling'                        // Màn 7: Kiểm tra chính tả (Đã sửa triệt để 100%)
    ],

    // Bộ từ vựng đã loại bỏ hoàn toàn nguy cơ rách chuỗi HTML ở Màn 7
    vocab: [
        { 
            id: 'd13_elena', 
            en: 'Elena', 
            ipa: '/ɪˈleɪnə/', 
            vi: 'của Elena (Elena\'s)', 
            wrongSpells: ['Elina', 'Elenaa', 'Elenna'] 
        },
        { 
            id: 'd13_mum', 
            en: 'mum', 
            ipa: '/mʌm/', 
            vi: 'của mẹ (mum\'s)', 
            wrongSpells: ['mam', 'mumm', 'mume'] 
        },
        { 
            id: 'd13_nick', 
            en: 'Nick', 
            ipa: '/nɪk/', 
            vi: 'của Nick (Nick\'s)', 
            wrongSpells: ['Nik', 'Nickk', 'Nyc'] 
        },
        { 
            id: 'd13_friend', 
            en: 'friend', 
            ipa: '/frend/', 
            vi: 'của bạn (friend\'s)', 
            wrongSpells: ['frend', 'friendd', 'friand'] 
        },
        { 
            id: 'd13_brother', 
            en: 'brother', 
            ipa: '/ˈbrʌðər/', 
            vi: 'của anh/em trai (brother\'s)', 
            wrongSpells: ['broder', 'brotherr', 'brather'] 
        }
    ]
};

window.ENG6_GAME_MODULES = window.ENG6_GAME_MODULES || {};

// MÀN 1: Lý thuyết giải thích bản chất Sở hữu cách ('s)
window.ENG6_GAME_MODULES['grammar-intro-possessive'] = {
    title: 'Màn 1: Lý Thuyết - Sở Hữu Cách (\'s)',
    render(ctx) {
        ctx.container.innerHTML = `
            <div class="space-y-4">
                <div class="text-center">
                    <span class="px-3 py-1 bg-amber-100 text-amber-800 font-bold text-xs rounded-full">Ngữ Pháp Trọng Tâm Unit 2</span>
                    <h3 class="text-2xl font-black text-slate-800 mt-2">Sở Hữu Cách (Possessive Case)</h3>
                    <p class="text-slate-600 text-sm mt-1">Cách nói "của ai đó" cực kỳ chuẩn xác trong tiếng Anh!</p>
                </div>

                <div class="bg-amber-50 border-2 border-amber-200 p-4 rounded-2xl space-y-3 text-slate-700 text-sm">
                    <div class="flex items-start space-x-3">
                        <div class="w-8 h-8 rounded-full bg-amber-500 text-white font-bold flex items-center justify-center flex-shrink-0">1</div>
                        <div>
                            <strong class="text-amber-900 block font-bold">Bản chất & Công thức:</strong>
                            Dùng để chỉ quyền sở hữu của một người đối với vật hoặc người khác.<br>
                            <div class="mt-1.5 p-2 bg-white rounded-xl border border-amber-100 font-mono text-xs text-amber-900 font-bold">
                                Tên riêng / Danh từ số ít + <span class="text-rose-600 text-sm font-black">'s</span> + Vật sở hữu
                            </div>
                        </div>
                    </div>
                    <div class="flex items-start space-x-3">
                        <div class="w-8 h-8 rounded-full bg-amber-500 text-white font-bold flex items-center justify-center flex-shrink-0">2</div>
                        <div>
                            <strong class="text-amber-900 block font-bold">Ví dụ thực tế trong Unit 2:</strong>
                            - <span class="font-semibold text-slate-900">Elena's room</span> (Phòng của Elena)<br>
                            - <span class="font-semibold text-slate-900">My mum's book</span> (Sách của mẹ tôi)<br>
                            - <span class="font-semibold text-slate-900">Nick's house</span> (Nhà của Nick)
                        </div>
                    </div>
                </div>

                <div class="text-center pt-2">
                    <button onclick="playBtnSound(); completeLevel()" class="px-8 py-3.5 bg-gradient-to-r from-amber-500 to-orange-500 text-white font-extrabold rounded-2xl shadow-lg hover:opacity-95 transition-all text-base">
                        Đã hiểu quy tắc, vào luyện tập ngay! <i class="fa-solid fa-arrow-right ml-2"></i>
                    </button>
                </div>
            </div>
        `;
    }
};

// MÀN 6: Sắp xếp cấu trúc câu (GIỮ NGUYÊN HOÀN TOÀN KHUNG ĐÃ CHẠY TỐT CỦA BẠN)
window.ENG6_GAME_MODULES['sentence-builder-possessive'] = {
    title: 'Màn 6: Ghép Câu Chứa Sở Hữu Cách (\'s)',
    render(ctx) {
        window.day13BuildIndex = window.day13BuildIndex || 0;
        const sentences = [
            { words: ['This', 'is', "Elena's", 'room'], full: "This is Elena's room" },
            { words: ['That', 'is', "Nick's", 'house'], full: "That is Nick's house" },
            { words: ['This', 'is', 'my', "mum's", 'book'], full: "This is my mum's book" },
            { words: ['This', 'is', 'my', "friend's", 'desk'], full: "This is my friend's desk" },
            { words: ['That', 'is', 'his', "brother's", 'bike'], full: "That is his brother's bike" }
        ];

        if (window.day13BuildIndex >= sentences.length) {
            window.day13BuildIndex = 0;
            completeLevel();
            return;
        }

        const currS = sentences[window.day13BuildIndex];
        
        if (!window.day13ShuffledWords || window.day13CurrentQuestionIndex !== window.day13BuildIndex) {
            window.day13CurrentQuestionIndex = window.day13BuildIndex;
            let pool = [...currS.words];
            for (let i = pool.length - 1; i > 0; i--) {
                const j = Math.floor(Math.random() * (i + 1));
                [pool[i], pool[j]] = [pool[j], pool[i]];
            }
            window.day13ShuffledWords = pool;
            window.day13SelectedWords = [];
        }

        window.day13SelectedWords = window.day13SelectedWords || [];

        let availablePool = [...window.day13ShuffledWords];
        window.day13SelectedWords.forEach(sel => {
            const idx = availablePool.indexOf(sel);
            if (idx > -1) availablePool.splice(idx, 1);
        });

        let selectedHTML = window.day13SelectedWords.map((w, i) => {
            const safeWord = w.replace(/'/g, "\\'");
            return `<button onclick="removeDay13Word(${i})" class="px-3 py-2 bg-amber-600 text-white font-bold rounded-xl text-sm shadow">${w}</button>`;
        }).join('');

        let poolHTML = availablePool.map((w) => {
            const safeWord = w.replace(/'/g, "\\'");
            return `<button onclick="addDay13Word('${safeWord}')" class="px-4 py-2.5 bg-slate-100 hover:bg-slate-200 text-slate-800 font-bold rounded-xl text-sm border-2 border-slate-300">${w}</button>`;
        }).join('');

        const safeFullText = currS.full.replace(/'/g, "\\'");

        ctx.container.innerHTML = `
            <div>
                <div class="bg-amber-50 border border-amber-200 p-2.5 rounded-xl text-center mb-3">
                    <span class="text-xs font-bold text-amber-800">💡 Cấu trúc: This/That + is + [Chủ sở hữu]'s + [Vật sở hữu]</span>
                </div>
                <div class="flex justify-between items-center mb-2">
                    <span class="text-xs font-bold text-slate-500">Câu ${window.day13BuildIndex + 1} / ${sentences.length}</span>
                </div>

                <div class="min-h-[60px] p-3 border-2 border-dashed border-amber-300 bg-white rounded-2xl flex flex-wrap gap-2 items-center mb-4">
                    ${selectedHTML || '<span class="text-xs text-slate-400 font-medium">Bấm các từ xáo trộn bên dưới để ghép câu...</span>'}
                </div>

                <div class="flex flex-wrap gap-2 justify-center mb-6">${poolHTML}</div>

                <div class="text-center space-x-2">
                    <button onclick="checkDay13BuildSentence('${safeFullText}')" class="px-6 py-3 bg-emerald-600 text-white font-extrabold rounded-xl shadow">Kiểm tra</button>
                    <button onclick="resetDay13BuildSentence()" class="px-4 py-3 bg-slate-200 text-slate-700 font-bold rounded-xl">Làm lại</button>
                </div>
            </div>
        `;
    }
};

window.addDay13Word = function(word) {
    playBtnSound();
    window.day13SelectedWords = window.day13SelectedWords || [];
    window.day13SelectedWords.push(word);
    loadLevel(currentLevel);
};

window.removeDay13Word = function(index) {
    playBtnSound();
    window.day13SelectedWords.splice(index, 1);
    loadLevel(currentLevel);
};

window.resetDay13BuildSentence = function() {
    playBtnSound();
    window.day13SelectedWords = [];
    loadLevel(currentLevel);
};

window.checkDay13BuildSentence = function(target) {
    playBtnSound();
    const result = (window.day13SelectedWords || []).join(' ');
    if (result === target) {
        playSound('correct');
        window.day13SelectedWords = [];
        window.day13ShuffledWords = null;
        window.day13BuildIndex++;
        setTimeout(() => { loadLevel(currentLevel); }, 600);
    } else {
        handleWrongAnswer();
    }
};