window.ENG6_LESSONS = window.ENG6_LESSONS || {};

window.ENG6_LESSONS[46] = {
    unit: 5, // Thuộc Unit 5: Natural Wonders of Viet Nam
    title: "Day 46: Reading - Natural Wonders",
    description: "Đọc hiểu thông tin về Vịnh Hạ Long và Đồi cát Mũi Né (Ha Long Bay is in Quang Ninh. It has many islands and caves.)",
    ipa: "/ˈriːdɪŋ ˈnætʃrəl ˈwʌndərz/",
    
    // Cấu hình lộ trình 7 màn hoạt động chuẩn cho Day 46
    activities: [
        'grammar-intro-day46',         // Màn 1: Giới thiệu bài đọc Vịnh Hạ Long & Mũi Né
        'multiple-choice',              // Màn 2: Trắc nghiệm thông tin bài đọc
        'matching-meaning',             // Màn 3: Nối từ vựng (wonder, desert, island) & Nghĩa
        'listening',                    // Màn 4: Nghe đoạn văn đọc hiểu & chọn đáp án
        'matching-ipa',                 // Màn 5: Nối câu & Phiên âm IPA chuẩn
        'sentence-builder-reading',     // Màn 6: Ghép câu hỏi đáp nội dung bài đọc
        'spelling'                      // Màn 7: Kiểm tra chính tả từ vựng bài đọc
    ],

    vocab: [
        { 
            id: 'd46_halong', 
            en: 'Ha Long Bay is in Quang Ninh', 
            ipa: '/hɑː lɑːŋ beɪ ɪz ɪn kwɑːŋ nɪn/', 
            vi: 'Vịnh Hạ Long ở Quảng Ninh', 
            wrongSpells: ['Ha Long Bay are in Quang Ninh', 'Ha Long Bay is at Quang Ninh', 'Ha Long Bay in Quang Ninh'] 
        },
        { 
            id: 'd46_islands', 
            en: 'It has many islands and caves', 
            ipa: '/ɪt hæz ˈmeni ˈaɪləndz ænd keɪvz/', 
            vi: 'Nó có nhiều hòn đảo và hang động', 
            wrongSpells: ['It have many islands and caves', 'It has much islands and caves', 'It is many islands and caves'] 
        },
        { 
            id: 'd46_muine', 
            en: 'Mui Ne is popular for its amazing landscapes', 
            ipa: '/muː neɪ ɪz ˈpɑːpjələr fɔːr ɪts əˈmeɪzɪŋ ˈlændskeɪps/', 
            vi: 'Mũi Né nổi tiếng với phong cảnh tuyệt vời', 
            wrongSpells: ['Mui Ne are popular for amazing landscapes', 'Mui Ne is popular to amazing landscapes', 'Mui Ne popular for amazing landscapes'] 
        },
        { 
            id: 'd46_desert', 
            en: 'It is like a hot desert here', 
            ipa: '/ɪt ɪz laɪk ə hɑːt ˈdezərt hɪər/', 
            vi: 'Nơi đây giống như một sa mạc nóng', 
            wrongSpells: ['It is like hot desert here', 'It are like a hot desert here', 'It is as a hot desert here'] 
        },
        { 
            id: 'd46_wonder', 
            en: 'Viet Nam is best natural wonder', 
            ipa: '/viːt næm ɪz best ˈnætʃrəl ˈwʌndər/', 
            vi: 'Việt Nam là kỳ quan thiên nhiên tuyệt vời nhất', 
            wrongSpells: ['Viet Nam are best natural wonder', 'Viet Nam is the best natural wonder', 'Viet Nam is best natural wonders'] 
        }
    ]
};

window.ENG6_GAME_MODULES = window.ENG6_GAME_MODULES || {};

// MÀN 1: Giới thiệu bài đọc Vịnh Hạ Long & Mũi Né (Day 46)
window.ENG6_GAME_MODULES['grammar-intro-day46'] = {
    title: 'Màn 1: Giới Thiệu Bài Đọc - Kỳ Quan Thiên Nhiên',
    render(ctx) {
        ctx.container.innerHTML = `
            <div class="space-y-4">
                <div class="text-center">
                    <span class="px-3 py-1 bg-teal-100 text-teal-800 font-bold text-xs rounded-full">Unit 5: Reading Skills</span>
                    <h3 class="text-2xl font-black text-slate-800 mt-2">Ha Long Bay & Mui Ne</h3>
                    <p class="text-slate-600 text-sm mt-1">Đọc hiểu đoạn văn miêu tả hai danh thắng nổi tiếng: Vịnh Hạ Long và Đồi cát Mũi Né!</p>
                </div>

                <div class="bg-white border-2 border-teal-200 p-3.5 rounded-2xl space-y-2 text-xs md:text-sm shadow-sm">
                    <div class="font-bold text-teal-700 uppercase tracking-wide text-xs mb-1">📖 Tóm tắt bài đọc (SGK trang 54):</div>
                    <p class="text-slate-700 italic">"Ha Long Bay is in Quang Ninh. It has many islands and caves. Tuan Chau is a popular tourist attraction... Mui Ne is popular for its amazing landscapes. The sand has different colours: white, yellow, red... It is like a hot desert here."</p>
                </div>

                <div class="bg-teal-50 border-2 border-teal-200 p-4 rounded-2xl space-y-3 text-slate-700 text-sm">
                    <div class="flex items-start space-x-3">
                        <div class="w-8 h-8 rounded-full bg-teal-600 text-white font-bold flex items-center justify-center flex-shrink-0">1</div>
                        <div>
                            <strong class="text-teal-900 block font-bold">Vịnh Hạ Long (Quảng Ninh):</strong>
                            - Có nhiều hòn đảo và hang động tuyệt đẹp; Tuần Châu là điểm hút khách du lịch.
                        </div>
                    </div>
                    <div class="flex items-start space-x-3">
                        <div class="w-8 h-8 rounded-full bg-teal-600 text-white font-bold flex items-center justify-center flex-shrink-0">2</div>
                        <div>
                            <strong class="text-teal-900 block font-bold">Đồi cát Mũi Né (Bình Thuận):</strong>
                            - Nổi tiếng với cát nhiều màu sắc (trắng, vàng, đỏ) và khung cảnh giống như một sa mạc.
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

// MÀN 6: Sắp xếp câu hỏi đáp nội dung bài đọc (Sentence Builder)
window.ENG6_GAME_MODULES['sentence-builder-reading'] = {
    title: 'Màn 6: Ghép Câu Hỏi Đáp Về Bài Đọc Kỳ Quan',
    render(ctx) {
        window.day46BuildIndex = window.day46BuildIndex || 0;
        const sentences = [
            { words: ['Ha', 'Long', 'Bay', 'is', 'in', 'Quang', 'Ninh'], full: 'Ha Long Bay is in Quang Ninh' },
            { words: ['It', 'has', 'many', 'islands', 'and', 'caves'], full: 'It has many islands and caves' },
            { words: ['Mui', 'Ne', 'is', 'popular', 'for', 'its', 'amazing', 'landscapes'], full: 'Mui Ne is popular for its amazing landscapes' },
            { words: ['It', 'is', 'like', 'a', 'hot', 'desert', 'here'], full: 'It is like a hot desert here' },
            { words: ['Viet', 'Nam', 'has', 'great', 'natural', 'wonders'], full: 'Viet Nam has great natural wonders' }
        ];

        if (window.day46BuildIndex >= sentences.length) {
            window.day46BuildIndex = 0;
            completeLevel();
            return;
        }

        const currS = sentences[window.day46BuildIndex];
        
        // Khởi tạo mảng xáo trộn ngẫu nhiên cho từng câu hỏi
        if (!window.day46ShuffledWords || window.day46CurrentQuestionIndex !== window.day46BuildIndex) {
            window.day46CurrentQuestionIndex = window.day46BuildIndex;
            let pool = [...currS.words];
            for (let i = pool.length - 1; i > 0; i--) {
                const j = Math.floor(Math.random() * (i + 1));
                [pool[i], pool[j]] = [pool[j], pool[i]];
            }
            window.day46ShuffledWords = pool;
            window.day46SelectedWords = [];
        }

        window.day46SelectedWords = window.day46SelectedWords || [];

        // Lọc các từ chưa được chọn từ kho từ đã xáo trộn
        let availablePool = [...window.day46ShuffledWords];
        window.day46SelectedWords.forEach(sel => {
            const idx = availablePool.indexOf(sel);
            if (idx > -1) availablePool.splice(idx, 1);
        });

        let selectedHTML = window.day46SelectedWords.map((w, i) => {
            const safeWord = w.replace(/'/g, "\\'");
            return `<button onclick="removeDay46Word(${i})" class="px-3 py-2 bg-teal-600 text-white font-bold rounded-xl text-sm shadow">${w}</button>`;
        }).join('');

        let poolHTML = availablePool.map((w) => {
            const safeWord = w.replace(/'/g, "\\'");
            return `<button onclick="addDay46Word('${safeWord}')" class="px-4 py-2.5 bg-slate-100 hover:bg-slate-200 text-slate-800 font-bold rounded-xl text-sm border-2 border-slate-300">${w}</button>`;
        }).join('');

        const safeFullText = currS.full.replace(/'/g, "\\'");

        ctx.container.innerHTML = `
            <div>
                <div class="bg-teal-50 border border-teal-200 p-2.5 rounded-xl text-center mb-3">
                    <span class="text-xs font-bold text-teal-800">💡 Ghép các từ xáo trộn bên dưới thành câu hỏi đáp bài đọc hoàn chỉnh</span>
                </div>
                <div class="flex justify-between items-center mb-2">
                    <span class="text-xs font-bold text-slate-500">Câu ${window.day46BuildIndex + 1} / ${sentences.length}</span>
                </div>

                <div class="min-h-[60px] p-3 border-2 border-dashed border-teal-300 bg-white rounded-2xl flex flex-wrap gap-2 items-center mb-4">
                    ${selectedHTML || '<span class="text-xs text-slate-400 font-medium">Bấm các từ xáo trộn bên dưới để ghép câu...</span>'}
                </div>

                <div class="flex flex-wrap gap-2 justify-center mb-6">${poolHTML}</div>

                <div class="text-center space-x-2">
                    <button onclick="checkDay46BuildSentence('${safeFullText}')" class="px-6 py-3 bg-teal-600 text-white font-extrabold rounded-xl shadow">Kiểm tra</button>
                    <button onclick="resetDay46BuildSentence()" class="px-4 py-3 bg-slate-200 text-slate-700 font-bold rounded-xl">Làm lại</button>
                </div>
            </div>
        `;
    }
};

window.addDay46Word = function(word) {
    playBtnSound();
    window.day46SelectedWords = window.day46SelectedWords || [];
    window.day46SelectedWords.push(word);
    loadLevel(currentLevel);
};

window.removeDay46Word = function(index) {
    playBtnSound();
    window.day46SelectedWords.splice(index, 1);
    loadLevel(currentLevel);
};

window.resetDay46BuildSentence = function() {
    playBtnSound();
    window.day46SelectedWords = [];
    loadLevel(currentLevel);
};

window.checkDay46BuildSentence = function(target) {
    playBtnSound();
    const result = (window.day46SelectedWords || []).join(' ');
    if (result === target) {
        playSound('correct');
        window.day46SelectedWords = [];
        window.day46ShuffledWords = null;
        window.day46BuildIndex++;
        setTimeout(() => { loadLevel(currentLevel); }, 600);
    } else {
        handleWrongAnswer();
    }
};