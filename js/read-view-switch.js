(() => {
  'use strict'

  const KEY = 'article-theme'
  const get = () => localStorage.getItem(KEY)
  const set = t => localStorage.setItem(KEY, t)
  const preferred = () => get() || 'manual'

  const apply = theme => {
    document.querySelectorAll('.css-manual').forEach(l => {
      l.disabled = (theme !== 'manual')
    })
    document.querySelectorAll('.css-bs5').forEach(l => {
      l.disabled = (theme !== 'bs5')
    })
    const manualList = document.querySelector('.list-manual')
    const bs5List = document.querySelector('.list-bs5')
    if (manualList) manualList.classList.toggle('d-none', theme !== 'manual')
    if (bs5List)    bs5List.classList.toggle('d-none', theme !== 'bs5')
  }

  apply(preferred())

  window.addEventListener('DOMContentLoaded', () => {
    apply(preferred())
    document.querySelectorAll('[data-article-theme-value]').forEach(btn => {
      btn.addEventListener('click', () => {
        const t = btn.getAttribute('data-article-theme-value')
        set(t)
        apply(t)
      })
    })
  })
})()
