import { px } from "motion/react";
import { useState } from "react";

interface AspectRatioProps {
    aspectRatio : number[]
    setAspectRatio : any//(ratio : number[]) => void;
}


const AspectRatio = ({aspectRatio , setAspectRatio} : AspectRatioProps) => {

    const [selected , setSelected] = useState(1);

    const data = [
        {
            title : "Square",
            ratio : "1:1",
            id : 0,
            width : "30px",
            height : "30px"
        },
        {
            title : "Horizontal",
            ratio : "16:9",
            id : 1,
            width : "40px",
            height : "30px"
        },
        {
            title : "Vertical",
            ratio : "9:16",
            id : 2,
            width : "25px",
            height : "30px"
        },
    ]

  return (
    <div className="flex space-x-4 mt-4">
        {
            data.map((v,_)=>(
                <button key={_} onClick={()=>setSelected(v.id)} type="button" className="flex flex-col">
                    <div className={`flex flex-col items-center rounded-md p-3 border ${selected===v.id?"bg-gradient-to-r from-indigo-600 to-purple-500" : "bg-transparent"} transition-all duration-300`}>
                        <div style={{
                            width : v.width,
                            height : v.height
                        }} className="rounded-md border-2 border-gray-300  bg-[#121212] bg-gradient-to-r "></div>
                        
                    </div>
                    <div className={`flex flex-col bg-gradient-to-r ${selected===v.id?"bg-gradient-to-r from-indigo-600 to-purple-500 text-transparent bg-clip-text" : "bg-transparent text-gray-200"} transition-all duration-300 text-center`}>
                        <span>{v.title}</span>
                        <span>{v.ratio}</span>
                    </div>
                </button>
            ))
        }
    </div>
  )
}

export default AspectRatio;