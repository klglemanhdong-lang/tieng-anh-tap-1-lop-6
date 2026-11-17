window.ENG6_LESSONS = window.ENG6_LESSONS || {};

window.ENG6_LESSONS[11] = {
    unit: 2, // Thuộc Unit 2: My House
    title: "Day 11: Furniture",
    description: "Đồ đạc trong nhà (Lamp, Bed, Sofa, Table, Desk, Chair, Picture, Clock, Window)",
    ipa: "/ˈfɜːrnɪtʃər/",
    
    // Cấu hình lộ trình 7 màn hoạt động chuẩn Unit 2
    activities: [
        'grammar-intro-unit2-day11',  // Màn 1: Lý thuyết giới thiệu đồ đạc trong nhà
        'multiple-choice',             // Màn 2: Trắc nghiệm mặt chữ từ vựng
        'matching-meaning',            // Màn 3: Nối từ Tiếng Anh & Nghĩa Tiếng Việt
        'listening',                   // Màn 4: Nghe âm thanh & chọn nghĩa đúng
        'matching-ipa',                // Màn 5: Nối từ & Phiên âm IPA chuẩn
        'speaking',                    // Màn 6: Luyện phát âm AI chuẩn xác
        'spelling'                     // Màn 7: Kiểm tra lỗi chính tả từ vựng
    ],

    vocab: [
        { 
            id: 'd11_lamp', 
            en: 'lamp', 
            ipa: '/læmp/', 
            vi: 'đèn', 
            wrongSpells: ['laamp', 'lemb', 'lampp'] 
        },
        { 
            id: 'd11_bed', 
            en: 'bed', 
            ipa: '/bed/', 
            vi: 'cái giường', 
            wrongSpells: ['bet', 'beed', 'bedd'] 
        },
        { 
            id: 'd11_sofa', 
            en: 'sofa', 
            ipa: '/ˈsəʊfə/', 
            vi: 'ghế sofa', 
            wrongSpells: ['sopha', 'sofae', 'soffa'] 
        },
        { 
            id: 'd11_table', 
            en: 'table', 
            ipa: '/ˈteɪbl/', 
            vi: 'cái bàn', 
            wrongSpells: ['tabel', 'tabell', 'tayble'] 
        },
        { 
            id: 'd11_desk', 
            en: 'desk', 
            ipa: '/desk/', 
            vi: 'bàn học / làm việc', 
            wrongSpells: ['desck', 'deske', 'deks'] 
        },
        { 
            id: 'd11_chair', 
            en: 'chair', 
            ipa: '/tʃeər/', 
            vi: 'cái ghế', 
            wrongSpells: ['chare', 'chear', 'chairr'] 
        },
        { 
            id: 'd11_picture', 
            en: 'picture', 
            ipa: '/ˈpɪktʃər/', 
            vi: 'bức tranh', 
            wrongSpells: ['piture', 'pikteur', 'picter'] 
        },
        { 
            id: 'd11_clock', 
            en: 'clock', 
            ipa: '/klɒk/', 
            vi: 'đồng hồ treo tường', 
            wrongSpells: ['clok', 'clocke', 'cloc'] 
        },
        { 
            id: 'd11_window', 
            en: 'window', 
            ipa: '/ˈwɪndəʊ/', 
            vi: 'cửa sổ', 
            wrongSpells: ['windo', 'windoe', 'wyndow'] 
        }
    ]
};

window.ENG6_GAME_MODULES = window.ENG6_GAME_MODULES || {};

// MÀN 1: Lý thuyết giới thiệu chủ đề Đồ đạc trong nhà (Day 11)
window.ENG6_GAME_MODULES['grammar-intro-unit2-day11'] = {
    title: 'Màn 1: Khám Phá - Đồ Đạc Trong Nhà (Furniture)',
    render(ctx) {
        ctx.container.innerHTML = `
            <div class="space-y-4">
                <div class="text-center">
                    <span class="px-3 py-1 bg-amber-100 text-amber-800 font-bold text-xs rounded-full">Unit 2: My House</span>
                    <h3 class="text-2xl font-black text-slate-800 mt-2">Từ Vựng Về Đồ Đạc Trong Nhà</h3>
                    <p class="text-slate-600 text-sm mt-1">Học tên các đồ vật quen thuộc trang trí trong các phòng!</p>
                </div>

                <div class="bg-amber-50 border-2 border-amber-200 p-4 rounded-2xl space-y-3 text-slate-700 text-sm">
                    <div class="flex items-start space-x-3">
                        <div class="w-8 h-8 rounded-full bg-amber-500 text-white font-bold flex items-center justify-center flex-shrink-0">1</div>
                        <div>
                            <strong class="text-amber-900 block font-bold">Bed, Lamp & Sofa</strong>
                            - <span class="text-slate-900 font-semibold">bed</span> (/bed/): cái giường.<br>
                            - <span class="text-slate-900 font-semibold">lamp</span> (/læmp/): đèn.<br>
                            - <span class="text-slate-900 font-semibold">sofa</span> (/ˈsəʊfə/): ghế sofa dài.
                        </div>
                    </div>
                    <div class="flex items-start space-x-3">
                        <div class="w-8 h-8 rounded-full bg-amber-500 text-white font-bold flex items-center justify-center flex-shrink-0">2</div>
                        <div>
                            <strong class="text-amber-900 block font-bold">Table, Desk & Chair</strong>
                            - <span class="text-slate-900 font-semibold">table</span> (/ˈteɪbl/): cái bàn ăn/bàn tròn.<br>
                            - <span class="text-slate-900 font-semibold">desk</span> (/desk/): bàn học / làm việc (thường có ngăn kéo).<br>
                            - <span class="text-slate-900 font-semibold">chair</span> (/tʃeər/): cái ghế đơn.
                        </div>
                    </div>
                    <div class="flex items-start space-x-3">
                        <div class="w-8 h-8 rounded-full bg-amber-500 text-white font-bold flex items-center justify-center flex-shrink-0">3</div>
                        <div>
                            <strong class="text-amber-900 block font-bold">Picture, Clock & Window</strong>
                            - <span class="text-slate-900 font-semibold">picture</span> (/ˈpɪktʃər/): bức tranh.<br>
                            - <span class="text-slate-900 font-semibold">clock</span> (/klɒk/): đồng hồ treo tường.<br>
                            - <span class="text-slate-900 font-semibold">window</span> (/ˈwɪndəʊ/): cửa sổ.
                        </div>
                    </div>
                </div>

                <div class="text-center pt-2">
                    <button onclick="playBtnSound(); completeLevel()" class="px-8 py-3.5 bg-gradient-to-r from-amber-500 to-orange-500 text-white font-extrabold rounded-2xl shadow-lg hover:opacity-95 transition-all text-base">
                        Đã hiểu, vào luyện tập ngay! <i class="fa-solid fa-arrow-right ml-2"></i>
                    </button>
                </div>
            </div>
        `;
    }
};