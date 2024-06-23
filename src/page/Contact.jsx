import React from 'react'
import { contacts } from '../constant/contact'

const Contact = () => {
  return (
    <section className="text-white h-screen max-lg:mx-10">
      <div className="h-full max-container flex flex-col justify-center gap-7 flex-wrap">
        <div className="flex flex-col gap-2">
          <h3 className="text-white italic text-4xl">Contact me</h3>
          <p className="text-coral-red italic">Let's work together</p>
          <p className="text-slate-gray italic">I will help you in your next project. Contact me through details given below.</p>
        </div>
        <div className="italic text-slate-300">
          <p className="mt-2">Nandawon quarter, Nyaung Shwe Township</p>
          <p className="mt-2">kyalkhantsin@gmail.com</p>
          <p className="mt-2">+959 792 380 380</p>
          <button className="mt-2 px-5 py-3 bg-coral-red rounded-lg">Let's chat</button>
        </div>

        <div className="flex gap-3 mt-8">
          {
            contacts.map( (contact, index) => {
              return (
                <a key={index} href={contact.link} target='_blank'>
                  <img src={contact.imgURL} width={30} height={30} className="object-contain bg-white rounded-md"></img>
                </a>
              );
            })
          }
        </div>
      </div>
    </section>
  )
}

export default Contact