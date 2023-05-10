

import pipeline from '../public/pipeline.svg'

import gh from '../public/gh.png'
import Image from 'next/image'

export default function Projects() {
    return (
      <div className="">
          <div className=" mx-auto w-1/2">
              <div className='pt-4 border-t border-b border-2'>
                <div className='flex'>
              <a href=''><h2 className="font-bold text-3xl text-blue hover:underline pb-2 "  >dds3tosf</h2> </a>
              <Image src={gh}/>
              </div>  
              <div className='border border-blue border-2'><Image src={pipeline}/></div>
              <h3>Python , AWS S3 , Snowflake,</h3>
              <p>A manual step-by-step data pipeline that extracts data files from a s3 bucket, transforms the data using pandas, and loads it into a snowflake table.  Click on the title for an in-depth
                READ.ME.
                 </p>

              </div>

            </div>                  

        
        </div>
    )
  }