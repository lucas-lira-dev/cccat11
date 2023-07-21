import AuthGateway from "../../application/gateway/AuthGateway";
import HttpClient from "../http/HttpClient";

export default class AuthHttpGateway implements AuthGateway {

	constructor (readonly httpClient: HttpClient) {
	}
	
	async verify(token: string): Promise<any> {
		const output = await this.httpClient.post(`http://localhost:3004/verify`, { token });
		return output;
	}

}
