window.ENG6_LESSONS = window.ENG6_LESSONS || {};

window.ENG6_LESSONS[12] = {
    unit: 2, // Thuộc Unit 2: My House
    title: "Day 12: Furniture & Appliances",
    description: "Đồ đạc & Thiết bị trong nhà (Door, Wall, Cupboard, Wardrobe, Shelf, Fridge, Dishwasher, Sink, Chest of drawers)",
    ipa: "/ˈfɜːrnɪtʃər ænd əˈplaɪənsɪz/",
    
    // Cấu hình lộ trình 7 màn hoạt động chuẩn Unit 2
    activities: [
        'grammar-intro-unit2-day12',  // Màn 1: Lý thuyết giới thiệu đồ đạc & thiết bị
        'multiple-choice',             // Màn 2: Trắc nghiệm mặt chữ từ vựng
        'matching-meaning',            // Màn 3: Nối từ Tiếng Anh & Nghĩa Tiếng Việt
        'listening',                   // Màn 4: Nghe âm thanh & chọn nghĩa đúng
        'matching-ipa',                // Màn 5: Nối từ & Phiên âm IPA chuẩn
        'speaking',                    // Màn 6: Luyện phát âm AI chuẩn xác
        'spelling'                     // Màn 7: Kiểm tra lỗi chính tả từ vựng
    ],

    vocab: [
        { 
            id: 'd12_door', 
            en: 'door', 
            ipa: '/dɔːr/', 
            vi: 'cửa ra vào', 
            wrongSpells: ['dor', 'doore', 'dour'] 
        },
        { 
            id: 'd12_wall', 
            en: 'wall', 
            ipa: '/wɔːl/', 
            vi: 'bức tường', 
            wrongSpells: ['wal', 'walle', 'wol'] 
        },
        { 
            id: 'd12_cupboard', 
            en: 'cupboard', 
            ipa: '/ˈkʌbəd/', 
            vi: 'tủ ly / tủ bát', 
            wrongSpells: ['cupbord', 'cubboard', 'cupboarde'] 
        },
        { 
            id: 'd12_wardrobe', 
            en: 'wardrobe', 
            ipa: '/ˈwɔːdrəʊb/', 
            vi: 'tủ quần áo', 
            wrongSpells: ['wardrob', 'watdrobe', 'wardroob'] 
        },
        { 
            id: 'd12_shelf', 
            en: 'shelf', 
            ipa: '/ʃelf/', 
            vi: 'cái kệ, giá', 
            wrongSpells: ['schelf', 'shelfe', 'shelff'] 
        },
        { 
            id: 'd12_fridge', 
            en: 'fridge', 
            ipa: '/frɪdʒ/', 
            vi: 'tủ lạnh', 
            wrongSpells: ['frigde', 'fringe', 'fregde'] 
        },
        { 
            id: 'd12_dishwasher', 
            en: 'dishwasher', 
            ipa: '/ˈdɪʃwɒʃər/', 
            vi: 'máy rửa bát', 
            wrongSpells: ['dish washer', 'dishwaser', 'dichwasher'] 
        },
        { 
            id: 'd12_sink', 
            en: 'sink', 
            ipa: '/sɪŋk/', 
            vi: 'bồn rửa', 
            wrongSpells: ['sinc', 'synk', 'sinke'] 
        },
        { 
            id: 'd12_chestofdrawers', 
            en: 'chest of drawers', 
            ipa: '/tʃest əv drɔːz/', 
            vi: 'tủ có nhiều ngăn kéo', 
            wrongSpells: ['chest of drawer', 'chestofdrawers', 'chest of drawes'] 
        }
    ]
};

window.ENG6_GAME_MODULES = window.ENG6_GAME_MODULES || {};

// MÀN 1: Lý thuyết giới thiệu đồ đạc & thiết bị trong nhà (Day 12)
window.ENG6_GAME_MODULES['grammar-intro-unit2-day12'] = {
    title: 'Màn 1: Khám Phá - Đồ Đạc & Thiết Bị (Furniture & Appliances)',
    render(ctx) {
        ctx.container.innerHTML = `
            <div class="space-y-4">
                <div class="text-center">
                    <span class="px-3 py-1 bg-purple-100 text-purple-800 font-bold text-xs rounded-full">Unit 2: My House</span>
                    <h3 class="text-2xl font-black text-slate-800 mt-2">Đồ Đạc & Thiết Bị Trong Nhà</h3>
                    <p class="text-slate-600 text-sm mt-1">Khám phá các vật dụng chứa đồ và thiết bị tiện ích!</p>
                </div>

                <div class="bg-purple-50 border-2 border-purple-200 p-4 rounded-2xl space-y-3 text-slate-700 text-sm">
                    <div class="flex items-start space-x-3">
                        <div class="w-8 h-8 rounded-full bg-purple-600 text-white font-bold flex items-center justify-center flex-shrink-0">1</div>
                        <div>
                            <strong class="text-purple-900 block font-bold">Door, Wall & Shelf</strong>
                            - <span class="text-slate-900 font-semibold">door</span> (/dɔːr/): cửa ra vào.<br>
                            - <span class="text-slate-900 font-semibold">wall</span> (/wɔːl/): bức tường.<br>
                            - <span class="text-slate-900 font-semibold">shelf</span> (/ʃelf/ - số nhiều: <em>shelves</em>): cái kệ, giá.
                        </div>
                    </div>
                    <div class="flex items-start space-x-3">
                        <div class="w-8 h-8 rounded-full bg-purple-600 text-white font-bold flex items-center justify-center flex-shrink-0">2</div>
                        <div>
                            <strong class="text-purple-900 block font-bold">Các loại Tủ (Storage)</strong>
                            - <span class="text-slate-900 font-semibold">cupboard</span> (/ˈkʌbəd/): tủ ly / tủ bát.<br>
                            - <span class="text-slate-900 font-semibold">wardrobe</span> (/ˈwɔːdrəʊb/): tủ quần áo.<br>
                            - <span class="text-slate-900 font-semibold">chest of drawers</span> (/tʃest əv drɔːz/): tủ có nhiều ngăn kéo.
                        </div>
                    </div>
                    <div class="flex items-start space-x-3">
                        <div class="w-8 h-8 rounded-full bg-purple-600 text-white font-bold flex items-center justify-center flex-shrink-0">3</div>
                        <div>
                            <strong class="text-purple-900 block font-bold">Thiết bị Nhà Bếp (Kitchen Appliances)</strong>
                            - <span class="text-slate-900 font-semibold">fridge</span> (/frɪdʒ/): tủ lạnh.<br>
                            - <span class="text-slate-900 font-semibold">dishwasher</span> (/ˈdɪʃwɒʃər/): máy rửa bát.<br>
                            - <span class="text-slate-900 font-semibold">sink</span> (/sɪŋk/): bồn rửa mặt/rửa bát.
                        </div>
                    </div>
                </div>

                <div class="text-center pt-2">
                    <button onclick="playBtnSound(); completeLevel()" class="px-8 py-3.5 bg-gradient-to-r from-purple-600 to-indigo-600 text-white font-extrabold rounded-2xl shadow-lg hover:opacity-95 transition-all text-base">
                        Đã hiểu, vào luyện tập ngay! <i class="fa-solid fa-arrow-right ml-2"></i>
                    </button>
                </div>
            </div>
        `;
    }
};