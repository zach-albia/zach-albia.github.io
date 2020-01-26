import Profile from './profile'

function Footer() {
  return (
    <footer>
      <Profile className="profile-footer" />

      <p>
        Proudly built with <a href="https://nextjs.org">Next.js</a> -{' '}
        © 2020 Zachary Albia. All rights reserved.
      </p>
      <style jsx>{`
        footer {
          padding: 1em 0;
        }

        p {
          margin-top: 2em;
        }
      `}</style>
    </footer>
  )
}

export default Footer
