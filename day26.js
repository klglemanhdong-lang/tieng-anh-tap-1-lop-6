window.ENG6_LESSONS = window.ENG6_LESSONS || {};

window.ENG6_LESSONS[26] = {
    unit: 3, // Thuộc Unit 3: My Friends
    title: "Day 26: Asking about Appearance & Personality",
    description: "Mẫu câu giao tiếp hỏi về ngoại hình và tính cách bạn bè (What does he/she look like?, What is he/she like?)",
    ipa: "/ˈɑːskɪŋ əˈbaʊt əˈpɪrəns ænd ˌpɜːrsəˈnæləti/",
    
    // Cấu hình lộ trình 7 màn hoạt động chuẩn cho Day 26
    activities: [
        'grammar-intro-day26',              // Màn 1: Hội thoại mẫu & Lý thuyết phân biệt 2 câu hỏi
        'multiple-choice',                   // Màn 2: Trắc nghiệm giao tiếp
        'matching-meaning',                  // Màn 3: Nối câu hỏi/trả lời & Nghĩa Tiếng Việt
        'listening',                         // Màn 4: Nghe hội thoại / mẫu câu & chọn đáp án đúng
        'matching-ipa',                      // Màn 5: Nối câu & Phiên âm IPA chuẩn
        'sentence-builder-everyday-u3',      // Màn 6: Ghép câu giao tiếp (xáo trộn từ chuẩn)
        'speaking'                           // Màn 7: Luyện nói AI chuẩn xác
    ],

    vocab: [
        { 
            id: 'd26_q1', 
            en: 'What does your best friend look like', 
            ipa: '/wʌt dʌz jʊər best frend lʊk laɪk/', 
            vi: 'Bạn thân của bạn trông như thế nào? (Hỏi ngoại hình)', 
            wrongSpells: ['What do your best friend look like', 'What does your best friend looks like', 'What is your best friend look like'] 
        },
        { 
            id: 'd26_a1', 
            en: 'She is short with long black hair', 
            ipa: '/ʃiː ɪz ʃɔːrt wɪð lɔːŋ blæk her/', 
            vi: 'Cô ấy thấp với mái tóc đen dài', 
            wrongSpells: ['She are short with long black hair', 'She is short with long hair black', 'She has short with long black hair'] 
        },
        { 
            id: 'd26_q2', 
            en: 'What is she like', 
            ipa: '/wʌt ɪz ʃiː laɪk/', 
            vi: 'Cô ấy có tính cách như thế nào? (Hỏi tính cách)', 
            wrongSpells: ['What does she like', 'What are she like', 'What is she look like'] 
        },
        { 
            id: 'd26_a2', 
            en: 'She is very kind and creative', 
            ipa: '/ʃiː ɪz ˈveri kaɪnd ænd kriˈeɪtɪv/', 
            vi: 'Cô ấy rất tốt bụng và sáng tạo', 
            wrongSpells: ['She are very kind and creative', 'She has very kind and creative', 'She is very kind and creatively'] 
        },
        { 
            id: 'd26_a3', 
            en: 'He is tall with big brown eyes', 
            ipa: '/hiː ɪz tɔːl wɪð bɪɡ braʊn aɪz/', 
            vi: 'Cậu ấy cao với đôi mắt nâu to', 
            wrongSpells: ['He are tall with big brown eyes', 'He has tall with big brown eyes', 'He is tall with brown big eyes'] 
        }
    ]
};

window.ENG6_GAME_MODULES = window.ENG6_GAME_MODULES || {};

// MÀN 1: Hội thoại mẫu & Lý thuyết phân biệt hỏi ngoại hình và tính cách (Day 26)
window.ENG6_GAME_MODULES['grammar-intro-day26'] = {
    title: 'Màn 1: Hội Thoại Mẫu - Hỏi Về Ngoại Hình & Tính Cách',
    render(ctx) {
        ctx.container.innerHTML = `
            <div class="space-y-4">
                <div class="text-center">
                    <span class="px-3 py-1 bg-pink-100 text-pink-800 font-bold text-xs rounded-full">Unit 3: Everyday English</span>
                    <h3 class="text-2xl font-black text-slate-800 mt-2">Hỏi Về Ngoại Hình & Tính Cách</h3>
                    <p class="text-slate-600 text-sm mt-1">Phân biệt 2 mẫu câu giao tiếp cực kỳ quan trọng khi miêu tả bạn bè!</p>
                </div>

                <div class="bg-white border-2 border-pink-200 p-3.5 rounded-2xl space-y-2 text-xs md:text-sm shadow-sm">
                    <div class="font-bold text-pink-700 uppercase tracking-wide text-xs mb-1">💬 Hội thoại mẫu (Linda & Mi):</div>
                    <p><strong class="text-slate-900">Linda:</strong> What does your best friend look like?</p>
                    <p><strong class="text-pink-700">Mi:</strong> She is short with long black hair. She has bright brown eyes.</p>
                    <p><strong class="text-slate-900">Linda:</strong> What is she like?</p>
                    <p><strong class="text-pink-700">Mi:</strong> She is very kind and creative.</p>
                </div>

                <div class="bg-pink-50 border-2 border-pink-200 p-4 rounded-2xl space-y-3 text-slate-700 text-sm">
                    <div class="flex items-start space-x-3">
                        <div class="w-8 h-8 rounded-full bg-pink-600 text-white font-bold flex items-center justify-center flex-shrink-0">1</div>
                        <div>
                            <strong class="text-pink-900 block font-bold">Hỏi về NGOẠI HÌNH (Appearance):</strong>
                            - Câu hỏi: <span class="font-mono bg-white px-2 py-0.5 rounded border border-pink-200 font-bold">What does + he/she + look like?</span><br>
                            - Trả lời: Dùng <span class="font-bold text-rose-600">is</span> (cho dáng người) hoặc <span class="font-bold text-rose-600">has</span> (cho tóc, mắt).<br>
                            - <span class="text-xs text-pink-900 font-semibold">👉 Ví dụ: She is short with long black hair.</span>
                        </div>
                    </div>
                    <div class="flex items-start space-x-3">
                        <div class="w-8 h-8 rounded-full bg-pink-600 text-white font-bold flex items-center justify-center flex-shrink-0">2</div>
                        <div>
                            <strong class="text-pink-900 block font-bold">Hỏi về TÍNH CÁCH (Personality):</strong>
                            - Câu hỏi: <span class="font-mono bg-white px-2 py-0.5 rounded border border-pink-200 font-bold">What is + he/she + like?</span><br>
                            - Trả lời: Dùng <span class="font-bold text-rose-600">is</span> + Tính từ tính cách.<br>
                            - <span class="text-xs text-pink-900 font-semibold">👉 Ví dụ: She is very kind and creative.</span>
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

// MÀN 6: Ghép câu giao tiếp (Sentence Builder)
window.ENG6_GAME_MODULES['sentence-builder-everyday-u3'] = {
    title: 'Màn 6: Ghép Câu Giao Tiếp Ngoại Hình & Tính Cách',
    render(ctx) {
        window.day26BuildIndex = window.day26BuildIndex || 0;
        const sentences = [
            { words: ['What', 'does', 'your', 'best', 'friend', 'look', 'like'], full: 'What does your best friend look like' },
            { words: ['She', 'is', 'short', 'with', 'long', 'black', 'hair'], full: 'She is short with long black hair' },
            { words: ['What', 'is', 'she', 'like'], full: 'What is she like' },
            { words: ['She', 'is', 'very', 'kind', 'and', 'creative'], full: 'She is very kind and creative' },
            { words: ['He', 'is', 'tall', 'with', 'big', 'brown', 'eyes'], full: 'He is tall with big brown eyes' }
        ];

        if (window.day26BuildIndex >= sentences.length) {
            window.day26BuildIndex = 0;
            completeLevel();
            return;
        }

        const currS = sentences[window.day26BuildIndex];
        
        // Khởi tạo mảng xáo trộn ngẫu nhiên cho từng câu hỏi
        if (!window.day26ShuffledWords || window.day26CurrentQuestionIndex !== window.day26BuildIndex) {
            window.day26CurrentQuestionIndex = window.day26BuildIndex;
            let pool = [...currS.words];
            for (let i = pool.length - 1; i > 0; i--) {
                const j = Math.floor(Math.random() * (i + 1));
                [pool[i], pool[j]] = [pool[j], pool[i]];
            }
            window.day26ShuffledWords = pool;
            window.day26SelectedWords = [];
        }

        window.day26SelectedWords = window.day26SelectedWords || [];

        // Lọc các từ chưa được chọn từ kho từ đã xáo trộn
        let availablePool = [...window.day26ShuffledWords];
        window.day26SelectedWords.forEach(sel => {
            const idx = availablePool.indexOf(sel);
            if (idx > -1) availablePool.splice(idx, 1);
        });

        let selectedHTML = window.day26SelectedWords.map((w, i) => {
            const safeWord = w.replace(/'/g, "\\'");
            return `<button onclick="removeDay26Word(${i})" class="px-3 py-2 bg-pink-600 text-white font-bold rounded-xl text-sm shadow">${w}</button>`;
        }).join('');

        let poolHTML = availablePool.map((w) => {
            const safeWord = w.replace(/'/g, "\\'");
            return `<button onclick="addDay26Word('${safeWord}')" class="px-4 py-2.5 bg-slate-100 hover:bg-slate-200 text-slate-800 font-bold rounded-xl text-sm border-2 border-slate-300">${w}</button>`;
        }).join('');

        const safeFullText = currS.full.replace(/'/g, "\\'");

        ctx.container.innerHTML = `
            <div>
                <div class="bg-pink-50 border border-pink-200 p-2.5 rounded-xl text-center mb-3">
                    <span class="text-xs font-bold text-pink-800">💡 Ghi nhớ: Look like (Ngoại hình) | Is ... like (Tính cách)</span>
                </div>
                <div class="flex justify-between items-center mb-2">
                    <span class="text-xs font-bold text-slate-500">Câu ${window.day26BuildIndex + 1} / ${sentences.length}</span>
                </div>

                <div class="min-h-[60px] p-3 border-2 border-dashed border-pink-300 bg-white rounded-2xl flex flex-wrap gap-2 items-center mb-4">
                    ${selectedHTML || '<span class="text-xs text-slate-400 font-medium">Bấm các từ xáo trộn bên dưới để ghép câu...</span>'}
                </div>

                <div class="flex flex-wrap gap-2 justify-center mb-6">${poolHTML}</div>

                <div class="text-center space-x-2">
                    <button onclick="checkDay26BuildSentence('${safeFullText}')" class="px-6 py-3 bg-emerald-600 text-white font-extrabold rounded-xl shadow">Kiểm tra</button>
                    <button onclick="resetDay26BuildSentence()" class="px-4 py-3 bg-slate-200 text-slate-700 font-bold rounded-xl">Làm lại</button>
                </div>
            </div>
        `;
    }
};

window.addDay26Word = function(word) {
    playBtnSound();
    window.day26SelectedWords = window.day26SelectedWords || [];
    window.day26SelectedWords.push(word);
    loadLevel(currentLevel);
};

window.removeDay26Word = function(index) {
    playBtnSound();
    window.day26SelectedWords.splice(index, 1);
    loadLevel(currentLevel);
};

window.resetDay26BuildSentence = function() {
    playBtnSound();
    window.day26SelectedWords = [];
    loadLevel(currentLevel);
};

window.checkDay26BuildSentence = function(target) {
    playBtnSound();
    const result = (window.day26SelectedWords || []).join(' ');
    if (result === target) {
        playSound('correct');
        window.day26SelectedWords = [];
        window.day26ShuffledWords = null;
        window.day26BuildIndex++;
        setTimeout(() => { loadLevel(currentLevel); }, 600);
    } else {
        handleWrongAnswer();
    }
};