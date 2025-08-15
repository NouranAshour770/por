// AOS animations
AOS.init({ duration: 850, once: true });

// Mobile nav toggle
const btn = document.querySelector('.nav-toggle');
const menu = document.querySelector('.nav-menu');
btn?.addEventListener('click', () => {
  menu.classList.toggle('show');
});

// Year in footer
document.getElementById('y').textContent = new Date().getFullYear();
/* ===== Collapsible (Projects) ===== */
document.querySelectorAll('.details-toggle').forEach(btn => {
  btn.addEventListener('click', () => {
    const id = btn.getAttribute('data-target');
    const panel = document.querySelector(id);
    const expanded = btn.getAttribute('aria-expanded') === 'true';

    // قلب الحالة
    btn.setAttribute('aria-expanded', String(!expanded));

    // لو panel عليه hidden شيله أول مرة
    if (panel.hasAttribute('hidden')) panel.removeAttribute('hidden');

    panel.classList.toggle('open', !expanded);

    // غيّر نص الزرار
    btn.innerHTML = `${!expanded ? '<span class="chev">▾</span> Hide details'
                                 : '<span class="chev">▾</span> Show details'}`;
  });
});
/* ===== Projects: Show / Hide details buttons ===== */
document.querySelectorAll('.js-toggle').forEach(btn => {
  btn.addEventListener('click', () => {
    const targetSel = btn.getAttribute('data-target');
    const box = document.querySelector(targetSel);
    if (!box) return;

    const open = box.classList.toggle('is-open');
    const textEl = btn.querySelector('.btn-text');
    if (textEl) textEl.textContent = open ? 'Hide details' : 'Show details';
  });
});
