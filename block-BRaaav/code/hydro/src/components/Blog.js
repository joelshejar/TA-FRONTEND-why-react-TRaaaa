let img2 = require('../media/blog-image1.jpg')

function Blog(props){
    return(
        <section className="blog padding">
        <div className="container">
          <header className="sec-header text-center">
            <h2 className="heading">Our Blog</h2>
            <div className="dot-wrapper">
              <div className="dot"></div>
              <div className="dot"></div>
              <div className="dot"></div>
            </div>
          </header>
          <div className="flex wrap">
            <article className="flex article flex-48">
              <div className="flex-40 font-0">
                <img
                  className="flexible-img"
                  src={img2}
                  alt="Blog image 1"
                />
              </div>

              <div className="flex-60 article-content">
                <time datetime="">
                  <i className="far fa-clock"></i>
                  December 22, 2017
                </time>
                <h3>How to find beautiful workspace?</h3>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
                <a className="btn btn-tertiary" href="#">Read Article</a>
              </div>
            </article>
            <article className="flex article flex-48">
              <div className="flex-40 font-0">
                <img
                  className="flexible-img"
                  src="assets/media/blog-image2.jpg"
                  alt="Blog image 1"
                />
              </div>

              <div className="flex-60 article-content">
                <time datetime="">
                  <i className="far fa-clock"></i>
                  December 18, 2017
                </time>
                <h3>Woman sportwear</h3>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
                <a className="btn btn-tertiary" href="#">Read More</a>
              </div>
            </article>
            <article className="flex article flex-48">
              <div className="flex-40 font-0">
                <img
                  className="flexible-img"
                  src="assets/media/blog-image3.jpg"
                  alt="Blog image 1"
                />
              </div>

              <div className="flex-60 article-content">
                <time datetime="">
                  <i className="far fa-clock"></i>
                  December 14, 2017
                </time>
                <h3>New creative fashion</h3>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
                <a className="btn btn-tertiary" href="#">Read Article</a>
              </div>
            </article>
            <article className="flex article flex-48">
              <div className="flex-40 font-0">
                <img
                  className="flexible-img"
                  src="assets/media/blog-image4.jpg"
                  alt="Blog image 1"
                />
              </div>

              <div className="flex-60 article-content">
                <time datetime="">
                  <i className="far fa-clock"></i>
                  December 10, 2017
                </time>
                <h3>Minimalist design trend in 2018</h3>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
                <a className="btn btn-tertiary" href="#">View Detail</a>
              </div>
            </article>
          </div>
        </div>
      </section>
    )
}

export default Blog