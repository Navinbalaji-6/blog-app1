import React from 'react'
import { Link } from 'react-router-dom'

const About = () => {
  return (
    <div className='mb-20'>
        <h1 className='sm:text-4xl text-2xl font-bold my-6 text-gray-900'>About</h1>
        <p className='mx-auto leading-relaxed text-base mb-4'>Welcome to the About page! Here, I want to take a moment to introduce myself and provide some insights into the purpose and vision behind this blog. My name is Navin Balaji, and I am passionate about Application development. With this blog, I aim to create a platform where I can share my knowledge, experiences, and thoughts with a wider audience. Through well-researched articles, personal anecdotes, and practical insights, I strive to provide valuable content that informs, inspires, and empowers readers. My ultimate goal is to contribute to the collective growth and learning of the online community.
        </p>
        <p className='mx-auto leading-relaxed text-base mb-4'>Throughout my journey, I have gained expertise in various areas such as developing applications especially web-applications. These experiences have shaped my perspectives and ignited a desire to share my insights with others. I strongly believe in the power of lifelong learning and continuous personal development. Therefore, this blog serves as a medium for me to document my ongoing learning process and share it with you. I hope to create a space that encourages curiosity, exploration, and intellectual engagement.
        </p>
        <p className='mx-auto leading-relaxed text-base mb-4'>Beyond providing informative content, I also aspire to foster a sense of community through this blog. I invite you to actively participate by leaving comments, asking questions, and sharing your own experiences and perspectives. Together, we can create a vibrant and supportive community where ideas can be exchanged and valuable connections can be made. I am grateful for your presence here and appreciate your engagement. Thank you for joining me on this journey of exploration, growth, and shared learning.</p>
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"><Link to="/articles-list">Let's Explore</Link></button>
    </div>
  )
}

export default About