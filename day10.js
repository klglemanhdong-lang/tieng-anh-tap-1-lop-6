window.ENG6_LESSONS = window.ENG6_LESSONS || {};

window.ENG6_LESSONS[10] = {
    unit: 2, // Thuộc Unit 2: My House
    title: "Day 10: Rooms in the House",
    description: "Các phòng trong nhà (Hall, Kitchen, Bedroom, Bathroom, Living room)",
    ipa: "/ruːmz ɪn ðə haʊs/",
    
    // Cấu hình lộ trình 7 màn hoạt động chuẩn Unit 2
    activities: [
        'grammar-intro-unit2-day10',  // Màn 1: Lý thuyết giới thiệu chủ đề các phòng trong nhà
        'multiple-choice',             // Màn 2: Trắc nghiệm mặt chữ từ vựng
        'matching-meaning',            // Màn 3: Nối từ Tiếng Anh & Nghĩa Tiếng Việt
        'listening',                   // Màn 4: Nghe âm thanh & chọn nghĩa đúng
        'matching-ipa',                // Màn 5: Nối từ & Phiên âm IPA chuẩn
        'speaking',                    // Màn 6: Luyện phát âm AI chuẩn xác
        'spelling'                     // Màn 7: Kiểm tra lỗi chính tả từ vựng
    ],

    vocab: [
        { 
            id: 'd10_hall', 
            en: 'hall', 
            ipa: '/hɔːl/', 
            vi: 'sảnh, hành lang', 
            wrongSpells: ['hal', 'haul', 'holl'] 
        },
        { 
            id: 'd10_kitchen', 
            en: 'kitchen', 
            ipa: '/ˈkɪtʃɪn/', 
            vi: 'phòng bếp', 
            wrongSpells: ['kitchin', 'kichens', 'kithen'] 
        },
        { 
            id: 'd10_bedroom', 
            en: 'bedroom', 
            ipa: '/ˈbedruːm/', 
            vi: 'phòng ngủ', 
            wrongSpells: ['bedrom', 'bed-room', 'bedroum'] 
        },
        { 
            id: 'd10_bathroom', 
            en: 'bathroom', 
            ipa: '/ˈbɑːθruːm/', 
            vi: 'phòng tắm', 
            wrongSpells: ['bathrom', 'bath-room', 'batzroom'] 
        },
        { 
            id: 'd10_livingroom', 
            en: 'living room', 
            ipa: '/ˈlɪvɪŋ ruːm/', 
            vi: 'phòng khách', 
            wrongSpells: ['livingroom', 'livin room', 'living-room'] 
        }
    ]
};

window.ENG6_GAME_MODULES = window.ENG6_GAME_MODULES || {};

// MÀN 1: Lý thuyết giới thiệu chủ đề các phòng trong nhà (Day 10)
window.ENG6_GAME_MODULES['grammar-intro-unit2-day10'] = {
    title: 'Màn 1: Khám Phá - Các Phòng Trong Nhà (Rooms)',
    render(ctx) {
        ctx.container.innerHTML = `
            <div class="space-y-4">
                <div class="text-center">
                    <span class="px-3 py-1 bg-indigo-100 text-indigo-800 font-bold text-xs rounded-full">Unit 2: My House</span>
                    <h3 class="text-2xl font-black text-slate-800 mt-2">Từ Vựng Về Các Phòng Trong Nhà</h3>
                    <p class="text-slate-600 text-sm mt-1">Làm quen với các không gian sinh hoạt chính trong ngôi nhà của bạn!</p>
                </div>

                <div class="bg-indigo-50 border-2 border-indigo-200 p-4 rounded-2xl space-y-3 text-slate-700 text-sm">
                    <div class="flex items-start space-x-3">
                        <div class="w-8 h-8 rounded-full bg-indigo-600 text-white font-bold flex items-center justify-center flex-shrink-0">1</div>
                        <div>
                            <strong class="text-indigo-900 block font-bold">Hall & Kitchen</strong>
                            - <span class="text-slate-900 font-semibold">hall</span> (/hɔːl/): sảnh, hành lang.<br>
                            - <span class="text-slate-900 font-semibold">kitchen</span> (/ˈkɪtʃɪn/): phòng bếp (nơi nấu nướng).
                        </div>
                    </div>
                    <div class="flex items-start space-x-3">
                        <div class="w-8 h-8 rounded-full bg-indigo-600 text-white font-bold flex items-center justify-center flex-shrink-0">2</div>
                        <div>
                            <strong class="text-indigo-900 block font-bold">Bedroom & Bathroom</strong>
                            - <span class="text-slate-900 font-semibold">bedroom</span> (/ˈbedruːm/): phòng ngủ.<br>
                            - <span class="text-slate-900 font-semibold">bathroom</span> (/ˈbɑːθruːm/): phòng tắm.
                        </div>
                    </div>
                    <div class="flex items-start space-x-3">
                        <div class="w-8 h-8 rounded-full bg-indigo-600 text-white font-bold flex items-center justify-center flex-shrink-0">3</div>
                        <div>
                            <strong class="text-indigo-900 block font-bold">Living room</strong>
                            - <span class="text-slate-900 font-semibold">living room</span> (/ˈlɪvɪŋ ruːm/): phòng khách (nơi tiếp khách, sinh hoạt chung).
                        </div>
                    </div>
                </div>

                <div class="text-center pt-2">
                    <button onclick="playBtnSound(); completeLevel()" class="px-8 py-3.5 bg-gradient-to-r from-indigo-600 to-blue-600 text-white font-extrabold rounded-2xl shadow-lg hover:opacity-95 transition-all text-base">
                        Đã hiểu, vào luyện tập ngay! <i class="fa-solid fa-arrow-right ml-2"></i>
                    </button>
                </div>
            </div>
        `;
    }
};