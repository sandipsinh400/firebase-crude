import { ref, get, remove } from 'firebase/database';
import React, { useEffect, useState } from 'react';
import db from '../firebase';
import { NavLink } from 'react-router-dom';
import { FaEye } from 'react-icons/fa';
import { AiOutlineUsergroupDelete } from 'react-icons/ai';
import { MdTipsAndUpdates } from 'react-icons/md'; 

const Info = () => {
  const [users, setuser] = useState([]);

  // Fetch data from Firebase
  async function showFirebase() {
    try {
      const res = await get(ref(db, 'rnw/student'));

      if (res.exists()) {
        const obj = res.val();
        const arr = Object.keys(obj).map((key) => {
          return { id: key, ...obj[key] };
        });
        setuser(arr);
      } else {
        console.log('No data available');
      }
    } catch (error) {
      console.error(error);
    }
  }

  // Call showFirebase when the component mounts
  useEffect(() => {
    showFirebase();
  }, []);

  // Delete a user from Firebase
  async function trash(id) {
    if (window.confirm('Do you want to delete this item?')) {
      const userRef = ref(db, `rnw/student/${id}`);
      await remove(userRef);
      showFirebase(); // Refresh the list after deletion
    }
  }

  return (
    <div className="container text-center mt-5">
      <h2 className="text-center mb-4">Users Information</h2>
      <div className="table-responsive">
        <table className="table table-hover table-bordered table-striped table-success">
          <thead className="thead-dark">
            <tr>
              <th>s.no</th>
              <th>username</th>
              <th>email</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {users.length > 0 ? (
              users.map((user, index) => (
                <tr key={user.id}>
                  <td>{index + 1}</td>
                  <td>{user.username}</td>
                  <td>{user.email}</td>
                  <td>
                    <div className="d-flex justify-content-center">
                      {/* Delete Button */}
                      <button onClick={() => trash(user.id)} className="btn btn-danger mx-2">
                        <AiOutlineUsergroupDelete />
                      </button>

                      {/* View Button */}
                      <NavLink className="btn btn-primary mx-2" to={`/singleuser/${user.id}`}>
                        <FaEye />
                      </NavLink>

                      {/* Update Button */}
                      <NavLink className="btn btn-warning mx-2" to={`/Update/${user.id}`}>
                        <MdTipsAndUpdates />
                      </NavLink>
                    </div>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="5" className="text-center">No users found</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Info;
