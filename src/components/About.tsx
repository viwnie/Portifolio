"use client"
import { Tilt } from "react-tilt"
import { motion } from "framer-motion"

import { styles } from "@/app/styles"
import { services } from "@/constants"
import { fadeIn, textVariant } from "@/utils/motion"
import { SectionWrapper } from "./hoc"

import { StaticImageData } from "next/image";
import Image from 'next/image'


const ServiceCard = ({ index, title, icon }: { index: number; title: string; icon: StaticImageData }) => (
  <Tilt className='xs:w-[250px] w-full'>
    <motion.div
      variants={fadeIn("right", "spring", 0.5 * index, 0.75)}
      className='w-full bg-gradient-to-r from-indigo-500 to-purple-500 p-[1px] rounded-[20px] shadow-card'
    >
      <div className="bg-black rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col">
        <Image src={icon} alt={title} className="w-16 h-16 object-contain" />
        <h3 className="text-white text-[20px] font-bold text-center">{title}</h3>
      </div>
    </motion.div>
  </Tilt>
)

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText} >Introdução</p>
        <h2 className={styles.sectionHeadText}>Sobre.</h2>
      </motion.div>

      <motion.p variants={fadeIn("", "", 0.1, 1)} className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]">
        Sou um desenvolvedor júnior FullStack apaixonado por tecnologia e em constante busca por aprimorar minhas habilidades. Desde pequeno, já tinha interesse nessa área. Com 15 anos, já havia estudado como funciona um computador e montado o meu primeiro. Depois que cresci, sempre tive interesse em saber como criar programas no computador/mobile, mas não sabia como. Então, encontrei um curso da Cubos Academy FullStack com duração de 7 meses e, a partir da minha saída, já sabia que gostaria de trabalhar nessa área com toda certeza.
      </motion.p>

      <div className="mt-20 flex flex-wrap gap-10">
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  )
}

export default SectionWrapper(About, 'about')