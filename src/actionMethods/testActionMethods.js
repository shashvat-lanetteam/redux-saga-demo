import axios from 'axios';
import { call, put, takeEvery } from 'redux-saga/effects';

export function* testForSaga(){
    console.log('click');
    const networkData=yield axios.get('https://api.myjson.com/bins/hs3qr').then((data)=>{
        return data.data
    }).catch((err)=>{console.log(err)});
    yield put({type:'test',payload:networkData});
}
function* mySaga() {
    yield takeEvery("testing", testForSaga);
}

export default mySaga;