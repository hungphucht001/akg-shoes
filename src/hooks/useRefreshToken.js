// import { post } from '~/utils/request';
import { useDispatch } from 'react-redux'
import { setAuth } from '~/redux/actions'
import * as authApi from '~/services/authApi'

const useRefreshToken = () => {

    const refresh = async () => {
        // const dispatch = useDispatch();
        const token = localStorage.getItem('refreshToken')
        const response = await authApi.refresh(token);
        if (response.accessToken) {
            localStorage.setItem('accessToken', response.accessToken)
            // dispatch(setAuth(response.accessToken))
        }
        return response.accessToken;
    }
    return refresh;
};

export default useRefreshToken;