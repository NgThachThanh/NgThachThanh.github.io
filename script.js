const I18N = {
  en: {
    "title": "Nguyen Thach Thanh — Embedded Systems & IoT",
    "nav.about": "About",
    "nav.skills": "Skills",
    "nav.projects": "Projects",
    "nav.education": "Education",
    "nav.contact": "Contact",
    "hero.greeting": "Hi, my name is",
    "hero.role": "I build embedded systems & IoT devices.",
    "hero.tagline": "Final-year IT student majoring in Microelectronics Engineering. I like working close to the hardware: sensors, PCBs and low-power firmware.",
    "hero.cta.projects": "View my projects",
    "hero.cta.contact": "Get in touch",
    "about.title": "About Me",
    "about.p1": "I'm Nguyen Thach Thanh, a final-year student (2023–2027) at HUFLIT, majoring in Microelectronics Engineering. Most of my work sits between hardware and software: designing PCBs in KiCad, writing firmware for STM32 and ESP32, and measuring how much energy every milliamp really costs.",
    "about.p2": "I haven't worked at a company yet — everything here is research and competition work. I'm currently looking for my first opportunity (internship or junior role) in embedded systems or hardware-related development.",
    "skills.title": "Skills",
    "skills.embedded": "Embedded",
    "skills.pcb": "PCB & Hardware",
    "skills.software": "Software",
    "skills.tools": "Tools",
    "projects.title": "Projects",
    "projects.p1.title": "Buck vs LDO Energy Comparison",
    "projects.p1.desc": "Compared a buck converter and an LDO powering the same real workload: an STM32L432 + BME280 node on a 5 s duty cycle (race-to-sleep), measured across supply voltages from 3.3 V to 4.2 V. Designed the 4-layer PCB in KiCad and measured input-side energy with an INA228 over 286 runs.",
    "projects.p1.tag": "Undergraduate thesis project",
    "projects.p2.title": "GreenEco — Smart Greenhouse",
    "projects.p2.desc": "IoT greenhouse on Raspberry Pi, with AI plant-disease detection (teammates) and remote control of lights, pump and fans through an app. My part was the hardware side: sensor wiring and reading, and sending signals to the server, plus the relay control API.",
    "projects.p2.award": "Top 12 — Green Innovation Contest (Sang Tao Xanh), HUST 2025",
    "projects.p3.title": "Smart Helmet",
    "projects.p3.desc": "ESP32-S3 helmet with RTOS firmware: MPU6050 fall detection, automatic SMS to a phone when a fall is detected, and a HUD showing directions. The AI drowsiness feature was handled by teammates — I built the sensor and firmware parts.",
    "projects.p3.award": "Top 20 — BK Innovation, HCMUT",
    "edu.title": "Education & Awards",
    "edu.school.name": "HUFLIT — B.Sc. in IT, Microelectronics Engineering",
    "edu.school.year": "Final year",
    "edu.school.note": "GPA 2.9/4.0 · TOEIC 540/990",
    "edu.award1.title": "Top 12 — Green Innovation Contest (Sang Tao Xanh), HUST",
    "edu.award1.place": "GreenEco project",
    "edu.award2.title": "Top 20 — BK Innovation, HCMUT",
    "edu.award2.place": "Smart Helmet project",
    "contact.title": "Get In Touch",
    "contact.subtitle": "My inbox is always open — whether you have an opportunity or just want to talk hardware.",
    "footer.text": "Designed & built by Thach Thanh",
  },
  vi: {
    "title": "Nguyen Thach Thanh — Hệ thống nhúng & IoT",
    "nav.about": "Giới thiệu",
    "nav.skills": "Kỹ năng",
    "nav.projects": "Dự án",
    "nav.education": "Học vấn",
    "nav.contact": "Liên hệ",
    "hero.greeting": "Xin chào, tôi là",
    "hero.role": "Tôi làm hệ thống nhúng & IoT.",
    "hero.tagline": "Sinh viên năm cuối ngành CNTT, chuyên ngành Kỹ thuật vi mạch. Tôi thích làm việc gần phần cứng: cảm biến, PCB và firmware tiết kiệm năng lượng.",
    "hero.cta.projects": "Xem dự án của tôi",
    "hero.cta.contact": "Liên hệ",
    "about.title": "Về tôi",
    "about.p1": "Tôi là Nguyễn Thạch Thành, sinh viên năm cuối (2023–2027) tại HUFLIT, chuyên ngành Kỹ thuật vi mạch. Đa phần công việc của tôi nằm giữa phần cứng và phần mềm: thiết kế PCB bằng KiCad, viết firmware cho STM32 và ESP32, đo xem mỗi milliamp thực sự tốn bao nhiêu năng lượng.",
    "about.p2": "Tôi chưa từng làm ở công ty nào — mọi thứ trên đây đều là nghiên cứu và dự án thi. Hiện tôi đang tìm cơ hội đầu tiên (thực tập hoặc fresher) về hệ thống nhúng hoặc phát triển phần cứng.",
    "skills.title": "Kỹ năng",
    "skills.embedded": "Hệ thống nhúng",
    "skills.pcb": "PCB & Phần cứng",
    "skills.software": "Phần mềm",
    "skills.tools": "Công cụ",
    "projects.title": "Dự án",
    "projects.p1.title": "So sánh năng lượng Buck vs LDO",
    "projects.p1.desc": "So sánh bộ ổn áp buck và LDO cấp nguồn cho cùng một workload thực tế: node STM32L432 + BME280 chạy duty-cycle 5 giây (race-to-sleep), đo ở các mức điện áp nguồn từ 3,3 V đến 4,2 V. Tự thiết kế PCB 4 lớp bằng KiCad và đo năng lượng phía đầu vào bằng INA228 qua 286 lần chạy.",
    "projects.p1.tag": "Đề tài khoa luận tốt nghiệp",
    "projects.p2.title": "GreenEco — Nhà kính thông minh",
    "projects.p2.desc": "Nhà kính IoT trên Raspberry Pi, có AI nhận diện cây bệnh/sâu (phần của team) và điều khiển đèn, bơm, quạt từ xa qua app. Phần của tôi là phía phần cứng: đi dây và đọc cảm biến, gửi tín hiệu lên server, cùng API điều khiển relay.",
    "projects.p2.award": "Top 12 — Cuộc thi Sáng Tạo Xanh, Bách Khoa Hà Nội 2025",
    "projects.p3.title": "Mũ bảo hiểm thông minh",
    "projects.p3.desc": "Mũ bảo hiểm ESP32-S3 với firmware RTOS: MPU6050 nhận biết té ngã, tự động gửi tin nhắn về điện thoại khi phát hiện té ngã, và HUD chỉ đường. Phần AI nhận biết ngủ gục do team đảm nhiệm — tôi làm phần cảm biến và firmware.",
    "projects.p3.award": "Top 20 — BK Innovation, Bách Khoa TP.HCM",
    "edu.title": "Học vấn & Giải thưởng",
    "edu.school.name": "HUFLIT — Cử nhân CNTT, chuyên ngành Kỹ thuật vi mạch",
    "edu.school.year": "Sinh viên năm cuối",
    "edu.school.note": "GPA 2.9/4.0 · TOEIC 540/990",
    "edu.award1.title": "Top 12 — Cuộc thi Sáng Tạo Xanh, Bách Khoa Hà Nội",
    "edu.award1.place": "Dự án GreenEco",
    "edu.award2.title": "Top 20 — BK Innovation, Bách Khoa TP.HCM",
    "edu.award2.place": "Dự án Mũ bảo hiểm thông minh",
    "contact.title": "Liên hệ",
    "contact.subtitle": "Hộp thư của tôi luôn mở — dù bạn có cơ hội hay chỉ muốn nói chuyện phần cứng.",
    "footer.text": "Thiết kế & phát triển bởi Thach Thanh",
  },
};

const langBtn = document.getElementById("lang-btn");
const themeBtn = document.getElementById("theme-btn");
const menuBtn = document.getElementById("menu-btn");
const navLinks = document.getElementById("nav-links");

function applyLang(lang) {
  document.documentElement.lang = lang;
  document.title = I18N[lang]["title"];
  for (const el of document.querySelectorAll("[data-i18n]")) {
    const text = I18N[lang][el.dataset.i18n];
    if (text !== undefined) el.textContent = text;
  }
  langBtn.textContent = lang === "en" ? "VI" : "EN";
}

const savedLang = localStorage.getItem("lang") || "en";
applyLang(savedLang);

langBtn.addEventListener("click", () => {
  const next = document.documentElement.lang === "en" ? "vi" : "en";
  localStorage.setItem("lang", next);
  applyLang(next);
});

themeBtn.addEventListener("click", () => {
  const next = document.documentElement.dataset.theme === "dark" ? "light" : "dark";
  document.documentElement.dataset.theme = next;
  localStorage.setItem("theme", next);
});

menuBtn.addEventListener("click", () => navLinks.classList.toggle("open"));
navLinks.addEventListener("click", () => navLinks.classList.remove("open"));

const observer = new IntersectionObserver(
  (entries) => {
    for (const e of entries) {
      if (e.isIntersecting) {
        e.target.classList.add("visible");
        observer.unobserve(e.target);
      }
    }
  },
  { threshold: 0.1 }
);

for (const el of document.querySelectorAll(".reveal")) observer.observe(el);
