import Navbar from "./Navbar"
import Footer from "./Footer"
<meta

      name="description"

      content="Travello provides you with an opportunity to travel to the destinations you always longed for, join this amazing journey."

    />
const  Layout= ({children}) => {
    return ( 
        <div className="content">
            <Navbar />
            {children}
            <Footer />
        </div>

     );
}
 
export default Layout;
