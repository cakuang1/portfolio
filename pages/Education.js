
import Image from "next/image"
import logo from '../public/logo.png'

export default function Education() {
    return (
      <div className="bg-100 h-screen bg-gray-600 text-blue">
        <div className="header pt-12 flex justify-center">
          <h1 className="font-bold text-3xl">Education</h1>

        </div>
        <div className="Logo flex justify-center">
          <div className="logo">
              <Image src={logo} width={300}/>
          </div>
          <div className="ml-5 text-xl font-bold pt-5">
           <h2>The University of California,Berkeley</h2>
           <h3 className="mt-2">Major : Data Science </h3>
           <p>Emphasis : Mathmatical Modeling</p>
          </div>
        </div>
        <div className="space-y-1">
          <div className="flex justify-center"> 
          <h1 className="font-bold text-xl">Relevant Coursework</h1>
          </div>
        <div className="flex">
        <div className="cs font-bold">
          <h2 className="underline">Computer Science Courses</h2>
          <ul className="">
            <li className="" >Structure and Interpretation of Computer Programs (CS 61A)</li>
            <li className="">Data Structures (CS 61B)</li>
            <li>Designing Information Devices and Systems (EECS 16A)</li>
            <li>Discrete Mathematics and Probability Theory (CS 70)</li>
            <li>Efficient Algorithms and Intractable Problems (CS 170)</li>
            <li>Introduction to Algorithmic Thinking (CS 198)</li>
          </ul>
          <div></div>
          </div>
        <div className="ds font-bold"> <h2 className="underline">Data Science Courses</h2>
        <ul>
          <li>Foundations of Data Science (DATA 8)</li>
          <li>Linear Algebra for Data Science(STAT 89A)</li>
          <li>Principles and Techniques of Data Science (Data 100)</li>
          <li>Data Engineering (Data 101)</li>
          <li>Data, Inference, and Decisions(Data C102)</li>
          <li>Human Contexts and Ethics of Data (Data C104)</li>
          <li>Probability for Data Science(DATA 140)</li>
          </ul></div>
        </div>
        <div className=""><h1>Mathematics</h1>
        <ul>
          <li>Calculus II (MATH1B)</li>
          <li>Multivariable Calculus (MATH53)</li>
          <li>Linear Algebra and Differential Equations (Math 54)</li>
          <li> Theory and Proof based Linear Algebra(Math 110)</li>
          <li> Theory and Proof based Linear Algebra(INDENG 160)</li>
          </ul></div>
  
      </div>
      </div>
    )
  }