    import React from "react";
    import logo from "../assets/Logo.svg";
    import  { Link } from "react-router-dom";
    import { useNavigate } from 'react-router-dom';
    


    import toast from "react-hot-toast";

    const Navbar =(props)=>{
        let isLoggedIn =props.isLoggedIn;
        let setIsLoggedIn = props.setIsLoggedIn;
        const navigate = useNavigate();

        return(
            <div className="flex justify-between items-center w-11/12 max-w[1160px] py-4 mx-auto">
                <Link to="/">
                    <img src={logo} alt="LOGO" width={160} height={32} loading="lazy"/>            
                </Link>

                <nav >
                    <ul className="flex gap-x-6 text-richblack-100" >
                        <li>
                            <Link to="/">Home</Link>
                        </li>
                        <li>
                            <Link to="/about"> About</Link>
                        </li>
                        <li>
                            <Link to="/contact">Contact</Link>

                        </li>

                    </ul>
                </nav>
                {/* /* {login - Signup - logout-dashboard} */ }
                <div className="flex items-center gap-x-4">
                    { !isLoggedIn && 

                        <Link to="/login"> 
                            <button className="bg-richblack-800 text-richblack-100 p-2.5 rounded-[8px]
                             border border-richblack-700">
                            Log in   
                            </button>                    
                        </Link>
                    }

                    { !isLoggedIn && 
                        <Link to="/Signup"> 
                            <button className="bg-richblack-800 text-richblack-100 p-2.5 rounded-[8px]
                             border border-richblack-700">
                                Sign up   
                            </button>                    
                        </Link>
                    }
                     { isLoggedIn && 
                        <Link to="/"> 
                            <button onClick={() => {
                                 setIsLoggedIn(false);
                                 toast.success("Logged Out");
                                 navigate("/home");
                                     }} 
                className="bg-richblack-800 text-richblack-100 p-2.5 rounded-[8px] border border-richblack-700">
                    Log Out   
                </button>                    
            </Link>
        }


                    {  isLoggedIn && 

                        <Link to="/dashboard"> 
                            <button className="bg-richblack-800 text-white p-2.5  rounded-[8px]
                             border border-richblack-700" >
                                Dashboard
                            </button>                    
                        </Link>
                    }
                </div>
            </div>
        )
    }
    export default Navbar;