import React from 'react';
import './App.css'
import image from './pexels-photo-1193942.jpeg';
import image1 from './pexels-photo-1468379.jpeg';
import image2 from './pexels-photo-1580271.jpeg';
import image3 from './photo-1543610892-0b1f7e6d8ac1.jpeg';
import image4 from './photo-1494790108377-be9c29b29330.jpeg';
import image5 from './photo-1544005313-94ddf0286df2.avif';
import image6 from './photo-1438761681033-6461ffad8d80.jpeg';
import image7 from './photo-1532074205216-d0e1f4b87368.jpeg';
import image8 from './photo-1534528741775-53994a69daeb.jpeg';
import image9 from './photo-1544005313-94ddf0286df2.avif';
import image10 from './photo-1544005313-94ddf0286df2.avif';
import image11 from './dicky-jiang-WDdxcnkKQCw-unsplash.jpg';
import image12 from './photo-1572224384995-f9529873f379.avif';
import image13 from './pexels-fotorobot-339379.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';
function App() {
  return (
    <div className="app">
      <div className="h-screen">
        <div className='grid grid-cols-6 grid-cols-6 grid-rows-6 gap-1 h-[600px] w-[1100px] mx-auto mt-6'>
        <div className='bg-white rounded-lg col-span-3 row-span-2'>
          <div className="images-container relative">
         <div className='w-[5rem] h-[5rem] bg-white px-2 ml-[25rem] rotate-[60deg] absolute top-[70px] z-[100] left-8'>
          <img src = {image} alt="images" className='h-[4rem] w-[4rem] object-cover rounded-sm'/></div>.

         <div className='w-[5rem] h-[5rem] bg-white px-2 ml-[25rem] rotate-[20deg] absolute top-[30px] z-[80] left-2'>
          <img src = {image1} alt="images" className='h-[4rem] w-[4rem] object-cover rounded-sm'/></div>.

          <div className='w-[5rem] h-[5rem] bg-white px-2 ml-[25rem] rotate-[5deg] absolute top-[70px] z-[90] -left-8'>
          <img src = {image2} alt="images" className='h-[4rem] w-[4rem] object-cover rounded-sm'/></div>.

          <div className='w-[5rem] h-[5rem] bg-white px-2 ml-[25rem] -rotate-[20deg] absolute top-[22px] z-[70] -left-[67px]'>
          <img src = {image3} alt="images" className='h-[4rem] w-[4rem] object-cover rounded-sm'/></div>.

          <div className='w-[5rem] h-[5rem] bg-white px-2 ml-[25rem] -rotate-[30deg] absolute top-[70px] z-[60] -left-[100px]'>
          <img src = {image4} alt="images" className='h-[4rem] w-[4rem] object-cover rounded-sm'/></div>.
          </div>
          <div className="pt-[80px] pl-4">
          <div className=" text-3xl font-bold">9 659<sup>+</sup></div>
           <p className='font-thin'>Photo taken, each telling a unique story</p>
          </div>
        </div>


        <div className='bg-black rounded-lg col-span-3 row-span-2'>
          <div className="grid grid-cols-5 gap-[0.2rem]">
            <div><img src={image} alt="" className= 'h-[6rem] w-[6.57em] object-cover  brightness-50 rounded-lg'  /></div>
            <div><img src={image1} alt="" className='h-[6rem] w-[6.57rem] object-cover brightness-50 rounded-lg' /></div>
            <div><img src={image2} alt="" className='h-[6rem] w-[6.57rem] object-cover brightness-50 rounded-lg' /></div>
            <div><img src={image3} alt="" className='h-[6rem] w-[6.57rem] object-cover brightness-50 rounded-lg' /></div>
            <div><img src={image4} alt="" className='h-[6rem] w-[6.57rem] object-cover brightness-50 rounded-lg' /></div>
            <div><img src={image5} alt="" className= 'h-[6rem] w-[6.57em] object-cover brightness-50  rounded-lg' /></div>
            <div><img src={image6} alt="" className='h-[6rem] w-[6.57rem] object-cover brightness-50 rounded-lg' /></div>
            <div><img src={image7} alt="" className='h-[6rem] w-[6.57rem] object-cover brightness-50 rounded-lg' /></div>
            <div><img src={image8} alt="" className='h-[6rem] w-[6.57rem] object-cover brightness-50 rounded-lg' /></div>
            <div><img src={image9} alt="" className='h-[6rem] w-[6.57rem] object-cover brightness-50 rounded-lg' /></div>
          </div>
          <div className='text-white -translate-y-[60px] relative pl-2'>Enjoy a smooth and well organized photoshoot allowing you to create
             memories while i handle the rest</div>
        </div>


        <div className='bg-white-800 rounded-lg row-span-3 col-span-2'>
         <div>
          <img src={image10} alt=""  className='rounded-lg h-[18.5rem] w-[24rem] object-cover'/>
          <div className='-translate-y-[290px] translate-x-[330px] text-xl text-white'><FontAwesomeIcon icon={faInstagram} /></div>
         <div className="relative -mt-[60px] text-white ml-3 text-xs font-bold">Check out my instagram</div>
     
         </div>
        </div>

        <div className='bg-white-800 rounded-lg row-span-2 col-span-2'>
        <div className='relative'><img src={image6} alt="" className='h-[195px] rounded-lg w-[363px] object-cover ' />
        <div className='text-white -translate-y-[70px] text-center px-10'>Enjoy high-resolution photo that capture every details and emotion beautifully</div>
        </div>
       
        </div>

        <div className='bg-white-800 rounded-lg'>
          <div className='text-center pt-2'>
          <h1 className='text-2xl font-bold'>30%</h1>
          <p className="text-sm px-4">Client book another session for the year</p>
          </div>
        </div>

        <div className='bg-white-800 rounded-lg'>
          <div ><img src={image11} alt='' className='h-[95px] rounded-xl w-[185px]' />
          <div className='relative text-white -translate-y-[87px] text-center font-light opacity-50'>Taken with precision</div>
          </div>
        </div>

        <div className='bg-white-800 rounded-lg col-span-2 row-span-2'>
          <div>
            <div className='text-center text-xs font-light'>Today 12:20</div>
            <div className="text-left border border-gray-200 bg-gray-200 rounded-2xl h-[30px] text-sm pt-1 pl-1 w-[245px] mt-3">What if i look awkward in the pictures?</div>

            <div className='text-center text-xs mt-4 font-light'>Today 12:20</div>

            <div className="text-center border border-gray-200 bg-green-500 rounded-2xl h-[30px] text-sm pt-1 px-1 w-fit mt-2 ml-[155px]">Many people feel that way first</div>
            <div className="text-center border border-gray-200 bg-green-500 rounded-2xl h-[30px] text-sm pt-1 px-1 w-fit mt-[0.5px] ml-[175px]">Well,i will do some test shot</div>
            <div className="text-left border border-gray-200 bg-gray-200 rounded-2xl h-[30px] text-sm pt-1 px-1 w-fit mt-1">Okay thanks</div>
          </div>
        </div>

        <div className='bg-white-800 rounded-lg col-span-2 row-span-2'>
          <div><img src = {image13} alt="" className='h-[196px] w-[364px] rounded-xl object-cover'/></div>
        </div>
        <div className='bg-white-800 rounded-lg row-span-2 col-span-2'>
          <div className="flex justify-between mt-[30px]">
            <div className="font-bold text-4xl">100<sup>+</sup></div>
            <div className="number">satisfied <div className='block'>client</div></div>
            <div className="number">
              <div className='flex '>
              <img src={image1}alt="" className='rounded-full w-[30px] h-[30px] border-4 -ml-[15px]  z-5' />
              <img src={image5}alt="" className='rounded-full w-[30px] h-[30px] border-4 -ml-[15px] z-4'  />
              <img src={image8}alt="" className='rounded-full w-[30px] h-[30px] border-4 -ml-[15px] z-3'  />
              <img src={image}alt=""  className='rounded-full w-[30px] h-[30px] border-4 -ml-[15px] z-2' />
              <img src={image7}alt="" className='rounded-full w-[30px] h-[30px] border-4 -ml-[15px]  z-1'  />
              </div>
            </div>
          </div>
        </div>
        <div className='bg-white-800 rounded-lg col-span-2'>
        <div><img src = {image12} alt="" className='h-[98px] w-[364px] rounded-xl object-cover'/>
        <div className='relative -translate-y-[100px] text-white'>
          <h1 className='text-2xl font-bold'>Turn around time</h1>
          <div>Edited photo delivered in seven days</div>
        </div>
        </div>

        </div>
        </div>
      </div>
    </div>
  )
  }

export default App;