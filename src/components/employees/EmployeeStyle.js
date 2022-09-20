import styles from 'assets/jss/styles'

const appStyle = () => {
  
    return {
      tableHeader: {
        backgroundColor: '#6418C3',
      },
      tableCells: {
        color: '#FFFFFF',
        
        // '&:first':{
        //     borderRadius: "14px",
        // }
      },
      tableRow: {

        color: "red",
        textAlign: true
      },
      imageStyle: {
        width: "105px",
        height: "105px",
        borderRadius: "26px",
        textAlign: "center",
        marginLeft: "auto",
        marginRight: "auto",
        display: "block"
      },
      employeeCard: {
        width: "275px",
        height: "400px",
        margin: "10px",
      },
      employeeCardHeader: {
        height: "1px"
      },
      employeeContentName: {
        textAlign: "center",
        fontWeight: "bold",
        fontSize: "18px"
      },
      employeeContentFunction: {
        textAlign: "center",
        color: "grey",
        fontSize: "14px"
      },
      employeeContentDepartament: {
        textAlign: "center",
        color: "purple",
        fontSize: "14px"
      },
      iconCardMyStyle: {
        marginTop: "10px",
        height: "50px"
      },
      filterStyles: {
        padding: "5px",
        marginBottom: "15px"
      },
      searchField:{
        borderRadius: "5px",
        borderStyle: "solid",
        color: "black",
        backgroundColor: "#f0edf7",
      },
      btnClass:{
        color: "black",
        height: "35px",
        "&:hover":{
            color: "grey"
        },
        "&:active":{
            color: "purple"
        }
      }
    }
  }
  
  export default appStyle