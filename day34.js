window.ENG6_LESSONS = window.ENG6_LESSONS || {};

window.ENG6_LESSONS[34] = {
    unit: 4, // Thuộc Unit 4: My Neighbourhood
    title: "Day 34: Asking for and Giving Directions",
    description: "Mẫu câu hỏi và chỉ đường trong khu phố (Excuse me, can you tell me the way to...? / Go straight, turn left, turn right)",
    ipa: "/ˈɑːskɪŋ fɔːr ænd ˈɡɪvɪŋ daɪˈrekʃnz/",
    
    // Cấu hình lộ trình 7 màn hoạt động chuẩn cho Day 34
    activities: [
        'grammar-intro-day34',           // Màn 1: Hội thoại mẫu & Lý thuyết hỏi/chỉ đường
        'multiple-choice',                // Màn 2: Trắc nghiệm giao tiếp chỉ đường
        'matching-meaning',               // Màn 3: Nối câu hỏi/chỉ dẫn & Nghĩa Tiếng Việt
        'listening',                      // Màn 4: Nghe hội thoại chỉ đường & chọn đáp án
        'matching-ipa',                   // Màn 5: Nối câu & Phiên âm IPA chuẩn
        'sentence-builder-directions',    // Màn 6: Ghép câu chỉ đường (Go straight. Take the second turning on the left...)
        'speaking'                        // Màn 7: Luyện nói AI chuẩn xác
    ],

    vocab: [
        { 
            id: 'd34_q1', 
            en: 'Can you tell me the way to Tan Ky House', 
            ipa: '/kæn juː tel miː ðə weɪ tuː tæn kiː haʊs/', 
            vi: 'Bạn có thể chỉ cho tôi đường đến nhà cổ Tấn Kỳ không?', 
            wrongSpells: ['Can you tell me way to Tan Ky House', 'Can you tell me the way Tan Ky House', 'Can you tell me the way to Tan Ky Houses'] 
        },
        { 
            id: 'd34_a1', 
            en: 'Go straight and turn left', 
            ipa: '/ɡoʊ streɪt ænd tɜːrn left/', 
            vi: 'Đi thẳng và rẽ trái', 
            wrongSpells: ['Go straightly and turn left', 'Go straight and turning left', 'Go straight and turn leff'] 
        },
        { 
            id: 'd34_q2', 
            en: 'Where is the nearest post office', 
            ipa: '/wer ɪz ðə ˈnɪrɪst poʊst ˈɑːfɪs/', 
            vi: 'Bưu điện gần nhất ở đâu vậy?', 
            wrongSpells: ['Where are the nearest post office', 'Where is the near post office', 'Where is nearest post office'] 
        },
        { 
            id: 'd34_a2', 
            en: 'Take the second turning on the left', 
            ipa: '/teɪk ðə ˈsekənd ˈtɜːrnɪŋ ɑːn ðə left/', 
            vi: 'Rẽ ở ngã rẽ thứ hai bên tay trái', 
            wrongSpells: ['Take second turning on the left', 'Take the second turn on the left', 'Take the second turning in the left'] 
        },
        { 
            id: 'd34_a3', 
            en: 'Go along this street', 
            ipa: '/ɡoʊ əˈlɔːŋ ðɪs striːt/', 
            vi: 'Đi dọc theo con đường này', 
            wrongSpells: ['Go along these street', 'Go along this streets', 'Going along this street'] 
        }
    ]
};

window.ENG6_GAME_MODULES = window.ENG6_GAME_MODULES || {};

// MÀN 1: Hội thoại mẫu & Lý thuyết hỏi/chỉ đường (Day 34)
window.ENG6_GAME_MODULES['grammar-intro-day34'] = {
    title: 'Màn 1: Hội Thoại Mẫu - Hỏi & Chỉ Đường (Directions)',
    render(ctx) {
        ctx.container.innerHTML = `
            <div class="space-y-4">
                <div class="text-center">
                    <span class="px-3 py-1 bg-emerald-100 text-emerald-800 font-bold text-xs rounded-full">Unit 4: Everyday English</span>
                    <h3 class="text-2xl font-black text-slate-800 mt-2">Hỏi & Chỉ Đường Trong Khu Phố</h3>
                    <p class="text-slate-600 text-sm mt-1">Học các mẫu câu giao tiếp khi muốn tìm đường đi đến các địa điểm công cộng!</p>
                </div>

                <div class="bg-white border-2 border-emerald-200 p-3.5 rounded-2xl space-y-2 text-xs md:text-sm shadow-sm">
                    <div class="font-bold text-emerald-700 uppercase tracking-wide text-xs mb-1">💬 Hội thoại mẫu (SGK Tiếng Anh 6):</div>
                    <p><strong class="text-slate-900">Phong:</strong> Excuse me, can you tell me the way to Tan Ky House?</p>
                    <p><strong class="text-emerald-700">Girl:</strong> Sure. Go straight. Take the second turning on the left, and then turn right.</p>
                    <p><strong class="text-slate-900">Phong:</strong> Thank you very much.</p>
                </div>

                <div class="bg-emerald-50 border-2 border-emerald-200 p-4 rounded-2xl space-y-3 text-slate-700 text-sm">
                    <div class="flex items-start space-x-3">
                        <div class="w-8 h-8 rounded-full bg-emerald-600 text-white font-bold flex items-center justify-center flex-shrink-0">1</div>
                        <div>
                            <strong class="text-emerald-900 block font-bold">Mẫu câu HỎI ĐƯỜNG (Asking for directions):</strong>
                            - <span class="font-mono bg-white px-2 py-0.5 rounded border border-emerald-200 font-bold">Excuse me, can you tell me the way to...?</span><br>
                            - <span class="font-mono bg-white px-2 py-0.5 rounded border border-emerald-200 font-bold">Excuse me, where is the nearest...?</span>
                        </div>
                    </div>
                    <div class="flex items-start space-x-3">
                        <div class="w-8 h-8 rounded-full bg-emerald-600 text-white font-bold flex items-center justify-center flex-shrink-0">2</div>
                        <div>
                            <strong class="text-emerald-900 block font-bold">Mẫu câu CHỈ ĐƯỜNG (Giving directions):</strong>
                            - <span class="text-slate-900 font-semibold">Go straight / Walk along this street</span>: Đi thẳng / Đi dọc theo phố.<br>
                            - <span class="text-slate-900 font-semibold">Turn left / Turn right</span>: Rẽ trái / Rẽ phải.<br>
                            - <span class="text-slate-900 font-semibold">Take the second turning on the left</span>: Rẽ ở ngã rẽ thứ hai bên trái.
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

// MÀN 6: Sắp xếp câu hỏi và chỉ đường (Sentence Builder)
window.ENG6_GAME_MODULES['sentence-builder-directions'] = {
    title: 'Màn 6: Ghép Câu Giao Tiếp Hỏi & Chỉ Đường',
    render(ctx) {
        window.day34BuildIndex = window.day34BuildIndex || 0;
        const sentences = [
            { words: ['Can', 'you', 'tell', 'me', 'the', 'way', 'to', 'Tan', 'Ky', 'House'], full: 'Can you tell me the way to Tan Ky House' },
            { words: ['Go', 'straight', 'and', 'turn', 'left'], full: 'Go straight and turn left' },
            { words: ['Where', 'is', 'the', 'nearest', 'post', 'office'], full: 'Where is the nearest post office' },
            { words: ['Take', 'the', 'second', 'turning', 'on', 'the', 'left'], full: 'Take the second turning on the left' },
            { words: ['Go', 'along', 'this', 'street'], full: 'Go along this street' }
        ];

        if (window.day34BuildIndex >= sentences.length) {
            window.day34BuildIndex = 0;
            completeLevel();
            return;
        }

        const currS = sentences[window.day34BuildIndex];
        
        // Khởi tạo mảng xáo trộn ngẫu nhiên cho từng câu hỏi
        if (!window.day34ShuffledWords || window.day34CurrentQuestionIndex !== window.day34BuildIndex) {
            window.day34CurrentQuestionIndex = window.day34BuildIndex;
            let pool = [...currS.words];
            for (let i = pool.length - 1; i > 0; i--) {
                const j = Math.floor(Math.random() * (i + 1));
                [pool[i], pool[j]] = [pool[j], pool[i]];
            }
            window.day34ShuffledWords = pool;
            window.day34SelectedWords = [];
        }

        window.day34SelectedWords = window.day34SelectedWords || [];

        // Lọc các từ chưa được chọn từ kho từ đã xáo trộn
        let availablePool = [...window.day34ShuffledWords];
        window.day34SelectedWords.forEach(sel => {
            const idx = availablePool.indexOf(sel);
            if (idx > -1) availablePool.splice(idx, 1);
        });

        let selectedHTML = window.day34SelectedWords.map((w, i) => {
            const safeWord = w.replace(/'/g, "\\'");
            return `<button onclick="removeDay34Word(${i})" class="px-3 py-2 bg-emerald-600 text-white font-bold rounded-xl text-sm shadow">${w}</button>`;
        }).join('');

        let poolHTML = availablePool.map((w) => {
            const safeWord = w.replace(/'/g, "\\'");
            return `<button onclick="addDay34Word('${safeWord}')" class="px-4 py-2.5 bg-slate-100 hover:bg-slate-200 text-slate-800 font-bold rounded-xl text-sm border-2 border-slate-300">${w}</button>`;
        }).join('');

        const safeFullText = currS.full.replace(/'/g, "\\'");

        ctx.container.innerHTML = `
            <div>
                <div class="bg-emerald-50 border border-emerald-200 p-2.5 rounded-xl text-center mb-3">
                    <span class="text-xs font-bold text-emerald-800">💡 Ghép các từ xáo trộn bên dưới thành câu giao tiếp hoàn chỉnh</span>
                </div>
                <div class="flex justify-between items-center mb-2">
                    <span class="text-xs font-bold text-slate-500">Câu ${window.day34BuildIndex + 1} / ${sentences.length}</span>
                </div>

                <div class="min-h-[60px] p-3 border-2 border-dashed border-emerald-300 bg-white rounded-2xl flex flex-wrap gap-2 items-center mb-4">
                    ${selectedHTML || '<span class="text-xs text-slate-400 font-medium">Bấm các từ xáo trộn bên dưới để ghép câu...</span>'}
                </div>

                <div class="flex flex-wrap gap-2 justify-center mb-6">${poolHTML}</div>

                <div class="text-center space-x-2">
                    <button onclick="checkDay34BuildSentence('${safeFullText}')" class="px-6 py-3 bg-emerald-600 text-white font-extrabold rounded-xl shadow">Kiểm tra</button>
                    <button onclick="resetDay34BuildSentence()" class="px-4 py-3 bg-slate-200 text-slate-700 font-bold rounded-xl">Làm lại</button>
                </div>
            </div>
        `;
    }
};

window.addDay34Word = function(word) {
    playBtnSound();
    window.day34SelectedWords = window.day34SelectedWords || [];
    window.day34SelectedWords.push(word);
    loadLevel(currentLevel);
};

window.removeDay34Word = function(index) {
    playBtnSound();
    window.day34SelectedWords.splice(index, 1);
    loadLevel(currentLevel);
};

window.resetDay34BuildSentence = function() {
    playBtnSound();
    window.day34SelectedWords = [];
    loadLevel(currentLevel);
};

window.checkDay34BuildSentence = function(target) {
    playBtnSound();
    const result = (window.day34SelectedWords || []).join(' ');
    if (result === target) {
        playSound('correct');
        window.day34SelectedWords = [];
        window.day34ShuffledWords = null;
        window.day34BuildIndex++;
        setTimeout(() => { loadLevel(currentLevel); }, 600);
    } else {
        handleWrongAnswer();
    }
};