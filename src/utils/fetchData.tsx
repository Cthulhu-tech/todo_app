export const FetchDataTodo = (url: string, data: number, jwt: string | null, method = "DELETE") => {

    return fetch(process.env.REACT_APP_SERVER + url,
                {
                    mode: 'cors',
                    redirect: 'follow',
                    credentials: "include",
                    method,

                    headers: {

                        'Authorization': `Bearer ${jwt}`,
                        'Content-type': 'application/json',
                        'Accept': 'application/json'

                    },

                    body: JSON.stringify({id: data})

                })
                .then((response) => {

                    return response.json();

                })

}