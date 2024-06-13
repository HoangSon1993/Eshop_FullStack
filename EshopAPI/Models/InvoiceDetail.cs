using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Linq;
using System.Threading.Tasks;

namespace EshopAPI.Models
{
    public class InvoiceDetail
    {
        public int Id { get; set; }

        public int InvoiceId { get; set; }

        // Navigation reference property cho khóa ngoại đến Invoice
        public Invoice Invoice { get; set; }

        public int ProductId { get; set; }

        // Navigation reference property cho khóa ngoại đến Product
        public Product Product { get; set; }

        public int Quantity { get; set; }

        public int UnitPrice { get; set; }
    }
}
