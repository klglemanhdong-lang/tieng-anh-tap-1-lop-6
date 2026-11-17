window.ENG6_LESSONS = window.ENG6_LESSONS || {};

window.ENG6_LESSONS[27] = {
    unit: 3, // Thuộc Unit 3: My Friends
    title: "Day 27: Reading & Skills - Summer Camps",
    description: "Đọc hiểu đoạn văn quảng cáo trại hè (Superb Summer Camp) và thông tin bạn bè",
    ipa: "/ˈriːdɪŋ ænd skɪlz ˈsʌmər kæmps/",
    
    // Cấu hình lộ trình 7 màn hoạt động chuẩn cho Day 27
    activities: [
        'grammar-intro-day27',         // Màn 1: Giới thiệu bài đọc & Từ vựng trại hè
        'multiple-choice',              // Màn 2: Trắc nghiệm thông tin bài đọc
        'matching-meaning',             // Màn 3: Nối từ khóa & Nghĩa Tiếng Việt
        'listening',                    // Màn 4: Nghe đoạn văn & chọn đáp án đúng
        'matching-ipa',                 // Màn 5: Nối từ & Phiên âm IPA chuẩn
        'sentence-builder-reading',     // Màn 6: Ghép câu tóm tắt nội dung
        'spelling'                      // Màn 7: Kiểm tra chính tả từ vựng bài đọc
    ],

    vocab: [
        { 
            id: 'd27_summercamp', 
            en: 'summer camp', 
            ipa: '/ˈsʌmər kæmp/', 
            vi: 'trại hè', 
            wrongSpells: ['sumer camp', 'summer kamp', 'summer campm'] 
        },
        { 
            id: 'd27_activities', 
            en: 'activities', 
            ipa: '/ækˈtɪvətiz/', 
            vi: 'các hoạt động', 
            wrongSpells: ['activitis', 'activeties', 'activitys'] 
        },
        { 
            id: 'd27_creative', 
            en: 'creative', 
            ipa: '/kriˈeɪtɪv/', 
            vi: 'sáng tạo', 
            wrongSpells: ['creativ', 'creativv', 'creatife'] 
        },
        { 
            id: 'd27_sports', 
            en: 'sports', 
            ipa: '/spɔːrts/', 
            vi: 'các môn thể thao', 
            wrongSpells: ['sportes', 'sportz', 'spoorts'] 
        },
        { 
            id: 'd27_friend', 
            en: 'friend', 
            ipa: '/frend/', 
            vi: 'người bạn', 
            wrongSpells: ['frend', 'friendd', 'friand'] 
        }
    ]
};

window.ENG6_GAME_MODULES = window.ENG6_GAME_MODULES || {};

// MÀN 1: Giới thiệu bài đọc & Từ vựng trại hè (Day 27)
window.ENG6_GAME_MODULES['grammar-intro-day27'] = {
    title: 'Màn 1: Giới Thiệu Bài Đọc - Trại Hè Sôi Động (Summer Camps)',
    render(ctx) {
        ctx.container.innerHTML = `
            <div class="space-y-4">
                <div class="text-center">
                    <span class="px-3 py-1 bg-pink-100 text-pink-800 font-bold text-xs rounded-full">Unit 3: Reading Skills</span>
                    <h3 class="text-2xl font-black text-slate-800 mt-2">Trại Hè & Thông Tin Bạn Bè</h3>
                    <p class="text-slate-600 text-sm mt-1">Luyện tập kỹ năng đọc hiểu qua các thông tin quảng cáo trại hè hấp dẫn!</p>
                </div>

                <div class="bg-pink-50 border-2 border-pink-200 p-4 rounded-2xl space-y-3 text-slate-700 text-sm">
                    <div class="flex items-start space-x-3">
                        <div class="w-8 h-8 rounded-full bg-pink-600 text-white font-bold flex items-center justify-center flex-shrink-0">1</div>
                        <div>
                            <strong class="text-pink-900 block font-bold">Nội dung chính về Superb Summer Camp:</strong>
                            - Dành cho học sinh từ 10 đến 15 tuổi[cite: 16].<br>
                            - Các hoạt động bao gồm: Games, sports, creativity, arts, music, and field trips[cite: 16].
                        </div>
                    </div>
                    <div class="flex items-start space-x-3">
                        <div class="w-8 h-8 rounded-full bg-pink-600 text-white font-bold flex items-center justify-center flex-shrink-0">2</div>
                        <div>
                            <strong class="text-pink-900 block font-bold">Từ vựng cốt lõi trong bài đọc:</strong>
                            - <span class="text-slate-900 font-semibold">summer camp</span> (/ˈsʌmər kæmp/): trại hè.<br>
                            - <span class="text-slate-900 font-semibold">activities</span> (/ækˈtɪvətiz/): các hoạt động.<br>
                            - <span class="text-slate-900 font-semibold">sports</span> (/spɔːrts/): thể thao.
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

// MÀN 6: Sắp xếp câu tóm tắt bài đọc (Sentence Builder)
window.ENG6_GAME_MODULES['sentence-builder-reading'] = {
    title: 'Màn 6: Ghép Câu Tóm Tắt Bài Đọc',
    render(ctx) {
        window.day27BuildIndex = window.day27BuildIndex || 0;
        const sentences = [
            { words: ['The', 'summer', 'camp', 'is', 'for', 'children'], full: 'The summer camp is for children' },
            { words: ['They', 'have', 'many', 'fun', 'activities'], full: 'They have many fun activities' },
            { words: ['Jimmy', 'is', 'taking', 'photos'], full: 'Jimmy is taking photos' },
            { words: ['Phong', 'is', 'reading', 'a', 'comic', 'book'], full: 'Phong is reading a comic book' },
            { words: ['Nam', 'is', 'writing', 'an', 'email'], full: 'Nam is writing an email' }
        ];

        if (window.day27BuildIndex >= sentences.length) {
            window.day27BuildIndex = 0;
            completeLevel();
            return;
        }

        const currS = sentences[window.day27BuildIndex];
        
        // Khởi tạo mảng xáo trộn ngẫu nhiên cho từng câu hỏi
        if (!window.day27ShuffledWords || window.day27CurrentQuestionIndex !== window.day27BuildIndex) {
            window.day27CurrentQuestionIndex = window.day27BuildIndex;
            let pool = [...currS.words];
            for (let i = pool.length - 1; i > 0; i--) {
                const j = Math.floor(Math.random() * (i + 1));
                [pool[i], pool[j]] = [pool[j], pool[i]];
            }
            window.day27ShuffledWords = pool;
            window.day27SelectedWords = [];
        }

        window.day27SelectedWords = window.day27SelectedWords || [];

        // Lọc các từ chưa được chọn từ kho từ đã xáo trộn
        let availablePool = [...window.day27ShuffledWords];
        window.day27SelectedWords.forEach(sel => {
            const idx = availablePool.indexOf(sel);
            if (idx > -1) availablePool.splice(idx, 1);
        });

        let selectedHTML = window.day27SelectedWords.map((w, i) => {
            const safeWord = w.replace(/'/g, "\\'");
            return `<button onclick="removeDay27Word(${i})" class="px-3 py-2 bg-pink-600 text-white font-bold rounded-xl text-sm shadow">${w}</button>`;
        }).join('');

        let poolHTML = availablePool.map((w) => {
            const safeWord = w.replace(/'/g, "\\'");
            return `<button onclick="addDay27Word('${safeWord}')" class="px-4 py-2.5 bg-slate-100 hover:bg-slate-200 text-slate-800 font-bold rounded-xl text-sm border-2 border-slate-300">${w}</button>`;
        }).join('');

        const safeFullText = currS.full.replace(/'/g, "\\'");

        ctx.container.innerHTML = `
            <div>
                <div class="bg-pink-50 border border-pink-200 p-2.5 rounded-xl text-center mb-3">
                    <span class="text-xs font-bold text-pink-800">💡 Ghép các từ thành câu tóm tắt nội dung bài đọc</span>
                </div>
                <div class="flex justify-between items-center mb-2">
                    <span class="text-xs font-bold text-slate-500">Câu ${window.day27BuildIndex + 1} / ${sentences.length}</span>
                </div>

                <div class="min-h-[60px] p-3 border-2 border-dashed border-pink-300 bg-white rounded-2xl flex flex-wrap gap-2 items-center mb-4">
                    ${selectedHTML || '<span class="text-xs text-slate-400 font-medium">Bấm các từ xáo trộn bên dưới để ghép câu...</span>'}
                </div>

                <div class="flex flex-wrap gap-2 justify-center mb-6">${poolHTML}</div>

                <div class="text-center space-x-2">
                    <button onclick="checkDay27BuildSentence('${safeFullText}')" class="px-6 py-3 bg-emerald-600 text-white font-extrabold rounded-xl shadow">Kiểm tra</button>
                    <button onclick="resetDay27BuildSentence()" class="px-4 py-3 bg-slate-200 text-slate-700 font-bold rounded-xl">Làm lại</button>
                </div>
            </div>
        `;
    }
};

window.addDay27Word = function(word) {
    playBtnSound();
    window.day27SelectedWords = window.day27SelectedWords || [];
    window.day27SelectedWords.push(word);
    loadLevel(currentLevel);
};

window.removeDay27Word = function(index) {
    playBtnSound();
    window.day27SelectedWords.splice(index, 1);
    loadLevel(currentLevel);
};

window.resetDay27BuildSentence = function() {
    playBtnSound();
    window.day27SelectedWords = [];
    loadLevel(currentLevel);
};

window.checkDay27BuildSentence = function(target) {
    playBtnSound();
    const result = (window.day27SelectedWords || []).join(' ');
    if (result === target) {
        playSound('correct');
        window.day27SelectedWords = [];
        window.day27ShuffledWords = null;
        window.day27BuildIndex++;
        setTimeout(() => { loadLevel(currentLevel); }, 600);
    } else {
        handleWrongAnswer();
    }
};