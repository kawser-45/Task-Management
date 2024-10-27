import Container from "../components/Container"
import Image from "../assets/task 1.png"




function Hero() {
  return (
    <Container className="grid grid-cols-3">
      <div className="col-span-2">
        <h1 className="mb-10 text-5xl font-bold dark:text-yellow-300">Task  Management</h1>
        <p className="text-lg dark:text-white">There are many variations of passages of Lorem Ipsum available, but Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora perspiciatis
           itaque numquam! Ex, optio commodi. the majority have suffered alteration in some form, by injected humour, 
           or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum.</p>
      </div>

        <div className="mx-auto">
          <img className="max-w-[100%]" src={Image} alt="" />
        </div>
    </Container>
  )
}

export default Hero