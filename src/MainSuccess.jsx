import Porul from "./Porul";



function MainSuccess({ data }) {

    const Author = "-திருவள்ளுவர்";

    return (

        <main>
            <p id="para">{`${data.paal}->${data.iyal}->${data.athigaram}`}</p>
            <div>
                <div className="kural-title">
                    குறள்
                    <p id="number">{data.number}</p>
                </div>
                <div className="kural">
                    <p>{data.line1}</p>
                    <p>{data.line2}</p>
                    <p className="author">{Author}</p>
                </div>
            </div>
            <div>
                <div className="porul-title">பொருள்</div>
                <div className="flexbox poruls">
                    <Porul urai={data.urai1} author={data.urai1Author} />
                    <Porul urai={data.urai2} author={data.urai2Author} />
                    <Porul urai={data.urai3} author={data.urai3Author} />
                </div>
            </div>
        </main>


    );
}


export default MainSuccess;