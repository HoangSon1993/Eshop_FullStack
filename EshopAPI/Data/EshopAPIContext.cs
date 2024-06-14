using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using EshopAPI.Models;

namespace EshopAPI.Data
{
    public class EshopAPIContext : DbContext
    {
        public EshopAPIContext (DbContextOptions<EshopAPIContext> options)
            : base(options)
        {
        }

        public DbSet<EshopAPI.Models.Account> Accounts { get; set; } = default!;
        public DbSet<EshopAPI.Models.Product> Products { get; set; } = default!;
        public DbSet<EshopAPI.Models.Cart> Carts { get; set; } = default!;
        public DbSet<EshopAPI.Models.Invoice> Invoices { get; set; } = default!;
        public DbSet<EshopAPI.Models.InvoiceDetail> InvoiceDetails { get; set; } = default!;
        public DbSet<EshopAPI.Models.ProductType> ProductTypes { get; set; } = default!;
    }
}
