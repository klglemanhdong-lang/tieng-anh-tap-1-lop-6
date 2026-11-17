window.ENG6_LESSONS = window.ENG6_LESSONS || {};

window.ENG6_LESSONS[54] = {
    unit: 6, // Thuộc Unit 6: Our Tet Holiday
    title: "Day 54: Listening - Preparations for Tet",
    description: "Nghe đoạn hội thoại về công tác chuẩn bị đón Tết của gia đình Nguyen (Nguyen is writing to his penfriend Tom about how his family prepares for Tet.)",
    ipa: "/ˈlɪsnɪŋ ˌprepəˈreɪʃnz fɔːr tet/",
    
    // Cấu hình lộ trình 7 màn hoạt động chuẩn cho Day 54
    activities: [
        'grammar-intro-day54',         // Màn 1: Giới thiệu bài nghe & Công tác chuẩn bị Tết
        'multiple-choice',              // Màn 2: Trắc nghiệm thông tin bài nghe Đúng/Sai (T/F)
        'matching-meaning',             // Màn 3: Nối từ vựng chuẩn bị Tết & Nghĩa Tiếng Việt
        'listening',                    // Màn 4: Nghe đoạn băng & chọn đáp án đúng
        'matching-ipa',                 // Màn 5: Nối câu & Phiên âm IPA chuẩn
        'sentence-builder-preparations',// Màn 6: Ghép câu tóm tắt chuẩn bị Tết
        'spelling'                      // Màn 7: Kiểm tra chính tả từ vựng bài nghe
    ],

    vocab: [
        { 
            id: 'd54_v1', 
            en: 'Nguyen is writing to his penfriend', 
            ipa: '/ˈnwɪən ɪz ˈraɪtɪŋ tuː hɪz ˈpenfrend/', 
            vi: 'Nguyen đang viết thư cho bạn qua thư tín', 
            wrongSpells: ['Nguyen are writing to his penfriend', 'Nguyen is write to his penfriend', 'Nguyen is writing to penfriend'] 
        },
        { 
            id: 'd54_v2', 
            en: 'His family prepares for Tet', 
            ipa: '/hɪz ˈfæməlɪ prɪˈperz fɔːr tet/', 
            vi: 'Gia đình anh ấy chuẩn bị cho ngày Tết', 
            wrongSpells: ['His family prepare for Tet', 'His family preparing for Tet', 'His families prepares for Tet'] 
        },
        { 
            id: 'd54_v3', 
            en: 'They clean their homes and decorate with flowers', 
            ipa: '/ðeɪ kliːn ðeɪr hoʊmz ænd ˈdekəreɪt wɪð ˈflaʊərz/', 
            vi: 'Họ dọn dẹp nhà cửa và trang trí bằng hoa', 
            wrongSpells: ['They cleans their homes', 'They clean their home and decorating', 'They cleaned their homes'] 
        },
        { 
            id: 'd54_v4', 
            en: 'Children get lucky money at Tet', 
            ipa: '/ˈtʃɪldrən ɡet ˈlʌki ˈmʌni æt tet/', 
            vi: 'Trẻ em nhận được tiền lì xì vào dịp Tết', 
            wrongSpells: ['Children gets lucky money', 'Children got lucky money', 'Children get luck money'] 
        },
        { 
            id: 'd54_v5', 
            en: 'We should not break anything at Tet', 
            ipa: '/wiː ʃʊd nɑːt breɪk ˈeniθɪŋ æt tet/', 
            vi: 'Chúng ta không nên làm vỡ bất cứ thứ gì vào dịp Tết', 
            wrongSpells: ['We should break anything', 'We shouldn\'t breaks anything', 'We shouldn\'t broke anything'] 
        }
    ]
};

window.ENG6_GAME_MODULES = window.ENG6_GAME_MODULES || {};

// MÀN 1: Giới thiệu bài nghe & Công tác chuẩn bị Tết (Day 54)
window.ENG6_GAME_MODULES['grammar-intro-day54'] = {
    title: 'Màn 1: Giới Thiệu Bài Nghe - Chuẩn Bị Đón Tết',
    render(ctx) {
        ctx.container.innerHTML = `
            <div class="space-y-4">
                <div class="text-center">
                    <span class="px-3 py-1 bg-amber-100 text-amber-800 font-bold text-xs rounded-full">Unit 6: Skills 2 (Listening)</span>
                    <h3 class="text-2xl font-black text-slate-800 mt-2">Preparations for Tet</h3>
                    <p class="text-slate-600 text-sm mt-1">Lắng nghe và tìm hiểu về các công việc chuẩn bị đón năm mới của gia đình bạn Nguyen!</p>
                </div>

                <div class="bg-white border-2 border-amber-200 p-3.5 rounded-2xl space-y-2 text-xs md:text-sm shadow-sm">
                    <div class="font-bold text-amber-700 uppercase tracking-wide text-xs mb-1">🎧 Nội dung bài nghe (SGK trang 65):</div>
                    <p class="text-slate-700">"Nguyen is writing to his penfriend Tom about how his family prepares for Tet. They clean their homes, decorate with peach flowers, cook banh chung, and children get lucky money. People should not break anything during Tet."</p>
                </div>

                <div class="bg-amber-50 border-2 border-amber-200 p-4 rounded-2xl space-y-3 text-slate-700 text-sm">
                    <div class="flex items-start space-x-3">
                        <div class="w-8 h-8 rounded-full bg-amber-600 text-white font-bold flex items-center justify-center flex-shrink-0">1</div>
                        <div>
                            <strong class="text-amber-900 block font-bold">Công việc dọn dẹp & trang trí:</strong>
                            - Clean homes, decorate with peach flowers and buy furniture.
                        </div>
                    </div>
                    <div class="flex items-start space-x-3">
                        <div class="w-8 h-8 rounded-full bg-amber-600 text-white font-bold flex items-center justify-center flex-shrink-0">2</div>
                        <div>
                            <strong class="text-amber-900 block font-bold">Hoạt động truyền thống:</strong>
                            - Cook banh chung, get lucky money, and avoid breaking things.
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

// MÀN 6: Sắp xếp câu tóm tắt chuẩn bị Tết (Sentence Builder)
window.ENG6_GAME_MODULES['sentence-builder-preparations'] = {
    title: 'Màn 6: Ghép Câu Tóm Tắt Công Tác Chuẩn Bị Tết',
    render(ctx) {
        window.day54BuildIndex = window.day54BuildIndex || 0;
        const sentences = [
            { words: ['Nguyen', 'is', 'writing', 'to', 'his', 'penfriend'], full: 'Nguyen is writing to his penfriend' },
            { words: ['His', 'family', 'prepares', 'for', 'Tet'], full: 'His family prepares for Tet' },
            { words: ['They', 'clean', 'their', 'homes', 'and', 'decorate', 'with', 'flowers'], full: 'They clean their homes and decorate with flowers' },
            { words: ['Children', 'get', 'lucky', 'money', 'at', 'Tet'], full: 'Children get lucky money at Tet' },
            { words: ['We', 'should', 'not', 'break', 'anything', 'at', 'Tet'], full: 'We should not break anything at Tet' }
        ];

        if (window.day54BuildIndex >= sentences.length) {
            window.day54BuildIndex = 0;
            completeLevel();
            return;
        }

        const currS = sentences[window.day54BuildIndex];
        
        // Khởi tạo mảng xáo trộn ngẫu nhiên cho từng câu hỏi
        if (!window.day54ShuffledWords || window.day54CurrentQuestionIndex !== window.day54BuildIndex) {
            window.day54CurrentQuestionIndex = window.day54BuildIndex;
            let pool = [...currS.words];
            for (let i = pool.length - 1; i > 0; i--) {
                const j = Math.floor(Math.random() * (i + 1));
                [pool[i], pool[j]] = [pool[j], pool[i]];
            }
            window.day54ShuffledWords = pool;
            window.day54SelectedWords = [];
        }

        window.day54SelectedWords = window.day54SelectedWords || [];

        // Lọc các từ chưa được chọn từ kho từ đã xáo trộn
        let availablePool = [...window.day54ShuffledWords];
        window.day54SelectedWords.forEach(sel => {
            const idx = availablePool.indexOf(sel);
            if (idx > -1) availablePool.splice(idx, 1);
        });

        let selectedHTML = window.day54SelectedWords.map((w, i) => {
            const safeWord = w.replace(/'/g, "\\'");
            return `<button onclick="removeDay54Word(${i})" class="px-3 py-2 bg-amber-600 text-white font-bold rounded-xl text-sm shadow">${w}</button>`;
        }).join('');

        let poolHTML = availablePool.map((w) => {
            const safeWord = w.replace(/'/g, "\\'");
            return `<button onclick="addDay54Word('${safeWord}')" class="px-4 py-2.5 bg-slate-100 hover:bg-slate-200 text-slate-800 font-bold rounded-xl text-sm border-2 border-slate-300">${w}</button>`;
        }).join('');

        const safeFullText = currS.full.replace(/'/g, "\\'");

        ctx.container.innerHTML = `
            <div>
                <div class="bg-amber-50 border border-amber-200 p-2.5 rounded-xl text-center mb-3">
                    <span class="text-xs font-bold text-amber-800">💡 Ghép các từ xáo trộn bên dưới thành câu hoàn chỉnh về chuẩn bị Tết</span>
                </div>
                <div class="flex justify-between items-center mb-2">
                    <span class="text-xs font-bold text-slate-500">Câu ${window.day54BuildIndex + 1} / ${sentences.length}</span>
                </div>

                <div class="min-h-[60px] p-3 border-2 border-dashed border-amber-300 bg-white rounded-2xl flex flex-wrap gap-2 items-center mb-4">
                    ${selectedHTML || '<span class="text-xs text-slate-400 font-medium">Bấm các từ xáo trộn bên dưới để ghép câu...</span>'}
                </div>

                <div class="flex flex-wrap gap-2 justify-center mb-6">${poolHTML}</div>

                <div class="text-center space-x-2">
                    <button onclick="checkDay54BuildSentence('${safeFullText}')" class="px-6 py-3 bg-amber-600 text-white font-extrabold rounded-xl shadow">Kiểm tra</button>
                    <button onclick="resetDay54BuildSentence()" class="px-4 py-3 bg-slate-200 text-slate-700 font-bold rounded-xl">Làm lại</button>
                </div>
            </div>
        `;
    }
};

window.addDay54Word = function(word) {
    playBtnSound();
    window.day54SelectedWords = window.day54SelectedWords || [];
    window.day54SelectedWords.push(word);
    loadLevel(currentLevel);
};

window.removeDay54Word = function(index) {
    playBtnSound();
    window.day54SelectedWords.splice(index, 1);
    loadLevel(currentLevel);
};

window.resetDay54BuildSentence = function() {
    playBtnSound();
    window.day54SelectedWords = [];
    loadLevel(currentLevel);
};

window.checkDay54BuildSentence = function(target) {
    playBtnSound();
    const result = (window.day54SelectedWords || []).join(' ');
    if (result === target) {
        playSound('correct');
        window.day54SelectedWords = [];
        window.day54ShuffledWords = null;
        window.day54BuildIndex++;
        setTimeout(() => { loadLevel(currentLevel); }, 600);
    } else {
        handleWrongAnswer();
    }
};