import { BarChart3, DollarSign, FileText, LogOut, Search, Settings, Shield, ShoppingCart, TrendingUp, User, Users, Warehouse } from 'lucide-react';
import { Outlet, Link, useNavigate, useLocation } from 'react-router-dom';
import image from "../assets/LOGO-DOTNET-v2018.png" ;


const Mainlayout = () => {
    let user = localStorage.getItem("user")
    const location = useLocation();
      let navigate = useNavigate()
  function logoutHandler(){
    localStorage.removeItem("isLogin")
    navigate("/login")
  }
        const sidebarLinks = [
        { name:" Setup", path:"/Setup" , icon: <Settings size={20} /> },
        { name:"Finance", path:"/Finance", icon: <DollarSign size={20} /> },
        { name:"Procurement", path:"/Procurement" , icon: <ShoppingCart size={20} />},
        { name:"Sales", path:"/sales" , icon: <TrendingUp size={20} />},
        { name:"H.R", path:"/HumanResource" , icon: <Users size={20} />},
        { name:"Reports", path:"/Reports" , icon: <BarChart3 size={20} /> },
        { name:"Admin", path:"/Admin" , icon: <Shield size={20} /> },
        { name:"Store/Warehouse", path:"/Store" , icon: <Warehouse size={20} />},
        { name:"OtherReports", path:"/OtherReports" , icon: <FileText size={20} /> },
    ];

    return (
        <>
    <div className="flex flex-col h-screen">
  {/* Navbar */}
  <div className="flex items-center justify-between px-4 md:px-8 border-b border-gray-300 py-3 text-white bg-gray-800 transition-all duration-300">
    <div className="flex items-center gap-4">
      <Link to="/" className="flex items-center">
        <img src={image} className="h-8 w-auto md:h-10 lg:h-12 object-contain" alt="Dotnet" />
      </Link>
      <div className="flex items-center gap-3">
        <button
          onClick={logoutHandler}
          className="bg-indigo-600 hover:bg-indigo-700 text-white text-sm px-4 py-1 rounded-md transition"
        >
          Logout
        </button>
        <div className="flex items-center gap-2">
          <User className="text-white" />
          <span className="hidden sm:block">{user}</span>
        </div>
      </div>
    </div>
  </div>


  <div className="flex flex-1 overflow-hidden">
  
    <div className="md:w-64 w-20 border-r h-full text-base text-white bg-gray-800 border-gray-300 pt-4 flex flex-col transition-all duration-300">
      <div className="flex py-4 px-2 hidden md:flex">
        <input
          type="text"
          className="border w-5/6 text-white placeholder-white border-gray-300 p-2 rounded-md text-black"
          placeholder="Search"
        />
        <button className="border w-1/6 border-gray-300 p-2 rounded-md bg-indigo-600 hover:bg-indigo-700 transition">
          <Search />
        </button>
      </div>
      <div className="flex-1 overflow-y-auto">
        {sidebarLinks.map((item, index) => (
          <Link
            to={item.path}
            key={index}
            className={`flex items-center md:py-2 md:px-4 py-6 px-2 gap-3 border-l-4 border-transparent hover:bg-gray-700 transition
              ${
                location.pathname === item.path
                  ? "bg-indigo-500/10 border-indigo-500 text-indigo-500"
                  : "text-white"
              }`}
          >
            {item.icon}
            <p className="md:block hidden">{item.name}</p>
          </Link>
        ))}
      </div>
    </div>

    <div className="flex-1 overflow-auto p-4 bg-gray-100">
      <Outlet />
    </div>
  </div>
</div>

        </>
    );
};


export default Mainlayout
