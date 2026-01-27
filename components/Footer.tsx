import { APP_NAME } from "@/lib/constants"
const Footer = () => {
    const currentyear = new Date().getFullYear()
  return (
    <footer className="border-t">
      <div className="p-5 flex-center font-bold">
        {APP_NAME}{currentyear}. All Rights Reserved
      </div>
    </footer>
  )
}

export default Footer
