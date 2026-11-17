window.ENG6_LESSONS = window.ENG6_LESSONS || {};

window.ENG6_LESSONS[7] = {
    unit: 1,
    title: 'Verb "To Be" (am, is, are) & Unit 1',
    description: "Học cách sử dụng động từ To Be (am, is, are) kết hợp với từ vựng Unit 1",
    ipa: "/vɜːrb tuː biː/",
    
    // Cấu hình lộ trình 7 màn hoạt động cho Day 7
    activities: [
        'grammar-intro-tobe',       // Màn 1: Lý thuyết giải thích bản chất động từ To Be
        'tobe-grouping',            // Màn 2: Thực hành chia động từ To Be
        'matching-tobe',            // Màn 3: Nối chủ ngữ + To Be với từ vựng Unit 1
        'sentence-builder-tobe',    // Màn 4: Sắp xếp cấu trúc câu chứa To Be
        'speaking-tobe',            // Màn 5: Luyện nói câu chứa To Be (có đếm 5 lần mở khóa nút bỏ qua)
        'tobe-meaning-choice',      // Màn 6: Trắc nghiệm chọn nghĩa của câu chứa To Be
        'listening-choice-tobe'     // Màn 7: Nghe câu tiếng Anh chứa To Be và chọn đáp án đúng
    ],

    vocab: [
        { id: 'd7_am', en: 'am', ipa: '/æm/', vi: 'thì / là / ở (dùng với I)', wrongSpells: ['an', 'ahm'] },
        { id: 'd7_is', en: 'is', ipa: '/ɪz/', vi: 'thì / là / ở (dùng với He, She, It, This)', wrongSpells: ['izs', 'iss'] },
        { id: 'd7_are', en: 'are', ipa: '/ɑːr/', vi: 'thì / là / ở (dùng với We, You, They)', wrongSpells: ['ahr', 'aer'] },
        { id: 'd7_uniform', en: 'uniform', ipa: '/ˈjuːnɪfɔːrm/', vi: 'đồng phục', wrongSpells: ['uniforom', 'yuniform'] },
        { id: 'd7_calculator', en: 'calculator', ipa: '/ˈkælkjuleɪtər/', vi: 'máy tính cầm tay', wrongSpells: ['calulator', 'calcyulator'] },
        { id: 'd7_schoolbag', en: 'school bag', ipa: '/ˈskuːl bæɡ/', vi: 'cặp sách', wrongSpells: ['schoolbag', 'skul bag'] }
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

// MÀN 1: Lý thuyết giải thích bản chất động từ To Be (am, is, are)
window.ENG6_GAME_MODULES['grammar-intro-tobe'] = {
    title: 'Màn 1: Lý Thuyết - Bản Chất Động Từ To Be (Am, Is, Are)',
    render(ctx) {
        ctx.container.innerHTML = `
            <div class="space-y-4">
                <div class="text-center">
                    <span class="px-3 py-1 bg-cyan-100 text-cyan-800 font-bold text-xs rounded-full">Ngữ Pháp Dễ Hiểu</span>
                    <h3 class="text-2xl font-black text-slate-800 mt-2">Tại Sao Lại Dùng Am, Is, Are?</h3>
                    <p class="text-slate-600 text-sm mt-1">Hiểu bản chất để không bao giờ chia nhầm động từ To Be!</p>
                </div>

                <div class="bg-cyan-50 border-2 border-cyan-200 p-4 rounded-2xl space-y-3 text-slate-700 text-sm">
                    <div class="flex items-start space-x-3">
                        <div class="w-8 h-8 rounded-full bg-cyan-500 text-white font-bold flex items-center justify-center flex-shrink-0">1</div>
                        <div>
                            <strong class="text-cyan-900 block font-bold">I + AM (Chỉ dành riêng cho "Tôi")</strong>
                            Chữ "I" rất đặc biệt, chỉ đi kèm duy nhất với "am".<br>
                            <span class="text-xs text-cyan-700 font-medium">👉 Ví dụ: I am in uniform. (Tôi mặc đồng phục.)</span>
                        </div>
                    </div>
                    <div class="flex items-start space-x-3">
                        <div class="w-8 h-8 rounded-full bg-cyan-500 text-white font-bold flex items-center justify-center flex-shrink-0">2</div>
                        <div>
                            <strong class="text-cyan-900 block font-bold">He / She / It / This + IS (Dùng cho số ít - 1 người/vật)</strong>
                            Vì chỉ có một đối tượng đơn lẻ nên ta dùng "is".<br>
                            <span class="text-xs text-cyan-700 font-medium">👉 Ví dụ: This is my calculator. (Đây là máy tính của tôi - chỉ 1 cái.)</span>
                        </div>
                    </div>
                    <div class="flex items-start space-x-3">
                        <div class="w-8 h-8 rounded-full bg-cyan-500 text-white font-bold flex items-center justify-center flex-shrink-0">3</div>
                        <div>
                            <strong class="text-cyan-900 block font-bold">We / You / They + ARE (Dùng cho số nhiều & You)</strong>
                            Dùng cho nhóm từ 2 người/vật trở lên hoặc từ "You".<br>
                            <span class="text-xs text-cyan-700 font-medium">👉 Ví dụ: We are ready for maths. (Chúng tôi sẵn sàng học Toán.)</span>
                        </div>
                    </div>
                </div>

                <div class="text-center pt-2">
                    <button onclick="playBtnSound(); completeLevel()" class="px-8 py-3.5 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-extrabold rounded-2xl shadow-lg hover:opacity-95 transition-all text-base">
                        Đã hiểu bản chất, vào thực hành thôi! <i class="fa-solid fa-arrow-right ml-2"></i>
                    </button>
                </div>
            </div>
        `;
    }
};

// MÀN 2: Thực hành phân loại động từ To Be
window.ENG6_GAME_MODULES['tobe-grouping'] = {
    title: 'Màn 2: Thực Hành Chia Động Từ To Be',
    render(ctx) {
        window.day7GroupIndex = window.day7GroupIndex || 0;
        const questions = [
            {
                q: "Chủ ngữ \"I\" đi kèm với dạng nào của động từ To Be?",
                options: [
                    { text: "am (I am a student)", correct: true },
                    { text: "is", correct: false },
                    { text: "are", correct: false }
                ]
            },
            {
                q: "Chủ ngữ \"He\" hoặc \"She\" đi kèm với dạng nào của To Be?",
                options: [
                    { text: "is (He is in uniform)", correct: true },
                    { text: "am", correct: false },
                    { text: "are", correct: false }
                ]
            },
            {
                q: "Chủ ngữ số nhiều \"We\" hoặc \"They\" đi kèm với dạng nào?",
                options: [
                    { text: "are (We are ready)", correct: true },
                    { text: "is", correct: false },
                    { text: "am", correct: false }
                ]
            },
            {
                q: "Với danh từ số ít chỉ đồ vật \"This calculator\", ta dùng To Be nào?",
                options: [
                    { text: "is (This calculator is new)", correct: true },
                    { text: "are", correct: false },
                    { text: "am", correct: false }
                ]
            },
            {
                q: "Đại từ \"You\" (bạn / các bạn) luôn đi kèm với dạng To Be nào?",
                options: [
                    { text: "are", correct: true },
                    { text: "is", correct: false },
                    { text: "am", correct: false }
                ]
            },
            {
                q: "Khi nói về đồng phục của mình: \"My uniform ... clean.\"",
                options: [
                    { text: "is (vì uniform là số ít)", correct: true },
                    { text: "are", correct: false },
                    { text: "am", correct: false }
                ]
            }
        ];

        if (window.day7GroupIndex >= questions.length) {
            window.day7GroupIndex = 0;
            completeLevel();
            return;
        }

        const currQ = questions[window.day7GroupIndex];
        let optsHTML = '';
        currQ.options.sort(() => Math.random() - 0.5).forEach((opt, idx) => {
            optsHTML += `
                <button onclick="checkDay7GroupAnswer(${opt.correct}, this)" class="w-full text-left p-4 rounded-2xl border-2 border-slate-200 bg-white hover:border-cyan-500 hover:bg-cyan-50/50 transition-all flex items-center space-x-3 group">
                    <span class="w-8 h-8 rounded-xl bg-slate-100 group-hover:bg-cyan-500 group-hover:text-white font-extrabold text-slate-600 flex items-center justify-center text-sm transition-colors">${String.fromCharCode(65 + idx)}</span>
                    <span class="font-bold text-slate-800 text-sm md:text-base">${opt.text}</span>
                </button>
            `;
        });

        ctx.container.innerHTML = `
            <div>
                <div class="flex justify-between items-center mb-2">
                    <span class="text-xs font-bold text-cyan-600 bg-cyan-50 px-2.5 py-1 rounded-md">Câu ${window.day7GroupIndex + 1} / ${questions.length}</span>
                    <span class="txt-vi text-xs text-slate-500">Động từ To Be</span>
                </div>
                <h3 class="text-lg font-black text-slate-800 mb-4">${currQ.q}</h3>
                <div class="space-y-3">${optsHTML}</div>
            </div>
        `;
    }
};

window.checkDay7GroupAnswer = function(isCorrect, btnElem) {
    playBtnSound();
    if (isCorrect) {
        btnElem.className = "w-full text-left p-4 rounded-2xl border-2 border-emerald-500 bg-emerald-50 text-emerald-800 font-bold flex items-center space-x-3";
        playSound('correct');
        window.day7GroupIndex++;
        setTimeout(() => { loadLevel(currentLevel); }, 600);
    } else {
        btnElem.className = "w-full text-left p-4 rounded-2xl border-2 border-rose-500 bg-rose-50 text-rose-800 card-shake font-bold flex items-center space-x-3";
        handleWrongAnswer();
    }
};

// MÀN 3: Nối chủ ngữ + To Be với từ vựng Unit 1 (Đã tự động lấy đúng đáp án cho từng câu)
window.ENG6_GAME_MODULES['matching-tobe'] = {
    title: 'Màn 3: Nối Câu Chứa To Be & Từ Vựng Unit 1',
    render(ctx) {
        window.day7MatchIndex = window.day7MatchIndex || 0;
        const pairs = [
            { subject: 'I am', rest: 'in uniform (mặc đồng phục)' },
            { subject: 'This is', rest: 'my calculator (máy tính của tôi)' },
            { subject: 'That is', rest: 'my school bag (cặp sách của tôi)' },
            { subject: 'We are', rest: 'ready for maths (sẵn sàng học Toán)' },
            { subject: 'She is', rest: 'good at history (giỏi môn Lịch sử)' },
            { subject: 'They are', rest: 'in science class (trong lớp Khoa học)' }
        ];

        if (window.day7MatchIndex >= pairs.length) {
            window.day7MatchIndex = 0;
            completeLevel();
            return;
        }

        const currPair = pairs[window.day7MatchIndex];
        
        // Tất cả chủ ngữ + To Be khả thi
        const possibleSubjects = ['I am', 'This is', 'That is', 'We are', 'She is', 'They are'];
        
        // Lấy đáp án đúng kết hợp với 3 đáp án nhiễu ngẫu nhiên
        let otherSubs = possibleSubjects.filter(s => s !== currPair.subject).sort(() => Math.random() - 0.5).slice(0, 3);
        let currentOptions = [currPair.subject, ...otherSubs].sort(() => Math.random() - 0.5);

        let optsHTML = '';
        currentOptions.forEach((sub) => {
            const isCorrect = (sub === currPair.subject);
            optsHTML += `
                <button onclick="checkDay7MatchAnswer(${isCorrect}, this)" class="p-4 rounded-2xl border-2 border-slate-200 bg-white hover:border-blue-500 hover:bg-blue-50 font-black text-slate-800 text-base transition-all">
                    ${sub}
                </button>
            `;
        });

        ctx.container.innerHTML = `
            <div class="text-center">
                <div class="flex justify-between items-center mb-3">
                    <span class="text-xs font-bold text-blue-600 bg-blue-50 px-2.5 py-1 rounded-md">Cặp ${window.day7MatchIndex + 1} / ${pairs.length}</span>
                    <span class="txt-vi text-xs text-slate-500">Chọn chủ ngữ & To Be phù hợp</span>
                </div>
                <p class="text-slate-600 text-sm mb-2">Chủ ngữ và To Be nào kết hợp hoàn hảo với vế sau?</p>
                <div class="p-6 bg-blue-50 border-2 border-blue-200 rounded-2xl mb-6">
                    <span class="text-xl font-black text-blue-950">... ${currPair.rest}</span>
                </div>
                <div class="grid grid-cols-2 gap-3">${optsHTML}</div>
            </div>
        `;
    }
};

window.checkDay7MatchAnswer = function(isCorrect, btnElem) {
    playBtnSound();
    if (isCorrect) {
        btnElem.className = "p-4 rounded-2xl border-2 border-emerald-500 bg-emerald-50 font-black text-emerald-800 text-base";
        playSound('correct');
        window.day7MatchIndex++;
        setTimeout(() => { loadLevel(currentLevel); }, 600);
    } else {
        btnElem.className = "p-4 rounded-2xl border-2 border-rose-500 bg-rose-50 font-black text-rose-800 card-shake text-base";
        handleWrongAnswer();
    }
};

// MÀN 4: Sắp xếp cấu trúc câu chứa To Be (Unit 1)
window.ENG6_GAME_MODULES['sentence-builder-tobe'] = {
    title: 'Màn 4: Ghép Câu Chứa To Be (Unit 1)',
    render(ctx) {
        window.day7BuildIndex = window.day7BuildIndex || 0;
        const sentences = [
            { words: ['I', 'am', 'in', 'uniform'], full: 'I am in uniform' },
            { words: ['This', 'is', 'my', 'calculator'], full: 'This is my calculator' },
            { words: ['That', 'is', 'my', 'school', 'bag'], full: 'That is my school bag' },
            { words: ['We', 'are', 'ready', 'for', 'maths'], full: 'We are ready for maths' },
            { words: ['She', 'is', 'good', 'at', 'science'], full: 'She is good at science' },
            { words: ['They', 'are', 'in', 'history', 'class'], full: 'They are in history class' }
        ];

        if (window.day7BuildIndex >= sentences.length) {
            window.day7BuildIndex = 0;
            completeLevel();
            return;
        }

        const currS = sentences[window.day7BuildIndex];
        window.day7SelectedWords = window.day7SelectedWords || [];

        let shuffled = [...currS.words].sort(() => Math.random() - 0.5);

        let selectedHTML = window.day7SelectedWords.map((w, i) => `
            <button onclick="removeDay7Word(${i})" class="px-3 py-2 bg-blue-600 text-white font-bold rounded-xl text-sm shadow">
                ${w}
            </button>
        `).join('');

        let poolHTML = shuffled.map((w) => `
            <button onclick="addDay7Word('${w}')" class="px-4 py-2.5 bg-slate-100 hover:bg-slate-200 text-slate-800 font-bold rounded-xl text-sm border-2 border-slate-300">
                ${w}
            </button>
        `).join('');

        ctx.container.innerHTML = `
            <div>
                <div class="bg-blue-50 border border-blue-200 p-2.5 rounded-xl text-center mb-3">
                    <span class="text-xs font-bold text-blue-700">💡 Cấu trúc: Chủ ngữ + To Be (am/is/are) + Bổ ngữ (Unit 1)</span>
                </div>
                <div class="flex justify-between items-center mb-2">
                    <span class="text-xs font-bold text-slate-500">Câu ${window.day7BuildIndex + 1} / ${sentences.length}</span>
                </div>

                <div class="min-h-[60px] p-3 border-2 border-dashed border-blue-300 bg-white rounded-2xl flex flex-wrap gap-2 items-center mb-4">
                    ${selectedHTML || '<span class="text-xs text-slate-400 font-medium">Bấm các từ bên dưới để ghép câu...</span>'}
                </div>

                <div class="flex flex-wrap gap-2 justify-center mb-6">${poolHTML}</div>

                <div class="text-center space-x-2">
                    <button onclick="checkDay7BuildSentence('${currS.full}')" class="px-6 py-3 bg-emerald-600 text-white font-extrabold rounded-xl shadow">Kiểm tra</button>
                    <button onclick="resetDay7BuildSentence()" class="px-4 py-3 bg-slate-200 text-slate-700 font-bold rounded-xl">Làm lại</button>
                </div>
            </div>
        `;
    }
};

window.addDay7Word = function(word) {
    playBtnSound();
    window.day7SelectedWords = window.day7SelectedWords || [];
    window.day7SelectedWords.push(word);
    loadLevel(currentLevel);
};

window.removeDay7Word = function(index) {
    playBtnSound();
    window.day7SelectedWords.splice(index, 1);
    loadLevel(currentLevel);
};

window.resetDay7BuildSentence = function() {
    playBtnSound();
    window.day7SelectedWords = [];
    loadLevel(currentLevel);
};

window.checkDay7BuildSentence = function(target) {
    playBtnSound();
    const result = (window.day7SelectedWords || []).join(' ');
    if (result === target) {
        playSound('correct');
        window.day7SelectedWords = [];
        window.day7BuildIndex++;
        setTimeout(() => { loadLevel(currentLevel); }, 600);
    } else {
        handleWrongAnswer();
    }
};

// MÀN 5: Luyện nói câu chứa To Be (Có đếm 5 lần đọc không qua mở khóa nút bỏ qua)
window.ENG6_GAME_MODULES['speaking-tobe'] = {
    title: 'Màn 5: Luyện Nói Câu Chứa To Be',
    render(ctx) {
        window.day7SpeakIndex = window.day7SpeakIndex || 0;
        window.day7AttemptCounts = window.day7AttemptCounts || {};
        
        const sentences = [
            { en: 'I am in uniform.', vi: 'Tôi mặc đồng phục.' },
            { en: 'This is my calculator.', vi: 'Đây là máy tính cầm tay của tôi.' },
            { en: 'That is my school bag.', vi: 'Kia là cặp sách của tôi.' },
            { en: 'We are ready for maths.', vi: 'Chúng tôi sẵn sàng học Toán.' },
            { en: 'She is good at science.', vi: 'Cô ấy giỏi môn Khoa học.' },
            { en: 'They are in history class.', vi: 'Họ đang ở trong lớp Lịch sử.' }
        ];

        if (window.day7SpeakIndex >= sentences.length) {
            window.day7SpeakIndex = 0;
            window.day7AttemptCounts = {};
            completeLevel();
            return;
        }

        const currS = sentences[window.day7SpeakIndex];
        window.day7AttemptCounts[window.day7SpeakIndex] = window.day7AttemptCounts[window.day7SpeakIndex] || 0;
        const currentAttempts = window.day7AttemptCounts[window.day7SpeakIndex];

        let skipButtonHTML = '';
        if (currentAttempts >= 5) {
            skipButtonHTML = `
                <div class="mt-3 animate-fade-in">
                    <button onclick="skipDay7SpeakStep()" class="px-4 py-2 bg-amber-500 hover:bg-amber-600 text-white font-bold rounded-xl text-xs shadow-md transition-all">
                        <i class="fa-solid fa-forward mr-1"></i> Đã đọc 5 lần, bấm vào đây để bỏ qua câu này
                    </button>
                </div>
            `;
        }

        ctx.container.innerHTML = `
            <div class="text-center space-y-4">
                <div class="flex justify-between items-center">
                    <span class="text-xs font-bold text-teal-600 bg-teal-50 px-2.5 py-1 rounded-md">Luyện nói ${window.day7SpeakIndex + 1} / ${sentences.length}</span>
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
                    
                    <button onclick="window.startDay7Mic('${currS.en}')" id="btnDay7Mic" class="px-6 py-2.5 bg-rose-600 hover:bg-rose-700 text-white font-bold rounded-xl shadow transition-all flex items-center">
                        <i class="fa-solid fa-microphone mr-2"></i> <span id="micStatusText">Bật Mic & Nói</span>
                    </button>
                </div>

                <div id="day7SpeakFeedback" class="min-h-[45px] p-3 rounded-xl bg-slate-50 border border-slate-200 text-sm font-medium text-slate-600 flex flex-col items-center justify-center">
                    Nhấn "Bật Mic & Nói" rồi đọc to câu tiếng Anh trên.
                </div>

                ${skipButtonHTML}

                <div class="pt-2">
                    <button id="btnDay7Next" onclick="nextDay7SpeakStep()" disabled class="px-8 py-3.5 bg-slate-300 text-slate-500 cursor-not-allowed font-extrabold rounded-2xl shadow transition-all">
                        Đọc chính xác để tiếp tục <i class="fa-solid fa-arrow-right ml-2"></i>
                    </button>
                </div>
            </div>
        `;
    }
};

window.startDay7Mic = function(targetSentence) {
    const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
    const feedbackDiv = document.getElementById('day7SpeakFeedback');
    const micBtnText = document.getElementById('micStatusText');
    const nextBtn = document.getElementById('btnDay7Next');

    if (!SpeechRecognition) {
        alert("Trình duyệt của bạn không hỗ trợ nhận diện giọng nói. Hãy dùng Google Chrome!");
        return;
    }

    window.day7AttemptCounts = window.day7AttemptCounts || {};
    window.day7AttemptCounts[window.day7SpeakIndex] = (window.day7AttemptCounts[window.day7SpeakIndex] || 0) + 1;

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

window.skipDay7SpeakStep = function() {
    if (typeof playBtnSound === 'function') playBtnSound();
    window.day7SpeakIndex++;
    loadLevel(currentLevel);
};

window.nextDay7SpeakStep = function() {
    if (typeof playBtnSound === 'function') playBtnSound();
    window.day7SpeakIndex++;
    loadLevel(currentLevel);
};

// MÀN 6: Trắc nghiệm chọn nghĩa đúng của câu chứa To Be (Unit 1)
window.ENG6_GAME_MODULES['tobe-meaning-choice'] = {
    title: 'Màn 6: Trắc Nghiệm Nghĩa Câu Chứa To Be',
    render(ctx) {
        window.day7MeaningIndex = window.day7MeaningIndex || 0;
        const questions = [
            {
                sentence: "I am in uniform.",
                options: [
                    { text: "Tôi mặc đồng phục.", correct: true },
                    { text: "Tôi có cặp sách mới.", correct: false },
                    { text: "Tôi học môn Toán.", correct: false }
                ]
            },
            {
                sentence: "This is my calculator.",
                options: [
                    { text: "Đây là máy tính cầm tay của tôi.", correct: true },
                    { text: "Kia là đồng phục của tôi.", correct: false },
                    { text: "Chúng tôi học Khoa học.", correct: false }
                ]
            },
            {
                sentence: "That is my school bag.",
                options: [
                    { text: "Kia là cặp sách của tôi.", correct: true },
                    { text: "Đây là máy tính của tôi.", correct: false },
                    { text: "Cậu ấy mặc đồng phục.", correct: false }
                ]
            },
            {
                sentence: "We are ready for maths.",
                options: [
                    { text: "Chúng tôi sẵn sàng học Toán.", correct: true },
                    { text: "Chúng tôi đang ở lớp Lịch sử.", correct: false },
                    { text: "Họ chơi bóng đá.", correct: false }
                ]
            },
            {
                sentence: "She is good at science.",
                options: [
                    { text: "Cô ấy giỏi môn Khoa học.", correct: true },
                    { text: "Cô ấy học môn Lịch sử.", correct: false },
                    { text: "Cô ấy làm bài tập về nhà.", correct: false }
                ]
            },
            {
                sentence: "They are in history class.",
                options: [
                    { text: "Họ đang ở trong lớp Lịch sử.", correct: true },
                    { text: "Họ ăn trưa ở trường.", correct: false },
                    { text: "Họ có máy tính cầm tay.", correct: false }
                ]
            }
        ];

        if (window.day7MeaningIndex >= questions.length) {
            window.day7MeaningIndex = 0;
            completeLevel();
            return;
        }

        const currQ = questions[window.day7MeaningIndex];
        let optsHTML = '';
        currQ.options.sort(() => Math.random() - 0.5).forEach((opt, idx) => {
            optsHTML += `
                <button onclick="checkDay7MeaningAnswer(${opt.correct}, this)" class="w-full text-left p-4 rounded-2xl border-2 border-slate-200 bg-white hover:border-indigo-500 hover:bg-indigo-50/50 transition-all flex items-center space-x-3 group">
                    <span class="w-8 h-8 rounded-xl bg-slate-100 group-hover:bg-indigo-600 group-hover:text-white font-extrabold text-slate-600 flex items-center justify-center text-sm transition-colors">${String.fromCharCode(65 + idx)}</span>
                    <span class="font-bold text-slate-800 text-sm md:text-base">${opt.text}</span>
                </button>
            `;
        });

        ctx.container.innerHTML = `
            <div>
                <div class="flex justify-between items-center mb-2">
                    <span class="text-xs font-bold text-indigo-600 bg-indigo-50 px-2.5 py-1 rounded-md">Câu ${window.day7MeaningIndex + 1} / ${questions.length}</span>
                    <span class="txt-vi text-xs text-slate-500">Chọn nghĩa đúng</span>
                </div>
                <div class="p-4 bg-slate-900 text-white rounded-2xl text-center mb-4">
                    <span class="text-2xl font-black text-cyan-300">"${currQ.sentence}"</span>
                </div>
                <div class="space-y-3">${optsHTML}</div>
            </div>
        `;
    }
};

window.checkDay7MeaningAnswer = function(isCorrect, btnElem) {
    playBtnSound();
    if (isCorrect) {
        btnElem.className = "w-full text-left p-4 rounded-2xl border-2 border-emerald-500 bg-emerald-50 text-emerald-800 font-bold flex items-center space-x-3";
        playSound('correct');
        window.day7MeaningIndex++;
        setTimeout(() => { loadLevel(currentLevel); }, 600);
    } else {
        btnElem.className = "w-full text-left p-4 rounded-2xl border-2 border-rose-500 bg-rose-50 text-rose-800 card-shake font-bold flex items-center space-x-3";
        handleWrongAnswer();
    }
};

// MÀN 7: Nghe câu tiếng Anh chứa To Be và chọn đáp án đúng
window.ENG6_GAME_MODULES['listening-choice-tobe'] = {
    title: 'Màn 7: Nghe Câu To Be & Chọn Đáp Án',
    render(ctx) {
        window.day7ListenIndex = window.day7ListenIndex || 0;
        const questions = [
            {
                en: "I am in uniform.",
                options: [
                    { text: "Tôi mặc đồng phục.", correct: true },
                    { text: "Đây là máy tính của tôi.", correct: false },
                    { text: "Chúng tôi học Toán.", correct: false }
                ]
            },
            {
                en: "This is my calculator.",
                options: [
                    { text: "Đây là máy tính cầm tay của tôi.", correct: true },
                    { text: "Kia là cặp sách của tôi.", correct: false },
                    { text: "Cậu ấy mặc đồng phục.", correct: false }
                ]
            },
            {
                en: "That is my school bag.",
                options: [
                    { text: "Kia là cặp sách của tôi.", correct: true },
                    { text: "Đây là máy tính của tôi.", correct: false },
                    { text: "Chúng tôi sẵn sàng học Toán.", correct: false }
                ]
            },
            {
                en: "We are ready for maths.",
                options: [
                    { text: "Chúng tôi sẵn sàng học Toán.", correct: true },
                    { text: "Cô ấy giỏi môn Khoa học.", correct: false },
                    { text: "Họ ở trong lớp Lịch sử.", correct: false }
                ]
            },
            {
                en: "She is good at science.",
                options: [
                    { text: "Cô ấy giỏi môn Khoa học.", correct: true },
                    { text: "Cô ấy học Lịch sử.", correct: false },
                    { text: "Tôi mặc đồng phục.", correct: false }
                ]
            },
            {
                en: "They are in history class.",
                options: [
                    { text: "Họ đang ở trong lớp Lịch sử.", correct: true },
                    { text: "Họ ăn trưa ở trường.", correct: false },
                    { text: "Đây là máy tính của tôi.", correct: false }
                ]
            }
        ];

        if (window.day7ListenIndex >= questions.length) {
            window.day7ListenIndex = 0;
            completeLevel();
            return;
        }

        const currQ = questions[window.day7ListenIndex];
        let optsHTML = '';
        currQ.options.sort(() => Math.random() - 0.5).forEach((opt, idx) => {
            optsHTML += `
                <button onclick="checkDay7ListenAnswer(${opt.correct}, this)" class="w-full text-left p-4 rounded-2xl border-2 border-slate-200 bg-white hover:border-violet-500 hover:bg-violet-50/50 transition-all flex items-center space-x-3 group">
                    <span class="w-8 h-8 rounded-xl bg-slate-100 group-hover:bg-violet-600 group-hover:text-white font-extrabold text-slate-600 flex items-center justify-center text-sm transition-colors">${String.fromCharCode(65 + idx)}</span>
                    <span class="font-bold text-slate-800 text-sm md:text-base">${opt.text}</span>
                </button>
            `;
        });

        ctx.container.innerHTML = `
            <div class="text-center space-y-4">
                <div class="flex justify-between items-center">
                    <span class="text-xs font-bold text-violet-600 bg-violet-50 px-2.5 py-1 rounded-md">Câu ${window.day7ListenIndex + 1} / ${questions.length}</span>
                    <span class="txt-vi text-xs text-slate-500">Nghe & Chọn nghĩa</span>
                </div>

                <div class="p-6 bg-violet-50 border-2 border-violet-200 rounded-2xl">
                    <button onclick="speakText('${currQ.en}')" class="px-6 py-3 bg-violet-600 hover:bg-violet-700 text-white font-bold rounded-xl shadow transition-all inline-flex items-center text-lg">
                        <i class="fa-solid fa-volume-high mr-2"></i> Nghe âm thanh câu nói
                    </button>
                    <p class="text-slate-500 text-xs mt-2 italic">(Bấm để nghe câu tiếng Anh chứa To Be)</p>
                </div>

                <div class="space-y-3">${optsHTML}</div>
            </div>
        `;
    }
};

window.checkDay7ListenAnswer = function(isCorrect, btnElem) {
    playBtnSound();
    if (isCorrect) {
        btnElem.className = "w-full text-left p-4 rounded-2xl border-2 border-emerald-500 bg-emerald-50 text-emerald-800 font-bold flex items-center space-x-3";
        playSound('correct');
        window.day7ListenIndex++;
        setTimeout(() => { loadLevel(currentLevel); }, 600);
    } else {
        btnElem.className = "w-full text-left p-4 rounded-2xl border-2 border-rose-500 bg-rose-50 text-rose-800 card-shake font-bold flex items-center space-x-3";
        handleWrongAnswer();
    }
};