import React, { useEffect } from 'react'
// import { useParams } from 'react-router-dom'
import { getProfile, updateUserInfo } from '../../../axios/serives/clientsevices';
import { useFormik } from 'formik';
import { useDispatch, useSelector } from 'react-redux';
import { addUserDetails } from '../../../redux/detailsREducer';
import { editSema } from '../../../Validation/SingupVildation';
import { useNavigate } from 'react-router-dom';

export default function ClientEdit() {
    // const { id } = useParams();
    const dispatch = useDispatch();
    const navigate = useNavigate()
    async function fetchData() {
        const token = localStorage.getItem('token');
        const data = await getProfile(token);
        dispatch(addUserDetails(data.profile))
    }
    useEffect(() => {
        fetchData();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
    const { alldetails } = useSelector((state) => state.details);
    const onSubmit = async (values, actions) => {
        const token = localStorage.getItem('token');
        const data = await updateUserInfo(token, values);
        console.log(data);
        if (data.status) {
            // dispatch(addUserDetails())
            navigate('/client/home');
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
            name: `${alldetails.name}`,
            email: `${alldetails.email}`,
            phone: `${alldetails.phone}`,

        },
        validationSchema: editSema,
        onSubmit,
    });
    return (
        <div>
            <div className='container mt-5'>
                <form onSubmit={handleSubmit} >
                    <div className="mb-3">
                        <label for="exampleInputEmail1" className="form-label">Name</label>
                        <input type="text"
                            id="name"
                            value={values.name}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            className={
                                errors.name && touched.name
                                    ? 'form-control form-control-lg input-error'
                                    : 'form-control form-control-lg'
                            } /> {errors.name && touched.name && (
                                <p className="red-error">{errors.name}</p>
                            )}

                    </div>
                    <div class="mb-3">
                        <label for="exampleInputPassword1" className="form-label">Email</label>
                        <input type="email"
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
                    <div class="mb-3">
                        <label for="exampleInputPassword1" className="form-label">Phone</label>
                        <input type="tel"
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

                    <button type="submit" className="btn btn-primary">Submit</button>
                </form>
            </div>
        </div>
    )
}
