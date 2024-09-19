import React from 'react';

const ViewData = ({ handleEdit, setStorage, Storage }) => {
  const handleRemove = (id) => {
    const removeData = Storage.filter(item => item.id !== id);
    setStorage(removeData);
  };

  return (
    <div className="p-4 bg-light rounded shadow">
      <table className="table table-striped table-bordered">
        <thead className="thead-dark">
          <tr>
            <th scope="col">#</th>
            <th scope="col">Name</th>
            <th scope="col">Email</th>
            <th scope="col">Course</th>
            <th scope="col">Action</th>
          </tr>
        </thead>
        <tbody>
          {Storage.map((rec, index) => (
            <tr key={rec.id}>
              <td>{index + 1}</td>
              <td>{rec.name}</td>
              <td>{rec.email}</td>
              <td>{rec.course}</td>
              <td>
                <button
                  className="btn btn-primary btn-sm mx-1"
                  onClick={() => handleEdit(rec.id)}
                >
                  <i className="bi bi-pen-fill"></i>
                </button>

                <button
                  className="btn btn-danger btn-sm mx-1"
                  onClick={() => handleRemove(rec.id)}
                >
                  <i className="bi bi-trash-fill"></i>
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ViewData;
