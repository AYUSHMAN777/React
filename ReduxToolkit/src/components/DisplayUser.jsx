import { useDispatch } from "react-redux";
import { UseSelector, useSelector } from "react-redux/es/hooks/useSelector";
import styled from "styled-components";


const DisplayUser = () => {
    const dispatch = useDispatch();

    const data = useSelector((state) => {
        return state.users;
    })
    const deleteuser=(user)=>{
        dispatch(removeUsers(user))
    }
    return
    <wrapper>
        {
            data.map((users, id) => {
                return <li key={id}>{users}
                    <button className="btn-delete" onClick={() => deleteuser(id)}>
                        <MDDeleteForever className="delete-icon" />
                    </button>

                </li>
            })
        }
    </wrapper>
}

export default DisplayUser;