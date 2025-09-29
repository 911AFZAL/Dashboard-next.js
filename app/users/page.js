import Sidebar from "../dashboard/components/Sidebar";
import Header from "../dashboard/components/Header";

function Page() {
  // ✅ Dummy Realistic User Data
  const users = [
    {
      id: 1,
      name: "Afzal Khan",
      email: "afzal@example.com",
      role: "Admin",
      status: "Active",
      avatar: "https://i.pravatar.cc/150?img=1",
    },
    {
      id: 2,
      name: "Irshad Ali",
      email: "irshad@example.com",
      role: "Editor",
      status: "Inactive",
      avatar: "https://i.pravatar.cc/150?img=2",
    },
    {
      id: 3,
      name: "Ravi Sharma",
      email: "ravi@example.com",
      role: "User",
      status: "Active",
      avatar: "https://i.pravatar.cc/150?img=3",
    },
    {
      id: 4,
      name: "Anjali Gupta",
      email: "anjali@example.com",
      role: "User",
      status: "Pending",
      avatar: "https://i.pravatar.cc/150?img=4",
    },
    {
    id: 5,
      name: "Anjali Gupta",
      email: "anjali@example.com",
      role: "User",
      status: "Pending",
      avatar: "https://i.pravatar.cc/150?img=4",
    },
     {
    id: 6,
      name: "Anjali Gupta",
      email: "anjali@example.com",
      role: "User",
      status: "Pending",
      avatar: "https://i.pravatar.cc/150?img=4",
    },
    {
    id: 7,
      name: "Anjali Gupta",
      email: "anjali@example.com",
      role: "User",
      status: "Pending",
      avatar: "https://i.pravatar.cc/150?img=4",
    },
    {
    id: 8,
      name: "Anjali Gupta",
      email: "anjali@example.com",
      role: "User",
      status: "Pending",
      avatar: "https://i.pravatar.cc/150?img=4",
    },
    {
    id: 9,
      name: "Anjali Gupta",
      email: "anjali@example.com",
      role: "User",
      status: "Pending",
      avatar: "https://i.pravatar.cc/150?img=4",
    },
    {
    id: 10,
      name: "Anjali Gupta",
      email: "anjali@example.com",
      role: "User",
      status: "Pending",
      avatar: "https://i.pravatar.cc/150?img=4",
    },
  ];

  return (
    <div className="flex">
      {/* Sidebar */}
      <Sidebar />

      {/* Main Content */}
      <div className="ml-64 flex-1 min-h-screen bg-gray-100">
        <Header />

        <main className="p-6">
          {/* === Top Header === */}
          <div className="flex justify-between items-center mb-6">
            <h1 className="text-3xl font-bold text-gray-800">Users</h1>
            <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 shadow">
              + Add User
            </button>
          </div>

          {/* === Users Table === */}
          <div className="bg-white shadow-lg rounded-lg overflow-hidden">
            <table className="min-w-full table-auto">
              <thead className="bg-gray-100 text-gray-700">
                <tr>
                  <th className="px-6 py-3 text-left">User</th>
                  <th className="px-6 py-3 text-left">Email</th>
                  <th className="px-6 py-3 text-left">Role</th>
                  <th className="px-6 py-3 text-left">Status</th>
                  <th className="px-6 py-3 text-left">Actions</th>
                </tr>
              </thead>
              <tbody>
                {users.map((user) => (
                  <tr
                    key={user.id}
                    className="border-b hover:bg-gray-50 transition duration-200"
                  >
                    {/* User Info */}
                    <td className="px-6 py-4 flex items-center gap-3">
                      <img
                        src={user.avatar}
                        alt={user.name}
                        className="w-10 h-10 rounded-full border"
                      />
                      <span className="font-medium text-gray-800">
                        {user.name}
                      </span>
                    </td>

                    {/* Email */}
                    <td className="px-6 py-4 text-gray-600">{user.email}</td>

                    {/* Role */}
                    <td className="px-6 py-4">
                      <span className="px-3 py-1 text-sm rounded-full bg-gray-200 text-gray-700">
                        {user.role}
                      </span>
                    </td>

                    {/* Status */}
                    <td className="px-6 py-4">
                      <span
                        className={`px-3 py-1 text-sm rounded-full ${
                          user.status === "Active"
                            ? "bg-green-100 text-green-700"
                            : user.status === "Inactive"
                            ? "bg-red-100 text-red-700"
                            : "bg-yellow-100 text-yellow-700"
                        }`}
                      >
                        {user.status}
                      </span>
                    </td>

                    {/* Actions */}
                    <td className="px-6 py-4">
                      <button className="px-3 py-1 text-sm bg-green-500 text-white rounded hover:bg-green-600 mr-2">
                        Edit
                      </button>
                      <button className="px-3 py-1 text-sm bg-red-500 text-white rounded hover:bg-red-600">
                        Delete
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </main>
      </div>
    </div>
  );
}

export default Page;
