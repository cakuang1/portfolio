import Education from "./Education"
import Projects from "./project"


export default function Home() {
  return (
    <>
<div className="bg-gray-200  text-center h-screen pt-56">
    <div className="">
    <h1 className="Name text-gray-black text-4xl font-bold">Cary Kuang</h1>
    <div className="">
        <div className="mt-5 ">
          <p className="text-xl mb-5">I am first generation college student studying Data Science </p>
          <div className="flex justify-center ">
            <div className="mr-14">
              <h2 className="font-bold text-2xl">Interests</h2>
              <ul>
              <li>Data Analytics/Science</li>
              <li>Data Processing/Engineering</li>
              <li>Cloud Computing</li>
              <li>Parallel & Distributed Systems</li>
              </ul>
            </div>
            <div>
            <h2 className="font-bold text-2xl">Education</h2>
            <p className="mt-5">The University of California,Berkeley (2019-2023)</p>
            </div>
          </div>
        </div>
    </div>
    </div>
    <div className="flex justify-center font-bold text-lg mt-20">
    I'm a simple man making his way through the galaxy
    </div>
    </div>
    <Education/>
    <Projects/>
    
    </>

  )
}