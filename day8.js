window.ENG6_LESSONS = window.ENG6_LESSONS || {};

window.ENG6_LESSONS[8] = {
    unit: 1,
    title: "Determiners (This, A, An) & Unit 1",
    description: "Học cách dùng từ chỉ định This và mạo từ A, An với từ vựng dụng cụ học tập Unit 1",
    ipa: "/dɪˈtɜːrmɪnərz/",
    
    // Cấu hình lộ trình 7 màn hoạt động cho Day 8
    activities: [
        'grammar-intro-determiners', // Màn 1: Lý thuyết phân biệt This, A, An
        'a-an-grouping',            // Màn 2: Thực hành phân loại A / An
        'matching-determiners',     // Màn 3: Nối This is a/an với từ vựng Unit 1
        'sentence-builder-determiners', // Màn 4: Sắp xếp cấu trúc câu chứa This, A, An
        'speaking-determiners',     // Màn 5: Luyện nói câu ngắn (có đếm 5 lần mở khóa nút bỏ qua)
        'determiners-meaning-choice', // Màn 6: Trắc nghiệm chọn nghĩa của câu
        'listening-choice-determiners' // Màn 7: Nghe câu tiếng Anh và chọn đáp án đúng
    ],

    vocab: [
        { id: 'd8_this', en: 'this', ipa: '/ðɪs/', vi: 'đây, này (gần, số ít)', wrongSpells: ['thiss', 'thes'] },
        { id: 'd8_a', en: 'a', ipa: '/ə/', vi: 'một (đứng trước phụ âm)', wrongSpells: ['ay', 'ah'] },
        { id: 'd8_an', en: 'an', ipa: '/ən/', vi: 'một (đứng trước nguyên âm u, e, o, a, i)', wrongSpells: ['ann', 'en'] },
        { id: 'd8_calculator', en: 'calculator', ipa: '/ˈkælkjuleɪtər/', vi: 'máy tính cầm tay', wrongSpells: ['calulator'] },
        { id: 'd8_compass', en: 'compass', ipa: '/ˈkʌmpəs/', vi: 'cái compa', wrongSpells: ['compas'] },
        { id: 'd8_pencil_case', en: 'pencil case', ipa: '/ˈpensl keɪs/', vi: 'hộp bút', wrongSpells: ['pencilcase'] },
        { id: 'd8_rubber', en: 'rubber', ipa: '/ˈrʌbər/', vi: 'cục tẩy', wrongSpells: ['ruber'] },
        { id: 'd8_exercise', en: 'exercise', ipa: '/ˈeksərsaɪz/', vi: 'bài tập', wrongSpells: ['exersice'] }
    ]
};

window.ENG6_GAME_MODULES = window.ENG6_GAME_MODULES || {};

// Hàm bổ trợ phát âm chuẩn tiếng Anh (Speech Synthesis)
window.speakText = window.speakText || function(text) {
    if ('speechSynthesis' in window) {
        window.speechSynthesis.cancel();
        const utterance = new SpeechSynthesisUtterance(text);
        utterance.lang = 'en-US';
        utterance.rate = 0.85;
        window.speechSynthesis.speak(utterance);
    } else {
        alert("Trình duyệt của bạn không hỗ trợ tính năng phát âm.");
    }
};

// MÀN 1: Lý thuyết giải thích phân biệt This, A, An
window.ENG6_GAME_MODULES['grammar-intro-determiners'] = {
    title: 'Màn 1: Lý Thuyết - Phân Biệt This, A và An',
    render(ctx) {
        ctx.container.innerHTML = `
            <div class="space-y-4">
                <div class="text-center">
                    <span class="px-3 py-1 bg-indigo-100 text-indigo-800 font-bold text-xs rounded-full">Ngữ Pháp Unit 1</span>
                    <h3 class="text-2xl font-black text-slate-800 mt-2">Từ Chỉ Định & Mạo Từ (This, A, An)</h3>
                    <p class="text-slate-600 text-sm mt-1">Bí quyết chọn "A" hay "AN" chuẩn xác 100%!</p>
                </div>

                <div class="bg-indigo-50 border-2 border-indigo-200 p-4 rounded-2xl space-y-3 text-slate-700 text-sm">
                    <div class="flex items-start space-x-3">
                        <div class="w-8 h-8 rounded-full bg-indigo-500 text-white font-bold flex items-center justify-center flex-shrink-0">1</div>
                        <div>
                            <strong class="text-indigo-900 block font-bold">THIS = Đây, này</strong>
                            Chỉ một người hoặc đồ vật ở gần bạn.<br>
                            <span class="text-xs text-indigo-700 font-medium">👉 Ví dụ: This is a pencil case. (Đây là một chiếc hộp bút.)</span>
                        </div>
                    </div>
                    <div class="flex items-start space-x-3">
                        <div class="w-8 h-8 rounded-full bg-indigo-500 text-white font-bold flex items-center justify-center flex-shrink-0">2</div>
                        <div>
                            <strong class="text-indigo-900 block font-bold">A = Một (Đứng trước Phụ Âm)</strong>
                            Dùng khi từ đứng sau bắt đầu bằng phụ âm (b, c, d, p, r, s, v...).<br>
                            <span class="text-xs text-indigo-700 font-medium">👉 Ví dụ: a calculator, a compass, a rubber, a uniform (/j/).</span>
                        </div>
                    </div>
                    <div class="flex items-start space-x-3">
                        <div class="w-8 h-8 rounded-full bg-indigo-500 text-white font-bold flex items-center justify-center flex-shrink-0">3</div>
                        <div>
                            <strong class="text-indigo-900 block font-bold">AN = Một (Đứng trước Nguyên Âm u, e, o, a, i)</strong>
                            Dùng khi từ đứng sau bắt đầu bằng phát âm nguyên âm.<br>
                            <span class="text-xs text-indigo-700 font-medium">👉 Ví dụ: an exercise (bắt đầu bằng âm /e/), an English book.</span>
                        </div>
                    </div>
                </div>

                <div class="text-center pt-2">
                    <button onclick="playBtnSound(); completeLevel()" class="px-8 py-3.5 bg-gradient-to-r from-indigo-500 to-purple-600 text-white font-extrabold rounded-2xl shadow-lg hover:opacity-95 transition-all text-base">
                        Đã hiểu quy tắc, vào thực hành! <i class="fa-solid fa-arrow-right ml-2"></i>
                    </button>
                </div>
            </div>
        `;
    }
};

// MÀN 2: Thực hành phân loại A / AN
window.ENG6_GAME_MODULES['a-an-grouping'] = {
    title: 'Màn 2: Thực Hành Chọn A hay AN',
    render(ctx) {
        window.day8GroupIndex = window.day8GroupIndex || 0;
        const questions = [
            {
                q: "Từ \"calculator\" (máy tính) bắt đầu bằng phụ âm /k/, em chọn mạo từ nào?",
                options: [
                    { text: "a calculator", correct: true },
                    { text: "an calculator", correct: false }
                ]
            },
            {
                q: "Từ \"exercise\" (bài tập) bắt đầu bằng nguyên âm /e/, em chọn mạo từ nào?",
                options: [
                    { text: "an exercise", correct: true },
                    { text: "a exercise", correct: false }
                ]
            },
            {
                q: "Từ \"rubber\" (cục tẩy) bắt đầu bằng phụ âm /r/, em chọn:",
                options: [
                    { text: "a rubber", correct: true },
                    { text: "an rubber", correct: false }
                ]
            },
            {
                q: "Từ \"compass\" (cái compa) bắt đầu bằng phụ âm /k/, em chọn:",
                options: [
                    { text: "a compass", correct: true },
                    { text: "an compass", correct: false }
                ]
            },
            {
                q: "Từ \"pencil case\" (hộp bút) bắt đầu bằng phụ âm /p/, em chọn:",
                options: [
                    { text: "a pencil case", correct: true },
                    { text: "an pencil case", correct: false }
                ]
            },
            {
                q: "Từ \"English book\" (sách tiếng Anh) bắt đầu bằng nguyên âm /ɪ/, em chọn:",
                options: [
                    { text: "an English book", correct: true },
                    { text: "a English book", correct: false }
                ]
            }
        ];

        if (window.day8GroupIndex >= questions.length) {
            window.day8GroupIndex = 0;
            completeLevel();
            return;
        }

        const currQ = questions[window.day8GroupIndex];
        let optsHTML = '';
        currQ.options.sort(() => Math.random() - 0.5).forEach((opt, idx) => {
            optsHTML += `
                <button onclick="checkDay8GroupAnswer(${opt.correct}, this)" class="w-full text-left p-4 rounded-2xl border-2 border-slate-200 bg-white hover:border-indigo-500 hover:bg-indigo-50/50 transition-all flex items-center space-x-3 group">
                    <span class="w-8 h-8 rounded-xl bg-slate-100 group-hover:bg-indigo-500 group-hover:text-white font-extrabold text-slate-600 flex items-center justify-center text-sm transition-colors">${String.fromCharCode(65 + idx)}</span>
                    <span class="font-bold text-slate-800 text-sm md:text-base">${opt.text}</span>
                </button>
            `;
        });

        ctx.container.innerHTML = `
            <div>
                <div class="flex justify-between items-center mb-2">
                    <span class="text-xs font-bold text-indigo-600 bg-indigo-50 px-2.5 py-1 rounded-md">Câu ${window.day8GroupIndex + 1} / ${questions.length}</span>
                    <span class="txt-vi text-xs text-slate-500">Mạo từ A / AN</span>
                </div>
                <h3 class="text-lg font-black text-slate-800 mb-4">${currQ.q}</h3>
                <div class="space-y-3">${optsHTML}</div>
            </div>
        `;
    }
};

window.checkDay8GroupAnswer = function(isCorrect, btnElem) {
    playBtnSound();
    if (isCorrect) {
        btnElem.className = "w-full text-left p-4 rounded-2xl border-2 border-emerald-500 bg-emerald-50 text-emerald-800 font-bold flex items-center space-x-3";
        playSound('correct');
        window.day8GroupIndex++;
        setTimeout(() => { loadLevel(currentLevel); }, 600);
    } else {
        btnElem.className = "w-full text-left p-4 rounded-2xl border-2 border-rose-500 bg-rose-50 text-rose-800 card-shake font-bold flex items-center space-x-3";
        handleWrongAnswer();
    }
};

// MÀN 3: Nối This is a/an với từ vựng Unit 1
window.ENG6_GAME_MODULES['matching-determiners'] = {
    title: 'Màn 3: Nối Cụm Từ This Is A / An',
    render(ctx) {
        window.day8MatchIndex = window.day8MatchIndex || 0;
        const pairs = [
            { subject: 'This is a', rest: 'calculator (máy tính)' },
            { subject: 'This is a', rest: 'pencil case (hộp bút)' },
            { subject: 'This is an', rest: 'exercise (bài tập)' },
            { subject: 'This is a', rest: 'compass (cái compa)' },
            { subject: 'This is a', rest: 'rubber (cục tẩy)' },
            { subject: 'This is a', rest: 'uniform (đồng phục)' }
        ];

        if (window.day8MatchIndex >= pairs.length) {
            window.day8MatchIndex = 0;
            completeLevel();
            return;
        }

        const currPair = pairs[window.day8MatchIndex];
        const possibleOptions = ['This is a', 'This is an', 'This are', 'This am'];

        let currentOptions = possibleOptions.sort(() => Math.random() - 0.5);

        let optsHTML = '';
        currentOptions.forEach((sub) => {
            const isCorrect = (sub === currPair.subject);
            optsHTML += `
                <button onclick="checkDay8MatchAnswer(${isCorrect}, this)" class="p-4 rounded-2xl border-2 border-slate-200 bg-white hover:border-purple-500 hover:bg-purple-50 font-black text-slate-800 text-base transition-all">
                    ${sub}
                </button>
            `;
        });

        ctx.container.innerHTML = `
            <div class="text-center">
                <div class="flex justify-between items-center mb-3">
                    <span class="text-xs font-bold text-purple-600 bg-purple-50 px-2.5 py-1 rounded-md">Cặp ${window.day8MatchIndex + 1} / ${pairs.length}</span>
                    <span class="txt-vi text-xs text-slate-500">Chọn This is a / an phù hợp</span>
                </div>
                <p class="text-slate-600 text-sm mb-2">Cụm từ nào kết hợp chính xác với danh từ sau?</p>
                <div class="p-6 bg-purple-50 border-2 border-purple-200 rounded-2xl mb-6">
                    <span class="text-xl font-black text-purple-950">... ${currPair.rest}</span>
                </div>
                <div class="grid grid-cols-2 gap-3">${optsHTML}</div>
            </div>
        `;
    }
};

window.checkDay8MatchAnswer = function(isCorrect, btnElem) {
    playBtnSound();
    if (isCorrect) {
        btnElem.className = "p-4 rounded-2xl border-2 border-emerald-500 bg-emerald-50 font-black text-emerald-800 text-base";
        playSound('correct');
        window.day8MatchIndex++;
        setTimeout(() => { loadLevel(currentLevel); }, 600);
    } else {
        btnElem.className = "p-4 rounded-2xl border-2 border-rose-500 bg-rose-50 font-black text-rose-800 card-shake text-base";
        handleWrongAnswer();
    }
};

// MÀN 4: Sắp xếp cấu trúc câu chứa This, A, An
window.ENG6_GAME_MODULES['sentence-builder-determiners'] = {
    title: 'Màn 4: Ghép Câu Chứa This, A, An',
    render(ctx) {
        window.day8BuildIndex = window.day8BuildIndex || 0;
        const sentences = [
            { words: ['This', 'is', 'a', 'calculator'], full: 'This is a calculator' },
            { words: ['This', 'is', 'an', 'exercise'], full: 'This is an exercise' },
            { words: ['This', 'is', 'a', 'pencil', 'case'], full: 'This is a pencil case' },
            { words: ['This', 'is', 'a', 'compass'], full: 'This is a compass' },
            { words: ['This', 'is', 'a', 'rubber'], full: 'This is a rubber' },
            { words: ['This', 'is', 'a', 'uniform'], full: 'This is a uniform' }
        ];

        if (window.day8BuildIndex >= sentences.length) {
            window.day8BuildIndex = 0;
            completeLevel();
            return;
        }

        const currS = sentences[window.day8BuildIndex];
        window.day8SelectedWords = window.day8SelectedWords || [];

        let shuffled = [...currS.words].sort(() => Math.random() - 0.5);

        let selectedHTML = window.day8SelectedWords.map((w, i) => `
            <button onclick="removeDay8Word(${i})" class="px-3 py-2 bg-indigo-600 text-white font-bold rounded-xl text-sm shadow">
                ${w}
            </button>
        `).join('');

        let poolHTML = shuffled.map((w) => `
            <button onclick="addDay8Word('${w}')" class="px-4 py-2.5 bg-slate-100 hover:bg-slate-200 text-slate-800 font-bold rounded-xl text-sm border-2 border-slate-300">
                ${w}
            </button>
        `).join('');

        ctx.container.innerHTML = `
            <div>
                <div class="bg-indigo-50 border border-indigo-200 p-2.5 rounded-xl text-center mb-3">
                    <span class="text-xs font-bold text-indigo-700">💡 Cấu trúc: This + is + a/an + Danh từ số ít</span>
                </div>
                <div class="flex justify-between items-center mb-2">
                    <span class="text-xs font-bold text-slate-500">Câu ${window.day8BuildIndex + 1} / ${sentences.length}</span>
                </div>

                <div class="min-h-[60px] p-3 border-2 border-dashed border-indigo-300 bg-white rounded-2xl flex flex-wrap gap-2 items-center mb-4">
                    ${selectedHTML || '<span class="text-xs text-slate-400 font-medium">Bấm các từ bên dưới để ghép câu...</span>'}
                </div>

                <div class="flex flex-wrap gap-2 justify-center mb-6">${poolHTML}</div>

                <div class="text-center space-x-2">
                    <button onclick="checkDay8BuildSentence('${currS.full}')" class="px-6 py-3 bg-emerald-600 text-white font-extrabold rounded-xl shadow">Kiểm tra</button>
                    <button onclick="resetDay8BuildSentence()" class="px-4 py-3 bg-slate-200 text-slate-700 font-bold rounded-xl">Làm lại</button>
                </div>
            </div>
        `;
    }
};

window.addDay8Word = function(word) {
    playBtnSound();
    window.day8SelectedWords = window.day8SelectedWords || [];
    window.day8SelectedWords.push(word);
    loadLevel(currentLevel);
};

window.removeDay8Word = function(index) {
    playBtnSound();
    window.day8SelectedWords.splice(index, 1);
    loadLevel(currentLevel);
};

window.resetDay8BuildSentence = function() {
    playBtnSound();
    window.day8SelectedWords = [];
    loadLevel(currentLevel);
};

window.checkDay8BuildSentence = function(target) {
    playBtnSound();
    const result = (window.day8SelectedWords || []).join(' ');
    if (result === target) {
        playSound('correct');
        window.day8SelectedWords = [];
        window.day8BuildIndex++;
        setTimeout(() => { loadLevel(currentLevel); }, 600);
    } else {
        handleWrongAnswer();
    }
};

// MÀN 5: Luyện nói câu ngắn (Có đếm 5 lần đọc không qua mở khóa nút bỏ qua)
window.ENG6_GAME_MODULES['speaking-determiners'] = {
    title: 'Màn 5: Luyện Nói Câu Chứa This, A, An',
    render(ctx) {
        window.day8SpeakIndex = window.day8SpeakIndex || 0;
        window.day8AttemptCounts = window.day8AttemptCounts || {};
        
        const sentences = [
            { en: 'This is a calculator.', vi: 'Đây là một chiếc máy tính cầm tay.' },
            { en: 'This is an exercise.', vi: 'Đây là một bài tập.' },
            { en: 'This is a pencil case.', vi: 'Đây là một chiếc hộp bút.' },
            { en: 'This is a compass.', vi: 'Đây là một cái compa.' },
            { en: 'This is a rubber.', vi: 'Đây là một cục tẩy.' },
            { en: 'This is a uniform.', vi: 'Đây là một bộ đồng phục.' }
        ];

        if (window.day8SpeakIndex >= sentences.length) {
            window.day8SpeakIndex = 0;
            window.day8AttemptCounts = {};
            completeLevel();
            return;
        }

        const currS = sentences[window.day8SpeakIndex];
        window.day8AttemptCounts[window.day8SpeakIndex] = window.day8AttemptCounts[window.day8SpeakIndex] || 0;
        const currentAttempts = window.day8AttemptCounts[window.day8SpeakIndex];

        let skipButtonHTML = '';
        if (currentAttempts >= 5) {
            skipButtonHTML = `
                <div class="mt-3 animate-fade-in">
                    <button onclick="skipDay8SpeakStep()" class="px-4 py-2 bg-amber-500 hover:bg-amber-600 text-white font-bold rounded-xl text-xs shadow-md transition-all">
                        <i class="fa-solid fa-forward mr-1"></i> Đã đọc 5 lần, bấm vào đây để bỏ qua câu này
                    </button>
                </div>
            `;
        }

        ctx.container.innerHTML = `
            <div class="text-center space-y-4">
                <div class="flex justify-between items-center">
                    <span class="text-xs font-bold text-teal-600 bg-teal-50 px-2.5 py-1 rounded-md">Luyện nói ${window.day8SpeakIndex + 1} / ${sentences.length}</span>
                    <span class="txt-vi text-xs text-slate-500">Đã thử: ${currentAttempts} lần</span>
                </div>

                <div class="p-6 bg-teal-50 border-2 border-teal-200 rounded-2xl">
                    <h3 class="text-2xl font-black text-teal-900 mb-1">${currS.en}</h3>
                    <p class="text-slate-600 text-sm font-medium">(${currS.vi})</p>
                </div>

                <div class="flex justify-center space-x-3">
                    <button onclick="speakText('${currS.en}')" class="px-5 py-2.5 bg-teal-100 text-teal-800 font-bold rounded-xl hover:bg-teal-200 transition-colors flex items-center">
                        <i class="fa-solid fa-volume-high mr-2"></i> Nghe mẫu
                    </button>
                    
                    <button onclick="window.startDay8Mic('${currS.en}')" id="btnDay8Mic" class="px-6 py-2.5 bg-rose-600 hover:bg-rose-700 text-white font-bold rounded-xl shadow transition-all flex items-center">
                        <i class="fa-solid fa-microphone mr-2"></i> <span id="micStatusText">Bật Mic & Nói</span>
                    </button>
                </div>

                <div id="day8SpeakFeedback" class="min-h-[45px] p-3 rounded-xl bg-slate-50 border border-slate-200 text-sm font-medium text-slate-600 flex flex-col items-center justify-center">
                    Nhấn "Bật Mic & Nói" rồi đọc to câu tiếng Anh trên.
                </div>

                ${skipButtonHTML}

                <div class="pt-2">
                    <button id="btnDay8Next" onclick="nextDay8SpeakStep()" disabled class="px-8 py-3.5 bg-slate-300 text-slate-500 cursor-not-allowed font-extrabold rounded-2xl shadow transition-all">
                        Đọc chính xác để tiếp tục <i class="fa-solid fa-arrow-right ml-2"></i>
                    </button>
                </div>
            </div>
        `;
    }
};

window.startDay8Mic = function(targetSentence) {
    const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
    const feedbackDiv = document.getElementById('day8SpeakFeedback');
    const micBtnText = document.getElementById('micStatusText');
    const nextBtn = document.getElementById('btnDay8Next');

    if (!SpeechRecognition) {
        alert("Trình duyệt của bạn không hỗ trợ nhận diện giọng nói. Hãy dùng Google Chrome!");
        return;
    }

    window.day8AttemptCounts = window.day8AttemptCounts || {};
    window.day8AttemptCounts[window.day8SpeakIndex] = (window.day8AttemptCounts[window.day8SpeakIndex] || 0) + 1;

    const recognition = new SpeechRecognition();
    recognition.lang = 'en-US';
    recognition.interimResults = false;
    recognition.maxAlternatives = 5;

    recognition.onstart = function() {
        micBtnText.innerText = "Đang nghe...";
        feedbackDiv.innerHTML = '<span class="text-amber-600 font-bold">🎙️ Đang lắng nghe giọng đọc của bạn...</span>';
    };

    recognition.onspeechend = function() {
        recognition.stop();
        micBtnText.innerText = "Nói lại";
    };

    recognition.onresult = function(event) {
        let isMatched = false;
        let bestTranscript = "";

        const results = event.results[0];
        let cleanTarget = targetSentence.toLowerCase().replace(/[.,\/\$%\^&\*;:{}=\-_`~()]/g, "").replace(/\s+/g, " ").trim();

        for (let i = 0; i < results.length; i++) {
            let transcript = results[i].transcript.toLowerCase().trim();
            let cleanSpoken = transcript.replace(/[.,\/$%\^&\*;:{}=\-_`~()]/g, "").replace(/\s+/g, " ").trim();
            
            if (!bestTranscript) bestTranscript = transcript;

            if (cleanSpoken === cleanTarget || cleanSpoken.includes(cleanTarget) || cleanTarget.includes(cleanSpoken)) {
                isMatched = true;
                bestTranscript = transcript;
                break;
            }
        }

        if (isMatched) {
            if (typeof playSound === 'function') playSound('correct');
            feedbackDiv.innerHTML = `<span class="text-emerald-600 font-bold">🎉 Chính xác tuyệt vời! (Máy nhận diện: "${bestTranscript}")</span>`;
            if (nextBtn) {
                nextBtn.disabled = false;
                nextBtn.className = "px-8 py-3.5 bg-gradient-to-r from-emerald-600 to-teal-600 text-white font-extrabold rounded-2xl shadow-lg hover:opacity-95 cursor-pointer transition-all";
                nextBtn.innerHTML = 'Xuất sắc! Tiếp tục <i class="fa-solid fa-arrow-right ml-2"></i>';
            }
        } else {
            if (typeof handleWrongAnswer === 'function') handleWrongAnswer();
            loadLevel(currentLevel);
        }
    };

    recognition.onerror = function() {
        micBtnText.innerText = "Bật Mic & Nói";
        feedbackDiv.innerHTML = '<span class="text-rose-500 font-bold">Không thu được âm thanh hoặc chưa cấp quyền Micro. Hãy thử lại!</span>';
        loadLevel(currentLevel);
    };

    recognition.start();
};

window.skipDay8SpeakStep = function() {
    if (typeof playBtnSound === 'function') playBtnSound();
    window.day8SpeakIndex++;
    loadLevel(currentLevel);
};

window.nextDay8SpeakStep = function() {
    if (typeof playBtnSound === 'function') playBtnSound();
    window.day8SpeakIndex++;
    loadLevel(currentLevel);
};

// MÀN 6: Trắc nghiệm chọn nghĩa của câu chứa This, A, An
window.ENG6_GAME_MODULES['determiners-meaning-choice'] = {
    title: 'Màn 6: Trắc Nghiệm Nghĩa Của Câu',
    render(ctx) {
        window.day8MeaningIndex = window.day8MeaningIndex || 0;
        const questions = [
            {
                sentence: "This is a calculator.",
                options: [
                    { text: "Đây là một chiếc máy tính cầm tay.", correct: true },
                    { text: "Đây là một chiếc hộp bút.", correct: false },
                    { text: "Kia là một cái compa.", correct: false }
                ]
            },
            {
                sentence: "This is an exercise.",
                options: [
                    { text: "Đây là một bài tập.", correct: true },
                    { text: "Tôi làm bài tập về nhà.", correct: false },
                    { text: "Đây là một cục tẩy.", correct: false }
                ]
            },
            {
                sentence: "This is a pencil case.",
                options: [
                    { text: "Đây là một chiếc hộp bút.", correct: true },
                    { text: "Kia là cặp sách của tôi.", correct: false },
                    { text: "Đây là máy tính cầm tay.", correct: false }
                ]
            },
            {
                sentence: "This is a compass.",
                options: [
                    { text: "Đây là một cái compa.", correct: true },
                    { text: "Đây là một bài tập.", correct: false },
                    { text: "Kia là bộ đồng phục.", correct: false }
                ]
            },
            {
                sentence: "This is a rubber.",
                options: [
                    { text: "Đây là một cục tẩy.", correct: true },
                    { text: "Đây là một chiếc hộp bút.", correct: false },
                    { text: "Kia là máy tính cầm tay.", correct: false }
                ]
            },
            {
                sentence: "This is a uniform.",
                options: [
                    { text: "Đây là một bộ đồng phục.", correct: true },
                    { text: "Tôi mặc đồng phục.", correct: false },
                    { text: "Đây là một bài tập.", correct: false }
                ]
            }
        ];

        if (window.day8MeaningIndex >= questions.length) {
            window.day8MeaningIndex = 0;
            completeLevel();
            return;
        }

        const currQ = questions[window.day8MeaningIndex];
        let optsHTML = '';
        currQ.options.sort(() => Math.random() - 0.5).forEach((opt, idx) => {
            optsHTML += `
                <button onclick="checkDay8MeaningAnswer(${opt.correct}, this)" class="w-full text-left p-4 rounded-2xl border-2 border-slate-200 bg-white hover:border-indigo-500 hover:bg-indigo-50/50 transition-all flex items-center space-x-3 group">
                    <span class="w-8 h-8 rounded-xl bg-slate-100 group-hover:bg-indigo-600 group-hover:text-white font-extrabold text-slate-600 flex items-center justify-center text-sm transition-colors">${String.fromCharCode(65 + idx)}</span>
                    <span class="font-bold text-slate-800 text-sm md:text-base">${opt.text}</span>
                </button>
            `;
        });

        ctx.container.innerHTML = `
            <div>
                <div class="flex justify-between items-center mb-2">
                    <span class="text-xs font-bold text-indigo-600 bg-indigo-50 px-2.5 py-1 rounded-md">Câu ${window.day8MeaningIndex + 1} / ${questions.length}</span>
                    <span class="txt-vi text-xs text-slate-500">Chọn nghĩa đúng</span>
                </div>
                <div class="p-4 bg-slate-900 text-white rounded-2xl text-center mb-4">
                    <span class="text-2xl font-black text-indigo-300">"${currQ.sentence}"</span>
                </div>
                <div class="space-y-3">${optsHTML}</div>
            </div>
        `;
    }
};

window.checkDay8MeaningAnswer = function(isCorrect, btnElem) {
    playBtnSound();
    if (isCorrect) {
        btnElem.className = "w-full text-left p-4 rounded-2xl border-2 border-emerald-500 bg-emerald-50 text-emerald-800 font-bold flex items-center space-x-3";
        playSound('correct');
        window.day8MeaningIndex++;
        setTimeout(() => { loadLevel(currentLevel); }, 600);
    } else {
        btnElem.className = "w-full text-left p-4 rounded-2xl border-2 border-rose-500 bg-rose-50 text-rose-800 card-shake font-bold flex items-center space-x-3";
        handleWrongAnswer();
    }
};

// MÀN 7: Nghe câu tiếng Anh và chọn đáp án đúng
window.ENG6_GAME_MODULES['listening-choice-determiners'] = {
    title: 'Màn 7: Nghe Câu & Chọn Đáp Án Đúng',
    render(ctx) {
        window.day8ListenIndex = window.day8ListenIndex || 0;
        const questions = [
            {
                en: "This is a calculator.",
                options: [
                    { text: "Đây là một chiếc máy tính cầm tay.", correct: true },
                    { text: "Đây là một chiếc hộp bút.", correct: false },
                    { text: "Kia là một cái compa.", correct: false }
                ]
            },
            {
                en: "This is an exercise.",
                options: [
                    { text: "Đây là một bài tập.", correct: true },
                    { text: "Tôi làm bài tập về nhà.", correct: false },
                    { text: "Đây là một cục tẩy.", correct: false }
                ]
            },
            {
                en: "This is a pencil case.",
                options: [
                    { text: "Đây là một chiếc hộp bút.", correct: true },
                    { text: "Kia là cặp sách của tôi.", correct: false },
                    { text: "Đây là máy tính cầm tay.", correct: false }
                ]
            },
            {
                en: "This is a compass.",
                options: [
                    { text: "Đây là một cái compa.", correct: true },
                    { text: "Đây là một bài tập.", correct: false },
                    { text: "Kia là bộ đồng phục.", correct: false }
                ]
            },
            {
                en: "This is a rubber.",
                options: [
                    { text: "Đây là một cục tẩy.", correct: true },
                    { text: "Đây là một chiếc hộp bút.", correct: false },
                    { text: "Kia là máy tính cầm tay.", correct: false }
                ]
            },
            {
                en: "This is a uniform.",
                options: [
                    { text: "Đây là một bộ đồng phục.", correct: true },
                    { text: "Tôi mặc đồng phục.", correct: false },
                    { text: "Đây là một bài tập.", correct: false }
                ]
            }
        ];

        if (window.day8ListenIndex >= questions.length) {
            window.day8ListenIndex = 0;
            completeLevel();
            return;
        }

        const currQ = questions[window.day8ListenIndex];
        let optsHTML = '';
        currQ.options.sort(() => Math.random() - 0.5).forEach((opt, idx) => {
            optsHTML += `
                <button onclick="checkDay8ListenAnswer(${opt.correct}, this)" class="w-full text-left p-4 rounded-2xl border-2 border-slate-200 bg-white hover:border-violet-500 hover:bg-violet-50/50 transition-all flex items-center space-x-3 group">
                    <span class="w-8 h-8 rounded-xl bg-slate-100 group-hover:bg-violet-600 group-hover:text-white font-extrabold text-slate-600 flex items-center justify-center text-sm transition-colors">${String.fromCharCode(65 + idx)}</span>
                    <span class="font-bold text-slate-800 text-sm md:text-base">${opt.text}</span>
                </button>
            `;
        });

        ctx.container.innerHTML = `
            <div class="text-center space-y-4">
                <div class="flex justify-between items-center">
                    <span class="text-xs font-bold text-violet-600 bg-violet-50 px-2.5 py-1 rounded-md">Câu ${window.day8ListenIndex + 1} / ${questions.length}</span>
                    <span class="txt-vi text-xs text-slate-500">Nghe & Chọn nghĩa</span>
                </div>

                <div class="p-6 bg-violet-50 border-2 border-violet-200 rounded-2xl">
                    <button onclick="speakText('${currQ.en}')" class="px-6 py-3 bg-violet-600 hover:bg-violet-700 text-white font-bold rounded-xl shadow transition-all inline-flex items-center text-lg">
                        <i class="fa-solid fa-volume-high mr-2"></i> Nghe âm thanh câu nói
                    </button>
                    <p class="text-slate-500 text-xs mt-2 italic">(Bấm để nghe câu tiếng Anh)</p>
                </div>

                <div class="space-y-3">${optsHTML}</div>
            </div>
        `;
    }
};

window.checkDay8ListenAnswer = function(isCorrect, btnElem) {
    playBtnSound();
    if (isCorrect) {
        btnElem.className = "w-full text-left p-4 rounded-2xl border-2 border-emerald-500 bg-emerald-50 text-emerald-800 font-bold flex items-center space-x-3";
        playSound('correct');
        window.day8ListenIndex++;
        setTimeout(() => { loadLevel(currentLevel); }, 600);
    } else {
        btnElem.className = "w-full text-left p-4 rounded-2xl border-2 border-rose-500 bg-rose-50 text-rose-800 card-shake font-bold flex items-center space-x-3";
        handleWrongAnswer();
    }
};