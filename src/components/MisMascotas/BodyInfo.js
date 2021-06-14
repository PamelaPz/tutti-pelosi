

function BodyInfo() {
  return (
    <>
        <div className="wp_bodyInfo">
            <h1 className="titleMascotas">Mis Mascotas</h1>
            <div className="wp_showData">
                <input className="inputInfo" type="text" placeholder="TAG ID XXXXXXXXXXXXX" disabled/>
                <input className="inputInfo name" type="text" placeholder="NOMBRE MASCOTA" disabled/>
                <button className="btn btnShow">Ver</button>
                <button className="btn btnEdit">Edit</button>
            </div>
            <div className="wp_showData">
                <input className="inputInfo" type="text" placeholder="TAG ID XXXXXXXXXXXXX" disabled/>
                <input className="inputInfo name" type="text" placeholder="NOMBRE MASCOTA" disabled/>
                <button className="btn btnShow">Ver</button>
                <button className="btn btnEdit">Edit</button>
            </div>
            <div className="wp_showData">
                <input className="inputInfo" type="text" placeholder="TAG ID XXXXXXXXXXXXX" disabled/>
                <input className="inputInfo name" type="text" placeholder="NOMBRE MASCOTA" disabled/>
                <button className="btn btnShow">Ver</button>
                <button className="btn btnEdit">Edit</button>
            </div>
            <div className="wp_buttonNew"><button className="btn btnNewTg">Nuevo TAG</button></div>
        </div>
    </>
  );
}

export default BodyInfo;