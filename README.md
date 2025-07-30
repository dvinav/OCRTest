# 🧪 OCR Experiments

Just a sandbox repo for messing around with OCR stuff — currently using [`tesseract.js`](https://github.com/naptha/tesseract.js) to run in-browser OCR with Persian language support.

## 🚀 Stack

- Next.js frontend
- [tesseract.js](https://github.com/naptha/tesseract.js) (WebAssembly OCR engine)
- Persian (`fas`) traineddata

## 🧠 Features

- Upload image from browser
- Extract Persian text (printed)
- Preview OCR output

## 📦 Install

```bash
bun install
# or
npm install
```

## 🧪 Run Dev

```bash
bun dev
# or
npm run dev
```

## 📁 TODO

- Train better Persian model
- Switch to native C++ + wasm OCR engine
- Handwriting support?
- Maybe use OpenCV for preprocessing

## 🐸 License

WTFPL - Do whatever the f*ck you want
