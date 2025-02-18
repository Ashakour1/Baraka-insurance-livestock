import { BiLogOut } from "react-icons/bi";
import { TbLayoutDashboard } from "react-icons/tb";
import { Link, Outlet } from "react-router-dom";

const UserLayout = () => {
  const navItems = [
    {
      to: "/dashboard",
      label: "Dashboard",
      icon: <TbLayoutDashboard className="h-5 w-5" />,
    },

    {
      to: "/pastoralists",
      label: "Pastoralists",
      icon: <i className="fas fa-users text-2xl"></i>,
    },
    {
      to: "/groups",
      label: "Groups",
      icon: <i className="fas fa-layer-group text-2xl"></i>,
    },
    {
      to: "/sales",
      label: "Sales",
      icon: <i className="fas fa-chart-line text-2xl"></i>,
    },
    {
      to: "/users",
      label: "System Users",
      icon: <i className="fas fa-user-shield text-2xl"></i>,
    },
  ];

  return (
    <div className="flex h-screen bg-gray-100">
      <aside className="bg-green-600 text-white w-64 min-h-screen flex flex-col items-center py-8">
        <img src="" alt="Baraka Logo" className="w-32 h-auto mb-8" />
        <nav className="flex flex-col items-start space-y-6 w-full px-4">
          {navItems.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              className="sidebar-icon flex items-center space-x-3 w-full hover:bg-green-700 p-2 rounded"
              title={item.label}
            >
              {item.icon}
              <span className="text-lg">{item.label}</span>
            </Link>
          ))}
        </nav>
        <button
          className="mt-auto sidebar-icon flex items-center space-x-3 w-full px-4 hover:bg-green-700 p-2 rounded"
          id="logout-btn"
          title="Logout"
        >
          <BiLogOut className="text-2xl" />
          <span className="text-lg">Logout</span>
        </button>
      </aside>
      <main className="flex-1 p-8 overflow-y-auto">
        <Outlet />{" "}
        {/* This is where the nested route content will be rendered */}
      </main>
    </div>
  );
};

export default UserLayout;
