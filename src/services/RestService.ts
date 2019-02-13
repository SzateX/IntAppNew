import axios from 'axios';

export class RestService {
    public async getDataFromApi(lastIdChange: number): Promise<any> {
        try {
            const response = await axios.get('http://192.168.1.4:5000/restapi/change/?id=&id__gt=' + lastIdChange);
            return response.data;
        } catch (e) {
            alert(e);
        }
    }
}
