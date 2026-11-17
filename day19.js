window.ENG6_LESSONS = window.ENG6_LESSONS || {};

window.ENG6_LESSONS[19] = {
    unit: 3, // Thuộc Unit 3: My Friends
    title: "Day 19: Body Parts",
    description: "Các bộ phận trên cơ thể (head, hair, face, eyes, nose, mouth, ears, chin)",
    ipa: "/ˈbɒdi pɑːrts/",
    
    // Cấu hình lộ trình 7 màn hoạt động chuẩn cho Day 19
    activities: [
        'grammar-intro-day19',      // Màn 1: Khám phá hình thể và các bộ phận cơ thể
        'multiple-choice',           // Màn 2: Trắc nghiệm mặt chữ từ vựng
        'matching-meaning',          // Màn 3: Nối từ Tiếng Anh & Nghĩa Tiếng Việt
        'listening',                 // Màn 4: Nghe âm thanh & chọn nghĩa đúng
        'matching-ipa',              // Màn 5: Nối từ & Phiên âm IPA chuẩn
        'speaking',                  // Màn 6: Luyện phát âm AI chuẩn xác
        'spelling'                   // Màn 7: Kiểm tra lỗi chính tả từ vựng
    ],

    vocab: [
        { 
            id: 'd19_head', 
            en: 'head', 
            ipa: '/hed/', 
            vi: 'cái đầu', 
            wrongSpells: ['hedd', 'haed', 'hedde'] 
        },
        { 
            id: 'd19_hair', 
            en: 'hair', 
            ipa: '/her/', 
            vi: 'tóc', 
            wrongSpells: ['hare', 'heir', 'hairr'] 
        },
        { 
            id: 'd19_face', 
            en: 'face', 
            ipa: '/feɪs/', 
            vi: 'khuôn mặt', 
            wrongSpells: ['fase', 'faice', 'facce'] 
        },
        { 
            id: 'd19_eyes', 
            en: 'eyes', 
            ipa: '/aɪz/', 
            vi: 'đôi mắt', 
            wrongSpells: ['eys', 'ayes', 'eizes'] 
        },
        { 
            id: 'd19_nose', 
            en: 'nose', 
            ipa: '/noʊz/', 
            vi: 'cái mũi', 
            wrongSpells: ['nos', 'noze', 'noos'] 
        },
        { 
            id: 'd19_mouth', 
            en: 'mouth', 
            ipa: '/maʊθ/', 
            vi: 'cái miệng', 
            wrongSpells: ['mowth', 'mouthh', 'mouht'] 
        },
        { 
            id: 'd19_ears', 
            en: 'ears', 
            ipa: '/ɪərz/', 
            vi: 'đôi tai', 
            wrongSpells: ['eers', 'earz', 'ehrs'] 
        },
        { 
            id: 'd19_chin', 
            en: 'chin', 
            ipa: '/tʃɪn/', 
            vi: 'cằm', 
            wrongSpells: ['cheen', 'chinn', 'chyn'] 
        }
    ]
};

window.ENG6_GAME_MODULES = window.ENG6_GAME_MODULES || {};

// MÀN 1: Khám phá hình thể và các bộ phận trên cơ thể (Day 19)
window.ENG6_GAME_MODULES['grammar-intro-day19'] = {
    title: 'Màn 1: Khám Phá - Các Bộ Phận Cơ Thể (Body Parts)',
    render(ctx) {
        ctx.container.innerHTML = `
            <div class="space-y-4">
                <div class="text-center">
                    <span class="px-3 py-1 bg-pink-100 text-pink-800 font-bold text-xs rounded-full">Unit 3: My Friends</span>
                    <h3 class="text-2xl font-black text-slate-800 mt-2">Các Bộ Phận Trên Cơ Thể</h3>
                    <p class="text-slate-600 text-sm mt-1">Làm quen với các từ vựng chỉ phần đầu và khuôn mặt trên cơ thể người!</p>
                </div>

                <div class="bg-pink-50 border-2 border-pink-200 p-4 rounded-2xl space-y-3 text-slate-700 text-sm">
                    <div class="flex items-start space-x-3">
                        <div class="w-8 h-8 rounded-full bg-pink-600 text-white font-bold flex items-center justify-center flex-shrink-0">1</div>
                        <div>
                            <strong class="text-pink-900 block font-bold">Phần đầu và tóc:</strong>
                            - <span class="text-slate-900 font-semibold">head</span> (/hed/): cái đầu.<br>
                            - <span class="text-slate-900 font-semibold">hair</span> (/her/): mái tóc.
                        </div>
                    </div>
                    <div class="flex items-start space-x-3">
                        <div class="w-8 h-8 rounded-full bg-pink-600 text-white font-bold flex items-center justify-center flex-shrink-0">2</div>
                        <div>
                            <strong class="text-pink-900 block font-bold">Các giác quan trên khuôn mặt:</strong>
                            - <span class="text-slate-900 font-semibold">face</span> (/feɪs/): khuôn mặt.<br>
                            - <span class="text-slate-900 font-semibold">eyes</span> (/aɪz/): đôi mắt.<br>
                            - <span class="text-slate-900 font-semibold">nose</span> (/noʊz/): cái mũi.<br>
                            - <span class="text-slate-900 font-semibold">ears</span> (/ɪərz/): đôi tai.
                        </div>
                    </div>
                    <div class="flex items-start space-x-3">
                        <div class="w-8 h-8 rounded-full bg-pink-600 text-white font-bold flex items-center justify-center flex-shrink-0">3</div>
                        <div>
                            <strong class="text-pink-900 block font-bold">Miệng và cằm:</strong>
                            - <span class="text-slate-900 font-semibold">mouth</span> (/maʊθ/): cái miệng.<br>
                            - <span class="text-slate-900 font-semibold">chin</span> (/tʃɪn/): chiếc cằm.
                        </div>
                    </div>
                </div>

                <div class="text-center pt-2">
                    <button onclick="playBtnSound(); completeLevel()" class="px-8 py-3.5 bg-gradient-to-r from-pink-600 to-rose-600 text-white font-extrabold rounded-2xl shadow-lg hover:opacity-95 transition-all text-base">
                        Đã hiểu, vào luyện tập ngay! <i class="fa-solid fa-arrow-right ml-2"></i>
                    </button>
                </div>
            </div>
        `;
    }
};