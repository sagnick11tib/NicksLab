

function getLatestCommit() {
  const sha = process.env.NEXT_PUBLIC_VERCEL_GIT_COMMIT_SHA
  const label = sha ? sha.slice(0, 7) : '🌍'
  return label
}

async function Footer({ footerWidth = 'max-w-3xl' }: { footerWidth?: string }) {
  const commit = getLatestCommit()
  const year = String(new Date().getFullYear())

  return (
   <>
   <div>Hello Footer</div>
   </>
  )
}

export default Footer