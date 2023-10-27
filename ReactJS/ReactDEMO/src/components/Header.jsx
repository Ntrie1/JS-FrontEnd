export default function Header(){
    return(
        <header>
        <div  className="head_top">
        <div className="header">
           <div className="container">
              <div className="row">
                 <div className="col-xl-3 col-lg-3 col-md-3 col-sm-3 col logo_section">
                    <div className="full">
                       <div className="center-desk">
                          <div className="logo">
                             <a href="index.html"><img src="images/logo.png" alt="#" /></a>
                          </div>
                       </div>
                    </div>
                 </div>
                 <div className="col-xl-9 col-lg-9 col-md-9 col-sm-9">
                    <nav className="navigation navbar navbar-expand-md navbar-dark ">
                       <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarsExample04" aria-controls="navbarsExample04" aria-expanded="false" aria-label="Toggle navigation">
                       <span className="navbar-toggler-icon"></span>
                       </button>
                       <div className="collapse navbar-collapse" id="navbarsExample04">
                          <ul className="navbar-nav mr-auto">
                             <li className="nav-item">
                                <a className="nav-link" href="#about">About</a>
                             </li>
                             <li className="nav-item">
                                <a className="nav-link" href="#contact">Contact us</a>
                             </li>
                          </ul>
                          <div className="sign_btn"><a href="#">Sign in</a></div>
                       </div>
                    </nav>
                 </div>
              </div>
           </div>
        </div>
        <section className="banner_main">
           <div className="container-fluid" />
              <div className="banner_bg">
                 <div className="row d_flex">
                    <div className="col-xl-6 col-lg-6 col-md-12 padding_right1">
                       <div className="text_box_color">
                          <div className="text-bg">
                             <h1>Moto applications<br/> design</h1>
                             <strong>Free Multipurpose Responsive</strong>
                             <span>Landing Page 2019</span>
                             <a href="#">Buy Now</a>
                          </div>
                       </div>
                    </div>
                    <div className="col-xl-6 col-lg-6 col-md-12 padding_right1">
                       <div className="text-img">
                          <figure><img src="images/top_img.png" alt="#"/></figure>
                       </div>
                    </div>
                 </div>
              </div>
        </section>
        </div>
     </header>  
    );
}