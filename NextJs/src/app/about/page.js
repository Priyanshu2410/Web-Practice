import Link from "next/link"

const About = () => {
    return (
        <div>
            <h1>About</h1>
            <Link href="/">Home</Link>
            <br/>
            <Link href="/about/aboutstudent">About Student</Link>
            <br/>
            <Link href="/about/aboutteacher">About Teacher</Link>
        </div>
    )
}

export default About