<p align="center">
  <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/4e/Cloudflare_Logo.svg/512px-Cloudflare_Logo.svg.png" width="110" alt="Cloudflare Logo" />
</p>

<h1 align="center">🔗✨ Cloudflare Workers URL Shortener</h1>

<p align="center">
  <b>Minimal, lightning-fast, serverless URL shortener</b><br>
  <i>Powered by Cloudflare Workers, TypeScript, and KV Namespaces</i>
</p>

<p align="center">
  <img src="https://img.shields.io/badge/Cloudflare-Workers-orange?style=for-the-badge&logo=cloudflare" />
  <img src="https://img.shields.io/badge/TypeScript-Used-blue?style=for-the-badge&logo=typescript" />
  <img src="https://img.shields.io/badge/Serverless-100%25-brightgreen?style=for-the-badge" />
  <img src="https://img.shields.io/badge/License-MIT-lightgrey?style=for-the-badge" />
</p>

<p align="center">
  <img src="https://media4.giphy.com/media/v1.Y2lkPTc5MGI3NjExb3BkeWM5Y2ZqMmVuaG1zM3U5bG9kYWR1cDFjbDFmamIzOHFpc2pybSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/78XCFBGOlS6keY1Bil/giphy.gif" width="480" alt="Cloudflare Backend GIF"/>
</p>

---

## 📚 Table of Contents

- [✨ Features](#-features)
- [🚀 Quick Start](#-quick-start)
- [📦 API Endpoints](#-api-endpoints)
- [🧠 How It Works](#-how-it-works)
- [🛠️ Tech Stack](#️-tech-stack)
- [🧪 Example cURL Usage](#-example-curl-usage)
- [🔮 Ideas for Improvement](#-ideas-for-improvement)
- [📄 License](#-license)

---

## ✨ Features

- 🌍 **Globally distributed**: Runs at the edge on Cloudflare’s global network
- ⚡ **Instant redirects**: Ultra-fast URL redirection
- 🗝️ **KV Namespace**: Durable, low-latency storage for URL mappings
- 🔒 **Zero server management**: 100% serverless backend
- 🧑‍💻 **TypeScript**: Type-safe, maintainable codebase

---

## 🚀 Quick Start

1. Clone & Install
git clone https://github.com/yourusername/cloudflare-url-shortener.git
cd cloudflare-url-shortener
npm install

2. Create KV Namespace
npx wrangler kv:namespace create "URLS"

text
Copy the returned `id` and add it to your `wrangler.toml`:
[[kv_namespaces]]
binding = "URLS"
id = "<your-kv-namespace-id>"

text
undefined
3. Develop Locally
npm run dev

Visit http://localhost:8787 in your browser
4. Deploy Globally
npm run deploy

text

---

## 📦 API Endpoints

### ➕ Shorten a URL

`POST /shorten`

**Request Body:**
{
"longurl": "https://example.com/very/long/path"
}

text

**Response:**
{
"shortcut": "https://<your-worker-domain>/<shortcode>",
"short": "<shortcode>"
}

text

---

### 🔗 Redirect

`GET /<shortcode>`

- Instantly redirects to the original URL.
- Returns **404** if the shortcode is not found.

---

## 🧠 How It Works

```mermaid
graph TD
    A[User sends POST to /shorten] --> B[Worker generates shortcode]
    B --> C[Stores shortcode → URL in KV]
    D[User visits /<shortcode>] --> E[Worker fetches from KV]
    E --> F[Redirects to original URL]
```

## 🛠️ Tech Stack

| Tool                   | Purpose                              |
|------------------------|--------------------------------------|
| ☁️ Cloudflare Workers  | Edge-based serverless execution      |
| 🗃️ KV Namespace        | Persistent storage for URL mappings   |
| 🔤 TypeScript          | Type-safe, modern JavaScript         |

---

## 🧪 Example cURL Usage

curl -X POST https://<your-worker-domain>/shorten
-H "Content-Type: application/json"
-d '{"longurl":"https://example.com"}'

text

---

## 🔮 Ideas for Improvement

- ✍️ Custom shortcodes
- ⏱️ Expiry & TTL support
- 📊 Analytics dashboard
- 🔗 QR code generation

---

## 📄 License

MIT - free to use, modify, and share.

---

<p align="center">
  <img src="https://img.shields.io/badge/Made%20with-💛%20by%20Cloudflare-lightgrey?style=flat" />
</p>