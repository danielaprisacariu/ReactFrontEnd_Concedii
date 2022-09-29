export const initialState={
 hasChanged:0,
 managerConced:null,
 angajatConced:null,
 managerEN:null,
 angajatEN:null,
 managerFunc:null,
 angajatFunc:null,
 functie:null,
 managerDep:null,
 angajatDep:null,
 departament:null,
 managerSE:null,
 manager1TA:null,
 angajatTA:null,
 manager2TA:null,
 manageri:[],
 departamente:[],
 angajatiConced:[],
 angajatiEN:[],
 angajatiFunc:[],
 angajatiDepart:[],
 angajatiTA:[],
 manageri2TA:[],
 functii:[],
}

export function AAReducer(state,action){
    const{propertyName,value}=action
    switch(action.type){
      case 'OnPropertyChange':
        return{...state,[propertyName]:value}  
      default:
        throw new Error()
    }
}