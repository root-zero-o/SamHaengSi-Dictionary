import {db} from "../../firebase";
import { collection, getDocs, getDoc, addDoc, doc, deleteDoc } from "firebase/firestore";

// 1단계 : 액션 타입 만들기
const LOAD = 'post/LOAD';
const POST_TEXT = 'post/POST_TEXT';
const DELETE = 'post/DELETE'

// 2단계 : 액션 생성함수 만들기

export const loadSamData = (payload) => {
    return {type: LOAD, payload}
}

export const postText = (data) => ({ type: POST_TEXT, data: data});
export const deleteSam = (id) => ({type: DELETE, id: id});

// 미들웨어
export const loadSamFB = () => {
    return async function (dispatch) {
        const sam_data = await getDocs(collection(db, "sam-haeng-si"));
        let sam_list = [];
        sam_data.forEach((doc) => {
            sam_list.push({id: doc.id,...doc.data()}); 
        });
        dispatch(loadSamData(sam_list)); 
    }
}

export const addFB = (sam) => {
    return async function (dispatch) {
        const  samRef  = await addDoc(collection(db, "sam-haeng-si"), sam);
        const _sam = await getDoc(samRef);
        const sam_data = {id: _sam.id, ..._sam.data()};
        dispatch(postText(sam_data));
    }
}

export const deleteFB = (id) => {
    return async function (dispatch, getState) {
        const docRef = doc(db, "sam-haeng-si", id);
        await deleteDoc(docRef);
        dispatch(deleteSam(id))
    }
}


// 3단계 : 초기 상태 선언
const initialState = {
    list : []
}; // 배열 안 요소는 객체

// 4단계 : 리듀서 선언
export default function post (state = initialState, action={}) {
    switch (action.type) {
        case LOAD: {
            return {list: action.payload}
        }
        case POST_TEXT: {
            return {list: [...state.list]}
        }
        case DELETE: {
            return {list: state.list.filter(value => value.id !== action.id)}
        }
        default: {
            return state;
        }
    }
};

