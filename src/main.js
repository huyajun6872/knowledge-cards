import './style.css'
import { cards, categories } from './data.js'

let currentCategory = 'animal'
let currentIndex = 0
let filteredCards = []

function init() {
  renderTabs()
  filterAndRender()
}

function renderTabs() {
  let h = ''
  for (let i = 0; i < categories.length; i++) {
    const c = categories[i]
    const active = c.key === currentCategory ? ' active' : ''
    h += `<button class="tab ${c.tabClass}${active}" data-cat="${c.key}">${c.label}</button>`
  }
  document.getElementById('tabs').innerHTML = h
  document.querySelectorAll('#tabs .tab').forEach((btn) => {
    btn.addEventListener('click', () => switchCategory(btn.dataset.cat))
  })
}

function switchCategory(cat) {
  currentCategory = cat
  currentIndex = 0
  renderTabs()
  filterAndRender()
}

function filterAndRender() {
  filteredCards = cards.filter((card) => card.category === currentCategory)
  renderCard()
  renderDots()
  updateControls()
}

function renderCard() {
  let h = ''
  for (let i = 0; i < filteredCards.length; i++) {
    const card = filteredCards[i]
    const cls =
      i === currentIndex
        ? 'active'
        : i < currentIndex
          ? 'hidden-left'
          : 'hidden-right'
    h += `<div class="card card-${card.category} ${cls}">`
    h += `<span class="card-tag tag-${card.category}">${card.categoryName}</span>`
    h += `<div class="card-emoji">${card.emoji}</div>`
    h += `<div class="card-title">${card.title}</div>`
    h += `<div class="card-question">${card.question}</div>`
    h += `<div class="card-answer">${card.answer}</div>`
    h += `<button class="btn-read" data-index="${i}">🔊 读一读</button>`
    h += `<div class="card-number">${card.number} / ${cards.length}</div>`
    h += `</div>`
  }
  document.getElementById('cardContainer').innerHTML = h
}

function renderDots() {
  let h = ''
  for (let i = 0; i < filteredCards.length; i++) {
    const active = i === currentIndex ? ` active ${filteredCards[i].category}` : ''
    h += `<span class="dot${active}"></span>`
  }
  document.getElementById('dots').innerHTML = h
}

function updateControls() {
  document.getElementById('prevBtn').disabled = currentIndex === 0
  document.getElementById('nextBtn').disabled =
    currentIndex === filteredCards.length - 1
  document.getElementById('pageInfo').textContent =
    `${currentIndex + 1} / ${filteredCards.length}`
}

function prev() {
  if (currentIndex > 0) {
    currentIndex--
    renderCard()
    renderDots()
    updateControls()
  }
}

function next() {
  if (currentIndex < filteredCards.length - 1) {
    currentIndex++
    renderCard()
    renderDots()
    updateControls()
  }
}

document.addEventListener('keydown', (e) => {
  if (e.key === 'ArrowLeft') prev()
  else if (e.key === 'ArrowRight') next()
})

let touchStartX = 0
document.addEventListener('touchstart', (e) => {
  touchStartX = e.touches[0].clientX
})
document.addEventListener('touchend', (e) => {
  const diff = e.changedTouches[0].clientX - touchStartX
  if (diff > 50) prev()
  else if (diff < -50) next()
})

document.getElementById('prevBtn').addEventListener('click', prev)
document.getElementById('nextBtn').addEventListener('click', next)
document.getElementById('cardContainer').addEventListener('click', (e) => {
  const btn = e.target.closest('.btn-read')
  if (btn) readCard(filteredCards[Number(btn.dataset.index)])
})

// 选择本机最自然的中文嗓音：优先 Apple 的 Ting-Ting / Mei-Jia（Mac 上最自然），
// 其次任意 zh-CN / zh 嗓音，最后退回到默认嗓音。
let preferredVoice = null
function pickVoice() {
  const voices = window.speechSynthesis.getVoices()
  if (!voices.length) return null
  const zh = voices.filter((v) => /zh|cmn|Chinese/i.test(v.lang))
  const ranked = [
    (v) => /Ting-Ting|Mei-Jia|Yu-Shu|Sin-Ji/i.test(v.name),
    (v) => /Google 普通话|Google Chinese/i.test(v.name),
    (v) => /Microsoft.*Chinese|Microsoft.*zh/i.test(v.name),
    (v) => true,
  ]
  for (const pred of ranked) {
    const found = zh.find(pred)
    if (found) return found
  }
  return zh[0] || voices[0]
}
function ensureVoice() {
  if (preferredVoice) return preferredVoice
  preferredVoice = pickVoice()
  return preferredVoice
}

function readCard(card) {
  if (!card) return
  if (!('speechSynthesis' in window)) {
    alert('当前浏览器不支持语音朗读功能 😢')
    return
  }
  window.speechSynthesis.cancel()
  const stripTags = (s) => s.replace(/<[^>]+>/g, '')
  const stripEmoji = (s) =>
    s.replace(/[\u{1F000}-\u{1FAFF}\u{2600}-\u{27BF}\u{2190}-\u{21FF}\u{2B00}-\u{2BFF}\u{FE0F}\u{20E3}\u{1F1E6}-\u{1F1FF}]/gu, '')
  const text = `${card.title}。${card.question} ${stripEmoji(stripTags(card.answer))}`
  const utter = new SpeechSynthesisUtterance(text)
  utter.lang = 'zh-CN'
  utter.rate = 0.9
  utter.pitch = 1.05
  const voice = ensureVoice()
  if (voice) utter.voice = voice
  // 首次列表可能尚未加载完成，加载完再读一次
  if (!voice && 'onvoiceschanged' in window.speechSynthesis) {
    window.speechSynthesis.onvoiceschanged = () => {
      utter.voice = ensureVoice()
      window.speechSynthesis.speak(utter)
    }
    return
  }
  window.speechSynthesis.speak(utter)
}

init()
