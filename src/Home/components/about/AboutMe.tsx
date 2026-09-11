function AboutMe() {
  return (
    <section className="bg-black py-14">
      <div className="mx-auto max-w-275 px-5 sm:px-6">
        <div className="grid gap-12 lg:items-center">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.25em] text-[#a8c7df]">
              About Me
            </p>

            <h2 className="mt-3 text-3xl font-bold sm:text-4xl">
              Building with purpose, not just code.
            </h2>
          </div>

          <div className="space-y-5 text-sm leading-7 text-white/60">
            <p>
              I’m a frontend developer focused on building modern, responsive
              web applications with React and Next.js. I enjoy turning
              ideas and designs into clean, accessible, and maintainable user
              interfaces.
               I’m now
              focusing my career on React and Next.js while strengthening my
              understanding of backend development with Node.js and Express.
            </p>

            <p>
              My professional experience has exposed me to React, React
              Native, PHP, WordPress, and web development workflows.
            </p>

            <p>
              I believe good development is more than making something work.
              I focus on understanding the problem, structuring the solution,
              writing maintainable code, and continuously improving the final
              product.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutMe;
