import React from 'react'
import { Link } from 'react-router-dom';
const Articles = ({ articles }) => {
  return (
    <>
        {articles.map((article, index)=>(
        <div key={index}  className='p-4 md:w-1/2'>
            <div className='h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden'>
            <Link to={`/article/${article.name}`}>
                <img className='lg:h-48 md:h-36 w-full object-cover object-center' src={article.thumbnail} alt="blog"/>
                </Link>
                <div>
                    <Link key={index} to={`/article/${article.name}`}>
                        <h3 className='text-lg font-medium text-gray-900 mb-3 mt-3 text-center'>{article.title}</h3>
                    </Link>
                    <p className='leading-relaxed mb-3'>
                        {article.content[0].substring(0,110)}...
                    </p>
                    <div className='flex item-centerflex-wrap'>
                        <Link className='bg-green-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none text-centerfocus:shadow-outline' to={`/article/${article.name}`}>Read more</Link>
                    </div>
                </div>
            </div>
        </div>
    ))}
    </>
  )
}

export default Articles