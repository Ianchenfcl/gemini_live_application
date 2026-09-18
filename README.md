# Gemini Live Web Application

一個基於 Google Gemini Live API 打造的即時語音、視覺雙向互動網頁應用程式。提供極低延遲的語音對話，並結合了進階的音頻路由（Audio Routing）與畫面擷取技術，讓您可以輕鬆實現同步口譯、影片解說、或是螢幕畫面分析。

## ✨ 核心特色

* **即時雙向語音 (Ultra-Low Latency)**
  基於 WebSocket 與 Web Audio API，將瀏覽器麥克風音訊以原生的 16kHz PCM 格式直接推送至 Gemini 伺服器，實現如真人般順暢的對話體驗。
* **智慧音軌分離 (Audio Gateway Separation)**
  完美解決「原始聲音與翻譯聲音重疊」的災難。
  * **本機媒體播放**：上傳 MP4/MP3，網頁會自動將 100% 音量送給 Gemini 進行翻譯，而本地監聽音量則自動壓低至 5%。
  * **螢幕分享音訊**：可擷取正在播放直播或 Podcast 的 Chrome 分頁音訊送給 Gemini。只需將該分頁於瀏覽器靜音，即可享受完全無干擾的同步口譯。
* **多模態視覺能力 (Multimodal Vision)**
  * 支援 **鏡頭畫面 (Camera)** 擷取。
  * 支援 **螢幕分享 (Screen Share)** 畫面擷取。
  * 支援 **本機影片畫面** 同步擷取。
  * 每秒定時擷取畫面 (1fps) 轉換為 Base64 JPEG，讓 Gemini 即時「看見」您所分享的內容。
* **防中斷與連線保活 (Anti-Interruption & Keep-Alive)**
  實作 Client-side VAD (語音活動偵測)。當麥克風靜音或無人說話時，系統會自動發送「全 0 的靜音封包」，完美維持 WebSocket 熱度避免 30 秒閒置斷線，同時不干擾 Gemini 的發言。

## 🚀 快速開始

### 1. 安裝環境與依賴套件

請確保您的電腦已安裝 Python 3.9+。
建立並啟動虛擬環境：

```bash
python -m venv gemini_venv
gemini_venv\Scripts\activate  # Windows
# source gemini_venv/bin/activate  # Mac/Linux
```

安裝依賴套件：

```bash
pip install -r requirements.txt
```
*(註：主要依賴包含 `fastapi`, `uvicorn`, `websockets`, `google-genai` 等)*

### 2. 啟動伺服器

執行以下指令啟動 FastAPI 後端伺服器：

```bash
python app.py
```

伺服器預設運行於 `http://127.0.0.1:8000`。請打開瀏覽器進入該網址。

### 3. 設定與使用

1. 在網頁左側輸入您的 **Google AI Studio API Key**。
2. 選擇您想使用的 **Gemini 模型** (例如：`Gemini 3.8 Live`)。
3. 選擇 **音訊來源**：
   * **麥克風**：一般的語音對話。
   * **螢幕分享音訊**：翻譯直播或線上影片。
   * **本機音訊/影片檔案**：上傳本地檔案讓 Gemini 直接看/聽。
4. 按下 **開始連線** 即可開始體驗！

## 🛠️ 技術架構

* **前端**：HTML5, CSS3, Vanilla JavaScript (Web Audio API, WebRTC MediaDevices API)
* **後端**：Python, FastAPI (提供 WebSocket 中繼伺服器)
* **AI 服務**：Google GenAI SDK (v1beta) - `LiveConnectConfig`, `LiveConnect`

## 📝 授權條款
MIT License
