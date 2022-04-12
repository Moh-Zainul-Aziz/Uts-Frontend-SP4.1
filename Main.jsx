import { useState } from "react";
import './CSS/Main.css';

const Main=(props) =>{
    const [test,setTes] = useState(0);
    let x = 0

    const tambah = () => {
        setTes((test) => test + 1)
        x = x + 1

        console.log('usetate =' +test);
        console.log('variabel' +x);
    }
    const kurang = () => {
        setTes((test) => test - 1)
        x = x - 1
        
        console.log('usetate =' -test);
        console.log('variabel' -x);
    }
    return(
        <div>
            <div className="blog-wrap">
                <div class="container mt -5">
                    <div className="row">
                        <div className="col-md-3 col-sm-6">
                            <div className="card">
                                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS42zOIXBVAgZ2b7p_AeVa05hzPMe1vC4i1pg&usqp=CAU" alt=""/>
                                <div className="card-body">
                                    <p>{props.tanggal}</p>
                                    <p>{props.judul}</p>
                                    <h5>{props.summary}</h5>
                                    <a href="#" className="btn btn-primary">request tutorial ini</a>
                                </div>
                                <div className="counter">
                                    <input type="text" value={test}/>
                                    <button className="plus" onClick={tambah}>+</button>
                                    <button className="minus" onClick={kurang}>-</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Main