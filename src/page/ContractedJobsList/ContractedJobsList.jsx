import ContractedJob from '../../components/ContractedJob/ContractedJob'

export default function ContractedJobsList() {
  return (
    <div className='font-itim bg-[#DCEAFF] py-3'>
      <div className='mx-16'>
        <div className='bg-white rounded-xl text-center py-4 text-4xl'> Danh sách hoá đơn của tôi</div>
        <div className='mt-16 bg-white rounded-xl'>
          <div className='mx-9 py-8 h-[80rem] overflow-y-auto'>
            <ContractedJob />
            <ContractedJob />
            <ContractedJob />
            <ContractedJob />
            <ContractedJob />
            <ContractedJob />
          </div>
        </div>
      </div>
    </div>
  )
}
