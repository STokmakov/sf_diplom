
import styles from "./HomePage.module.css"
import React from "react";

import { MainImage } from "@components/ContainerMain/MainImage";


const Main = (props) => {
    
    return (
        <main className={styles.main}>
          <div className={styles.main_container}>


            <MainImage />

          </div>
           
        </main>
    )
}

export  default Main; 