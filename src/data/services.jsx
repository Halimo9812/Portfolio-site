import {MdWeb} from 'react-icons/md';
import {FaHandHoldingHeart} from 'react-icons/fa';


const services = [
    {
       title: 'Frontend Developer',
       icon: <MdWeb className='w-full h-full'></MdWeb>,
       description: 'For front-end I use HTML,CSS, and Javascript. Frameworks I use are React and Tailwind CSS'
       ,
       
    },

    {
        title: 'Backend Developer',
        icon: <MdWeb className='w-full h-full'></MdWeb>,
        description: 'For back-end, I use MERN stack, MongoDB, Express, and Node',
        
     },
    {
        title: 'Ui Design',
        icon: <FaHandHoldingHeart className='w-full h-full'></FaHandHoldingHeart>,
        description: 'I use Figma and Webflow for creating wireframes.',
        
     }
 ];

 export default services;
