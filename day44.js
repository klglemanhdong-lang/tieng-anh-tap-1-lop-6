window.ENG6_LESSONS = window.ENG6_LESSONS || {};

window.ENG6_LESSONS[44] = {
    unit: 5, // Thuộc Unit 5: Natural Wonders of Viet Nam
    title: "Day 44: Making and Accepting Appointments",
    description: "Mẫu câu rủ rê, lên lịch hẹn đi chơi, đi dã ngoại (Let us go for a picnic this Sunday. - That is fine. How about 9 o'clock?)",
    ipa: "/ˈmeɪkɪŋ ænd əkˈseptɪŋ əˈpɔɪntmənts/",
    
    // Cấu hình lộ trình 7 màn hoạt động chuẩn cho Day 44
    activities: [
        'grammar-intro-day44',         // Màn 1: Hội thoại mẫu & Lý thuyết rủ rê / hẹn giờ
        'multiple-choice',              // Màn 2: Trắc nghiệm giao tiếp lên lịch hẹn
        'matching-meaning',             // Màn 3: Nối câu rủ rê/đáp lại & Nghĩa Tiếng Việt
        'listening',                    // Màn 4: Nghe đoạn hội thoại hẹn giờ & chọn đáp án
        'matching-ipa',                 // Màn 5: Nối câu & Phiên âm IPA chuẩn
        'sentence-builder-appointment', // Màn 6: Ghép câu hẹn hò (Let us go for a picnic this Sunday)
        'speaking'                      // Màn 7: Luyện nói AI chuẩn xác
    ],

    vocab: [
        { 
            id: 'd44_q1', 
            en: 'Let us go for a picnic this Sunday', 
            ipa: '/let ʌs ɡoʊ fɔːr ə ˈpɪknɪk ðɪs ˈsʌndeɪ/', 
            vi: 'Chúng ta hãy đi dã ngoại vào Chủ Nhật này nhé', 
            wrongSpells: ['Let us goes for a picnic', 'Let us go for picnic this Sunday', 'Let us to go for a picnic'] 
        },
        { 
            id: 'd44_a1', 
            en: 'That is fine', 
            ipa: '/ðæt ɪz faɪn/', 
            vi: 'Điều đó thật tuyệt / Được thôi', 
            wrongSpells: ['That are fine', 'That is nicely', 'That is fin'] 
        },
        { 
            id: 'd44_q2', 
            en: 'How about nine o clock', 
            ipa: '/haʊ əˈbaʊt naɪn ə klɑːk/', 
            vi: 'Còn 9 giờ thì sao?', 
            wrongSpells: ['How about nine o\'clock', 'How about 9 o clock', 'How about at nine o clock'] 
        },
        { 
            id: 'd44_a2', 
            en: 'Sure I will meet you at that time', 
            ipa: '/ʃʊr aɪ wɪl miːt juː æt ðæt taɪm/', 
            vi: 'Chắc chắn rồi, tôi sẽ gặp bạn vào thời gian đó', 
            wrongSpells: ['Sure I meet you at that time', 'Sure I will meets you', 'Sure I will meeting you'] 
        },
        { 
            id: 'd44_q3', 
            en: 'What time can we meet', 
            ipa: '/wʌt taɪm kæn wiː miːt/', 
            vi: 'Chúng ta có thể gặp nhau lúc mấy giờ?', 
            wrongSpells: ['What time can we meets', 'What time we can meet', 'What time can meet us'] 
        }
    ]
};

window.ENG6_GAME_MODULES = window.ENG6_GAME_MODULES || {};

// MÀN 1: Hội thoại mẫu & Lý thuyết rủ rê / hẹn giờ (Day 44)
window.ENG6_GAME_MODULES['grammar-intro-day44'] = {
    title: 'Màn 1: Hội Thoại Mẫu - Lên Lịch Hẹn & Rủ Rê',
    render(ctx) {
        ctx.container.innerHTML = `
            <div class="space-y-4">
                <div class="text-center">
                    <span class="px-3 py-1 bg-teal-100 text-teal-800 font-bold text-xs rounded-full">Unit 5: Everyday English</span>
                    <h3 class="text-2xl font-black text-slate-800 mt-2">Making and Accepting Appointments</h3>
                    <p class="text-slate-600 text-sm mt-1">Học cách rủ rê bạn bè đi chơi và thống nhất thời gian gặp mặt!</p>
                </div>

                <div class="bg-white border-2 border-teal-200 p-3.5 rounded-2xl space-y-2 text-xs md:text-sm shadow-sm">
                    <div class="font-bold text-teal-700 uppercase tracking-wide text-xs mb-1">💬 Hội thoại mẫu (SGK Tiếng Anh 6 trang 53)[cite: 12]:</div>
                    <p><strong class="text-slate-900">Steven:</strong> Duong, let us go for a picnic this Sunday[cite: 12].</p>
                    <p><strong class="text-teal-700">Duong:</strong> That is fine. What time can we meet?[cite: 12]</p>
                    <p><strong class="text-slate-900">Steven:</strong> How about 9 o'clock?[cite: 12]</p>
                    <p><strong class="text-teal-700">Duong:</strong> Sure. I will meet you at that time[cite: 12].</p>
                </div>

                <div class="bg-teal-50 border-2 border-teal-200 p-4 rounded-2xl space-y-3 text-slate-700 text-sm">
                    <div class="flex items-start space-x-3">
                        <div class="w-8 h-8 rounded-full bg-teal-600 text-white font-bold flex items-center justify-center flex-shrink-0">1</div>
                        <div>
                            <strong class="text-teal-900 block font-bold">Mẫu câu RỦ RÊ (Making appointments):</strong>
                            - <span class="font-mono bg-white px-2 py-0.5 rounded border border-teal-200 font-bold">Let us go for a picnic...</span>[cite: 12]<br>
                            - <span class="font-mono bg-white px-2 py-0.5 rounded border border-teal-200 font-bold">How about 9 o'clock?</span>[cite: 12]
                        </div>
                    </div>
                    <div class="flex items-start space-x-3">
                        <div class="w-8 h-8 rounded-full bg-teal-600 text-white font-bold flex items-center justify-center flex-shrink-0">2</div>
                        <div>
                            <strong class="text-teal-900 block font-bold">Mẫu câu CHẤP NHẬN HẸN (Accepting appointments):</strong>
                            - <span class="text-slate-900 font-semibold">That is fine.</span>[cite: 12]<br>
                            - <span class="text-slate-900 font-semibold">Sure. I will meet you at that time.</span>[cite: 12]
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

// MÀN 6: Sắp xếp câu hẹn hò (Sentence Builder)
window.ENG6_GAME_MODULES['sentence-builder-appointment'] = {
    title: 'Màn 6: Ghép Câu Lên Lịch Hẹn & Rủ Rê',
    render(ctx) {
        window.day44BuildIndex = window.day44BuildIndex || 0;
        const sentences = [
            { words: ['Let', 'us', 'go', 'for', 'a', 'picnic', 'this', 'Sunday'], full: 'Let us go for a picnic this Sunday' },
            { words: ['That', 'is', 'fine'], full: 'That is fine' },
            { words: ['What', 'time', 'can', 'we', 'meet'], full: 'What time can we meet' },
            { words: ['How', 'about', 'nine', 'o', 'clock'], full: 'How about nine o clock' },
            { words: ['Sure', 'I', 'will', 'meet', 'you', 'at', 'that', 'time'], full: 'Sure I will meet you at that time' }
        ];

        if (window.day44BuildIndex >= sentences.length) {
            window.day44BuildIndex = 0;
            completeLevel();
            return;
        }

        const currS = sentences[window.day44BuildIndex];
        
        // Khởi tạo mảng xáo trộn ngẫu nhiên cho từng câu hỏi
        if (!window.day44ShuffledWords || window.day44CurrentQuestionIndex !== window.day44BuildIndex) {
            window.day44CurrentQuestionIndex = window.day44BuildIndex;
            let pool = [...currS.words];
            for (let i = pool.length - 1; i > 0; i--) {
                const j = Math.floor(Math.random() * (i + 1));
                [pool[i], pool[j]] = [pool[j], pool[i]];
            }
            window.day44ShuffledWords = pool;
            window.day44SelectedWords = [];
        }

        window.day44SelectedWords = window.day44SelectedWords || [];

        // Lọc các từ chưa được chọn từ kho từ đã xáo trộn
        let availablePool = [...window.day44ShuffledWords];
        window.day44SelectedWords.forEach(sel => {
            const idx = availablePool.indexOf(sel);
            if (idx > -1) availablePool.splice(idx, 1);
        });

        let selectedHTML = window.day44SelectedWords.map((w, i) => {
            const safeWord = w.replace(/'/g, "\\'");
            return `<button onclick="removeDay44Word(${i})" class="px-3 py-2 bg-teal-600 text-white font-bold rounded-xl text-sm shadow">${w}</button>`;
        }).join('');

        let poolHTML = availablePool.map((w) => {
            const safeWord = w.replace(/'/g, "\\'");
            return `<button onclick="addDay44Word('${safeWord}')" class="px-4 py-2.5 bg-slate-100 hover:bg-slate-200 text-slate-800 font-bold rounded-xl text-sm border-2 border-slate-300">${w}</button>`;
        }).join('');

        const safeFullText = currS.full.replace(/'/g, "\\'");

        ctx.container.innerHTML = `
            <div>
                <div class="bg-teal-50 border border-teal-200 p-2.5 rounded-xl text-center mb-3">
                    <span class="text-xs font-bold text-teal-800">💡 Ghép các từ xáo trộn bên dưới thành câu giao tiếp lịch hẹn hoàn chỉnh</span>
                </div>
                <div class="flex justify-between items-center mb-2">
                    <span class="text-xs font-bold text-slate-500">Câu ${window.day44BuildIndex + 1} / ${sentences.length}</span>
                </div>

                <div class="min-h-[60px] p-3 border-2 border-dashed border-teal-300 bg-white rounded-2xl flex flex-wrap gap-2 items-center mb-4">
                    ${selectedHTML || '<span class="text-xs text-slate-400 font-medium">Bấm các từ xáo trộn bên dưới để ghép câu...</span>'}
                </div>

                <div class="flex flex-wrap gap-2 justify-center mb-6">${poolHTML}</div>

                <div class="text-center space-x-2">
                    <button onclick="checkDay44BuildSentence('${safeFullText}')" class="px-6 py-3 bg-teal-600 text-white font-extrabold rounded-xl shadow">Kiểm tra</button>
                    <button onclick="resetDay44BuildSentence()" class="px-4 py-3 bg-slate-200 text-slate-700 font-bold rounded-xl">Làm lại</button>
                </div>
            </div>
        `;
    }
};

window.addDay44Word = function(word) {
    playBtnSound();
    window.day44SelectedWords = window.day44SelectedWords || [];
    window.day44SelectedWords.push(word);
    loadLevel(currentLevel);
};

window.removeDay44Word = function(index) {
    playBtnSound();
    window.day44SelectedWords.splice(index, 1);
    loadLevel(currentLevel);
};

window.resetDay44BuildSentence = function() {
    playBtnSound();
    window.day44SelectedWords = [];
    loadLevel(currentLevel);
};

window.checkDay44BuildSentence = function(target) {
    playBtnSound();
    const result = (window.day44SelectedWords || []).join(' ');
    if (result === target) {
        playSound('correct');
        window.day44SelectedWords = [];
        window.day44ShuffledWords = null;
        window.day44BuildIndex++;
        setTimeout(() => { loadLevel(currentLevel); }, 600);
    } else {
        handleWrongAnswer();
    }
};