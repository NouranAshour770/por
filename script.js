// ================== AOS animations ==================
AOS.init({ duration: 850, once: true });

// ================== Mobile nav toggle ==================
const btnBurger = document.querySelector('.nav-toggle');
const menu = document.querySelector('.nav-menu');

btnBurger?.addEventListener('click', () => {
  menu.classList.toggle('show');
});
// اقفل المينيو بعد الضغط على أي لينك
menu?.querySelectorAll('a').forEach(a => {
  a.addEventListener('click', () => menu.classList.remove('show'));
});

// ================== Year in footer ==================
const yEl = document.getElementById('y');
if (yEl) yEl.textContent = new Date().getFullYear();


// =====================================================
// =============== Collapsible (Extracurricular) =======
// =====================================================
document.querySelectorAll('.details-toggle').forEach(btn => {
  btn.addEventListener('click', () => {
    const id = btn.getAttribute('data-target');
    const panel = document.querySelector(id);
    if (!panel) return;

    const expanded = btn.getAttribute('aria-expanded') === 'true';
    btn.setAttribute('aria-expanded', String(!expanded));

    // أول مرة افتحها لو عليها hidden
    if (panel.hasAttribute('hidden')) panel.removeAttribute('hidden');

    panel.classList.toggle('open', !expanded);

    // غيّر نص الزرار حسب اللغة والحالة
    const isAr = document.documentElement.lang === 'ar';
    const label = !expanded
      ? (isAr ? 'إخفاء التفاصيل' : 'Hide details')
      : (isAr ? 'عرض التفاصيل' : 'Show details');
    btn.innerHTML = `<span class="chev">▾</span> ${label}`;
  });
});

// =====================================================
// =============== Collapsible (Projects) ===============
// =====================================================
document.querySelectorAll('.js-toggle').forEach(btn => {
  btn.addEventListener('click', () => {
    const targetSel = btn.getAttribute('data-target');
    const box = document.querySelector(targetSel);
    if (!box) return;

    const open = box.classList.toggle('is-open');
    const textEl = btn.querySelector('.btn-text');
    const isAr = document.documentElement.lang === 'ar';
    if (textEl) {
      textEl.textContent = open
        ? (isAr ? 'إخفاء التفاصيل' : 'Hide details')
        : (isAr ? 'عرض التفاصيل' : 'Show details');
    }
  });
});


// =====================================================
// ===================== i18n Toggle ====================
// =====================================================
// الترجمات تطبّق بس على العناصر اللي عليها data-i18n.
const dict = {
  en: {
    brand: "Nouran Ashour",
    // Navbar
    nav_home: "Home", nav_about: "About", nav_skills: "Skills", nav_projects: "Projects",
    nav_certs: "Certifications", nav_extra: "Extracurricular", nav_writing: "Writing",
    nav_visuals: "Visual Creations", nav_students: "Student Projects", nav_inspiring: "Inspiring Gen",
    nav_competitions: "Competitions", nav_cv: "My CV",
    nav_contact: "Contact",

    // Hero
    hero_name: "Nouran Ashour",
    hero_sub: " Marketing Consultant | Marketing Specialist | MBA Holder (AAST) | Digital Marketing Diploma Holder (AUC) | Content Creator | Teaching Assistant (ERU)",
    hero_loc: "Cairo, Egypt",
    hero_cta: "See My Work",

    // About
    about_title: "About Me",
    about_p: `I’m a Marketing Specialist with a strong background in digital strategy, campaign management, and content creation.
With an MBA and hands-on experience in branding, influencer marketing, and product launch strategies,
I bring both strategic vision and creative execution to every project.`,

    // Skills
    skills_title: "My Skills",
    skills_mkt: "Marketing",
    skills_mkt_1: "Digital Strategy — Advanced",
    skills_mkt_2: "Content Marketing — Advanced",
    skills_mkt_3: "Influencer Marketing — Advanced",
    skills_mkt_4: "Branding & Campaigns — Advanced",
    skills_ana: "Analytics",
    skills_ana_1: "KPI Tracking & ROI",
    skills_ana_2: "A/B Testing",
    skills_ana_3: "SEO Basics",
    skills_ana_4: "Paid Ads Coordination",
    skills_cre: "Creative",
    skills_cre_1: "Storytelling",
    skills_cre_2: "Short-form Video Ideas",
    skills_cre_3: "Visual Direction",
    skills_cre_4: "Social Media Playbooks",

    // Projects
    projects_title: "Projects",
    btn_show: "Show details",
    btn_hide: "Hide details",
    p1_title: "Mama Cleo",
    p1_meta: "Branding / Positioning",
    p1_desc: "A capstone project focused on maternity clothing branding, built on research-driven positioning and creative identity.",
    p2_title: "Mesh Hn3ml Mo7twa?",
    p2_meta: "Storytelling / Content Strategy",
    p2_desc: "Storytelling series sharing real marketing insights & personal branding thoughts across Instagram and LinkedIn.",

    // Certs
    certs_title: "Certifications",
    certs_recent: "Recent Certificates",

    // Extracurricular
    extra_title: "Extracurricular Activities",
    extra_badge_conf: "Conference",
    extra_badge_sem: "Seminar",
    ex1_title: "Zagazig University – Geriatric Nursing",
    ex1_cap1: "Conference – Photo 1",
    ex1_cap2: "Conference – Award",
    ex1_desc: `I contributed to the success of the 5th International Scientific Conference of the Department of Geriatric Nursing, Faculty of Nursing, Zagazig University – “Artificial Intelligence & Empowerment: New Horizons for Elderly Health Care” by developing and executing the strategic marketing plan, leading promotional campaigns, and ensuring effective outreach to targeted audiences locally and internationally. I also had the honor of delivering the opening speech, showcasing the conference’s vision and academic value.`,
    ex2_title: "“Management Puzzle: Strategic Mindset of CEOs”",
    ex2_cap: "InterContinental CityStars",
    ex2_desc: `I was honored to be part of the “Management Puzzle: Strategic Mindset of CEOs” seminar held at the InterContinental Cairo CityStars on July 19th. The event brought together over 22 distinguished CEOs and industry leaders, offering valuable insights on strategic leadership, innovation, and navigating challenges in today’s business environment.`,

    // Writing
    writing_title: "Writing",
    w1_title: "Rasael & Asateer",
    w1_desc: "Published novel with Al-Moltaqa Publishing & Distribution.",
    w2_title: "Nagham El-Rouh",
    w2_desc: "Novel — under publication.",

    // Visuals
    visuals_title: "Visual Creations",

    // Students & Inspiring
    students_title: "Student Projects Under My Supervision",
    inspire_title: "Inspiring the Next Generation of Marketers",

    // Competitions
    competitions_title: "Competitions",
    competitions_desc:
      "Proud to have led my team to victory at the Young Leaders Marathon, winning first place at the national level across all Egyptian universities. Organized by the John D. Gerhart Center for Philanthropy, Civic Engagement, and Responsible Business at The American University in Cairo, and sponsored by Americana. This achievement, with a prize of 21,000 EGP, reflects our teamwork, leadership, and dedication to making a positive impact in our community.",

    // Contact
    contact_title: "Contact",
    nav_prologo: "Professional Logo",
prologo_title: "Professional Logo",
prologo_desc: "My personal logo is more than just a design, it’s my mark as a marketer and content creator. The crown represents leadership, the circle stands for consistency and value, and the black & gold reflect elegance and professionalism.✨"
,
toggle_btn: "Show Details",
// داخل dict.en
nav_content: "Content",
content_title: "Professional Content",
content_desc: "Snackable carousels blending marketing lessons and storytelling. Tap any card to open the post.",
btn_view_post: "View post",

  },

  ar: {
    brand: "نوران عاشور",
    // Navbar
    nav_home: "الرئيسية", nav_about: "نبذة", nav_skills: "المهارات", nav_projects: "المشاريع",
    nav_certs: "الشهادات", nav_extra: "الأنشطة الإضافية", nav_writing: "الكتابة",
    nav_visuals: "إبداعات بصرية", nav_students: "مشاريع الطلاب", nav_inspiring: "إلهام الجيل القادم",
    nav_competitions: "المسابقات", nav_cv: "السيرة الذاتية",
    nav_contact: "تواصل",

    // Hero
    hero_name: "نوران عاشور",
    hero_sub: "مستشار تسويق | أخصائية تسويق |  حاصلة على ماجستير إدارة أعمال (AAST)  | دبلومة التسويق الرقمي (AUC) | صانعة محتوى | مُعيدة (ERU) ",
    hero_loc: "القاهرة، مصر",
    hero_cta: "شوف أعمالي",

    // About
    about_title: "نبذة عنّي",
    about_p: `أنا أخصائية تسويق بخبرة قوية في الاستراتيجية الرقمية، وإدارة الحملات، وصناعة المحتوى.
مع ماجستير إدارة أعمال وخبرة عملية في العلامات التجارية والتسويق عبر المؤثرين واستراتيجيات إطلاق المنتجات،
أقدّم رؤية استراتيجية وتنفيذًا إبداعيًا في كل مشروع.`,

    // Skills
    skills_title: "المهارات",
    skills_mkt: "التسويق",
    skills_mkt_1: "الاستراتيجية الرقمية — متقدم",
    skills_mkt_2: "التسويق بالمحتوى — متقدم",
    skills_mkt_3: "التسويق عبر المؤثرين — متقدم",
    skills_mkt_4: "العلامة التجارية والحملات — متقدم",
    skills_ana: "التحليلات",
    skills_ana_1: "تتبّع مؤشرات الأداء و العائد",
    skills_ana_2: "اختبارات A/B",
    skills_ana_3: "أساسيات SEO",
    skills_ana_4: "تنسيق الإعلانات المدفوعة",
    skills_cre: "الإبداع",
    skills_cre_1: "سرد القصص",
    skills_cre_2: "أفكار فيديو قصيرة",
    skills_cre_3: "التوجيه البصري",
    skills_cre_4: "أدلة تشغيل السوشيال",

    // Projects
    projects_title: "المشاريع",
    btn_show: "عرض التفاصيل",
    btn_hide: "إخفاء التفاصيل",
    p1_title: "Mama Cleo",
    p1_meta: "العلامة / التموضع",
    p1_desc: "مشروع تخرّج يركز على علامة ملابس الأمومة، مبني على تموضع مبني على البحث وهوية إبداعية.",
    p2_title: "مش هنعمل محتوى؟",
    p2_meta: "سرد قصصي / استراتيجية محتوى",
    p2_desc: "سلسلة تحكي خبرات تسويقية حقيقية وأفكار براند شخصي عبر إنستجرام ولينكدإن.",

    // Certs
    certs_title: "الشهادات",
    certs_recent: "الشهادات الحديثة",

    // Extracurricular
    extra_title: "الأنشطة الإضافية",
    extra_badge_conf: "مؤتمر",
    extra_badge_sem: "سيمنار",
    ex1_title: "جامعة الزقازيق — تمريض المسنين",
    ex1_cap1: "صور المؤتمر — 1",
    ex1_cap2: "درع تقدير — المؤتمر",
    ex1_desc: `ساهمت في نجاح المؤتمر العلمي الدولي الخامس لقسم تمريض المسنين، كلية التمريض، جامعة الزقازيق — "الذكاء الاصطناعي والتمكين: آفاق جديدة لرعاية صحة المسنين" من خلال إعداد وتنفيذ الخطة التسويقية الاستراتيجية، وقيادة الحملات الترويجية، وضمان الوصول الفعّال للجمهور المستهدف محليًا ودوليًا. كما تشرفت بإلقاء كلمة الافتتاح إبرازًا لرؤية المؤتمر وقيمته الأكاديمية.`,
    ex2_title: "“لغز الإدارة: عقلية القادة التنفيذيين”",
    ex2_cap: "إنتركونتيننتال سيتي ستارز",
    ex2_desc: `تشرفت بالمشاركة في سيمنار "لغز الإدارة: عقلية القادة التنفيذيين" يوم 19 يوليو، والذي جمع أكثر من 22 من الرؤساء التنفيذيين وقادة الصناعة لتبادل رؤى قيّمة حول القيادة الاستراتيجية والابتكار والتعامل مع تحديات بيئة الأعمال.`,

    // Writing
    writing_title: "الكتابة",
    w1_title: "رسائل وأساطير",
    w1_desc: "رواية منشورة مع الملتقى للنشر والتوزيع.",
    w2_title: "نغم الروح",
    w2_desc: "رواية — تحت الطبع.",

    // Visuals
    visuals_title: "إبداعات بصرية",

    // Students & Inspiring
    students_title: "مشاريع الطلاب تحت إشرافي",
    inspire_title: "إلهام الجيل القادم من المسوّقين",

    // Competitions
    competitions_title: "المسابقات",
    competitions_desc:
      "فخور بقيادة فريقي للفوز في ماراثون القادة الشباب، والحصول على المركز الأول على مستوى الجمهورية بين جميع الجامعات المصرية. نظمه مركز جون د. جيرهارت للعمل الخيري والمشاركة المدنية والمسؤولية المجتمعية بالجامعة الأمريكية بالقاهرة، وبرعاية أمريكانا. هذا الإنجاز، بجائزة قدرها 21,000 جنيه مصري، يعكس روح الفريق والقيادة والالتزام بإحداث أثر إيجابي في مجتمعنا.",

    // Contact
    contact_title: "تواصل",
    nav_prologo: "الشعار الاحترافي",
prologo_title: "الشعار الاحترافي",
prologo_desc: "شعاري الشخصي مش مجرد تصميم, هو بصمتي كمسوّقة وصانعة محتوى. التاج بيرمز للقيادة، والدائرة للاستمرارية والقيمة، والأسود والذهبي للأناقة والاحترافية.✨",
toggle_btn: "عرض التفاصيل",
// داخل dict.ar
nav_content: "المحتوى",
content_title: "المحتوى الاحترافي",
content_desc: "سلايدات خفيفة تمزج دروس التسويق بسرد قصصي. اضغط على أي كارت ليفتح البوست.",
btn_view_post: "عرض البوست",
  }
};

// مفاتيح زرار الإظهار/الإخفاء
const getShowLabel = () =>
  (document.documentElement.lang === 'ar' ? dict.ar.btn_show : dict.en.btn_show);
const getHideLabel = () =>
  (document.documentElement.lang === 'ar' ? dict.ar.btn_hide : dict.en.btn_hide);

// تطبيق اللغة على العناصر ذات data-i18n
function applyLanguage(lang) {
  const map = dict[lang] || dict.en;

  // بدّل اتجاه الصفحة ولغة الـhtml
  document.documentElement.setAttribute('lang', lang === 'ar' ? 'ar' : 'en');
  document.documentElement.setAttribute('dir',  lang === 'ar' ? 'rtl' : 'ltr');

  // النص في كل عنصر عليه data-i18n
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (key && map[key] != null) el.textContent = map[key];
  });

  // زر اللغة نفسه
  const tgl = document.getElementById('langToggle');
  if (tgl) {
    tgl.textContent = lang === 'ar' ? 'English' : 'العربية';
    tgl.setAttribute('aria-pressed', lang === 'ar' ? 'true' : 'false');
  }

  // تحديث أزرار التفاصيل المفتوحة/المغلقة
  // Extracurricular (.details-toggle)
  document.querySelectorAll('.details-toggle').forEach(btn => {
    const id = btn.getAttribute('data-target');
    const panel = document.querySelector(id);
    if (!panel) return;
    const expanded =
      btn.getAttribute('aria-expanded') === 'true' ||
      (panel.classList.contains('open') && !panel.hasAttribute('hidden'));
    const label = expanded ? getHideLabel() : getShowLabel();
    btn.innerHTML = `<span class="chev">▾</span> ${label}`;
  });

  // Projects (.js-toggle داخلها .btn-text)
  document.querySelectorAll('.js-toggle .btn-text').forEach(span => {
    const boxId = span.closest('.js-toggle')?.getAttribute('data-target');
    const box   = boxId ? document.querySelector(boxId) : null;
    const open  = !!box && box.classList.contains('is-open');
    span.textContent = open ? getHideLabel() : getShowLabel();
  });

  localStorage.setItem('lang', lang);
}

// زر التبديل (لو موجود)
document.getElementById('langToggle')?.addEventListener('click', () => {
  const current = document.documentElement.lang === 'ar' ? 'ar' : 'en';
  applyLanguage(current === 'en' ? 'ar' : 'en');
});

// Initialize language (افتراضي إنجليزي، أو استرجاع من التخزين)
applyLanguage(localStorage.getItem('lang') || 'en');
// زرار show/hide للـ Professional Logo
const toggleBtn = document.getElementById("toggle-desc");
const prologoDesc = document.getElementById("prologo-desc");

if (toggleBtn && prologoDesc) {
  toggleBtn.addEventListener("click", () => {
    if (prologoDesc.classList.contains("hidden")) {
      prologoDesc.classList.remove("hidden");
      prologoDesc.classList.add("show");
      toggleBtn.textContent =
        document.documentElement.dir === "rtl" ? "إخفاء التفاصيل" : "Hide Details";
    } else {
      prologoDesc.classList.remove("show");
      prologoDesc.classList.add("hidden");
      toggleBtn.textContent =
        document.documentElement.dir === "rtl" ? "عرض التفاصيل" : "Show Details";
    }
  });
}
// Toggle for Content section description
document.querySelector('.js-content-desc-toggle')?.addEventListener('click', (e)=>{
  const btn = e.currentTarget;
  const id = btn.getAttribute('data-target');
  const box = document.querySelector(id);
  if (!box) return;

  const expanded = btn.getAttribute('aria-expanded') === 'true';
  btn.setAttribute('aria-expanded', String(!expanded));

  if (box.hasAttribute('hidden')) box.removeAttribute('hidden');
  box.classList.toggle('open', !expanded);

  const isAr = document.documentElement.lang === 'ar';
  const label = !expanded ? (isAr ? 'إخفاء التفاصيل' : 'Hide details')
                          : (isAr ? 'عرض التفاصيل' : 'Show details');
  btn.innerHTML = `<span class="chev">▾</span> ${label}`;
});

