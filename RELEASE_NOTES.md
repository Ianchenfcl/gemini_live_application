# Gemini Live Web App v1.0.0 🚀

這是 **Gemini Live Web Application** 的首次正式發布版本 (v1.0.0)！
本專案提供了一個超低延遲的雙向語音對話介面，並結合了先進的音軌分離與畫面擷取技術。

## 🎉 新增功能 (Features)

* **即時雙向語音對話**：支援 Gemini 3.1 Live、3.8 Live 等最新模型，實現毫秒級雙向語音對話。
* **智慧音軌分離 (Audio Gateway Separation)**：
  * **本機媒體播放**：上傳本機 MP4/MP3，影片聲音會 100% 傳送給 Gemini，而本地喇叭監聽音量會自動壓低至 5%，徹底解決翻譯與原音重疊的問題！
  * **螢幕分享音訊**：可擷取 Chrome 分頁音軌，搭配分頁靜音功能，實現無干擾的同步口譯。
* **多模態視覺擷取 (Multimodal Vision)**：
  * 支援 **鏡頭畫面 (Camera)** 擷取。
  * 支援 **螢幕畫面 (Screen Share)** 擷取。
  * 支援 **本機影片畫面** 同步擷取，讓 Gemini 邊看邊聽邊翻譯。
* **Client-side VAD (防中斷與保活機制)**：
  * 當使用者靜音時，自動發送「全 0 靜音封包」，防止 WebSocket 因閒置斷線 (Error 1011)，同時避免背景雜訊干擾 Gemini 發言。
* **自訂 Gemini 語音**：支援切換多種官方語音 (Zephyr, Aoede, Kore, Puck, Charon)。

## 🛠️ 技術更新 (Technical Details)

* 實作 Web Audio API 的 `ScriptProcessorNode` 進行即時 16kHz PCM 降頻與編碼。
* 實作 `MediaElementSource` 進行音軌物理分流與 `GainNode` 控制。
* 使用 FastAPI 與 `google-genai` (v1beta) 構建輕量級 WebSocket 中繼伺服器。

## 💡 使用方式

請參考 `README.md` 中的安裝與啟動教學。
