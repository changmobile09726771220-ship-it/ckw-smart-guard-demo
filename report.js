(() => {
  const storageKey = 'ckw_public_tips_v1';
  const code = () => `TIP-${Math.random().toString(36).slice(2, 6).toUpperCase()}`;
  document.querySelector('#public-tip-form').addEventListener('submit', (event) => {
    event.preventDefault();
    const text = document.querySelector('#tip-text').value.trim();
    if (!text) return;
    const id = code();
    const tip = { id, category: document.querySelector('#tip-category').value, urgency: document.querySelector('#tip-urgency').value, text, status: 'ใหม่', time: new Date().toLocaleString('th-TH') };
    const tips = JSON.parse(localStorage.getItem(storageKey) || '[]');
    tips.unshift(tip); localStorage.setItem(storageKey, JSON.stringify(tips));
    document.querySelector('.login-box').innerHTML = `<div class="brand"><span class="brand-mark">⌂</span>CKW SMART GUARD</div><h1>รับเบาะแสแล้ว</h1><p class="subtitle">โปรดเก็บรหัสติดตามนี้ไว้เพื่อดูสถานะภายหลัง</p><p style="font-size:28px;font-weight:750;color:#087653">${id}</p><div class="notice">ระบบเจ้าหน้าที่ต้องตรวจสอบข้อมูลก่อนดำเนินการทุกครั้ง</div><p class="micro"><a href="track.html">ติดตามสถานะ</a> · <a href="report.html">ส่งเบาะแสอื่น</a></p>`;
  });
})();
