using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;

using System.Text.Json;
using System.Text.Json.Serialization;
using System.Net.Http;
using Newtonsoft.Json.Linq;
using Backend.Models;
using Newtonsoft.Json;
using System.IO;
using System.Web.Helpers;
using Microsoft.Extensions.Configuration;

namespace Backend.Controllers
{
    [ApiController]
    [Route("api/cryptos")]
    public class CryptoController : ControllerBase
    {

        private readonly IConfiguration _config;
        private readonly ILogger<CryptoController> _logger;



        public CryptoController(ILogger<CryptoController> logger, IConfiguration config)
        {
            _logger = logger;
            _config = config;
        }

        [HttpGet]
        public async Task<IList<CryptoCoin>> GetAsync()
        {

            HttpClient client = new HttpClient();
            IList<CryptoCoin> cryptos = new List<CryptoCoin>();

            client.DefaultRequestHeaders.Add("X-CMC_PRO_API_KEY", _config.GetValue<string>("APIKEY_TEST"));
            client.DefaultRequestHeaders.Add("Accepts", "application/json");

            try
            {
                var url_test = "https://sandbox-api.coinmarketcap.com/v1/cryptocurrency/quotes/latest?symbol=BTC,ETH,BNB,USDT,ADA";
                var url_pro = "https://pro-api.coinmarketcap.com/v1/cryptocurrency/quotes/latest?symbol=BTC,ETH,BNB,USDT,ADA";
                
                HttpResponseMessage response = await client.GetAsync(url_test);
                response.EnsureSuccessStatusCode();

                string responseBody = await response.Content.ReadAsStringAsync();

                //Crypto cryptos = new Crypto(responseBody);

                string[] symbols = new string[] { "BTC", "ETH", "BNB", "USDT", "ADA" };

                JObject obj = JObject.Parse(responseBody);

                for (int i = 0; i < 5; i++)
                {
                    string nameCoin = obj["data"][symbols[i]]["symbol"].ToString();
                    double priceCoin = Double.Parse(obj["data"][symbols[i]]["quote"]["USD"]["price"].ToString());

                    CryptoCoin cr = new CryptoCoin
                    {
                        id = i + 1,
                        name = nameCoin,
                        price = priceCoin
                    };

                    cryptos.Add(cr);
                }

                return cryptos;
            }
            catch (HttpRequestException)
            {
                return null;
            }
           
        }

        [Route("convert/{name}/{quantity}")]
        [HttpGet]
        public async Task<IList<CryptoCoin>> GetAsyncConverted(string name, double quantity)
        {

            HttpClient client = new HttpClient();
            IList<CryptoCoin> convertions = new List<CryptoCoin>();
            string[] symbolsAux = new string[] { "BTC", "ETH", "BNB", "USDT", "ADA" };

            var symbols = symbolsAux.Where(s => s != name).ToArray();
            var paramSymbols = String.Join(",", symbols);

            client.DefaultRequestHeaders.Add("X-CMC_PRO_API_KEY", _config.GetValue<string>("APIKEY_TEST"));
            client.DefaultRequestHeaders.Add("Accepts", "application/json");

            try
            {
                var url_test = "https://sandbox-api.coinmarketcap.com/v1/cryptocurrency/quotes/latest?symbol=" + name + "&convert=" + paramSymbols;
                var url_pro = "https://pro-api.coinmarketcap.com/v1/cryptocurrency/quotes/latest?symbol=" + name + " &convert = " + paramSymbols;

                HttpResponseMessage response = await client.GetAsync(url_test);
                response.EnsureSuccessStatusCode();

                string responseBody = await response.Content.ReadAsStringAsync();

                JObject obj = JObject.Parse(responseBody);

                for (int i = 0; i < 4; i++)
                {
                    
                    double priceCoin = Double.Parse(obj["data"][name]["quote"][symbols[i]]["price"].ToString());

                    CryptoCoin cr = new CryptoCoin
                    {
                        id = i + 1,
                        name = symbols[i],
                        price = priceCoin * quantity
                    };

                    convertions.Add(cr);
                }

                return convertions;
            }
            catch (HttpRequestException)
            {
                return null;
            }

        }
    }
}
