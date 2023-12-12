import React from "react";

const Login = () => {

    const formInitalState = {
        username: '',
        password: '',
    }



    return (
    <section className="h-screen flex items-center justify-center">
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {/* Left column container with background */}
      <div className="hidden md:block md:col-span-1 lg:col-span-2">
        <img
          src="https://tecdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.webp"
          className="w-full h-full object-cover"
          alt="Sample image"
        />
      </div>
  
      {/* Right column container */}
      <div className="md:col-span-1 lg:col-span-1">
        <form className="max-w-md mx-auto">
          {/* Sign in section */}
          <div className="mb-6">
            {/* Email input */}
            <input
              type="email"
              placeholder="Email address"
              className="w-full p-3 border border-solid border-gray-300 outline-none rounded-lg"
            />
          </div>
  
          {/* Password input */}
          <div className="mb-6">
            <input
              type="password"
              placeholder="Password"
              className="w-full p-3 border border-solid border-gray-300 outline-none rounded-lg"
            />
          </div>
  
          <div className="mb-6 flex items-center justify-between">
            {/* Remember me checkbox */}
            <div className="flex items-center">
              <input
                className="mr-2"
                type="checkbox"
                id="exampleCheck2"
              />
              <label
                className="cursor-pointer"
                htmlFor="exampleCheck2"
              >
                Remember me
              </label>
            </div>
  
            {/* Forgot password link */}
            <a href="#!" className="text-sm">
              Forgot password?
            </a>
          </div>
  
          {/* Login button */}
          <div className="text-center">
            <button
              type="button"
              className="w-full bg-blue-500 text-white py-3 rounded-lg hover:bg-blue-600 transition duration-300"
            >
              Login
            </button>
          </div>
  
          {/* Register link */}
          <p className="mt-4 text-sm">
            Don't have an account?{" "}
            <a
              href="#!"
              className="text-blue-500 hover:underline"
            >
              Register
            </a>
          </p>
        </form>
      </div>
    </div>
  </section>
  );
}
export default Login;