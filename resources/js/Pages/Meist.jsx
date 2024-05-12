import "../../css/app.css";
import { useEffect } from "react";


export default function Meist() {

    useEffect(()=>{
        const osad = [
            document.querySelector("#tegelane1"),
            document.querySelector("#tegelane2"),
            document.querySelector("#tegelane3")
        ]

        function callBackFunction(entries) {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add("loaded")
                    console.log("entered")
                }
            });
        }
        const observer = new IntersectionObserver(callBackFunction, {threshold: [0.5]})
        osad.forEach(osa => observer.observe(osa))

        return () => {
            osad.forEach(osa => observer.unobserve(osa))
        }

    }, []);



    return (
        <>
            <div>
                <h6 className="pealkiri">Meie</h6>
                <div style={{paddingRight: "20%", paddingLeft: "-20px",paddingTop: "10%"}}>
                    <div id="tegelane1" className="kastid">
                        <div>
                        
                        <h3 style={{fontSize: "36px", lineHeight: "1.16", whiteSpace: "pre-wrap"}}>Tere! asdfdsf gggg ggggggg ggggggg gggggggg g gggggggggggggggg</h3>
                        </div>
                        <div style={{marginLeft: "15%"}}>
                            <img src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png"></img>
                        </div>
                    </div>
                    <div id="tegelane2" className="kastid" >
                        <div style={{marginLeft: "15%"}}>
                            <img src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png"></img>
                        </div>
                        <div>
                        
                        <h3 style={{fontSize: "36px", lineHeight: "1.16", whiteSpace: "pre-wrap"}}>Tere! asdfdsf gggg ggggggg ggggggg gggggggg g gggggggggggggggg</h3>
                        </div>
                        
                    </div>
                    <div id="tegelane3" className="kastid" >
                        <div>
                        
                        <h3 style={{fontSize: "36px", lineHeight: "1.16", whiteSpace: "pre-wrap"}}>Tere! asdfdsf gggg ggggggg ggggggg gggggggg g gggggggggggggggg</h3>
                        </div>
                        <div style={{marginLeft: "15%"}}>
                            <img src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png"></img>
                        </div>
                    </div>
                    
                </div>
            </div>
        </>
    )
};

