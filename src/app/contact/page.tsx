import type { Metadata } from "next";
import { contactQrGroups } from "@/data/profile";
import styles from "./contact.module.css";

export const metadata: Metadata = {
  title: "联系",
  description: "联系方式与赞赏二维码，支持悬浮预览与点击下载。"
};

export default function ContactPage() {
  return (
    <div className="pb-10 pt-2">
      <section className={styles.hub} aria-label="联系与赞赏二维码">
        <div className={styles.header}>
          <h2 className={styles.title}>联系我 / 赞赏</h2>
          <p className={styles.subtitle}>悬浮预览二维码，点击下载保存</p>
        </div>

        <div className={styles.grid}>
          {contactQrGroups.map((group) => (
            <div key={group.title} className={styles.group}>
              <div className={styles.groupTitle}>{group.title}</div>

              <div className={`${styles.buttons} ${group.more ? styles.primary : ""}`}>
                {group.primary.map((item) => {
                  const fileName = item.file.split("/").pop() ?? "qrcode.jpg";

                  return (
                    <a
                      key={`${group.title}-${item.label}`}
                      className={styles.button}
                      href={item.file}
                      download={fileName}
                      title={item.title}
                    >
                      <span className={styles.label}>{item.label}</span>
                      <span className={styles.hint}>{item.hint}</span>
                      <span className={styles.download}>下载二维码</span>
                      <img className={styles.preview} src={item.file} alt={item.alt} loading="lazy" />
                    </a>
                  );
                })}
              </div>

              {group.more ? (
                <details className={styles.more}>
                  <summary>显示更多</summary>
                  <div className={styles.buttons}>
                    {group.more.map((item) => {
                      const fileName = item.file.split("/").pop() ?? "qrcode.jpg";

                      return (
                        <a
                          key={`${group.title}-${item.label}`}
                          className={styles.button}
                          href={item.file}
                          download={fileName}
                          title={item.title}
                        >
                          <span className={styles.label}>{item.label}</span>
                          <span className={styles.hint}>{item.hint}</span>
                          <span className={styles.download}>下载二维码</span>
                          <img className={styles.preview} src={item.file} alt={item.alt} loading="lazy" />
                        </a>
                      );
                    })}
                  </div>
                </details>
              ) : null}
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
