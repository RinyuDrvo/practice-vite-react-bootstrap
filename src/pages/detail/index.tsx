import { Link, Outlet } from 'react-router-dom'

/** 詳細ページ */
export const Detail = () => {
  return (
    <>
      <h1>detail page</h1>
      <ul>
        <li>
          <Link to="corporate">corporate</Link>
        </li>
        <li>
          <Link to="employee">employee</Link>
        </li>
      </ul>
      <Outlet />
    </>
  )
}
