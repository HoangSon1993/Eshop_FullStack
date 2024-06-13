using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace EshopAPI.Models
{
    public class ProductType
    {
        public int Id { get; set; }

        public string Name { get; set; }

        public bool Status { get; set; }
    }
}
