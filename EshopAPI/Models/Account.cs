﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using System.ComponentModel;
using System.ComponentModel.DataAnnotations;

namespace EshopAPI.Models
{
    public class Account
    {
        public int Id { get; set; }

        public string Username { get; set; }

        public string Password { get; set; }

        public string Email { get; set; }

        public string Phone { get; set; }

        public string Address { get; set; }

        public string FullName { get; set; }

        public bool IsAdmin { get; set; }

        public string Avatar { get; set; }

        public bool Status { get; set; }
    }
}
