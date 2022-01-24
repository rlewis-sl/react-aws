const BASE_URL = 'https://r8muv9cs77.execute-api.eu-west-1.amazonaws.com/widgets'

export async function getWidgetsAsync() {
    var response = await fetch(BASE_URL);
    return response.json();
}

export async function getWidgetAsync(id) {
    var response = await fetch(BASE_URL + '/' + id);
    return response.json();
}
