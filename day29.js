window.ENG6_LESSONS = window.ENG6_LESSONS || {};

window.ENG6_LESSONS[29] = {
    unit: 4, // Thuộc Unit 4: My Neighbourhood
    title: "Day 29: Places in a Neighbourhood",
    description: "Nhận diện các địa điểm công cộng nổi tiếng (square, art gallery, cathedral, temple, railway station)",
    ipa: "/ˈpleɪsɪz ɪn ə ˈneɪbərhʊd/",
    
    // Cấu hình lộ trình 7 màn hoạt động chuẩn cho Day 29
    activities: [
        'grammar-intro-day29',       // Màn 1: Khám phá các địa điểm trong khu phố
        'multiple-choice',           // Màn 2: Trắc nghiệm mặt chữ từ vựng
        'matching-meaning',          // Màn 3: Nối từ Tiếng Anh & Nghĩa Tiếng Việt
        'listening',                 // Màn 4: Nghe âm thanh & chọn từ đúng
        'matching-ipa',              // Màn 5: Nối từ & Phiên âm IPA chuẩn
        'speaking',                  // Màn 6: Luyện phát âm AI chuẩn xác
        'spelling'                   // Màn 7: Kiểm tra lỗi chính tả từ vựng
    ],

    vocab: [
        { 
            id: 'd29_square', 
            en: 'square', 
            ipa: '/skwer/', 
            vi: 'quảng trường', 
            wrongSpells: ['squar', 'squerr', 'skware'] 
        },
        { 
            id: 'd29_artgallery', 
            en: 'art gallery', 
            ipa: '/ɑːrt ˈɡæləri/', 
            vi: 'phòng tranh / triển lãm nghệ thuật', 
            wrongSpells: ['art galery', 'art gallary', 'art-gallery'] 
        },
        { 
            id: 'd29_cathedral', 
            en: 'cathedral', 
            ipa: '/kəˈθiːdrəl/', 
            vi: 'nhà thờ lớn', 
            wrongSpells: ['cathedrel', 'cathidral', 'cathedralu'] 
        },
        { 
            id: 'd29_temple', 
            en: 'temple', 
            ipa: '/ˈtempl/', 
            vi: 'đền / ngôi đền', 
            wrongSpells: ['tempel', 'temppl', 'templ'] 
        },
        { 
            id: 'd29_railwaystation', 
            en: 'railway station', 
            ipa: '/ˈreɪlweɪ ˈsteɪʃn/', 
            vi: 'ga tàu hỏa', 
            wrongSpells: ['railway statin', 'railway-station', 'railway stationn'] 
        }
    ]
};

window.ENG6_GAME_MODULES = window.ENG6_GAME_MODULES || {};

// MÀN 1: Khám phá các địa điểm trong khu phố (Day 29)
window.ENG6_GAME_MODULES['grammar-intro-day29'] = {
    title: 'Màn 1: Khám Phá - Các Địa Điểm Trong Khu Phố (Places)',
    render(ctx) {
        ctx.container.innerHTML = `
            <div class="space-y-4">
                <div class="text-center">
                    <span class="px-3 py-1 bg-emerald-100 text-emerald-800 font-bold text-xs rounded-full">Unit 4: My Neighbourhood</span>
                    <h3 class="text-2xl font-black text-slate-800 mt-2">Các Địa Điểm Trong Khu Phố</h3>
                    <p class="text-slate-600 text-sm mt-1">Làm quen với các địa điểm công cộng và tham quan nổi tiếng!</p>
                </div>

                <div class="bg-emerald-50 border-2 border-emerald-200 p-4 rounded-2xl space-y-3 text-slate-700 text-sm">
                    <div class="flex items-start space-x-3">
                        <div class="w-8 h-8 rounded-full bg-emerald-600 text-white font-bold flex items-center justify-center flex-shrink-0">1</div>
                        <div>
                            <strong class="text-emerald-900 block font-bold">Khu vực công cộng lớn:</strong>
                            - <span class="text-slate-900 font-semibold">square</span> (/skwer/): quảng trường[cite: 9].<br>
                            - <span class="text-slate-900 font-semibold">art gallery</span> (/ɑːrt ˈɡæləri/): phòng tranh, triển lãm nghệ thuật[cite: 9].
                        </div>
                    </div>
                    <div class="flex items-start space-x-3">
                        <div class="w-8 h-8 rounded-full bg-emerald-600 text-white font-bold flex items-center justify-center flex-shrink-0">2</div>
                        <div>
                            <strong class="text-emerald-900 block font-bold">Kiến trúc tôn giáo & Di tích:</strong>
                            - <span class="text-slate-900 font-semibold">cathedral</span> (/kəˈθiːdrəl/): nhà thờ lớn[cite: 9].<br>
                            - <span class="text-slate-900 font-semibold">temple</span> (/ˈtempl/): đền, ngôi đền[cite: 9].
                        </div>
                    </div>
                    <div class="flex items-start space-x-3">
                        <div class="w-8 h-8 rounded-full bg-emerald-600 text-white font-bold flex items-center justify-center flex-shrink-0">3</div>
                        <div>
                            <strong class="text-emerald-900 block font-bold">Hệ thống giao thông:</strong>
                            - <span class="text-slate-900 font-semibold">railway station</span> (/ˈreɪlweɪ ˈsteɪʃn/): ga tàu hỏa[cite: 9].
                        </div>
                    </div>
                </div>

                <div class="text-center pt-2">
                    <button onclick="playBtnSound(); completeLevel()" class="px-8 py-3.5 bg-gradient-to-r from-emerald-600 to-teal-600 text-white font-extrabold rounded-2xl shadow-lg hover:opacity-95 transition-all text-base">
                        Đã hiểu rõ, vào luyện tập ngay! <i class="fa-solid fa-arrow-right ml-2"></i>
                    </button>
                </div>
            </div>
        `;
    }
};