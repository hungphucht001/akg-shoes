import * as request from '~/utils/request';

export const login = async (values) => {
    try {
        const res = await request.post('/auth/login', {
            username: values.username,
            password: values.password
        })
        return res
    }
    catch (error) {
        console.log(error);
    }
}

export const refresh = async (values) => {
    try {
        const res = await request.post('/auth/refresh', {
            token: values
        })
        return res
    }
    catch (error) {
        console.log(error);
    }
}