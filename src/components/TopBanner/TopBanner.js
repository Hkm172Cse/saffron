import React, { Component, Fragment } from 'react';
import { Container } from 'react-bootstrap';
import '../../asset/css/bootstrap.min.css';
import '../../asset/css/custom.css';
import video from '../../asset/image/backV.mp4';
class TopBanner extends Component{
    render(){
        return(
            <Fragment>
                   <Container>
                   <video id="myVideo" autoplay="true" muted loop>
                        
                         <source src={video}  type="video/mp4"></source>
                    </video>
                    <div className="videoCustom">
                        <h1 className="Videoh1">Custom Software Development <br/> Company Serberry</h1>
                        <p className="videoText">Syberry provides turn-key software development services that add value to your business. Contact us today and transform your ideas into solutions!</p>

                        
                    </div>
                   </Container>
            </Fragment>
        );
    }
}
export default TopBanner;