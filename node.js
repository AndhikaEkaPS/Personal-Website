document.querySelectorAll('[data-i18n-alt]').forEach(n=>{
  const key=n.getAttribute('data-i18n-alt'); const t=(i18n[lang]||i18n.id)[key];
  if (t) n.setAttribute('alt', t);
});
document.querySelectorAll('[data-i18n-title]').forEach(n=>{
  const key=n.getAttribute('data-i18n-title'); const t=(i18n[lang]||i18n.id)[key];
  if (t) n.setAttribute('title', t);
});