window.ENG6_LESSONS = window.ENG6_LESSONS || {};

window.ENG6_LESSONS[4] = {
    unit: 1,
    title: "Personal Pronouns (Subject Pronouns)",
    description: "Đại từ nhân xưng (còn gọi là Chủ ngữ) - Thường đứng ở đầu câu, trước động từ",
    ipa: "/ˈpɜːrsənl ˈproʊnaʊnz/",
    
    // Cấu hình lộ trình riêng cho Day 4
    activities: [
        'grammar-intro',         // Hoạt động 1: Khám phá định nghĩa & vị trí chủ ngữ
        'multiple-choice',       // Hoạt động 2: Trắc nghiệm mặt chữ
        'matching-meaning',      // Hoạt động 3: Nối từ & nghĩa
        'listening',             // Hoạt động 4: Nghe & chọn nghĩa
        'matching-ipa',          // Hoạt động 5: Nối từ & IPA
        'grammar-concept-check', // Hoạt động 6 (Màn 5): Câu hỏi lý thuyết, định nghĩa & ký hiệu
        'grammar-practice'       // Hoạt động 7 (Màn 6): Thực hành nhận biết chủ ngữ trong câu thực tế
    ],

    vocab: [
        { id: 'd4_i', en: 'I', ipa: '/aɪ/', vi: 'tôi, mình', wrongSpells: ['ii', 'y', 'ai'] },
        { id: 'd4_you', en: 'you', ipa: '/juː/', vi: 'bạn, các bạn', wrongSpells: ['yu', 'yuo', 'yoou'] },
        { id: 'd4_we', en: 'we', ipa: '/wiː/', vi: 'chúng tôi, chúng ta', wrongSpells: ['wee', 'wi', 'weei'] },
        { id: 'd4_they', en: 'they', ipa: '/ðeɪ/', vi: 'họ, chúng nó', wrongSpells: ['thay', 'thei', 'thayes'] },
        { id: 'd4_he', en: 'he', ipa: '/hiː/', vi: 'anh ấy, cậu ấy', wrongSpells: ['hee', 'hi', 'hie'] },
        { id: 'd4_she', en: 'she', ipa: '/ʃiː/', vi: 'cô ấy, bạn nữ ấy', wrongSpells: ['shee', 'se', 'shie'] },
        { id: 'd4_it', en: 'it', ipa: '/ɪt/', vi: 'nó (chỉ sự vật, con vật)', wrongSpells: ['itt', 'et', 'yte'] }
    ]
};

// Đăng ký các module trò chơi tùy chỉnh cho Day 4
window.ENG6_GAME_MODULES = window.ENG6_GAME_MODULES || {};

// 1. Màn hình học định nghĩa ngữ pháp ban đầu
window.ENG6_GAME_MODULES['grammar-intro'] = {
    title: 'Khám Phá: Chủ Ngữ Là Gì?',
    render(ctx) {
        ctx.container.innerHTML = `
            <div class="space-y-4">
                <div class="text-center">
                    <span class="px-3 py-1 bg-indigo-100 text-indigo-700 font-bold text-xs rounded-full">Ngữ Pháp Cơ Bản</span>
                    <h3 class="text-2xl font-black text-slate-800 mt-2">Đại Từ Nhân Xưng (Chủ Ngữ)</h3>
                    <p class="text-slate-600 text-sm mt-1">Hiểu nhanh bản chất để làm chủ câu tiếng Anh!</p>
                </div>

                <div class="bg-blue-50 border-2 border-blue-200 p-4 rounded-2xl space-y-3 text-slate-700 text-sm">
                    <div class="flex items-start space-x-3">
                        <div class="w-8 h-8 rounded-full bg-blue-600 text-white font-bold flex items-center justify-center flex-shrink-0">1</div>
                        <div>
                            <strong class="text-slate-900 block">Chủ ngữ là gì?</strong>
                            Là từ chỉ người hoặc vật thực hiện hành động trong câu (nhân vật chính).
                        </div>
                    </div>
                    <div class="flex items-start space-x-3">
                        <div class="w-8 h-8 rounded-full bg-blue-600 text-white font-bold flex items-center justify-center flex-shrink-0">2</div>
                        <div>
                            <strong class="text-slate-900 block">Nó đứng ở đâu?</strong>
                            Luôn đứng ở <strong>đầu câu</strong>, đứng ngay <strong>trước động từ</strong> (hành động).
                            <div class="mt-1 p-2 bg-white rounded-xl border border-blue-100 font-mono text-xs text-blue-700">
                                Ví dụ: <span class="font-bold text-rose-600">She</span> (chủ ngữ) + <span class="font-bold text-emerald-600">plays</span> (động từ)...
                            </div>
                        </div>
                    </div>
                </div>

                <div class="text-center pt-2">
                    <button onclick="playBtnSound(); completeLevel()" class="px-8 py-3.5 bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-extrabold rounded-2xl shadow-lg hover:opacity-95 transition-all text-base">
                        Đã hiểu, vào luyện tập ngay! <i class="fa-solid fa-arrow-right ml-2"></i>
                    </button>
                </div>
            </div>
        `;
    }
};

// 2. Màn 5: Câu hỏi kiểm tra định nghĩa, ký hiệu và bản chất chủ ngữ (4 câu)
window.ENG6_GAME_MODULES['grammar-concept-check'] = {
    title: 'Màn 5: Định Nghĩa & Ký Hiệu Chủ Ngữ',
    render(ctx) {
        window.day4ConceptIndex = window.day4ConceptIndex || 0;
        const questions = [
            {
                q: "Chủ ngữ trong câu tiếng Anh là gì?",
                options: [
                    { text: "Là người hoặc vật thực hiện hành động trong câu.", correct: true },
                    { text: "Là từ viết hoa ở cuối câu.", correct: false },
                    { text: "Là dấu phẩy ngăn cách các vế câu.", correct: false }
                ]
            },
            {
                q: "Trong ngữ pháp, người ta thường viết tắt chủ ngữ bằng ký hiệu chữ cái nào?",
                options: [
                    { text: "Chữ S (Subject)", correct: true },
                    { text: "Chữ V (Verb)", correct: false },
                    { text: "Chữ O (Object)", correct: false }
                ]
            },
            {
                q: "Vị trí tiêu chuẩn của chủ ngữ trong một câu kể khẳng định nằm ở đâu?",
                options: [
                    { text: "Đứng ở đầu câu, ngay trước động từ (hành động).", correct: true },
                    { text: "Luôn nằm ở cuối câu sau dấu chấm.", correct: false },
                    { text: "Nằm ở giữa hai dấu chấm câu bất kỳ.", correct: false }
                ]
            },
            {
                q: "Trong câu \"She reads a book\" (Cô ấy đọc sách), từ nào là chủ ngữ?",
                options: [
                    { text: "She (vì là người thực hiện hành động đọc)", correct: true },
                    { text: "book (sách)", correct: false },
                    { text: "reads (đọc)", correct: false }
                ]
            }
        ];

        if (window.day4ConceptIndex >= questions.length) {
            window.day4ConceptIndex = 0;
            completeLevel();
            return;
        }

        const currQ = questions[window.day4ConceptIndex];
        let optsHTML = '';
        currQ.options.sort(() => Math.random() - 0.5).forEach((opt, idx) => {
            optsHTML += `
                <button onclick="checkDay4ConceptAnswer(${opt.correct}, this)" class="w-full text-left p-4 rounded-2xl border-2 border-slate-200 bg-white hover:border-blue-500 hover:bg-blue-50/50 transition-all flex items-center space-x-3 group">
                    <span class="w-8 h-8 rounded-xl bg-slate-100 group-hover:bg-blue-600 group-hover:text-white font-extrabold text-slate-600 flex items-center justify-center text-sm transition-colors">${String.fromCharCode(65 + idx)}</span>
                    <span class="font-bold text-slate-800 text-base">${opt.text}</span>
                </button>
            `;
        });

        ctx.container.innerHTML = `
            <div>
                <div class="flex justify-between items-center mb-2">
                    <span class="text-xs font-bold text-indigo-600 bg-indigo-50 px-2.5 py-1 rounded-md">Concept ${window.day4ConceptIndex + 1} / ${questions.length}</span>
                    <span class="txt-vi">Hiểu định nghĩa chủ ngữ</span>
                </div>
                <h3 class="text-xl font-black text-slate-800 mb-4">${currQ.q}</h3>
                <div class="space-y-3">${optsHTML}</div>
            </div>
        `;
    }
};

window.checkDay4ConceptAnswer = function(isCorrect, btnElem) {
    playBtnSound();
    if (isCorrect) {
        btnElem.className = "w-full text-left p-4 rounded-2xl border-2 border-emerald-500 bg-emerald-50 text-emerald-800 font-bold flex items-center space-x-3";
        playSound('correct');
        window.day4ConceptIndex++;
        setTimeout(() => {
            loadLevel(currentLevel);
        }, 600);
    } else {
        btnElem.className = "w-full text-left p-4 rounded-2xl border-2 border-rose-500 bg-rose-50 text-rose-800 card-shake font-bold flex items-center space-x-3";
        handleWrongAnswer();
    }
};

// 3. Màn 6: Thực hành nhận biết chủ ngữ và hiểu sâu bản chất (8 câu)
window.ENG6_GAME_MODULES['grammar-practice'] = {
    title: 'Màn 6: Thực Hành Nhận Biết Chủ Ngữ',
    render(ctx) {
        window.day4PracticeIndex = window.day4PracticeIndex || 0;
        const questions = [
            // Phần 1: Nhận diện nhanh chủ ngữ trong câu thực tế (4 câu)
            {
                q: "Cho câu \"I play football\". Đâu là chủ ngữ chỉ người nói?",
                options: [
                    { text: "I", correct: true },
                    { text: "play", correct: false },
                    { text: "football", correct: false }
                ]
            },
            {
                q: "Cho câu \"We are students\". Từ nào đứng đầu câu làm chủ ngữ chỉ số nhiều?",
                options: [
                    { text: "We", correct: true },
                    { text: "students", correct: false },
                    { text: "are", correct: false }
                ]
            },
            {
                q: "Cho câu \"He likes music\". Từ nào đóng vai trò là chủ ngữ chỉ nam giới?",
                options: [
                    { text: "He", correct: true },
                    { text: "likes", correct: false },
                    { text: "music", correct: false }
                ]
            },
            {
                q: "Cho câu \"They play basketball\". Đâu là chủ ngữ chỉ nhóm người/số nhiều?",
                options: [
                    { text: "They", correct: true },
                    { text: "play", correct: false },
                    { text: "basketball", correct: false }
                ]
            },
            // Phần 2: Hiểu sâu bản chất và vị trí của chủ ngữ (4 câu)
            {
                q: "Trong câu \"I play football\", từ I là chủ ngữ vì:",
                options: [
                    { text: "Vì nó đứng ở đầu câu và thực hiện hành động \"chơi\" (play).", correct: true },
                    { text: "Vì nó là một từ chỉ đồ vật ở cuối câu.", correct: false },
                    { text: "Vì nó đứng sau động từ chính.", correct: false }
                ]
            },
            {
                q: "Trong câu \"She reads a book\", từ nào đóng vai trò là chủ ngữ và đứng ở đâu?",
                options: [
                    { text: "Từ \"She\", đứng ở đầu câu, ngay trước động từ \"reads\".", correct: true },
                    { text: "Từ \"book\", đứng ở cuối câu.", correct: false },
                    { text: "Từ \"reads\", đứng ở giữa câu.", correct: false }
                ]
            },
            {
                q: "Tại sao trong câu \"We go to school\", từ We lại được gọi là chủ ngữ?",
                options: [
                    { text: "Vì nó chỉ nhóm người (chúng ta) thực hiện hành động đi học.", correct: true },
                    { text: "Vì nó là một từ chỉ hành động.", correct: false },
                    { text: "Vì nó đứng sau động từ \"go\".", correct: false }
                ]
            },
            {
                q: "Trong câu \"He runs very fast\", dấu hiệu nào giúp em xác định từ He là chủ ngữ?",
                options: [
                    { text: "Vì nó đứng ở đầu câu, chỉ người nam giới và thực hiện hành động \"chạy\".", correct: true },
                    { text: "Vì nó nằm ở cuối câu sau dấu chấm.", correct: false },
                    { text: "Vì nó là một từ chỉ tính chất.", correct: false }
                ]
            }
        ];

        if (window.day4PracticeIndex >= questions.length) {
            window.day4PracticeIndex = 0;
            completeLevel();
            return;
        }

        const currQ = questions[window.day4PracticeIndex];
        let optsHTML = '';
        currQ.options.sort(() => Math.random() - 0.5).forEach((opt, idx) => {
            optsHTML += `
                <button onclick="checkDay4PracticeAnswer(${opt.correct}, this)" class="w-full text-left p-4 rounded-2xl border-2 border-slate-200 bg-white hover:border-purple-500 hover:bg-purple-50/50 transition-all flex items-center space-x-3 group">
                    <span class="w-8 h-8 rounded-xl bg-slate-100 group-hover:bg-purple-600 group-hover:text-white font-extrabold text-slate-600 flex items-center justify-center text-sm transition-colors">${String.fromCharCode(65 + idx)}</span>
                    <span class="font-bold text-slate-800 text-sm md:text-base">${opt.text}</span>
                </button>
            `;
        });

        ctx.container.innerHTML = `
            <div>
                <div class="flex justify-between items-center mb-2">
                    <span class="text-xs font-bold text-purple-600 bg-purple-50 px-2.5 py-1 rounded-md">Practice ${window.day4PracticeIndex + 1} / ${questions.length}</span>
                    <span class="txt-vi">Thực hành nhận biết chủ ngữ</span>
                </div>
                <h3 class="text-xl font-black text-slate-800 mb-4">${currQ.q}</h3>
                <div class="space-y-3">${optsHTML}</div>
            </div>
        `;
    }
};

window.checkDay4PracticeAnswer = function(isCorrect, btnElem) {
    playBtnSound();
    if (isCorrect) {
        btnElem.className = "w-full text-left p-4 rounded-2xl border-2 border-emerald-500 bg-emerald-50 text-emerald-800 font-bold flex items-center space-x-3";
        playSound('correct');
        window.day4PracticeIndex++;
        setTimeout(() => {
            loadLevel(currentLevel);
        }, 600);
    } else {
        btnElem.className = "w-full text-left p-4 rounded-2xl border-2 border-rose-500 bg-rose-50 text-rose-800 card-shake font-bold flex items-center space-x-3";
        handleWrongAnswer();
    }
};