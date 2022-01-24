using Newtonsoft.Json.Linq;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Backend.Models
{
    public class CryptoCoin
    {
        public int id { get; set; }
        public string name { get; set; }
        public double price { get; set; }

    }
}
