window.ENG6_LESSONS = window.ENG6_LESSONS || {};

window.ENG6_LESSONS[9] = {
    unit: 2, // Thuộc Unit 2: My House
    title: "Day 9: Types of House",
    description: "Loại nhà (Town house, Country house, Flat, Stilt house, Villa)",
    ipa: "/taɪps əv haʊs/",
    
    // Cấu hình lộ trình 7 màn hoạt động chuẩn Unit 2
    activities: [
        'grammar-intro-unit2',       // Màn 1: Lý thuyết giới thiệu chủ đề các loại nhà
        'multiple-choice',           // Màn 2: Trắc nghiệm mặt chữ từ vựng
        'matching-meaning',          // Màn 3: Nối từ Tiếng Anh & Nghĩa Tiếng Việt
        'listening',                 // Màn 4: Nghe âm thanh & chọn nghĩa đúng
        'matching-ipa',              // Màn 5: Nối từ & Phiên âm IPA chuẩn
        'speaking',                  // Màn 6: Luyện phát âm AI chuẩn xác
        'spelling'                   // Màn 7: Kiểm tra lỗi chính tả từ vựng
    ],

    vocab: [
        { 
            id: 'd9_townhouse', 
            en: 'town house', 
            ipa: '/ˈtaʊn haʊs/', 
            vi: 'nhà phố', 
            wrongSpells: ['townhouse', 'taun house', 'town hous'] 
        },
        { 
            id: 'd9_countryhouse', 
            en: 'country house', 
            ipa: '/ˈkʌntri haʊs/', 
            vi: 'nhà ở nông thôn', 
            wrongSpells: ['contry house', 'country hous', 'countri house'] 
        },
        { 
            id: 'd9_flat', 
            en: 'flat', 
            ipa: '/flæt/', 
            vi: 'căn hộ', 
            wrongSpells: ['flaet', 'flattt', 'flet'] 
        },
        { 
            id: 'd9_stilthouse', 
            en: 'stilt house', 
            ipa: '/stɪlt haʊs/', 
            vi: 'nhà sàn', 
            wrongSpells: ['steelt house', 'stilt hous', 'stilt houze'] 
        },
        { 
            id: 'd9_villa', 
            en: 'villa', 
            ipa: '/ˈvɪlə/', 
            vi: 'biệt thự', 
            wrongSpells: ['vila', 'villla', 'villea'] 
        }
    ]
};

window.ENG6_GAME_MODULES = window.ENG6_GAME_MODULES || {};

// MÀN 1: Lý thuyết giới thiệu chủ đề các loại nhà trong Unit 2
window.ENG6_GAME_MODULES['grammar-intro-unit2'] = {
    title: 'Màn 1: Khám Phá - Các Loại Nhà (Types of House)',
    render(ctx) {
        ctx.container.innerHTML = `
            <div class="space-y-4">
                <div class="text-center">
                    <span class="px-3 py-1 bg-emerald-100 text-emerald-800 font-bold text-xs rounded-full">Unit 2: My House</span>
                    <h3 class="text-2xl font-black text-slate-800 mt-2">Từ Vựng Về Các Loại Nhà</h3>
                    <p class="text-slate-600 text-sm mt-1">Khám phá các kiểu nhà ở quen thuộc trong tiếng Anh!</p>
                </div>

                <div class="bg-emerald-50 border-2 border-emerald-200 p-4 rounded-2xl space-y-3 text-slate-700 text-sm">
                    <div class="flex items-start space-x-3">
                        <div class="w-8 h-8 rounded-full bg-emerald-600 text-white font-bold flex items-center justify-center flex-shrink-0">1</div>
                        <div>
                            <strong class="text-emerald-900 block font-bold">Town house & Country house</strong>
                            - <span class="text-slate-900 font-semibold">town house</span> (/ˈtaʊn haʊs/): nhà phố.<br>
                            - <span class="text-slate-900 font-semibold">country house</span> (/ˈkʌntri haʊs/): nhà ở nông thôn.
                        </div>
                    </div>
                    <div class="flex items-start space-x-3">
                        <div class="w-8 h-8 rounded-full bg-emerald-600 text-white font-bold flex items-center justify-center flex-shrink-0">2</div>
                        <div>
                            <strong class="text-emerald-900 block font-bold">Flat & Stilt house</strong>
                            - <span class="text-slate-900 font-semibold">flat</span> (/flæt/): căn hộ chung cư.<br>
                            - <span class="text-slate-900 font-semibold">stilt house</span> (/stɪlt haʊs/): nhà sàn (thường ở vùng núi).
                        </div>
                    </div>
                    <div class="flex items-start space-x-3">
                        <div class="w-8 h-8 rounded-full bg-emerald-600 text-white font-bold flex items-center justify-center flex-shrink-0">3</div>
                        <div>
                            <strong class="text-emerald-900 block font-bold">Villa</strong>
                            - <span class="text-slate-900 font-semibold">villa</span> (/ˈvɪlə/): biệt thự sang trọng, rộng rãi.
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