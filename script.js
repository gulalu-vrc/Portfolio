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
// --- サイドバーのモバイル開閉制御 ---
const menuToggle = document.getElementById('menu-toggle');
const sidebar = document.querySelector('.sidebar');
const sidebarLinksMobile = document.querySelectorAll('.sidebar-link');
if (menuToggle && sidebar) {
  // ボタンクリックでトグル
  menuToggle.addEventListener('click', () => {
    sidebar.classList.toggle('open');
    // アイコンの切り替え（menu -> x）
    const icon = menuToggle.querySelector('i');
    if (sidebar.classList.contains('open')) {
      icon.setAttribute('data-feather', 'x');
    } else {
      icon.setAttribute('data-feather', 'menu');
    }

    feather.replace(); // featherアイコンを再描画
  });

  // リンククリック時にサイドバーを閉じる（モバイル用）
  sidebarLinksMobile.forEach(link => {
    link.addEventListener('click', () => {
      if (window.innerWidth <= 1050) {
        sidebar.classList.remove('open');
        const icon = menuToggle.querySelector('i');
        icon.setAttribute('data-feather', 'menu');
        feather.replace();
      }

    });

  });

}

// --- Image Modal Logic ---
const modal = document.getElementById('image-modal');
const modalImg = document.getElementById('modal-img');
const captionText = document.getElementById('modal-caption');

// 拡大対象とするセレクタのリスト
const zoomableSelectors = '.spec-image-item, .lime-column img, .zoomable';
const zoomableElements = document.querySelectorAll(zoomableSelectors);

if (modal && modalImg && captionText) {
  zoomableElements.forEach(el => {
    el.addEventListener('click', function () {
      let src = "";
      let alt = "";

      if (this.tagName.toLowerCase() === 'img') {
        src = this.src;
        alt = this.alt;
      } else {
        const img = this.querySelector('img');
        if (img) {
          src = img.src;
          alt = img.alt;
        } else {
          // 背景画像からURLを抽出
          const bg = window.getComputedStyle(this).backgroundImage;
          if (bg && bg !== 'none') {
            src = bg.slice(4, -1).replace(/"/g, "");
          }
        }
      }

      if (src) {
        modal.style.display = "block";
        modalImg.src = src;
        captionText.innerHTML = alt || "";
        document.body.style.overflow = 'hidden';
      }
    });
  });

  const closeModal = () => {
    modal.style.display = "none";
    document.body.style.overflow = 'auto'; // 背景スクロールを再開
  };

  // モーダルの背景または閉じボタンクリックで閉じる
  modal.addEventListener('click', (e) => {
    if (e.target === modal || e.target.classList.contains('modal-close')) {
      closeModal();
    }
  });

  // ESCキーで閉じる
  document.addEventListener('keydown', (e) => {
    if (e.key === "Escape" && modal.style.display === "block") {
      closeModal();
    }
  });
}

