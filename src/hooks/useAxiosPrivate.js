import { axiosPrivate } from "~/utils/request";
import { useEffect } from "react";
import useRefreshToken from "./useRefreshToken";
import { useSelector } from 'react-redux'
import { authSelecter } from '~/redux/selectors'
import { configConsumerProps } from "antd/lib/config-provider";

const useAxiosPrivate = () => {
    const refresh = useRefreshToken();
    const auth = useSelector(authSelecter)

    useEffect(() => {

        const requestIntercept = axiosPrivate.interceptors.request.use(
            config => {
                if (!config.headers['Authorization']) {
                    config.headers['Authorization'] = `Bearer ${auth?.accessToken}`;
                }
                return config;
            }, (error) => {
                return Promise.reject(error)
            }
        );
        const responseIntercept = axiosPrivate.interceptors.response.use(
            async res => {
                const prevRequest = res.config;
                const code = res.data.code

                if (code == 403) {
                    const newAccessToken = await refresh();
                    prevRequest.headers['Authorization'] = `Bearer ${newAccessToken}`;
                    return axiosPrivate(prevRequest);
                }
                return res;
            },
            async (error) => {
                const prevRequest = error.config;
                if (error.response.status === 403) {
                    const newAccessToken = await refresh();
                    console.log(1)
                    prevRequest.headers['Authorization'] = `Bearer ${newAccessToken}`;
                    return axiosPrivate(prevRequest);
                }
                return Promise.reject(error);
            }
        );

        return () => {
            axiosPrivate.interceptors.request.eject(requestIntercept);
            axiosPrivate.interceptors.response.eject(responseIntercept);
        }

    }, [auth, refresh])

    return axiosPrivate;
}

export default useAxiosPrivate;