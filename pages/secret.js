import React, { useState, useEffect } from 'react'
import { useSession } from 'next-auth/client'
import Link from 'next/link'
import {
    Button
} from 'react-bootstrap'

function secret() {
    const [session, loading] = useSession()
    const [Content, setContent] = useState()

    useEffect(() => {

        const fetchData = async () => {
            const res = await fetch('/api/secret')
            const json = await res.json()
            if (json.content) {
                setContent(json.content)
            }
        }
        fetchData()
    }, [session])

    if (typeof window !== "undefined" && loading) return null;

    if (!session) {

        return (
            <main>
                <div>
                    <h1> You are not sign in , please sign in First </h1>
                </div>
            </main>
        )
    }
    return (
        <main>
            <div>
                <h1> Protected page</h1>
                <p>
                    {Content}
                </p>
                <Link href="/"> back </Link>
            </div>
        </main>
    )
}

export default secret
