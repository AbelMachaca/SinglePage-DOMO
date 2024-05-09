function Home () {
  return (
    <>
      <div>
        {/* About */}
        <section className='about-section text-center' id='about'>
          <div className='container px-4 px-lg-5'>
            <div className='row gx-4 gx-lg-5 justify-content-center'>
              <div className='col-lg-8'>
                <h2 className='text-white mb-4'>We do everything. We are DOMO.</h2>
                <p className='text-white-50'>
                  We promote the strategy and the solution, we design brands, we develop websites, design UX-UI, create applications, launch campaigns, tell stories, do digital marketing, train teams in deferents platforms and more.
                  In all things, we are focused on solutions for our visionary clients to create experiences that promote your needs for the future of your company.
                </p>
              </div>
            </div>
            <img className='img-fluid' src='https://res.cloudinary.com/dsuuinvqp/image/upload/v1715290166/Domo%20Desafio/t5_d5jp9p.png' alt='montaña con niebla' />
          </div>
        </section>
        {/* Projects */}
        <section className='projects-section bg-light' id='projects'>
          <div className='container px-4 px-lg-5'>
            {/* Featured Project Row */}
            <div className='row gx-0 mb-4 mb-lg-5 align-items-center'>
              <div className='col-xl-8 col-lg-7'><img className='img-fluid mb-3 mb-lg-0' src='https://res.cloudinary.com/dsuuinvqp/image/upload/v1715290166/Domo%20Desafio/bg-masthead_dyf8vv.jpg' alt='montaña con niebla' /></div>
              <div className='col-xl-4 col-lg-5'>
                <div className='featured-text text-center text-lg-left'>
                  <h4>Shoreline</h4>
                  <p className='text-black-50 mb-0'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quia ipsam nesciunt harum rerum magnam, suscipit culpa vitae velit vero odit porro distinctio quo dolore animi enim ullam ut facere quos.</p>
                </div>
              </div>
            </div>
            {/* Project One Row */}
            <div className='row gx-0 mb-5 mb-lg-0 justify-content-center'>
              <div className='col-lg-6'><img className='img-fluid' src='https://res.cloudinary.com/dsuuinvqp/image/upload/v1715290166/Domo%20Desafio/demo-image-01_chfh8z.jpg' alt='montaña con niebla' /></div>
              <div className='col-lg-6'>
                <div className='bg-black text-center h-100 project'>
                  <div className='d-flex h-100'>
                    <div className='project-text w-100 my-auto text-center text-lg-left'>
                      <h4 className='text-white'>Misty</h4>
                      <p className='mb-0 text-white-50'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Officia asperiores, dolorum totam excepturi laborum tenetur repellendus delectus ad deleniti ea quod optio laboriosam repudiandae dolor quae blanditiis eveniet tempora itaque.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* Project Two Row */}
            <div className='row gx-0 justify-content-center'>
              <div className='col-lg-6'><img className='img-fluid' src='https://res.cloudinary.com/dsuuinvqp/image/upload/v1715290166/Domo%20Desafio/demo-image-02_kd12ck.jpg' alt='montaña con niebla' /></div>
              <div className='col-lg-6 order-lg-first'>
                <div className='bg-black text-center h-100 project'>
                  <div className='d-flex h-100'>
                    <div className='project-text w-100 my-auto text-center text-lg-right'>
                      <h4 className='text-white'>Mountains</h4>
                      <p className='mb-0 text-white-50'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Placeat, perferendis. Aut id unde eveniet velit veritatis, alias rem quas, consequatur ex aspernatur at amet nostrum. Rem molestiae aliquam minus debitis?</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* Signup */}
        <section className='signup-section' id='signup'>
          <div className='container px-4 px-lg-5'>
            <div className='row gx-4 gx-lg-5'>
              <div className='col-md-10 col-lg-8 mx-auto text-center'>
                <i className='far fa-paper-plane fa-2x mb-2 text-white' />
                <h2 className='text-white mb-5'>Get in touch with us</h2>
                <form className='form-signup' id='contactForm' data-sb-form-api-token='API_TOKEN'>
                  <div className='row input-group-newsletter'>
                    <div className='col'><input className='form-control' id='emailAddress' type='email' placeholder='Enter email address...' aria-label='Enter email address...' data-sb-validations='required,email' /></div>
                    <div className='col-auto'><button className='btn btn-primary disabled' id='submitButton' type='submit'>Send</button></div>
                  </div>
                  <div className='invalid-feedback mt-2' data-sb-feedback='emailAddress:required'>An email is required.</div>
                  <div className='invalid-feedback mt-2' data-sb-feedback='emailAddress:email'>Email is not valid.</div>
                </form>
              </div>
            </div>
          </div>
        </section>
        {/* Contact */}
        <section className='contact-section bg-black'>
          <div className='container px-4 px-lg-5'>
            <div className='row gx-4 gx-lg-5'>
              <div className='col-md-4 mb-3 mb-md-0'>
                <div className='card py-4 h-100'>
                  <div className='card-body text-center'>
                    <i className='fas fa-map-marked-alt text-primary mb-2' />
                    <h4 className='text-uppercase m-0'>Address</h4>
                    <hr className='my-4 mx-auto' />
                    <div className='small text-black-50'>Buenos Aires, CABA</div>
                  </div>
                </div>
              </div>
              <div className='col-md-4 mb-3 mb-md-0'>
                <div className='card py-4 h-100'>
                  <div className='card-body text-center'>
                    <i className='fas fa-envelope text-primary mb-2' />
                    <h4 className='text-uppercase m-0'>Email</h4>
                    <hr className='my-4 mx-auto' />
                    <div className='small text-black-50'><a href='#'>hola@gmail.com</a></div>
                  </div>
                </div>
              </div>
              <div className='col-md-4 mb-3 mb-md-0'>
                <div className='card py-4 h-100'>
                  <div className='card-body text-center'>
                    <i className='fas fa-mobile-alt text-primary mb-2' />
                    <h4 className='text-uppercase m-0'>Phone</h4>
                    <hr className='my-4 mx-auto' />
                    <div className='small text-black-50'>+5491199999999</div>
                  </div>
                </div>
              </div>
            </div>
            <div className='social d-flex justify-content-center'>
              <a href='https://github.com/AbelMachaca' target='_blank' rel='noopener noreferrer'><i className='fa-brands fa-github' /></a>
              <a href='https://www.linkedin.com/in/abelmachaca/' target='_blank' rel='noopener noreferrer'><i className='fa-brands fa-linkedin' /></a>
            </div>
          </div>
        </section>
      </div>

    </>
  )
}

export default Home
