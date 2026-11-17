window.ENG6_LESSONS = window.ENG6_LESSONS || {};

window.ENG6_LESSONS[6] = {
    unit: 1,
    title: "Verb Collocations & Grouping",
    description: "Phân nhóm động từ và kết hợp từ vựng Unit 1 tạo câu hoàn chỉnh",
    ipa: "/vɜːrb ˌkɑːləˈkeɪʃənz/",
    
    // Cấu hình lộ trình 7 màn hoạt động cho Day 6
    activities: [
        'grammar-intro',             // Màn 1: Lý thuyết phân nhóm động từ
        'verb-grouping',            // Màn 2: Thực hành phân nhóm động từ (từ vựng Unit 1)
        'matching-collocation',     // Màn 3: Nối động từ với từ vựng Unit 1
        'sentence-builder',         // Màn 4: Sắp xếp cấu trúc câu Unit 1
        'speaking-short-sentence',  // Màn 5: Luyện nói câu ngắn (có đếm lượt đọc mở khóa nút bỏ qua)
        'sentence-meaning-choice',  // Màn 6: Trắc nghiệm chọn nghĩa của câu Unit 1
        'listening-choice'          // Màn 7: Nghe câu tiếng Anh và chọn đáp án đúng
    ],

    vocab: [
        { id: 'd6_play', en: 'play', ipa: '/pleɪ/', vi: 'chơi', wrongSpells: ['plai', 'plaay', 'pley'] },
        { id: 'd6_do', en: 'do', ipa: '/duː/', vi: 'làm', wrongSpells: ['doo', 'du', 'doe'] },
        { id: 'd6_have', en: 'have', ipa: '/hæv/', vi: 'có / ăn, dùng', wrongSpells: ['hav', 'haev', 'haave'] },
        { id: 'd6_study', en: 'study', ipa: '/ˈstʌdi/', vi: 'học', wrongSpells: ['studi', 'sttudy', 'studiie'] },
        { id: 'd6_maths', en: 'maths', ipa: '/mæθs/', vi: 'môn Toán', wrongSpells: ['math', 'mathes'] },
        { id: 'd6_science', en: 'science', ipa: '/ˈsaɪəns/', vi: 'môn Khoa học', wrongSpells: ['sience', 'sciens'] },
        { id: 'd6_history', en: 'history', ipa: '/ˈhɪstri/', vi: 'môn Lịch sử', wrongSpells: ['histori', 'histery'] },
        { id: 'd6_homework', en: 'homework', ipa: '/ˈhoʊmwɜːrk/', vi: 'bài tập về nhà', wrongSpells: ['homwork', 'home-work'] }
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

// MÀN 1: Lý thuyết phân nhóm động từ
window.ENG6_GAME_MODULES['grammar-intro'] = {
    title: 'Màn 1: Lý Thuyết - Phân Nhóm Động Từ Unit 1',
    render(ctx) {
        ctx.container.innerHTML = `
            <div class="space-y-4">
                <div class="text-center">
                    <span class="px-3 py-1 bg-amber-100 text-amber-800 font-bold text-xs rounded-full">Ngữ Pháp Unit 1</span>
                    <h3 class="text-2xl font-black text-slate-800 mt-2">Nguyên Tắc Kết Hợp Động Từ</h3>
                    <p class="text-slate-600 text-sm mt-1">Sử dụng chính xác từ vựng môn học và hoạt động trong Unit 1!</p>
                </div>

                <div class="bg-amber-50 border-2 border-amber-200 p-4 rounded-2xl space-y-3 text-slate-700 text-sm">
                    <div class="flex items-start space-x-3">
                        <div class="w-8 h-8 rounded-full bg-amber-500 text-white font-bold flex items-center justify-center flex-shrink-0">1</div>
                        <div>
                            <strong class="text-amber-900 block font-bold">STUDY (Học môn học)</strong>
                            Dùng cho việc học các môn khoa học, lý thuyết.<br>
                            <span class="text-xs text-amber-700 font-medium">👉 Ví dụ: study maths (học Toán), study science (học Khoa học), study history (học Lịch sử).</span>
                        </div>
                    </div>
                    <div class="flex items-start space-x-3">
                        <div class="w-8 h-8 rounded-full bg-amber-500 text-white font-bold flex items-center justify-center flex-shrink-0">2</div>
                        <div>
                            <strong class="text-amber-900 block font-bold">DO (Làm bài tập)</strong>
                            Dùng cho các công việc, bài tập cần hoàn thành.<br>
                            <span class="text-xs text-amber-700 font-medium">👉 Ví dụ: do homework (làm bài tập về nhà), do exercise (làm bài tập thể dục/bài tập).</span>
                        </div>
                    </div>
                    <div class="flex items-start space-x-3">
                        <div class="w-8 h-8 rounded-full bg-amber-500 text-white font-bold flex items-center justify-center flex-shrink-0">3</div>
                        <div>
                            <strong class="text-amber-900 block font-bold">HAVE (Có / Dùng bữa)</strong>
                            Dùng cho bữa ăn hoặc sở hữu.<br>
                            <span class="text-xs text-amber-700 font-medium">👉 Ví dụ: have school lunch (ăn trưa ở trường).</span>
                        </div>
                    </div>
                </div>

                <div class="text-center pt-2">
                    <button onclick="playBtnSound(); completeLevel()" class="px-8 py-3.5 bg-gradient-to-r from-amber-500 to-orange-500 text-white font-extrabold rounded-2xl shadow-lg hover:opacity-95 transition-all text-base">
                        Đã hiểu, bắt đầu thực hành! <i class="fa-solid fa-arrow-right ml-2"></i>
                    </button>
                </div>
            </div>
        `;
    }
};

// MÀN 2: Thực hành phân nhóm động từ (Chỉ dùng từ vựng Unit 1)
window.ENG6_GAME_MODULES['verb-grouping'] = {
    title: 'Màn 2: Thực Hành Phân Nhóm Động Từ Unit 1',
    render(ctx) {
        window.day6GroupIndex = window.day6GroupIndex || 0;
        const questions = [
            {
                q: "Động từ \"STUDY\" (học) đi kèm chuẩn xác nhất với từ nào sau đây?",
                options: [
                    { text: "maths (môn Toán) / history (môn Lịch sử)", correct: true },
                    { text: "homework (bài tập về nhà)", correct: false },
                    { text: "school lunch (bữa ăn trưa ở trường)", correct: false }
                ]
            },
            {
                q: "Động từ \"DO\" (làm) phù hợp đi kèm với từ nào chỉ nhiệm vụ học tập?",
                options: [
                    { text: "homework (bài tập về nhà) / exercise (bài tập)", correct: true },
                    { text: "science (môn Khoa học)", correct: false },
                    { text: "uniform (đồng phục)", correct: false }
                ]
            },
            {
                q: "Khi nói về \"school lunch\" (bữa ăn trưa ở trường), em dùng động từ nào?",
                options: [
                    { text: "HAVE (có / dùng bữa)", correct: true },
                    { text: "STUDY (học)", correct: false },
                    { text: "DO (làm)", correct: false }
                ]
            },
            {
                q: "Động từ nào đi kèm hoàn hảo với môn \"science\" (môn Khoa học)?",
                options: [
                    { text: "study (học)", correct: true },
                    { text: "do (làm)", correct: false },
                    { text: "have (có)", correct: false }
                ]
            },
            {
                q: "Để diễn đạt hành động tự làm \"exercise\" (bài tập), ta chọn động từ nào?",
                options: [
                    { text: "do (làm)", correct: true },
                    { text: "study (học)", correct: false },
                    { text: "have (có)", correct: false }
                ]
            },
            {
                q: "Khi học về các sự kiện quá khứ với môn \"history\" (môn Lịch sử), ta dùng:",
                options: [
                    { text: "study history", correct: true },
                    { text: "do history", correct: false },
                    { text: "have history", correct: false }
                ]
            }
        ];

        if (window.day6GroupIndex >= questions.length) {
            window.day6GroupIndex = 0;
            completeLevel();
            return;
        }

        const currQ = questions[window.day6GroupIndex];
        let optsHTML = '';
        currQ.options.sort(() => Math.random() - 0.5).forEach((opt, idx) => {
            optsHTML += `
                <button onclick="checkDay6GroupAnswer(${opt.correct}, this)" class="w-full text-left p-4 rounded-2xl border-2 border-slate-200 bg-white hover:border-amber-500 hover:bg-amber-50/50 transition-all flex items-center space-x-3 group">
                    <span class="w-8 h-8 rounded-xl bg-slate-100 group-hover:bg-amber-500 group-hover:text-white font-extrabold text-slate-600 flex items-center justify-center text-sm transition-colors">${String.fromCharCode(65 + idx)}</span>
                    <span class="font-bold text-slate-800 text-sm md:text-base">${opt.text}</span>
                </button>
            `;
        });

        ctx.container.innerHTML = `
            <div>
                <div class="flex justify-between items-center mb-2">
                    <span class="text-xs font-bold text-amber-600 bg-amber-50 px-2.5 py-1 rounded-md">Câu ${window.day6GroupIndex + 1} / ${questions.length}</span>
                    <span class="txt-vi text-xs text-slate-500">Từ vựng Unit 1</span>
                </div>
                <h3 class="text-lg font-black text-slate-800 mb-4">${currQ.q}</h3>
                <div class="space-y-3">${optsHTML}</div>
            </div>
        `;
    }
};

window.checkDay6GroupAnswer = function(isCorrect, btnElem) {
    playBtnSound();
    if (isCorrect) {
        btnElem.className = "w-full text-left p-4 rounded-2xl border-2 border-emerald-500 bg-emerald-50 text-emerald-800 font-bold flex items-center space-x-3";
        playSound('correct');
        window.day6GroupIndex++;
        setTimeout(() => { loadLevel(currentLevel); }, 600);
    } else {
        btnElem.className = "w-full text-left p-4 rounded-2xl border-2 border-rose-500 bg-rose-50 text-rose-800 card-shake font-bold flex items-center space-x-3";
        handleWrongAnswer();
    }
};

// MÀN 3: Nối động từ với từ vựng Unit 1
window.ENG6_GAME_MODULES['matching-collocation'] = {
    title: 'Màn 3: Nối Cụm Từ Unit 1',
    render(ctx) {
        window.day6MatchIndex = window.day6MatchIndex || 0;
        const pairs = [
            { verb: 'study', noun: 'maths (môn Toán)' },
            { verb: 'do', noun: 'homework (bài tập về nhà)' },
            { verb: 'have', noun: 'school lunch (bữa trưa ở trường)' },
            { verb: 'study', noun: 'science (môn Khoa học)' },
            { verb: 'do', noun: 'exercise (bài tập)' },
            { verb: 'study', noun: 'history (môn Lịch sử)' }
        ];

        if (window.day6MatchIndex >= pairs.length) {
            window.day6MatchIndex = 0;
            completeLevel();
            return;
        }

        const currPair = pairs[window.day6MatchIndex];
        const allVerbs = ['study', 'do', 'have', 'play'];

        let optsHTML = '';
        allVerbs.forEach((v) => {
            const isCorrect = (v === currPair.verb);
            optsHTML += `
                <button onclick="checkDay6MatchAnswer(${isCorrect}, this)" class="p-4 rounded-2xl border-2 border-slate-200 bg-white hover:border-indigo-500 hover:bg-indigo-50 font-black text-slate-800 text-lg transition-all">
                    ${v}
                </button>
            `;
        });

        ctx.container.innerHTML = `
            <div class="text-center">
                <div class="flex justify-between items-center mb-3">
                    <span class="text-xs font-bold text-indigo-600 bg-indigo-50 px-2.5 py-1 rounded-md">Cụm ${window.day6MatchIndex + 1} / ${pairs.length}</span>
                    <span class="txt-vi text-xs text-slate-500">Nối động từ thích hợp</span>
                </div>
                <p class="text-slate-600 text-sm mb-2">Động từ nào ghép chuẩn nhất với cụm từ Unit 1 sau?</p>
                <div class="p-6 bg-indigo-50 border-2 border-indigo-200 rounded-2xl mb-6">
                    <span class="text-2xl font-black text-indigo-900">... ${currPair.noun}</span>
                </div>
                <div class="grid grid-cols-2 gap-3">${optsHTML}</div>
            </div>
        `;
    }
};

window.checkDay6MatchAnswer = function(isCorrect, btnElem) {
    playBtnSound();
    if (isCorrect) {
        btnElem.className = "p-4 rounded-2xl border-2 border-emerald-500 bg-emerald-50 font-black text-emerald-800 text-lg";
        playSound('correct');
        window.day6MatchIndex++;
        setTimeout(() => { loadLevel(currentLevel); }, 600);
    } else {
        btnElem.className = "p-4 rounded-2xl border-2 border-rose-500 bg-rose-50 font-black text-rose-800 card-shake text-lg";
        handleWrongAnswer();
    }
};

// MÀN 4: Sắp xếp cấu trúc câu Unit 1
window.ENG6_GAME_MODULES['sentence-builder'] = {
    title: 'Màn 4: Ghép Câu Đúng Cấu Trúc Unit 1',
    render(ctx) {
        window.day6BuildIndex = window.day6BuildIndex || 0;
        const sentences = [
            { words: ['I', 'study', 'maths'], full: 'I study maths' },
            { words: ['We', 'do', 'homework'], full: 'We do homework' },
            { words: ['He', 'studies', 'science'], full: 'He studies science' },
            { words: ['She', 'studies', 'history'], full: 'She studies history' },
            { words: ['They', 'have', 'school', 'lunch'], full: 'They have school lunch' },
            { words: ['You', 'do', 'exercise'], full: 'You do exercise' }
        ];

        if (window.day6BuildIndex >= sentences.length) {
            window.day6BuildIndex = 0;
            completeLevel();
            return;
        }

        const currS = sentences[window.day6BuildIndex];
        window.day6SelectedWords = window.day6SelectedWords || [];

        let shuffled = [...currS.words].sort(() => Math.random() - 0.5);

        let selectedHTML = window.day6SelectedWords.map((w, i) => `
            <button onclick="removeDay6Word(${i})" class="px-3 py-2 bg-indigo-600 text-white font-bold rounded-xl text-sm shadow">
                ${w}
            </button>
        `).join('');

        let poolHTML = shuffled.map((w) => `
            <button onclick="addDay6Word('${w}')" class="px-4 py-2.5 bg-slate-100 hover:bg-slate-200 text-slate-800 font-bold rounded-xl text-sm border-2 border-slate-300">
                ${w}
            </button>
        `).join('');

        ctx.container.innerHTML = `
            <div>
                <div class="bg-indigo-50 border border-indigo-200 p-2.5 rounded-xl text-center mb-3">
                    <span class="text-xs font-bold text-indigo-700">💡 Công thức: Đại từ nhân xưng + Động từ + Thành phần khác (Unit 1)</span>
                </div>
                <div class="flex justify-between items-center mb-2">
                    <span class="text-xs font-bold text-slate-500">Câu ${window.day6BuildIndex + 1} / ${sentences.length}</span>
                </div>

                <div class="min-h-[60px] p-3 border-2 border-dashed border-indigo-300 bg-white rounded-2xl flex flex-wrap gap-2 items-center mb-4">
                    ${selectedHTML || '<span class="text-xs text-slate-400 font-medium">Bấm các từ bên dưới để ghép câu...</span>'}
                </div>

                <div class="flex flex-wrap gap-2 justify-center mb-6">${poolHTML}</div>

                <div class="text-center space-x-2">
                    <button onclick="checkDay6BuildSentence('${currS.full}')" class="px-6 py-3 bg-emerald-600 text-white font-extrabold rounded-xl shadow">Kiểm tra</button>
                    <button onclick="resetDay6BuildSentence()" class="px-4 py-3 bg-slate-200 text-slate-700 font-bold rounded-xl">Làm lại</button>
                </div>
            </div>
        `;
    }
};

window.addDay6Word = function(word) {
    playBtnSound();
    window.day6SelectedWords = window.day6SelectedWords || [];
    window.day6SelectedWords.push(word);
    loadLevel(currentLevel);
};

window.removeDay6Word = function(index) {
    playBtnSound();
    window.day6SelectedWords.splice(index, 1);
    loadLevel(currentLevel);
};

window.resetDay6BuildSentence = function() {
    playBtnSound();
    window.day6SelectedWords = [];
    loadLevel(currentLevel);
};

window.checkDay6BuildSentence = function(target) {
    playBtnSound();
    const result = (window.day6SelectedWords || []).join(' ');
    if (result === target) {
        playSound('correct');
        window.day6SelectedWords = [];
        window.day6BuildIndex++;
        setTimeout(() => { loadLevel(currentLevel); }, 600);
    } else {
        handleWrongAnswer();
    }
};

// MÀN 5: Luyện nói câu ngắn Unit 1 (Có đếm lượt đọc >= 5 lần mở khóa nút bỏ qua)
window.ENG6_GAME_MODULES['speaking-short-sentence'] = {
    title: 'Màn 5: Luyện Nói Câu Ngắn Unit 1',
    render(ctx) {
        window.day6SpeakIndex = window.day6SpeakIndex || 0;
        window.day6AttemptCounts = window.day6AttemptCounts || {};
        
        const sentences = [
            { en: 'I study maths.', vi: 'Tôi học môn Toán.' },
            { en: 'We do homework.', vi: 'Chúng tôi làm bài tập về nhà.' },
            { en: 'He studies science.', vi: 'Cậu ấy học môn Khoa học.' },
            { en: 'She studies history.', vi: 'Cô ấy học môn Lịch sử.' },
            { en: 'They have school lunch.', vi: 'Họ ăn trưa ở trường.' },
            { en: 'You do exercise.', vi: 'Bạn làm bài tập.' }
        ];

        if (window.day6SpeakIndex >= sentences.length) {
            window.day6SpeakIndex = 0;
            window.day6AttemptCounts = {};
            completeLevel();
            return;
        }

        const currS = sentences[window.day6SpeakIndex];
        window.day6AttemptCounts[window.day6SpeakIndex] = window.day6AttemptCounts[window.day6SpeakIndex] || 0;
        const currentAttempts = window.day6AttemptCounts[window.day6SpeakIndex];

        let skipButtonHTML = '';
        if (currentAttempts >= 5) {
            skipButtonHTML = `
                <div class="mt-3 animate-fade-in">
                    <button onclick="skipDay6SpeakStep()" class="px-4 py-2 bg-amber-500 hover:bg-amber-600 text-white font-bold rounded-xl text-xs shadow-md transition-all">
                        <i class="fa-solid fa-forward mr-1"></i> Đã đọc 5 lần, bấm vào đây để bỏ qua câu này
                    </button>
                </div>
            `;
        }

        ctx.container.innerHTML = `
            <div class="text-center space-y-4">
                <div class="flex justify-between items-center">
                    <span class="text-xs font-bold text-teal-600 bg-teal-50 px-2.5 py-1 rounded-md">Luyện nói ${window.day6SpeakIndex + 1} / ${sentences.length}</span>
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
                    
                    <button onclick="window.startDay6Mic('${currS.en}')" id="btnDay6Mic" class="px-6 py-2.5 bg-rose-600 hover:bg-rose-700 text-white font-bold rounded-xl shadow transition-all flex items-center">
                        <i class="fa-solid fa-microphone mr-2"></i> <span id="micStatusText">Bật Mic & Nói</span>
                    </button>
                </div>

                <div id="day6SpeakFeedback" class="min-h-[45px] p-3 rounded-xl bg-slate-50 border border-slate-200 text-sm font-medium text-slate-600 flex flex-col items-center justify-center">
                    Nhấn "Bật Mic & Nói" rồi đọc to câu tiếng Anh trên.
                </div>

                ${skipButtonHTML}

                <div class="pt-2">
                    <button id="btnDay6Next" onclick="nextDay6SpeakStep()" disabled class="px-8 py-3.5 bg-slate-300 text-slate-500 cursor-not-allowed font-extrabold rounded-2xl shadow transition-all">
                        Đọc chính xác để tiếp tục <i class="fa-solid fa-arrow-right ml-2"></i>
                    </button>
                </div>
            </div>
        `;
    }
};

window.startDay6Mic = function(targetSentence) {
    const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
    const feedbackDiv = document.getElementById('day6SpeakFeedback');
    const micBtnText = document.getElementById('micStatusText');
    const nextBtn = document.getElementById('btnDay6Next');

    if (!SpeechRecognition) {
        alert("Trình duyệt của bạn không hỗ trợ nhận diện giọng nói. Hãy dùng Google Chrome!");
        return;
    }

    window.day6AttemptCounts = window.day6AttemptCounts || {};
    window.day6AttemptCounts[window.day6SpeakIndex] = (window.day6AttemptCounts[window.day6SpeakIndex] || 0) + 1;

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

            if (cleanTarget.includes("studies")) {
                cleanSpoken = cleanSpoken.replace("studied", "studies").replace("study", "studies");
            }

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

window.skipDay6SpeakStep = function() {
    if (typeof playBtnSound === 'function') playBtnSound();
    window.day6SpeakIndex++;
    loadLevel(currentLevel);
};

window.nextDay6SpeakStep = function() {
    if (typeof playBtnSound === 'function') playBtnSound();
    window.day6SpeakIndex++;
    loadLevel(currentLevel);
};

// MÀN 6: Trắc nghiệm chọn nghĩa của câu Unit 1
window.ENG6_GAME_MODULES['sentence-meaning-choice'] = {
    title: 'Màn 6: Trắc Nghiệm Chọn Nghĩa Của Câu Unit 1',
    render(ctx) {
        window.day6MeaningIndex = window.day6MeaningIndex || 0;
        const questions = [
            {
                sentence: "I study maths.",
                options: [
                    { text: "Tôi học môn Toán.", correct: true },
                    { text: "Tôi làm bài tập về nhà.", correct: false },
                    { text: "Tôi ăn trưa ở trường.", correct: false }
                ]
            },
            {
                sentence: "We do homework.",
                options: [
                    { text: "Chúng tôi làm bài tập về nhà.", correct: true },
                    { text: "Chúng tôi học môn Lịch sử.", correct: false },
                    { text: "Chúng tôi học môn Khoa học.", correct: false }
                ]
            },
            {
                sentence: "He studies science.",
                options: [
                    { text: "Cậu ấy học môn Khoa học.", correct: true },
                    { text: "Cậu ấy làm bài tập.", correct: false },
                    { text: "Cậu ấy ăn trưa ở trường.", correct: false }
                ]
            },
            {
                sentence: "She studies history.",
                options: [
                    { text: "Cô ấy học môn Lịch sử.", correct: true },
                    { text: "Cô ấy học môn Toán.", correct: false },
                    { text: "Cô ấy làm bài tập.", correct: false }
                ]
            },
            {
                sentence: "They have school lunch.",
                options: [
                    { text: "Họ ăn trưa ở trường.", correct: true },
                    { text: "Họ học môn Toán.", correct: false },
                    { text: "Họ làm bài tập về nhà.", correct: false }
                ]
            },
            {
                sentence: "You do exercise.",
                options: [
                    { text: "Bạn làm bài tập.", correct: true },
                    { text: "Bạn học môn Khoa học.", correct: false },
                    { text: "Bạn ăn trưa ở trường.", correct: false }
                ]
            }
        ];

        if (window.day6MeaningIndex >= questions.length) {
            window.day6MeaningIndex = 0;
            completeLevel();
            return;
        }

        const currQ = questions[window.day6MeaningIndex];
        let optsHTML = '';
        currQ.options.sort(() => Math.random() - 0.5).forEach((opt, idx) => {
            optsHTML += `
                <button onclick="checkDay6MeaningAnswer(${opt.correct}, this)" class="w-full text-left p-4 rounded-2xl border-2 border-slate-200 bg-white hover:border-blue-500 hover:bg-blue-50/50 transition-all flex items-center space-x-3 group">
                    <span class="w-8 h-8 rounded-xl bg-slate-100 group-hover:bg-blue-600 group-hover:text-white font-extrabold text-slate-600 flex items-center justify-center text-sm transition-colors">${String.fromCharCode(65 + idx)}</span>
                    <span class="font-bold text-slate-800 text-sm md:text-base">${opt.text}</span>
                </button>
            `;
        });

        ctx.container.innerHTML = `
            <div>
                <div class="flex justify-between items-center mb-2">
                    <span class="text-xs font-bold text-blue-600 bg-blue-50 px-2.5 py-1 rounded-md">Câu ${window.day6MeaningIndex + 1} / ${questions.length}</span>
                    <span class="txt-vi text-xs text-slate-500">Chọn nghĩa đúng</span>
                </div>
                <div class="p-4 bg-slate-900 text-white rounded-2xl text-center mb-4">
                    <span class="text-2xl font-black text-amber-300">"${currQ.sentence}"</span>
                </div>
                <div class="space-y-3">${optsHTML}</div>
            </div>
        `;
    }
};

window.checkDay6MeaningAnswer = function(isCorrect, btnElem) {
    playBtnSound();
    if (isCorrect) {
        btnElem.className = "w-full text-left p-4 rounded-2xl border-2 border-emerald-500 bg-emerald-50 text-emerald-800 font-bold flex items-center space-x-3";
        playSound('correct');
        window.day6MeaningIndex++;
        setTimeout(() => { loadLevel(currentLevel); }, 600);
    } else {
        btnElem.className = "w-full text-left p-4 rounded-2xl border-2 border-rose-500 bg-rose-50 text-rose-800 card-shake font-bold flex items-center space-x-3";
        handleWrongAnswer();
    }
};

// MÀN 7: Nghe câu tiếng Anh và chọn đáp án đúng (Sử dụng từ vựng Unit 1)
window.ENG6_GAME_MODULES['listening-choice'] = {
    title: 'Màn 7: Nghe Câu Tiếng Anh & Chọn Đáp Án Đúng',
    render(ctx) {
        window.day6ListenIndex = window.day6ListenIndex || 0;
        const questions = [
            {
                en: "I study maths.",
                options: [
                    { text: "Tôi học môn Toán.", correct: true },
                    { text: "Chúng tôi làm bài tập.", correct: false },
                    { text: "Cậu ấy ăn trưa ở trường.", correct: false }
                ]
            },
            {
                en: "We do homework.",
                options: [
                    { text: "Chúng tôi làm bài tập về nhà.", correct: true },
                    { text: "Họ học môn Lịch sử.", correct: false },
                    { text: "Bạn học môn Khoa học.", correct: false }
                ]
            },
            {
                en: "He studies science.",
                options: [
                    { text: "Cậu ấy học môn Khoa học.", correct: true },
                    { text: "Cậu ấy làm bài tập.", correct: false },
                    { text: "Cậu ấy ăn trưa ở trường.", correct: false }
                ]
            },
            {
                en: "She studies history.",
                options: [
                    { text: "Cô ấy học môn Lịch sử.", correct: true },
                    { text: "Cô ấy học môn Toán.", correct: false },
                    { text: "Cô ấy làm bài tập về nhà.", correct: false }
                ]
            },
            {
                en: "They have school lunch.",
                options: [
                    { text: "Họ ăn trưa ở trường.", correct: true },
                    { text: "Họ học môn Khoa học.", correct: false },
                    { text: "Họ làm bài tập.", correct: false }
                ]
            },
            {
                en: "You do exercise.",
                options: [
                    { text: "Bạn làm bài tập.", correct: true },
                    { text: "Bạn học môn Lịch sử.", correct: false },
                    { text: "Bạn ăn trưa ở trường.", correct: false }
                ]
            }
        ];

        if (window.day6ListenIndex >= questions.length) {
            window.day6ListenIndex = 0;
            completeLevel();
            return;
        }

        const currQ = questions[window.day6ListenIndex];
        let optsHTML = '';
        currQ.options.sort(() => Math.random() - 0.5).forEach((opt, idx) => {
            optsHTML += `
                <button onclick="checkDay6ListenAnswer(${opt.correct}, this)" class="w-full text-left p-4 rounded-2xl border-2 border-slate-200 bg-white hover:border-violet-500 hover:bg-violet-50/50 transition-all flex items-center space-x-3 group">
                    <span class="w-8 h-8 rounded-xl bg-slate-100 group-hover:bg-violet-600 group-hover:text-white font-extrabold text-slate-600 flex items-center justify-center text-sm transition-colors">${String.fromCharCode(65 + idx)}</span>
                    <span class="font-bold text-slate-800 text-sm md:text-base">${opt.text}</span>
                </button>
            `;
        });

        ctx.container.innerHTML = `
            <div class="text-center space-y-4">
                <div class="flex justify-between items-center">
                    <span class="text-xs font-bold text-violet-600 bg-violet-50 px-2.5 py-1 rounded-md">Câu ${window.day6ListenIndex + 1} / ${questions.length}</span>
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

window.checkDay6ListenAnswer = function(isCorrect, btnElem) {
    playBtnSound();
    if (isCorrect) {
        btnElem.className = "w-full text-left p-4 rounded-2xl border-2 border-emerald-500 bg-emerald-50 text-emerald-800 font-bold flex items-center space-x-3";
        playSound('correct');
        window.day6ListenIndex++;
        setTimeout(() => { loadLevel(currentLevel); }, 600);
    } else {
        btnElem.className = "w-full text-left p-4 rounded-2xl border-2 border-rose-500 bg-rose-50 text-rose-800 card-shake font-bold flex items-center space-x-3";
        handleWrongAnswer();
    }
};