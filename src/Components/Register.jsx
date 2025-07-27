import React from 'react';

const LoginPage = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle login logic here
    console.log("Login form submitted!");
  };

  const handleGoogleLogin = () => {
    // Handle Google login logic here
    console.log("Google login clicked!");
  };

  return (
    <div className="bg-gray-800 flex items-center justify-center min-h-screen p-4">
      <div className="flex bg-white rounded-lg shadow-lg overflow-hidden max-w-4xl w-full">
        {/* Left Section - Login Form */}
        <div className="w-full md:w-1/2 p-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-6">Login now!</h2>
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label htmlFor="email" className="block text-gray-700 text-sm font-bold mb-2">Email</label>
              <input
                type="email"
                id="email"
                placeholder="email"
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="password" className="block text-gray-700 text-sm font-bold mb-2">Password</label>
              <input
                type="password"
                id="password"
                placeholder="password"
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
              />
              <a href="#" className="text-sm text-blue-500 hover:text-blue-800">Forgot password?</a>
            </div>
            <div className="mb-6">
              <label htmlFor="captcha" className="block text-gray-700 text-sm font-bold mb-2">4 Uzl T G</label>
              <a href="#" className="text-sm text-blue-500 hover:text-blue-800 mb-2 block">Reload Captcha</a>
              <input
                type="text"
                id="captcha"
                placeholder="Type the text above"
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              />
              <div className="text-right mt-2">
                <span className="text-xs text-gray-500">Validate</span>
              </div>
            </div>
            <div className="mb-6">
              <button
                type="submit"
                className="bg-gray-200 text-gray-700 font-bold py-2 px-4 rounded w-full focus:outline-none focus:shadow-outline hover:bg-gray-300"
              >
                Login
              </button>
            </div>
          </form>
          <div className="mb-6">
            <button
              type="button"
              onClick={handleGoogleLogin}
              className="flex items-center justify-center bg-white border border-gray-300 text-gray-700 font-bold py-2 px-4 rounded w-full shadow hover:bg-gray-100"
            >
              <img src="https://upload.wikimedia.org/wikipedia/commons/4/4a/Logo_of_Google_G_Suite.svg" alt="Google logo" className="w-5 h-5 mr-2" />
              Sign up with Google
            </button>
          </div>
          <div className="text-center text-sm text-gray-600">
            Don't have an account? <a href="#" className="text-blue-500 hover:text-blue-800">Please Register</a>
          </div>
        </div>

        {/* Right Section - Welcome Back Message */}
        <div className="hidden md:flex md:w-1/2 bg-purple-600 text-white p-8 items-center justify-center">
          <div className="text-center">
            <h1 className="text-4xl font-bold mb-4">Login now!</h1>
            <p className="text-xl mb-6">Welcome Back</p>
            <p className="text-sm leading-relaxed">
              Enter your credentials to access your Microworker account. If you don't have an account yet, you can register and start completing microjobs or posting tasks today!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;