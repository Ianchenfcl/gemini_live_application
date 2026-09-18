const i18n = {
    en: {
        appTitle: "<i class='fa-solid fa-microphone-lines pulse-icon'></i> Gemini Live <span>Real-time Voice Chat</span>",
        appDesc: "Experience ultra-low latency two-way voice interaction with Gemini Live API, supporting camera and screen share!",
        authConfigTitle: "<i class='fa-solid fa-key'></i> Auth & Settings",
        apiKeyLabel: "<span class='required'>*</span> Google AI Studio API Key",
        apiKeyPlaceholder: "Paste your AIzaSy... Key here",
        apiKeyTip: "Key is saved only in localStorage and executed securely on your local machine.",
        modelLabel: "Gemini Model",
        audioSourceLabel: "Audio Source",
        audioSourceMic: "Microphone",
        audioSourceScreen: "Screen Share Audio (Requires Screen Video Mode)",
        audioSourceFile: "Local Audio/Video File (Isolated Playback)",
        localMediaLabel: "Select Local Media (MP3, MP4...)",
        localMediaTip: "Raw audio is sent directly to Gemini, and played locally at 5% volume without interference!",
        voiceModeLabel: "Video Mode",
        voiceModeNone: "None (Audio Only)",
        voiceModeCamera: "Camera Stream",
        voiceModeScreen: "Screen Share",
        voiceModeFile: "Local Video Frames",
        voiceSelectLabel: "Gemini Voice",
        enableTranslationLabel: "<i class='fa-solid fa-language'></i> Enable Real-time Translation (All Models)",
        sourceLangLabel: "Source Language",
        targetLangLabel: "Target Language",
        disableInterruptionLabel: "Pause mic while speaking (Prevent self-interruption)",
        controlPanelTitle: "<i class='fa-solid fa-sliders'></i> Control Panel",
        statusDisconnected: "Disconnected",
        connectBtn: "<i class='fa-solid fa-link'></i> Connect",
        disconnectBtn: "<i class='fa-solid fa-link-slash'></i> Disconnect",
        muteMicBtn: "<i class='fa-solid fa-microphone'></i> <span>Mute Mic</span>",
        chatTitle: "<i class='fa-solid fa-comments'></i> Live Transcript",
        textInputPlaceholder: "Type text message...",
        vadLabel: "Mic Sensitivity (Silence Threshold)"
    },
    zh: {
        appTitle: "<i class='fa-solid fa-microphone-lines pulse-icon'></i> Gemini Live <span>即時語音對話</span>",
        appDesc: "感受 Gemini 3.1 Live API 的超低延遲雙向語音互動，支援鏡頭與螢幕分享，完美支援語音打斷！",
        authConfigTitle: "<i class='fa-solid fa-key'></i> 認證與設定",
        apiKeyLabel: "<span class='required'>*</span> Google AI Studio API Key",
        apiKeyPlaceholder: "請貼上您的 AIzaSy... 金鑰",
        apiKeyTip: "金鑰僅存於您瀏覽器 localStorage 中，完全在本地安全端點執行。",
        modelLabel: "Gemini 模型",
        audioSourceLabel: "音訊來源",
        audioSourceMic: "麥克風",
        audioSourceScreen: "螢幕分享音訊 (需在影像模式開啟螢幕分享)",
        audioSourceFile: "本機音訊/影片檔案 (無干擾獨立播放)",
        localMediaLabel: "選擇本機媒體 (MP3, MP4...)",
        localMediaTip: "原始音訊會直接送給 Gemini，並在本地以極低音量(5%)播放，不干擾翻譯結果！",
        voiceModeLabel: "影像模式 (畫面)",
        voiceModeNone: "無影像 (純語音)",
        voiceModeCamera: "開啟鏡頭串流",
        voiceModeScreen: "分享螢幕畫面",
        voiceModeFile: "擷取本機上傳影片畫面",
        voiceSelectLabel: "Gemini 語音",
        enableTranslationLabel: "<i class='fa-solid fa-language'></i> 啟用即時翻譯模式 (支援所有模型)",
        sourceLangLabel: "來源語言 (您說的)",
        targetLangLabel: "目標語言 (翻譯成)",
        disableInterruptionLabel: "說話時暫停收音 (防止翻譯被自己或環境音打斷)",
        controlPanelTitle: "<i class='fa-solid fa-sliders'></i> 通訊控制台",
        statusDisconnected: "尚未連線",
        connectBtn: "<i class='fa-solid fa-link'></i> 開始連線",
        disconnectBtn: "<i class='fa-solid fa-link-slash'></i> 斷開連線",
        muteMicBtn: "<i class='fa-solid fa-microphone'></i> <span>靜音麥克風</span>",
        chatTitle: "<i class='fa-solid fa-comments'></i> 即時對話紀錄 (Transcript)",
        textInputPlaceholder: "輸入文字訊息...",
        vadLabel: "麥克風靈敏度 (靜音門檻值)"
    }
};

let currentLang = localStorage.getItem('gemini_live_lang') || 'zh';

function applyLanguage(lang) {
    const dict = i18n[lang];
    if (!dict) return;

    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (dict[key]) {
            el.innerHTML = dict[key];
        }
    });

    document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
        const key = el.getAttribute('data-i18n-placeholder');
        if (dict[key]) {
            el.setAttribute('placeholder', dict[key]);
        }
    });

    // Update the toggle button text
    const langToggleText = document.getElementById('langToggleText');
    if (langToggleText) {
        langToggleText.textContent = lang === 'en' ? '中文' : 'English';
    }
}

document.addEventListener('DOMContentLoaded', () => {
    applyLanguage(currentLang);
    
    const langToggleBtn = document.getElementById('langToggleBtn');
    if (langToggleBtn) {
        langToggleBtn.addEventListener('click', () => {
            currentLang = currentLang === 'en' ? 'zh' : 'en';
            localStorage.setItem('gemini_live_lang', currentLang);
            applyLanguage(currentLang);
        });
    }
});
