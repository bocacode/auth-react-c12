import { useState } from 'react'
import LoginForm from './components/LoginForm'
import SignupForm from './components/SignupForm'
import RecipeList from './components/RecipeList'
import './App.css'

export default function App() {

  const [token, setToken] = useState()
  const [alreadyUser, setAlreadyUser] = useState(false)

  return (
    <main>
      {!token ? 
        <>
          {!alreadyUser
            ? <LoginForm setToken={setToken} />
            : <SignupForm setToken={setToken} />
          }
          <a href="#" onClick={() => setAlreadyUser(!alreadyUser)}>{!alreadyUser ? 'New User' : 'Already User?'}</a>
        </>
        : <RecipeList token={token} />
      }

    </main>
  )
}
