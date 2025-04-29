

---

```markdown
<p align="center">
  <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/4e/Cloudflare_Logo.svg/512px-Cloudflare_Logo.svg.png" width="120" alt="Cloudflare Logo">
</p>

<h1 align="center">🔗✨ Cloudflare Workers URL Shortener</h1>

<p align="center">
  <b>Minimal, lightning-fast, serverless URL shortener</b><br />
  Built with <a href="https://developers.cloudflare.com/workers/">Cloudflare Workers</a> + <a href="https://developers.cloudflare.com/workers/platform/namespaces/">KV Namespace</a>
</p>

<p align="center">
  <img src="https://img.shields.io/badge/Deploy-Cloudflare-orange?style=for-the-badge&logo=cloudflare" />
  <img src="https://img.shields.io/badge/TypeScript-Used-blue?style=for-the-badge&logo=typescript" />
  <img src="https://img.shields.io/badge/License-MIT-brightgreen?style=for-the-badge" />
</p>



<p align="center">
  <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/4e/Cloudflare_Logo.svg/512px-Cloudflare_Logo.svg.png" width="120" alt="Cloudflare Logo">
</p>

<h1 align="center">🔗✨ Cloudflare Workers URL Shortener</h1>

<p align="center">
  <b>Minimal, lightning-fast, serverless URL shortener</b><br />
  Built with <a href="https://developers.cloudflare.com/workers/">Cloudflare Workers</a> + <a href="https://developers.cloudflare.com/workers/platform/namespaces/">KV Namespace</a>
</p>

<p align="center">
  <img src="https://img.shields.io/badge/Deploy-Cloudflare-orange?style=for-the-badge&logo=cloudflare" />
  <img src="https://img.shields.io/badge/TypeScript-Used-blue?style=for-the-badge&logo=typescript" />
  <img src="https://img.shields.io/badge/License-MIT-brightgreen?style=for-the-badge" />
</p>

---

## 🌟 Features

🟢 **Serverless**: Deployed globally with Cloudflare  
⚡ **Instant redirects** with KV Namespace  
🧠 **Auto shortcode** generation (6-char base36)  
🧪 **Zero dependencies**  
🛡️ **Robust error handling**  

---

## 🛠️ Tech Stack

| Tool                      | Purpose                             |
|------------------------- | -------------------------------------|
| 🧱 Cloudflare Workers   | Edge-based function execution     |
| 🗃️ KV Namespace         | Persistent storage for URL mapping |
| 🔤 TypeScript          | Strongly typed JavaScript        |

---

## 📦 Endpoint Overview

### `POST /shorten` — Shorten a URL

**Request Body:**

```json
{
  "longurl": "https://example.com/very/long/path"
}
```

**Response:**

```json
{
  "shortcut": "https://<your-worker-domain>/<shortcode>",
  "short": "<shortcode>"
}
```

---

### `GET /<shortcode>` — Redirect

- 🔁 **301 Redirect** to long URL  
- ❌ **404 Not Found** if the shortcode is invalid

---

## 🧠 How It Works

```mermaid
graph TD
    A[User sends POST to /shorten] --> B[Worker generates shortcode]
    B --> C[Stores shortcode → URL in KV]
    D[User visits /<shortcode>] --> E[Worker fetches from KV]
    E --> F[Redirects to original URL]
```

---

## 🔧 Wrangler Configuration

Add to your `wrangler.toml`:

```toml
[[kv_namespaces]]
binding = "URLS"
id = "<your-kv-namespace-id>"
```

---

## 🧪 cURL Test

```bash
curl -X POST https://<your-worker-domain>/shorten \
     -H "Content-Type: application/json" \
     -d '{"longurl":"https://example.com"}'
```

---

## 🔮 Improvements To Consider

- ✍️ Custom shortcodes  
- ⏱️ Expiry & time-to-live (TTL)  
- 📊 Analytics dashboard  
- 🔗 Link preview & QR code

---

## 📄 License

This project is licensed under the **MIT License** — free to use, modify, and share.

---

<p align="center">
  <img src="https://img.shields.io/badge/Made%20with-💛%20by%20Cloudflare-lightgrey?style=flat" />
</p>
```

---