import { nth } from "ramda"

const HolidaysMenuStyle = ()=>{
  
    return{

        Header:{
        backgroundColor:'rgba(77, 13, 19, 0.616)',
        color:'rgb(233, 216, 218)',
        height:'60px',
        fontFamily: 'Tahoma,sans-serif',
          
         },
        Table:{
            borderRadius:'15px',
            boxShadow:'2px 2px 0 0'
         
         
        },
        HeaderRow:{
            height:'40px',
            fontSize:'20px'

        },
        Rows:{
            fontSize:'18px',
            height:'20px',
            '&:nth-of-type(even)': {
                backgroundColor: 'rgba(77, 13, 19, 0.616)',
              color:'rgb(233, 216, 218)'
             
              },
              '&:nth-of-type(odd)':{
                color: 'rgba(77, 13, 19, 0.616)',
              backgroundColor:'rgb(233, 216, 218)'
              
            }
              
            
        },
        Cell:{
            margin:'15px'
        }
  
    

     
       
}
}

export default HolidaysMenuStyle