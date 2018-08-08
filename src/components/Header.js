import React from 'react'

import iphone_portrait from '../assets/images/mockups/breakdance_iphonexspacegrey_portrait.png';
import iphone_portrait2 from '../assets/images/mockups/dance2_iphonexspacegrey_portrait.png';


class Header extends React.Component {
    render() {
        return (
            <section id="header">
                <div className="container">
                <div className="row">
                    <div className="col-xs-6">
                        <p>Hello</p>
                    </div>
                    <div className="col-xs-6">
                    <p>World</p>
                    </div>
                    </div>
                </div>
                <div className="inner">
                    <span className="icon major fa-cloud"></span>
                    <h1>Hi, I'm <strong>Photon</strong>, another fine<br />
                    little freebie from <a href="http://html5up.net">HTML5 UP</a>.</h1>
                    <p>Accumsan feugiat mi commodo erat lorem ipsum, sed magna<br />
                    lobortis feugiat sapien sed etiam volutpat accumsan.</p>
                    {/*<ul className="actions">
                        <li><a href="#one" className="button scrolly">Discover</a></li>
                        
                    </ul>*/}
                </div>
            </section>
        )
    }
}

export default Header
