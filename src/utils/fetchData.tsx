export const FetchDataTodo = (url: string, data: number, jwt: string | null) => {

    return fetch(process.env.REACT_APP_SERVER + url,
                {
                    method: 'DELETE',
                    headers: {

                        'Authorization': `Bearer ${jwt}`

                    },

                    body: JSON.stringify(data)

                })
                .then((response) => {

                    return response.json();

                })

}