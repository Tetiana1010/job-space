function Hero() {
  return (
    <section className="py-12">
      <h1 className="text-4xl font-fold text-center">Find your next <br /> dream job</h1>
      {/* <p className="text-center text-gray-600 mt">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae dolorem facilis vel? Est ullam corporis quasi animi fuga perspiciatis odio veniam eveniet culpa, consectetur ut consequatur libero. Natus, deleniti explicabo!
      </p> */}
      <form className="flex gap-2 mt-4 max-w-md mx-auto">
        <input
          type="search"
          className="border border-gray-400 w-full py-2 px-3 rounded-md"
          placeholder="Search phrase.."
        />
        <button className="bg-blue-600 text-white py-2 px-4 rounded-md">
          Search
        </button>
      </form>
    </section>
  );
}

export default Hero;