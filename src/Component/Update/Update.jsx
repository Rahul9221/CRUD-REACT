import React, { useState, useEffect } from 'react';

const Update = ({ editData, handleUpdate }) => {
    const [updataData, setUpdataData] = useState({
        name: '',
        email: '',
        course: '',
    });

    useEffect(() => {
        setUpdataData(editData);
    }, []);


    const handleForm = (e) => {
        const { name, value } = e.target;
        setUpdataData({
            ...updataData,
            [name]: value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        handleUpdate(updataData);
    }

    return (


        <div className="min-vh-100 d-flex align-items-center justify-content-center bg-light">
        <div className="card w-100 max-w-lg shadow">
            <div className="card-body">
                <h2 className="card-title  text-black mb-4">Student Registration</h2>
                
                <form onSubmit={handleSubmit}>
                    {/* Name Field */}
                    <div className="form-group">
                        <label className="font-weight-bold">Full Name</label>
                        <input
                            type="text"
                            name="name"
                            value={updataData.name}
                            className="form-control"
                            placeholder="Full Name"
                            onChange={handleForm}
                        />
                    </div>

                    {/* Email Field */}
                    <div className="form-group">
                        <label className="font-weight-bold">Email</label>
                        <input
                            type="email"
                            name="email"
                            value={updataData.email}

                            className="form-control"
                            placeholder="Email Address"
                            onChange={handleForm}
                        />
                    </div>


                    {/* Course Field */}
                    <div className="form-group">
                        <label className="font-weight-bold">Course</label>
                        <input
                            type="text"
                            name="course"
                            value={updataData.course}

                            className="form-control"
                            placeholder="Course Name"
                            onChange={handleForm}
                        />
                    </div>


                    {/* Submit Button */}
                    <div className="text-center">
                        <button
                            type="submit"
                            className="btn btn-primary btn-block"
                        >
                            Register
                        </button>
                    </div>
                </form>
            </div>
        </div>
    </div>
    );
};

export default Update;