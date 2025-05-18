import React from "react";
import MultiplePizzas from "../assets/multiplePizzas.jpeg";
import { motion } from "framer-motion";
import "../styles/About.css";
function About() {
  return (
    <motion.div
    initial={{ opacity: 0, x: -50 }}       // 처음엔 안 보이고 왼쪽(-50px)에 위치
    animate={{ opacity: 1, x: 0 }}         // 등장하면서 보이고 정위치(x: 0)로 이동
    exit={{ opacity: 0, x: 50 }}           // 사라질 때 오른쪽(50px)으로 가며 사라짐
    transition={{ duration: 0.5 }}         // 전환 시간은 0.5초
    >
      <div className="about">
        <div
          className="aboutTop"
          style={{ backgroundImage: `url(${MultiplePizzas})` }}
        ></div>
        <div className="aboutBottom">
          <h1> ABOUT US</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime
            mollitia, molestiae quas vel sint commodi repudiandae consequuntur
            voluptatum laborum numquam blanditiis harum quisquam eius sed odit
            fugiat iusto fuga praesentium optio, eaque rerum! Provident similique
            accusantium nemo autem. Veritatis obcaecati tenetur iure eius earum ut
            molestias architecto voluptate aliquam nihil, eveniet aliquid culpa
            officia aut! Impedit sit sunt quaerat, odit, tenetur error, harum
            nesciunt ipsum debitis quas aliquid. Reprehenderit, quia. Quo neque
            error repudiandae fuga? Ipsa laudantium molestias eos sapiente
            officiis modi at sunt excepturi expedita sint? Sed quibusdam
            recusandae alias error harum maxime adipisci amet laborum.
            Perspiciatis minima nesciunt dolorem! Officiis iure rerum voluptates a
            cumque velit
          </p>
        </div>
      </div>
    </motion.div>
  );
}

export default About;
