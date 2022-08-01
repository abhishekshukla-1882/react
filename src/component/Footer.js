export default function Footer(props){
console.log('totalamount',props.resettask)
    return(
        <div className="container">
            <div className="row mt-5">
                <div className="col-4">
                    <button className="btn btn-danger" onClick={()=>{props.resettask()}}>Reset</button>
                </div>
                <div className="col-4">
                    {props.newtotalamount}
                    <button className="btn btn-success">pay now</button>

                </div>
            </div>
        </div>
        )
}