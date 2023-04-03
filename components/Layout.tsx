import Link from "next/link";

function Layout({children}:{children: React.ReactNode}) {
  return (
    <div>
      <nav className="flex sm:justify-center space-x-4 py-8">
        {[
          ['Home', '/'],
          ['Hello', '/hello'],
        ].map(([title, url], index) => (
          <Link href={url} key={index} className="rounded-lg px-3 py-2 text-slate-700 font-medium hover:bg-slate-100 hover:text-slate-900 bg-red-400">{title}</Link>
        ))}
      </nav>
      {children}
    </div>
  )
}

export default Layout;