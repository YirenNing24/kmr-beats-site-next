import React from 'react'
import 'animate.css';
function Banner() {
  return (
    <div id="parallax" className="banner-area banner-bg">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-xxl-8 col-lg-9">
              <div className="banner-content text-center">
                <h4 className="small-title animate__animated animate__fadeInUp animate__delay-.2s">INTRODUCING</h4>
  
                <img className='small-title animate__animated animate__fadeInUp animate__delay-.2s' width={880} src="/assets/img/images/action_image.png" alt="" />
                <div className="banner-btn animate__animated animate__fadeInUp animate__delay-.6s">
                  <button className='bg'></button>
                  <a href="/contact" className="text-btn">PLAY NOW</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

  )
}

export default Banner