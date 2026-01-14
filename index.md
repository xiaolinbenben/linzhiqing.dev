---
title: linzhiqing.dev
---

# linzhiqing.dev

欢迎来到我的个人入口页：这里可以快速联系我、了解我正在推进的项目，也欢迎你的支持与赞赏。

<style>
@import url('https://fonts.googleapis.com/css2?family=IBM+Plex+Mono:wght@400;600&family=Noto+Serif+SC:wght@400;600&display=swap');

.qr-hub {
  --ink: #2b2620;
  --muted: #6d6256;
  --line: #c9b8a3;
  --paper: #f6f1e7;
  --paper-edge: #eadfce;
  font-family: "Noto Serif SC", "Songti SC", "SimSun", serif;
  background:
    repeating-linear-gradient(
      0deg,
      rgba(255, 255, 255, 0.4) 0,
      rgba(255, 255, 255, 0.4) 1px,
      transparent 1px,
      transparent 7px
    ),
    var(--paper);
  border: 2px solid var(--line);
  border-radius: 14px;
  padding: 20px;
  margin: 20px 0 26px;
  box-shadow: 3px 3px 0 var(--paper-edge);
}

.qr-header {
  display: flex;
  flex-wrap: wrap;
  align-items: baseline;
  justify-content: space-between;
  gap: 8px;
}

.qr-title {
  font-family: "IBM Plex Mono", "Noto Serif SC", serif;
  font-size: 24px;
  margin: 0;
  letter-spacing: 0.6px;
  color: var(--ink);
}

.qr-subtitle {
  margin: 0;
  font-size: 13px;
  color: var(--muted);
}

.qr-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 16px;
  margin-top: 16px;
}

.qr-group {
  background: #fffaf2;
  border: 1px solid var(--line);
  border-radius: 12px;
  padding: 14px;
}

.qr-group-title {
  font-size: 14px;
  font-weight: 600;
  color: var(--ink);
  margin-bottom: 10px;
  padding-bottom: 6px;
  border-bottom: 1px dashed var(--line);
}

.qr-buttons {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
  gap: 10px;
}

.qr-primary {
  margin-bottom: 10px;
}

.qr-more {
  margin-top: 6px;
}

.qr-more summary {
  display: inline-block;
  padding: 4px 10px;
  border: 1px dashed var(--line);
  border-radius: 8px;
  background: #fffdf7;
  cursor: pointer;
  font-size: 13px;
  color: var(--muted);
}

.qr-more summary::-webkit-details-marker {
  display: none;
}

.qr-more[open] summary {
  color: var(--ink);
}

.qr-more .qr-buttons {
  margin-top: 10px;
}

.qr-button {
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 6px;
  padding: 10px 12px;
  border-radius: 10px;
  text-decoration: none;
  color: var(--ink);
  background: #fffdf7;
  border: 1px solid var(--line);
  box-shadow: 2px 2px 0 var(--paper-edge);
  transition: transform 0.15s ease, box-shadow 0.15s ease;
}

.qr-button:hover,
.qr-button:focus {
  transform: translate(-1px, -1px);
  box-shadow: 3px 3px 0 var(--paper-edge);
}

.qr-button:focus-visible {
  outline: 2px solid var(--line);
  outline-offset: 2px;
}

.qr-label {
  font-family: "IBM Plex Mono", "Noto Serif SC", serif;
  font-weight: 600;
  font-size: 14px;
}

.qr-hint {
  font-size: 12px;
  color: var(--muted);
}

.qr-download {
  font-size: 12px;
  color: var(--ink);
  text-decoration: underline;
  text-decoration-thickness: 1px;
}

.qr-preview {
  position: absolute;
  left: 50%;
  bottom: calc(100% + 10px);
  transform: translate(-50%, 8px);
  opacity: 0;
  max-width: 240px;
  max-height: 360px;
  width: auto;
  height: auto;
  border-radius: 10px;
  border: 1px solid var(--line);
  background: #fffdf7;
  padding: 6px;
  box-sizing: border-box;
  box-shadow: 3px 3px 0 var(--paper-edge);
  transition: opacity 0.15s ease, transform 0.15s ease;
  pointer-events: none;
}

.qr-button:hover .qr-preview,
.qr-button:focus .qr-preview {
  opacity: 1;
  transform: translate(-50%, 0);
}

@media (max-width: 640px) {
  .qr-title {
    font-size: 22px;
  }

  .qr-preview {
    left: 0;
    transform: translate(0, 8px);
  }

  .qr-button:hover .qr-preview,
  .qr-button:focus .qr-preview {
    transform: translate(0, 0);
  }
}

@media (prefers-reduced-motion: reduce) {
  .qr-button,
  .qr-preview {
    transition: none;
  }
}
</style>

<section class="qr-hub" aria-label="联系与赞赏二维码">
  <div class="qr-header">
    <h2 class="qr-title">联系我 / 赞赏</h2>
    <p class="qr-subtitle">悬浮预览二维码，点击下载保存</p>
  </div>
  <div class="qr-grid">
    <div class="qr-group">
      <div class="qr-group-title">联系方式</div>
      <div class="qr-buttons qr-primary">
        <a class="qr-button" href="qr_code/wechat-contact.jpg" download="wechat-contact.jpg" title="微信 二维码">
          <span class="qr-label">微信</span>
          <span class="qr-hint">扫码添加</span>
          <span class="qr-download">下载二维码</span>
          <img class="qr-preview" src="qr_code/wechat-contact.jpg" alt="WeChat Contact QR" loading="lazy">
        </a>
        <a class="qr-button" href="qr_code/qq-bes-creator.jpg" download="qq-bes-creator.jpg" title="QQ 二维码">
          <span class="qr-label">QQ</span>
          <span class="qr-hint">bes_creator / 3370942916</span>
          <span class="qr-download">下载二维码</span>
          <img class="qr-preview" src="qr_code/qq-bes-creator.jpg" alt="QQ QR" loading="lazy">
        </a>
      </div>
      <details class="qr-more">
        <summary>显示更多</summary>
        <div class="qr-buttons">
        <a class="qr-button" href="qr_code/douyin-idea-creator.jpg" download="douyin-idea-creator.jpg" title="抖音 二维码">
          <span class="qr-label">抖音</span>
          <span class="qr-hint">idea_creator</span>
          <span class="qr-download">下载二维码</span>
          <img class="qr-preview" src="qr_code/douyin-idea-creator.jpg" alt="Douyin QR" loading="lazy">
        </a>
        <a class="qr-button" href="qr_code/kuaishou-3375494733.jpg" download="kuaishou-3375494733.jpg" title="快手 二维码">
          <span class="qr-label">快手</span>
          <span class="qr-hint">3375494733</span>
          <span class="qr-download">下载二维码</span>
          <img class="qr-preview" src="qr_code/kuaishou-3375494733.jpg" alt="Kuaishou QR" loading="lazy">
        </a>
        <a class="qr-button" href="qr_code/bilibili-contact.jpg" download="bilibili-contact.jpg" title="哔哩哔哩 二维码">
          <span class="qr-label">哔哩哔哩</span>
          <span class="qr-hint">来碗红菇卤面</span>
          <span class="qr-download">下载二维码</span>
          <img class="qr-preview" src="qr_code/bilibili-contact.jpg" alt="Bilibili QR" loading="lazy">
        </a>
        <a class="qr-button" href="qr_code/xiaohongshu-26965132305.jpg" download="xiaohongshu-26965132305.jpg" title="小红书 二维码">
          <span class="qr-label">小红书</span>
          <span class="qr-hint">26965132305</span>
          <span class="qr-download">下载二维码</span>
          <img class="qr-preview" src="qr_code/xiaohongshu-26965132305.jpg" alt="Xiaohongshu QR" loading="lazy">
        </a>
        <a class="qr-button" href="qr_code/zhihu-kojery.jpg" download="zhihu-kojery.jpg" title="知乎 二维码">
          <span class="qr-label">知乎</span>
          <span class="qr-hint">kojery</span>
          <span class="qr-download">下载二维码</span>
          <img class="qr-preview" src="qr_code/zhihu-kojery.jpg" alt="Zhihu QR" loading="lazy">
        </a>
        <a class="qr-button" href="qr_code/telegram-z17ln.jpg" download="telegram-z17ln.jpg" title="Telegram 二维码">
          <span class="qr-label">Telegram</span>
          <span class="qr-hint">@Z17LN</span>
          <span class="qr-download">下载二维码</span>
          <img class="qr-preview" src="qr_code/telegram-z17ln.jpg" alt="Telegram QR" loading="lazy">
        </a>
        <a class="qr-button" href="qr_code/feishu-linzhiqing.jpg" download="feishu-linzhiqing.jpg" title="飞书 二维码">
          <span class="qr-label">飞书</span>
          <span class="qr-hint">林智清</span>
          <span class="qr-download">下载二维码</span>
          <img class="qr-preview" src="qr_code/feishu-linzhiqing.jpg" alt="Feishu QR" loading="lazy">
        </a>
        <a class="qr-button" href="qr_code/dingtalk-besitech.jpg" download="dingtalk-besitech.jpg" title="钉钉 二维码">
          <span class="qr-label">钉钉</span>
          <span class="qr-hint">倍司网络科技</span>
          <span class="qr-download">下载二维码</span>
          <img class="qr-preview" src="qr_code/dingtalk-besitech.jpg" alt="DingTalk QR" loading="lazy">
        </a>
        <a class="qr-button" href="qr_code/alipay-contact-bes-creator.jpg" download="alipay-contact-bes-creator.jpg" title="支付宝好友二维码">
          <span class="qr-label">支付宝好友</span>
          <span class="qr-hint">bes_creator</span>
          <span class="qr-download">下载二维码</span>
          <img class="qr-preview" src="qr_code/alipay-contact-bes-creator.jpg" alt="Alipay Contact QR" loading="lazy">
        </a>
        <a class="qr-button" href="qr_code/xianyu-bes.jpg" download="xianyu-bes.jpg" title="闲鱼 二维码">
          <span class="qr-label">闲鱼</span>
          <span class="qr-hint">bes</span>
          <span class="qr-download">下载二维码</span>
          <img class="qr-preview" src="qr_code/xianyu-bes.jpg" alt="Xianyu QR" loading="lazy">
        </a>
        </div>
      </details>
    </div>
    <div class="qr-group">
      <div class="qr-group-title">赞赏支持</div>
      <div class="qr-buttons">
        <a class="qr-button" href="qr_code/wechat-pay.jpg" download="wechat-pay.jpg" title="微信支付收款码">
          <span class="qr-label">微信支付</span>
          <span class="qr-hint">赞赏支持</span>
          <span class="qr-download">下载二维码</span>
          <img class="qr-preview" src="qr_code/wechat-pay.jpg" alt="WeChat Pay QR" loading="lazy">
        </a>
        <a class="qr-button" href="qr_code/alipay-pay.jpg" download="alipay-pay.jpg" title="支付宝收款码">
          <span class="qr-label">支付宝</span>
          <span class="qr-hint">赞赏支持</span>
          <span class="qr-download">下载二维码</span>
          <img class="qr-preview" src="qr_code/alipay-pay.jpg" alt="Alipay Pay QR" loading="lazy">
        </a>
      </div>
    </div>
  </div>
</section>

---

## 项目

状态说明：🟡 开发中 · 🟢 维护中/更新中 · 🟠 准备中 · ✅ 已完成 · 🔴 失败项目

### 在线产品 / 网站

| 项目       | 状态      | 链接                                      |
| ---------- | --------- | ----------------------------------------- |
| Visionflow | 🟡 开发中 | [在线](https://visionflow.im)             |
| AI Box     | 🟢 维护中 | [在线](https://aibox.beisi.tech/)         |
| 应用仓库   | 🟢 维护中 | [在线](https://yyck.beisi.tech/)          |
| 小程序商城 | 🟢 维护中 | [在线](https://hioshop.beisi.tech/)       |
| 公司网站   | 🟡 开发中 | [在线](https://beisi.tech/)               |
| 企业文档   | 🟢 更新中 | [在线](https://beisi-tech.github.io/docs) |

### GitHub 项目

| 项目             | 状态        | 链接                                                   |
| ---------------- | ----------- | ------------------------------------------------------ |
| 飞书智能助手     | 🟡 开发中   | [GitHub](https://github.com/beisi-tech/feishu-copilot) |
| 亚马逊电商自动化 | 🟠 准备中   | [GitHub](https://github.com/beisi-tech/amz-auto-ai)    |
| AI 网络爬虫      | 🟠 准备中   | [GitHub](https://github.com/xiaolinbenben/graber)      |
| b2b 外贸站       | 🟢 维护中   | [GitHub](https://github.com/beisi-tech/web_b2b)        |
| 知心家教小程序   | 🔴 失败项目 | [GitHub](https://github.com/beisi-tech/zhixin-tutor)   |

### 娱乐项目

| 项目                   | 状态      | 链接                                                                                                                      |
| ---------------------- | --------- | ------------------------------------------------------------------------------------------------------------------------- |
| 早安邮件               | 🟡 开发中 | [GitHub](https://github.com/xiaolintuanzi/love-scheduler)                                                                 |
| 福州大学水电费爬虫     | ✅ 已完成 | [GitHub](https://github.com/xiaolinbenben/fzu-electricity-fee-spider)                                                     |
| 10000 中国普通人名大全 | ✅ 已完成 | [GitHub](https://github.com/xiaolinbenben/10k-chinese-names) / [在线](https://xiaolinbenben.github.io/10k-chinese-names/) |

### 指南 / 合集 / 数据

| 项目                | 状态      | 链接                                                        |
| ------------------- | --------- | ----------------------------------------------------------- |
| 提示词合集          | 🟢 更新中 | [GitHub](https://github.com/xiaolinbenben/awesome-prompts)  |
| cf-workers 使用指南 | 🟢 更新中 | [GitHub](https://github.com/xiaolinbenben/cf-workers)       |
| SiteSucker 使用指南 | 🟢 更新中 | [GitHub](https://github.com/xiaolinbenben/sitesucker-guide) |
| 全栈开发者入门练习  | ✅ 已完成 | [GitHub](https://github.com/beisi-tech/beisi-start)         |

如需纠错或更新状态，欢迎在相关仓库提交 issue。
