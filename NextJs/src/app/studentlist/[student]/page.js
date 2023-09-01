'use client'

import Link from "next/link"

export default function Student({params}){
    console.log(params)
    return (
        <div>
            <h1> All Student</h1>
            <h2>name :{params.student}</h2>
            <Link href="/studentlist">Home</Link>
        </div>
    )
}