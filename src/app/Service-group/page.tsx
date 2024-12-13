import React from 'react'
import Layout from '@/components/layout'
import { Button } from '@/components/ui/button'
import Admin from '@/components/Admin'
import Tables from '@/components/Tables'
type BodyDataItem = {
  SNo: number;
  Menuname: string;
  Username: string;
  Transaction_Red_Id: string;
  Transaction_Status: string;
  Start_time: string;
  End_time: string;
  Action: string;
};

const page = () => {
  const headData =['SNo','Menuname','Username','Transaction_Red_Id','Transaction_Status','Start_time','End_time','Action']
  const bodyData: BodyDataItem[] = [
    {SNo:1,Menuname:'OP Invoice',Username:'Mahatha',Transaction_Red_Id:'ADC342',Transaction_Status:'Released',Start_time:'10/11/2024 (11:04)',End_time:'10/11/2024 (21:23)',Action:'|'},
    {SNo:2,Menuname:'OP Invoice',Username:'Maha',Transaction_Red_Id:'ADC342',Transaction_Status:'Not Released',Start_time:'10/11/2024 (11:04)',End_time:'10/11/2024 (21:23)',Action:'|'},
    {SNo:3,Menuname:'OP voice',Username:'Riki',Transaction_Red_Id:'ADC342',Transaction_Status:'Released',Start_time:'10/11/2024 (11:04)',End_time:'10/11/2024 (21:23)',Action:'|'},
    {SNo:4,Menuname:'OP Invoice',Username:'MR.D',Transaction_Red_Id:'ADC342',Transaction_Status:'Released',Start_time:'10/11/2024 (11:04)',End_time:'10/11/2024 (21:23)',Action:'|'},
    {SNo:5,Menuname:'OP Invoice',Username:'Varun',Transaction_Red_Id:'ADC342',Transaction_Status:'Not Released',Start_time:'10/11/2024 (11:04)',End_time:'10/11/2024 (21:23)',Action:'|'},
    {SNo:6,Menuname:'OP Invoice',Username:'Magi',Transaction_Red_Id:'AD5342',Transaction_Status:'Released',Start_time:'10/11/2024 (11:04)',End_time:'10/11/2024 (21:23)',Action:'|'},
    {SNo:7,Menuname:'OP voice',Username:'Jai',Transaction_Red_Id:'ADC342',Transaction_Status:'Released',Start_time:'10/12/2024 (11:04)',End_time:'10/11/2024 (21:23)',Action:'|'},
    {SNo:8,Menuname:'OP Invoice',Username:'Suba',Transaction_Red_Id:'ADC342',Transaction_Status:'Released',Start_time:'20/11/2024 (11:04)',End_time:'10/11/2024 (21:23)',Action:'|'},
    {SNo:9,Menuname:'OP Invoice',Username:'Anu',Transaction_Red_Id:'ADC342',Transaction_Status:'Released',Start_time:'20/11/2024 (10:44)',End_time:'10/11/2024 (21:23)',Action:'|'},
    {SNo:10,Menuname:'P Invoice',Username:'Dany',Transaction_Red_Id:'ADC442',Transaction_Status:'Not Released',Start_time:'10/01/2024 (09:04)',End_time:'10/11/2024 (21:23)',Action:'|'},
    {SNo:11,Menuname:'IP Invoice',Username:'Mahatha',Transaction_Red_Id:'uDC342',Transaction_Status:'Not Released',Start_time:'10/11/2024 (12:04)',End_time:'10/11/2024 (21:23)',Action:'|'},
    ]
  
    const formattedHeadData = headData.map(header => header.replace(/_/g, ' '));

// Replace underscores with spaces in keys of bodyData
  const formattedBodyData = bodyData.map((item) => {
    const formattedItem: Record<string, any> = {};
    Object.keys(item).forEach((key) => {
      const newKey = key.replace(/_/g, " ");
      formattedItem[newKey] = item[key as keyof BodyDataItem];
    });
    return formattedItem;
  });

// Logging results
// console.log('Formatted Head Data:', formattedHeadData);
// console.log('Formatted Body Data:', formattedBodyData);
  return (
    <Layout>
      <div className='min-h-screen bg-[#ceddff] p-6'>
        {/* Header Section */}
      <div className="flex items-center justify-between mb-4">
        <h1 className="text-xl font-bold text-[#004a87]">User Session</h1>
        <Admin />{/* This is the Admin component */}
      </div>

      {/* Horizontal Line */}
      <hr className="border-t border-white mb-6" />

      {/* Buttons Section */}
      <div className="flex justify-end mb-6 space-x-3 ">
        <Button className="bg-[#004a87] text-[18px] text-white hover:bg-[#003970]">Reset</Button>
        <Button className="bg-white text-[18px] text-[#006dc2] border border-[#006dc2]">Clear</Button>
        <Button className="bg-[#d32929] text-[18px] text-white">Exit</Button>
      </div>
      {/* from to box */}
      <div className="my-6 p-6 bg-[#a9beee] rounded-lg flex flex-col justify-start gap-8">
        <div className='flex gap-6 '>
            {/* from date to date */}
            <div className="mb-4 flex gap-2">
                <label className="block text-white mb-1">From Date</label>
                <input className=" h-6  w-16 px-3 rounded-md border border-white bg-white"/>
            </div>

            <div className="mb-4 flex gap-2">
                <label className="block text-white mb-1">To Date</label>
                <input className=" h-6  w-16 px-3 rounded-md border border-white bg-white"/>
            </div>

        </div>

        <div className="flex space-x-4 mb-4">
          <div className="flex-1">
            <label className="block text-white mb-1">Menu Name</label>
            <input
              type="text"
              className="w-full h-10 px-3 rounded-md border border-white bg-white"
            />
          </div>
          <div className="flex-1">
            <label className="block text-white mb-1">User Name</label>
            <input
              type="text"
              className="w-full h-10 px-3 rounded-md border border-white bg-white"
            />
          </div>
          <div className="flex-1">
            <label className="block text-white mb-1">Transaction Ref Id</label>
            <input
              type="text"
              className="w-full h-10 px-3 rounded-md border border-white bg-white"
            />
          </div>
        </div>
      </div>
      {/* Tables */}
        <Tables headData={formattedHeadData} bodyData={formattedBodyData} />
      </div>
    </Layout>
  )
}

export default page
