// アイコンの初期化
feather.replace();

// --- スクロール連動のアニメーション（Intersection Observer） ---
const fadeElements = document.querySelectorAll('.fade-in');

const observerOptions = {
  root: null, // ビューポートを基準
  rootMargin: '0px',
  threshold: 0.15 // 要素が15%表示されたら発火
};

const observer = new IntersectionObserver((entries, observer) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      // visibleクラスを付与してCSSアニメーションを開始
      entry.target.classList.add('visible');
      // 一度表示されたら監視を解除（一度きりのアニメーションにする場合）
      observer.unobserve(entry.target);
    }
  });
}, observerOptions);

fadeElements.forEach(el => observer.observe(el));

// --- ナビゲーションのスムーズスクロール ---
const navLinks = document.querySelectorAll('.nav-container a, .hero-bg a[href^="#"], .sidebar-link');

navLinks.forEach(link => {
  link.addEventListener('click', function (e) {
    const targetId = this.getAttribute('href');
    // "#" のみのリンクなどを除外
    if (targetId && targetId.startsWith('#') && targetId.length > 1) {
      e.preventDefault();
      const targetElement = document.querySelector(targetId);

      if (targetElement) {
        // 固定ヘッダーの高さを考慮したスクロール
        const headerOffset = 60;
        const elementPosition = targetElement.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.scrollY - headerOffset;

        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        });
      }
    }
  });
});

// --- サイドバーの ScrollSpy（ハイライト連動） ---
const workSections = document.querySelectorAll('section[id^="work-"]');
const sidebarLinks = document.querySelectorAll('.sidebar-link');

const spyOptions = {
  root: null,
  rootMargin: '-40% 0px -60% 0px', // 画面の少し上部を通過したセクションをアクティブと判定
  threshold: 0
};

const spyObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      // 全てのリンクからactiveを外す
      sidebarLinks.forEach(link => link.classList.remove('active'));

      // 対象のリンクにactiveを付与
      const activeId = entry.target.getAttribute('id');
      const activeLink = document.querySelector(`.sidebar-link[href="#${activeId}"]`);
      if (activeLink) {
        activeLink.classList.add('active');
      }
    }
  });
}, spyOptions);

workSections.forEach(sec => spyObserver.observe(sec));
