const DateleMeleStyles = () => {
  return {
    DA: {
      display: 'flex',
      flexWrap: 'wrap',
      justifyContent: 'spaceBetween'
    },
    h1: {
      width: '251px',
      height: '64px',

      fontFamily: 'Cairo',
      fontStyle: 'normal',
      fontWeight: '700',
      fontSize: '32px',
      lineHeight: '64px',
      marginBottom: '40px',
      /* identical to box height */

      /* Black */

      color: '#202020'
    },

    root: {
      width: '75%',
      height: '50px',
      marginTop: '15px',
      marginBottom: '15px'

      /* Grey-03 */
    },

    label: {
      marginTop: '15px',
      marginBottom: '15px',
      width: '334px',
      height: '22px',

      fontFamily: 'Open Sans',
      fontStyle: 'normal',
      fontWeight: '700',
      fontSize: '16px',
      lineHeight: '22px',
      /* identical to box height */

      letterSpacing: '1px',

      color: '#C7C7C7'
    },
    butonActualizare: {
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

    imagine: {
      marginLeft: '16px',
      height: '60px',
      width: '60px'
    },

    pozaField: {
      display: 'flex',
      justifyContent: 'spaceBetween',
      width: '75%',
      height: '70px',
      marginTop: '25px',
      marginBottom: '15px',
      padding: '3px',
      /* White */

      background: '#FFFFFF',
      /* Shadow02 */

      boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.12)',
      borderRadius: '14px'
    },

    schimbaPoza: {
      marginLeft: 'auto'
    }
  }
}

export default DateleMeleStyles
