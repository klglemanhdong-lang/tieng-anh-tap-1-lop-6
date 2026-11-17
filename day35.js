window.ENG6_LESSONS = window.ENG6_LESSONS || {};

window.ENG6_LESSONS[35] = {
    unit: 4, // Thuộc Unit 4: My Neighbourhood
    title: "Day 35: Listening - A Tour in Hoi An",
    description: "Nghe hướng dẫn tham quan các tuyến đường và địa điểm trên bản đồ (audio guide to Hoi An)",
    ipa: "/ˈlɪsnɪŋ ə tʊr ɪn hɔɪ ɑːn/",
    
    // Cấu hình lộ trình 7 màn hoạt động chuẩn cho Day 35
    activities: [
        'grammar-intro-day35',         // Màn 1: Giới thiệu bài nghe & Từ vựng định hướng
        'multiple-choice',              // Màn 2: Trắc nghiệm thông tin bài nghe
        'matching-meaning',             // Màn 3: Nối từ khóa & Nghĩa Tiếng Việt
        'listening',                    // Màn 4: Nghe đoạn băng & chọn đáp án đúng
        'matching-ipa',                 // Màn 5: Nối từ & Phiên âm IPA chuẩn
        'sentence-builder-listening',   // Màn 6: Ghép câu tóm tắt hướng dẫn tham quan
        'spelling'                      // Màn 7: Kiểm tra chính tả từ vựng bài nghe
    ],

    vocab: [
        { 
            id: 'd35_v1', 
            en: 'audio guide', 
            ipa: '/ˈɔːdioʊ ɡaɪd/', 
            vi: 'bản hướng dẫn âm thanh', 
            wrongSpells: ['audio gyde', 'audio guidee', 'audioguide'] 
        },
        { 
            id: 'd35_v2', 
            en: 'tour', 
            ipa: '/tʊr/', 
            vi: 'chuyến tham quan / du lịch', 
            wrongSpells: ['toor', 'tourr', 'tuur'] 
        },
        { 
            id: 'd35_v3', 
            en: 'street', 
            ipa: '/striːt/', 
            vi: 'đường phố', 
            wrongSpells: ['stret', 'strete', 'streett'] 
        },
        { 
            id: 'd35_v4', 
            en: 'workshop', 
            ipa: '/ˈwɜːrkʃɑːp/', 
            vi: 'xưởng thủ công / hội thảo', 
            wrongSpells: ['workshp', 'workshoop', 'work shop'] 
        },
        { 
            id: 'd35_v5', 
            en: 'presents', 
            ipa: '/ˈpreznts/', 
            vi: 'quà tặng', 
            wrongSpells: ['presentes', 'presants', 'presentss'] 
        }
    ]
};

window.ENG6_GAME_MODULES = window.ENG6_GAME_MODULES || {};

// MÀN 1: Giới thiệu bài nghe & Từ vựng định hướng (Day 35)
window.ENG6_GAME_MODULES['grammar-intro-day35'] = {
    title: 'Màn 1: Giới Thiệu Bài Nghe - Hướng Dẫn Tham Quan',
    render(ctx) {
        ctx.container.innerHTML = `
            <div class="space-y-4">
                <div class="text-center">
                    <span class="px-3 py-1 bg-emerald-100 text-emerald-800 font-bold text-xs rounded-full">Unit 4: Listening Skills</span>
                    <h3 class="text-2xl font-black text-slate-800 mt-2">Chuyến Tham Quan Phố Cổ Hội An</h3>
                    <p class="text-slate-600 text-sm mt-1">Luyện tập kỹ năng nghe hiểu các chỉ dẫn đường đi và trạm dừng chân!</p>
                </div>

                <div class="bg-emerald-50 border-2 border-emerald-200 p-4 rounded-2xl space-y-3 text-slate-700 text-sm">
                    <div class="flex items-start space-x-3">
                        <div class="w-8 h-8 rounded-full bg-emerald-600 text-white font-bold flex items-center justify-center flex-shrink-0">1</div>
                        <div>
                            <strong class="text-emerald-900 block font-bold">Nội dung hướng dẫn tham quan (Audio Guide):</strong>
                            - Điểm xuất phát: Tran Phu Street.<br>
                            - Hành trình: Đến Ong Pagoda, qua Museum of Sa Huynh Culture, và kết thúc tại Hoa Nhap Workshop để mua quà lưu niệm.
                        </div>
                    </div>
                    <div class="flex items-start space-x-3">
                        <div class="w-8 h-8 rounded-full bg-emerald-600 text-white font-bold flex items-center justify-center flex-shrink-0">2</div>
                        <div>
                            <strong class="text-emerald-900 block font-bold">Từ vựng định hướng cốt lõi:</strong>
                            - <span class="text-slate-900 font-semibold">audio guide</span> (/ˈɔːdioʊ ɡaɪd/): bản hướng dẫn âm thanh.<br>
                            - <span class="text-slate-900 font-semibold">workshop</span> (/ˈwɜːrkʃɑːp/): xưởng thủ công.<br>
                            - <span class="text-slate-900 font-semibold">presents</span> (/ˈpreznts/): quà tặng, quà lưu niệm.
                        </div>
                    </div>
                </div>

                <div class="text-center pt-2">
                    <button onclick="playBtnSound(); completeLevel()" class="px-8 py-3.5 bg-gradient-to-r from-emerald-600 to-teal-600 text-white font-extrabold rounded-2xl shadow-lg hover:opacity-95 transition-all text-base">
                        Đã hiểu nội dung, vào luyện tập ngay! <i class="fa-solid fa-arrow-right ml-2"></i>
                    </button>
                </div>
            </div>
        `;
    }
};

// MÀN 6: Sắp xếp câu tóm tắt hướng dẫn tham quan (Sentence Builder)
window.ENG6_GAME_MODULES['sentence-builder-listening'] = {
    title: 'Màn 6: Ghép Câu Tóm Tắt Hướng Dẫn Tham Quan',
    render(ctx) {
        window.day35BuildIndex = window.day35BuildIndex || 0;
        const sentences = [
            { words: ['We', 'are', 'in', 'Tran', 'Phu', 'Street'], full: 'We are in Tran Phu Street' },
            { words: ['First', 'go', 'to', 'Ong', 'Pagoda'], full: 'First go to Ong Pagoda' },
            { words: ['Next', 'go', 'to', 'the', 'museum'], full: 'Next go to the museum' },
            { words: ['Turn', 'left', 'and', 'then', 'turn', 'right'], full: 'Turn left and then turn right' },
            { words: ['Finally', 'go', 'to', 'Hoa', 'Nhap', 'Workshop'], full: 'Finally go to Hoa Nhap Workshop' }
        ];

        if (window.day35BuildIndex >= sentences.length) {
            window.day35BuildIndex = 0;
            completeLevel();
            return;
        }

        const currS = sentences[window.day35BuildIndex];
        
        // Khởi tạo mảng xáo trộn ngẫu nhiên cho từng câu hỏi
        if (!window.day35ShuffledWords || window.day35CurrentQuestionIndex !== window.day35BuildIndex) {
            window.day35CurrentQuestionIndex = window.day35BuildIndex;
            let pool = [...currS.words];
            for (let i = pool.length - 1; i > 0; i--) {
                const j = Math.floor(Math.random() * (i + 1));
                [pool[i], pool[j]] = [pool[j], pool[i]];
            }
            window.day35ShuffledWords = pool;
            window.day35SelectedWords = [];
        }

        window.day35SelectedWords = window.day35SelectedWords || [];

        // Lọc các từ chưa được chọn từ kho từ đã xáo trộn
        let availablePool = [...window.day35ShuffledWords];
        window.day35SelectedWords.forEach(sel => {
            const idx = availablePool.indexOf(sel);
            if (idx > -1) availablePool.splice(idx, 1);
        });

        let selectedHTML = window.day35SelectedWords.map((w, i) => {
            const safeWord = w.replace(/'/g, "\\'");
            return `<button onclick="removeDay35Word(${i})" class="px-3 py-2 bg-emerald-600 text-white font-bold rounded-xl text-sm shadow">${w}</button>`;
        }).join('');

        let poolHTML = availablePool.map((w) => {
            const safeWord = w.replace(/'/g, "\\'");
            return `<button onclick="addDay35Word('${safeWord}')" class="px-4 py-2.5 bg-slate-100 hover:bg-slate-200 text-slate-800 font-bold rounded-xl text-sm border-2 border-slate-300">${w}</button>`;
        }).join('');

        const safeFullText = currS.full.replace(/'/g, "\\'");

        ctx.container.innerHTML = `
            <div>
                <div class="bg-emerald-50 border border-emerald-200 p-2.5 rounded-xl text-center mb-3">
                    <span class="text-xs font-bold text-emerald-800">💡 Ghép các từ xáo trộn bên dưới thành câu chỉ dẫn tham quan</span>
                </div>
                <div class="flex justify-between items-center mb-2">
                    <span class="text-xs font-bold text-slate-500">Câu ${window.day35BuildIndex + 1} / ${sentences.length}</span>
                </div>

                <div class="min-h-[60px] p-3 border-2 border-dashed border-emerald-300 bg-white rounded-2xl flex flex-wrap gap-2 items-center mb-4">
                    ${selectedHTML || '<span class="text-xs text-slate-400 font-medium">Bấm các từ xáo trộn bên dưới để ghép câu...</span>'}
                </div>

                <div class="flex flex-wrap gap-2 justify-center mb-6">${poolHTML}</div>

                <div class="text-center space-x-2">
                    <button onclick="checkDay35BuildSentence('${safeFullText}')" class="px-6 py-3 bg-emerald-600 text-white font-extrabold rounded-xl shadow">Kiểm tra</button>
                    <button onclick="resetDay35BuildSentence()" class="px-4 py-3 bg-slate-200 text-slate-700 font-bold rounded-xl">Làm lại</button>
                </div>
            </div>
        `;
    }
};

window.addDay35Word = function(word) {
    playBtnSound();
    window.day35SelectedWords = window.day35SelectedWords || [];
    window.day35SelectedWords.push(word);
    loadLevel(currentLevel);
};

window.removeDay35Word = function(index) {
    playBtnSound();
    window.day35SelectedWords.splice(index, 1);
    loadLevel(currentLevel);
};

window.resetDay35BuildSentence = function() {
    playBtnSound();
    window.day35SelectedWords = [];
    loadLevel(currentLevel);
};

window.checkDay35BuildSentence = function(target) {
    playBtnSound();
    const result = (window.day35SelectedWords || []).join(' ');
    if (result === target) {
        playSound('correct');
        window.day35SelectedWords = [];
        window.day35ShuffledWords = null;
        window.day35BuildIndex++;
        setTimeout(() => { loadLevel(currentLevel); }, 600);
    } else {
        handleWrongAnswer();
    }
};