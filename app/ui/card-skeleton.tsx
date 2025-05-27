
import { BtnLike } from "@/app/ui/btns";

import Link from "next/link";

export default function CardSkeleton() {
    return (
        <div className="card">    
             <div className="card-img-wrap" >
                <Link href={"#"}>
                    <img alt="placeholder" src={"./bakgnd.png"} className="bakgnd" />
                </Link>
            </div>        
                    
            <div className="card-caption">
                <ul className="card-detail-list">
                    <li key="card-link">
                        <Link href="" className="card-link">
                            <span style={{
                                display: "block",
                                width: "300px",
                                backgroundColor: "#ccc",
                                borderBottom: "1px solid #fff"
                            }}>&nbsp;</span>
                            <span style={{
                                display: "block",
                                width: "300px",
                                backgroundColor: "#ccc",
                                borderBottom: "1px solid #fff"
                            }}>&nbsp;</span>
                        </Link>
                    </li>
                    <li key="btn-buy">
                        <span style={{
                            display: "inline-block",
                            width: "100px",
                            backgroundColor: "#ccc"
                        }}>&nbsp;</span>
                    </li>                                    
                </ul>
                <div className="card-like">
                    <BtnLike />
                </div>
            </div>
        </div>
    );
}