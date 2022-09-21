

const Style = () => {
  
    return {
        Title: {
        width: '20',
        height: '64px',
        fontFamily: 'Cairo',
        fontStyle: 'normal',
        fontWeight: '700',
        fontSize: '34px',
        lineHeight: '64px',
        color: '#202020'},

         label: {
            marginTop: '25px',
            width: '334px',
            height: '22px',
        
            fontFamily: 'Open Sans',
            fontStyle: 'normal',
            fontWeight: '700',
            fontSize: '16px',
            lineHeight: '22px',
           
        
            letterpacing: '1px',
        
            color: '#C7C7C7',
            
          },
        
          box: {
            marginTop: '12px',
            boxSizing: 'border-box',
        
            width: '350px',
            height: '60px',
            justifyContent: 'center',
        
            border: '1px solid #C2C2C2',
            borderRadius: '14px',
            
          },

          halfbox: {
            marginTop: '12px',
            boxSizing: 'border-box',
        
            width: '175px',
            height: '60px',
            justifyContent: 'center',
        
            border: '1px solid #C2C2C2',
            borderRadius: '14px',
            
          },

          bigbox: {
            marginTop: '12px',
            boxSizing: 'border-box',
        
            width: '1000px',
            height: '300px',
        
            border: '1px solid #C2C2C2',
            borderRadius: '14px'
          },

          date: {
            width: '140px',
            height: '22px',
      
            fontFamily: 'Open Sans',
            fontStyle: 'normal',
            fontWeight: '700',
            fontSize: '16px',
            lineHeight: '22px',
           
      
            letterSpacing: '1px',
      
            color: '#C7C7C7',
            marginBottom: '15px'
          },

          pag: {
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'spaceBetween'
          },

          savebtn: {
            marginTop: '40px',
            marginBottom: '40px',
            width: '195px',
            height: '60px',
      
            background: '#6418C3',
      
            boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.04)',
            borderRadius: '14px',
      
            fontFamily: 'Cairo',
            fontStyle: 'normal',
            fontWeight: '700',
            fontSize: '18px',
            lineHeight: '24px',
      
            color: '#FFFFFF'
          },
    }
  }
 
  
  export default Style