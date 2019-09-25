import api from './api'
import { renderQuotes } from './quotes'

const { getShowDetail } = api()

const detailTemplate = ({ id, name, image, summary }) => `
    <div class = "detail-section">
        <header id="${id}">
            <div class="title-section">    
                <h1> ${name} </h1>
            </div>
            <div class="image-container">
                <img src="${image ? image.original : '/src/img/default.jpg'}" />
            </div>
        </header>
        <div class="content">
            ${summary}
        </div>
    <div>
`

const renderDetail = async id => {
  try {
    const selector = document.querySelector('main')
    const show = await getShowDetail(id)
    await renderQuotes(id)
    selector.innerHTML = detailTemplate(show)
  } catch (err) {
    console.error(err.message)
  }
}

export default renderDetail
