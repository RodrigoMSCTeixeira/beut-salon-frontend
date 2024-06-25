import * as https from "http";

export type HttpRequest = {
  url: string;
  method: string;
  body?: any;
  headers: any;
};

interface HttpClient<R = any> {
  get getRequest(): Promise<R>;
}

export default class NodeHttpClientAdapter implements HttpClient {
  private _baseUrl = process.env.apiBaseUrl;
  private _data: HttpRequest;

  constructor(data: HttpRequest) {
    this._data = data;
  }

  private async fetch(): Promise<{
    statusCode: number;
    data: any;
  }> {
    return new Promise((resolve, reject) => {
      const parsedUrl = new URL(`${this._baseUrl}/${this._data.url}`);

      const options: https.RequestOptions = {
        hostname: parsedUrl.hostname,
        port: parsedUrl.port,
        path: parsedUrl.pathname + parsedUrl.search,
        method: this._data.method,
        headers: {
          ...this._data.headers,
          // "Content-Type": "application/json; charset=UTF-8",
          // "Content-Length": Buffer.byteLength(JSON.stringify(this._data.body)),
        },
      };

      const req = https.request(options, (res) => {
        let responseData = "";

        res.on("data", (chunk) => {
          responseData += chunk;
        });

        res.on("end", () => {
          try {
            const json = JSON.parse(responseData);
            resolve({
              statusCode: res.statusCode ?? 200,
              data: json,
            });
          } catch (error: any) {
            reject(new Error(`Failed to parse response: ${error.message}`));
          }
        });
      });

      req.on("error", (error) => {
        reject(new Error(`Failed to parse response: ${error.message}`));
      });

      req.on("timeout", () => {
        req.destroy();
        reject(new Error("Request timeout"));
      });

      req.setTimeout(50000);

      if (this._data.body) {
        req.write(JSON.stringify(this._data.body));
      }

      req.end();
    });
  }

  private async request(): Promise<{
    statusCode: number;
    data: any;
  }> {
    let fetchResponse: any;
    let responseStatus: number;

    try {
      console.log("Rota no adapter: ", `${this._baseUrl}/${this._data.url}`);
      console.log("parametros: ", this._data);
      const response = await this.fetch();

      responseStatus = response.statusCode;

      fetchResponse = response.data;
    } catch (error) {
      const _error = error as Error;
      throw new Error(_error?.message);
    }

    return {
      statusCode: responseStatus,
      data: fetchResponse,
    };
  }

  get getRequest(): Promise<{
    statusCode: number;
    data: any;
  }> {
    return this.request();
  }
}
