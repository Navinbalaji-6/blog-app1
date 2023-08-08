import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className='mb-20'>
        <h1 className='sm:text-4xl text-2xl font-bold my-6 text-gray-900 text-center'>Welcome to my blog</h1>
        <p className='mx-auto leading-relaxed text-base mb-4'>Welcome to my blog! I am excited to share my thoughts, experiences, and insights with you through this platform. Whether you are a fellow enthusiast in the topics I cover or simply curious about what I have to say, I hope you find value and inspiration in the content I share. This blog serves as a space where I can express my ideas, engage in meaningful discussions, and connect with like-minded individuals. I believe that sharing knowledge and experiences is a powerful way to foster growth, encourage learning, and create a sense of community.
        </p>
        <p className='mx-auto leading-relaxed text-base mb-4'>As you explore my blog, you will find a diverse range of topics that reflect my passions and interests. From technology and innovation to personal development and lifestyle, I aim to provide thought-provoking and informative content that resonates with readers. I strive to create engaging and well-researched articles, covering both trending and evergreen subjects. Through storytelling and practical insights, my goal is to not only inform but also inspire and empower my readers to navigate their own journeys with a renewed sense of curiosity and enthusiasm.
        </p>
        <p className='mx-auto leading-relaxed text-base mb-4'>I encourage you to actively engage with the content on this blog by leaving comments and sharing your perspectives. Your input and contributions are highly valued, as they enhance the richness of the blog and foster a sense of community. I believe in the power of collective wisdom, and I am eager to learn from your unique experiences and perspectives. Together, let's create a positive and inclusive space where we can learn, grow, and connect. Thank you for visiting my blog, and I hope you enjoy the articles and find inspiration within these virtual pages.</p>
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"><Link to="/articles-list">Let's Explore</Link></button>    
    </div>
  )
}

export default Home