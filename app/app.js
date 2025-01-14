"use client";
import dynamic from 'next/dynamic'
import{delay, motion,useScroll} from 'framer-motion'
import { useState,useEffect,useRef, Suspense} from 'react'
import { Center, SimpleGrid ,MantineProvider} from '@mantine/core'
import styles from './page.module.css'
import Image from 'next/image'
import Sarvagya from './sarvagya.png'
import { useLoader,extend } from '@react-three/fiber'
import { Sphere,OrbitControls} from '@react-three/drei'
import '@mantine/core/styles.css';
import { TextureLoader } from "three/src/loaders/TextureLoader";
import ExpandingImage from '@/components/ExpandImage';
import { Canvas} from '@react-three/fiber'
import Footer from '@/components/Footer';
import MouseFollower from '@/components/mousetracker'
import NeonCarousel from '@/components/Carousel';
const page = () => {
  const [browser,SetBrowser]=useState(false)
  useEffect(() => {
    if (typeof document !== 'undefined') {
      SetBrowser(true)
      // Your client-side code that uses document here
      // For example, adding event listeners, modifying the DOM, etc.
    }
  }, []);
  const name = (type) => `/earth2.jpg`;
  const [
    colorMap,
    displacementMap,
    normalMap,
    roughnessMap,
    aoMap
  ] = useLoader(TextureLoader, [
    name("Color"),
    name("Displacement"),
    name("Normal"),
    name("Roughness"),
    name("AmbientOcclusion")
  ]);
  extend({ OrbitControls });
  const videoRef = useRef();
  const { scrollYProgress } = useScroll();
  const [displayText, setDisplayText] = useState("WEB DEVELOPER . WEB DESIGNER . FRONT END  ENGINEER . BACK END ENGINEER . FULL STACK ENGINEER . DEVOPS . AI ENGINEER . APP DEVELOPER .");
  const cardVariants = {
    offscreen: {
      y: 300
    },
    onscreen: {
      y: 50,
      rotate: -10,
      
      transition: {
        
        type: "spring",
        bounce: 0.4,
        duration: 2.75,
        delay:1,
      }
    }
  };
  
  useEffect(()=>{
    if(browser){
    videoRef.current.playbackRate = 3;
    }

  },[browser])
  return (<>
    {browser?(
    <div>
    <div>
   <MantineProvider>
       <motion.div 
        className={styles.progressBar} style={{ scaleX: scrollYProgress }} />  
   
   
    <div className={styles.landing}>
   
      <Image className={styles.me} unselectable="on" src={Sarvagya}  width={500}
      height={500}
      alt="Picture of the author"></Image>
      <motion.h1  className={styles.banner}  style={{
        whiteSpace:'nowrap',
        overflow: "hidden", // Hide overflow
      }}
      animate={{
        x: ["10%", "-100%"], // Animation values for x property
        
      }}
      transition={{
        
        repeat: Infinity, // Repeat the animation indefinitely
       // Animation duration in seconds
       duration: 55, // Animation duration
        ease: "linear", // Linear easing function for continuous movement
      }}
      >{displayText}</motion.h1>
      
    </div>
    <div className={styles.info}>
    <motion.div
      className={styles.cardContainer}
      initial="offscreen"
      whileInView="onscreen"
      
      viewport={{ once: true }}
    >
      <h1 className={styles.name} >Who is Sarvagya Singh?</h1>
      <h2>Hello! I am sarvagya singh  student  in 11th grade from DPS bokaro , makes website in free time </h2>
    
       <motion.div className={styles.card} variants={cardVariants}>
        <h1 >Who Am I?</h1>
         </motion.div>
      </motion.div>
    </div>
    <div className={styles.projects}>
    <h1>Projects</h1>
    <Center>
      <SimpleGrid
      
      cols={{ base: 1, sm: 2, lg: 3 }}
      spacing={{ base: 10, sm: 'xl',lg:'md',xl:'xl' }}
      verticalSpacing={{ base: 'md', sm: 'xl' }}
    >
     <div className={styles.projectcard}>
      <div className={styles.shade}>
      <h2>Nandani</h2>
     </div>
     <video ref={videoRef} autoPlay muted loop  style={{ width: '100%', height: '100%' }}>
        <source src="/nandani.mp4" />
      </video>
     
     </div>
     
     <div className={styles.projectcard}>
      <div className={styles.shade}>
      <h2>Education India</h2>
      </div><video ref={videoRef} autoPlay muted loop  style={{ width: '100%', height: '100%' }}>
        <source src="/educationindia.mp4" />
      </video>
     </div>
     
     <div className={styles.projectcard}>
     <div className={styles.shade}>
      <h2>Prayaas</h2>
     </div>
     <video  autoPlay muted loop  style={{ width: '100%', height: '100%' }}>
        <source  src="/prayaas.mp4" />
      </video>
     </div>

     <div className={styles.projectcard}>
     <div className={styles.shade}>
      <h2>DPSBK</h2>
     </div>
     <video  autoPlay muted loop  style={{ width: '100%', height: '100%' }}>
        <source  src="/dpsbk.mp4" />
      </video>
     </div>
     <div className={styles.projectcard}>
      <h2>Inter DPS</h2>
     </div>
     
     <div className={styles.projectcard}>
      <h2>HAVK</h2>
     </div>
     
    
    </SimpleGrid>
    </Center>
    <h1>Contact</h1>
    <Suspense>
    <Canvas orbitControls style={{height:'600px'}} >
    <OrbitControls enableZoom={false} enablePan={false} />
    <ambientLight intensity={Math.PI / 2} />
    <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} decay={0} intensity={Math.PI} />
    <pointLight position={[-10, -10, -10]} decay={0} intensity={Math.PI} />
    <Suspense >
    <Sphere  rotation={[0.25, 3.25, 0]} args={[2.25, 64, 64]}>
    <meshStandardMaterial
          displacementScale={0}
          blendColor={"#2b27a1"}
          bumpScale={0}
          map={colorMap}
          displacementMap={displacementMap}
          normalMap={normalMap}
          roughnessMap={roughnessMap}
          aoMap={aoMap}
        />
      
      </Sphere>
      <Sphere  pos={[0,0,0]}  args={[0.02, 10, 64]}>
        <meshPhongMaterial color="red" />
      </Sphere>
    </Suspense>
  </Canvas>
  </Suspense>
  <h2>Bokaro JH,India </h2>
    <h2>singhsarvagya260508@gmail.com</h2>

    <br></br>
    <h3 className={styles.high} >High<span className={styles.higlights}>lights</span></h3>

  <NeonCarousel/>

  <div className={styles.research} >
<h1>Research work</h1>
<SimpleGrid
  cols={{ base: 1, sm: 2, lg: 3 }}
  spacing={{ base: 10, sm: 'xl',lg:'md',xl:'xl' }}
  verticalSpacing={{ base: 'md', sm: 'xl' }}
    >

     <iframe
  src="https://drive.google.com/file/d/1L95W6B5Ecsq_Qa_J-FyyX0eLFwj_uwvY/preview"
  scrolling="auto"
  style={{
    marginTop: "10vh",
    height: "500px",
    width:'100%'
  }}
/>
<div>
<iframe
    src="https://docs.google.com/document/d/1weG94nshzWd6uWnLvZJ57do1twyeurx9KZ9_GbFHGlk/preview"
  
    scrolling="auto"
    style={{"marginTop":"10vh",height:"500px",position:"relative",
      width:'100%'}}
    
></iframe>
</div>
<div>
<iframe
    src="https://docs.google.com/document/d/10DNFVlGfCZP9DZ2M7pMYJorCTaKnVTiAgCQtojp1yz0/preview"
  
    scrolling="auto"
    style={{"marginTop":"10vh",height:"500px",position:"relative",
      width:'100%'}}

></iframe>
</div>
</SimpleGrid>
</div>
<h1>Mom I am on the News</h1>
<center>
<ExpandingImage className={styles.eb}/>
</center>

<Footer/>

    </div>
</MantineProvider>
    </div>

    </div>):(<div>Loading...</div>)
    }
    </>
  );
}

// useGLTF.preload('/earth.gltf')
export default page;