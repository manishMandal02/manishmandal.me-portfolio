import { motion } from 'framer-motion';
import { inViewVariants } from '../../src/animations/landingSection';
import SectionHeader from '../UI/SectionHeader';

const About = () => {
  return (
    <div className='ml-20 ms:w-full ms:-ml-1 ms:mt-6'>
      <SectionHeader header='About me' whileInView variants={inViewVariants} />
      <motion.p
        className=' m-0 text-xl ms:text-lg font-medium text-slate-700 tracking-normal mt-8 ms:mt-3'
        variants={inViewVariants}
        initial='initial'
        whileInView='animate'
        viewport={{ once: true }}
      >
        🤵 Manish Mandal &nbsp; <span className='ms:hidden'>&nbsp;</span> 📌 Bangalore, India
      </motion.p>
      <motion.h2
        className='text-xl ms:text-base font-semibold text-slate-700  tracking-wide mt-5 ms:mt-3'
        variants={inViewVariants}
        initial='initial'
        whileInView='animate'
        viewport={{ once: true }}
      >
        <span className='text-xl'>👉 </span>I help people turn ideas into functional and interactive{' '}
        <span className='ms:hidden'>
          <br />
        </span>{' '}
        <span className='ms:hidden'> &nbsp; &nbsp; &nbsp;</span> products.
      </motion.h2>
      <motion.div
        className='w-1 h-44 bottom-0  absolute bg-gradient-to-b from-cyan-500 to-blue-400 '
        variants={inViewVariants}
        initial='initial'
        whileInView='animate'
        viewport={{ once: true }}
      ></motion.div>
      <motion.h3
        className=' text-base leading-6 font-medium  text-gray-700  pt-2 pb-3 px-2 mt-5 ml-2'
        variants={inViewVariants}
        initial='initial'
        whileInView='animate'
        viewport={{ once: true }}
      >
        Self-thought web developer Experienced in using{' '}
        <span className='bg-yellow-300 px-1 rounded-sm'> JavaScript</span>
        <br />
        and its ecosystem, namely <span className='bg-cyan-300 px-1 rounded-sm'> React</span> &{' '}
        <span className='bg-green-300 px-1 rounded-sm'> NodeJs</span> to develop <br /> applications. <br />
        <p className='mt-1'>
          I have spent a significant amount of time developing and
          <br />
          nurturing my skills and always looking for opportunities <br />
          to apply them.
        </p>
      </motion.h3>
    </div>
  );
};
export default About;
