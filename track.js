(() => {
  const storageKey = 'ckw_public_tips_v1';
  document.querySelector('#track-form').addEventListener('submit', (event) => {
    event.preventDefault();
    const code = document.querySelector('#tracking-code').value.trim().toUpperCase();
    const result = document.querySelector('#track-result');
    const tips = JSON.parse(localStorage.getItem(storageKey) || '[]');
    const tip = tips.find((item) => item.id === code);
    result.hidden = false;
    result.innerHTML = tip ? `<strong>สถานะ: ${tip.status}</strong><p class="muted">หมวดหมู่: ${tip.category} · ส่งเมื่อ ${tip.time}</p><p class="micro">เพื่อรักษาความเป็นส่วนตัว ระบบจะแสดงเฉพาะสถานะ ไม่แสดงข้อความที่ส่ง</p>` : '<strong>ไม่พบรหัสติดตาม</strong><p class="muted">ตรวจสอบตัวอักษรและเครื่องหมายขีดอีกครั้ง</p>';
  });
})();
