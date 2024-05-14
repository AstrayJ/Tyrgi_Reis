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
                        
                        <h3 style={{fontSize: "36px", lineHeight: "1.16", whiteSpace: "pre-wrap"}}>Frank Richard Armin Kolk on  .</h3>
                        </div>
                        <div style={{marginLeft: "15%"}}>
                            <img src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png"></img>
                        </div>
                    </div>
                    <div id="tegelane2" className="kastid" >
                        <div style={{marginLeft: "15%"}}>
                            <img src="https://jalgpall.ee/images/players/dc309d41565000b4de08f7ef0e5d6273"></img>
                        </div>
                        <div>
                        
                        <h3 style={{fontSize: "36px", lineHeight: "1.16", whiteSpace: "pre-wrap"}}>Karl Erik Lehtma on tipptasemel <i>frontend</i> 'i programmeerija. Palka ta selle eest veel ei saa. </h3>
                        </div>
                        
                    </div>
                    <div id="tegelane3" className="kastid" >
                        <div>
                        
                        <h3 style={{fontSize: "36px", lineHeight: "1.16", whiteSpace: "pre-wrap"}}>Jarl Justus Hellat on professionaalne <i>backend</i> 'i programmeerija. Palka ta selle eest ei tohiks saada. Kunagi.</h3>
                        </div>
                        <div style={{marginLeft: "15%"}}>
                            <img src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png"></img>
                        </div>
                    </div>

                    <div style={{opacity: 0.5, width: "300px"}}><button onClick={()=>window.location.href = route("Welcome")}>Tagasi</button></div>
                    
                </div>
            </div>
        </>
    )
};

