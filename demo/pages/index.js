import Head from "next/head"
import Demo from "../components/Demo"

const Home = () => {
  const demos = ["mask-image-simple", "mask-image-simple-invert"]
  return (
    <div className="container mx-auto mt-64 space-y-24">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {/* <h1 className="font-sans text-vue">Hey les bg</h1> */}
      {demos.map((el, idx) => (
        <Demo key={idx} twClass={el} />
      ))}
    </div>
  )
}
export default Home
export const config = {
  unstable_runtimeJS: false,
}
