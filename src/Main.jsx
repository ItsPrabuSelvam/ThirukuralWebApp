import MainError from "./MainError";
import MainSlowNetwork from "./MainSlowNetwork";
import MainStart from "./MainStart";
import MainSuccess from "./MainSuccess";



function Main({ data }) {
    if (data !== null && data !== "error" && data !== "start") {
        return (
            <MainSuccess data={data} />
        );
    } else if (data === "error") {
        return (
            <MainError />
        );
    } else if (data === "start") {
        return (
            <MainStart />
        );
    } else {
        return (
            <MainSlowNetwork />
        );
    }
};



export default Main;
