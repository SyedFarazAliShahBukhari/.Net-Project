import { BarChart3, DollarSign, FileText, LogOut, Search, Settings, Shield, ShoppingCart, TrendingUp, Users, Warehouse } from 'lucide-react';
import { Outlet, Link, useNavigate, useLocation } from 'react-router-dom';


const Mainlayout = () => {
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
            <div className="flex items-center justify-between px-4 md:px-8 border-b border-gray-300 py-3 text-white bg-gray-800 transition-all duration-300">
                <Link to="/">
                    <h1 className='text-4xl'>Dot Net</h1>
                </Link>
                <div className="flex items-center gap-5 text-gray-200">
                    <button onClick={logoutHandler} className='border rounded-full text-white text-sm px-4 py-1'><LogOut/></button>
                </div>
            </div>
 <div className='flex'>
               <div className="md:w-64 w-16 border-r h-[550px] text-base text-white bg-gray-800 border-gray-300 pt-4 flex flex-col transition-all duration-300">
             <div className="flex py-4 px-2 hidden md:flex">
   <input type="text" className='border w-5/6 border-gray-300 p-2 rounded-md' placeholder='Search' />
  <button className='border w-1/6 border-gray-300 p-2 rounded-md'><Search/></button>
</div>
               {sidebarLinks.map((item, index) => (
    <Link 
        to={item.path} 
        key={index}
        className={`flex items-center py-2 px-4 gap-3 border-l-4 border-transparent
            ${location.pathname === item.path ? 
                "border-r-4 md:border-r-[6px] bg-indigo-500/10 border-indigo-500 text-indigo-500" : 
                "text-white"
            }`}
    >
        {item.icon}
        <p className="md:block hidden text-center">{item.name}</p>
    </Link>
))}
            </div>
            <div>
                <Outlet />
            </div>
 </div>
        </>
    );
};


export default Mainlayout
