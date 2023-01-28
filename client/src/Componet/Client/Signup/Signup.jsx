import React from 'react';
import { useFormik } from 'formik';
import swal from 'sweetalert';
import './Signup.css';
import { userSchema } from '../../../Validation/SingupVildation';
import { clientRegister } from '../../../axios/serives/Homesevrices';

function Signup() {
  const onSubmit = async (values, actions) => {
    // console.log(actions);
    const data = await clientRegister(values);
    console.log(data);

    if (data.status) {
      swal({
        title: 'Good job!',
        // text: 'You clicked the button!',
        icon: 'success',
        button: 'Aww yiss!',
      });
      actions.resetForm();
    } else {
      swal({
        title: data.error,
        // text: 'You clicked the button!',
        icon: 'warning',
        button: 'Ok',
      });
    }
  };

  const {
    values,
    errors,
    touched,
    handleBlur,
    handleChange,
    handleSubmit,
  } = useFormik({
    initialValues: {
      name: '',
      email: '',
      phone: '',
      password: '',
      cpassword: '',
    },
    validationSchema: userSchema,
    onSubmit,
  });

  return (
    <div>
      <section className="" style={{ backgroundColor: ' #eee' }}>
        <div className="container h-100">
          <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col-lg-12 col-xl-11">
              <div className="card text-black" style={{ borderRadius: '25px' }}>
                <div className="card-body p-md-5">
                  <div className="row justify-content-center">
                    <div className="col-md-10 col-lg-6 col-xl-5 order-2 order-lg-1">
                      <p className="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">
                        Sign up
                      </p>

                      <form className="mx-1 mx-md-4" onSubmit={handleSubmit}>
                        <div className="d-flex flex-row align-items-center mb-4">
                          <i className="fas fa-user fa-lg me-3 fa-fw"></i>
                          <div className="form-outline flex-fill mb-0">
                            <label className="form-label">Your Name</label>
                            <input
                              type="text"
                              id="name"
                              value={values.name}
                              onChange={handleChange}
                              onBlur={handleBlur}
                              className={
                                errors.name && touched.name
                                  ? 'form-control form-control-lg input-error'
                                  : 'form-control form-control-lg'
                              }
                            />
                            {errors.name && touched.name && (
                              <p className="red-error">{errors.name}</p>
                            )}
                          </div>
                        </div>

                        <div className="d-flex flex-row align-items-center mb-4">
                          <i className="fas fa-envelope fa-lg me-3 fa-fw"></i>
                          <div className="form-outline flex-fill mb-0">
                            <label className="form-label">Your Email</label>
                            <input
                              type="email"
                              value={values.email}
                              onChange={handleChange}
                              onBlur={handleBlur}
                              id="email"
                              className={
                                errors.email && touched.email
                                  ? 'form-control form-control-lg input-error'
                                  : 'form-control form-control-lg'
                              }
                            />
                            {errors.email && touched.email && (
                              <p className="red-error">{errors.email}</p>
                            )}
                          </div>
                        </div>
                        <div className="d-flex flex-row align-items-center mb-4">
                          <i className="fas fa-envelope fa-lg me-3 fa-fw"></i>
                          <div className="form-outline flex-fill mb-0">
                            <label className="form-label">Phone</label>{' '}
                            <input
                              type="tel"
                              id="phone"
                              value={values.phone}
                              onChange={handleChange}
                              onBlur={handleBlur}
                              className={
                                errors.phone && touched.phone
                                  ? 'form-control form-control-lg input-error'
                                  : 'form-control form-control-lg'
                              }
                            />
                            {errors.phone && touched.phone && (
                              <p className="red-error">{errors.phone}</p>
                            )}
                          </div>
                        </div>

                        <div className="d-flex flex-row align-items-center mb-4">
                          <i className="fas fa-lock fa-lg me-3 fa-fw"></i>
                          <div className="form-outline flex-fill mb-0">
                            <label className="form-label">Password</label>{' '}
                            <input
                              type="Password"
                              id="password"
                              value={values.password}
                              onChange={handleChange}
                              onBlur={handleBlur}
                              className={
                                errors.password && touched.password
                                  ? 'form-control form-control-lg input-error'
                                  : 'form-control form-control-lg'
                              }
                            />
                            {errors.password && touched.password && (
                              <p className="red-error">{errors.password}</p>
                            )}
                          </div>
                        </div>

                        <div className="d-flex flex-row align-items-center mb-4">
                          <i className="fas fa-key fa-lg me-3 fa-fw"></i>
                          <div className="form-outline flex-fill mb-0">
                            <label className="form-label">
                              Repeat your password
                            </label>{' '}
                            <input
                              type="Password"
                              id="cpassword"
                              value={values.cpassword}
                              onChange={handleChange}
                              onBlur={handleBlur}
                              className={
                                errors.cpassword && touched.cpassword
                                  ? 'form-control form-control-lg input-error'
                                  : 'form-control form-control-lg'
                              }
                            />
                            {errors.cpassword && touched.cpassword && (
                              <p className="red-error">{errors.cpassword}</p>
                            )}
                          </div>
                        </div>

                        <div className="d-flex justify-content-center mx-4 mb-3 mb-lg-4">
                          <button
                            type="submit"
                            value="Submit"
                            className="btn btn-primary btn-lg"
                          >
                            Register
                          </button>
                        </div>
                      </form>
                    </div>
                    <div className="col-md-10 col-lg-6 col-xl-7 d-flex align-items-center order-1 order-lg-2">
                      <img
                        src={
                          'https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-registration/draw1.webp'
                        }
                        className="img-fluid"
                        alt={'Sample'}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Signup;
