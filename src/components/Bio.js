function Bio() {
    return (
        <div className="bio" id="bio">
            <div className="social-media">
                <a href="https://www.linkedin.com/in/mk-coder/" target="_blank">
                    <span>
                        <img src="./img/linkedin.png" alt="" />
                    </span>
                </a>
                <a href="https://github.com/Mr-MK-dev" target="_blank">
                    <span>
                        <img src="./img/github.png" alt="" />
                    </span>
                </a>
                <a href="https://twitter.com/M_Karam007" target="_blank">
                    <span>
                        <img src="./img/twitterX.png" alt="" />
                    </span>
                </a>
                <a href="https://leetcode.com/Mr-MK-dev/" target="_blank">
                    <span>
                        <img src="./img/leetcode.png" alt="" />
                    </span>
                </a>
            </div>
            <div className="portfolio-bio">
                <h1>Mohamed Karam</h1>
                <h3>_BACKEND DEVELOPER</h3>
                <p>
                    Software developer from egypt with rock-solid experience in
                    <span>JS</span> and building APIs with modern NestJs and
                    Deno.
                </p>
            </div>
            <div className="portfolio-profile">
                <div className="mk-image">
                    <img src="./img/bg-mk.png" />
                </div>
                <div className="resume-btn">
                    <button>Resume</button>
                    <button>
                        <a href="#contact">Say Hello!</a>
                    </button>
                </div>
            </div>
        </div>
    );
}

export default Bio;
