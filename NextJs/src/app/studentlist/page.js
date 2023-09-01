import Link from "next/link"

export default function Students (){
    return (
        <div>
            <h1>Students</h1>
            <ul>
                <li>
                    <Link href="/studentlist/student1">Student 1</Link>
                </li>
                <li>
                    <Link href="/studentlist/student2">Student 2</Link>
                </li>
                <li>
                    <Link href="/studentlist/student3">Student 3</Link>
                </li>
            </ul>
        </div>
    )
}