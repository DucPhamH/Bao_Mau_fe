import { useQuery } from '@tanstack/react-query'
import ContractedJob from '../../components/ContractedJob/ContractedJob'
import { getAllPostUserPayment } from '../../api/post.api'

export default function ContractedJobsList() {
  const { data } = useQuery({
    queryKey: ['getRequestPayment'],
    queryFn: () => {
      return getAllPostUserPayment()
    }
  })
  const postPayments = data?.data.data
  // console.log(postPayments)
  return (
    <div className='font-itim bg-[#DCEAFF] py-3'>
      <div className='mx-96'>
        <div className='bg-white rounded-xl text-center py-4 text-4xl'> Danh sách hoá đơn của tôi</div>
        <div className='mt-16 bg-white rounded-xl overflow-y-auto'>
          <div className='mx-9 py-8 h-[80rem]'>
            {postPayments &&
              postPayments.map((postPayment) => (
                <div key={postPayment._id}>
                  <ContractedJob postPayment={postPayment} pathName={`/payment/${postPayment._id}`} />
                </div>
              ))}
          </div>
        </div>
      </div>
    </div>
  )
}
