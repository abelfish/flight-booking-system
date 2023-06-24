import axios from 'axios';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { UserDTO } from '../../model/UserDTO';

function Users() {
  const [users, setUsers] = useState<UserDTO[]>([]);
  const getUsers = async () => {
    await axios
      .get('http://localhost:8080/api/users', {
        headers: {
          'Content-Type': 'application/json',
          Authorization: 'Bearer ' + localStorage.getItem('accessToken'),
        },
      })
      .then((response) => {
        console.log(response.data);
        setUsers(response.data);
      })
      .catch((error) => {
        alert(error);
      });
  };
  const onDeleteClicked = async (id: any) => {
    await axios
      .delete('http://localhost:8080/api/users/' + id, {
        headers: {
          Authorization: 'Bearer ' + localStorage.getItem('accessToken'),
        },
      })
      .then((response) => {
        getUsers();
      })
      .catch((error) => {
        alert(error);
      });
  };

  useEffect(() => {
    if (localStorage.getItem('user') === null) {
      window.location.href = '/login';
    }
    const user = localStorage.getItem('user');
    if (user != null && JSON.parse(user).role !== 'ADMIN') {
      alert('You are not authorized to view this page');
      window.location.href = '/login';
    }
    getUsers();
    document.title = 'Natna Airlines - Users';
  }, []);
  return (
    <div className="flex flex-col lg:mx-32  lg:w-4/5 mx-auto">
      <div>
        <h1 className="text-2xl my-20 font-bold">System Users </h1>
      </div>

     
      <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
        <div className="inline-block min-w-full py-2 sm:px-6 lg:px-8">
          <div className="overflow-hidden">
            {' '}
           
            <table className="min-w-full text-left text-sm font-light">
              <thead className="border-b font-medium dark:border-neutral-500">
                <tr>
                  <th scope="col" className="px-6 py-4">
                    #
                  </th>
                  <th scope="col" className="px-6 py-4">
                    Email
                  </th>
                  <th scope="col" className="px-6 py-4">
                    Username
                  </th>
                  <th scope="col" className="px-6 py-4">
                    Role
                  </th>
                  <th scope="col" className="px-6 py-4"></th>
                </tr>
              </thead>
              <tbody>
                {users?.map((u) => (
                  <tr
                    key={u.id}
                    className="border-b transition duration-300 ease-in-out dark:hover:bg-neutral-300 hover:cursor-pointer"
                  >
                    <td className="whitespace-nowrap px-6 py-4 font-medium">
                      {u.id}
                    </td>
                    <td className="whitespace-nowrap px-6 py-4">{u.email}</td>
                    <td className="whitespace-nowrap px-6 py-4">
                      {u.username}
                    </td>
                    <td className="whitespace-nowrap px-6 py-4">{u.role}</td>
                    <td className="whitespace-nowrap px-6 py-4">
                      <button
                        onClick={() => onDeleteClicked(u.id)}
                        className="border flex px-4 py-2 border-black rounded-lg hover:bg-red-700 hover:text-white"
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Users;
