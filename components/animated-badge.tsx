import styles from './animated-badge.module.css';
import { ArrowRight } from "lucide-react"

export default function AnimatedBadge() {
  return (
    <div className={`${styles.prefixname457e1f} border group`}>
      <p className={`${styles.prefixnameace63e} [background-position:0_0] [background-size:100px_100%] [transition:background-position_1s_cubic-bezier(.6,.6,0,1)_infinite]`}>
        <span>✨ Introducing UI Template</span>
        <ArrowRight className={`${styles.prefixname00081f} group-hover:translate-x-0.5`} />
      </p>
    </div>
  )
}

