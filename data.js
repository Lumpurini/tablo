// Живі дані табло Lumpurini з бази. Якщо база не відповіла, підвантажується приклад data.sample.js.
// window.LUMPURINI_SOURCE: 'db' — дані з бази, 'sample' — приклад.
(function () {
  var API = 'https://uenhibrpjssbbewbwdoy.supabase.co/rest/v1/rpc/tablo_data';
  var KEY = 'sb_publishable_9I_7JlSOJ67bfE-HgQh5yg_3px6bAft';
  function sample() { window.LUMPURINI_SOURCE = 'sample'; var s = document.createElement('script'); s.src = './data.sample.js'; document.head.appendChild(s); }
  fetch(API, { method: 'POST', headers: { 'apikey': KEY, 'Content-Type': 'application/json' }, body: JSON.stringify({ p_password: '' }) })
    .then(function (r) { return r.json(); })
    .then(function (b) { if (b && b.meta) { window.LUMPURINI_SOURCE = 'db'; window.LUMPURINI_DATA = b; } else { sample(); } })
    .catch(sample);
})();
