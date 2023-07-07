import { useRef } from 'react'
export default function BGM() {
  let refAudio = useRef(null)
  function PlayMusic() {
    if (refAudio.current) refAudio.current.play()
  }
  let randomNum = Math.floor(Math.random() * 10)
  document.addEventListener('click', PlayMusic, { once: true })
  return (
    <div>
      <audio ref={refAudio} id='audio' loop>
        {
          {
            0: (
              <source
                src='https://docs.google.com/uc?export=download&id=1sPkG6t0LpAqNgb6k5tizjQQKipI6KS_b'
                type='audio/mpeg'
              />
            ),
            1: (
              <source
                src='https://docs.google.com/uc?export=download&id=1TmNrf3rATzn3f-ImeGJFZLscDbfn3SZ7'
                type='audio/mpeg'
              />
            ),
            2: (
              <source
                src='https://docs.google.com/uc?export=download&id=1D8qeuQ1ltb6FvVRlc5rOOfWYxEB0IZCC'
                type='audio/mpeg'
              />
            ),
            3: (
              <source
                src='https://docs.google.com/uc?export=download&id=1RCjvzt44rNptiT5SQ0LxCO0e1kHLx6gQ'
                type='audio/mpeg'
              />
            ),
            4: (
              <source
                src='https://docs.google.com/uc?export=download&id=1UnNzTptBcZaI9Bm80q3lN0HievUuo8ND'
                type='audio/mpeg'
              />
            ),
            5: (
              <source
                src='https://docs.google.com/uc?export=download&id=1ZFSGyv424UMGzWqeIqM9HJr8SxzR4liZ'
                type='audio/mpeg'
              />
            ),
            6: (
              <source
                src='https://docs.google.com/uc?export=download&id=1sRdeRlGCnxE2KsfY5U0l7NnuTDj3T0WL'
                type='audio/mpeg'
              />
            ),
            7: (
              <source
                src='https://docs.google.com/uc?export=download&id=1tdrvZjoWIiYdXeGSrRFsdUl19OSgpYVD'
                type='audio/mpeg'
              />
            ),
            8: (
              <source
                src='https://docs.google.com/uc?export=download&id=1nUmlp1zIJgDHlDMOrU17iuFyytX1vsFC'
                type='audio/mpeg'
              />
            ),
            9: (
              <source
                src='https://docs.google.com/uc?export=download&id=142zhhzfe-ZnlIi2hMQiukMUziHiyCfTB'
                type='audio/wav'
              />
            )
          }[randomNum]
        }
      </audio>
    </div>
  )
}
