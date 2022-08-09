import './index.scss'
import Sidebar from '../Sidebar'
import React from 'react'

function reveal() {
    const reveals = document.querySelectorAll(".reveal");
    for (let i = 0; i < reveals.length; i++) {
        const windowHeight = window.innerHeight;
        const elementTop = reveals[i].getBoundingClientRect().top;
        const elementVisible = 150;
        if (elementTop < windowHeight - elementVisible) {
            reveals[i].classList.add("active");
        } else {
            reveals[i].classList.remove("active");
        }
    }
}

window.addEventListener("scroll", reveal);

const Layout = () => {
  return (
    <div className="App">
        <Sidebar/>
        <section className={"fade-in"}>
            <div className={"banner title"}>Hello, i'm Tim!</div>
            <div className={"banner description"}> IT, Business and more</div>
        </section>
        <section>
        <h1>Hello World</h1>
    </section>
        <section>
            <h1>Hello World</h1>
        </section>
        <section>
            <h1>Hello World</h1>
        </section>

    </div>
  )
}
export default Layout