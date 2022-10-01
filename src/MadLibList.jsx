import React from 'react';
import { useQuery } from 'react-query';
import { Link } from 'react-router-dom';
import { client, urlFor } from '../src/lib/client';
// import styles from './App.css'

const query = `
  *[ _type == 'madLib' ] { title, image, slug }
`;
function MadLibList() {
    // in this one line, data is fetched from sanity via the sanity client and
    // stored into application state via react-query!
    const { data: madLibs } = useQuery('madLibsList', () => client.fetch(query));
  
    // if we don't have madLibs yet, then the data must be loading
    if (!madLibs) {
      return <h1>Loading…</h1>;
    }
  
    return (
      <>
      <div className='flex flex-col items-center '>

      <h1 className='mb-10'>Mad Libs</h1>
  
  <ul className='flex flex-col items-center w-full text-center space-y-20 bg-yellow-200 ' >
    {/* loop through all of the mabLib and show them in a list */}
    {madLibs.map(({ title, slug, image }) => (
      <li key={slug.current} className='bg-red-200'>
        {/* ;ink comes from react-router and it powers navigation on the */}
        {/* site. here we use sanity slugs to create unique URLs. */}
        <Link  to={`/mad-libs/${slug.current}`}>
          <img
            alt={title}
            // use the sanity `imageUrlBuilder` to
            // generate optimized images on the fly
            src={urlFor(image)}
            width="250px"
            height="250px"
          />
        </Link>
        <h2 >{title}</h2>
      </li>
    ))}
  </ul>
      </div>
        
      </>
    );
  }
  
  export default MadLibList;



