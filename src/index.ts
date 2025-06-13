import axios, { AxiosInstance, AxiosRequestConfig, AxiosResponse } from 'axios'

interface QueryParams {
   [key: string]: any
}

interface PostData {
   [key: string]: any
}

class API {
   private URI: string | undefined
   private apiKey: string | undefined
   private create: AxiosInstance

   constructor() {
      this.URI = process.env.API_ENDPOINT
      this.apiKey = process.env.API_KEY
      this.create = axios.create({
         baseURL: this.URI,
         timeout: 60000,
      })
   }

   /**
    * Perform a GET request to the API.
    * @param path - The endpoint path.
    * @param query - Query parameters.
    * @param apikey - Optional API key for authentication.
    * @param options - Optional Axios request configuration.
    * @returns The response data from the API.
    */
   async get(
      path: string = '/',
      query: QueryParams = {},
      apikey: string | undefined = this.apiKey,
      options: AxiosRequestConfig = {}
   ): Promise<any> {
      try {
         const params = new URLSearchParams({
            ...query,
            ...(apikey ? { apikey } : {}),
         } as Record<string, string>)

         const res: AxiosResponse = await this.create.get(path, {
            params,
            ...options,
         })
         return res.data
      } catch (error: any) {
         return { status: 400, error: error.message }
      }
   }

   /**
    * Perform a POST request to the API.
    * @param path - The endpoint path.
    * @param data - The data to send with the request.
    * @param apikey - Optional API key for authentication.
    * @param options - Optional Axios request configuration.
    * @returns The response data from the API.
    */
   async post(
      path: string = '/',
      data: PostData = {},
      apikey: string | undefined = this.apiKey,
      options: AxiosRequestConfig = {}
   ): Promise<any> {
      try {
         const res: AxiosResponse = await this.create.post(
            path,
            { ...data, ...(apikey ? { apikey } : {}) },
            { ...options }
         )
         return res.data
      } catch (error: any) {
         return { status: 400, error: error.message }
      }
   }
}

export default new API()