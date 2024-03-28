import { dataAPI } from "../api/data-api";
// import {verify, refresh, logout} from "./auth-reducer";
import authReducer, { verify, refresh, logout } from "./auth-reducer";
const INITIALIZED_SUCCESS = 'INITIALIZED_SUCCESS';
const SET_DATA_VEHICLE = 'SET_DATA_VEHICLE'
const SET_DATA_ENGINE = 'SET_DATA_ENGINE'
const SET_DATA_TRANSMISSION = 'SET_DATA_TRANSMISSION'
const SET_DATA_DRIVEAXLE = 'SET_DATA_DRIVEAXLE'
const SET_DATA_STEERINGAXLE = 'SET_DATA_TEERINGAXLE'
const SET_DATA_TYPEOFMAITENANCE = 'SET_DATA_TYPEOFMAITENANCE'
const SET_DATA_ORGANIZATIONOFMAITENANCE = 'SET_DATA_ORGANIZATIONOFMAITENANCE'
const SET_DATA_FAILURENODE = 'SET_DATA_FAILURENODE'
const SET_DATA_RECOVERYMETHOD = 'SET_DATA_RECOVERYMETHOD'
const SET_DATA_CLIENT = 'SET_DATA_CLIENT'
const SET_DATA_SERVICECOMPANY = 'SET_DATA_SERVICECOMPANY'
const SET_DATA_CAR = 'const SET_DATA_CAR'
const SET_DATA_MAINTENANCE = 'SET_DATA_MAINTENANCE'
const SET_DATA_COMPLAINT = 'SET_DATA_COMPLAINT'
const SET_DATA_SEARCH = 'SET_DATA_SEARCH'
const SET_DATA_EXIT = 'SET_DATA_EXIT'

let initialState = {
    initialized: false,
    dataVehicle: null,
    dataEngine: null,
    dataTransmission: null,
    dataDriveAxle: null,
    dataSteeringAxle: null,
    dataTypeOfMaintenance: null,
    dataOrganizationOfMaintenance: null,
    dataFailureNode: null,
    dataRecoveryMethod: null,
    dataClient: null,
    dataServiceCompany: null,
    dataCar: null,
    dataMaintenance: null,
    dataComplaint: null,
    dataSearch: null,
};

const appReducer = (state = initialState, action) => {
    switch (action.type) {
        case INITIALIZED_SUCCESS:
            return {
                ...state,
                initialized: true
            }
        case SET_DATA_VEHICLE:
            return {
                ...state,
                ...action.payload
                }
        case SET_DATA_ENGINE:
            return {
                ...state,
                ...action.payload
                }
        case SET_DATA_TRANSMISSION:
            return {
                ...state,
                ...action.payload
                }
        case SET_DATA_DRIVEAXLE:
            return {
                ...state,
                ...action.payload
                }
        case SET_DATA_STEERINGAXLE:
            return {
                ...state,
                ...action.payload
                }
        case SET_DATA_TYPEOFMAITENANCE:
            return {
                ...state,
                ...action.payload
                }
        case SET_DATA_ORGANIZATIONOFMAITENANCE:
            return {
                ...state,
                ...action.payload
                }
        case SET_DATA_FAILURENODE:
            return {
                ...state,
                ...action.payload
                }
        case SET_DATA_RECOVERYMETHOD:
            return {
                ...state,
                ...action.payload
                }
        case SET_DATA_SERVICECOMPANY:
                    return {
                        ...state,
                        ...action.payload
                        }
        case SET_DATA_CLIENT:
            return {
                ...state,
                ...action.payload
                }
        case SET_DATA_CAR:
            return {
                ...state,
                ...action.payload
                }
        case SET_DATA_MAINTENANCE:
            return {
                ...state,
                ...action.payload
                }
        case SET_DATA_COMPLAINT:
            return {
                ...state,
                ...action.payload
                }
        case SET_DATA_SEARCH:
            return {
                ...state,
                ...action.payload
                }
        case SET_DATA_EXIT:
            return {
                ...state,
                ...action.payload
                }

        default:
            return state;
    }
}

export const initializedSuccess = () => ({type: INITIALIZED_SUCCESS});

export const setdataVehicle =
    (dataVehicle) => ({
        type: SET_DATA_VEHICLE, payload: {dataVehicle}
})

export const getdataVehicle = (dataVehicle) => async (dispatch) => {
    dispatch(setdataVehicle(dataVehicle));
    } 

export const setdataEngine =
    (dataEngine) => ({
        type: SET_DATA_ENGINE, payload: {dataEngine}
})

export const getdataEngine = (dataEngine) => async (dispatch) => {
    dispatch(setdataEngine(dataEngine));
    } 

export const setdataTransmission =
    (dataTransmission) => ({
        type: SET_DATA_TRANSMISSION, payload: {dataTransmission}
})

export const getdataTransmission = (dataTransmission) => async (dispatch) => {
    dispatch(setdataTransmission(dataTransmission));
    } 

export const setdataDriveAxle =
    (dataDriveAxle) => ({
        type: SET_DATA_DRIVEAXLE, payload: {dataDriveAxle}
})

export const getdataDriveAxle = (dataDriveAxle) => async (dispatch) => {
    dispatch(setdataDriveAxle(dataDriveAxle));
    }

export const setdataSteeringAxle =
    (dataSteeringAxle) => ({
        type: SET_DATA_STEERINGAXLE, payload: {dataSteeringAxle}
})

export const getdataSteeringAxle = (dataSteeringAxle) => async (dispatch) => {
    dispatch(setdataSteeringAxle(dataSteeringAxle));
    }

export const setdataTypeOfMaintenance =
    (dataTypeOfMaintenance) => ({
        type: SET_DATA_TYPEOFMAITENANCE, payload: {dataTypeOfMaintenance}
})

export const getdataTypeOfMaintenance = (dataTypeOfMaintenance) => async (dispatch) => {
    dispatch(setdataTypeOfMaintenance(dataTypeOfMaintenance));
    }

export const setdataOrganizationOfMaintenance =
    (dataOrganizationOfMaintenance) => ({
        type: SET_DATA_ORGANIZATIONOFMAITENANCE, payload: {dataOrganizationOfMaintenance}
})

export const getdataOrganizationOfMaintenance = (dataOrganizationOfMaintenance) => async (dispatch) => {
    dispatch(setdataOrganizationOfMaintenance(dataOrganizationOfMaintenance));
    }

export const setdataFailureNode =
    (dataFailureNode) => ({
        type: SET_DATA_FAILURENODE, payload: {dataFailureNode}
})

export const getdataFailureNode = (dataFailureNode) => async (dispatch) => {
    dispatch(setdataFailureNode(dataFailureNode));
    }

export const setdataRecoveryMethod =
    (dataRecoveryMethod) => ({
        type: SET_DATA_RECOVERYMETHOD, payload: {dataRecoveryMethod}
})

export const getdataRecoveryMethod = (dataRecoveryMethod) => async (dispatch) => {
    dispatch(setdataRecoveryMethod(dataRecoveryMethod));
    }

export const setdataServiceCompany =
    (dataServiceCompany) => ({
        type: SET_DATA_SERVICECOMPANY, payload: {dataServiceCompany}
})

export const getdataServiceCompany = (dataServiceCompany) => async (dispatch) => {
    dispatch(setdataServiceCompany(dataServiceCompany));
    }

export const setdataClient =
    (dataClient) => ({
        type: SET_DATA_CLIENT, payload: {dataClient}
})

export const getdataClient = (dataClient) => async (dispatch) => {
    dispatch(setdataClient(dataClient));
    }

export const setdataCar =
    (dataCar) => ({
        type: SET_DATA_CAR, payload: {dataCar}
})

export const getdataCar = (dataCar) => async (dispatch) => {
    dispatch(setdataCar(dataCar));
    }

    export const setdataCarFull =
    (dataCar) => ({
        type: SET_DATA_CAR, payload: {dataCar}
})

export const getdataCarFull = (dataCar) => async (dispatch) => {
    dispatch(setdataCarFull(dataCar));
    }

export const setdataMaintenance =
    (dataMaintenance) => ({
        type: SET_DATA_MAINTENANCE, payload: {dataMaintenance}
})

export const getdataMaintenance = (dataMaintenance) => async (dispatch) => {
    dispatch(setdataMaintenance(dataMaintenance));
    }

export const setdataComplaint =
    (dataComplaint) => ({
        type: SET_DATA_COMPLAINT, payload: {dataComplaint}
})

export const getdataComplaint = (dataComplaint) => async (dispatch) => {
    dispatch(setdataComplaint(dataComplaint));
    }

export const setdataExit =
    ( initialized, dataVehicle, dataEngine, dataTransmission,
        dataDriveAxle, dataSteeringAxle, dataTypeOfMaintenance, dataOrganizationOfMaintenance,
        dataFailureNode, dataRecoveryMethod, dataClient, dataServiceCompany, dataCar, dataMaintenance,
        dataComplaint, dataSearch ) => ({
        type: SET_DATA_EXIT, payload: {initialized, dataVehicle, dataEngine, dataTransmission,
            dataDriveAxle, dataSteeringAxle, dataTypeOfMaintenance, dataOrganizationOfMaintenance,
            dataFailureNode, dataRecoveryMethod, dataClient, dataServiceCompany, dataCar, dataMaintenance,
            dataComplaint, dataSearch}
})



export const initializeApp = (access) => async (dispatch) => {
    console.log(access)
    let responseVehicle = await dataAPI.getdataVehicle();
    if (responseVehicle.status === 200) {
        dispatch(getdataVehicle(responseVehicle.data));
    };
        
    let responseEngine = await dataAPI.getdataEngine();
    if (responseEngine.status === 200) {
        dispatch(getdataEngine(responseEngine.data));
    };

    let responseTransmission = await dataAPI.getdataTransmission();
    if (responseTransmission.status === 200) {
        dispatch(getdataTransmission(responseTransmission.data));
    };

    let responseDriveAxle = await dataAPI.getdataDriveAxle();
    if (responseDriveAxle.status === 200) {
        dispatch(getdataDriveAxle(responseDriveAxle.data));
    };

    let responseSteeringAxle = await dataAPI.getdataSteeringAxle();
    if (responseSteeringAxle.status === 200) {
        dispatch(getdataSteeringAxle(responseSteeringAxle.data));
    };

    let responseTypeOfMaintenance = await dataAPI.getdataTypeOfMaintenance();
    if (responseTypeOfMaintenance.status === 200) {
        dispatch(getdataTypeOfMaintenance(responseTypeOfMaintenance.data));
    };

    let responseOrganizationOfMaintenance = await dataAPI.getdataOrganizationOfMaintenance();
    if (responseOrganizationOfMaintenance.status === 200) {
        dispatch(getdataOrganizationOfMaintenance(responseOrganizationOfMaintenance.data));
    };

    let responseFailureNode = await dataAPI.getdataFailureNode();
    if (responseFailureNode.status === 200) {
        dispatch(getdataFailureNode(responseFailureNode.data));
    };

    let responseRecoveryMethod = await dataAPI.getdataRecoveryMethod();
    if (responseRecoveryMethod.status === 200) {
        dispatch(getdataRecoveryMethod(responseRecoveryMethod.data));
    };

    let responseServiceCompany = await dataAPI.getdataServiceCompany();
    if (responseServiceCompany.status === 200) {
        dispatch(getdataServiceCompany(responseServiceCompany.data));
    };

    let responseClient = await dataAPI.getdataClient();
    if (responseClient.status === 200) {
        dispatch(getdataClient(responseClient.data));
    };

    let responseCar = await dataAPI.getdataCar();
    if (responseCar.status === 200) {
        dispatch(getdataCar(responseCar.data));
    };

    if (access !== undefined && access !== null  ){
        let responseCarFull = await dataAPI.getdataCarFull(access);
        if (responseCarFull.status === 200) {
            console.log('car')
            dispatch(getdataCarFull(responseCarFull.data));
        };

    let responseMaintenance = await dataAPI.getdataMaintenance(access);
        if (responseMaintenance.status === 200) {
            console.log('maintenance')
            dispatch(getdataMaintenance(responseMaintenance.data));
        };
    
    let responseComplaint = await dataAPI.getdataComplaint(access);
        if (responseComplaint.status === 200) {
            console.log('complaint')
            dispatch(getdataComplaint(responseComplaint.data));
        };  

    }
      

        dispatch(initializedSuccess());
        return "Ок!";
    }


export const addcar = (access, refreshznach, serialNumberCar, vehicleModel, engineModel, serialNumberEngine,
        transmissionModel, serialNumberTransmission, driveAxleModel, serialNumberDriveAxle, 
        steeringAxleModel, serialNumberSteeringAxle, supplyContract, shippingDate,
        consignee, deliveryAddress, equipment, client, serviceCompany) => async (dispatch) => {

        let responseaddcar = dataAPI.setaddcar(access, refreshznach, serialNumberCar, vehicleModel, engineModel, serialNumberEngine,
            transmissionModel, serialNumberTransmission, driveAxleModel, serialNumberDriveAxle, 
            steeringAxleModel, serialNumberSteeringAxle, supplyContract, shippingDate,
            consignee, deliveryAddress, equipment, client, serviceCompany);
            dispatch(initializeApp(access))
      }

export const addmaintenance = (access, refreshznach, typeOfMaintenance, dataOfMaintenance, operatingTime, workOrderNumber,
        workOrderDate, organizationOfMaintenance, car, serviceCompany, 
        ) => async (dispatch) => {

        let responseaddcar = dataAPI.setaddmaintenance(access, refreshznach, typeOfMaintenance, dataOfMaintenance, operatingTime, workOrderNumber,
            workOrderDate, organizationOfMaintenance, car, serviceCompany);
            dispatch(initializeApp(access))
      }

export const addcomplaint = (access, refreshznach, dateOfRefusal, operatingTime, failureNode, descriptionOfFailure,
    recoveryMethod, sparePartsUsed, restoreDate, car, 
        ) => async (dispatch) => {

        let responseaddcar = dataAPI.setaddcomplaint(access, refreshznach, dateOfRefusal, operatingTime, failureNode, descriptionOfFailure,
            recoveryMethod, sparePartsUsed, restoreDate, car);
            dispatch(initializeApp(access))
      }
    

export const setSearch =
    (dataSearch) => ({
        type: SET_DATA_SEARCH, payload: {dataSearch}
        })

export const search = (search) => async (dispatch) => {
    let responseSearch = await dataAPI.getSearch(search);
      if (responseSearch.status === 200) {
        console.log(responseSearch)
        dispatch(setSearch(responseSearch.data));
      }
                }

export default appReducer;