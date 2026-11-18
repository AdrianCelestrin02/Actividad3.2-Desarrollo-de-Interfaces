import ale from './assets/ale.jpg'

function InfoArtista(){
    return(
        <>
        <div className="infoArtista">
            <img src={ale} className='imgAle'/>
             <div className="lineas">
    <div className="linea" style={{ width: '100%' }}></div>
    <div className="linea" style={{ width: '70%' }}></div>
    <div className="linea" style={{ width: '100%' }}></div>
    <div className="linea" style={{ width: '55%' }}></div>
  </div>

        </div>
        </>
    )
}
export default InfoArtista