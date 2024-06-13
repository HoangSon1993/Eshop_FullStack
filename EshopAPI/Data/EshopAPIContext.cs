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

        public DbSet<EshopAPI.Models.Account> Account { get; set; } = default!;
    }
}
