window.ENG6_LESSONS = window.ENG6_LESSONS || {};

window.ENG6_LESSONS[45] = {
    unit: 5, // Thuộc Unit 5: Natural Wonders of Viet Nam
    title: "Day 45: Listening - Phu Quoc Island",
    description: "Nghe đoạn hội thoại và bài nói về hòn đảo Phú Quốc (Phu Quoc is a very beautiful island)",
    ipa: "/ˈlɪsnɪŋ ə tʊr ɪn fuː kwɑːk ˈaɪlənd/",
    
    // Cấu hình lộ trình 7 màn hoạt động chuẩn cho Day 45
    activities: [
        'grammar-intro-day45',         // Màn 1: Giới thiệu bài nghe & Từ vựng đảo Phú Quốc
        'multiple-choice',              // Màn 2: Trắc nghiệm thông tin bài nghe (Đúng/Sai)
        'matching-meaning',             // Màn 3: Nối từ vựng & Nghĩa Tiếng Việt
        'listening',                    // Màn 4: Nghe đoạn băng & chọn đáp án đúng
        'matching-ipa',                 // Màn 5: Nối từ & Phiên âm IPA chuẩn
        'sentence-builder-phuquoc',     // Màn 6: Ghép câu tóm tắt về đảo Phú Quốc
        'spelling'                      // Màn 7: Kiểm tra chính tả từ vựng bài nghe
    ],

    vocab: [
        { 
            id: 'd45_island', 
            en: 'Phu Quoc Island', 
            ipa: '/fuː kwɑːk ˈaɪlənd/', 
            vi: 'Đảo Phú Quốc', 
            wrongSpells: ['Phu Quoc Isaland', 'Phu Quoc Islands', 'Phu Quc Island'] 
        },
        { 
            id: 'd45_forest', 
            en: 'green forests', 
            ipa: '/ɡriːn ˈfɔːrɪsts/', 
            vi: 'những khu rừng xanh', 
            wrongSpells: ['green forists', 'greEN forest', 'green forrests'] 
        },
        { 
            id: 'd45_fishing', 
            en: 'fishing village', 
            ipa: '/ˈfɪʃɪŋ ˈvɪlɪdʒ/', 
            vi: 'làng chài', 
            wrongSpells: ['fish village', 'fishing villadge', 'fishing villagee'] 
        },
        { 
            id: 'd45_watersports', 
            en: 'water sports', 
            ipa: '/ˈwɔːtər spɔːrts/', 
            vi: 'các môn thể thao dưới nước', 
            wrongSpells: ['watersport', 'water sportes', 'water-sports'] 
        },
        { 
            id: 'd45_markets', 
            en: 'markets', 
            ipa: '/ˈmɑːrkɪts/', 
            vi: 'các khu chợ', 
            wrongSpells: ['markits', 'marketes', 'marketts'] 
        }
    ]
};

window.ENG6_GAME_MODULES = window.ENG6_GAME_MODULES || {};

// MÀN 1: Giới thiệu bài nghe & Từ vựng đảo Phú Quốc (Day 45)
window.ENG6_GAME_MODULES['grammar-intro-day45'] = {
    title: 'Màn 1: Giới Thiệu Bài Nghe - Đảo Phú Quốc',
    render(ctx) {
        ctx.container.innerHTML = `
            <div class="space-y-4">
                <div class="text-center">
                    <span class="px-3 py-1 bg-teal-100 text-teal-800 font-bold text-xs rounded-full">Unit 5: Skills 2 (Listening)</span>
                    <h3 class="text-2xl font-black text-slate-800 mt-2">Hòn Đảo Xinh Đẹp Phú Quốc</h3>
                    <p class="text-slate-600 text-sm mt-1">Luyện tập kỹ năng nghe hiểu thông tin về danh thắng và các hoạt động tại Phú Quốc!</p>
                </div>

                <div class="bg-white border-2 border-teal-200 p-3.5 rounded-2xl space-y-2 text-xs md:text-sm shadow-sm">
                    <div class="font-bold text-teal-700 uppercase tracking-wide text-xs mb-1">🎧 Nội dung bài nghe (SGK trang 55)[cite: 13]:</div>
                    <p class="text-slate-700">"Phu Quoc is a very beautiful island in Viet Nam. Tourists can visit green forests, fishing villages, and national parks there. You can also play exciting water sports and buy interesting things at the markets."</p>
                </div>

                <div class="bg-teal-50 border-2 border-teal-200 p-4 rounded-2xl space-y-3 text-slate-700 text-sm">
                    <div class="flex items-start space-x-3">
                        <div class="w-8 h-8 rounded-full bg-teal-600 text-white font-bold flex items-center justify-center flex-shrink-0">1</div>
                        <div>
                            <strong class="text-teal-900 block font-bold">Đặc điểm tự nhiên:</strong>
                            - Phu Quoc is a very beautiful island with green forests and national parks[cite: 13].
                        </div>
                    </div>
                    <div class="flex items-start space-x-3">
                        <div class="w-8 h-8 rounded-full bg-teal-600 text-white font-bold flex items-center justify-center flex-shrink-0">2</div>
                        <div>
                            <strong class="text-teal-900 block font-bold">Hoạt động du lịch:</strong>
                            - Visit fishing villages, play water sports, and shop at the markets[cite: 13].
                        </div>
                    </div>
                </div>

                <div class="text-center pt-2">
                    <button onclick="playBtnSound(); completeLevel()" class="px-8 py-3.5 bg-gradient-to-r from-teal-600 to-cyan-600 text-white font-extrabold rounded-2xl shadow-lg hover:opacity-95 transition-all text-base">
                        Đã hiểu nội dung, vào luyện tập ngay! <i class="fa-solid fa-arrow-right ml-2"></i>
                    </button>
                </div>
            </div>
        `;
    }
};

// MÀN 6: Sắp xếp câu tóm tắt đảo Phú Quốc (Sentence Builder)
window.ENG6_GAME_MODULES['sentence-builder-phuquoc'] = {
    title: 'Màn 6: Ghép Câu Tóm Tắt Về Đảo Phú Quốc',
    render(ctx) {
        window.day45BuildIndex = window.day45BuildIndex || 0;
        const sentences = [
            { words: ['Phu', 'Quoc', 'is', 'a', 'very', 'beautiful', 'island'], full: 'Phu Quoc is a very beautiful island' },
            { words: ['Tourists', 'can', 'visit', 'green', 'forests'], full: 'Tourists can visit green forests' },
            { words: ['You', 'can', 'visit', 'fishing', 'villages'], full: 'You can visit fishing villages' },
            { words: ['Visitors', 'can', 'play', 'water', 'sports'], full: 'Visitors can play water sports' },
            { words: ['People', 'sell', 'interesting', 'things', 'at', 'the', 'markets'], full: 'People sell interesting things at the markets' }
        ];

        if (window.day45BuildIndex >= sentences.length) {
            window.day45BuildIndex = 0;
            completeLevel();
            return;
        }

        const currS = sentences[window.day45BuildIndex];
        
        // Khởi tạo mảng xáo trộn ngẫu nhiên cho từng câu hỏi
        if (!window.day45ShuffledWords || window.day45CurrentQuestionIndex !== window.day45BuildIndex) {
            window.day45CurrentQuestionIndex = window.day45BuildIndex;
            let pool = [...currS.words];
            for (let i = pool.length - 1; i > 0; i--) {
                const j = Math.floor(Math.random() * (i + 1));
                [pool[i], pool[j]] = [pool[j], pool[i]];
            }
            window.day45ShuffledWords = pool;
            window.day45SelectedWords = [];
        }

        window.day45SelectedWords = window.day45SelectedWords || [];

        // Lọc các từ chưa được chọn từ kho từ đã xáo trộn
        let availablePool = [...window.day45ShuffledWords];
        window.day45SelectedWords.forEach(sel => {
            const idx = availablePool.indexOf(sel);
            if (idx > -1) availablePool.splice(idx, 1);
        });

        let selectedHTML = window.day45SelectedWords.map((w, i) => {
            const safeWord = w.replace(/'/g, "\\'");
            return `<button onclick="removeDay45Word(${i})" class="px-3 py-2 bg-teal-600 text-white font-bold rounded-xl text-sm shadow">${w}</button>`;
        }).join('');

        let poolHTML = availablePool.map((w) => {
            const safeWord = w.replace(/'/g, "\\'");
            return `<button onclick="addDay45Word('${safeWord}')" class="px-4 py-2.5 bg-slate-100 hover:bg-slate-200 text-slate-800 font-bold rounded-xl text-sm border-2 border-slate-300">${w}</button>`;
        }).join('');

        const safeFullText = currS.full.replace(/'/g, "\\'");

        ctx.container.innerHTML = `
            <div>
                <div class="bg-teal-50 border border-teal-200 p-2.5 rounded-xl text-center mb-3">
                    <span class="text-xs font-bold text-teal-800">💡 Ghép các từ xáo trộn bên dưới thành câu hoàn chỉnh về đảo Phú Quốc</span>
                </div>
                <div class="flex justify-between items-center mb-2">
                    <span class="text-xs font-bold text-slate-500">Câu ${window.day45BuildIndex + 1} / ${sentences.length}</span>
                </div>

                <div class="min-h-[60px] p-3 border-2 border-dashed border-teal-300 bg-white rounded-2xl flex flex-wrap gap-2 items-center mb-4">
                    ${selectedHTML || '<span class="text-xs text-slate-400 font-medium">Bấm các từ xáo trộn bên dưới để ghép câu...</span>'}
                </div>

                <div class="flex flex-wrap gap-2 justify-center mb-6">${poolHTML}</div>

                <div class="text-center space-x-2">
                    <button onclick="checkDay45BuildSentence('${safeFullText}')" class="px-6 py-3 bg-teal-600 text-white font-extrabold rounded-xl shadow">Kiểm tra</button>
                    <button onclick="resetDay45BuildSentence()" class="px-4 py-3 bg-slate-200 text-slate-700 font-bold rounded-xl">Làm lại</button>
                </div>
            </div>
        `;
    }
};

window.addDay45Word = function(word) {
    playBtnSound();
    window.day45SelectedWords = window.day45SelectedWords || [];
    window.day45SelectedWords.push(word);
    loadLevel(currentLevel);
};

window.removeDay45Word = function(index) {
    playBtnSound();
    window.day45SelectedWords.splice(index, 1);
    loadLevel(currentLevel);
};

window.resetDay45BuildSentence = function() {
    playBtnSound();
    window.day45SelectedWords = [];
    loadLevel(currentLevel);
};

window.checkDay45BuildSentence = function(target) {
    playBtnSound();
    const result = (window.day45SelectedWords || []).join(' ');
    if (result === target) {
        playSound('correct');
        window.day45SelectedWords = [];
        window.day45ShuffledWords = null;
        window.day45BuildIndex++;
        setTimeout(() => { loadLevel(currentLevel); }, 600);
    } else {
        handleWrongAnswer();
    }
};