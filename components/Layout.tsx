import Link from "next/link";

function Layout({children}:{children: React.ReactNode}) {
  return (
    <div>
      <nav className="text-2xl p-4">
        <Link href='/' className="hover:text-red-600">Home</Link>
      </nav>
      {children}
    </div>
  )
}

export default Layout;