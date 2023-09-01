'use client'
import Link from 'next/link'
import { useState } from 'react'
import styles from './page.module.css'
import { useRouter } from 'next/navigation'

export default function Home() {
  const [name, setName] = useState('priyanshu')
  const router = useRouter();
  const friut = () => {
    setName("legend")
  }
  const Inner = () => {
    return (
      <div>
        <h1>hello world</h1>
      </div>
    )
  }
  const nevigate = (name) => {
    router.push(name)
  }
  return (
    <main className={styles.main}>
      <div>
        {/* <User name="priyanshu"/>
        <h1>hello world</h1>
        <User name="priyanshu2"/> */}
        <h1>welcome to my site {name}</h1>
        <button onClick={()=>friut()}>click me</button>
        <Inner/>
        <Link href="/login">Login</Link><br/>
        <Link href="/about">About</Link>
        <br/>
        <button onClick={()=>nevigate('/login')}>Login</button><br/>  
        <button onClick={()=>nevigate('/about')}>About</button>
      </div>
      
   
    </main>
  )
}


const User = ( user ) => {
  return (
    <div>
      <h1>hello {user.name}</h1>
      
    </div>
  )
}