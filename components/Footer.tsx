import { useAddress, useMetamask, useDisconnect } from "@thirdweb-dev/react";
import Link from "next/link";
import React from "react";
import styles from "../styles/Home.module.css";

export default function Footer() {
  return (
    <div className={styles.footer}>
      <div className={styles.footer_container}>
      
      <div className={styles.footer_left}>
        <div>
          <Link href="/" passHref role="button">
            <img
              src={`/logo.png`}
              alt="Thirdweb Logo"
              width={300}
              style={{ cursor: "pointer" }}
            />
          </Link>
        </div>
        <p>Founded with ❤️ by a remote team</p>
        <p>{">\n"} 2093 Philadelphia Pike #9001</p>
        <p>Claymont, DE 19703, USA</p>
      </div>
      <div className={styles.footer_center}>
        <h4>RECENT POSTS</h4>
        <div className={styles.footer_post}>
        <img src="logo.png" alt="" width={100} style={{ cursor: "pointer" }}/>
        <div>
        <p>Hire best tech talent in Argentina</p>
        <p>August 27, 2021 No Comments</p>
        </div>
        </div>
        <div className={styles.footer_post}>
        <img src="logo.png" alt="" width={100} style={{ cursor: "pointer" }}/>
        <div>
        <p>Hire best tech talent in Brazil</p>
        <p>August 27, 2021 No Comments</p>
        </div>
        </div>
      </div>
      <div className={styles.footer_right}>
        <h4>TERMS AND POLICIES</h4>
        <ul>
          <li>Privacy Policy</li>
          <li>Returns</li>
          <li>Terms & Conditions</li>
          <li>Contact Us</li>
          <li>Latest News</li>
          <li>Our Sitemap</li>
        </ul>
      </div>
      </div>
      <div className={styles.footer_bottom}>
      TEILUR©2022 CREATED BY Teilur Inc.
      </div>
    </div>
  );
}
