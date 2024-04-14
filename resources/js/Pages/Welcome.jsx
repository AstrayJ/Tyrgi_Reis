import "../../css/app.css";
import { useState } from "react";


export default function Welcome() {
    
    const pildid = [<img width="466px" height="1000px" src="https://cf.bstatic.com/xdata/images/hotel/max1024x768/140593727.jpg?k=f8f51a16aecdd74b84cd793519da03d5e94b72b80d600cd87cbf4abb6291688c&o=&hp=1"></img>, 
                <img width="466px" height="1000px" src="https://cf.bstatic.com/xdata/images/hotel/max1024x768/140593657.jpg?k=817afbe7f210705d6176eca079a5ebb0017a0b35e7bc365858ad63969174dd49&o=&hp=1"></img>,
                <img width="466px" height="1000px" src="https://cf.bstatic.com/xdata/images/hotel/max1024x768/140593652.jpg?k=c5140c7cc5d889ac9328e23d6aaa9cf0f9b3ef867b9df77174ce108436240958&o=&hp=1"></img>,
                <img width="466px" height="1000px" src="https://cf.bstatic.com/xdata/images/hotel/max1024x768/140593680.jpg?k=ff3c4ac3899232d2701103315939382d850381c057215787a5d7e08637591756&o=&hp=1"></img>,
                <img width="466px" height="1000px" src="https://cf.bstatic.com/xdata/images/hotel/max1024x768/140593723.jpg?k=c4115f54063c069c117ed21ef24646def322a9d92cb5d2698bdd5e21bfc3bf19&o=&hp=1"></img>,
                <img width="466px" height="1000px" src="https://cf.bstatic.com/xdata/images/hotel/max1024x768/140199287.jpg?k=ccdeec122d9966003a9d78a31d6e46fefcd37daee08aaf7de485df141d5b7403&o=&hp=1"></img>,
                <img width="466px" height="1000px" src="https://cf.bstatic.com/xdata/images/hotel/max1024x768/140593576.jpg?k=dd53ec036236530d40f67c8223c29132ccba6eefe3b5fa0aa9c5cc1c302ffbaa&o=&hp=1"></img>,
                ]

    const [count, setCount] = useState(0)

    



    return (
        <>
            <div>
                <svg style={{position: "sticky"}} id="visual" viewBox="0 0 800 170" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1"><rect x="0" y="0" width="900" height="600" fill="#FA7268"></rect><path d="M0 173L21.5 178C43 183 86 193 128.8 194.2C171.7 195.3 214.3 187.7 257.2 187.2C300 186.7 343 193.3 385.8 192.7C428.7 192 471.3 184 514.2 177.5C557 171 600 166 642.8 173.3C685.7 180.7 728.3 200.3 771.2 204.3C814 208.3 857 196.7 878.5 190.8L900 185L900 0L878.5 0C857 0 814 0 771.2 0C728.3 0 685.7 0 642.8 0C600 0 557 0 514.2 0C471.3 0 428.7 0 385.8 0C343 0 300 0 257.2 0C214.3 0 171.7 0 128.8 0C86 0 43 0 21.5 0L0 0Z" fill="#fa7268"></path><path d="M0 138L21.5 142.8C43 147.7 86 157.3 128.8 154.8C171.7 152.3 214.3 137.7 257.2 139.5C300 141.3 343 159.7 385.8 158.8C428.7 158 471.3 138 514.2 128.3C557 118.7 600 119.3 642.8 123.3C685.7 127.3 728.3 134.7 771.2 135.8C814 137 857 132 878.5 129.5L900 127L900 0L878.5 0C857 0 814 0 771.2 0C728.3 0 685.7 0 642.8 0C600 0 557 0 514.2 0C471.3 0 428.7 0 385.8 0C343 0 300 0 257.2 0C214.3 0 171.7 0 128.8 0C86 0 43 0 21.5 0L0 0Z" fill="#ef5f67"></path><path d="M0 150L21.5 150.3C43 150.7 86 151.3 128.8 149.8C171.7 148.3 214.3 144.7 257.2 143.2C300 141.7 343 142.3 385.8 143.2C428.7 144 471.3 145 514.2 141C557 137 600 128 642.8 130.5C685.7 133 728.3 147 771.2 153.2C814 159.3 857 157.7 878.5 156.8L900 156L900 0L878.5 0C857 0 814 0 771.2 0C728.3 0 685.7 0 642.8 0C600 0 557 0 514.2 0C471.3 0 428.7 0 385.8 0C343 0 300 0 257.2 0C214.3 0 171.7 0 128.8 0C86 0 43 0 21.5 0L0 0Z" fill="#e34c67"></path><path d="M0 110L21.5 106C43 102 86 94 128.8 89.3C171.7 84.7 214.3 83.3 257.2 84.5C300 85.7 343 89.3 385.8 87.7C428.7 86 471.3 79 514.2 75.8C557 72.7 600 73.3 642.8 75.7C685.7 78 728.3 82 771.2 85C814 88 857 90 878.5 91L900 92L900 0L878.5 0C857 0 814 0 771.2 0C728.3 0 685.7 0 642.8 0C600 0 557 0 514.2 0C471.3 0 428.7 0 385.8 0C343 0 300 0 257.2 0C214.3 0 171.7 0 128.8 0C86 0 43 0 21.5 0L0 0Z" fill="#d53867"></path><path d="M0 37L21.5 39.3C43 41.7 86 46.3 128.8 45.2C171.7 44 214.3 37 257.2 33.5C300 30 343 30 385.8 34.7C428.7 39.3 471.3 48.7 514.2 48C557 47.3 600 36.7 642.8 38.8C685.7 41 728.3 56 771.2 63.7C814 71.3 857 71.7 878.5 71.8L900 72L900 0L878.5 0C857 0 814 0 771.2 0C728.3 0 685.7 0 642.8 0C600 0 557 0 514.2 0C471.3 0 428.7 0 385.8 0C343 0 300 0 257.2 0C214.3 0 171.7 0 128.8 0C86 0 43 0 21.5 0L0 0Z" fill="#c62368"></path></svg>
                <div className="riba">
                    <button className="nupp" >Meist</button>
                    <button className="nupp">Ajakava</button>
                    <button className="nupp">...</button>
                    
                </div>
                
                
                <div>
                    <h6 className="pealkiri">Türgi reis</h6>
                </div>


                <div className="kastid">
                    
                    <div className="kirjeldus">
                        <h6 style={{fontSize: "40px", marginTop: "40px", marginBottom: "40px"}}>REISI KIRJELDUS</h6>
                        <ul style={{listStyleType: "circle", whiteSpace: "pre-wrap"}}>
                            <li>asdf</li>
                            <li>dhsdfg asdfasdfasdf asdfasdf asddfgfdhdfgh rag sdh sthh assf asdf asdfasdf sdfgg sdfg sdfg sdf g</li>
                            <li>dffsdf</li>
                        </ul>


                    </div>
                    
                    
                    <div className="inimesed">
                        <h6 style={{fontSize: "40px", marginTop: "40px", marginBottom: "40px"}}>KES TULEVAD🤷‍♀️🙈🙊</h6>
                        <div className="tulijad">

                            <div className="madis" style={{rotate: "4deg", borderRadius: "8px"}}>
                                <img className="madisepilt" src="https://f9.pmo.ee/Kt9pCrKOsGZ_O7w5qBqtu4Crbe4=/685x0/nginx/o/2009/08/27/227195t1h2cad.jpg"></img>
                                <h1 className="pilditekst1">Kirjeldus??</h1>
                            </div>

                            <div className="villu" style={{ position: "absolute", top: "10%", left: "30%", rotate: "-4deg" }}>
                                <img className="madisepilt" src="https://real.edu.ee/wp-content/uploads/2018/10/Villu-Raja_2.jpg"></img>
                                <h1 className="pilditekst2">Kirjeldus?</h1>
                            </div>

                            <div className="suvaline" style={{ position: "absolute", top: "20%", left: "40%", rotate: "-4deg" }}>
                                <img className="madisepilt" src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_640.png"></img>
                                <h1 className="pilditekst2">Kirjeldus?</h1>
                            </div>
                        </div>

                    </div>

                </div>
                <h6 style={{fontSize: "40px", marginTop: "40px", textAlign: "center", justifyContent: "center"}}>HOTELL</h6>
                <div className="pildikast">
                    <div  onClick={() => {
                        if (count > pildid.length -1 ) {
                            setCount(0)
                        } 
                        
                        if (count === 0) {
                            setCount(pildid.length -1)
                        }
                        else {setCount(count -1)}
                        console.log(count)

                    }}>
                        <button>
                            <svg id="arrow" xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 50 50">
                                <polygon points="0,25 40,0 40,12.5 50,12.5 50,37.5 40,37.5 40,50" fill="none" stroke="#000" stroke-width="5"/>
                            </svg>
                        </button>
                  
                    </div>
                
                    
                    
                    <div className="pildid">{pildid[count]}</div>
                    
                    <div onMo onClick={() => {
                        if (count === pildid.length -1 ) {
                            setCount(0)
                        } else {setCount(count +1)}
                        console.log(count)

                    }}>
                        <button>
                            <svg id="arrow" xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 50 50">
                                <polygon points="50,25 10,0 10,12.5 0,12.5 0,37.5 10,37.5 10,50" fill="none" stroke="#000" stroke-width="5"/>
                            </svg>
                        </button> 
                    </div>
                </div>
                


            </div>
  
        </>
    );
}
