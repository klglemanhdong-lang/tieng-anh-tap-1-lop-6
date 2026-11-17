window.ENG6_LESSONS = window.ENG6_LESSONS || {};

window.ENG6_LESSONS[55] = {
    unit: 6, // Thuộc Unit 6: Our Tet Holiday
    title: "Day 55: Reading - New Year Practices",
    description: "Đọc hiểu các phong tục đón năm mới ở các quốc gia khác nhau trên thế giới (In Japan, temples ring bells 108 times at midnight)",
    ipa: "/ˈriːdɪŋ nuː jɪər ˈpræktɪsɪz ɪn ðə wɜːrld/",
    
    // Cấu hình lộ trình 7 màn hoạt động chuẩn cho Day 55
    activities: [
        'grammar-intro-day55',         // Màn 1: Giới thiệu bài đọc phong tục các nước
        'multiple-choice',              // Màn 2: Trắc nghiệm thông tin quốc gia
        'matching-meaning',             // Màn 3: Nối phong tục & Đất nước & Nghĩa
        'listening',                    // Màn 4: Nghe đoạn văn đọc hiểu & chọn đáp án
        'matching-ipa',                 // Màn 5: Nối câu & Phiên âm IPA chuẩn
        'sentence-builder-practices',   // Màn 6: Ghép câu hỏi đáp nội dung bài đọc
        'spelling'                      // Màn 7: Kiểm tra chính tả từ vựng bài đọc
    ],

    vocab: [
        { 
            id: 'd55_v1', 
            en: 'In Japan temples ring bells 108 times', 
            ipa: '/ɪn dʒəˈpæn ˈtemplz rɪŋ belz wʌn hʌndrɛd eɪt taɪmz/', 
            vi: 'Ở Nhật Bản, các ngôi đền rung chuông 108 lần', 
            wrongSpells: ['In Japan temple ring bells', 'In Japan temples rings bells', 'In Japan temples ring bell'] 
        },
        { 
            id: 'd55_v2', 
            en: 'People try to put 12 grapes in their mouth', 
            ipa: '/ˈpiːpl traɪ tuː pʊt twelv ɡreɪps ɪn ðeɪr maʊθ/', 
            vi: 'Mọi người cố gắng bỏ 12 quả nho vào miệng', 
            wrongSpells: ['People tries to put 12 grapes', 'People try to puts 12 grapes', 'People try put 12 grapes'] 
        },
        { 
            id: 'd55_v3', 
            en: 'In Switzerland they drop ice cream on the floor', 
            ipa: '/ɪn ˈswɪtsərlənd ðeɪ drɑːp aɪs kriːm ɑːn ðə flɔːr/', 
            vi: 'Ở Thụy Sĩ, họ làm rơi kem xuống sàn nhà', 
            wrongSpells: ['In Switzerland they drops ice cream', 'In Switzerland they dropped ice cream on floor', 'In Switzerland they drop ice cream floor'] 
        },
        { 
            id: 'd55_v4', 
            en: 'In Romania they throw coins into a river', 
            ipa: '/ɪn roʊˈmeɪniə ðeɪ θroʊ kɔɪnz ˈɪntuː ə ˈrɪvər/', 
            vi: 'Ở Romania, họ ném đồng xu xuống sông', 
            wrongSpells: ['In Romania they throws coins', 'In Romania they threw coins', 'In Romania they throw coin'] 
        },
        { 
            id: 'd55_v5', 
            en: 'In Thailand they throw water on other people', 
            ipa: '/ɪn ˈtaɪlænd ðeɪ θroʊ ˈwɔːtər ɑːn ˈʌðər ˈpiːpl/', 
            vi: 'Ở Thái Lan, họ té nước lên người khác', 
            wrongSpells: ['In Thailand they throws water', 'In Thailand they throw waters', 'In Thailand they threw water'] 
        }
    ]
};

window.ENG6_GAME_MODULES = window.ENG6_GAME_MODULES || {};

// MÀN 1: Giới thiệu bài đọc phong tục các nước (Day 55)
window.ENG6_GAME_MODULES['grammar-intro-day55'] = {
    title: 'Màn 1: Giới Thiệu Bài Đọc - Phong Tục Đón Năm Mới',
    render(ctx) {
        ctx.container.innerHTML = `
            <div class="space-y-4">
                <div class="text-center">
                    <span class="px-3 py-1 bg-amber-100 text-amber-800 font-bold text-xs rounded-full">Unit 6: Reading Skills</span>
                    <h3 class="text-2xl font-black text-slate-800 mt-2">New Year Practices in the World</h3>
                    <p class="text-slate-600 text-sm mt-1">Khám phá các truyền thống và phong tục đón năm mới thú vị tại nhiều quốc gia khác nhau!</p>
                </div>

                <div class="bg-white border-2 border-amber-200 p-3.5 rounded-2xl space-y-2 text-xs md:text-sm shadow-sm">
                    <div class="font-bold text-amber-700 uppercase tracking-wide text-xs mb-1">📖 Tóm tắt bài đọc (SGK trang 63):</div>
                    <p class="text-slate-700 italic">"In Japan, temples ring bells 108 times at midnight. In Spain, people try to put 12 grapes in their mouth for good luck. In Switzerland, they drop ice cream on the floor. In Romania, they throw coins into a river. In Thailand, they throw water on other people to wash away bad luck."</p>
                </div>

                <div class="bg-amber-50 border-2 border-amber-200 p-4 rounded-2xl space-y-3 text-slate-700 text-sm">
                    <div class="flex items-start space-x-3">
                        <div class="w-8 h-8 rounded-full bg-amber-600 text-white font-bold flex items-center justify-center flex-shrink-0">1</div>
                        <div>
                            <strong class="text-amber-900 block font-bold">Nhật Bản & Tây Ban Nha:</strong>
                            - Nhật Bản rung chuông đền 108 lần; Tây Ban Nha ăn 12 quả nho cầu may mắn.
                        </div>
                    </div>
                    <div class="flex items-start space-x-3">
                        <div class="w-8 h-8 rounded-full bg-amber-600 text-white font-bold flex items-center justify-center flex-shrink-0">2</div>
                        <div>
                            <strong class="text-amber-900 block font-bold">Thụy Sĩ, Romania & Thái Lan:</strong>
                            - Thụy Sĩ làm rơi kem xuống sàn; Romania ném đồng xu xuống sông; Thái Lan té nước giải trừ vận xui.
                        </div>
                    </div>
                </div>

                <div class="text-center pt-2">
                    <button onclick="playBtnSound(); completeLevel()" class="px-8 py-3.5 bg-gradient-to-r from-amber-600 to-orange-600 text-white font-extrabold rounded-2xl shadow-lg hover:opacity-95 transition-all text-base">
                        Đã hiểu nội dung, vào luyện tập ngay! <i class="fa-solid fa-arrow-right ml-2"></i>
                    </button>
                </div>
            </div>
        `;
    }
};

// MÀN 6: Sắp xếp câu hỏi đáp nội dung bài đọc (Sentence Builder)
window.ENG6_GAME_MODULES['sentence-builder-practices'] = {
    title: 'Màn 6: Ghép Câu Về Phong Tục Đón Năm Mới Các Nước',
    render(ctx) {
        window.day55BuildIndex = window.day55BuildIndex || 0;
        const sentences = [
            { words: ['In', 'Japan', 'temples', 'ring', 'bells', '108', 'times'], full: 'In Japan temples ring bells 108 times' },
            { words: ['People', 'try', 'to', 'put', '12', 'grapes', 'in', 'their', 'mouth'], full: 'People try to put 12 grapes in their mouth' },
            { words: ['In', 'Switzerland', 'they', 'drop', 'ice', 'cream', 'on', 'the', 'floor'], full: 'In Switzerland they drop ice cream on the floor' },
            { words: ['In', 'Romania', 'they', 'throw', 'coins', 'into', 'a', 'river'], full: 'In Romania they throw coins into a river' },
            { words: ['In', 'Thailand', 'they', 'throw', 'water', 'on', 'other', 'people'], full: 'In Thailand they throw water on other people' }
        ];

        if (window.day55BuildIndex >= sentences.length) {
            window.day55BuildIndex = 0;
            completeLevel();
            return;
        }

        const currS = sentences[window.day55BuildIndex];
        
        // Khởi tạo mảng xáo trộn ngẫu nhiên cho từng câu hỏi
        if (!window.day55ShuffledWords || window.day55CurrentQuestionIndex !== window.day55BuildIndex) {
            window.day55CurrentQuestionIndex = window.day55BuildIndex;
            let pool = [...currS.words];
            for (let i = pool.length - 1; i > 0; i--) {
                const j = Math.floor(Math.random() * (i + 1));
                [pool[i], pool[j]] = [pool[j], pool[i]];
            }
            window.day55ShuffledWords = pool;
            window.day55SelectedWords = [];
        }

        window.day55SelectedWords = window.day55SelectedWords || [];

        // Lọc các từ chưa được chọn từ kho từ đã xáo trộn
        let availablePool = [...window.day55ShuffledWords];
        window.day55SelectedWords.forEach(sel => {
            const idx = availablePool.indexOf(sel);
            if (idx > -1) availablePool.splice(idx, 1);
        });

        let selectedHTML = window.day55SelectedWords.map((w, i) => {
            const safeWord = w.replace(/'/g, "\\'");
            return `<button onclick="removeDay55Word(${i})" class="px-3 py-2 bg-amber-600 text-white font-bold rounded-xl text-sm shadow">${w}</button>`;
        }).join('');

        let poolHTML = availablePool.map((w) => {
            const safeWord = w.replace(/'/g, "\\'");
            return `<button onclick="addDay55Word('${safeWord}')" class="px-4 py-2.5 bg-slate-100 hover:bg-slate-200 text-slate-800 font-bold rounded-xl text-sm border-2 border-slate-300">${w}</button>`;
        }).join('');

        const safeFullText = currS.full.replace(/'/g, "\\'");

        ctx.container.innerHTML = `
            <div>
                <div class="bg-amber-50 border border-amber-200 p-2.5 rounded-xl text-center mb-3">
                    <span class="text-xs font-bold text-amber-800">💡 Ghép các từ xáo trộn bên dưới thành câu hoàn chỉnh về phong tục quốc tế</span>
                </div>
                <div class="flex justify-between items-center mb-2">
                    <span class="text-xs font-bold text-slate-500">Câu ${window.day55BuildIndex + 1} / ${sentences.length}</span>
                </div>

                <div class="min-h-[60px] p-3 border-2 border-dashed border-amber-300 bg-white rounded-2xl flex flex-wrap gap-2 items-center mb-4">
                    ${selectedHTML || '<span class="text-xs text-slate-400 font-medium">Bấm các từ xáo trộn bên dưới để ghép câu...</span>'}
                </div>

                <div class="flex flex-wrap gap-2 justify-center mb-6">${poolHTML}</div>

                <div class="text-center space-x-2">
                    <button onclick="checkDay55BuildSentence('${safeFullText}')" class="px-6 py-3 bg-amber-600 text-white font-extrabold rounded-xl shadow">Kiểm tra</button>
                    <button onclick="resetDay55BuildSentence()" class="px-4 py-3 bg-slate-200 text-slate-700 font-bold rounded-xl">Làm lại</button>
                </div>
            </div>
        `;
    }
};

window.addDay55Word = function(word) {
    playBtnSound();
    window.day55SelectedWords = window.day55SelectedWords || [];
    window.day55SelectedWords.push(word);
    loadLevel(currentLevel);
};

window.removeDay55Word = function(index) {
    playBtnSound();
    window.day55SelectedWords.splice(index, 1);
    loadLevel(currentLevel);
};

window.resetDay55BuildSentence = function() {
    playBtnSound();
    window.day55SelectedWords = [];
    loadLevel(currentLevel);
};

window.checkDay55BuildSentence = function(target) {
    playBtnSound();
    const result = (window.day55SelectedWords || []).join(' ');
    if (result === target) {
        playSound('correct');
        window.day55SelectedWords = [];
        window.day55ShuffledWords = null;
        window.day55BuildIndex++;
        setTimeout(() => { loadLevel(currentLevel); }, 600);
    } else {
        handleWrongAnswer();
    }
};