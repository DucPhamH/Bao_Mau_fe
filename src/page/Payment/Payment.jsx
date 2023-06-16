import { useQuery } from '@tanstack/react-query'
import React from 'react'
import { useParams } from 'react-router-dom'
import { getPayment } from '../../api/payment.api'

export default function Payment() {
  const { id } = useParams()
  console.log(id)
  const { data } = useQuery({
    queryKey: ['payment', id],
    queryFn: () => {
      return getPayment(id)
    }
  })
  const payment = data?.data.data
  console.log(payment)
  return (
    <div>
      {payment && (
        <div>
          <div>{payment.count}</div>
          <div>{payment.totalPrice}</div>
        </div>
      )}
    </div>
  )
}
