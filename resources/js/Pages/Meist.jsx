import "../../css/app.css";
import { useEffect } from "react";


export default function Meist() {

    useEffect(()=>{

        const karussell = document.querySelector(".väline")
        const karussellElements = document.querySelectorAll(".karussell")
        let wasIntersecting = false

    


        function callBackFunction2(entries) {
            entries.forEach(entry => {
                if (!entry.isIntersecting && wasIntersecting) {
                    karussell.prepend(karussellElements[karussellElements.length -1])
                }
                wasIntersecting = entry.isIntersecting
            })
        }

        const observer1 = new IntersectionObserver(callBackFunction2, {rootMargin: "100px"})
        observer1.observe(karussellElements[0])


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
                        
                        <h3 style={{fontSize: "36px", lineHeight: "1.16", whiteSpace: "pre-wrap"}}>Tere! asdfdsf gggg ggggggg ggggggg gggggggg g gggggggggggggggg</h3>
                        </div>
                        <div style={{marginLeft: "15%"}}>
                            <img src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png"></img>
                        </div>
                    </div>
                    <div id="tegelane2" className="kastid2" >
                        <div style={{marginLeft: "15%"}}>
                            <img src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png"></img>
                        </div>
                        <div>
                        
                        <h3 style={{fontSize: "36px", lineHeight: "1.16", whiteSpace: "pre-wrap"}}>Tere! asdfdsf gggg ggggggg ggggggg gggggggg g gggggggggggggggg</h3>
                        </div>
                        
                    </div>
                    <div id="tegelane3" className="kastid2" >
                        <div>
                        
                        <h3 style={{fontSize: "36px", lineHeight: "1.16", whiteSpace: "pre-wrap"}}>Tere! asdfdsf gggg ggggggg ggggggg gggggggg g gggggggggggggggg</h3>
                        </div>
                        <div style={{marginLeft: "15%"}}>
                            <img src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png"></img>
                        </div>
                    </div>

                    <div id="tegelane4">

                        <div className="väline" style={{display: "flex"}}>
                            <div className="karussell" id="piltnr1">
                                <img style={{width: "100xp", height: "100px", marginLeft: "5%", marginBottom: "10%"}} src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png"></img>
                            </div>
                            <div className="karussell" id="piltnr2">
                                <img style={{width: "100xp", height: "100px", marginLeft: "5%", marginBottom: "10%"}} src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png"></img>
                            </div>
                            <div className="karussell" id="piltnr3">
                                <img style={{width: "100xp", height: "100px", marginLeft: "5%", marginBottom: "10%"}} src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png"></img>
                            </div>
                            <div className="karussell" id="piltnr4">
                                <img style={{width: "100xp", height: "100px", marginLeft: "5%", marginBottom: "10%"}} src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png"></img>
                            </div>
                            <div className="karussell" id="piltnr5">
                                <img style={{width: "100xp", height: "100px", marginLeft: "5%", marginBottom: "10%"}} src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png"></img>
                            </div>
                        </div>
                            
                            

                    </div>
                    
                </div>
            </div>
        </>
    )
};

