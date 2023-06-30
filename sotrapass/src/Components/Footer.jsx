import React from 'react';
import '../Components/css/footer.css'
import logo3 from '../../media/sotra.png'
import logo4 from '../../media/institutSotra.png'
import logo5 from '../../media/sotraTourisme.png'
import logo6 from '../../media/sotraIndustrie.png'

function Footer() {
    return (
        <>
            <div className="footer">
                <div className="footerTop">
                    <img src={logo3} alt="" className='logoSotra'/>

                    <div className="contactfooter">

                    <div className="join">
                        <h2>nous  joindre</h2>
                        <p>www.sotra.ci</p>
                        <p>tel : 05-84-96-87-53</p>
                        <p>La base : vridi-port, Abidjan</p>
                    </div>

                    <div className="dev">
                        <h2>TRANS.dev</h2>
                        <p>NaN.ci</p>
                        <p>trans.dev@gmail.com</p>
                    </div>
                    </div>
                    
                    {/* <ul>
                        <li>NOUS JOINDRE
                            <ul>
                                <li>www.sotra.ci</li>
                                <li>tel : 05-84-96-87-53</li>
                                <li>La base : vridi-port, abidjan</li>
                            </ul>
                        </li>
                        <li>TRANS.dev
                            <ul>
                                <li>NaN.ci</li>
                                <li>Trans.dev@gmail.com</li>
                            </ul>
                        </li>
                    </ul> */}
                </div>
                <div className="border"></div>

                <div className="footerBottom">
                    <div className="sotra1">
                        <img src={logo4} alt="" />
                        <h3>institut sotra</h3>
                        <p>Zone industrielle yopougon Andokoi</p>
                    </div>

                    <div className="sotra2">
                        <img src={logo5} alt="" />
                        <h3>sotra tourisme</h3>
                        <p>Abidjan , marcory zone 4</p>
                    </div>

                    <div className="sotra3">
                        <img src={logo6} alt="" />
                        <h3>sotra industrie</h3>
                        <p>Zone industrielle koumassi</p>
                    </div>
                </div>

                <div className="copyright">
                    <p>Copyright  sotra 2020.Tout droit reservé</p>
                </div>
            </div>
        </>
    );
}

export default Footer;