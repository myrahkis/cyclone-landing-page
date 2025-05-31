import { launch } from 'puppeteer'
import { writeFileSync } from 'fs'
import { join } from 'path'
import { fileURLToPath } from 'url'
import { dirname } from 'path'

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

const url = 'http://localhost:5173/' // адрес вашего сайта
const outputPath = join(__dirname, 'pre-rendered.html') // путь к сохранённому HTML

;(async () => {
  const browser = await launch({
    headless: 'new',
    args: ['--no-sandbox'],
  })

  const page = await browser.newPage()

  // Подождать, пока загрузится весь контент (можно адаптировать под нужную стратегию)
  await page.goto(url, { waitUntil: 'networkidle0' })

  // Получить финальный HTML
  const html = await page.content()

  // Сохранить его в файл
  writeFileSync(outputPath, html)

  console.log('HTML сохранён в', outputPath)

  await browser.close()
})()
