/**
 * Welcome to Cloudflare Workers! This is your first worker.
 *
 * - Run `npm run dev` in your terminal to start a development server
 * - Open a browser tab at http://localhost:8787/ to see your worker in action
 * - Run `npm run deploy` to publish your worker
 *
 * Bind resources to your worker in `wrangler.jsonc`. After adding bindings, a type definition for the
 * `Env` object can be regenerated with `npm run cf-typegen`.
 *
 * Learn more at https://developers.cloudflare.com/workers/
 */

/**"We create a KV Storage Namespace called URLS, which is like a storage cabinet.
Cloudflare gives this URLS storage an ID (e.g., "abbgbsabxanx"), which we register in wrangler.toml.
Inside URLS, each short URL acts as a key, and the original long URL is its value.
Key: "abcd123" → Value: "https://example.com"
Key: "xyz789"  → Value: "https://google.com
Cloudflare automatically injects URLS into env, so we can use env.URLS in our code to store and retrieve URLs." */





export interface Env{

	URLS:KVNamespace;
}
export default {
	async fetch(request:Request, env:Env): Promise<Response> {
		const url=new URL(request.url)
		if(url.pathname==="/shorten" && request.method==="POST"){
			return  convert(request,env,url)
		}
		
		if(url.pathname.startsWith("/")){
			const shortcode=url.pathname.slice(1);
			return redirect(request,env,shortcode)
		}
		return new Response("ERROR",{status:500})
	},
} satisfies ExportedHandler<Env>;
		async function convert(request:Request,env:Env,url:URL){
			
			type reqbody={
				longurl:string;
			 }
			 try{
				if (!env.URLS) {
					return new Response("KV Namespace URLS is not defined", { status: 500 });
				  }
				
					const body=await request.json() as reqbody;
					const {longurl}=body;
					
					  
					if (!longurl || typeof longurl !== "string") {
						return new Response("Invalid URL", { status: 400 });
					  }
					  
					const shortcode=Math.random().toString(36).slice(2,8);
					await env.URLS.put(shortcode,longurl)
					return new Response(JSON.stringify({shortcut:`${request.url}/${shortcode}`,short:shortcode}),{headers:{"Content-type":"application/json"}})
		
				}
				catch(error:any){
					return new Response(error.message,{status:500})
				}
               
			 }
			 
			
			
		

		async function redirect(request:Request,env:Env,shortcode:string){
		try{
			console.log("hello")
            const longurl=await env.URLS.get(shortcode);
			if(!longurl){
				return new Response("URL NOT FOUND",{status:404})
			}
			return Response.redirect(longurl,301)   //THE REDIRECT HAS TWO PARAMETERS URL AND STATUS CODE
		}	
		catch(error:any){
                    return new Response(error.message,{status:404})
		}


		}
		
	

