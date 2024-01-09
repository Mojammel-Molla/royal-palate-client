import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';

const Register = () => {
  const { register, handleSubmit } = useForm();
  const onSubmit = data => console.log(data);
  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="text-center lg:text-left">
          <h1 className="text-5xl font-bold">Register now!</h1>
          <p className="py-6">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
            a id nisi.
          </p>
        </div>
        <div className="card shrink-0 w-full max-w-md shadow-2xl bg-base-100">
          <form onSubmit={handleSubmit(onSubmit)} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input
                {...register('name', { required: true })}
                type="text"
                placeholder="Name"
                className="input input-bordered"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                {...register('email', { required: true })}
                type="email"
                placeholder="Email"
                className="input input-bordered"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                {...register('password', { required: true })}
                type="password"
                placeholder="Password"
                className="input input-bordered"
              />
            </div>

            <div className="form-control">
              <input
                {...register('photo', { required: true })}
                type="file"
                className="file-input file-input-bordered file-input-xs w-full max-w-md"
              />
            </div>

            <div className="form-control mt-6">
              <button
                type="submit"
                className="btn font-bold text-white bg-green-600 hover:bg-[#fbad39]"
              >
                Register
              </button>
            </div>
            <p className="font-medium">
              Already have account? please
              <Link className="text-blue-700" to="/login">
                Log in
              </Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
