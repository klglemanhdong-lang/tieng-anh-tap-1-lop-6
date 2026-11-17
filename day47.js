window.ENG6_LESSONS = window.ENG6_LESSONS || {};

window.ENG6_LESSONS[47] = {
    unit: 5, // Thuộc Unit 5: Natural Wonders of Viet Nam
    title: "Day 47: Speaking - Famous Places and Rules",
    description: "Thảo luận về các danh thắng và những việc phải làm/không được làm khi đến đó (Ha Long Bay has many interesting islands. You must not litter.)",
    ipa: "/ˈspiːkɪŋ ˈtɔːkɪŋ əˈbaʊt ˈfeɪməs pleɪsɪz ænd ruːlz/",
    
    // Cấu hình lộ trình 7 màn hoạt động chuẩn cho Day 47
    activities: [
        'grammar-intro-day47',         // Màn 1: Hội thoại mẫu & Lý thuyết thảo luận danh thắng & nội quy
        'multiple-choice',              // Màn 2: Trắc nghiệm giao tiếp địa điểm và quy tắc
        'matching-meaning',             // Màn 3: Nối ý kiến thảo luận & Nghĩa Tiếng Việt
        'listening',                    // Màn 4: Nghe mẫu thảo luận & chọn đáp án đúng
        'matching-ipa',                 // Màn 5: Nối câu & Phiên âm IPA chuẩn
        'sentence-builder-speaking-u5', // Màn 6: Ghép câu thảo luận địa điểm và nội quy
        'speaking'                      // Màn 7: Luyện nói AI chuẩn xác
    ],

    vocab: [
        { 
            id: 'd47_q1', 
            en: 'Ha Long Bay has a lot of interesting islands', 
            ipa: '/hɑː lɑːŋ beɪ hæz ə lɑːt ʌv ˈɪntrəstɪŋ ˈaɪləndz/', 
            vi: 'Vịnh Hạ Long có rất nhiều hòn đảo thú vị', 
            wrongSpells: ['Ha Long Bay have a lot of interesting islands', 'Ha Long Bay has much interesting islands', 'Ha Long Bay is a lot of interesting islands'] 
        },
        { 
            id: 'd47_a1', 
            en: 'You must not litter in the area', 
            ipa: '/juː mʌst nɑːt ˈlɪtər ɪn ðə ˈeəriə/', 
            vi: 'Bạn không được xả rác trong khu vực này', 
            wrongSpells: ['You must litter in the area', 'You mustn\'t litters in the area', 'You don\'t must litter'] 
        },
        { 
            id: 'd47_q2', 
            en: 'What can you do at Ha Long Bay', 
            ipa: '/wʌt kæn juː duː æt hɑː lɑːŋ beɪ/', 
            vi: 'Bạn có thể làm gì ở Vịnh Hạ Long?', 
            wrongSpells: ['What can you does at Ha Long Bay', 'What you can do at Ha Long Bay', 'What can do you at Ha Long Bay'] 
        },
        { 
            id: 'd47_a2', 
            en: 'You must follow all the rules', 
            ipa: '/juː mʌst ˈfɑːloʊ ɔːr ðə ruːlz/', 
            vi: 'Bạn phải tuân theo tất cả các quy tắc', 
            wrongSpells: ['You mustn\'t follow all the rules', 'You must follows all the rules', 'You must following rules'] 
        },
        { 
            id: 'd47_a3', 
            en: 'You must not take photos in the museum', 
            ipa: '/juː mʌst nɑːt teɪk ˈfoʊtoʊz ɪn ðə mjuˈziːəm/', 
            vi: 'Bạn không được chụp ảnh trong bảo tàng', 
            wrongSpells: ['You must take photos in the museum', 'You mustn\'t takes photos', 'You don\'t must take photos'] 
        }
    ]
};

window.ENG6_GAME_MODULES = window.ENG6_GAME_MODULES || {};

// MÀN 1: Hội thoại mẫu & Lý thuyết thảo luận danh thắng & nội quy (Day 47)
window.ENG6_GAME_MODULES['grammar-intro-day47'] = {
    title: 'Màn 1: Hội Thoại Mẫu - Thảo Luận Danh Thắng & Nội Quy',
    render(ctx) {
        ctx.container.innerHTML = `
            <div class="space-y-4">
                <div class="text-center">
                    <span class="px-3 py-1 bg-teal-100 text-teal-800 font-bold text-xs rounded-full">Unit 5: Speaking Skills</span>
                    <h3 class="text-2xl font-black text-slate-800 mt-2">Nói Về Kỳ Quan & Quy Định Tại Đó</h3>
                    <p class="text-slate-600 text-sm mt-1">Luyện tập mẫu câu miêu tả danh thắng kết hợp với các quy tắc phải làm hoặc không được làm!</p>
                </div>

                <div class="bg-white border-2 border-teal-200 p-3.5 rounded-2xl space-y-2 text-xs md:text-sm shadow-sm">
                    <div class="font-bold text-teal-700 uppercase tracking-wide text-xs mb-1">💬 Hội thoại mẫu (SGK Tiếng Anh 6 trang 53):</div>
                    <p><strong class="text-slate-900">Tourist Guide:</strong> Ha Long Bay has a lot of interesting islands.</p>
                    <p><strong class="text-teal-700">Visitor:</strong> What must we do when we visit there?</p>
                    <p><strong class="text-slate-900">Tourist Guide:</strong> You must follow all the rules.</p>
                    <p><strong class="text-teal-700">Visitor:</strong> Can we litter?</p>
                    <p><strong class="text-slate-900">Tourist Guide:</strong> No, you must not litter.</p>
                </div>

                <div class="bg-teal-50 border-2 border-teal-200 p-4 rounded-2xl space-y-3 text-slate-700 text-sm">
                    <div class="flex items-start space-x-3">
                        <div class="w-8 h-8 rounded-full bg-teal-600 text-white font-bold flex items-center justify-center flex-shrink-0">1</div>
                        <div>
                            <strong class="text-teal-900 block font-bold">Giới thiệu danh thắng:</strong>
                            - <span class="font-mono bg-white px-2 py-0.5 rounded border border-teal-200 font-bold">[Tên danh thắng] has a lot of...</span>
                        </div>
                    </div>
                    <div class="flex items-start space-x-3">
                        <div class="w-8 h-8 rounded-full bg-teal-600 text-white font-bold flex items-center justify-center flex-shrink-0">2</div>
                        <div>
                            <strong class="text-teal-900 block font-bold">Nói về nội quy (must / mustn't):</strong>
                            - <span class="font-mono bg-white px-2 py-0.5 rounded border border-teal-200 font-bold">You must follow all the rules.</span><br>
                            - <span class="font-mono bg-white px-2 py-0.5 rounded border border-teal-200 font-bold">You must not litter.</span>
                        </div>
                    </div>
                </div>

                <div class="text-center pt-2">
                    <button onclick="playBtnSound(); completeLevel()" class="px-8 py-3.5 bg-gradient-to-r from-teal-600 to-cyan-600 text-white font-extrabold rounded-2xl shadow-lg hover:opacity-95 transition-all text-base">
                        Đã hiểu rõ, vào luyện tập ngay! <i class="fa-solid fa-arrow-right ml-2"></i>
                    </button>
                </div>
            </div>
        `;
    }
};

// MÀN 6: Sắp xếp câu thảo luận địa điểm và nội quy (Sentence Builder)
window.ENG6_GAME_MODULES['sentence-builder-speaking-u5'] = {
    title: 'Màn 6: Ghép Câu Thảo Luận Địa Điểm & Nội Quy',
    render(ctx) {
        window.day47BuildIndex = window.day47BuildIndex || 0;
        const sentences = [
            { words: ['Ha', 'Long', 'Bay', 'has', 'a', 'lot', 'of', 'interesting', 'islands'], full: 'Ha Long Bay has a lot of interesting islands' },
            { words: ['You', 'must', 'not', 'litter', 'in', 'the', 'area'], full: 'You must not litter in the area' },
            { words: ['What', 'can', 'you', 'do', 'at', 'Ha', 'Long', 'Bay'], full: 'What can you do at Ha Long Bay' },
            { words: ['You', 'must', 'follow', 'all', 'the', 'rules'], full: 'You must follow all the rules' },
            { words: ['You', 'must', 'not', 'take', 'photos', 'in', 'the', 'museum'], full: 'You must not take photos in the museum' }
        ];

        if (window.day47BuildIndex >= sentences.length) {
            window.day47BuildIndex = 0;
            completeLevel();
            return;
        }

        const currS = sentences[window.day47BuildIndex];
        
        // Khởi tạo mảng xáo trộn ngẫu nhiên cho từng câu hỏi
        if (!window.day47ShuffledWords || window.day47CurrentQuestionIndex !== window.day47BuildIndex) {
            window.day47CurrentQuestionIndex = window.day47BuildIndex;
            let pool = [...currS.words];
            for (let i = pool.length - 1; i > 0; i--) {
                const j = Math.floor(Math.random() * (i + 1));
                [pool[i], pool[j]] = [pool[j], pool[i]];
            }
            window.day47ShuffledWords = pool;
            window.day47SelectedWords = [];
        }

        window.day47SelectedWords = window.day47SelectedWords || [];

        // Lọc các từ chưa được chọn từ kho từ đã xáo trộn
        let availablePool = [...window.day47ShuffledWords];
        window.day47SelectedWords.forEach(sel => {
            const idx = availablePool.indexOf(sel);
            if (idx > -1) availablePool.splice(idx, 1);
        });

        let selectedHTML = window.day47SelectedWords.map((w, i) => {
            const safeWord = w.replace(/'/g, "\\'");
            return `<button onclick="removeDay47Word(${i})" class="px-3 py-2 bg-teal-600 text-white font-bold rounded-xl text-sm shadow">${w}</button>`;
        }).join('');

        let poolHTML = availablePool.map((w) => {
            const safeWord = w.replace(/'/g, "\\'");
            return `<button onclick="addDay47Word('${safeWord}')" class="px-4 py-2.5 bg-slate-100 hover:bg-slate-200 text-slate-800 font-bold rounded-xl text-sm border-2 border-slate-300">${w}</button>`;
        }).join('');

        const safeFullText = currS.full.replace(/'/g, "\\'");

        ctx.container.innerHTML = `
            <div>
                <div class="bg-teal-50 border border-teal-200 p-2.5 rounded-xl text-center mb-3">
                    <span class="text-xs font-bold text-teal-800">💡 Ghép các từ xáo trộn bên dưới thành câu thảo luận hoàn chỉnh</span>
                </div>
                <div class="flex justify-between items-center mb-2">
                    <span class="text-xs font-bold text-slate-500">Câu ${window.day47BuildIndex + 1} / ${sentences.length}</span>
                </div>

                <div class="min-h-[60px] p-3 border-2 border-dashed border-teal-300 bg-white rounded-2xl flex flex-wrap gap-2 items-center mb-4">
                    ${selectedHTML || '<span class="text-xs text-slate-400 font-medium">Bấm các từ xáo trộn bên dưới để ghép câu...</span>'}
                </div>

                <div class="flex flex-wrap gap-2 justify-center mb-6">${poolHTML}</div>

                <div class="text-center space-x-2">
                    <button onclick="checkDay47BuildSentence('${safeFullText}')" class="px-6 py-3 bg-teal-600 text-white font-extrabold rounded-xl shadow">Kiểm tra</button>
                    <button onclick="resetDay47BuildSentence()" class="px-4 py-3 bg-slate-200 text-slate-700 font-bold rounded-xl">Làm lại</button>
                </div>
            </div>
        `;
    }
};

window.addDay47Word = function(word) {
    playBtnSound();
    window.day47SelectedWords = window.day47SelectedWords || [];
    window.day47SelectedWords.push(word);
    loadLevel(currentLevel);
};

window.removeDay47Word = function(index) {
    playBtnSound();
    window.day47SelectedWords.splice(index, 1);
    loadLevel(currentLevel);
};

window.resetDay47BuildSentence = function() {
    playBtnSound();
    window.day47SelectedWords = [];
    loadLevel(currentLevel);
};

window.checkDay47BuildSentence = function(target) {
    playBtnSound();
    const result = (window.day47SelectedWords || []).join(' ');
    if (result === target) {
        playSound('correct');
        window.day47SelectedWords = [];
        window.day47ShuffledWords = null;
        window.day47BuildIndex++;
        setTimeout(() => { loadLevel(currentLevel); }, 600);
    } else {
        handleWrongAnswer();
    }
};