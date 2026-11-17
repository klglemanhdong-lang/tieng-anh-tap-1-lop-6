window.ENG6_LESSONS = window.ENG6_LESSONS || {};

window.ENG6_LESSONS[49] = {
    unit: 6, // Thuộc Unit 6: Our Tet Holiday
    title: "Day 49: Things and Activities at Tet",
    description: "Nhận diện từ vựng về các biểu tượng và hoạt động truyền thống dịp Tết (peach flower, lucky money, banh chung, family gathering, fireworks, furniture)",
    ipa: "/θɪŋz ænd ækˈtɪvətiz æt tet/",
    
    // Cấu hình lộ trình 7 màn hoạt động chuẩn cho Day 49
    activities: [
        'grammar-intro-day49',       // Màn 1: Khám phá đồ vật & hoạt động ngày Tết
        'multiple-choice',           // Màn 2: Trắc nghiệm mặt chữ từ vựng
        'matching-meaning',          // Màn 3: Nối từ Tiếng Anh & Nghĩa Tiếng Việt
        'listening',                 // Màn 4: Nghe âm thanh & chọn từ đúng
        'matching-ipa',              // Màn 5: Nối từ & Phiên âm IPA chuẩn
        'speaking',                  // Màn 6: Luyện phát âm AI chuẩn xác
        'spelling'                   // Màn 7: Kiểm tra lỗi chính tả từ vựng
    ],

    vocab: [
        { 
            id: 'd49_peachflower', 
            en: 'peach flower', 
            ipa: '/piːtʃ ˈflaʊər/', 
            vi: 'hoa đào', 
            wrongSpells: ['peach flour', 'pech flower', 'peach flowr'] 
        },
        { 
            id: 'd49_luckymoney', 
            en: 'lucky money', 
            ipa: '/ˈlʌki ˈmʌni/', 
            vi: 'tiền lì xì', 
            wrongSpells: ['lucki money', 'lucky mony', 'laky money'] 
        },
        { 
            id: 'd49_banhchung', 
            en: 'banh chung', 
            ipa: '/bæŋ tʃʊŋ/', 
            vi: 'bánh chưng', 
            wrongSpells: ['banh chug', 'bhanh chung', 'banh-chung'] 
        },
        { 
            id: 'd49_familygathering', 
            en: 'family gathering', 
            ipa: '/ˈfæməlɪ ˈɡæðərɪŋ/', 
            vi: 'sum họp gia đình', 
            wrongSpells: ['family gatherng', 'famely gathering', 'family gathring'] 
        },
        { 
            id: 'd49_fireworks', 
            en: 'fireworks', 
            ipa: '/ˈfaɪərwɜːrks/', 
            vi: 'pháo hoa', 
            wrongSpells: ['fire work', 'firewoks', 'firworks'] 
        },
        { 
            id: 'd49_furniture', 
            en: 'furniture', 
            ipa: '/ˈfɜːrnɪtʃər/', 
            vi: 'đồ đạc trong nhà', 
            wrongSpells: ['furnitur', 'furnichure', 'furniter'] 
        }
    ]
};

window.ENG6_GAME_MODULES = window.ENG6_GAME_MODULES || {};

// MÀN 1: Khám phá đồ vật & hoạt động ngày Tết (Day 49)
window.ENG6_GAME_MODULES['grammar-intro-day49'] = {
    title: 'Màn 1: Khám Phá - Đồ Vật & Hoạt Động Ngày Tết',
    render(ctx) {
        ctx.container.innerHTML = `
            <div class="space-y-4">
                <div class="text-center">
                    <span class="px-3 py-1 bg-amber-100 text-amber-800 font-bold text-xs rounded-full">Unit 6: Our Tet Holiday</span>
                    <h3 class="text-2xl font-black text-slate-800 mt-2">Biểu Tượng & Hoạt Động Dịp Tết</h3>
                    <p class="text-slate-600 text-sm mt-1">Làm quen với các từ vựng đặc trưng về văn hóa đón năm mới tại Việt Nam!</p>
                </div>

                <div class="bg-amber-50 border-2 border-amber-200 p-4 rounded-2xl space-y-3 text-slate-700 text-sm">
                    <div class="flex items-start space-x-3">
                        <div class="w-8 h-8 rounded-full bg-amber-600 text-white font-bold flex items-center justify-center flex-shrink-0">1</div>
                        <div>
                            <strong class="text-amber-900 block font-bold">Biểu tượng & Món ăn truyền thống:</strong>
                            - <span class="text-slate-900 font-semibold">peach flower</span> (/piːtʃ ˈflaʊər/): hoa đào[cite: 10].<br>
                            - <span class="text-slate-900 font-semibold">banh chung</span> (/bæŋ tʃʊŋ/): bánh chưng[cite: 10].<br>
                            - <span class="text-slate-900 font-semibold">lucky money</span> (/ˈlʌki ˈmʌni/): tiền lì xì[cite: 10].
                        </div>
                    </div>
                    <div class="flex items-start space-x-3">
                        <div class="w-8 h-8 rounded-full bg-amber-600 text-white font-bold flex items-center justify-center flex-shrink-0">2</div>
                        <div>
                            <strong class="text-amber-900 block font-bold">Hoạt động sum họp & dọn dẹp:</strong>
                            - <span class="text-slate-900 font-semibold">family gathering</span> (/ˈfæməlɪ ˈɡæðərɪŋ/): sum họp gia đình[cite: 10].<br>
                            - <span class="text-slate-900 font-semibold">furniture</span> (/ˈfɜːrnɪtʃər/): đồ đạc trong nhà[cite: 10].<br>
                            - <span class="text-slate-900 font-semibold">fireworks</span> (/ˈfaɪərwɜːrks/): pháo hoa[cite: 10].
                        </div>
                    </div>
                </div>

                <div class="text-center pt-2">
                    <button onclick="playBtnSound(); completeLevel()" class="px-8 py-3.5 bg-gradient-to-r from-amber-600 to-orange-600 text-white font-extrabold rounded-2xl shadow-lg hover:opacity-95 transition-all text-base">
                        Đã hiểu rõ, vào luyện tập ngay! <i class="fa-solid fa-arrow-right ml-2"></i>
                    </button>
                </div>
            </div>
        `;
    }
};