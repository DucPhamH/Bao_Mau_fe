import { useEffect, useState } from 'react'
export default function MessengerChat() {
  const [messengerChatSee, setMessengerChatSee] = useState(false)
  const [didMount, setDidMount] = useState(false)
  useEffect(() => {
    setDidMount(true)
  }, [])
  useEffect(() => {
    if (didMount) {
      var messengerRef = document.getElementById('fb-customer-chat')
      messengerRef.setAttribute('page_id', '103072292836193')
      messengerRef.setAttribute('attribution', 'biz_inbox')
      window.fbAsyncInit = function () {
        window.FB.init({
          xfbml: true,
          version: 'v17.0'
        })
      }
      ;(function (d, s, id) {
        var js,
          fjs = d.getElementsByTagName(s)[0]
        if (d.getElementById(id)) return
        js = d.createElement(s)
        js.id = id
        js.src = 'https://connect.facebook.net/ja_JP/sdk/xfbml.customerchat.js'
        fjs.parentNode.insertBefore(js, fjs)
      })(document, 'script', 'facebook-jssdk')
    }
  }, [messengerChatSee])

  window.addEventListener('click', () => setMessengerChatSee(true), { once: true })
  return (
    <div className='absolute'>
      <div id='fb-root'></div>
      <div id='fb-customer-chat' className='fb-customerchat'></div>
    </div>
  )
}
