/* eslint-disable no-undef*/
import page from 'page'
import { renderShowsDOM } from './shows'
import { hideFilter, showFilter } from './navbar'
import renderDetail from './detail'
import { hideCommentForm, showCommentForm } from './ui'
import { addQuoteListener } from './quotesForm'
import { renderQuotes } from './quotes'

page('/', () => {
  // eslint-disable-line
  console.log('Home page')
  showFilter()
  hideCommentForm()
  renderShowsDOM()
})
page('/detail/:id', ctx => {
  console.log('Detail')
  const {
    params: { id },
  } = ctx
  console.log(id)
  hideFilter()
  showCommentForm()
  renderDetail(id)
  addQuoteListener(id)
  renderQuotes(id)
})
page()
