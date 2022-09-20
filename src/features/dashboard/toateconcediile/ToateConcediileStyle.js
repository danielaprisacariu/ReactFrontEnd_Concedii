const ToateConcediileStyle =() => {
return{
    Parinte:{
    
    width: '100%',
    backgroundColor : 'rgba(77, 13, 19, 0.616)',
    display: 'auto',
    borderRadius:"15px 0px 0px 0px",
    color:'rgb(233, 216, 218)'
    
},
Tabel:{
    boxShadow:"3px 3px 0px 0px",
    borderRadius:'15px 15px 15px 15px'
},
Rows:{

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
    alignItems:'left'
}
    
}
}
export default ToateConcediileStyle