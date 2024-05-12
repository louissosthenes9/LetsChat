import React from 'react'
import SearchInput from './SearchInput'
export default function SideBar() {
  return (
    <div>
        <SearchInput />
        <div className='divider px-3 aria-hidden:true'></div>
    </div>
  )
}
