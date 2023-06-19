import { PayPalButtons } from '@paypal/react-paypal-js'
import { useMutation } from '@tanstack/react-query'
import React from 'react'
import { useState } from 'react'
import { updatePayment } from '../../api/payment.api'
import { useNavigate } from 'react-router-dom'

export default function PayPalButton({ payment }) {
  // const [paidFor, setPaidFor] = useState(false)
  const [error, setError] = useState(null)

  const update = useMutation({
    mutationFn: (body) => updatePayment(body)
  })

  const navigate = useNavigate()
  const IDPayment = {
    _id: payment._id
  }
  const handleApprove = (orderID) => {
    // call back end
    // if response is success
    update.mutate(IDPayment, {
      onSuccess: (data) => {
        console.log(data)
        // setPaidFor(true)
        navigate('/paymentsuccess')
        // toast(data.data?.message)
      },
      onError: (error) => {
        console.log(error)
      }
    })
  }
  // if (paidFor) {
  //   alert('thanh toán thành công')
  // }
  if (error) {
    alert('thanh toán thất bại')
  }
  return (
    <div>
      <PayPalButtons
        style={{ color: 'gold' }}
        createOrder={(data, actions) => {
          return actions.order.create({
            purchase_units: [
              {
                description: payment.requestID.postID.title,
                amount: {
                  value: payment.totalPrice
                }
              }
            ]
          })
        }}
        onApprove={async (data, actions) => {
          const order = await actions.order.capture()
          console.log(order)
          handleApprove(data.orderID)
        }}
        onError={(err) => {
          setError(err)
          console.log(err)
        }}
      />
    </div>
  )
}
