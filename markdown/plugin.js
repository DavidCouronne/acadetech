import MarkdownIt from 'markdown-it'
import MarkdownPrism from 'markdown-it-prism'
import emoji from 'markdown-it-emoji'
import subscript from 'markdown-it-sub'
import superscript from 'markdown-it-sup'
import footnote from 'markdown-it-footnote'
import deflist from 'markdown-it-deflist'
import abbreviation from 'markdown-it-abbr'
import insert from 'markdown-it-ins'
import mark from 'markdown-it-mark'
import toc from 'markdown-it-toc-and-anchor'
import katex from 'markdown-it-katex-newcommand'
import tasklists from 'markdown-it-task-lists'
import container from 'markdown-it-container'
import prism from 'markdown-it-prism'
import preWrapper from '@mathssyfy/markdown-it-prewrapper'
import anchorPlugin from 'markdown-it-anchor'
import tocPlugin from 'markdown-it-table-of-contents'

export default ({ app }, inject) => {
const md = new MarkdownIt()
.use(katex, { "throwOnError": false, "errorColor": " #cc0000" })

inject('md', md)
}
