
import React from 'react'
import HTMLReactParser from 'html-react-parser'

const HtmlParser = ({ content }) => {
  return (
    <div>{HTMLReactParser(content)}</div>
  )
}


export default HtmlParser;
