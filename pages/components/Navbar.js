import Link from "next/link";
import Image from "next/image";
const Navbar = () => {
    return ( 

        <nav>
            <div className="logo">
                <Image src="/g.png" width={100} height={70}  />
         
            </div>


            <Link href="/"><a>Home</a></Link>
            <Link href="/about"><a>About</a></Link>
            <Link href="/louis"><a>Louis Listing</a></Link>
            

        </nav>
     );
}
 
export default Navbar;