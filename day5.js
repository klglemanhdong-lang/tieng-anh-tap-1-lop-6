window.ENG6_LESSONS = window.ENG6_LESSONS || {};

window.ENG6_LESSONS[5] = {
    unit: 1,
    title: "Verbs (Action Verbs & Structure)",
    description: "Động từ - Hành động trong câu và cách kết hợp với Chủ ngữ",
    ipa: "/vɜːbz/",
    
    // Cấu hình lộ trình riêng cho Day 5
    activities: [
        'grammar-intro',         // Hoạt động 1: Khám phá lý thuyết Động từ & Cấu trúc câu
        'multiple-choice',       // Hoạt động 2: Trắc nghiệm mặt chữ động từ
        'matching-meaning',      // Hoạt động 3: Nối từ & nghĩa động từ
        'listening',             // Hoạt động 4: Nghe & chọn nghĩa
        'matching-ipa',          // Hoạt động 5: Nối từ & IPA
        'grammar-concept-check', // Hoạt động 6 (Màn 5): Câu hỏi lý thuyết định nghĩa & vị trí động từ
        'grammar-practice'       // Hoạt động 7 (Màn 6): Thực hành nhận biết động từ và cấu trúc câu
    ],

    vocab: [
        { id: 'd5_study', en: 'study', ipa: '/ˈstʌdi/', vi: 'học', wrongSpells: ['studi', 'sttudy', 'studiie'] },
        { id: 'd5_do', en: 'do', ipa: '/duː/', vi: 'làm', wrongSpells: ['doo', 'du', 'doe'] },
        { id: 'd5_have', en: 'have', ipa: '/hæv/', vi: 'có; ăn/dùng', wrongSpells: ['hav', 'haev', 'haave'] },
        { id: 'd5_plays', en: 'plays', ipa: '/pleɪz/', vi: 'chơi', wrongSpells: ['playz', 'plaiz', 'playse'] },
        { id: 'd5_studies', en: 'studies', ipa: '/ˈstʌdiz/', vi: 'học (ngôi thứ 3 số ít)', wrongSpells: ['studis', 'studyis', 'studees'] },
        { id: 'd5_does', en: 'does', ipa: '/dʌz/', vi: 'làm (trợ động từ ngôi 3 số ít)', wrongSpells: ['dose', 'dues', 'doez'] }
    ]
};

// Đăng ký các module trò chơi tùy chỉnh cho Day 5
window.ENG6_GAME_MODULES = window.ENG6_GAME_MODULES || {};

// 1. Màn hình học định nghĩa động từ và cấu trúc câu
window.ENG6_GAME_MODULES['grammar-intro'] = {
    title: 'Khám Phá: Động Từ Là Gì?',
    render(ctx) {
        ctx.container.innerHTML = `
            <div class="space-y-4">
                <div class="text-center">
                    <span class="px-3 py-1 bg-emerald-100 text-emerald-700 font-bold text-xs rounded-full">Ngữ Pháp Cơ Bản</span>
                    <h3 class="text-2xl font-black text-slate-800 mt-2">Động Từ (Verbs) & Cấu Trúc Câu</h3>
                    <p class="text-slate-600 text-sm mt-1">Hiểu bản chất hành động để ghép câu tiếng Anh chính xác!</p>
                </div>

                <div class="bg-emerald-50 border-2 border-emerald-200 p-4 rounded-2xl space-y-3 text-slate-700 text-sm">
                    <div class="flex items-start space-x-3">
                        <div class="w-8 h-8 rounded-full bg-emerald-600 text-white font-bold flex items-center justify-center flex-shrink-0">1</div>
                        <div>
                            <strong class="text-slate-900 block">Động từ là gì?</strong>
                            Là từ chỉ hành động của người hoặc vật trong câu (ví dụ: <em>study</em> - học, <em>play</em> - chơi).
                        </div>
                    </div>
                    <div class="flex items-start space-x-3">
                        <div class="w-8 h-8 rounded-full bg-emerald-600 text-white font-bold flex items-center justify-center flex-shrink-0">2</div>
                        <div>
                            <strong class="text-slate-900 block">Vị trí và Cấu trúc câu:</strong>
                            Động từ thường đứng ngay <strong>sau chủ ngữ</strong>.
                            <div class="mt-1.5 p-2.5 bg-white rounded-xl border border-emerald-100 font-mono text-xs text-emerald-800 space-y-1">
                                <div><strong>Cấu trúc:</strong> Chủ ngữ + Động từ + Thành phần khác</div>
                                <div>Ví dụ: <span class="font-bold text-rose-600">I</span> (chủ ngữ) + <span class="font-bold text-emerald-600">study</span> (động từ) + maths.</div>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="text-center pt-2">
                    <button onclick="playBtnSound(); completeLevel()" class="px-8 py-3.5 bg-gradient-to-r from-emerald-600 to-teal-600 text-white font-extrabold rounded-2xl shadow-lg hover:opacity-95 transition-all text-base">
                        Đã hiểu, vào luyện tập ngay! <i class="fa-solid fa-arrow-right ml-2"></i>
                    </button>
                </div>
            </div>
        `;
    }
};

// 2. Màn 5: Câu hỏi kiểm tra định nghĩa, vị trí và cấu trúc động từ (4 câu)
window.ENG6_GAME_MODULES['grammar-concept-check'] = {
    title: 'Màn 5: Định Nghĩa & Vị Trí Động Từ',
    render(ctx) {
        window.day5ConceptIndex = window.day5ConceptIndex || 0;
        const questions = [
            {
                q: "Động từ trong câu tiếng Anh dùng để làm gì?",
                options: [
                    { text: "Chỉ hành động hoặc trạng thái của sự vật, con người.", correct: true },
                    { text: "Chỉ tên riêng của địa điểm.", correct: false },
                    { text: "Chỉ màu sắc của đồ vật.", correct: false }
                ]
            },
            {
                q: "Trong một câu kể thông thường, vị trí của động từ nằm ở đâu so với chủ ngữ?",
                options: [
                    { text: "Đứng ngay phía sau chủ ngữ.", correct: true },
                    { text: "Đứng hoàn toàn ở cuối câu sau dấu chấm.", correct: false },
                    { text: "Đứng trước cả chủ ngữ.", correct: false }
                ]
            },
            {
                q: "Cấu trúc cơ bản của một câu khẳng định tiếng Anh là gì?",
                options: [
                    { text: "Chủ ngữ + Động từ + Thành phần khác", correct: true },
                    { text: "Động từ + Chủ ngữ + Dấu phẩy", correct: false },
                    { text: "Thành phần khác + Chủ ngữ + Động từ", correct: false }
                ]
            },
            {
                q: "Trong câu \"He studies maths\" (Cậu ấy học Toán), từ nào là động từ chỉ hành động?",
                options: [
                    { text: "studies (học)", correct: true },
                    { text: "He (cậu ấy)", correct: false },
                    { text: "maths (Toán)", correct: false }
                ]
            }
        ];

        if (window.day5ConceptIndex >= questions.length) {
            window.day5ConceptIndex = 0;
            completeLevel();
            return;
        }

        const currQ = questions[window.day5ConceptIndex];
        let optsHTML = '';
        currQ.options.sort(() => Math.random() - 0.5).forEach((opt, idx) => {
            optsHTML += `
                <button onclick="checkDay5ConceptAnswer(${opt.correct}, this)" class="w-full text-left p-4 rounded-2xl border-2 border-slate-200 bg-white hover:border-emerald-500 hover:bg-emerald-50/50 transition-all flex items-center space-x-3 group">
                    <span class="w-8 h-8 rounded-xl bg-slate-100 group-hover:bg-emerald-600 group-hover:text-white font-extrabold text-slate-600 flex items-center justify-center text-sm transition-colors">${String.fromCharCode(65 + idx)}</span>
                    <span class="font-bold text-slate-800 text-base">${opt.text}</span>
                </button>
            `;
        });

        ctx.container.innerHTML = `
            <div>
                <div class="flex justify-between items-center mb-2">
                    <span class="text-xs font-bold text-emerald-600 bg-emerald-50 px-2.5 py-1 rounded-md">Concept ${window.day5ConceptIndex + 1} / ${questions.length}</span>
                    <span class="txt-vi">Hiểu bản chất động từ</span>
                </div>
                <h3 class="text-xl font-black text-slate-800 mb-4">${currQ.q}</h3>
                <div class="space-y-3">${optsHTML}</div>
            </div>
        `;
    }
};

window.checkDay5ConceptAnswer = function(isCorrect, btnElem) {
    playBtnSound();
    if (isCorrect) {
        btnElem.className = "w-full text-left p-4 rounded-2xl border-2 border-emerald-500 bg-emerald-50 text-emerald-800 font-bold flex items-center space-x-3";
        playSound('correct');
        window.day5ConceptIndex++;
        setTimeout(() => {
            loadLevel(currentLevel);
        }, 600);
    } else {
        btnElem.className = "w-full text-left p-4 rounded-2xl border-2 border-rose-500 bg-rose-50 text-rose-800 card-shake font-bold flex items-center space-x-3";
        handleWrongAnswer();
    }
};

// 3. Màn 6: Thực hành nhận biết động từ và cấu trúc câu (8 câu)
window.ENG6_GAME_MODULES['grammar-practice'] = {
    title: 'Màn 6: Thực Hành Nhận Biết Động Từ',
    render(ctx) {
        window.day5PracticeIndex = window.day5PracticeIndex || 0;
        const questions = [
            // Phần 1: Nhận diện nhanh động từ trong câu thực tế (4 câu)
            {
                q: "Cho câu \"I study maths\". Đâu là động từ chỉ hành động học tập?",
                options: [
                    { text: "study", correct: true },
                    { text: "I", correct: false },
                    { text: "maths", correct: false }
                ]
            },
            {
                q: "Cho câu \"We do homework\". Từ nào đóng vai trò là động từ chỉ hành động làm?",
                options: [
                    { text: "do", correct: true },
                    { text: "We", correct: false },
                    { text: "homework", correct: false }
                ]
            },
            {
                q: "Cho câu \"He studies maths\". Từ nào là động từ chia ở ngôi thứ ba số ít?",
                options: [
                    { text: "studies", correct: true },
                    { text: "He", correct: false },
                    { text: "maths", correct: false }
                ]
            },
            {
                q: "Cho câu \"They have breakfast\". Đâu là động từ có nghĩa là ăn/dùng?",
                options: [
                    { text: "have", correct: true },
                    { text: "They", correct: false },
                    { text: "breakfast", correct: false }
                ]
            },
            // Phần 2: Hiểu sâu cấu trúc và lý do vì sao là động từ (4 câu)
            {
                q: "Trong câu \"I study maths\", từ study là động từ vì:",
                options: [
                    { text: "Vì nó chỉ hành động học tập và đứng ngay sau chủ ngữ \"I\".", correct: true },
                    { text: "Vì nó là từ chỉ môn học ở cuối câu.", correct: false },
                    { text: "Vì nó là một đại từ nhân xưng chỉ ngôi thứ nhất.", correct: false }
                ]
            },
            {
                q: "Trong cấu trúc câu \"We do homework\", từ do nằm ở vị trí nào?",
                options: [
                    { text: "Đứng ngay sau chủ ngữ \"We\" và trước tân ngữ \"homework\".", correct: true },
                    { text: "Đứng ở cuối cùng sau dấu chấm.", correct: false },
                    { text: "Đứng trước chủ ngữ \"We\".", correct: false }
                ]
            },
            {
                q: "Tại sao trong câu \"He studies maths\", động từ study lại đổi thành studies?",
                options: [
                    { text: "Vì đi với chủ ngữ số ít ngôi thứ ba (He) trong thì hiện tại đơn.", correct: true },
                    { text: "Vì câu này là câu hỏi.", correct: false },
                    { text: "Vì nó đứng ở cuối câu.", correct: false }
                ]
            },
            {
                q: "Trong câu \"They have breakfast\", từ have có vai trò gì trong câu?",
                options: [
                    { text: "Là động từ chính chỉ hành động ăn/dùng bữa sáng.", correct: true },
                    { text: "Là chủ ngữ chỉ người.", correct: false },
                    { text: "Là dấu phẩy ngắt nhịp.", correct: false }
                ]
            }
        ];

        if (window.day5PracticeIndex >= questions.length) {
            window.day5PracticeIndex = 0;
            completeLevel();
            return;
        }

        const currQ = questions[window.day5PracticeIndex];
        let optsHTML = '';
        currQ.options.sort(() => Math.random() - 0.5).forEach((opt, idx) => {
            optsHTML += `
                <button onclick="checkDay5PracticeAnswer(${opt.correct}, this)" class="w-full text-left p-4 rounded-2xl border-2 border-slate-200 bg-white hover:border-emerald-500 hover:bg-emerald-50/50 transition-all flex items-center space-x-3 group">
                    <span class="w-8 h-8 rounded-xl bg-slate-100 group-hover:bg-emerald-600 group-hover:text-white font-extrabold text-slate-600 flex items-center justify-center text-sm transition-colors">${String.fromCharCode(65 + idx)}</span>
                    <span class="font-bold text-slate-800 text-sm md:text-base">${opt.text}</span>
                </button>
            `;
        });

        ctx.container.innerHTML = `
            <div>
                <div class="flex justify-between items-center mb-2">
                    <span class="text-xs font-bold text-emerald-600 bg-emerald-50 px-2.5 py-1 rounded-md">Practice ${window.day5PracticeIndex + 1} / ${questions.length}</span>
                    <span class="txt-vi">Thực hành nhận biết động từ</span>
                </div>
                <h3 class="text-xl font-black text-slate-800 mb-4">${currQ.q}</h3>
                <div class="space-y-3">${optsHTML}</div>
            </div>
        `;
    }
};

window.checkDay5PracticeAnswer = function(isCorrect, btnElem) {
    playBtnSound();
    if (isCorrect) {
        btnElem.className = "w-full text-left p-4 rounded-2xl border-2 border-emerald-500 bg-emerald-50 text-emerald-800 font-bold flex items-center space-x-3";
        playSound('correct');
        window.day5PracticeIndex++;
        setTimeout(() => {
            loadLevel(currentLevel);
        }, 600);
    } else {
        btnElem.className = "w-full text-left p-4 rounded-2xl border-2 border-rose-500 bg-rose-50 text-rose-800 card-shake font-bold flex items-center space-x-3";
        handleWrongAnswer();
    }
};