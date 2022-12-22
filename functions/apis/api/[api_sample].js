export function onRequest(context) {
    let strId = context.params.api_sample;
    let arrData = [
        {
            "Id": "1",
            "Name": "Arun"
        },
        {
            "Id": "2",
            "Name": "Rajesh"
        }
    ];
    return new Response(JSON.stringify(arrData.find(obj => obj["Id"] == strId)));
}