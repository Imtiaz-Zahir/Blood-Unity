"use client";
import React, { useEffect, useState } from "react";

export default function NewUser() {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    fetch("/api/admin/users")
      .then((res) => res.json())
      .then((data) => setUsers(data));
  }, []);

  function varify(id: string, e: any) {
    fetch(`/api/admin/users/${id}`, {
      method: "PATCH",
    })
      .then(async (res) => {
        const { message } = await res.json();
        if (res.status === 200) {
          const newUsers: any = users.filter(
            (user: any) => user._id.toString() !== id
          );
          setUsers(newUsers);
        } else {
          e.target.checked = !e.target.checked;
        }
        alert(message);
      })
      .catch(() => alert("something went wrong try again later"));
  }

  function changeType(id: string, e: any) {
    fetch(`/api/admin/users/${id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ type: e.target.value }),
    })
      .then(async (res) => {
        const { message } = await res.json();
        if (res.status === 200) {
          const newUsers: any = users.filter(
            (user: any) => user._id.toString() !== id
          );
          setUsers(newUsers);
        }
        alert(message);
      })
      .catch(() => alert("something went wrong try again later"));
  }

  return (
    <div className="lg:p-6 lg:w-[80%] border-t border-slate-300">
      <h1 className="text-2xl font-bold">New Users</h1>
      <table className="text-center text-lg w-full">
        <thead>
          <tr>
            <th className="px-2">Name</th>
            <th className="px-2">Phone Number</th>
            <th className="px-2">Blood Group</th>
            <th className="px-2">Address</th>
            <th className="px-2">varyfied</th>
            <th className="px-2">Account Type</th>
          </tr>
        </thead>

        <tbody>
          {users.map((user: any, index) => (
            <tr key={index} className="odd:bg-gray-200">
              <td className="px-2">{user.name}</td>
              <td className="px-2">{user.phone}</td>
              <td className="px-2">{user.bloodGroup}</td>
              <td className="px-2">{user.upazila}</td>
              <td className="px-2">
                <input
                  type="checkbox"
                  name="veryfied"
                  value={user.varyfied}
                  onChange={(e) => varify(user._id.toString(), e)}
                />
              </td>
              <td className="px-2">
                <select
                  name="type"
                  value={user.type}
                  className="rounded-sm"
                  onChange={(e) =>
                    changeType(user._id.toString(), e)
                  }
                >
                  <option value="user">user</option>
                  <option value="donor">donor</option>
                  <option value="admin">admin</option>
                </select>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
