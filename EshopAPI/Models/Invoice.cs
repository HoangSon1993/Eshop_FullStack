using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using System.ComponentModel;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace EshopAPI.Models
{
    public class Invoice
    {
        public int Id { get; set; }

        public string Code { get; set; }

        public int AccountId { get; set; }

        // Navigation reference property cho khóa ngoại đến Account 
        public Account Account { get; set; }

        public DateTime IssuedDate { get; set; }

        public string ShippingAddress { get; set; }

        public string ShippingPhone { get; set; }

        public int Total { get; set; }

        public bool Status { get; set; }
    }
}
