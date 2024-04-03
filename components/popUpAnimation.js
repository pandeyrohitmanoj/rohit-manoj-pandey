import { motion, } from "framer-motion"

export function PopUpAnimation({children,duration}) {
  return (
    <motion.article     
        initial={{ opacity:0,}}
        whileInView={{ opacity:1,}}
        transition={{duration}}
    >
        {children}
    </motion.article>
  )
}

export function LeftAnimation({children,duration}) {
  return (
    <motion.div
      initial={{left:-100,}}
      whileInView={{left:0,}}
      transition={{duration}}
    >
      {children}
    </motion.div>
  )
}
export function RightAnimation({children,duration}) {
  return (
    <motion.div
      initial={{right:100, scale:0.25}}
      whileInView={{right:0, scale: 1}}
      transition={{duration}}
    >
      {children}
    </motion.div>
  )
}
export function ScaleAnimation({children,duration}) {
  return (
    <motion.div
      initial={{scale:0.25}}
      whileInView={{scale:1}}
      transition={{duration}}
    >
      {children}
    </motion.div>
  )
}
export function OpacityAnimation({children,duration}) {
  return (
    <motion.div
      initial={{opacity:0}}
      whileInView={{opacity:1}}
      transition={{duration,}}
    >
      {children}
    </motion.div>
  )
}