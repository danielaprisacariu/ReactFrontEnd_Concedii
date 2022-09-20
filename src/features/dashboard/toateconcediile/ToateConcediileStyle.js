const ToateConcediileStyle =() => {
return{
    Parinte:{
    
    width: '100%',
    backgroundColor : 'rgba(100, 24, 195, 0.960)',
    display: 'auto',
    borderRadius:"15px 0px 0px 0px",
    color:'#FFFFFF'
    
},
Tabel:{
    boxShadow:"#B2BEB5 3px 3px 0px 0px",
    borderRadius:'15px 15px 15px 15px'
},
Rows:{
    '&:nth-of-type(even)': {

        backgroundColor: 'rgba(100, 24, 195, 0.640)',

      color:'rgb(233, 216, 218)'

     

      },

      '&:nth-of-type(odd)':{

        color: 'rgba(77, 13, 19, 0.616)',

      backgroundColor:'rgb(100, 24, 195, 0.10)'

      }

   

},
Cell:{
    alignItems:'left',
    color: 'Inherit'
},
Header:{
    color:'#FFFFFF'
},
Background:{
    with:'100%',
    height:'100%',
}
    
}
}
export default ToateConcediileStyle