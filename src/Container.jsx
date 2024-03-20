import Main from "./Main";
import Adbox from "./Adbox";




function Container({ data }) {

    return (

        <div className="container flexbox">
            <Adbox clname="adbox" idname="adbox1" />

            <Main data={data} />

            <Adbox clname="adbox" idname="adbox2" />
        </div>

    );

}

export default Container;