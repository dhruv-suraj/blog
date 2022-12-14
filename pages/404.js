import Link from 'next/link'
import { useEffect } from 'react'
import { useRouter } from 'next/router'

<meta

      name="description"

      content="Travello provides you with an opportunity to travel to the destinations you always longed for, join this amazing journey."

    />
const NotFound = () => {
    const router=useRouter();
    useEffect(() =>{
        setTimeout(()=>{
            //router.go(1)
            router.push('/');
        },3000)
    },[])
    return ( 
      <div className="not-found">
        <h1>Ooooops....</h1>
        <h2>Page not found</h2>
        <p>Go back to the<Link href="/"><a>Homepage</a></Link></p>
      </div>  
    );
}
 
export default NotFound ;
