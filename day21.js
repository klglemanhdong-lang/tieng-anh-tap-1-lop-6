window.ENG6_LESSONS = window.ENG6_LESSONS || {};

window.ENG6_LESSONS[21] = {
    unit: 3, // Thuộc Unit 3: My Friends
    title: "Day 21: Personality Adjectives - Part 1",
    description: "Học các tính từ chỉ tính cách thông dụng (careful, shy, creative, clever, kind, friendly)",
    ipa: "/ˌpɜːrsəˈnæləti ˈædʒɪktɪvz/",
    
    // Cấu hình lộ trình 7 màn hoạt động chuẩn cho Day 21
    activities: [
        'grammar-intro-day21',       // Màn 1: Khám phá các tính từ tính cách cơ bản
        'multiple-choice',            // Màn 2: Trắc nghiệm mặt chữ từ vựng
        'matching-meaning',           // Màn 3: Nối từ & Nghĩa Tiếng Việt
        'listening',                  // Màn 4: Nghe âm thanh & chọn đáp án đúng
        'matching-ipa',               // Màn 5: Nối từ & Phiên âm IPA chuẩn
        'speaking',                   // Màn 6: Luyện phát âm AI chuẩn xác
        'spelling'                    // Màn 7: Kiểm tra lỗi chính tả từ vựng
    ],

    vocab: [
        { 
            id: 'd21_careful', 
            en: 'careful', 
            ipa: '/ˈkerfəl/', 
            vi: 'cẩn thận', 
            wrongSpells: ['carefull', 'carful', 'cairful'] 
        },
        { 
            id: 'd21_shy', 
            en: 'shy', 
            ipa: '/ʃaɪ/', 
            vi: 'rụt rè / e thẹn', 
            wrongSpells: ['shye', 'shii', 'shai'] 
        },
        { 
            id: 'd21_creative', 
            en: 'creative', 
            ipa: '/kriˈeɪtɪv/', 
            vi: 'sáng tạo', 
            wrongSpells: ['creativ', 'creativv', 'creatife'] 
        },
        { 
            id: 'd21_clever', 
            en: 'clever', 
            ipa: '/ˈklevər/', 
            vi: 'thông minh / khéo léo', 
            wrongSpells: ['clevar', 'cleverr', 'claver'] 
        },
        { 
            id: 'd21_kind', 
            en: 'kind', 
            ipa: '/kaɪnd/', 
            vi: 'tử tế / tốt bụng', 
            wrongSpells: ['kynd', 'kindd', 'keind'] 
        },
        { 
            id: 'd21_friendly', 
            en: 'friendly', 
            ipa: '/ˈfrendli/', 
            vi: 'thân thiện', 
            wrongSpells: ['friendli', 'friendley', 'frendly'] 
        }
    ]
};

window.ENG6_GAME_MODULES = window.ENG6_GAME_MODULES || {};

// MÀN 1: Khám phá tính cách cơ bản (Day 21)
window.ENG6_GAME_MODULES['grammar-intro-day21'] = {
    title: 'Màn 1: Khám Phá - Tính Cách Cơ Bản (Personality Adjectives)',
    render(ctx) {
        ctx.container.innerHTML = `
            <div class="space-y-4">
                <div class="text-center">
                    <span class="px-3 py-1 bg-pink-100 text-pink-800 font-bold text-xs rounded-full">Unit 3: My Friends</span>
                    <h3 class="text-2xl font-black text-slate-800 mt-2">Tính Cách Cơ Bản (Part 1)</h3>
                    <p class="text-slate-600 text-sm mt-1">Làm quen với các tính từ miêu tả tính cách con người thông dụng nhất!</p>
                </div>

                <div class="bg-pink-50 border-2 border-pink-200 p-4 rounded-2xl space-y-3 text-slate-700 text-sm">
                    <div class="flex items-start space-x-3">
                        <div class="w-8 h-8 rounded-full bg-pink-600 text-white font-bold flex items-center justify-center flex-shrink-0">1</div>
                        <div>
                            <strong class="text-pink-900 block font-bold">Cẩn thận & Rụt rè:</strong>
                            - <span class="text-slate-900 font-semibold">careful</span> (/ˈkerfəl/): cẩn thận.<br>
                            - <span class="text-slate-900 font-semibold">shy</span> (/ʃaɪ/): rụt rè, e thẹn.
                        </div>
                    </div>
                    <div class="flex items-start space-x-3">
                        <div class="w-8 h-8 rounded-full bg-pink-600 text-white font-bold flex items-center justify-center flex-shrink-0">2</div>
                        <div>
                            <strong class="text-pink-900 block font-bold">Sáng tạo & Thông minh:</strong>
                            - <span class="text-slate-900 font-semibold">creative</span> (/kriˈeɪtɪv/): sáng tạo.<br>
                            - <span class="text-slate-900 font-semibold">clever</span> (/ˈklevər/): thông minh, khéo léo.
                        </div>
                    </div>
                    <div class="flex items-start space-x-3">
                        <div class="w-8 h-8 rounded-full bg-pink-600 text-white font-bold flex items-center justify-center flex-shrink-0">3</div>
                        <div>
                            <strong class="text-pink-900 block font-bold">Tốt bụng & Thân thiện:</strong>
                            - <span class="text-slate-900 font-semibold">kind</span> (/kaɪnd/): tử tế, tốt bụng.<br>
                            - <span class="text-slate-900 font-semibold">friendly</span> (/ˈfrendli/): thân thiện.
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