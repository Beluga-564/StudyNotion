import React from 'react'
import logo from '../../../assets/Logo/Logo-Full-Light.png'
import {CiFacebook} from "react-icons/ci"
import {AiOutlineGoogle} from "react-icons/ai"
import {PiTwitterLogoDuotone} from "react-icons/pi"
import {AiOutlineYoutube} from "react-icons/ai"
import FooterList from './FooterList'
import {FooterLink2} from '../../../data/footer-links'

function Footer() {
  return (
    <div className='w-full bg-richblack-800 px-20 py-10'>
        <div className='w-full px-10 py-5 flex flex-row gap-20 border-b-2 border-richblack-700'>
            {/* left-part */}
            <div className='flex flex-row gap-12'>
              <div className='flex flex-col gap-2'>
                  <img src={logo} height = "32px" width ="160px"/>
                  <FooterList list = {
                    FooterLink2.find(obj => obj.title === 'Company')
                  }/>
                  <div className='flex flex-row gap-3 text-xl cursor-pointer'>
                    <CiFacebook className='text-richblack-100'/>
                    <AiOutlineGoogle className='text-richblack-100'/>
                    <PiTwitterLogoDuotone className='text-richblack-100'/>
                    <AiOutlineYoutube className='text-richblack-100'/>
                  </div>
              </div>
              <div className='flex flex-col gap-6'>
                {/* resources */}
                <div>
                  <FooterList list = {
                    FooterLink2.find(obj => obj.title === 'Resources')
                  }/>
                </div>
                {/* support */}
                <div>
                  <FooterList list = {
                      FooterLink2.find(obj => obj.title === 'Support')
                  }/>
                </div>
              </div>
              <div className='flex flex-col gap-6 pr-10'>
                {/* Plans */}
                <div>
                  <FooterList list = {
                      FooterLink2.find(obj => obj.title === 'Plans')
                  }/>
                </div>
                {/* Community */}
                <div>
                  <FooterList list = {
                      FooterLink2.find(obj => obj.title === 'Community')
                  }/>
                </div>
              </div>
            </div>
            {/* right-part */}
            <div className='flex flex-row gap-10 pl-10 border-l-2 border-richblack-700'>
                {/* subject */}
                <div>
                  <FooterList list = {
                        FooterLink2.find(obj => obj.title === 'Subjects')
                  }/>
                </div>
                {/* Languages */}
                <div className='pl-10'>
                  <FooterList list = {
                        FooterLink2.find(obj => obj.title === 'Languages')
                  }/>
                </div>
                {/* Career Building */}
                <div className='pl-10'>
                  <FooterList list = {
                        FooterLink2.find(obj => obj.title === 'Career building')
                  }/>
                </div>
            </div>
      </div>
      <div className='flex flex-row gap-5 pt-4 text-richblack-300 text-sm font-semibold'>
        <div>Privacy Policy</div>
        <div className='border-l-2 pl-1'>Cookie Policy</div>
        <div className='border-l-2 pl-1'>Terms</div>
      </div>
    </div>
  )
}

export default Footer