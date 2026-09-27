/* Adds public-tip handoff to the staff prototype. Production must use an authenticated API, not browser storage. */
(function () {
  const key = 'ckw_public_tips_v1';
  try {
    const publicTips = JSON.parse(localStorage.getItem(key) || '[]');
    publicTips.slice().reverse().forEach((tip) => {
      if (!state.tips.some((item) => item.id === tip.id)) state.tips.unshift(tip);
    });
  } catch (_) { /* Ignore invalid demo storage. */ }
  const loginBox = document.querySelector('.login-box');
  if (loginBox && !document.querySelector('.public-entry')) {
    const entry = document.createElement('p');
    entry.className = 'micro public-entry';
    entry.innerHTML = 'ต้องการแจ้งเบาะแส? <a href="report.html">ส่งเบาะแสแบบไม่ระบุตัวตน</a> · <a href="track.html">ติดตามด้วยรหัส</a>';
    loginBox.append(entry);
  }
})();
