import axios from "axios";

interface IResponse {
    table: string,
    lastupdate: string,
    rates: {string: string}
}

class RatesService {
    async getRates(){
        const response = await axios.get<IResponse>("https://cdn.cur.su/api/latest.json")

        return response.data
    }
}

export default new RatesService();