const I18N = {
  en: {
    "title": "Nguyen Thach Thanh — Embedded Systems & IoT",
    "hero.role": "Embedded Systems & IoT Engineering",
    "hero.location": "Ho Chi Minh City, Vietnam",
    "hero.cv": "Download CV",
    "about.title": "About",
    "about.p1": "Final-year Microelectronics Engineering student at HUFLIT focused on embedded systems and IoT — from bare-metal firmware to board bring-up and validation. Co-author of three international conference papers (two published, one accepted). Seeking an embedded systems internship where I can contribute to real hardware and grow toward a full-time embedded role.",
    "about.p2": "Career goal: embedded firmware engineer for low-power IoT and edge-AI devices.",
    "projects.title": "Projects",
    "projects.p1.title": "Buck vs LDO Energy Comparison",
    "projects.p1.b1": "Designed and brought up a 4-layer KiCad PCB with jumper-selectable TPS62840 buck / STLQ020 LDO branches powering an STM32L432 + BME280 node, and wrote the bare-metal firmware for the 5 s BME280–Stop2 duty cycle (race-to-sleep).",
    "projects.p1.b2": "Built an INA228 input-side energy rig (~10k samples/s) and ran 286 verified experiments across 3.30–4.20 V — each run as a statistical unit, with confidence intervals plus ABBA and marker verification campaigns.",
    "projects.p1.b3": "Showed the buck-vs-LDO trade-off is voltage-region-dependent: buck draws 10–18% less across 3.80–4.20 V, but enters a high-input-energy state in the 3.35–3.60 V region (up to ~75× the LDO).",
    "projects.p2.title": "GreenEco — Smart Greenhouse",
    "projects.p2.b1": "Raspberry Pi greenhouse system: a REST API driving 4 active-low relay channels (pump, two fans, grow light), with sensor data streaming to the team's server and control app.",
    "projects.p2.b2": "Brought up the hardware and sensor layer on two buses — RS485/Modbus RTU (ES-Soil7 soil, DFRobot environmental sensor) and UART (SEN0220 CO₂, SEN0501) — plus relay GPIO mapping, with Python unit tests covering the GPIO, UART/Modbus and API layers.",
    "projects.p3.title": "Smart Helmet",
    "projects.p3.b1": "ESP32-S3 dual-core FreeRTOS firmware: 100 Hz MPU6050 sensing task with a filtered, speed/road-adaptive threshold fall-detection state machine (3.5 g final threshold, staged alerts, physical cancel button).",
    "projects.p3.b2": "Automatic SMS alert via GSM module (single send per crash, 10 s cancel window) and an OLED HUD fed by BLE navigation data from the phone.",
    "projects.p3.b3": "I built the sensing and firmware parts; AI drowsiness detection belonged to teammates — the work was published as a co-authored paper at CUTE 2026 (see Publications).",
    "pubs.title": "Publications",
    "pubs.published": "Published",
    "pubs.accepted": "Accepted",
    "pubs.submitted": "Submitted",
    "pubs.badge.accepted": "Accepted",
    "pubs.toappear": "To appear in",
    "pubs.submitted.empty": "No manuscripts under review.",
    "pubs.role": "Co-author",
    "exp.title": "Experience",
    "exp.empty": "No professional experience yet — open to an embedded systems internship.",
    "awards.title": "Awards",
    "edu.title": "Education",
    "edu.school.period": "2023 — Present",
    "edu.school.name": "Ho Chi Minh City University of Foreign Languages — Information Technology (HUFLIT)",
    "edu.school.degree": "B.Sc. Information Technology",
    "edu.school.major": "Major: Microelectronics Engineering",
    "edu.award1.title": "Top 12 — Green Innovation Contest (Sang Tao Xanh), HUST",
    "edu.award1.place": "GreenEco project",
    "edu.award2.title": "Top 20 — BK Innovation, HCMUT",
    "edu.award2.place": "Smart Helmet project",
    "edu.award3.title": "University-level research project",
    "edu.award3.place": "Smart Helmet — HUFLIT",
    "skills.title": "Skills",
    "skills.programming": "Programming",
    "skills.mcu": "MCU",
    "skills.protocols": "Protocols",
    "skills.tools": "Tools",
    "lang.title": "Languages",
    "lang.list": "Vietnamese (native) · English (intermediate)",
  },
  vi: {
    "title": "Nguyen Thach Thanh — Hệ thống nhúng & IoT",
    "hero.role": "Hệ thống nhúng & IoT",
    "hero.location": "Thành phố Hồ Chí Minh, Việt Nam",
    "hero.cv": "Tải CV",
    "about.title": "Giới thiệu",
    "about.p1": "Sinh viên năm cuối ngành Kỹ thuật vi mạch tại HUFLIT, tập trung vào hệ thống nhúng và IoT — từ firmware bare-metal tới bring-up bo mạch và kiểm chứng đo đạc. Đồng tác giả 3 bài báo hội nghị quốc tế (2 bài đã công bố, 1 bài được chấp nhận). Đang tìm vị trí thực tập hệ thống nhúng để đóng góp vào sản phẩm phần cứng thực tế và phát triển lên kỹ sư nhúng full-time.",
    "about.p2": "Mục tiêu nghề nghiệp: kỹ sư firmware nhúng cho thiết bị IoT tiết kiệm năng lượng và edge-AI.",
    "projects.title": "Dự án",
    "projects.p1.title": "So sánh năng lượng Buck vs LDO",
    "projects.p1.b1": "Tự thiết kế và đưa vào hoạt động PCB 4 lớp bằng KiCad với 2 nhánh nguồn buck TPS62840 / LDO STLQ020 chọn bằng jumper cấp nguồn cho node STM32L432 + BME280, đồng thời viết firmware bare-metal cho chu trình duty-cycle 5 giây BME280–Stop2 (race-to-sleep).",
    "projects.p1.b2": "Xây dựng hệ đo năng lượng đầu vào bằng INA228 (~10k mẫu/giây) và chạy 286 thí nghiệm đã kiểm chứng trên dải 3,30–4,20 V — mỗi lượt chạy là một đơn vị thống kê, có khoảng tin cậy cùng các đợt kiểm chứng ABBA và marker.",
    "projects.p1.b3": "Chỉ ra đánh đổi buck–LDO phụ thuộc vùng điện áp: buck tiêu thụ ít hơn 10–18% trên dải 3,80–4,20 V, nhưng rơi vào trạng thái tiêu thụ bất thường ở vùng 3,35–3,60 V (lên tới ~75 lần LDO).",
    "projects.p2.title": "GreenEco — Nhà kính thông minh",
    "projects.p2.b1": "Hệ thống nhà kính trên Raspberry Pi: API REST điều khiển 4 kênh relay active-low (máy bơm, hai quạt, đèn), dữ liệu cảm biến gửi lên server, app điều khiển do team phát triển.",
    "projects.p2.b2": "Khởi động tầng phần cứng và cảm biến trên 2 bus — RS485/Modbus RTU (cảm biến đất ES-Soil7, cảm biến môi trường DFRobot) và UART (SEN0220 CO₂, SEN0501) — cùng sơ đồ chân relay, kèm unit test Python cho các tầng GPIO, UART/Modbus và API.",
    "projects.p3.title": "Mũ bảo hiểm thông minh",
    "projects.p3.b1": "Firmware FreeRTOS 2 nhân trên ESP32-S3: task đọc MPU6050 100 Hz với máy trạng thái phát hiện té ngã bằng ngưỡng có lọc, tự thích ứng theo tốc độ/mặt đường (ngưỡng cuối 3,5 g, cảnh báo theo giai đoạn, nút hủy vật lý).",
    "projects.p3.b2": "Tự động gửi SMS cảnh báo qua module GSM (gửi một lần mỗi lần ngã, cửa sổ hủy 10 giây) và HUD OLED nhận dữ liệu chỉ đường qua BLE từ điện thoại.",
    "projects.p3.b3": "Mình làm phần cảm biến và firmware; phần AI phát hiện ngủ gục do team phụ trách — nghiên cứu đã công bố là bài báo đồng tác giả tại CUTE 2026 (xem Bài báo khoa học).",
    "pubs.title": "Bài báo khoa học",
    "pubs.published": "Đã công bố",
    "pubs.accepted": "Được chấp nhận",
    "pubs.submitted": "Đã nộp",
    "pubs.badge.accepted": "Được chấp nhận",
    "pubs.toappear": "Sắp xuất hiện trong",
    "pubs.submitted.empty": "Chưa có bản thảo đang xét duyệt.",
    "pubs.role": "Đồng tác giả",
    "exp.title": "Kinh nghiệm",
    "exp.empty": "Chưa có kinh nghiệm làm việc chính thức — đang tìm cơ hội thực tập hệ thống nhúng.",
    "awards.title": "Giải thưởng",
    "edu.title": "Học vấn",
    "edu.school.period": "2023 — nay",
    "edu.school.name": "Trường Đại học Ngoại ngữ - Tin học Thành phố Hồ Chí Minh (HUFLIT)",
    "edu.school.degree": "Cử nhân CNTT",
    "edu.school.major": "Chuyên ngành: Kỹ thuật vi mạch",
    "edu.award1.title": "Top 12 — Cuộc thi Sáng Tạo Xanh, Bách Khoa Hà Nội",
    "edu.award1.place": "Dự án GreenEco",
    "edu.award2.title": "Top 20 — BK Innovation, Bách Khoa TP.HCM",
    "edu.award2.place": "Dự án Mũ bảo hiểm thông minh",
    "edu.award3.title": "Đề tài nghiên cứu khoa học cấp trường",
    "edu.award3.place": "Mũ bảo hiểm thông minh — HUFLIT",
    "skills.title": "Kỹ năng",
    "skills.programming": "Ngôn ngữ lập trình",
    "skills.mcu": "Vi điều khiển",
    "skills.protocols": "Giao thức",
    "skills.tools": "Công cụ",
    "lang.title": "Ngôn ngữ",
    "lang.list": "Tiếng Việt (bản ngữ) · Tiếng Anh (trung bình)",
  },
};

const langBtn = document.getElementById("lang-btn");
const themeBtn = document.getElementById("theme-btn");
const cvLink = document.getElementById("cv-link");

function applyLang(lang) {
  document.documentElement.lang = lang;
  document.title = I18N[lang]["title"];
  for (const el of document.querySelectorAll("[data-i18n]")) {
    const text = I18N[lang][el.dataset.i18n];
    if (text !== undefined) el.textContent = text;
  }
  cvLink.href = lang === "en" ? "CV/CV-NguyenThachThanh-EN.pdf" : "CV/CV-NguyenThachThanh-VI.pdf";
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

// Reveal on scroll — minimal, respects reduced motion
const revealEls = document.querySelectorAll(".reveal");
if ("IntersectionObserver" in window && !matchMedia("(prefers-reduced-motion: reduce)").matches) {
  const io = new IntersectionObserver(
    (entries) => {
      for (const e of entries) {
        if (e.isIntersecting) {
          e.target.classList.add("visible");
          io.unobserve(e.target);
        }
      }
    },
    { threshold: 0.08 }
  );
  for (const el of revealEls) io.observe(el);
} else {
  for (const el of revealEls) el.classList.add("visible");
}
