# 🧪 OCR Experiments

Just a sandbox repo for messing around with OCR stuff — currently using [`tesseract.js`](https://github.com/naptha/tesseract.js) to run in-browser OCR with Persian (Farsi) language support.

## 🚀 Stack

- `React` frontend
- [`tesseract.js`](https://github.com/naptha/tesseract.js) (WebAssembly OCR engine)
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

````

## 🧪 Run Dev

```bash
bun dev
# or
npm run dev
```

## 📁 TODO

- train better Farsi model
- switch to native C++ + wasm OCR engine
- handwriting support?
- maybe use OpenCV for preprocessing

## 🐸 License

MIT — but don’t blame me if it breaks

````
