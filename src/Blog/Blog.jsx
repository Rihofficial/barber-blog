import "./Blog.css";
import hero4 from "../assets/Images/h1_hero1.jpg";
import comment_1 from "../assets/image/comment_1.png";
import comment_2 from "../assets/image/comment_2.png";
import comment_3 from "../assets/image/comment_3.png";
import preview from "../assets/image/preview.jpg";
import author from "../assets/image/author.png";
import next from "../assets/image/next.jpg";
import single_blog_1 from "../assets/image/single_blog_1.jpg";
import data from "./data";
import post5 from "../assets/image/post_5.jpg";
import post6 from "../assets/image/post_6.jpg";
import post7 from "../assets/image/post_7.jpg";
import post8 from "../assets/image/post_8.jpg";
import post9 from "../assets/image/post_9.jpg";
import post10 from "../assets/image/post_10.jpg";

const Blog = () => {
  const tags = [
    "project",
    "love",
    "technology",
    "travel",
    "restaurant",
    "life style",
    "design",
    "illustration",
  ];
  const images = [post5, post6, post7, post8, post9, post10];
  return (
    <div>
      <>
        <div className="hero-section">
          <div className="hero-title">
            <p>Blog Details</p>
          </div>
          <div className="hero-img">
            <img src={hero4} alt="Hero Image" />
          </div>
        </div>
        <main>
          <div className="all-section-container">
            <section className="grid-8">
              <article className="content-1">
                <img src={single_blog_1} alt="blog image" />
                <div>
                  <h2>
                    Second divided from form fish beast made every of seas all
                    gathered us saying he our
                  </h2>
                  <span className="content-link">
                    <a href="#">
                      <i className="fa-solid fa-user" /> Travel, Lifestyle
                    </a>
                    |
                    <a href="#">
                      <i className="fa-solid fa-comments" /> 03 comments
                    </a>
                  </span>
                  <p>
                    MCSE boot camps have its supporters and its detractors. Some
                    people do not understand why you should have to spend money
                    on boot camp when you can get the MCSE study materials
                    yourself at a fraction of the camp price. However, who has
                    the willpower
                  </p>
                  <p>
                    MCSE boot camps have its supporters and its detractors. Some
                    people do not understand why you should have to spend money
                    on boot camp when you can get the MCSE study materials
                    yourself at a fraction of the camp price. However, who has
                    the willpower
                  </p>
                  <p className="span-text">
                    <span>
                      MCSE boot camps have its supporters and its detractors.
                      Some people do not understand why you should have to spend
                      money on boot camp when you can get the MCSE study
                      materials yourself at a fraction of the camp price.
                      However, who has the willpower
                    </span>
                  </p>
                  <p>
                    MCSE boot camps have its supporters and its detractors. Some
                    people do not understand why you should have to spend money
                    on boot camp when you can get the MCSE study materials
                    yourself at a fraction of the camp price. However, who has
                    the willpower
                  </p>
                  <p>
                    MCSE boot camps have its supporters and its detractors. Some
                    people do not understand why you should have to spend money
                    on boot camp when you can get the MCSE study materials
                    yourself at a fraction of the camp price. However, who has
                    the willpower
                  </p>
                  <hr />
                  <div className="ss-line">
                    <p>
                      {" "}
                      <span>
                        <i className="fa-solid fa-heart" />
                      </span>{" "}
                      Lily and 4 people like this
                    </p>
                    <div className="social">
                      <i className="fa-brands fa-facebook-f" />
                      <i className="fa-brands fa-twitter" />

                      <i className="fa-solid fa-basketball" />

                      <i className="fa-brands fa-behance" />
                    </div>
                  </div>
                  <div className="contain">
                    <div className="next-1">
                      <img src={preview} alt="" />
                      <p>Prev post</p>
                      <a href="#">Space The Final Frontier</a>
                    </div>
                    <div className="next-2">
                      <p>Next post</p>
                      <a href="#">Telescopes 101</a>
                      <img src={next} alt="" />
                    </div>
                  </div>
                  <hr />
                  <div className="Authur">
                    <img src={author} alt="" />
                    <h4>
                      <a href="">Harvard milan</a>
                    </h4>
                    <p>
                      Second divided from form fish beast made. Every of seas
                      all gathered use <br /> saying you're, he our dominion
                      twon Second divided from
                    </p>
                  </div>
                  <hr />
                  <div className="comment-section">
                    <div className="big-com">
                      <h1>05 comments</h1>
                    </div>
                    <div className="comment-1">
                      <img src={comment_1} alt="" />
                      <p>
                        Multiply sea night grass fourth day sea lesser rule open
                        subdue female fill which them <br /> Blessed, give fill
                        lesser bearing multiply sea night grass fourth day sea
                        lesser
                      </p>
                      <h4>
                        <a href="#">Emilly Blunt</a>
                      </h4>
                      <span>December 4, 2017 at 3:12 pm</span>
                      <a href="#">Reply</a>
                    </div>
                    <div className="comment-1">
                      <img src={comment_2} alt="" />
                      <p>
                        Multiply sea night grass fourth day sea lesser rule open
                        subdue female fill which them <br /> Blessed, give fill
                        lesser bearing multiply sea night grass fourth day sea
                        lesser
                      </p>
                      <h4>
                        <a href="#">Emilly Blunt</a>
                      </h4>
                      <span>December 4, 2017 at 3:12 pm</span>
                      <a href="#">Reply</a>
                    </div>
                    <div className="comment-1">
                      <img src={comment_3} alt="" />
                      <p>
                        Multiply sea night grass fourth day sea lesser rule open
                        subdue female fill which them <br /> Blessed, give fill
                        lesser bearing multiply sea night grass fourth day sea
                        lesser
                      </p>
                      <h4>
                        <a href="#">Emilly Blunt</a>
                      </h4>
                      <span>December 4, 2017 at 3:12 pm</span>
                      <a href="#">Reply</a>
                    </div>
                  </div>
                  <hr />
                  <div className="form-container">
                    <form className="contact-form">
                      <h1 className="Reply">Leave a Reply</h1>
                      <textarea
                        name="message"
                        placeholder="Enter Message"
                        className="form-textarea"
                      />
                      <div className="form-row">
                        <input
                          type="text"
                          name="name"
                          placeholder="Enter your name"
                          className="form-input"
                        />
                        <input
                          type="email"
                          name="email"
                          placeholder="Email"
                          className="form-input"
                        />
                      </div>
                      <input
                        type="text"
                        name="subject"
                        placeholder="Enter Subject"
                        className="form-input-full"
                      />
                      <div className="btn-0">
                        <button type="submit">Post Comment</button>
                      </div>
                    </form>
                  </div>
                </div>
              </article>
            </section>
            <section className="grid-4">
              <div className="top-search">
                <div className="search-wrapper">
                  <input
                    type="text"
                    placeholder="Search Keyword"
                    id="Keyword"
                  />
                  <button>Search</button>
                </div>
              </div>
              <div className="cat-1">
                <h2>Categories</h2>
                <a href="#">Resturant food (37)</a>
                <a href="#">Travel news (10)</a>
                <a href="#">Modern technology (03)</a>
                <a href="#">Product(11)</a>
                <a href="#">Inspiration(21)</a>
                <a href="#">Health care(21)</a>
              </div>
              {/* recent-post */}
              <div className="recent-post">
                <h2>Recent Post</h2>
                <div className="post-list">
                  {data.map((post, index) => (
                    <div key={index} className="post-item">
                      <img
                        src={post.imageUrl}
                        alt={post.title}
                        className="post-image"
                      />
                      <div className="post-content">
                        <p className="post-title">{post.title}</p>
                        <p>{post.date || post.time}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              {/* tags cloud */}
              <div className="tag-clouds">
                <h2>Tag Clouds</h2>
                <div className="tag-list">
                  {tags.map((tag, index) => (
                    <span key={index} className="tag-item">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
              {/* instagram feeds */}
              <div className="instagram-feeds">
                <h2>Instagram Feeds</h2>
                <div className="feed-grid">
                  {images.map((image, index) => (
                    <div key={index} className="feed-item">
                      <img src={image} alt={`Instagram feed ${index + 1}`} />
                    </div>
                  ))}
                </div>
              </div>
              {/*Newsleter  */}
              <div className="newsletter">
                <h2>Newsletter</h2>
                <form>
                  <div className="email-form">
                    <input
                      type="text"
                      placeholder="Enter your email address"
                      id="email"
                    />
                  </div>
                  <div className="btn-3">
                    <button type="submit">Subscribe</button>
                  </div>
                </form>
              </div>
            </section>
          </div>
        </main>
      </>
    </div>
  );
};

export default Blog;
