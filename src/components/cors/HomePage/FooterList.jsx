import React from 'react'
import { Link } from 'react-router-dom'

function FooterList({list}) {
  return (
    <div className='text-richblack-400'>
      <ul className='gap-2 flex flex-col'>
        <li><h3 className='text-richblack-100 '>{list.title}</h3></li>
        {
          list.links.map((link) => (
            <li>
                <Link to = {link.link}>
                {`${link.title}`}
                </Link>
            </li>
          ))
        }
      </ul>
    </div>
  )
}

export default FooterList