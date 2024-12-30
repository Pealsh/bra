// ハンバーガーメニューの制御
const hamburger = document.getElementById('hamburger');
const navMenu = document.getElementById('navMenu');

hamburger.addEventListener('click', () => {
  navMenu.querySelector('ul').classList.toggle('active');
});

// ページ内リンククリック時（SP）にメニューを閉じる
const navLinks = navMenu.querySelectorAll('a');
navLinks.forEach(link => {
  link.addEventListener('click', () => {
    navMenu.querySelector('ul').classList.remove('active');
  });
});

document.addEventListener('DOMContentLoaded', () => {
    // マップを表示 (拡大縮小無効化)
    const map = L.map('map', {
      center: [43.0552, 141.3453], // 緯度・経度（札幌市）
      zoom: 15,                   // 初期ズームレベル
      zoomControl: false,         // 拡大縮小コントロールを非表示
      scrollWheelZoom: false,     // スクロールホイールによるズームを無効化
      doubleClickZoom: false,     // ダブルクリックによるズームを無効化
      dragging: true              // 地図のドラッグは有効
    });
  
    // OpenStreetMap タイルを追加
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map);
  
    // マーカーを追加
    L.marker([43.0552, 141.3453])
      .addTo(map)
      .bindPopup('<b>パブ アパッチ</b><br>〒064-0805 北海道札幌市中央区南５条西５丁目２０')
      .openPopup();
  });
