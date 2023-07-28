"use client"
import { Tilt } from "react-tilt"
import { motion } from "framer-motion"

import { styles } from "@/app/styles"
import { services } from "@/constants"
import { fadeIn, textVariant } from "@/utils/motion"

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText} >Introdução</p>
        <h2 className={styles.sectionHeadText}>Sobre.</h2>
      </motion.div>
    </>
  )
}

export default About