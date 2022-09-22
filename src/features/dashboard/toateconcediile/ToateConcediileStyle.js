import { RingVolumeTwoTone } from "@material-ui/icons"

const ToateConcediileStyle = () => {
  return {
    Parinte: {
      width: '100%',
      backgroundColor: 'rgba(100, 24, 195, 0.960)',
      display: 'auto',
      borderRadius: '15px 0px 0px 0px',
      color: 'white'
    },
    Tabel: {
      marginTop: '11px',
      boxShadow: '#B2BEB5 3px 3px 0px 0px',
      borderRadius: '15px 15px 15px 15px'
    },
    Rows: {
      '&:nth-of-type(even)': {
        backgroundColor: 'rgba(100, 24, 195, 0.640)',

        color: 'rgb(233, 216, 218)'
      },

      '&:nth-of-type(odd)': {
        color: 'inherit',
        
        backgroundColor: 'rgb(100, 24, 195, 0.10)'
      }
    },
    Cell: {
      alignItems: 'left',
      textAlign:'center',
      color: 'inherit'
    },
    Background: {
      with: '100%',
      height: '100%'
    },
    CF: {
      display: 'flex'
    },
    Footer: {
      backgroundColor: 'rgba(100, 24, 195, 1)',
      color: 'white',
      height: '60px'
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
    Selects:{
        backgroundColor:'lightgray',
        width:'50px'
    },
    RopLabel:{
       fontSize:'18.5px',

    },
    CText:{
        textAlign:'right',
       color:'lightgray',
       fontSize:'18.5px'
    }
  }
}
export default ToateConcediileStyle
