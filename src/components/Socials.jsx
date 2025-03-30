// social data
import { FaInstagram, FaTwitter, FaYoutube } from 'react-icons/fa'
import { GrFacebookOption } from 'react-icons/gr'

export default function Socials() {
  return (
    <ul className="flex items-center justify-center gap-x-[30px]">
      <li>
        <a href="https://www.facebook.com/xjh0wx">
          <GrFacebookOption />
        </a>
      </li>
      <li>
        <a href="http://instagram.com/jhow.tattoos">
          <FaInstagram />
        </a>
      </li>
      <li>
        <a href="https://x.com/xjhowx_tech">
          <FaTwitter />
        </a>
      </li>
      <li>
        <a href="https://www.youtube.com/@jhow.tattoos?sub_confirmation=1">
          <FaYoutube />
        </a>
      </li>
    </ul>
  )
}
