import { Link } from "react-router-dom"

export const DrawerItem = ({link, titulo, imagen}) => {
  return (
    <li>
        <Link to={link} className="hover:text-accent-100 flex items-center p-2 text-gray-900 rounded-lg  hover:bg-gray-700 group">
            {imagen}
            <span className="ms-3 whitespace-nowrap">{titulo}</span>
        </Link>
    </li>
  )
}
