import React from 'react'
import Link from 'next/link'
import { signIn, signOut, useSession } from 'next-auth/client'
import styles from '../styles/Home.module.css'
import {
  Button,
  Card
} from 'react-bootstrap';

export default function Home() {

  const [session, loading] = useSession();

  return (
    <div className={styles.container}>
      <main className={styles.main}>
        {
          !session && (
            <Card style={{ width: "18rem" }} className="p-3 bg-primary">
              <Card.Title className="fw-bold text-center">  Not SignIn </Card.Title>
              <Card.Text className="fw-bold mb-2">
                Welcome !! Login here to visit my website
              </Card.Text>
              <Button onClick={signIn} variant="success">  Sign In </Button>
            </Card>
          )
        }
        {
          session && (
            <Card style={{ width: "18rem" }} className="p-3">
              <Card.Title className="fw-bold text-center"> Sign In as <br /> {session.user.name} </Card.Title>
              <Card.Body>
                <Card.Text className="fw-bold"> You can Access our super secret pages </Card.Text>
                <Button variant="info">
                  <Link href="/secret"> To the Secret </Link>
                </Button>
                <Button onClick={signOut} variant="danger"> Sign Out </Button>
              </Card.Body>
            </Card>
          )
        }
      </main>
    </div>
  )
}

// http://localhost:3000/redirect