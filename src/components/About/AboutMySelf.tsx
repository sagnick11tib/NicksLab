const AboutMySelf = () => {
    return (
        <div className="group mt-9 leading-relaxed">
            <p>
              Hey there! I&apos;m Sagnick Manna, a{" "}
              {Math.floor(
                (new Date().getTime() - new Date(2003, 15, 8).getTime()) /
                  (365.25 * 24 * 60 * 60 * 1000)
              )}
              -year-old Full-Stack Developer from India who’s passionate about
              building clean, responsive, and scalable web applications. I
              absolutely love working with{" "}
              <span className="bg-gradient-to-l from-blue-400 to-teal-300 bg-clip-text text-transparent">
                Next.js
              </span>
              ,{" "}
              <span className="bg-gradient-to-l from-pink-500 to-orange-400 bg-clip-text text-transparent">
                React
              </span>
              , and the{" "}
              <span className=" bg-gradient-to-l from-purple-400 to-yellow-400 bg-clip-text text-transparent">
                MERN stack
              </span>
              , and I’m always chasing that perfect blend of performance and
              user experience.
            </p>
            <br />
            <p>
              I’m also exploring DevOps with{" "}
              <span className="bg-gradient-to-l from-blue-400 to-teal-300 bg-clip-text text-transparent">
                Docker
              </span>
              ,{" "}
              <span className="bg-gradient-to-l from-rose-300 to-sky-300 bg-clip-text text-transparent">
                DigitalOcean
              </span>
              , and{" "}
              <span className="bg-gradient-to-l from-green-300 to-indigo-500 bg-clip-text text-transparent">
                CI/CD
              </span>
              , and brushing up on DSA and system design to stay sharp. 
            </p>
            <br />
            <p>
              Outside of tech, I’m an audiophile who’s always on the lookout for
              high-fidelity sound experiences, and I enjoy diving into spiritual
              books that offer depth, clarity, and peace. I’m also brushing up
              on DSA and system design to keep my problem-solving skills sharp.
            </p>
            <br />
            <p>
              Currently, I’m looking for a full-time developer role where I can
              learn, grow, and contribute to meaningful projects alongside a
              talented team.
            </p>
          </div>
    )
};

export default AboutMySelf;