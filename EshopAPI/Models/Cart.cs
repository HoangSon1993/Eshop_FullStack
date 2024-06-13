﻿using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace EshopAPI.Models
{
    public class Cart
    {
        public int Id { get; set; }

        public int AccountId { get; set; }

        // Navigation reference property cho khóa ngoại đến Account
        public Account Account { get; set; }

        public int ProductId { get; set; }

        // Navigation reference property cho khóa ngoại đến Product
        public Product Product { get; set; }

        public int Quantity { get; set; }
    }
}