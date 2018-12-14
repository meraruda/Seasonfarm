import React from 'react';
import './Location.less';

const Location = (props) => {
    const { children } = props;

    return (
        <div className="row justify-content-center">
                <div className="col-12 col-lg-8 col-xl-9">
                    <div className="contact-content mb-100">
                        <h4 className="mb-50">聯絡我們</h4>
                        <p>無論您欲透過通話或是電子郵件，我們都會盡可能在最快的時間內回覆您的問題與需求。</p>

                        <div className="row align-items-center mt-30 mb-50">
                            <div className="col-12 col-lg-4">                               
                                {children}
                            </div>
                            <div className="col-12 col-lg-8">
                                <div className="map-area">
                                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6185.967516675242!2d120.21737649300428!3d22.795115243636687!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x8dd9af156fdf2e32!2z5pet6aCG5rC055SiKHNlYXN1biBmYXJtKQ!5e0!3m2!1szh-TW!2stw!4v1544757886590" allowFullScreen></iframe>
                                </div>
                            </div>
                        </div>
                        {/* <div class="contact-form-area mb-70">
                            <h4 class="mb-50">Get In Touch</h4>

                            <form action="#" method="post">
                                <div class="row">
                                    <div class="col-lg-6">
                                        <div class="form-group">
                                            <input type="text" class="form-control" id="name" placeholder="Name">
                                        </div>
                                    </div>
                                    <div class="col-lg-6">
                                        <div class="form-group">
                                            <input type="email" class="form-control" id="email" placeholder="E-mail">
                                        </div>
                                    </div>
                                    <div class="col-12">
                                        <div class="form-group">
                                            <textarea name="message" class="form-control" id="message" cols="30" rows="10" placeholder="Message"></textarea>
                                        </div>
                                    </div>
                                    <div class="col-12">
                                        <button class="btn bueno-btn mt-30" type="submit">Send</button>
                                    </div>
                                </div>
                            </form>
                        </div> */}
                    </div>
                </div>   
            </div>             
    );
}

export default Location;
