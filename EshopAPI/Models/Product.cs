using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace EshopAPI.Models
{
    public class Product
    {
        public int Id { get; set; }

        public string SKU { get; set; }

        public string Name { get; set; }

        public string Description { get; set; }

        public int Price { get; set; }

        public int Stock { get; set; }

        public int ProductTypeId { get; set; }

        // Navigation reference property cho khóa ngoại đến ProductType
        public ProductType ProductType { get; set; }

        public string Image { get; set; }

        public bool Status { get; set; }
    }
}
