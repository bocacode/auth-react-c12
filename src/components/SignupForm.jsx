export default function SignupForm({ setToken }) {

  const handleSignup = (event) => {
    event.preventDefault()
    const { email, password } = event.target
    fetch('https://auth-api-c12.web.app/users', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        email: email.value,
        password: password.value,
      }),
    })
      .then(res => res.json())
      .then(data => setToken(data.token))
      .catch(alert)
  }

  return (
    <section>
      <form onSubmit={handleSignup}>
        <h2>Sign Up</h2>
        <label htmlFor="email">
          Email:
          <input type="email" name="email" />
        </label>
        <label htmlFor="password">
          Password:
          <input type="password" name="password" />
        </label>
        <button type="submit">Sign Up</button>
      </form>
    </section>
  )
}