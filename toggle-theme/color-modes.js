(() => {
  'use strict'

  const getStoredTheme = () => localStorage.getItem('theme')
  const setStoredTheme = theme => localStorage.setItem('theme', theme)
  const getPreferredTheme = () => getStoredTheme() || 'light'

  const setTheme = theme => {
    document.documentElement.setAttribute('data-bs-theme', theme)
  }

  const showActiveTheme = (theme) => {
    const activeIcon = document.querySelector('.theme-icon-active')
    const activeBtn = document.querySelector(`[data-bs-theme-value="${theme}"]`)
    if (!activeBtn) return

    document.querySelectorAll('[data-bs-theme-value]').forEach(el => {
      el.classList.remove('active')
      el.setAttribute('aria-pressed', 'false')
    })
    activeBtn.classList.add('active')
    activeBtn.setAttribute('aria-pressed', 'true')

    if (activeIcon) {
      const isDark = theme === 'dark'
      activeIcon.className = `bi ${isDark ? 'bi-moon-fill' : 'bi-sun-fill'} theme-icon-active`
    }
  }

  const theme = getPreferredTheme()
  setTheme(theme)
  showActiveTheme(theme)

  window.addEventListener('DOMContentLoaded', () => {
    showActiveTheme(theme)
    document.querySelectorAll('[data-bs-theme-value]').forEach(toggle => {
      toggle.addEventListener('click', () => {
        const t = toggle.getAttribute('data-bs-theme-value')
        setStoredTheme(t)
        setTheme(t)
        showActiveTheme(t)
      })
    })
  })
})()
