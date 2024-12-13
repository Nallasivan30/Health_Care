import React from 'react'
import Layout from '@/components/layout'
import Tables from '@/components/Tables'
import Admin from '@/components/Admin'
import SearchBox from '@/components/Searchbox'

const page = () => {

  const headData =['SNo','UserId','Username','Date_of_Birth','Email','Phone_no','Status','User_Group']
  const bodyData =[
    {SNo: '1',UserId:'Loya12',Username:'Loya',Date_of_Birth:'4/11/98',Email:'loyq@gmail.com',Phone_no:'9876543210',Status:'active',User_Group:'Nurse_Ge'},
    {SNo: '2',UserId:'Loya13',Username:'Loyad',Date_of_Birth:'4/10/98',Email:'loys@gmail.com',Phone_no:'9876543210' ,Status:'active',User_Group:'Nure_Ge'},
    {SNo: '3',UserId:'Loya14',Username:'Loyas',Date_of_Birth:'4/09/98',Email:'loyr@gmail.com',Phone_no:'9876543210',Status:'active',User_Group:'Nurse_e'},
    {SNo: '4',UserId:'Loya12',Username:'Loya',Date_of_Birth:'4/11/98',Email:'loyq@gmail.com',Phone_no:'9876543210',Status:'active',User_Group:'Nurse_Ge'},
    {SNo: '5',UserId:'Loya13',Username:'Loyad',Date_of_Birth:'4/10/98',Email:'loys@gmail.com',Phone_no:'9876543210' ,Status:'active',User_Group:'Nure_Ge'},
    {SNo: '6',UserId:'Loya14',Username:'Loyas',Date_of_Birth:'4/09/98',Email:'loyr@gmail.com',Phone_no:'9876543210',Status:'active',User_Group:'Nurse_e'},
    {SNo: '7',UserId:'Loya12',Username:'Loya',Date_of_Birth:'4/11/98',Email:'loyq@gmail.com',Phone_no:'9876543210',Status:'active',User_Group:'Nurse_Ge'},
    {SNo: '8',UserId:'Loya13',Username:'Loyad',Date_of_Birth:'4/10/98',Email:'loys@gmail.com',Phone_no:'9876543210' ,Status:'active',User_Group:'Nure_Ge'},
    {SNo: '9',UserId:'Loya14',Username:'Loyas',Date_of_Birth:'4/09/98',Email:'loyr@gmail.com',Phone_no:'9876543210',Status:'active',User_Group:'Nurse_e'}]

  return (
    <Layout>
        <div className='min-h-screen bg-[#ceddff] p-6'>
            {/* Header Section */}
            <div className="flex items-center justify-between mb-4">
                <h1 className="text-xl font-bold text-[#004a87]">User Config</h1>
                <Admin />{/* This is the Admin component */}
            </div>

            {/* Horizontal Line */}
            <hr className="border-t border-white mb-6" />
            {/* search bar */}
            <div className='mb-6'>
                <SearchBox/>
            </div>
            {/* tables */}
            <Tables headData={headData} bodyData={bodyData} />


        </div>
    </Layout>
  )
}

export default page
