import Link from 'next/link'
import Image from 'next/image'

    <meta

      name="description"

      content="Travello provides you with an opportunity to travel to the destinations you always longed for, join this amazing journey."

    />
const Navbar = () => {
    return ( 
        <nav>
            <div className="logo">
             <Image src="/logo.png" width={128} height={77} />
            </div>
            <Link href="/"><a>Home</a></Link>
            <Link href="/about"><a>About</a></Link>
            <Link href="/ninjas"><a>Ninga List</a></Link>
        </nav>
     );
}
 
export default Navbar;
