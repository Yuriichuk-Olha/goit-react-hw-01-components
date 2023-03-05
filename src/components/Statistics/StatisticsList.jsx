import Statistics from "./Statistics";

// function getRandomHexColor() {
//     let bgColor = `#${Math.floor(Math.random() * 16777215).toString(16)}`;
//     return bgColor;
// }

//   <li 
//                     style={{
//                     backgroundColor:getRandomHexColor() 
//                     }}> </li>

export default function StatisticsList({stats}) {
    // console.log(stats);
    return (
        <div>
                {stats.map(stats=>(
                   <li key={stats.id}> 
                  
                  
                    <Statistics                    
                    id={stats.id}
                    label={stats.label}
                    percentage={stats.percentage}
                    />
                
                </li>
                )
                )}
        </div>
        )
    
}
