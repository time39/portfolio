import Sidebar from "../Sidebar";
import './index.scss'
import {
    Animator,
    batch,
    Fade, FadeIn, Move,
    MoveIn,
    MoveOut,
    ScrollContainer,
    ScrollPage,
    Sticky,
    StickyIn, ZoomIn
} from "react-scroll-motion";


const ZoomInScrollOut = batch(StickyIn(), FadeIn(), ZoomIn());
const FadeUp = batch(Fade(), Move(), Sticky());
const About = () => {
    return (
        <div>
            <Sidebar/>
            <section className={"red"}>
            <div className={"flex-container"}>
                <div>1</div>
                <div>2</div>
            </div>
        </section>
    <ScrollContainer>

        <ScrollPage>
            <Animator animation={batch(Fade(), Sticky(), MoveOut(0, -100))}>
                <span style={{ fontSize: "30px" }}>Let me show you scroll animation 😀</span>
            </Animator>
        </ScrollPage>
        <ScrollPage>
            <Animator animation={ZoomInScrollOut}>
                <span style={{ fontSize: "40px" }}>I'm FadeUpScrollOut ✨</span>
            </Animator>
        </ScrollPage>
        <ScrollPage>
            <Animator animation={FadeUp}>
                <span style={{ fontSize: "40px" }}>I'm FadeUp ⛅️</span>
            </Animator>
        </ScrollPage>
        <ScrollPage>
            <div style={{ display: "flex", justifyContent: "center", alignItems: "center", height: "100%" }} >
      <span style={{ fontSize: "40px" }}>
        <Animator animation={MoveIn(-1000, 0)}>Hello Guys 👋🏻</Animator>
        <Animator animation={MoveIn(1000, 0)}>Nice to meet you 🙋🏻‍♀️</Animator>-
        <Animator animation={MoveOut(1000, 0)}>Good bye ✋🏻</Animator>
        <Animator animation={MoveOut(-1000, 0)}>See you 💛</Animator>
      </span>
            </div>
        </ScrollPage>
        <ScrollPage>
            <Animator animation={batch(Fade(), Sticky())}>
                <span style={{ fontSize: "40px" }}>Done</span>
                <br/>
                <span style={{ fontSize: "30px" }}>
        There's FadeAnimation, MoveAnimation, StickyAnimation, ZoomAnimation
      </span>
            </Animator>
        </ScrollPage>
    </ScrollContainer>
        </div>)

}
export default About