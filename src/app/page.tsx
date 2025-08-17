

export default function Home() {
  return (
    <>
      <div id='projects'  className="w-2/3 min-h-screen flex-row">
        <h1 className="min-w-1/3 text-4xl text-center font-mono antialiased content-between">
          Projects
        </h1>
        <p className="min-w-1/3 font-mono antialiased text-center content-between">
          These projects highlight my hands-on experience with new technologies and my drive to turn learning into practical, working applications. 
        </p>
      </div>
      <div id='about'  className="w-2/3 min-h-screen flex-row">
        <h1 className="min-w-1/3 text-4xl text-center font-mono antialiased content-between">
          About
        </h1>
        <p className="min-w-1/3 font-mono antialiased text-center content-between">
          I’m a passionate developer with a love for continuous learning, creative problem-solving, and crafting clean, thoughtful designs. My goal is to build solutions that not only work seamlessly but also provide an enjoyable experience for the people who use them.
        </p>
      </div>
      <div id='contact'  className="w-2/3 min-h-screen flex-row">
        <h1 className="min-w-1/3 text-4xl text-center font-mono antialiased content-between">
          Contact me
        </h1>
        <p className="min-w-1/3 font-mono antialiased text-center content-between">
          I’d love to hear from you! Whether you’d like to chat, share feedback, or discuss an opportunity to work together, just fill out the form below and I’ll get back to you as soon as possible.
        </p>
      </div>
    </>
  );
}
