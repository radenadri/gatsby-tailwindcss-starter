import * as React from "react"

const Footer = () => (
  <footer className="flex h-24 w-full items-center text-center justify-center border-t">
    <span>
      © {new Date().getFullYear()} &middot; {` `} Made with 💜 by <a className="text-purple-700 hover:text-purple-600" href="https://radenadri.xyz" target="_blank" rel="noopener norefferer">Adriana Eka Prayudha</a>
    </span>
  </footer>
)

export default Footer