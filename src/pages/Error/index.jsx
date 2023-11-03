import { Link } from "react-router-dom"
const index = () => {
  return (
    <section className=" mx-auto flex items-center h-screen">
      <div className="container mx-auto flex flex-col items-center -mt-[200px]">
        <div className="flex flex-col gap-6 max-w-md text-center">
          <h2 className="font-extrabold text-9xl text-gray-600">
            <span className="sr-only">Error</span>404
          </h2>
          <p className="text-2xl md:text-3xl dark:text-gray-400">Sorry, we couldn't find this page.</p>
          <Link to="/"> <a href="#" className="px-8 py-4 text-xl font-semibold rounded bg-purple-600 text-gray-50 hover:text-gray-200">Back to homepage</a></Link>
        </div>
      </div>
    </section>
  )
}

export default index