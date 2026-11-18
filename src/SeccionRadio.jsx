import { useRef, useEffect } from 'react'

function SeccionCasillas() {
  const indeterminada = useRef(null)

  useEffect(() => {
    indeterminada.current.indeterminate = true
  }, [])

  return (
    <>
    <section className="radioSection">
      <div>
        <label>
          <input type="checkbox" />
          not selected
        </label>

        <label>
          <input type="checkbox" defaultChecked />
          selected
        </label>

        <label>
          <input type="checkbox" ref={indeterminada} />
          indeterminate
        </label>
      </div>

      <div>
        <label>
          <input type="checkbox" />
          not selected
        </label>

        <label>
          <input type="checkbox" defaultChecked />
          selected
        </label>

        <label>
          <input type="checkbox" ref={indeterminada} />
          indeterminate
        </label>
      </div>
    </section>

    <div>
        <button className='btnAlejandroSanz'>ALEJANDRO SANZ</button>
    </div>
    </>
    
  )
}

export default SeccionCasillas