import {SET_SMURF_NAME, TEST_PUT_FUNCTION, FETCH_SMURF_DATA, SAVE_SMURF_DATA} from './constants';

export function setSmurfName(smurfName){
    return {
       type: SET_SMURF_NAME,
       smurfName,
    }
}

export function fetchSmurfData(){
    return {
       type: FETCH_SMURF_DATA,
    }
}

export function saveSmurfData(response){
    return {
       type: SAVE_SMURF_DATA,
       response,
    }
}

export function testPutFunction(){
    return {
       type: TEST_PUT_FUNCTION,
    }
}