using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using ShipApp.Data;
using ShipApp.Models;

namespace ShipApp.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ShipsController : ControllerBase
    {
        private readonly ShipAppContext _context;
        private readonly IDataRepository<Ship> _repo;

        public ShipsController(ShipAppContext context, IDataRepository<Ship> repo)
        {
            _context = context;
            _repo = repo;
        }

        // GET: api/Ships
        [HttpGet]
        public IEnumerable<Ship> GetShip()
        {
            return _context.Ship;
        }

        // GET: api/Ships/5
        [HttpGet("{id}")]
        public async Task<IActionResult> GetShip([FromRoute] int id)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            var ship = await _context.Ship.FindAsync(id);

            if (ship == null)
            {
                return NotFound();
            }

            return Ok(ship);
        }

        // PUT: api/Ships/5
        [HttpPut("{id}")]
        public async Task<IActionResult> PutShip([FromRoute] int id, [FromBody] Ship ship)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            if (id != ship.Number)
            {
                return BadRequest();
            }

            _context.Entry(ship).State = EntityState.Modified;

            try
            {
                _repo.Update(ship);
                var save = await _repo.SaveAsync(ship);
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!ShipExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return NoContent();
        }

        // POST: api/Ships
        [HttpPost]
        public async Task<IActionResult> PostShip([FromBody] Ship ship)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            _repo.Add(ship);
            var save = await _repo.SaveAsync(ship);

            return CreatedAtAction("GetShip", new { id = ship.Number }, ship);
        }

        // DELETE: api/Ships/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteShip([FromRoute] int id)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            var ship = await _context.Ship.FindAsync(id);
            if (ship == null)
            {
                return NotFound();
            }

            _repo.Delete(ship);
            var save = await _repo.SaveAsync(ship);

            return Ok(ship);
        }

        private bool ShipExists(int id)
        {
            return _context.Ship.Any(e => e.Number == id);
        }
    }
}