// import React, { Component } from "react";


// export default class NavBar extends Component {

//     render() {
//         return(
//           <nav className="navbar navbar-expand-lg" style={{backgroundColor: "#1A385A"}}>
            
//             <div className="container-fluid">
//                 <a className="navbar-brand" href="#" style={{color: "#E8AA9B"}}>Restaurant Management</a>
              
//                 <button 
//                 className="navbar-toggler" 
//                 type="button" 
//                 data-bs-toggle="collapse" 
//                 data-bs-target="#navbarSupportedContent" 
//                 aria-controls="navbarSupportedContent" 
//                 aria-expanded="false" 
//                 aria-label="Toggle navigation">
//                 <span className="navbar-toggler-icon"></span>
//                 </button>
              
            //     <div className="collapse navbar-collapse" id="navbarSupportedContent">
            //         <ul className="navbar-nav me-auto mb-2 mb-lg-0">

            //             <li className="nav-item">
            //                 <a className="nav-link" aria-current="page" href="#" style={{color: "#769ABE"}}>TRAVELWISE</a>
            //             </li>
                  
            //             <li className="nav-item">
            //                 <a className="nav-link active" aria-current="page" href="/" style={{color: "#E8AA9B"}}>Restaurant Home</a>
            //             </li>
                  
            //             <li className="nav-item dropdown">
            //                 <a
            //                 className="nav-link dropdown-toggle" 
            //                 href="#" role="button" data-bs-toggle="dropdown" 
            //                 aria-expanded="false" style={{color: "#E46F44"}}>
            //                 Restaurant Type
            //                 </a>
            //                 <ul className="dropdown-menu" style={{backgroundColor: "#DCD5DC"}}>
            //                     <li><a className="dropdown-item" href="#">BYOB</a></li>
            //                     <li><a className="dropdown-item" href="#">Not BYOB</a></li>
            //                 </ul>
            //             </li>
            //         </ul>
            //   </div>
//             </div>
//           </nav>
//         )
//     }   
// }

import React, { Component } from "react";

export default class NavBar extends Component {
  render() {
    return (
      <nav className="navbar navbar-expand-lg" style={{ backgroundColor: "#1A385A" }}>
        <div className="container-fluid">
          <a className="navbar-brand" href="#" style={{ color: "#DCD5DC", fontWeight: "bold" }}>TRAVELWISE</a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">

                        <li className="nav-item">
                            <a className="nav-link active" aria-current="page" href="/" style={{color: "#E8AA9B"}}>Restaurant Home</a>
                        </li>
                  
                        <li className="nav-item dropdown">
                            <a
                            className="nav-link dropdown-toggle" 
                            href="#" role="button" data-bs-toggle="dropdown" 
                            aria-expanded="false" style={{color: "#E46F44"}}>
                            Restaurant Type
                            </a>
                            <ul className="dropdown-menu" style={{backgroundColor: "#DCD5DC"}}>
                                <li><a className="dropdown-item" href="#">BYOB</a></li>
                                <li><a className="dropdown-item" href="#">Not BYOB</a></li>
                            </ul>
                        </li>
                    </ul>
              </div>
        </div>
      </nav>
    );
  }
}
