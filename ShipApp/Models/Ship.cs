using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace ShipApp.Models
{
	public class Ship
	{
		[Key]
		public int Number { get; set; }

		[Required]
		public string Name { get; set; }

		public int YearOfConstruction { get; set; }

		[Required]
		public double LengthOfVessel {get; set; }

		[Required]
		public double VesselWidth { get; set; }

		public int GrossTonnage { get; set; }

		public int NetTonnage { get; set; }

		// a ajouter plus tard
		// [Required]
		// public User user { get; set; }
	}
}
