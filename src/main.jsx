import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from './App'
import logoPng from './assets/zeileet logo.png'
import './index.css'

function applyRoundedFavicon() {
  const img = new Image()
  img.src = logoPng

  img.onload = () => {
    const size = 96
    const canvas = document.createElement('canvas')
    const context = canvas.getContext('2d')

    if (!context) {
      return
    }

    canvas.width = size
    canvas.height = size

    const radius = size / 2
    context.beginPath()
    context.arc(radius, radius, radius, 0, Math.PI * 2)
    context.closePath()
    context.clip()

    // Cover the circle area while preserving logo aspect ratio.
    const scale = Math.max(size / img.width, size / img.height)
    const drawWidth = img.width * scale
    const drawHeight = img.height * scale
    const offsetX = (size - drawWidth) / 2
    const offsetY = (size - drawHeight) / 2
    context.drawImage(img, offsetX, offsetY, drawWidth, drawHeight)

    const link =
      document.querySelector('link[rel="icon"]') || document.createElement('link')
    link.setAttribute('rel', 'icon')
    link.setAttribute('type', 'image/png')
    link.setAttribute('href', canvas.toDataURL('image/png'))
    document.head.appendChild(link)
  }
}

applyRoundedFavicon()

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>,
)
