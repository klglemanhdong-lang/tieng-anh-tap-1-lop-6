window.ENG6_LESSONS = window.ENG6_LESSONS || {};

window.ENG6_LESSONS[56] = {
    unit: 6, // Thuộc Unit 6: Our Tet Holiday
    title: "Day 56: Speaking - What to Do at Tet",
    description: "Thảo luận nhóm về những việc trẻ em nên và không nên làm vào dịp Tết (We should dress beautifully at Tet. - I agree. But we shouldn't ask for lucky money.)",
    ipa: "/ˈspiːkɪŋ ˈtɔːkɪŋ əˈbaʊt wʌt tuː duː ænd nɑːt tuː duː æt tet/",
    
    // Cấu hình lộ trình 7 màn hoạt động chuẩn cho Day 56
    activities: [
        'grammar-intro-day56',         // Màn 1: Hội thoại mẫu & Lý thuyết thảo luận nên/không nên làm ngày Tết
        'multiple-choice',              // Màn 2: Trắc nghiệm giao tiếp nội quy ngày Tết
        'matching-meaning',             // Màn 3: Nối ý kiến thảo luận & Nghĩa Tiếng Việt
        'listening',                    // Màn 4: Nghe mẫu thảo luận & chọn đáp án đúng
        'matching-ipa',                 // Màn 5: Nối câu & Phiên âm IPA chuẩn
        'sentence-builder-speaking-u6', // Màn 6: Ghép câu thảo luận việc nên và không nên làm
        'speaking'                      // Màn 7: Luyện nói AI chuẩn xác
    ],

    vocab: [
        { 
            id: 'd56_q1', 
            en: 'We should dress beautifully at Tet', 
            ipa: '/wiː ʃʊd dres ˈbjuːtɪfəli æt tet/', 
            vi: 'Chúng ta nên ăn mặc đẹp vào dịp Tết', 
            wrongSpells: ['We shouldn\'t dress beautifully', 'We should dresses beautifully', 'We should dressing beautifully'] 
        },
        { 
            id: 'd56_a1', 
            en: 'I agree But we should not ask for lucky money', 
            ipa: '/aɪ əˈɡriː bʌt wiː ʃʊd nɑːt æsk fɔːr ˈlʌki ˈmʌni/', 
            vi: 'Tôi đồng ý. Nhưng chúng ta không nên đòi tiền lì xì', 
            wrongSpells: ['I agree But we should ask for lucky money', 'I agrees But we should not ask', 'I agree But we shouldn\'t asks'] 
        },
        { 
            id: 'd56_q2', 
            en: 'Children should behave well during Tet', 
            ipa: '/ˈtʃɪldrən ʃʊd bɪˈheɪv wel ˈdʊrɪŋ tet/', 
            vi: 'Trẻ em nên cư xử ngoan ngoãn trong dịp Tết', 
            wrongSpells: ['Children shouldn\'t behave well', 'Children should behaves well', 'Children should behaving well'] 
        },
        { 
            id: 'd56_a2', 
            en: 'We should not break things at Tet', 
            ipa: '/wiː ʃʊd nɑːt breɪk θɪŋz æt tet/', 
            vi: 'Chúng ta không nên làm vỡ đồ đạc vào dịp Tết', 
            wrongSpells: ['We should break things at Tet', 'We shouldn\'t breaks things', 'We shouldn\'t broke things'] 
        },
        { 
            id: 'd56_q3', 
            en: 'We should help our houses decoration', 
            ipa: '/wiː ʃʊd help aʊər ˈhoʊmz ˌdekəˈreɪʃn/', 
            vi: 'Chúng ta nên giúp đỡ trang hoàng nhà cửa', 
            wrongSpells: ['We shouldn\'t help our houses', 'We should helps our houses', 'We should helping houses'] 
        }
    ]
};

window.ENG6_GAME_MODULES = window.ENG6_GAME_MODULES || {};

// MÀN 1: Hội thoại mẫu & Lý thuyết thảo luận nên/không nên làm ngày Tết (Day 56)
window.ENG6_GAME_MODULES['grammar-intro-day56'] = {
    title: 'Màn 1: Hội Thoại Mẫu - Thảo Luận Việc Nên & Không Nên Làm Ngày Tết',
    render(ctx) {
        ctx.container.innerHTML = `
            <div class="space-y-4">
                <div class="text-center">
                    <span class="px-3 py-1 bg-amber-100 text-amber-800 font-bold text-xs rounded-full">Unit 6: Speaking Skills</span>
                    <h3 class="text-2xl font-black text-slate-800 mt-2">Nói Về Những Việc Nên & Không Nên Làm Ở Tết</h3>
                    <p class="text-slate-600 text-sm mt-1">Luyện tập mẫu câu đưa ra ý kiến đồng tình hoặc phản biện về các quy tắc dịp Tết!</p>
                </div>

                <div class="bg-white border-2 border-amber-200 p-3.5 rounded-2xl space-y-2 text-xs md:text-sm shadow-sm">
                    <div class="font-bold text-amber-700 uppercase tracking-wide text-xs mb-1">💬 Hội thoại mẫu (SGK Tiếng Anh 6 trang 65):</div>
                    <p><strong class="text-slate-900">Student A:</strong> We should dress beautifully at Tet.</p>
                    <p><strong class="text-amber-700">Student B:</strong> I agree. But we shouldn't ask for lucky money.</p>
                    <p><strong class="text-slate-900">Student C:</strong> No, we shouldn't.</p>
                </div>

                <div class="bg-amber-50 border-2 border-amber-200 p-4 rounded-2xl space-y-3 text-slate-700 text-sm">
                    <div class="flex items-start space-x-3">
                        <div class="w-8 h-8 rounded-full bg-amber-600 text-white font-bold flex items-center justify-center flex-shrink-0">1</div>
                        <div>
                            <strong class="text-amber-900 block font-bold">Đưa ra ý kiến (Suggestions):</strong>
                            - <span class="font-mono bg-white px-2 py-0.5 rounded border border-amber-200 font-bold">We should dress beautifully at Tet.</span>
                        </div>
                    </div>
                    <div class="flex items-start space-x-3">
                        <div class="w-8 h-8 rounded-full bg-amber-600 text-white font-bold flex items-center justify-center flex-shrink-0">2</div>
                        <div>
                            <strong class="text-amber-900 block font-bold">Đồng tình và bổ sung ý kiến khác:</strong>
                            - <span class="font-mono bg-white px-2 py-0.5 rounded border border-amber-200 font-bold">I agree. But we shouldn't...</span>
                        </div>
                    </div>
                </div>

                <div class="text-center pt-2">
                    <button onclick="playBtnSound(); completeLevel()" class="px-8 py-3.5 bg-gradient-to-r from-amber-600 to-orange-600 text-white font-extrabold rounded-2xl shadow-lg hover:opacity-95 transition-all text-base">
                        Đã hiểu rõ, vào luyện tập ngay! <i class="fa-solid fa-arrow-right ml-2"></i>
                    </button>
                </div>
            </div>
        `;
    }
};

// MÀN 6: Sắp xếp câu thảo luận việc nên và không nên làm (Sentence Builder)
window.ENG6_GAME_MODULES['sentence-builder-speaking-u6'] = {
    title: 'Màn 6: Ghép Câu Thảo Luận Việc Nên & Không Nên Làm Ngày Tết',
    render(ctx) {
        window.day56BuildIndex = window.day56BuildIndex || 0;
        const sentences = [
            { words: ['We', 'should', 'dress', 'beautifully', 'at', 'Tet'], full: 'We should dress beautifully at Tet' },
            { words: ['I', 'agree', 'But', 'we', 'should', 'not', 'ask', 'for', 'lucky', 'money'], full: 'I agree But we should not ask for lucky money' },
            { words: ['Children', 'should', 'behave', 'well', 'during', 'Tet'], full: 'Children should behave well during Tet' },
            { words: ['We', 'should', 'not', 'break', 'things', 'at', 'Tet'], full: 'We should not break things at Tet' },
            { words: ['We', 'should', 'help', 'our', 'houses', 'decoration'], full: 'We should help our houses decoration' }
        ];

        if (window.day56BuildIndex >= sentences.length) {
            window.day56BuildIndex = 0;
            completeLevel();
            return;
        }

        const currS = sentences[window.day56BuildIndex];
        
        // Khởi tạo mảng xáo trộn ngẫu nhiên cho từng câu hỏi
        if (!window.day56ShuffledWords || window.day56CurrentQuestionIndex !== window.day56BuildIndex) {
            window.day56CurrentQuestionIndex = window.day56BuildIndex;
            let pool = [...currS.words];
            for (let i = pool.length - 1; i > 0; i--) {
                const j = Math.floor(Math.random() * (i + 1));
                [pool[i], pool[j]] = [pool[j], pool[i]];
            }
            window.day56ShuffledWords = pool;
            window.day56SelectedWords = [];
        }

        window.day56SelectedWords = window.day56SelectedWords || [];

        // Lọc các từ chưa được chọn từ kho từ đã xáo trộn
        let availablePool = [...window.day56ShuffledWords];
        window.day56SelectedWords.forEach(sel => {
            const idx = availablePool.indexOf(sel);
            if (idx > -1) availablePool.splice(idx, 1);
        });

        let selectedHTML = window.day56SelectedWords.map((w, i) => {
            const safeWord = w.replace(/'/g, "\\'");
            return `<button onclick="removeDay56Word(${i})" class="px-3 py-2 bg-amber-600 text-white font-bold rounded-xl text-sm shadow">${w}</button>`;
        }).join('');

        let poolHTML = availablePool.map((w) => {
            const safeWord = w.replace(/'/g, "\\'");
            return `<button onclick="addDay56Word('${safeWord}')" class="px-4 py-2.5 bg-slate-100 hover:bg-slate-200 text-slate-800 font-bold rounded-xl text-sm border-2 border-slate-300">${w}</button>`;
        }).join('');

        const safeFullText = currS.full.replace(/'/g, "\\'");

        ctx.container.innerHTML = `
            <div>
                <div class="bg-amber-50 border border-amber-200 p-2.5 rounded-xl text-center mb-3">
                    <span class="text-xs font-bold text-amber-800">💡 Ghép các từ xáo trộn bên dưới thành câu thảo luận nội quy Tết hoàn chỉnh</span>
                </div>
                <div class="flex justify-between items-center mb-2">
                    <span class="text-xs font-bold text-slate-500">Câu ${window.day56BuildIndex + 1} / ${sentences.length}</span>
                </div>

                <div class="min-h-[60px] p-3 border-2 border-dashed border-amber-300 bg-white rounded-2xl flex flex-wrap gap-2 items-center mb-4">
                    ${selectedHTML || '<span class="text-xs text-slate-400 font-medium">Bấm các từ xáo trộn bên dưới để ghép câu...</span>'}
                </div>

                <div class="flex flex-wrap gap-2 justify-center mb-6">${poolHTML}</div>

                <div class="text-center space-x-2">
                    <button onclick="checkDay56BuildSentence('${safeFullText}')" class="px-6 py-3 bg-amber-600 text-white font-extrabold rounded-xl shadow">Kiểm tra</button>
                    <button onclick="resetDay56BuildSentence()" class="px-4 py-3 bg-slate-200 text-slate-700 font-bold rounded-xl">Làm lại</button>
                </div>
            </div>
        `;
    }
};

window.addDay56Word = function(word) {
    playBtnSound();
    window.day56SelectedWords = window.day56SelectedWords || [];
    window.day56SelectedWords.push(word);
    loadLevel(currentLevel);
};

window.removeDay56Word = function(index) {
    playBtnSound();
    window.day56SelectedWords.splice(index, 1);
    loadLevel(currentLevel);
};

window.resetDay56BuildSentence = function() {
    playBtnSound();
    window.day56SelectedWords = [];
    loadLevel(currentLevel);
};

window.checkDay56BuildSentence = function(target) {
    playBtnSound();
    const result = (window.day56SelectedWords || []).join(' ');
    if (result === target) {
        playSound('correct');
        window.day56SelectedWords = [];
        window.day56ShuffledWords = null;
        window.day56BuildIndex++;
        setTimeout(() => { loadLevel(currentLevel); }, 600);
    } else {
        handleWrongAnswer();
    }
};