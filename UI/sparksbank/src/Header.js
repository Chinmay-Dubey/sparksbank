import React from 'react'

const Header = ({title}) => {
  return (
    <header>
      <h1>{title}</h1>
      <div className='search-bar'>
        <form>
          <input typeof='text' placeholder='search...' id="query"></input>
        </form>
      </div>
      <div className="header-bg" />
    </header>
  )
}

export default Header
