import React from "react"
import Header from "./Header"
import Footer from "./Footer"
import styles from "./App.scss"

const App = (props) => (
  <div>
    <div className={styles.top}>
      <Header/>
      <div className={styles.content}>
        {props.children}
      </div>
      <div className={styles.footerHeight}>
      </div>
    </div>
    <div className={styles.footerHeight}>
      <Footer/>
    </div>
  </div>
)

export default App
