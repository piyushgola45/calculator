function Showbox({show}){
    return <>
    <div className="row" style={{'backgroundColor':'lightYellow','fontSize':'30px'}}>
        <input type="text" readOnly value={show} style={{'textAlign':'right'}}></input>
    </div>
    </>
}
export default Showbox;