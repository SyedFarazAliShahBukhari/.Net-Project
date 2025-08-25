import React from 'react';
import Router from '../route/Router';
import { Link } from 'react-router-dom';
import { BarChart3, DollarSign, FileText, Search, Settings, Shield, ShoppingCart, TrendingUp, Users, Warehouse } from 'lucide-react';

const StickyLayout = () => {
    let sidelink =[
        { name:" Setup", path:"/Setup" , icon: <Settings size={20} /> },
        { name:"Finance", path:"/Finance", icon: <DollarSign size={20} /> },
        { name:"Procurement", path:"/Procurement" , icon: <ShoppingCart size={20} />},
        { name:"Sales", path:"/sales" , icon: <TrendingUp size={20} />},
        { name:"H.R", path:"/HumanResource" , icon: <Users size={20} />},
        { name:"Reports", path:"/Reports" , icon: <BarChart3 size={20} /> },
        { name:"Admin", path:"/Admin" , icon: <Shield size={20} /> },
        { name:"Store/Warehouse", path:"/Store" , icon: <Warehouse size={20} />},
        { name:"OtherReports", path:"/OtherReports" , icon: <FileText size={20} /> },
        
    ]
    
  return (
    <div className="flex h-screen">
      <div className="sticky top-0 w-64 bg-gray-800 flex flex-col text-white text-4xl p-4">DOT NET
        <div className='flex flex-col py-10 text-lg'>
           <div className='flex py-4'>
             <input type="text"  className='border w-5/6 border-gray-300 p-2 rounded-md' placeholder='Search' />
             <button className='border w-1/6 border-gray-300 p-2 rounded-md'><Search/></button>
           </div>
             {
        sidelink.map((item, index)=>(
           <Link to={item.path} key={index} className="flex items-center px-5 gap-4  mt-2 ">{item.icon}{item.name}</Link>
        ))
        
        }
        </div>
        

      </div>
      <div className="flex-grow overflow-y-auto bg-gray-100">
       <Router/>
      </div>
    </div>
  );
};

export default StickyLayout;