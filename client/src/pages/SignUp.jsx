import {Link} from 'react-router-dom'

export default function SignUp() {
  return (
    <div className="p-3 max-w-lg mx-auto">
      <h1 className="text-3xl text-center my-7 font-semibold">Sign up</h1>
      <form className="flex flex-col gap-4">
        <input type="text" placeholder="Enter Username"
        className="border p-3 rounded-lg" id='username'
        />
        <input type="text" placeholder="Enter Email"
        className="border p-3 rounded-lg" id='username'
        />
        <input type="text" placeholder="Enter Password"
        className="border p-3 rounded-lg " id='username'
        />
        <div className="flex w-full justify-between">
          <button className="bg-green-500 text-white p-3 px-8 hover:bg-white hover:text-black  rounded-lg uppercase">Sign up</button>
          <button className="bg-violet-600 text-white p-3 rounded-lg uppercase">Continue with google</button>
        </div>
        <p>Have an account? 
          <Link to='/sign-in'>
           <span className='text-blue-600 hover:underline'> Sign-in</span>
          </Link>
        </p>
      </form>
    </div>
  )
}
