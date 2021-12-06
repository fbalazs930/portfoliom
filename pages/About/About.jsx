import { AboutSVG } from "./AboutSVG"

export default function About(){
    return (
        <div className='about'>
            <h1>Bemutatkozás</h1>
            <div className="about-container">
                <div className="top">
                    <div className="about-illustration">
                        <AboutSVG/>
                    </div>
                    <div className="text">
                        <p>
                            A webfejlesztés <strong>2018</strong> óta a szenvedélyem. Tudásomat <strong>főként</strong> az internet segítségével <strong>autodidakta</strong> módon szereztem meg, amit napról napra igyekszek fejleszteni újabb technológiák tanulásával.
                        </p>
                    </div>
                </div>
                <div className="bottom">
                    <div className="langs">
                        <h2>
                            A következő nyelvekkel van tapasztalatom:
                        </h2>
                        <ul>
                            <div className="lang">
                                <h3>React</h3>
                                <i className="fab fa-react"></i>
                            </div>
                            <div className="lang">
                                <h3>JS</h3>
                                <i className="fab fa-js"></i>
                            </div>
                            <div className="lang">
                                <h3>HTML</h3>
                                <i className="fab fa-html5"></i>
                            </div>
                            <div className="lang">
                                <h3>CSS</h3>
                                <i className="fab fa-css3-alt"></i>
                            </div>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}