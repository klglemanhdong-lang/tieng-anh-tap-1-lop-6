window.ENG6_LESSONS = window.ENG6_LESSONS || {};

window.ENG6_LESSONS[39] = {
    unit: 5, // Thuộc Unit 5: Natural Wonders of Viet Nam
    title: "Day 39: Things in Nature",
    description: "Nhận diện các từ vựng về địa lý và cảnh quan thiên nhiên (mountain, river, waterfall, forest, cave, desert, beach, island)",
    ipa: "/θɪŋz ɪn ˈneɪtʃər/",
    
    // Cấu hình lộ trình 7 màn hoạt động chuẩn cho Day 39
    activities: [
        'grammar-intro-day39',       // Màn 1: Khám phá các danh thắng & cảnh quan thiên nhiên
        'multiple-choice',           // Màn 2: Trắc nghiệm mặt chữ từ vựng
        'matching-meaning',          // Màn 3: Nối từ Tiếng Anh & Nghĩa Tiếng Việt
        'listening',                 // Màn 4: Nghe âm thanh & chọn từ đúng
        'matching-ipa',              // Màn 5: Nối từ & Phiên âm IPA chuẩn
        'speaking',                  // Màn 6: Luyện phát âm AI chuẩn xác
        'spelling'                   // Màn 7: Kiểm tra lỗi chính tả từ vựng
    ],

    vocab: [
        { 
            id: 'd39_mountain', 
            en: 'mountain', 
            ipa: '/ˈmaʊntn/', 
            vi: 'núi / dãy núi', 
            wrongSpells: ['mountin', 'mounten', 'mountein'] 
        },
        { 
            id: 'd39_river', 
            en: 'river', 
            ipa: '/ˈrɪvər/', 
            vi: 'sông', 
            wrongSpells: ['rivar', 'rivver', 'rivor'] 
        },
        { 
            id: 'd39_waterfall', 
            en: 'waterfall', 
            ipa: '/ˈwɔːtərfɔːl/', 
            vi: 'thác nước', 
            wrongSpells: ['waterfaul', 'watarfall', 'water-fall'] 
        },
        { 
            id: 'd39_forest', 
            en: 'forest', 
            ipa: '/ˈfɔːrɪst/', 
            vi: 'rừng', 
            wrongSpells: ['forist', 'forrest', 'forrestt'] 
        },
        { 
            id: 'd39_cave', 
            en: 'cave', 
            ipa: '/keɪv/', 
            vi: 'hang động', 
            wrongSpells: ['caev', 'caff', 'cav'] 
        },
        { 
            id: 'd39_desert', 
            en: 'desert', 
            ipa: '/ˈdezərt/', 
            vi: 'sa mạc', 
            wrongSpells: ['dessert', 'desurt', 'dezert'] 
        },
        { 
            id: 'd39_beach', 
            en: 'beach', 
            ipa: '/biːtʃ/', 
            vi: 'bãi biển', 
            wrongSpells: ['beech', 'biach', 'beac'] 
        },
        { 
            id: 'd39_island', 
            en: 'island', 
            ipa: '/ˈaɪlənd/', 
            vi: 'hòn đảo', 
            wrongSpells: ['ailand', 'islands', 'islant'] 
        }
    ]
};

window.ENG6_GAME_MODULES = window.ENG6_GAME_MODULES || {};

// MÀN 1: Khám phá các danh thắng & cảnh quan thiên nhiên (Day 39)
window.ENG6_GAME_MODULES['grammar-intro-day39'] = {
    title: 'Màn 1: Khám Phá - Cảnh Quan & Kỳ Quan Thiên Nhiên',
    render(ctx) {
        ctx.container.innerHTML = `
            <div class="space-y-4">
                <div class="text-center">
                    <span class="px-3 py-1 bg-teal-100 text-teal-800 font-bold text-xs rounded-full">Unit 5: Natural Wonders</span>
                    <h3 class="text-2xl font-black text-slate-800 mt-2">Cảnh Quan & Kỳ Quan Thiên Nhiên</h3>
                    <p class="text-slate-600 text-sm mt-1">Làm quen với các từ vựng chỉ địa hình và danh thắng tự nhiên nổi tiếng!</p>
                </div>

                <div class="bg-teal-50 border-2 border-teal-200 p-4 rounded-2xl space-y-3 text-slate-700 text-sm">
                    <div class="flex items-start space-x-3">
                        <div class="w-8 h-8 rounded-full bg-teal-600 text-white font-bold flex items-center justify-center flex-shrink-0">1</div>
                        <div>
                            <strong class="text-teal-900 block font-bold">Địa hình đồi núi & sông nước:</strong>
                            - <span class="text-slate-900 font-semibold">mountain</span> (/ˈmaʊntn/): núi[cite: 8].<br>
                            - <span class="text-slate-900 font-semibold">river</span> (/ˈrɪvər/): con sông[cite: 8].<br>
                            - <span class="text-slate-900 font-semibold">waterfall</span> (/ˈwɔːtərfɔːl/): thác nước[cite: 8].
                        </div>
                    </div>
                    <div class="flex items-start space-x-3">
                        <div class="w-8 h-8 rounded-full bg-teal-600 text-white font-bold flex items-center justify-center flex-shrink-0">2</div>
                        <div>
                            <strong class="text-teal-900 block font-bold">Thực vật & Địa chất đặc biệt:</strong>
                            - <span class="text-slate-900 font-semibold">forest</span> (/ˈfɔːrɪst/): khu rừng[cite: 8].<br>
                            - <span class="text-slate-900 font-semibold">cave</span> (/keɪv/): hang động[cite: 8].<br>
                            - <span class="text-slate-900 font-semibold">desert</span> (/ˈdezərt/): sa mạc[cite: 8].
                        </div>
                    </div>
                    <div class="flex items-start space-x-3">
                        <div class="w-8 h-8 rounded-full bg-teal-600 text-white font-bold flex items-center justify-center flex-shrink-0">3</div>
                        <div>
                            <strong class="text-teal-900 block font-bold">Khu vực ven biển & hải đảo:</strong>
                            - <span class="text-slate-900 font-semibold">beach</span> (/biːtʃ/): bãi biển[cite: 8].<br>
                            - <span class="text-slate-900 font-semibold">island</span> (/ˈaɪlənd/): hòn đảo[cite: 8].
                        </div>
                    </div>
                </div>

                <div class="text-center pt-2">
                    <button onclick="playBtnSound(); completeLevel()" class="px-8 py-3.5 bg-gradient-to-r from-teal-600 to-cyan-600 text-white font-extrabold rounded-2xl shadow-lg hover:opacity-95 transition-all text-base">
                        Đã hiểu rõ, vào luyện tập ngay! <i class="fa-solid fa-arrow-right ml-2"></i>
                    </button>
                </div>
            </div>
        `;
    }
};