
const Admin = () => {
  return (
    <div className="flex items-center gap-5">
          
          <img
            src="/profile.png" // Replace with your image path
            alt=""
            className="w-10 h-10 rounded-sm border-[.5px] border-[#004a87]"
          />
          <div className="flex flex-col">
            <h2 className="text-lg font-bold text-[#004a87]">John Doe</h2>
            <div className="text-sm text-[#004a87]">
            <p className="font-bold">Admin Master</p>
            </div>
          </div>
    </div>
  )
}

export default Admin
