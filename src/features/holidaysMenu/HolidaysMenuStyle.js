import { findLastIndex } from 'lodash'
import { nth } from 'ramda'

const HolidaysMenuStyle = () => {
  return {
    Header: {
      backgroundColor: 'rgba(100, 24, 195, 1)',
      color: 'white',
      height: '60px'
    },
    Table: {
      marginTop:'11px',
      borderRadius: '15px',
      boxShadow: 'grey 5px 3px 0px 0px',
      overflow: 'hidden'
    },
    HeaderRow: {
      backgroundColor: 'inherit'
    },
    Rows: {
      fontSize: '18px',
      height: '20px',
      '&:nth-of-type(even)': {
        backgroundColor: 'rgba(100, 24, 195, 0.640)',
        color: '#FFFFFF'
      },
      '&:nth-of-type(odd)': {
        color: 'rgba(77, 13, 19, 0.916)',
        backgroundColor: 'rgba(100, 24, 195, 0.10)'
      }
    },
    Cell: {
      margin: '15px',
      backgroundColor: 'inherit',
      color: 'inherit',
      textAlign:'center'
    },
    BtnPrev: {
      width: '20px',
      aspectRatio: '1',
      backgroundColor: 'white',
      borderRadius: '15%',
      transform: 'rotate(45deg)',
      position: 'relative',
      margin: '10px 10px 10px 10px',
      '&:hover': {
        backgroundColor: 'lightgray'
      },
      '&:active': {
        backgroundColor: 'gray'
      }
    },
    CF: {
      display: 'flex'
    },
    BtnPrevCover: {
      width: '20px',
      aspectRatio: '1',
      backgroundColor: 'rgba(100, 24, 195, 1)',
      borderRadius: '15%',
      marginLeft: '5px',
      marginTop: '-5px',
      position: 'absolute',
      zIndex: '1'
    },
    Select:{
      width:'50px',
     backgroundColor: 'lightgray'
    
    },
    FBar: {
      width: '5.5px',
      aspectRatio: '0.2',
      backgroundColor: 'inherit',
      borderRadius: '15%',
      transform: 'rotate(-45deg)',
      position: 'absolute',
      marginLeft: '-5px',
      marginTop: '10px'
    },
    BtnNext: {
      width: '20px',
      aspectRatio: '1',
      backgroundColor: 'white',
      borderRadius: '15%',
      transform: 'rotate(-135deg)',
      position: 'relative',
      margin: '10px 10px 10px 10px',
      '&:hover': {
        backgroundColor: '#a8a89b'
      },
      '&:active': {
        backgroundColor: '#73736b'
      }
    },
    LBar: {
      width: '5.5px',
      aspectRatio: '0.2',
      backgroundColor: 'inherit',
      borderRadius: '15%',
      transform: 'rotate(135deg)',
      position: 'absolute',
      marginLeft: '-6px',
      marginTop: '10px'
    },
    Footer: {
      backgroundColor: 'rgba(100, 24, 195, 1)',
      color: 'white',
      height: '20px'
    },
    Clabel:{
      textAlign:'right',
      marginLeft:'00px',
      fontSize:'18.5px',
      color:'lightgrey',
   
    },
    CRV:{
      textAlign:'left'
    }

  }
}

export default HolidaysMenuStyle
