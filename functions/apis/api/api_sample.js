export function onRequest(context) {
    let objRespose = [
        {
            "Id": "1",
            "Name":"Arun"
        },
        {
            "Id": "2",
            "Name":"Rajesh"
        }
    ];
    return new Response(JSON.stringify(objRespose));
}