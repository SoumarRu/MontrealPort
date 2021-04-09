using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using ShipApp.Models;

namespace ShipApp.Data
{
    public class ShipAppContext : DbContext
    {
        public ShipAppContext (DbContextOptions<ShipAppContext> options)
            : base(options)
        {
        }

        public DbSet<Ship> Ship { get; set; }

        public DbSet<User> User { get; set; }
    }
}
