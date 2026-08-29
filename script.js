const I18N = {
  en: {
    "nav.about": "About",
    "nav.skills": "Skills",
    "nav.projects": "Projects",
    "nav.experience": "Experience",
    "nav.contact": "Contact",
    "hero.greeting": "Hi, my name is",
    "hero.role": "I build things for the web.",
    "hero.tagline": "Software developer focused on clean, practical solutions. Welcome to my corner of the internet.",
    "hero.cta.projects": "View my projects",
    "hero.cta.contact": "Get in touch",
    "about.title": "About Me",
    "about.p1": "Hello! I'm Thach, a developer who enjoys turning ideas into working software. I care about writing code that is simple, readable, and easy to maintain.",
    "about.p2": "I'm currently open to new opportunities where I can grow as an engineer and contribute to meaningful products. Feel free to reach out!",
    "skills.title": "Skills",
    "skills.langs": "Languages",
    "skills.frameworks": "Frameworks & Libraries",
    "skills.tools": "Tools & Platforms",
    "projects.title": "Projects",
    "projects.p1.title": "Project One",
    "projects.p1.desc": "A short description of the project: what it does, the problem it solves, and what makes it interesting.",
    "projects.p2.title": "Project Two",
    "projects.p2.desc": "Another project description. Replace these cards with your real projects, links, and screenshots.",
    "projects.p3.title": "Project Three",
    "projects.p3.desc": "A third project description. Two to three solid projects with clear results beat a long list.",
    "exp.title": "Experience & Education",
    "exp.e1.period": "2024 — Present",
    "exp.e1.role": "Your Role",
    "exp.e1.company": "Company / Organization",
    "exp.e1.desc": "Describe what you did, technologies you used, and measurable results.",
    "exp.edu1.period": "2020 — 2024",
    "exp.edu1.degree": "B.Sc. in Computer Science",
    "exp.edu1.school": "Your University",
    "exp.edu1.desc": "Relevant coursework, achievements, or activities.",
    "contact.title": "Get In Touch",
    "contact.subtitle": "My inbox is always open — whether you have an opportunity or just want to say hi.",
    "footer.text": "Designed & built by Thach Thanh",
  },
  vi: {
    "nav.about": "Giới thiệu",
    "nav.skills": "Kỹ năng",
    "nav.projects": "Dự án",
    "nav.experience": "Kinh nghiệm",
    "nav.contact": "Liên hệ",
    "hero.greeting": "Xin chào, tôi là",
    "hero.role": "Tôi xây dựng sản phẩm trên web.",
    "hero.tagline": "Lập trình viên tập trung vào giải pháp gọn gàng, thực tế. Chào mừng đến với góc internet của tôi.",
    "hero.cta.projects": "Xem dự án của tôi",
    "hero.cta.contact": "Liên hệ",
    "about.title": "Về tôi",
    "about.p1": "Xin chào! Tôi là Thạch — một lập trình viên thích biến ý tưởng thành sản phẩm hoạt động được. Tôi quan tâm đến code đơn giản, dễ đọc và dễ bảo trì.",
    "about.p2": "Hiện tại tôi đang tìm kiếm cơ hội mới để phát triển bản thân và đóng góp vào những sản phẩm ý nghĩa. Đừng ngại liên hệ nhé!",
    "skills.title": "Kỹ năng",
    "skills.langs": "Ngôn ngữ lập trình",
    "skills.frameworks": "Framework & Thư viện",
    "skills.tools": "Công cụ & Nền tảng",
    "projects.title": "Dự án",
    "projects.p1.title": "Dự án một",
    "projects.p1.desc": "Mô tả ngắn về dự án: nó làm gì, giải quyết vấn đề gì, và điều gì làm nó thú vị.",
    "projects.p2.title": "Dự án hai",
    "projects.p2.desc": "Mô tả dự án khác. Thay các thẻ này bằng dự án thật, link và ảnh chụp màn hình của bạn.",
    "projects.p3.title": "Dự án ba",
    "projects.p3.desc": "Mô tả dự án thứ ba. Hai đến ba dự án chất lượng với kết quả rõ ràng tốt hơn một danh sách dài.",
    "exp.title": "Kinh nghiệm & Học vấn",
    "exp.e1.period": "2024 — Nay",
    "exp.e1.role": "Vị trí của bạn",
    "exp.e1.company": "Công ty / Tổ chức",
    "exp.e1.desc": "Mô tả công việc, công nghệ đã dùng và kết quả đo lường được.",
    "exp.edu1.period": "2020 — 2024",
    "exp.edu1.degree": "Cử nhân Khoa học Máy tính",
    "exp.edu1.school": "Trường đại học của bạn",
    "exp.edu1.desc": "Môn học, thành tích hoặc hoạt động nổi bật.",
    "contact.title": "Liên hệ",
    "contact.subtitle": "Hộp thư của tôi luôn mở — dù bạn có cơ hội hay chỉ muốn chào hỏi.",
    "footer.text": "Thiết kế & phát triển bởi Thach Thanh",
  },
};

const langBtn = document.getElementById("lang-btn");
const themeBtn = document.getElementById("theme-btn");
const menuBtn = document.getElementById("menu-btn");
const navLinks = document.getElementById("nav-links");

function applyLang(lang) {
  document.documentElement.lang = lang;
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
