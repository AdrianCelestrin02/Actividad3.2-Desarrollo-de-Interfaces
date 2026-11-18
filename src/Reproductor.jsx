function Reproductor(){
    return(
        <>
        <section className="reproductor">

  <div className="fila">
    <button>⏹</button>
    <input type="range" />
    <button>🔊</button>
  </div>

  <div className="fila panel">
    <input type="range" />
    <button>⏪</button>
    <button>▶</button>
    <button>⏩</button>
    <span>🔊</span>
  </div>

</section>
        </>
    )

}
export default Reproductor