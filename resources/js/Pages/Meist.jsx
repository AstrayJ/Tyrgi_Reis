import "../../css/app.css";
import { useEffect } from "react";


export default function Meist() {

    useEffect(()=>{

        


        const osad = [
            document.querySelector("#tegelane1"),
            document.querySelector("#tegelane2"),
            document.querySelector("#tegelane3"),
            
        ]

        function callBackFunction(entries) {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add("loaded")
                    console.log("entered")
                }
            });
        }
        const observer = new IntersectionObserver(callBackFunction, {})
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
                    <div id="tegelane1" className="kastid2">
                        <div>
                        
                        <h3 style={{fontSize: "36px", lineHeight: "1.16", whiteSpace: "pre-wrap"}}>Frank Richard Armin Kolk on professionaalne andmebaasi haldur. Pole talle palka maksta. </h3>
                        </div>
                        <div style={{marginLeft: "15%"}}>
                            <img src="https://wallpapercave.com/wp/wp5554098.jpg"></img>
                        </div>
                    </div>
                    <div id="tegelane2" className="kastid2" >
                        <div style={{marginLeft: "15%"}}>
                            <img src="https://jalgpall.ee/images/players/dc309d41565000b4de08f7ef0e5d6273"></img>
                        </div>
                        <div>
                        
                        <h3 style={{fontSize: "36px", lineHeight: "1.16", whiteSpace: "pre-wrap"}}>Karl Erik Lehtma on tipptasemel <i>frontend</i> 'i programmeerija. Palka ta selle eest veel ei saa. </h3>
                        </div>
                        
                    </div>
                    <div id="tegelane3" className="kastid2" >
                        <div>
                        
                        <h3 style={{fontSize: "36px", lineHeight: "1.16", whiteSpace: "pre-wrap"}}>Jarl Justus Hellat on professionaalne <i>backend</i> 'i programmeerija. Palka ta selle eest ei tohiks saada. Kunagi.</h3>
                        </div>
                        <div style={{marginLeft: "15%", width: "120%", height:"120%"}}>
                            <img style={{marginLeft: "15%", width: "60%", height:"60%"}} src="data:image/jpeg;base64,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"></img>
                        </div>
                        <button className="nupp" onClick={()=>window.location.href = "/"}>Tagasi</button>
                    </div>

                    
                    
                </div>
            </div>
        </>
    )
};

